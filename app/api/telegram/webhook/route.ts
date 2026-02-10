import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { NextResponse } from "next/server";
import { handleStartLink } from "@/app/telegram/handleStartLink";
import { handleNotificationToggle } from "@/app/telegram/handleNotificationToggle";
import { tgSend } from "@/app/telegram/tgSend";

export async function POST(req: Request){
    try{
        const update = await req.json()
        const message = update.message

        if(!message?.text){
            return NextResponse.json({ok: true})
        }

        const chatId = message.from.id
        const text = message.text.trim()
        // const username = message.from.username
        if(text.startsWith("/start link_")){
            await handleStartLink(message)
        }
        else if(text === '/notifications'){
            await handleNotificationToggle(message)
        }
        else{
            await tgSend(chatId, "Чё бля?")
        }

        return NextResponse.json({ok: true})
    } catch(e){
        console.log("webhook error", e)
        return NextResponse.json({ok: true})
    }
}


