import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin"
import { tgSend } from "../tgSend"
import type { TelegramMessage } from "../type"
import { SignJWT } from "jose"

export async function telegramAuth(message: TelegramMessage) {
    const chatId = message.from.id

    const {data: user} = await supabaseAdmin
        .from('users')
        .select('id_user')
        .eq('telegram_id', chatId)
        .single()
    if(!user) {
        await tgSend(chatId, "Давай зарегистрируемся")
        return
    }

    try{
        const secret = new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET!)
        const token = await new SignJWT({
            role: 'authenticated',
            aud: 'authenticated',
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setSubject(user.id_user)
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(secret)
        await tgSend(
            chatId, 
            `https://anonlove.vercel.app/auth/callback?token=${token}`
        )
    } catch(e){
        console.error(e)
        await tgSend(chatId, "Произошла ошибка")
    }
}