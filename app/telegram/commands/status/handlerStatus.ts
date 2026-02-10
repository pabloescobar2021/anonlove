import { tgSend } from "../../tgSend";
import type { TelegramMessage } from "../../type";
import { getStatusContent } from "./getStatusContent";

export async function handlerStatus(message: TelegramMessage) {
    const chatId = message.from.id
    const content = await getStatusContent(chatId)

    if(!content) {
        await tgSend(chatId, "Сначала привяжи аккаунт")
        return
    }

    await tgSend(chatId, content.text, "HTML", content.buttons)
}