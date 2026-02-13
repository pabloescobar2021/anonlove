import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { messageId, toUserId } = await req.json();

    if (!messageId) {
        return NextResponse.json({ error: "messageId required" }, { status: 400 });
    }

    try{
        const {error} = await supabaseAdmin
            .from("messages")
            .update({ is_checked: true })
            .eq("id", messageId)
            .eq("to_user", toUserId);
    
        if(error) throw error
    
        return NextResponse.json({ ok: true });
    } catch (err){
        console.error(err)
        return NextResponse.json({ error: err }, { status: 500 })
    }
}