import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin"

export async function POST(req: Request) {
    const { token } = await req.json()

    if (!token) {
        return NextResponse.json({ error: "No token" }, { status: 400 })
    }

    const { data: loginToken } = await supabaseAdmin
        .from("login_tokens")
        .select("*")
        .eq("token", token)
        .eq("used", false)
        .single()

    if (!loginToken) {
        return NextResponse.json({ error: "Invalid token" }, { status: 400 })
    }

    if (new Date(loginToken.expires_at) < new Date()) {
        return NextResponse.json({ error: "Token expired" }, { status: 400 })
    }

    // помечаем как использованный
    await supabaseAdmin
        .from("login_tokens")
        .update({ used: true })
        .eq("id", loginToken.id)

    const { data, error } =
        await supabaseAdmin.auth.admin.generateLink({
            type: "magiclink",
            email: (await supabaseAdmin.auth.admin.getUserById(loginToken.user_id)).data.user?.email!,
            options: {
                redirectTo: "https://anonlove.vercel.app/auth/callback",
            },
        })

    if (error || !data) {
        return NextResponse.json({ error: "Auth error" }, { status: 500 })
    }

    return NextResponse.json({
        action_link: data.properties.action_link,
    })
}
