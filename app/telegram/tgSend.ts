export async function tgSend(
    chatId: number, 
    text: string,
    parseMode: "HTML" | "MarkdownV2" = "HTML",
    inlineKeyBoard?: {
        text: string
        callback_data?: string
        url?: string
        login_url?: { url: string }
    }[][]
){
    const body: any = {
        chat_id: chatId,
        text,
        parse_mode: parseMode
    }
    if(inlineKeyBoard) {
        body.reply_markup = { inline_keyboard: inlineKeyBoard }
    }

    try{
        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
    } catch(e){
        console.error('Failed to send Telegram message:', e)
    }
}
export async function tgEdit(
    chatId: number,
    messageId: number,
    text: string,
    parseMode: "HTML" | "MarkdownV2" = "HTML",
    inlineKeyBoard?: {text: string, callback_data?: string, url?: string}[][]
){
    const body: any = {
        chat_id: chatId,
        message_id: messageId,
        text,
        parse_mode: parseMode
    }
    if(inlineKeyBoard) {
        body.reply_markup = {inline_keyboard: inlineKeyBoard}
    }

    try{
        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/editMessageText`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
    } catch(e){
        console.error('Failed to edit Telegram message:', e)
    }
}