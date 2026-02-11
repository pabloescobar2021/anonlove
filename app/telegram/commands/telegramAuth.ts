import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin"
import { tgSend } from "../tgSend"
import type { TelegramMessage } from "../type"

export async function telegramAuth(message: TelegramMessage) {
    const chatId = message.from.id

    const {data: user} = await supabaseAdmin
        .from('users')
        .select('login')
        .eq('telegram_id', chatId)
        .single()
    if(!user) {
        await tgSend(chatId, "Давай зарегистрируемся")
        return
    }

    const {data, error} = await supabaseAdmin.auth.admin.generateLink({
        type: 'magiclink',
        email: user.login,
    })

    if(error || !data) {
        await tgSend(chatId, "Что-то пошло не так, попробуй позже")
        return
    }
    
    await tgSend(chatId, `Войти в аккаунт: ${data.properties.action_link}`)
}