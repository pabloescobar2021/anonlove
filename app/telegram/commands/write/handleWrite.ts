import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { tgSend, tgEdit } from "../../tgSend";
import type { TelegramMessage } from "../../type";

export async function handleWrite(message: TelegramMessage) {
    const chatId = message.from.id
    const messageId = message.message_id
    const parts = message.text.trim().split("")
    const targetId = parts[1]

    if(!targetId) {
        await tgEdit(chatId, messageId, "Напишите /write <ID>")
    }

    const {data: user, error} = await supabaseAdmin
        .from('users')
        .select('public_id')
        .eq('public_id', targetId)
        .single()
    if(error || !user) {
        await tgEdit(chatId, messageId,"Пользователь не найден")
        return
    }

    const url = `https://anonlove.vercel.app/createcard?type=send&to=${targetId}`

    const btns = [[
        {text: "Перейти", url: url},
    ]]

    await tgEdit(chatId, messageId, "Ссылка отправлена", "HTML", btns)
}
