"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { supabase } from "@/utils/supabase/alSupabase"

export default function Callback() {
  const params = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const token = params.get("token")

    if (!token) return

    supabase.auth.signInWithIdToken({
      provider: "custom",
      token
    }).then(() => {
      router.push("/")
    })
  }, [])

  return <div>Авторизация...</div>
}
