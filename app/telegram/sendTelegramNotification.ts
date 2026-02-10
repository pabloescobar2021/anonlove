import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin";

export async function sendTelegramNotification(userId: string, text:string){
    const {data: user, error} = await supabaseAdmin
        .from("users")
        .select("telegram_id")
        .eq("id_user", userId)
        .single()
    if(error || !user || !user.telegram_id){
        console.log('User not found or no Telegram ID:', {error})
        return
    }
    const chatId = user.telegram_id
    
    // бот шлет сообщение об уведомлении что пришло сообщение
    try{
        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text }),
        })
    } catch(e){
        console.error('Failed to send Telegram message:', e)
    }
}