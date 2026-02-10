import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { NextResponse } from "next/server";
import { handleStartLink } from "@/app/telegram/commands/handleStartLink";
import { tgCommandMap } from "@/app/telegram/commands/tgCommandMap";
import { tgSend } from "@/app/telegram/tgSend";
import { handleCallbackQuery } from "@/app/telegram/commands/handleCallbackQuery";
import { handleWrite } from "@/app/telegram/commands/write/handleWrite";


export async function POST(req: Request){
    try{
        const update = await req.json()
        if(update.callback_query){
            await handleCallbackQuery(update.callback_query)
            return NextResponse.json({ok: true})
        }

        const message = update.message
        if(!message?.text){
            return NextResponse.json({ok: true})
        }

        const chatId = message.from.id
        const text = message.text.trim()

        if(text.startsWith("/start link_")){
            await handleStartLink(message)
            return NextResponse.json({ok: true})
        }
        if(text.startsWith("/write")){
            await handleWrite(message)
            return NextResponse.json({ok: true})
        }
        
        const handler = tgCommandMap[text]
        if(handler){
            await handler(message)
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


