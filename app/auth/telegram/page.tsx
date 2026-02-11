"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function TelegramLogin() {
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const token = searchParams.get("token")
        if (!token) return

        const login = async () => {
            const res = await fetch("/api/telegram-login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            })

            const data = await res.json()

            if (data.action_link) {
                window.location.href = data.action_link
            }
        }

        login()
    }, [])

    return <div>Входим...</div>
}
