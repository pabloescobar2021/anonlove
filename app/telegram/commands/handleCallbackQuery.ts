import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { tgSend, tgEdit } from "../tgSend";
import { getStatusContent } from "./status/getStatusContent";

export async function handleCallbackQuery(callbackQuery: any) {
    const chatId = callbackQuery.from.id
    const messageId = callbackQuery.message.message_id
    const data = callbackQuery.data

    if (data.startsWith("toggle_notif")){
        const userId = data.replace("toggle_notif_", "")

        const {data: user, error} = await supabaseAdmin
            .from('users')
            .select('telegram_notifications')
            .eq('telegram_id', userId)
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

        const content = await getStatusContent(chatId)
        if(content) await tgEdit(chatId, messageId, content.text, "HTML", content.buttons)
    }

    if(data === "remove_link"){
        const confirmBtns = [[
            {text: "Да, отвязать", callback_data: "remove_link_confirm"},
            {text: "Назад", callback_data: "remove_link_cancel"}
        ]]
        await tgEdit(chatId, messageId,"Вы точно хотите отвязать аккаунт?", "HTML" ,confirmBtns)  
    }
    if(data === "remove_link_confirm"){
        const {error: updateError, count} = await supabaseAdmin
            .from('users')
            .update({telegram_id: null, telegram_username: null})
            .eq('telegram_id', chatId)
            .select() // добавь это

        await tgEdit(chatId, messageId,"Привязка удалена")
    }
    if(data === "remove_link_cancel"){
        const content = await getStatusContent(chatId)  
        if(content) await tgEdit(chatId, messageId, content.text, "HTML", content.buttons)
    }
}