import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin"
import { tgSend } from "../tgSend"
import type { TelegramMessage } from "../type"

export async function handleStartLink(message: TelegramMessage){
    const chatId = message.from.id
    const username = message.from.username
    const text = message.text

    const code = text.replace("/start link_", "")

    const  {data: codeData, error: codeError} = await supabaseAdmin
        .from("telegram_reg_codes")
        .select("*")
        .eq("code", code)
        .single()

    if(codeError || !codeData){
        await tgSend(chatId, "Код не найден")
        return
    }

    await supabaseAdmin
        .from("users")
        .update({
            telegram_id: chatId,
            telegram_username: username
        })
        .eq("id_user", codeData.user_id)


    await supabaseAdmin
        .from("telegram_reg_codes")
        .delete()
        .eq("code", code)

    await tgSend(chatId, "✅ Аккаунт привязан")

}   
