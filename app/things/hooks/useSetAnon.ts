import { supabase } from "@/utils/supabase/alSupabase";
import { useState } from "react";

type SetAnonParams = {
    from_user_id: string,
    to_user_id: string,
    is_anon: boolean
}

export function useSetAnon() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)


    const setAnon = async ({
        from_user_id,
        to_user_id,
        is_anon
    }: SetAnonParams) => {
        try {
            setLoading(true)
            setError(null)

            const {data, error} = await supabase.rpc("toggle_anonymous", {
                p_from: from_user_id, 
                p_to: to_user_id, 
                p_is_anon: is_anon
            })

            if(error) throw error

            if (data === false){
                throw new Error("Анонимность уже была использована")
            }
            return data

        } catch (err) {
            setError(err as Error)
            throw err
        } finally {
            setLoading(false)
        }
    }

    const checkAnon = async (from_user_id: string, to_user_id: string) => {
        try {
            setLoading(true)
            setError(null)

            const {data, error} = await supabase
                .from("user_anonymous_settings")
                .select("is_anon, anon_used_once")
                .eq("from_user_id", from_user_id)
                .eq("to_user_id", to_user_id)
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