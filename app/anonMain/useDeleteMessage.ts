import { supabase } from "@/utils/supabase/alSupabase"
import { useShatterMessage } from "./useShatterMessage"
import { useCallback, useState } from "react"
import { UiMessage } from "../things/types/type"
type Props = {
    setAction: (v: any) => void
    setMessages: React.Dispatch<React.SetStateAction<UiMessage[]>>
    bubbleRef?: React.RefObject<Record<string, HTMLDivElement | null>>
    wrapperRef?: React.RefObject<Record<string, HTMLDivElement | null>>
    shatterMessages: (bubbles: HTMLDivElement[], onComplete: () => void) => void
}
export function useDeleteMessage(p: Props) {
    const { setAction, setMessages, bubbleRef, wrapperRef, shatterMessages } = p
    const [deletingMsg, setDeletingMsg] = useState<string[]>([])


    const deleteMessageForMe = async (ids: string[]) => {
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

    const hideMessage = useCallback(async (ids: string[]) => {
        if(!ids.length)  return

        const bubbles = ids
            .map((id) => bubbleRef?.current[id])
            .filter((el): el is HTMLDivElement => Boolean(el));
        const wrappers = ids
            .map((id) => wrapperRef?.current[id])
            .filter((el): el is HTMLDivElement => Boolean(el));

        wrappers.forEach(el => {
            el.style.height = `${el.offsetHeight}px`
        })

        shatterMessages(bubbles, async () => {
            try{

                requestAnimationFrame(() => {
                    setDeletingMsg([...ids])
                })  
                await Promise.all(wrappers.map(el =>
                    new Promise<void>(resolve => {
                        const onEnd = (e: TransitionEvent) => {
                            if(e.propertyName !== 'height') return
                            el.removeEventListener('transitionend', onEnd)
                            resolve()
                        }
                        el.addEventListener('transitionend', onEnd)
                        setTimeout(resolve, 500)
                    })
                ))   

                setMessages(prev => prev.filter(msg => !ids.includes(msg.id)))
                setDeletingMsg([])
                await deleteMessageForMe(ids)
                

            } catch (error) {
                console.error("Error deleting message:", error)
                 setDeletingMsg([])
            }
        })

    },[bubbleRef, wrapperRef, shatterMessages, setMessages])

    

    return{hideMessage, deletingMsg }
}

