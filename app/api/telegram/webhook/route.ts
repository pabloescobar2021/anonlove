import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const update = await req.json()
        const message = update.message
        const chatId = message.from.id
        const text = message.text
        const username = message.from.username
    
        if(!chatId || !text) return NextResponse.json({ok: true})
        
        if (!text.startsWith("/start link_")) return NextResponse.json({ ok: true });
    
        const code = text.replace('/start link_', '')
        
        const {data: codeData, error: codeError} = await supabaseAdmin
            .from("telegram_reg_codes")
            .select("*")
            .eq("code", code)
            .single()
    
        if(codeError || !codeData) {
            await sendMessage(chatId, "Код не найден")
            return NextResponse.json({ok: true})
        }
    
        const {error: userError} = await supabaseAdmin
            .from('users')
            .update({
                telegram_id: chatId,
                telegram_username: username
            })
            .eq("id_user", codeData.user_id)
    
        if(userError){
            console.error("Failed to update user:", userError)
            await sendMessage(chatId, "Произошла ошибка, попробуйте позже")
            return NextResponse.json({ok: true})
        }
    
        await supabaseAdmin.from("telegram_reg_codes").delete().eq("code", code)
    
        await sendMessage(chatId, "привязано")
        return NextResponse.json({ok: true})
    } catch(e){
        console.log("webhook error", e)
        return NextResponse.json({ok: true})
    }
}



async function sendMessage(chatId: number, text: string) {
  try {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
  } catch (e) {
    console.error("Failed to send TG message:", e);
  }
}