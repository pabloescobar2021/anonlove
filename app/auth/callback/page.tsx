"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/utils/supabase/alSupabase"

export default function AuthCallback() {
    const router = useRouter()

    useEffect(() => {
        const handle = async () => {
            await supabase.auth.getSession()
            router.push("/")
        }

        handle()
    }, [])

    return <div>Входим...</div>
}
