import crypto from "crypto"
import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin"
import { tgSend } from "../tgSend"
import type { TelegramMessage } from "../type"

export async function telegramAuth(message: TelegramMessage) {
    const chatId = message.from.id


    await tgSend(
        chatId,
        `Войти в аккаунт:\nhttps://anonlove.vercel.app/auth/telegram`
    )
}
