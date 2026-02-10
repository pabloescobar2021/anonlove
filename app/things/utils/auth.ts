import { supabase } from "@/utils/supabase/alSupabase";

export async function getCurrentUser() {
    const {data, error} = await supabase.auth.getUser()
    if(error) return
    return data.user
}

export async function getUserProfile(userId: string) {
    const {data, error} = await supabase
        .from("users")
        .select("public_id, username, telegram_id")
        .eq("id_user", userId)
        .single()
    if(error) return null
    return data
}

export async function sighOut() {
    const {error} = await supabase.auth.signOut()
    if(error) throw error
}

export function onAuthStateChange(callback: (user:any) => void) {
    const {data: listener} = supabase.auth.onAuthStateChange((event,session) => {
        callback(session?.user || null)
    })
    return listener.subscription
}