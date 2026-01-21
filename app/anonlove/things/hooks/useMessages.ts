"use client"

import { useState, useEffect, useMemo } from "react"
import { getInboxMessages, getSentMessages, sendMessage, getCurrentMessage } from "../utils/messages"
import { ItemDto, Item, Message, UiMessage, itemDtoListToItems } from "../types/type"



export function useMessages(userId: string | null) {
    const [inbox, setInbox] = useState<any[]>([])
    const [sent, setSent] = useState<any[]>([])
    const [loading, setLoading] = useState(true)


    const loadMessage = async () => {
        if(!userId) return

        try{
            setLoading(true)
            const [inboxData, sentData] = await Promise.all([
                getInboxMessages(userId), 
                getSentMessages(userId)
            ])

            setInbox(inboxData)
            setSent(sentData)
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
        
        await sendMessage({
            fromUserId: userId,
            toUserId: to.userId,
            toPublicId: to.publicId, 
            body, 
            isAnon
        })

        await loadMessage()
    }

    return {
        inbox,
        sent,
        loading,
        sendMessage: send,
        refresh: loadMessage
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
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!userId || !messageId) return

        const loadMessage = async () => {
            setLoading(true)
            try{
                const data = await getCurrentMessage(messageId, userId, isMine)
                setMessage({
                    ...data,
                    body: itemDtoListToItems(data.body) 
                })
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



type Dialog = {
    userId: string,
    displayId: string,

    lastMessage: Message,
    messages: Message[],
    count: number
}

export function useDialogs(
    inboxMessages: Message[],
    sentMessages: Message[],
    myUserId: string
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
                displayId = msg.from_display_id
            }

            if(!map.has(dialogUserId)) {
                map.set(dialogUserId, {
                    userId: dialogUserId,
                    displayId: displayId,

                    lastMessage: msg,
                    messages: [msg],
                    count: 1
                })
            } else{
                const dialog = map.get(dialogUserId)!
                dialog.messages.push(msg)
                dialog.count++

                if(
                    new Date(msg.created_at) >
                    new Date(dialog.lastMessage.created_at)
                ){
                    dialog.lastMessage = msg
                }
            }
        }

        return Array.from(map.values()).sort(
            (a,b) =>
                new Date(b.lastMessage.created_at).getTime() -
                new Date(a.lastMessage.created_at).getTime()
        )
    }, [inboxMessages, sentMessages, myUserId])

    return dialogs
}