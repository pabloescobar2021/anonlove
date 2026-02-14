"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/utils/supabase/alSupabase"
import { UiMessage } from "../../types/type"

export function useGetMessages(converationId: string | null) {

    const [messages, setMessages] = useState<UiMessage[]>([])
    const [loading, setLoading] = useState(false)

    const loadMessages = async () => {
        if (!converationId) return

        setLoading(true)

        const {data, error} = await supabase.rpc("get_conversation_messages", {
            p_conversation_id: converationId
        })

        if (error) {
            console.error(error)
            setLoading(false)
            return
        }

        if(data){
            setMessages(data)
        }
        setLoading(false)
    }
    useEffect(() => {
        loadMessages()
    },[converationId])

    return { messages, loading }
}