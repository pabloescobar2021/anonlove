// /app/api/read-messages/read-all-messages/route.ts
import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { conversation_id, user_id } = body;

        if (!conversation_id || !user_id) {
            console.error("❌ conversation_id or user_id is missing");
            return NextResponse.json({ error: "conversation_id and user_id required" }, { status: 400 });
        }


        const {data, error} = await supabaseAdmin.rpc('read_all_messages_dialog', {
            p_conv_id: conversation_id,
            p_user_id: user_id
        })
        
        if (error) {
            console.error("❌ RPC error:", error);
            throw error;
        }
        

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