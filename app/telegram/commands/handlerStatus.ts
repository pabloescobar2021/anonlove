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
<b>👤 Твой профиль:</b> 
  
<b>🆔 Telegram ID:</b> <code>${user.telegram_id}</code>
<b>Статус привязки: ${user.telegram_id ? "Привязан" : "Не привязан"}</b>
<b>👤 Username: </b> ${user.telegram_username ? `@${user.telegram_username}` : "Не указан"}
<b>🔔 Уведомлени:я</b> ${user.telegram_notifications ? "Включены" : "Выключены"}
<b>🌐 Сайт: </b> anonlove.vercel.app
`.trim()

    const toggleButton = [
        [
            {
                text: user.telegram_notifications ? "Выключить уведомления" : "Включить уведомления",
                callback_data: `toggle_notif_${user.telegram_id}`
            },

            ...(user.telegram_id ? [{
                text: "Отвязать аккаунт",
                callback_data: "remove_link"
            }]: [])
        ]    
    ]

    await tgSend(chatId, statusText, "HTML", toggleButton)
}