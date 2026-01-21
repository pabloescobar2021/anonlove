"use client"

import { useState,useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { useRandColor } from "./useRandColor";

import { useAuth } from "../things/hooks/useAuth";
import { useMessages } from "../things/hooks/useMessages";
import {useCurrentMessage} from "../things/hooks/useMessages"

import { Item, ItemDto, Viewport, itemDtoListToItems } from "../things/types/type";

import { createText } from "./btnFunction";
import { userItemInteractions } from "./useItemInteractions";
import { useCheckMobile } from "../things/hooks/checkMobile";

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

    const [rightPanelOpen, setRightPanelOpen] = useState(false)
    const idRef = useRef<HTMLInputElement>(null)
    const anonRef = useRef<HTMLInputElement>(null)
    const [isAnon, setIsAnon] = useState(false)

    const [ismenuTextOpen, setMenuTextOpen] = useState(false)
    
    const touchDistanceRef = useRef<number | null>(null)

    const {startDrag, startResize, deleteItem} = userItemInteractions(items, setItems, fieldRef, viewport)


    useEffect(() => {
        if (to){
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


    // рандомный фон
    const {bg} = useRandColor()
    const bgStyle = `rgba(${Math.floor(bg.r)}, ${Math.floor(bg.g)}, ${Math.floor(bg.b)}, ${bg.a})`

    const handleSendMessage = async () => {
        const id = idRef.current?.value || ""
        const anonCheckbox = anonRef.current?.checked || false

        if (!id){
            alert('Введи ID, сладкий!')
            return
        }
        const cleanItems = items.map(({isSelected, isEditing, ...rest}) => rest)
        console.log("SEND PAYLOAD", cleanItems)
        
        try {
            await send({publicId: id}, cleanItems, isAnon)

            idRef.current!.value = ""
            setRightPanelOpen(false)
        } catch (error: any) {
            console.log(error.message || 'Error sending message');
        }
        
    }

    const handleZoom = (e: React.WheelEvent<HTMLDivElement>) => {
        // e.preventDefault()

        setViewport(v => ({
            ...v,
            scale: Math.min(3, Math.max(0.3, v.scale - e.deltaY * 0.001))
        }))
    }

    const getDistanceBetweenTouches = (touch1: Touch, touch2: Touch): number => {
        const dx = touch1.clientX - touch2.clientX
        const dy = touch1.clientY - touch2.clientY
        return Math.sqrt(dx * dx + dy * dy)
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length === 2) {
            touchDistanceRef.current = getDistanceBetweenTouches(e.touches[0] as Touch, e.touches[1] as Touch)
        }
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length === 2 && touchDistanceRef.current !== null) {
            e.preventDefault()
            const currentDistance = getDistanceBetweenTouches(e.touches[0] as Touch, e.touches[1] as Touch)
            const distanceDelta = currentDistance - touchDistanceRef.current
            
            setViewport(v => ({
                ...v,
                scale: Math.min(3, Math.max(0.3, v.scale + distanceDelta * 0.01))
            }))
            
            touchDistanceRef.current = currentDistance
        }
    }

    const handleTouchEnd = () => {
        touchDistanceRef.current = null
    }

    if (messageType?.type === "send") {
        return (
            <div 
                className={`relative flex flex-col justify-center items-center h-full overflow-hidden`}
                style={{ 
                    backgroundColor: bgStyle
                }}
            >
                {/* field */}
                <div
                    className={`relative border  rounded-md bg-white overflow-hidden z-10
                        ${isMobile ? "w-full h-1/2" : "w-1/2 h-1/2"}
                        `}
                    ref={fieldRef}
                    onMouseDown={(e) =>{
                        if(e.target !== e.currentTarget) return;
                        setItems(prev => prev.map(it => ({...it, isSelected: false, isEditing: 'none'})))
                    }}
                    onWheel={handleZoom}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        transform: `
                        translate(${viewport.offsetX}px, ${viewport.offsetY}px)
                        scale(${viewport.scale})
                        `,
                        transformOrigin: "center center"
                    }}
                >
                    {items.map((item,i) => (
                        <div 
                            key={item.id}
                            className={`flex 
                                    text-black select-none relative 
                                    ${item.isSelected && item.isEditing !== 'text' ? "border": ""}
                                    `}
                            style={{
                                position: "absolute",
                                left: item.x,
                                top: item.y,
                                width: item.w,
                                height: item.h,
                                fontSize: item.fontSize,
                                cursor: item.isSelected ? "move" : "pointer",
                            }}
                        onDoubleClick={() => {
                            setItems(prev => prev.map(it => it.id === item.id ? {...it, isEditing: "text"} : it))
                        }}
                        onMouseDown={(e) => {
                            startDrag(e,item)
                            setItems(prev => prev.map(it => ({...it, isSelected: it.id === item.id})))
                        }}
                        onTouchStart={(e) => {
                            startDrag(e,item)
                            setItems(prev => prev.map(it => ({...it, isSelected: it.id === item.id})))
                        }}
                        
                        >
                            {item.isEditing === "text" 
                            ?(
                                <input
                                    autoFocus
                                    value={item.content}
                                    onChange={(e) => {
                                        setItems(prev => prev.map(it => it.id === item.id 
                                            ? {...it, content: e.target.value} 
                                            : it))
                                    }}
                                    onBlur={() => {
                                        setItems(prev => prev.map(it => it.id === item.id 
                                            ? {...it, isEditing: 'none'}
                                            : it
                                        ))
                                    }}
                                    onKeyDown={(e) => {
                                        if(e.key === "Enter") e.currentTarget.blur()
                                    }}
                                >
                                
                                </input>
    
                            ): (
                                <div className={`relative w-full h-full text-wrap wrap-break-word flex 
                                                ${item.isSelected ? " " : "overflow-hidden" }`}> 
                                    {item.content}
    
                                    {item.isSelected && (
                                        <div className="">
    
                                            {/* menu */}
                                            <div
                                                className="absolute -top-1.5 -right-2.5 "
                                            >   
                                                <div className="relative"> 
                                                    <svg 
                                                        onClick={(e) => {
                                                            if(ismenuTextOpen) setMenuTextOpen(false);
                                                            else setMenuTextOpen(true)
                                                            e.stopPropagation()
                                                        }}
                                                        className="hover:scale-110 transition-transform cursor-pointer"
                                                        xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h24M4 16h24M4 24h24"/></svg>
                                                    <div
                                                        className={`absolute top-1 left-full text-[9px] bg-black/20 rounded-md w-15 h-15 flex flex-col
                                                            ${ismenuTextOpen ? "opacity-100" : "opacity-0"} transition-opacity`}
                                                    >
                                                        <button 
                                                            className="hover:bg-black/10 transition-colors" 
                                                            onClick={() => {deleteItem(item)}}>
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
    
                                            {/* resize */}
                                            <div 
                                                onMouseDown={(e) => {
                                                    e.stopPropagation()
                                                    startResize(e, item, "horizontal")
                                                }}
                                                onTouchStart={(e) => {
                                                    e.stopPropagation()
                                                    startResize(e, item, "horizontal")
                                                }}
                                                className="absolute -right-1 bottom-1/2 translate-y-1/2 w-1 h-3 bg-white 
                                                        border cursor-w-resize"> 
    
                                            </div>
    
                                            <div 
                                                onMouseDown={(e) => {
                                                    e.stopPropagation()
                                                    startResize(e, item, "top")
                                                }}
                                                onTouchStart={(e) => {
                                                    e.stopPropagation()
                                                    startResize(e, item, "top")
                                                }}
                                                className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-white 
                                                        border cursor-s-resize"> 
    
                                            </div>
    
                                            <div 
                                                onMouseDown={(e) => {
                                                    e.stopPropagation()
                                                    startResize(e, item, "bottom")
                                                }}
                                                onTouchStart={(e) => {
                                                    e.stopPropagation()
                                                    startResize(e, item, "bottom")
                                                }}
                                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-white 
                                                        border cursor-s-resize"> 
    
                                            </div>
    
                                            <div 
                                                onMouseDown={(e) => {
                                                    e.stopPropagation()
                                                    startResize(e, item, "diagonal")
                                                }}
                                                onTouchStart={(e) => {
                                                    e.stopPropagation()
                                                    startResize(e, item, "diagonal")
                                                }}
                                                className="absolute -bottom-1.5 -right-1.5  w-2 h-2 bg-white 
                                                        border cursor-se-resize"> 
    
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
    
                        </div>
                    ))}
                </div>
    
                <div className="flex p-2 mt-10">
    
                    <button
                        className="p-2 border rounded-2xl"  
                        onClick={() => createText(setItems)}
                    >
                        Text
                    </button>
    
                </div>
    
    
    
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
    
    
    
                {/* Кнопка справа */}
                <div
                    className={`absolute right-0  flex justify-center items-center overflow-hidden
                    w-7 rounded-l-full bg-black/50 backdrop-blur-md hover:bg-white/20 transition-cursor
                    md:inset-y-0
                    inset-y-60
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
                <div
                    className={`fixed inset-0 z-20 bg-black/50 transition-all duration-300 overflow-hidden 
                            ${rightPanelOpen ? "backdrop-blur-lg translate-x-0" : "backdrop-blur-none translate-x-full"}
                        `}
                    onMouseDown={(e) => setRightPanelOpen(false)}
                >
                    <div 
                        className="absolute right-0 inset-y-0 flex justify-center items-center 
                                md:w-[400px] w-full bg-black/90 z-20"
                        onMouseDown={(e) => {
                            e.stopPropagation()
                        }}
                    >   
                        <form 
                            className="relative flex flex-col w-full justify-center items-center"
                            onSubmit={(e) => {
                                e.preventDefault()
                            }}
                            >
                            <input
                                ref={idRef}
                                value={userId || ""}
                                onChange={(e) => setUserId(e.target.value)}
                                disabled={isReply}
                                type="text"
                                placeholder="ID кисы"
                                className={`p-2 mb-4 w-1/2 bg-white/10 border rounded-md text-white
                                        ${isReply && "opacity-50"}
                                `}
                            />
                            <div className="flex w-full justify-center items-center">
                                <input
                                    type="checkbox"
                                    ref={anonRef}
                                    checked={isAnon}
                                    onChange={(e) => {setIsAnon(e.target.checked)}}
                                    className="bg-white/10 border rounded-md text-white"
                                />
                                <span className="text-[10px]">{`Будешь анонимен? (потом можно изменить)`}</span>
                            </div>
    
                            <button
                                type="submit"
                                className="p-2 mt-4 border rounded-2xl hover:bg-white/20 transition-all duration-200"
                                onClick={handleSendMessage}
                            >
                                Отправить
                            </button>
    
                            <button 
                                className="absolute left-0 w-10 h-20 bg-white/20 rounded-r-full top-1/2 -translate-y-1/2
                                hover:bg-white/40 transition-all duration-200
                                "
                                onClick={() => setRightPanelOpen(false)}
                            >
                                {`>`}
                            </button>
                        </form>
                    </div>
                </div>
    
    
            </div>
        )
    } 
    if (messageType?.type === "recieve"){
        return (
            <div 
                className={`relative flex flex-col justify-center items-center h-full overflow-hidden`}
                style={{ 
                    backgroundColor: bgStyle
                }}
            >
                {/* field */}
                {!loading && user && (
                    <div
                        className={`relative border  rounded-md bg-white overflow-hidden z-10
                            ${isMobile ? "w-full h-1/2" : "w-1/2 h-1/2"}
                            `}
                        ref={fieldRef}
                        
                        onWheel={handleZoom}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{
                            transform: `
                            translate(${viewport.offsetX}px, ${viewport.offsetY}px)
                            scale(${viewport.scale})
                            `,
                            transformOrigin: "center center"
                        }}
                    >
                        {items.map((item,i) => (
                            <div 
                                key={item.id}
                                className={`flex 
                                        text-black select-none relative 
                                        `}
                                style={{
                                    position: "absolute",
                                    left: item.x,
                                    top: item.y,
                                    width: item.w,
                                    height: item.h,
                                    fontSize: item.fontSize,
                                    cursor: item.isSelected ? "move" : "pointer",
                                }}
                            >
                                <div className={`relative w-full h-full text-wrap wrap-break-word flex 
                                                ${item.isSelected ? " " : "overflow-hidden" }`}> 
                                    {item.content}

                                </div>
        
                            </div>
                        ))}
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
    
    
    
                {/* Кнопка справа */}
                <div
                    className={`absolute right-0  flex justify-center items-center overflow-hidden
                    w-7 rounded-l-full bg-black/50 backdrop-blur-md hover:bg-white/20 transition-cursor
                    md:inset-y-0
                    inset-y-60
                    z-20
                    ${isMobile ? "bg-black/50" : "bg-white/10"}
                    ${isMine === "true" ? "hidden" : ""}
                    `}
                    
                >
                    <button 
                        onClick={() => {setRightPanelOpen(true)}}
                        className="w-full h-full">
                        {`...`}
                    </button>
    
                </div>
    
                {/* поле отправить */}
                <div
                    className={`fixed inset-0 z-20 bg-black/50 transition-all duration-300 overflow-hidden 
                            ${rightPanelOpen ? "backdrop-blur-lg translate-x-0" : "backdrop-blur-none translate-x-full"}
                            ${isMine === "true" ? "hidden" : ""}
                        `}
                    onMouseDown={(e) => setRightPanelOpen(false)}
                >
                    <div 
                        className="absolute right-0 inset-y-0 flex justify-center items-center 
                                md:w-[400px] w-full bg-black/90 z-20"
                        onMouseDown={(e) => {
                            e.stopPropagation()
                        }}
                    >   
                        <form 
                            className="relative flex flex-col w-full justify-center items-center"
                            onSubmit={(e) => {
                                e.preventDefault()
                            }}
                            >
                            <input
                                ref={idRef}
                                value={messageId || ''}
                                onChange={(e) => setUserId(e.target.value)}
                                disabled={isReply}
                                type="text"
                                placeholder="ID кисы"
                                className={`p-2 mb-4 w-1/2 bg-white/10 border rounded-md text-white
                                        ${isReply && "opacity-50"}
                                `}
                            />
                            <div className="flex w-full justify-center items-center">
                                <input
                                    type="checkbox"
                                    ref={anonRef}
                                    checked={isAnon}
                                    onChange={(e) => {setIsAnon}}
                                    className="bg-white/10 border rounded-md text-white"
                                />
                                <span className="text-[10px]">{`Будешь анонимен? (потом можно изменить)`}</span>
                            </div>
    
                            <button
                                type="submit"
                                className="p-2 mt-4 border rounded-2xl hover:bg-white/20 transition-all duration-200"
                                onClick={handleSendMessage}
                            >
                                Отправить
                            </button>
    
                            <button 
                                className="absolute left-0 w-10 h-20 bg-white/20 rounded-r-full top-1/2 -translate-y-1/2
                                hover:bg-white/40 transition-all duration-200
                                "
                                onClick={() => setRightPanelOpen(false)}
                            >
                                {`>`}
                            </button>
                        </form>
                    </div>
                </div>
    
    
            </div>
        )
    }

}