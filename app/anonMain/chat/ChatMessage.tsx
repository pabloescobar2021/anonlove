"use client"

import { ReadIndicator } from "@/app/createcard/components/ReadIndicator"
import { UiMessage } from "@/app/things/types/type"
import { formatBackendDate } from "@/app/things/utils/parseDate"
import React, { useEffect, useState, useRef, useCallback, memo } from "react"
import { useRouter } from "next/navigation"

type ActionState = {
        message: UiMessage;
        rect: DOMRect;
        type: "desktop" | "mobile";
        isMine: boolean;
    } | null; // messagePanel

type Props = {
    message: UiMessage
    userId: string | undefined
    wrapperRef: React.RefObject<Record<string, HTMLDivElement | null>>
    bubbleRef: React.RefObject<Record<string, HTMLDivElement | null>>
    isSelectTouched: boolean
    setSelectTouched: (v: string | null) => void
    isChoose: boolean
    setChoosenMsg: React.Dispatch<React.SetStateAction<string[]>>
    isDeletingMsg: boolean
    isChoosenMsg: boolean
    isMobile: boolean
    setAction: React.Dispatch<React.SetStateAction<ActionState>>
    timer: React.RefObject<number | null>
    cancelTouch: () => void
    styleButton: any
}

export const ChatMessage = React.memo(function ChatMessage(p: Props) {
    const {
        message, 
        userId,
        wrapperRef,
        bubbleRef,
        isDeletingMsg,
        isSelectTouched,
        setSelectTouched,
        isChoose,
        setChoosenMsg,
        isChoosenMsg,
        isMobile,
        setAction,
        timer,
        cancelTouch,
        styleButton
    } = p
    const router = useRouter()

    const avatar = message.from_display_id.charAt(1).toUpperCase();
    const nameLabel = message.from_display_id;
    const isMine = message.from_user === userId;
    const date = formatBackendDate(message.created_at);

    const setWrapper = useCallback((el: HTMLDivElement | null) => {
        wrapperRef.current[message.id] = el
    },[message.id])

    const setBubble = useCallback((el: HTMLDivElement | null) => {
        bubbleRef.current[message.id] = el
    },[message.id])

    const handleClick = useCallback(() => {
        if(isChoose) {
            setChoosenMsg(prev => 
                prev.includes(message.id)
                    ? prev.filter(id => id !== message.id)
                    : [...prev, message.id]
            )
        }else{
            router.push(
                `createcard?isMine=${isMine}&id=${encodeURIComponent(message.id)}&type=recieve&to=${encodeURIComponent(message?.from_display_id ?? "")}`
            )
        }
    },[isChoose, message.id, isMine, message.from_display_id, router])

    const handleContextMenu = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile) return;
        e.preventDefault()
        const rect = e.currentTarget.getBoundingClientRect()
        setSelectTouched(message.id)
        setAction({ message, rect, type: "desktop", isMine })
    },[isMobile, message, isMine, setAction, setSelectTouched])

    const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (!isMobile || isChoose) return;

        if (e.pointerType !== "touch") return 
        const target = e.currentTarget as HTMLDivElement
        setSelectTouched(message.id);

        timer.current = window.setTimeout(() => {
            const rect = target.getBoundingClientRect();

            setAction({ message, rect, type: "mobile", isMine });
        }, 400);
    },[isMobile, isChoose, message, isMine, setAction, setSelectTouched, timer])

    
    

    return (
        <div
            ref={setWrapper}

            className={`flex flex-col relative w-full transition  select-none 
                ${isMine ? "items-end" : "items-start"} 
                message-wrapper ${isDeletingMsg ? "message--collapsing" : ""}
            `}
            style={{transition: "opacity 0.3s ease-in-out"}}
        >
            <div
                ref={setBubble}
                className={`relative flex flex-col items-center justify-center p-2 gap-2 w-1/2 rounded-2xl cursor-pointer 
                            transition-all 
                    ${!isMine 
                        ? "bg-linear-to-b from-[#ff00666d] to-[#ec015f5d]" 
                        : "bg-linear-to-b from-white/60 to-white/40"}
                    ${isSelectTouched && isMobile ? "scale-95" : ""}
                    ${isSelectTouched && !isMobile ? (isMine ? "border-l" : "border-r") : ""}
                    message ${isDeletingMsg ? "message--deleting" : ""}
                `}
                style={isMine ? styleButton[1] : styleButton[0]}
                onClick={(e) => {
                    handleClick()
                }}
                onContextMenu={handleContextMenu}
                onPointerDown={handlePointerDown}
                onPointerCancel={() => cancelTouch()}
            >
                <div className="flexC gap-2">
                    <div className="md:w-6 md:h-6 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-md font-bold shrink-0">
                        {avatar}
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold medium">{nameLabel}</span>
                        <span className="small line-clamp-2">{``}</span>
                    </div>
                </div>

                <div className="text-[9px] text-[#cdcdcd]">{date}</div>

                <ReadIndicator isRead={message.is_checked} isMine={isMine} />
                
                {isChoose && (
                    <div
                        className={`absolute w-3 h-3 rounded-full border
                            ${!isMine ? "-right-10" : "-left-10"}
                            ${isChoose ? "opacity-100 " : "opacity-0"}
                            ${isChoosenMsg ? "bg-white" : ""}
                        `}
                    ></div>
                )}

            </div>
        </div>
    )
})
