import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { tgSend, tgEdit } from "../../tgSend";
import type { TelegramMessage } from "../../type";

export async function handleWrite(message: TelegramMessage) {
    const chatId = message.from.id
    const parts = message.text.trim().split(" ")
    const targetId = parts[1]

    if(!targetId) {
        console.log("targetId is empty, sending help message to", chatId)
        await tgSend(chatId, "Напишите `write <ID>`")
        console.log("sent")
        return
    }

    const {data: user, error} = await supabaseAdmin
        .from('users')
        .select('public_id')
        .eq('public_id', targetId)
        .single()
    if(error || !user) {
        await tgSend(chatId, "Пользователь не найден")
        return
    }

    const url = `https://anonlove.vercel.app/createcard?type=send&to=${targetId}`

    const btns = [[
        {text: "Перейти", url: url},
    ]]

    await tgSend(chatId, `Создать анонимку <code>${targetId}</code>`, "HTML", btns)
}
