import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import * as crypto from "crypto";
import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";

// Верификация подписи от Telegram (официальный алгоритм)
function verifyTelegramAuth(data: Record<string, string>, botToken: string): boolean {
  const { hash, ...rest } = data;
  
  const checkString = Object.keys(rest)
    .sort()
    .map((k) => `${k}=${rest[k]}`)
    .join("\n");

  const secretKey = crypto
    .createHash("sha256")
    .update(botToken)
    .digest();

  const hmac = crypto
    .createHmac("sha256", secretKey)
    .update(checkString)
    .digest("hex");

  // Проверяем подпись и что данным не больше 10 минут
  const isValid = hmac === hash;
  const isFresh = (Date.now() / 1000 - parseInt(rest.auth_date)) < 600;
  
  return isValid && isFresh;
}

export async function GET(req: NextRequest) {
  const params = Object.fromEntries(req.nextUrl.searchParams.entries());
  
  const isValid = verifyTelegramAuth(params, process.env.TELEGRAM_BOT_TOKEN!);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid Telegram auth" }, { status: 401 });
  }

  const telegramId = params.id;
  const firstName = params.first_name;
  const username = params.username;

  // Ищем юзера по telegram_id в твоей таблице users
  const { data: existingUser } = await supabaseAdmin
    .from("users")
    .select("id_user, login")
    .eq("telegram_id", telegramId)
    .single();

  let userId: string;
  let userEmail: string;

  if (existingUser) {
    // Юзер уже есть — логиним
    userId = existingUser.id_user;
    userEmail = existingUser.login;
  } else {
    // Новый юзер — регистрируем
    // Генерируем email в твоём формате
    const login = username || `tg_${telegramId}`;
    userEmail = `${login}@example.com`;
    const tempPassword = crypto.randomBytes(32).toString("hex");

    const { data: newAuthUser, error: signUpError } = await supabaseAdmin.auth.admin.createUser({
      email: userEmail,
      password: tempPassword,
      email_confirm: true, // сразу подтверждаем, без письма
    });

    if (signUpError || !newAuthUser.user) {
      return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }

    userId = newAuthUser.user.id;

    // Сохраняем telegram_id в твою таблицу users
    await supabaseAdmin.from("users").upsert({
      id_user: userId,
      login: userEmail,
      telegram_id: telegramId,
      telegram_username: username,
      username: firstName,
    });
  }

  // Создаём магическую ссылку для входа (она одноразовая и краткосрочная)
  const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
    type: "magiclink",
    email: userEmail,
  });

  if (linkError || !linkData.properties?.hashed_token) {
    return NextResponse.json({ error: "Failed to generate link" }, { status: 500 });
  }

  // Редиректим юзера — Supabase сам установит сессию через этот URL
const confirmUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/verify?token=${linkData.properties.hashed_token}&type=magiclink&redirect_to=https://anonlove.vercel.app/`;
  return NextResponse.redirect(confirmUrl);
}