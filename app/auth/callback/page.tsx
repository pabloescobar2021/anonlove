"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/utils/supabase/alSupabase"

export default function TelegramLogin() {
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const token = searchParams.get("token")
        if (!token) return

        const login = async () => {
            const { error } = await supabase.auth.setSession({
                access_token: token,
                refresh_token: token,
            })

            if (!error) {
                router.push("/")
            }
        }

        login()
    }, [])

    return <div>Входим...</div>
}
