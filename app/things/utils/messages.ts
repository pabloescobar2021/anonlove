import { supabase } from "@/utils/supabase/alSupabase";
import { error } from "console";
import { ItemDto } from "../types/type";
// to_user:users(id_user, rating)
export async function getInboxMessages(userId: string){
    const {data, error} = await supabase
        .from("messages_safe")
        .select(`
            *
            `)
        .eq("to_user", userId)
        .eq("is_visible_for_receiver", true)
        .order("created_at", {ascending: true})
    if(error) throw error;  

    const messages = (data || []).map(msg => {
        const anonSetting = msg.user_anonymous_settings?.[0]?.is_anon
        return {
            ...msg,
            displayId: (anonSetting || msg.is_anon) ? "Anon" : msg.from_public_id,
            username: (anonSetting || msg.is_anon) ? "Anon" : msg.from_username,
        }
    })

    return messages 
}

export async function getCurrentMessage(messageId: string, userId: string, isMine?: string | null) {
    const {data, error} = await supabase
    .from("messages_safe")
    .select("*")
    .eq("id", messageId)
    .eq(isMine==="true" ? "from_user" : "to_user", userId)
    .maybeSingle()
    console.log('Query result messages.ts:', { data, error })
    if (error) throw error
    return data || []
}

export async function getSentMessages(userId: string) {
    const {data, error} = await supabase
        .from('messages_safe')
        .select(`
            *`)
        .eq("from_user", userId)
        .eq("is_visible_to_sender", true)
        .order("created_at", {ascending: true})
    
    if(error) throw error
    return data || []

}

export async function sendMessage({
    fromUserId,
    toUserId,
    toPublicId,
    body,
    isAnon
}: {
    fromUserId: string,
    toUserId?: string,
    toPublicId?: string,
    body: ItemDto[],
    isAnon?: boolean
}) {
    let receiverId = toUserId

    if (!receiverId){
        if (!toPublicId) throw new Error("Не указан пользователь, малыш")
            const {data: receiver, error: userError} = await supabase
                .from("users") 
                .select("id_user")
                .eq("public_id", toPublicId)
                .single()
            if(userError || !receiver){
                throw new Error("Пользователь не найден, кись")
            }
        receiverId = receiver.id_user
    }

    const {data: toggle, error: toggleError} = await supabase.rpc("toggle_anonymous", {
                p_from: fromUserId, 
                p_to: receiverId, 
                p_is_anon: isAnon
            })

    if(toggleError) throw toggleError

    const {error: messageError} = await supabase
        .from("messages")
        .insert({
            from_user: fromUserId,
            to_user: receiverId,
            body,
        })
    if(messageError) throw messageError

    return toggle
}