import { tgSend } from "../tgSend";
import type { TelegramMessage } from "../type";

export async function handleToPage(message: TelegramMessage) {
    const chatId = message.from.id
    
    const page = 'https://anonlove.vercel.app/'

    await tgSend(chatId, `Переход на страницу ${page}`)
}