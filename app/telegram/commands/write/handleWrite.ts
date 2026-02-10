import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { tgSend, tgEdit } from "../../tgSend";
import type { TelegramMessage } from "../../type";

export async function handleWrite(message: TelegramMessage) {
    const chatId = message.from.id
    const parts = message.text.trim().split(" ")
    const targetId = parts[1]

    if(!targetId) {
        await tgSend(chatId, "Напишите /write <ID>")
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

    await tgSend(chatId, `Написать пользователю <code>${targetId}</code>`, "HTML", btns)
}
