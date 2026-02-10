export type TelegramMessage = {
    message_id: number
    text: string
    from: {
        id: number
        username?: string
        first_name?: string
    }
    chat: {
        id: number
        type: string
    }
}