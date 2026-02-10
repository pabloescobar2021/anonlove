import { tgSend } from "../tgSend";
import type { TelegramMessage } from "../type";
import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";

export async function handlerStatus(message: TelegramMessage) {
    const chatId = message.from.id

    const {data: user, error} = await supabaseAdmin
        .from("users")
        .select(`
            telegram_id, 
            telegram_notifications, 
            telegram_username
        `)
        .eq("telegram_id", chatId)
        .single()

    if(error || !user){
        await tgSend(chatId, "Сначала привяжи аккаунт")
        return
    }

    const statusText = `
<b>👤 Твой профиль</b>   
<b>Username: </b> ${user.telegram_username ? `@${user.telegram_username}` : "Не указан"}

<b>🔔 Уведомления</b> ${user.telegram_notifications ? "Вкл." : "Выкл."}

<b> Сайт: </b> anonlove.vercel.app
`.trim()

    await tgSend(chatId, statusText, "HTML")
}