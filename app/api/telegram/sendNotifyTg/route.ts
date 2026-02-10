import { sendTelegramNotification } from "@/app/telegram/sendTelegramNotification";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { userId, text } = await req.json();
    
    try{
        await sendTelegramNotification(userId, text)
        return NextResponse.json({ ok: true })
    } catch(e){
        return NextResponse.json({ error: e }, { status: 500 })
    }
}