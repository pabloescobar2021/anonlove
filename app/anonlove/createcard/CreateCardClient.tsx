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

import { Item, ItemDto, Viewport, itemDtoListToItems } from "../things/types/type";

import { CanvasItem, RightField } from "./components/all";

import { createText } from "./btnFunction";
import { userItemInteractions } from "./useItemInteractions";
import { useCheckMobile } from "../things/hooks/checkMobile";
import { Redactor, ItemPatch } from "./components/Redactor";

type MessageData = {
    items: Item[]
}
type TypeData = {
    type: string
}

export default function CreateCardPage({initialData}: {initialData?: MessageData}) {
    const {user, profile, loading: authLoading} = useAuth();

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
    

    const isMobile = useCheckMobile()

    const {sendMessage: send, loading: messageLoading} = useMessages(user?.id || null);
    const {message, loading} = useCurrentMessage(
        isRecieve ? user?.id || null : null, 
        isRecieve ? messageId : null,
        isMine
    )
    
    const router = useRouter()
    
    const [items, setItems] = useState<Item[]>(initialData?.items || [])
    const fieldRef = useRef<HTMLDivElement>(null)
    const [viewport, setViewport] = useState<Viewport>({
        scale: 1,
        offsetX: 0,
        offsetY: 0
    })
    
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
    

    const [ismenuTextOpen, setMenuTextOpen] = useState(false)
    
    const {startDrag, startResize, deleteItem, zoomHandlers} = userItemInteractions(
        items, 
        setItems, 
        fieldRef,
        setViewport, 
        viewport
    
    )

    // redactor panel
        const [redactorOpen, setRedactorOpen] = useState(false)
        const [selectedItemId, setSelectedItemId] = useState<number | null>(null) 
        const selectedItem = useMemo(
            () => items.find(item => item.id === selectedItemId) ?? null,
            [items, selectedItemId]
        )
    //


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
        const cleanItems = items.map(({isSelected, isEditing, ...rest}) => rest)
        console.log("SEND PAYLOAD", cleanItems)
        
        try {
            await send({publicId: id}, cleanItems, anonState.isAnon)

            idRef.current!.value = ""
            setRightPanelOpen(false)
            router.push('anonlovemain')
        } catch (error: any) {
            console.log(error.message || 'Error sending message');
        }
    }

    const handleRedactorChange = (id: number, patch: ItemPatch) => {
        setItems(prev => 
            prev.map(item =>
                item.id === id 
                    ? {...item, ...patch}
                    : item
            )
        )
    }

    


        return (
            <div 
                className={`relative flex flex-col justify-center items-center h-full overflow-hidden`}
                style={{ 
                    backgroundColor: bgStyle
                }}
            >
                {/* field */}
                {(isSend || (isRecieve && !loading))  && (
                    <div
                        className={`relative border rounded-md bg-white overflow-hidden z-10
                            touch-none select-none
                            ${isMobile ? "w-full h-1/2" : "w-1/2 h-1/2"}
                            `}
                        ref={fieldRef}
                        onMouseDown={(e) =>{
                            if(e.target !== e.currentTarget) return;
                            setItems(prev => prev.map(it => ({...it, isSelected: false, isEditing: 'none'})))
                        }}
                        {...zoomHandlers}
                        style={{
                            transform: `
                            translate(${viewport.offsetX}px, ${viewport.offsetY}px)
                            scale(${viewport.scale})
                            `,
                            transformOrigin: "center center"
                        }}
                    >
                        {items.map((item,i) => (
                            <CanvasItem
                                key={item.id}
                                item={item}
                                canEdit={canEdit}
                                onSelect={id => setItems(prev =>
                                prev.map(it => ({ ...it, isSelected: it.id === id }))
                                )}
                                onUpdate={(id, patch) => setItems(prev =>
                                prev.map(it => (it.id === id ? { ...it, ...patch } : it))
                                )}
                                onDelete={item => setItems(prev => prev.filter(it => it.id !== item.id))}
                                startDrag={startDrag}
                                startResize={startResize}
                                ismenuTextOpen={ismenuTextOpen}
                                setMenuTextOpen={setMenuTextOpen}
                                isLoading={loading}
                                setselectedItemId={setSelectedItemId}
                            />
                        ))}
                    </div>
                )}
                
                {!isRecieve && (
                    <div 
                    className={`flex p-2 mt-10 bg-[#ffffff1a] rounded-full backdrop-blur-md
                        `}
                    >
        
                        <button
                            className="p-2 border rounded-2xl"  
                            onClick={() => createText(setItems)}
                        >
                            Text
                        </button>
        
                    </div>
                )}
    
    
    
                {/* кнопка назад */}
                <div
                    className={`absolute left-0  flex justify-center items-center 
                    w-7 rounded-r-full backdrop-blur-md hover:bg-white/20 transition-cursor
                    md:inset-y-0
                    inset-y-60
                    z-20
                    ${isMobile ? "bg-black/50" : "bg-white/10"}
                    `}
                    
                >
                    <button 
                        onClick={() => router.push("anonlovemain")}
                        className="w-full h-full ">
                        {`<`}
                    </button>
                </div>


    
                {/* редактор */}
                <div className="z-20">
                    <Redactor
                        item={selectedItem}
                        items={items}
                        open={setRedactorOpen}
                        isOpen={redactorOpen}
                        onChange={handleRedactorChange}
                    />
                </div>
    
    

                {/* Кнопка справа */}
                <div
                    className={`absolute right-1/2 bottom-0 translate-x-1/2 
                    flex justify-center items-center overflow-hidden
                    w-50 rounded-t-2xl bg-black/50 backdrop-blur-md hover:bg-white/20 transition-cursor
                    z-20
                    ${isMobile ? "bg-black/50" : "bg-white/10"}
                    `}
                    
                >
                    <button 
                        onClick={() => {setRightPanelOpen(true)}}
                        className="w-full h-full">
                        {`...`}
                    </button>
    
                </div>
    
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
                />

    
    
            </div>
        )
    

}