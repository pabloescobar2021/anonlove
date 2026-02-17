// /app/api/mark-read/route.ts
import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { messageId } = body;

        if (!messageId) {
            console.error("❌ messageId is missing");
            return NextResponse.json({ error: "messageId required" }, { status: 400 });
        }

        const {data} = await supabaseAdmin.rpc('mark_message_as_read', {
            msg_id: messageId
        })
       
        console.log("✅ Message marked as read:", { messageId, data });

        

        return NextResponse.json({ ok: true, data });
    } catch (err) {
        console.error("❌ Unexpected error:", err);
        return NextResponse.json({ 
            error: "Internal server error",
            message: err instanceof Error ? err.message : String(err),
            stack: err instanceof Error ? err.stack : undefined
        }, { status: 500 });
    }
}