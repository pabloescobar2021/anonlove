import { supabase } from "@/utils/supabase/alSupabase";
import { useState } from "react";

type SetAnonParams = {
    conversation_id: string,
    is_anon: boolean
}

export function useSetAnon() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)


    const setAnon = async ({
        conversation_id,
        is_anon
    }: SetAnonParams) => {
        try {
            setLoading(true)
            setError(null)

            const {data, error} = await supabase.rpc("toggle_anon", {
                p_conversation_id:  conversation_id,
                p_is_anon: is_anon
            })

            if(error) throw error

            
            console.log(data)
            return data

        } catch (err) {
            setError(err as Error)
            throw err
        } finally {
            setLoading(false)
        }
    }

    const checkAnon = async (from_user_id: string, conversation_id: string) => {
        try {
            setLoading(true)
            setError(null)

            const {data, error} = await supabase
                .from("conversation_participants")
                .select("is_anon, anon_used_once")
                .eq("user_id", from_user_id)
                .eq("conversation_id", conversation_id)
                .maybeSingle()
            if(error) throw error

            if (!data) {
                return {
                    isAnon: false,
                    anonUsedOnce: false,
                    canToggle: true
                }
            }

            return {
                isAnon: data?.is_anon ?? false,
                anonUsedOnce: data?.anon_used_once ?? false,
                canToggle: !(data?.anon_used_once && !data.is_anon)
            }
        } catch (err) {
            setError(err as Error)
            throw err
        } finally {
            setLoading(false)
        }
    }
        

    return {setAnon, checkAnon, loading, error}
}