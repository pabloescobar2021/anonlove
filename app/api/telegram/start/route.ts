import { supabase } from "@/utils/supabase/alSupabase";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
    const userId = req.headers.get("x-user-id")

    if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 401 })

    const code = crypto.randomUUID()

    await supabase.from("telegram_reg_codes").insert({
        code,
        user_id: userId
    })

    return NextResponse.json({
        url: `https://t.me/AnonLove_userBot?start=link_${code}`
    })
}