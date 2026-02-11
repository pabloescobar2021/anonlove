import crypto from "crypto"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { SignJWT } from "jose"
import { createClient } from "@supabase/supabase-js"

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const data: Record<string, string> = {}
  searchParams.forEach((value, key) => {
    data[key] = value
  })

  const hash = data.hash
  delete data.hash

  // 1️⃣ Проверка подписи Telegram
  const secret = crypto
    .createHash("sha256")
    .update(process.env.TELEGRAM_BOT_TOKEN!)
    .digest()

  const checkString = Object.keys(data)
    .sort()
    .map(key => `${key}=${data[key]}`)
    .join("\n")

  const hmac = crypto
    .createHmac("sha256", secret)
    .update(checkString)
    .digest("hex")

  if (hmac !== hash) {
    return NextResponse.json({ error: "Invalid hash" }, { status: 401 })
  }

  const telegramId = data.id

  // 2️⃣ Проверяем пользователя
  const { data: user } = await supabaseAdmin
    .from("users")
    .select("*")
    .eq("telegram_id", telegramId)
    .single()

  let userId: string

  if (!user) {
    // 3️⃣ Создаём пользователя
    const email = `${telegramId}@telegram.local`
    const password = crypto.randomBytes(32).toString("hex")

    const { data: newUser } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true
    })

    await supabaseAdmin
      .from("users")
      .insert({
        id: newUser.user!.id,
        telegram_id: telegramId,
        username: data.username
      })

    userId = newUser.user!.id
  } else {
    userId = user.id
  }

  // 4️⃣ Генерируем Supabase JWT
  const token = jwt.sign(
    {
      sub: userId,
      role: "authenticated"
    },
    process.env.SUPABASE_JWT_SECRET!,
    { expiresIn: "1h" }
  )

  return NextResponse.redirect(
    `https://yourdomain.com/auth/callback?token=${token}`
  )
}
