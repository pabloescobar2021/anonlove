
export async function tgSend(
    chatId: number, 
    text: string,
    parseMode: "HTML" | "MarkdownV2" = "HTML"
){
    try{
        await fetch (`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                chat_id: chatId, 
                text,
                parse_mode: parseMode 
            }),
        })
    } catch(e){
        console.error('Failed to send Telegram message:', e)
    }
}