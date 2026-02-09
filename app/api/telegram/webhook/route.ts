import { supabase } from "@/utils/supabase/alSupabase";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    const update = await req.json()
    const message = update.message

    if(!message?.text) return NextResponse.json({ok: true})
    
    const chatId = message.from.id
    const text = message.text

    if (text.startWith('/start reg_')) {
        const code = text.replace('start reg_', '')

        // Проверяем код
        const {data} = await supabase
            .from('telegram_reg_codes')
            .select('*')
            .eq("code", code)
            .single()
        
        if (!data){
            await sendMessage(chatId, "Ссылка устарела")
            return NextResponse.json({ok: true})
        }

        // создаем пользователя
        await supabase.from("users").insert({
            telegram_id: chatId,
        })

        // удаляем код
        await supabase.from("telegram_reg_codes").delete().eq('code', code);

        await sendMessage(chatId, "Регистрация прошла успешно")
    }

    return NextResponse.json({ok: true})
}

async function sendMessage(chatId: number, text: string) {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text,
        }),
    });
}