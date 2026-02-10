"use client"

import { useState, useEffect, useMemo } from "react"
import { supabase } from "@/utils/supabase/alSupabase"
import { getInboxMessages, getSentMessages, sendMessage, getCurrentMessage } from "../utils/messages"
import { ItemDto, Item, Message, UiMessage, itemDtoListToItems, messageDtoToUiMessage } from "../types/type"
import { sendTelegramNotification } from "@/app/telegram/sendTelegramNotification"


export function useMessages(userId: string | null) {
    const [inbox, setInbox] = useState<UiMessage[]>([])
    const [sent, setSent] = useState<UiMessage[]>([])
    const [loading, setLoading] = useState(true)


    const loadMessage = async () => {
        if(!userId) return

        try{
            setLoading(true)
            const [inboxData, sentData] = await Promise.all([
                getInboxMessages(userId), 
                getSentMessages(userId)
            ])

            setInbox(inboxData.map(messageDtoToUiMessage))
            setSent(sentData.map(messageDtoToUiMessage))
        } catch (error) {
            console.error("Error loading messages:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadMessage()
    },[userId])

    const send = async (
        to: {publicId?: string, userId?: string}, 
        body: ItemDto[],
        isAnon?: boolean 
    ) => {
        if(!userId) throw new Error("User not logged in")

        let receiverId = to.userId

        if (!receiverId){
            if(!to.publicId) throw new Error("Не указан пользователь, малыш")

            const {data: receiver, error: userError} = await supabase
                .from("users") 
                .select("id_user")
                .eq("public_id", to.publicId)
                .single()
            if(userError || !receiver){
                throw new Error("Пользователь не найден, кись")
            }
            receiverId = receiver.id_user
        }
        
        const {data, error} = await supabase.rpc("toggle_anonymous", {
            p_from: userId, 
            p_to: receiverId, 
            p_is_anon: isAnon
        })
        if(error) throw error

        const {error: errorMsg} = await supabase
            .from("messages")
            .insert({
                from_user: userId, 
                to_user: receiverId, 
                body
            })
        if(errorMsg) throw errorMsg

        // уведомляем о сообщении
        fetch("/api/telegram/sendNotifyTg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                userId: receiverId, 
                text: `Новое сообщение от ${userId}` 
            })
        })

        await loadMessage()

        return data
    }

    const deleteMessage = async (ids: string[] ) => {
        if (!ids.length) {
            console.warn("Message ID is required")
            return
        }
        
        const {error} = await supabase.rpc("hide_message_for_me", {
            msg_id: ids
        })
        if(error) {
            console.error("Failed to delete message:", error)
            throw error
        }
    }

    return {
        inbox,
        sent,
        loading,
        sendMessage: send,
        refresh: loadMessage,
        deleteMessage
    }

}

type UseCurrentMessageResult = {    
    message: UiMessage | null,
    loading: boolean
}
export function useCurrentMessage(
    userId: string | null, 
    messageId: string | null,
    isMine?: string | null
): UseCurrentMessageResult {
    const [message, setMessage] = useState<UiMessage | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!userId || !messageId) return

        const loadMessage = async () => {
            setLoading(true)
            try{
                const data = await getCurrentMessage(messageId, userId, isMine)
                setMessage(messageDtoToUiMessage(data))
            } catch (error) {
                console.error("Error loading messages:", error)
            } finally {
                setLoading(false)
            }
        }
        loadMessage()

    }, [userId, messageId])

    return {
        message,
        loading
    }
}



export type Dialog = {
    userId: string,
    displayId: string,

    lastMessage: UiMessage,
    messages: UiMessage[],
    count: number,
    rating?: number
}


export function useDialogs(
    inboxMessages: UiMessage[],
    sentMessages: UiMessage[],
    myUserId: string,
    myPublicId: string
) {
    const dialogs = useMemo<Dialog[]>(() => {
        const map = new Map<string, Dialog>()

        const allMessages = [...inboxMessages, ...sentMessages]

        for (const msg of allMessages){
            const dialogUserId = msg.from_user === myUserId
                ? msg.to_user
                : msg.from_user

            let displayId = ''
            if(msg.from_display_id === 'A'){
                displayId = 'Anon'
            } else{ 
                displayId = msg.from_display_id === myPublicId
                    ? msg.to_display_id
                    : msg.from_display_id
            }

            if(!map.has(dialogUserId)) {
                map.set(dialogUserId, {
                    userId: dialogUserId,
                    displayId: displayId,

                    lastMessage: msg,
                    messages: [msg],
                    count: 1,
                    rating: msg.to_user_rating
                })
            } else{
                const dialog = map.get(dialogUserId)!
                dialog.messages.push(msg)
                dialog.count++

                if(msg.created_at > dialog.lastMessage.created_at){
                    dialog.lastMessage = msg
                }
            }
        }

        return Array.from(map.values()).sort(
            (a,b) =>
                b.lastMessage.created_at.getTime() -
                a.lastMessage.created_at.getTime()
        )
    }, [inboxMessages, sentMessages, myUserId])

    return dialogs
}