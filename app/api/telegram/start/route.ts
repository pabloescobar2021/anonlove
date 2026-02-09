import { supabase } from "@/utils/supabase/alSupabase";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(){
    const code = crypto.randomUUID()
    await supabase.from("telegram_reg_codes").insert({code})

    return NextResponse.json({
        url: `https://t.me/AnonLove_userBot?start=reg_${code}`
    })
}