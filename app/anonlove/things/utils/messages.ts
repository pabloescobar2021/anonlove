import { supabase } from "@/utils/supabase/alSupabase";
import { error } from "console";

export async function getInboxMessages(userId: string){
    const {data, error} = await supabase
        .from("messages_safe")
        .select(`
            *
            `)
        .eq("to_user", userId)
        .order("created_at", {ascending: true})
    if(error) throw error;  

    const messages = (data || []).map(msg => {
        const anonSetting = msg.user_anonymous_settings?.[0]?.is_anon
        return {
            ...msg,
            displayId: (anonSetting || msg.is_anon) ? "Anon" : msg.from_public_id,
            username: (anonSetting || msg.is_anon) ? "Anon" : msg.from_username
        }
    })

    return messages 
}

export async function getCurrentMessage(messageId: string, userId: string) {
    const {data, error} = await supabase
    .from("messages_safe")
    .select("*")
    .eq("id", messageId)
    .eq("to_user", userId)
    .single()
    if (error) throw error
    return data || []
}

export async function getSentMessages(userId: string) {
    const {data, error} = await supabase
        .from('messages_safe')
        .select(`
            *`)
        .eq("from_user", userId)
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
    body: string,
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

    const {error: settingError} = await supabase
        .from("user_anonymous_settings")
        .upsert(
            [{
                from_user_id: fromUserId,
                to_user_id: receiverId,
                is_anon: isAnon
            }], 
            { 
                onConflict: 'from_user_id,to_user_id'
            }
        );
    if(settingError) throw settingError

    const {error: messageError} = await supabase
        .from("messages")
        .insert({
            from_user: fromUserId,
            to_user: receiverId,
            body,
        })
    if(messageError) throw messageError
}