import crypto from "crypto"
import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin"
import { tgSend } from "../tgSend"
import type { TelegramMessage } from "../type"

export async function telegramAuth(message: TelegramMessage) {
    const chatId = message.from.id

    const { data: user } = await supabaseAdmin
        .from("users")
        .select("id_user") // UUID из auth.users
        .eq("telegram_id", chatId)
        .single()

    if (!user) {
        await tgSend(chatId, "Аккаунт не найден.")
        return
    }

    const token = crypto.randomBytes(32).toString("hex")

    await supabaseAdmin.from("login_tokens").insert({
        user_id: user.id_user,
        token,
        expires_at: new Date(Date.now() + 2 * 60 * 1000), // 2 минуты
    })

    await tgSend(
        chatId,
        `Войти в аккаунт:\nhttps://anonlove.vercel.app/auth/telegram?token=${token}`
    )
}
