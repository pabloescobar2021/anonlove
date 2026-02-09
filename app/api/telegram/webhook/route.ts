import { supabase } from "@/utils/supabase/alSupabase";
import { NextResponse } from "next/server";

// export async function POST(req: Request){
//     const update = await req.json()
//     const message = update.message
//     const chatId = message.from.id
//     const text = message.text

//     if(!chatId || !text) return NextResponse.json({ok: true})
    
//     if (!text.startsWith("/start link_")) return NextResponse.json({ ok: true });

//     const code = text.replace('/start link_', '')
    
//     const {data: codeData, error: codeError} = await supabase
//         .from("telegram_reg_codes")
//         .select("*")
//         .eq("code", code)
//         .single()

//     if(codeError || !codeData) {
//         await sendMessage(chatId, "Код не найден")
//         return NextResponse.json({ok: true})
//     }

//     const {error: userError} = await supabase
//         .from('users')
//         .update({
//             telegram_id: chatId
//         })
//         .eq("id_user", codeData.user_id)

//     if(userError){
//         console.error("Failed to update user:", userError)
//         await sendMessage(chatId, "Произошла ошибка, попробуйте позже")
//         return NextResponse.json({ok: true})
//     }

//     await supabase.from("telegram_reg_codes").delete().eq("code", code)

//     await sendMessage(chatId, "привязано")
//     return NextResponse.json({ok: true})
// }

export async function POST(req: Request) {
  try {
    const update = await req.json();
    console.log("Incoming Telegram update:", JSON.stringify(update, null, 2));

    const message = update?.message;
    if (!message) return NextResponse.json({ ok: true });

    const chatId = message.from?.id;
    const text = message.text;
    console.log("chatId:", chatId, "text:", text);

    // пока просто тестовый ответ
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: "Webhook работает!" }),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Webhook error:", e);
    return NextResponse.json({ ok: true });
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