import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";
import { tgSend } from "./tgSend";

export async function sendTelegramNotification(userId: string, text:string){
    const {data: user, error} = await supabaseAdmin
        .from("users")
        .select("telegram_id, telegram_notifications")
        .eq("id_user", userId)
        .single()
    if(error || !user || !user.telegram_id){
        console.log('User not found or no Telegram ID:', {error})
        return
    }
    const chatId = user.telegram_id
    
    // бот шлет сообщение об уведомлении что пришло сообщение
    if(user.telegram_notifications){
        await tgSend(chatId, text)
    }
}