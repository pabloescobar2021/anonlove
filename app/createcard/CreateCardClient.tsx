"use client"

import { useState,useEffect, useRef, useMemo } from "react"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { useRandColor } from "./useRandColor";

import { useAuth } from "../things/hooks/useAuth";
import { useMessages } from "../things/hooks/useMessages";
import {useCurrentMessage} from "../things/hooks/useMessages"
import { useSetAnon } from "../things/hooks/useSetAnon";
import { getId } from "../things/utils/getId";
import { useGetDialogUsers } from "../things/hooks/useGetDialogUsers";

import { Item } from "../things/types/type";

import { RightField } from "./components/all";

import { useCheckMobile } from "../things/hooks/checkMobile";

import { Canvas} from "./components/canvas";

type MessageData = {
    items: Item[]
}
type TypeData = {
    type: string
}

export default function CreateCardPage({initialData}: {initialData?: MessageData}) {
    const {user, profile, loading: authLoading} = useAuth();
    const router = useRouter()

    const searchParams = useSearchParams()
    //messageId
    const messageIdRaw = searchParams.get("id")
    const messageId = messageIdRaw ? decodeURIComponent(messageIdRaw) : null
    //userId
    const rawTo = searchParams.get("to")
    const to = rawTo ? decodeURIComponent(rawTo) : null
    const [userId, setUserId] = useState<string | null>(null) // получаем из url
    const [isReply, setIsReply] = useState(false)
    // чье сообщение isMine = true || false
    const isMine = searchParams.get("isMine")
    // тип перехода send или recieve
    const type = searchParams.get("type")
    const [messageType, setMessageType] = useState<TypeData | null>(null)
    const isRecieve = type === "recieve"
    const isSend = type === "send"
    const canEdit = isSend
    

    const isMobile = useCheckMobile() // проверка разрешения

    const {sendMessage: send, loading: messageLoading} = useMessages(user?.id || null);
    const {message, loading} = useCurrentMessage(
        isRecieve ? user?.id || null : null, 
        isRecieve ? messageId : null,
        isMine
    )
    
    const [items, setItems] = useState<Item[]>(initialData?.items || [])
    
    const {checkAnon} = useSetAnon()
    const [rightPanelOpen, setRightPanelOpen] = useState(false)
    const idRef = useRef<HTMLInputElement>(null)
    const anonRef = useRef<HTMLInputElement>(null)
    const [anonState, setAnonState] = useState({
        isAnon: false,
        anonUsedOnce: false,
        canToggle: true
    })
    const [userError, setUserError] = useState<string | null>(null)
    const { dialogs, loading: dialogsLoading, error: dialogsError } = useGetDialogUsers(user?.id || null);

    
    useEffect(() => {
        if (to){
            setItems([])
            setUserId(to)
            setIsReply(true)
        };

        if (type){
            setMessageType({type})
        };
    },[to, type])

    useEffect(() => {
        if (!isRecieve) return
        if (!message) return
        if (loading) return

        setItems(message.body)
    }, [isRecieve, message])


    // Прочтение сообщений
    useEffect(() => {
        if(isMine) return
        if(messageId && type === "recieve") {

            fetch("/api/mark-read", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ messageId })
            })
            .then(async res => {
                const data = await res.json()
                console.log("response", {status: res.status, data})
                if(!res.ok){
                    console.error("failed", data)
                }else{
                    console.log("success",data)
                }
            })
            .catch(err => console.log("❌ Fetch error:", err))
        }
    }, [messageId, type, to])



    // проверка на анон
    useEffect(() => {
        if(!userId || !user) return

        const fetchAnon = async () => {
            try {
                setUserError(null)
                const toUserId = await getId(userId)
                if(!toUserId) {
                    setUserError("Пользователь не найден")
                    return
                }

                const state = await checkAnon(user.id, toUserId)
                setAnonState(state)
            }catch(err: any){
                if(err.message === "User not found") {
                    setUserError("Пользователь не найден")
                } else {
                    setUserError("Ошибка при проверке пользователя")
                }
                console.log(`Error:`, err)
            }
        }
        
        fetchAnon()
    },[userId, user])

    

    // рандомный фон
    const {bg} = useRandColor()
    const bgStyle = `rgba(${Math.floor(bg.r)}, ${Math.floor(bg.g)}, ${Math.floor(bg.b)}, ${bg.a})`

    const handleSendMessage = async () => {
        const id = idRef.current?.value || ""

        if (!id){
            alert('Введи ID, сладкий!')
            return
        }
        if (id === profile.public_id){
            alert('Нельзя отправить сообщение самому себе!')
            return
        }
        const cleanItems = items.map(item => {
            if(item.type === 'text') {
                const {isSelected, isEditing, ...rest} = item
                return rest
            }
            const {isSelected, ...rest} = item
            return rest
        })
        
        try {
            await send({publicId: id}, cleanItems, anonState.isAnon)

            idRef.current!.value = ""
            setRightPanelOpen(false)
            router.push('/')
        } catch (error: any) {
            console.log(error.message || 'Error sending message');
        }
    }

        return (
            <div 
                className={`relative flex flex-col justify-center items-center h-full overflow-hidden`}
                style={{ 
                    backgroundColor: bgStyle
                }}
                onClick={(e) => {
                    if(e.target !== e.currentTarget) return;
                }}
            >
                {/* field */}
                {(isSend || (isRecieve && !loading))  && (
                    <Canvas
                        items={items}
                        setItems={setItems}
                        canEdit={canEdit}
                        isRecieve={isRecieve}
                    />

                )}
                
    
                {/* кнопка назад */}
                <div
                    className={`absolute  flex justify-center items-center z-20
                    rounded-full backdrop-blur-md transition-all duration-200

                    bg-linear-to-br from-white/20 to-white/10 border-white/20
                    hover:from-white/20 hover:to-white/30
                    ${isMobile ? "w-10 h-10 left-3 top-3" : "w-12 h-12 left-5 top-5"}
                    `}
                    
                >
                    <button 
                        onClick={() => router.push("/")}
                        className="w-full h-full ">
                        {`<`}
                    </button>
                </div>



                {/* Кнопка снизу для поля отправить */}
                {(!isMobile && isMine!=="true") 
                ? (
                    <div
                        className={`absolute right-0 bottom-0 -translate-y-1/2
                        flex justify-center items-center overflow-hidden
                        w-7 h-1/2 rounded-l-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-cursor
                        z-20
                        `}
                        
                    >
                        <button 
                            onClick={() => {setRightPanelOpen(true)}}
                            className="flexC w-full h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"/></svg>                    
                        </button>
                    </div>

                ) :(
                    <div
                        className={`absolute bottom-0 right-0 
                        flex justify-center items-center overflow-hidden
                        w-7 h-12 rounded-l-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-cursor
                        z-20
                        `}
                        
                    >
                        <button 
                            onClick={() => {setRightPanelOpen(true)}}
                            className="flexC w-full h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"/></svg>                    
                        </button>
                    </div>
                )}
    
                {/* поле отправить */}
                <RightField
                    rightPanelOpen={rightPanelOpen}
                    setRightPanelOpen={setRightPanelOpen}
                    userId={userId}
                    setUserId={setUserId}
                    isReply={isReply}
                    anonState={anonState}
                    setAnonState={(isAnon) => 
                        setAnonState(s =>({...s, isAnon}))
                    }
                    handleSendMessage={handleSendMessage}
                    idRef={idRef}
                    anonRef={anonRef}
                    isRecieve={isRecieve}
                    routeTo={id => {
                        // router.push(`createcard?type=send&id=${encodeURIComponent(id ?? '')}`)
                        router.push(`createcard?type=send&to=${encodeURIComponent(id ?? '')}`)
                    }}
                    userError={userError}
                    to={to}
                    dialogs={dialogs}
                    isMine={isMine}
                />

    
    
            </div>
        )
    

}