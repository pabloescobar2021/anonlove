"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/utils/supabase/alSupabase"
import { UiMessage, Dialog } from "../../types/type"


export function useGetDialogs(userId: string | null) {

    const [dialogs, setDialogs] = useState<Dialog[]>([])
    const [ loading, setLoading ] = useState(false)

    const getDialog = async () => {
        if(!userId) return

        setLoading(true)

        const {data, error} = await supabase.rpc("get_user_conversations", {
            p_user: userId
        })
        if(error){
            console.error(error)
            setLoading(false)
            return
        }

        if(data) setDialogs(data)
        setLoading(false)
    }

    useEffect(() => {
        if(!userId) return
        getDialog()
    },[userId])

    return { dialogs, loading, refresh: getDialog }
}