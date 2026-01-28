import { supabase } from "@/utils/supabase/alSupabase";

export function useMessageRead(
) {

    const markAsRead = async (messageId: string, userId: string) => {
    console.log("Trying to mark as read:", { messageId, userId });
    const { error } = await supabase
        .from("messages")
        .update({ is_checked: true })
        .eq("id", messageId)
        .eq("to_user", userId)
    if (error) {
        console.error("Error marking message as read:", error);
    } 
};

    const getReadStatus = async (messageId: string) => {
        try {
            const {data, error} = await supabase
            .from("messages")
            .select('is_checked')
            .eq('id', messageId)
            .single()

            if(error) throw error
            return data.is_checked

        } catch (err) {
            console.error(err)
            return false
        }
    }

    return { markAsRead, getReadStatus}
}