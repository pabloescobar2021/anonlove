import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { messageId, toUserId } = await req.json();

    console.log("📨 Mark as read request:", { messageId, toUserId });

    if (!messageId) {
        console.error("❌ messageId is missing");
        return NextResponse.json({ error: "messageId required" }, { status: 400 });
    }

    try {
        // Если toUserId передан, проверяем обоих
        let query = supabaseAdmin
            .from("messages")
            .update({ is_checked: true })
            .eq("id", messageId);

        // Добавляем проверку получателя только если toUserId передан
        if (toUserId) {
            query = query.eq("to_user", toUserId);
        }

        const { data, error } = await query.select();

        if (error) {
            console.error("❌ Database error:", error);
            throw error;
        }

        if (!data || data.length === 0) {
            console.error("❌ Message not found or already updated:", { messageId, toUserId });
            return NextResponse.json({ 
                error: "Message not found" 
            }, { status: 404 });
        }

        console.log("✅ Message marked as read:", data);
        return NextResponse.json({ ok: true, data });
    } catch (err) {
        console.error("❌ Error:", err);
        return NextResponse.json({ 
            error: err instanceof Error ? err.message : "Unknown error" 
        }, { status: 500 });
    }
}