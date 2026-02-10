import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { tgSend } from "../tgSend";
import type { TelegramMessage } from "../type";

export async function handleNotificationToggle(message: TelegramMessage) {
    const chatId = message.from.id

    const {data: user, error} = await supabaseAdmin
        .from("users")
        .select("telegram_notifications")
        .eq("telegram_id", chatId)
        .single()

    if(error || !user){
        await tgSend(chatId, "Сначала привяжи аккаунт")
        return
    }

    const newValue = !user.telegram_notifications

    await supabaseAdmin
        .from("users")
        .update({telegram_notifications: newValue})
        .eq("telegram_id", chatId)

    await tgSend(
        chatId,
        newValue
            ? "Вы подписались на уведомления"
            : "Вы отписались от уведомлений"
    )
}