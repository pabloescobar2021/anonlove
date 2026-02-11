"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function TelegramLogin() {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        if (!token) return
        setLoading(true)

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

    return (
        <div>
            <h2>Вход через Telegram</h2>
            <button onClick={handleLogin} disabled={loading}>
                {loading ? "Входим..." : "Войти"}
            </button>
        </div>
    )
}
