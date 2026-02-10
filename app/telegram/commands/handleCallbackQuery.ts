import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { tgSend } from "../tgSend";

export async function handleCallbackQuery(callbackQuery: any) {
    const chatId = callbackQuery.from.id
    const data = callbackQuery.data

    if (data.startsWith("toggle_notif")){
        const userId = data.replace("toggle_notif_", "")

        const {data: user, error} = await supabaseAdmin
            .from('users')
            .select('telegram_notifications')
            .eq('telegram_id', chatId)
            .single()
        if(error || !user){
            await tgSend(chatId, "Сначала привяжи аккаунт")
            return
        }

        const newValue = !user.telegram_notifications

        await supabaseAdmin
            .from('users')
            .update({telegram_notifications: newValue})
            .eq('telegram_id', chatId)

        await tgSend(chatId, `Уведомления теперь ${newValue ? "включены" : "выключены"}`)
    }
}