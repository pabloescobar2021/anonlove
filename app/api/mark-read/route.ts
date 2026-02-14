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

        
        let query = supabaseAdmin
            .from("messages")
            .update({ is_checked: true })
            .eq("id", messageId);

        const { data, error } = await query.select();

        if (error) {
            console.error("❌ Database error:", error);
            return NextResponse.json({ 
                error: error.message,
                details: error
            }, { status: 500 });
        }

        if (!data || data.length === 0) {
            console.error("❌ Message not found or already updated:", { messageId });
            
            // Давай проверим существует ли сообщение вообще
            const { data: checkData } = await supabaseAdmin
                .from("messages")
                .select("id, to_user, is_checked")
                .eq("id", messageId);
            
            console.log("🔎 Check if message exists:", checkData);
            
            return NextResponse.json({ 
                error: "Message not found",
                messageExists: checkData && checkData.length > 0,
                checkData
            }, { status: 404 });
        }

        console.log("✅ Message marked as read:", data);
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