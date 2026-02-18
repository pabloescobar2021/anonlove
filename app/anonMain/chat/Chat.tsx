import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { formatBackendDate, parseDate } from "../../things/utils/parseDate";
import { ReadIndicator } from "../../createcard/components/ReadIndicator";
import { Dialog, UiMessage } from "../../things/types/type";
import { Rating } from "../../createcard/components/Rating";
import { useRouter } from "next/navigation";
import { MessageActionRoot } from "../../contextMenu/messagePanel";
import { AnimatedButton } from "../AnimatedButton";
import { useMessageRead } from "@/app/things/hooks/useCheckMsg";
import { useDeleteMessage } from "../useDeleteMessage";
import { useSwipe } from "@/app/things/hooks/useSwipe";
import { DialogResizehandler } from "../DialogResizehandler";
import { useShatterMessage } from "../useShatterMessage";
import { ModalProfile } from "@/app/modal/modalProfile";
import { HelperMsg } from "./HelperMsg";

import { useGetMessages } from "@/app/things/hooks/dialog_messages/useGetMessages";

export type Props = {
    userId: string | undefined;
    dialog: Dialog[];
    setOpenProfile: (open: boolean) => void;
    setOpenChat: (open: boolean) => void;
    openChat: boolean;
    isMobile: boolean;
    deleteMessage: (id: string[]) => Promise<void>;
    refresh: () => Promise<void>;
}

export function ManagerChat(props: Props) {
    const {
        userId, dialog,
        setOpenProfile, setOpenChat,
        openChat, isMobile,
        deleteMessage, refresh
    } = props;
    const router = useRouter();
    
    const [activeChatUserId, setActiveChatUserId] = useState<string | null>(null);
    const [activeDialogId, setActiveDialogId] = useState<string | null>(null);
    const [activeDialog, setActiveDialog] = useState<Dialog | null>(null);
    const [openModalProfile, setOpenModalProfile] = useState<Dialog | null>(null); // state модалка профиля
    const [action, setAction] = useState<ActionState>(null);
    const [isChoose, setIsChoose] = useState(false);
    const [choosenMsg, setChoosenMsg] = useState<any[]>([]);
    const [selectTouched, setSelectTouched] = useState<string | null>(null);
    
    const wrapperRef = useRef<Record<string, HTMLDivElement | null>>({})
    const bubbleRef = useRef<Record<string, HTMLDivElement | null>>({})
    
    const {messages, setMessages, loading, loadingMore, hasMore, refreshMessages, containerRef, handleScroll} = useGetMessages(activeDialogId)
    const {canvasRef, shatterMessages} = useShatterMessage({})
    
    let timer = useRef<number | null>(null);
    const dialogPanelRef = useRef<HTMLDivElement>(null!); // dialogResizeHandler (только для desktop)
    const bottomRef = useRef<HTMLDivElement>(null) // для скролла к последнему сообщению

    type ActionState = {
        message: UiMessage;
        rect: DOMRect;
        type: "desktop" | "mobile";
        isMine: boolean;
    } | null; // messagePanel

    const closeMenu = () => {
        setAction(null);
        setSelectTouched(null);
    };
    const cancelTouch = () => {
        clearInterval(timer.current!);
        setSelectTouched(null);
    };
   


    // синхронизация activeDialog с dialogs
    useEffect(() => {
        if (!activeDialogId) {
            setActiveDialog(null);
            return;
        }
        const found = dialog.find((d) => d.conversation_id === activeDialogId) || null;
        setActiveDialog(found);
    }, [dialog, activeDialogId]);

    const { hideMessage, deletingMsg } = useDeleteMessage({
        setAction, 
        setMessages,
        bubbleRef: bubbleRef,
        wrapperRef: wrapperRef,
        shatterMessages
    });
    

    const readMessages = async (dialog: Dialog) => {
        try{
            const response = await fetch("/api/read-messages/read-all-messages", { 
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ 
                    conversation_id: dialog.conversation_id, 
                    user_id: userId 
                }),
                credentials: 'include' // Важно для авторизации
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to mark messages as read");
            }
            refresh()
        } catch(err){
            console.error("❌ fetch error:", err)
        }
    }

    // swipe handlers для mobile
    const profileSwipe = useSwipe({
        onSwipeLeft: () => {
            if (!isMobile) return;
            setOpenProfile(false);
        },
        onSwipeRight: () => {
            if (!isMobile) return;
            setOpenProfile(true);
        },
    });
    const chatSwipe = useSwipe({
        onSwipeRight: () => {
            if (!isMobile) return;
            setOpenChat(false);
        },
    });

    // при изменение разрешения автоматический ресайз
    useLayoutEffect(() => {
        if (!isMobile) {
            dialogPanelRef.current.style.width = "50%"
            return
        };
        if(isMobile){
            dialogPanelRef.current.style.width = "100vw"
            return
        }
    },[isMobile])
  
    return (
        <main
            className={`flex overflow-hidden bg-[#12080b] select-none ${isMobile ? "" : "h-screen"}`}
            {...(isMobile && !openChat ? profileSwipe : {})}
        >
            
            {/* DIALOGS */}
            <div
                ref={dialogPanelRef}
                className={`bg-[#12080b] overflow-y-auto overflow-x-hidden
                    ${
                        isMobile
                            ? `absolute inset-0 transition-transform duration-300 ease-out will-change-transform ${
                                  openChat ? "-translate-x-full" : "translate-x-0"
                              }`
                            : "relative w-1/2 border-r border-[#d91c558b]"
                    }
                `}
                style={{
                    overscrollBehavior: "contain",
                    touchAction: "pan-y",
                }}
            >
                {/* Header диалогов */}
                <div className="flex w-full relative backdrop-blur-md">
                    <button
                        onClick={() => setOpenProfile(true)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 prettyBtnChat"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 8h24M4 16h24M4 24h24"
                            />
                        </svg>
                    </button>

                    <button className="p-2 rounded-md w-full text-center flex justify-center items-center">
                        <span className="medium font-semibold">Чаты</span>
                    </button>

                    <div className="absolute bottom-1/2 translate-y-1/2 right-2 prettyBtnChat">
                        <AnimatedButton
                            openModal={() => {
                                router.push(`createcard?type=send`);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2 4h28v18H16l-8 7v-7H2Z"
                                />
                            </svg>
                        </AnimatedButton>
                    </div>
                </div>

                {/* Resize handler только для desktop */}
                {!isMobile && <DialogResizehandler dialogPanelRef={dialogPanelRef} />}
                
                

                {/* Список диалогов */}
                <div className="flex flex-col pt-4 px-2 gap-2">
                    {dialog.map((dialog) => {
                        const avatar = dialog.other_display_id.charAt(1).toUpperCase();
                        const title = dialog.other_display_id;
                        const timeSend = formatBackendDate(dialog.updated_at)
                        const unread = dialog.unread_count
                        return (
                            <button
                                key={dialog.conversation_id}
                                className={`flex w-full p-3 items-center relative gap-2 rounded-2xl transition-colors
                                ${ dialog.conversation_id !== activeDialogId && !isMobile ? "bg-[#5b5b5ba2]" : "bg-[#949494a2]"}
                                `}
                                onClick={() => {
                                    setActiveDialogId(dialog.conversation_id);
                                    setActiveDialog(dialog);
                                    setActiveChatUserId(dialog.other_display_id);
                                    if (isMobile) setOpenChat(true);

                                    readMessages(dialog)
                                }}
                            >
                                {/* AVATAR */}
                                <div
                                    className={`flex w-8 h-8 items-center justify-center rounded-full text-lg font-bold transition-all
                                        bg-linear-to-b from-red-500 to-red-700 backdrop-blur-md
                                        hover:from-red-600 hover:to-red-800 hover:border hover:border-white/40
                                    `}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenModalProfile(dialog);
                                    }}
                                >
                                    <span>
                                        {avatar}
                                    </span>
                                </div>

                                {/* NAME */}
                                <span className="font-semibold">{title}</span>

                                {/* TIME */}
                                <p className="absolute right-2 top-3 flexC text-center text-gray-400 text-[10px]">
                                    {timeSend}
                                </p>
                                {/* UNREAD */}
                                {unread > 0 && (
                                    <p 
                                        className="absolute right-2 bottom-1 flexC text-center 
                                        unreadMsg
                                    ">
                                        {unread}
                                    </p>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* StartHelper */}
                {dialog.length === 0 && (
                    <HelperMsg
                />
            )}
            </div>

            {/* MESSAGES */}
            <div
                ref={containerRef} 
                onScroll={handleScroll}
                className={`overflow-y-auto flex-1 bg-[#0e0406]
                    ${isMobile
                        ? `absolute inset-0 bg-[#12080b] transition-transform duration-300 ease-in-out will-change-transform 
                        ${openChat ? "translate-x-0" : "translate-x-full"}`
                        : "flex-1 flex flex-col"
                    }
                `}
                {...(isMobile ? chatSwipe : {})}
            >
                {/* Header чата */}
                {activeChatUserId && !isChoose && (
                    <div className="sticky top-0 w-full flexC py-2 z-20">
                        <button
                            className={`flexC z-10 prettyBtnChat
                                ${isMobile ? '': 'opacity-0 pointer-events-none'}`}
                            onClick={() => setOpenChat(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77"
                                />
                            </svg>
                        </button>

                        <div className="flexC mx-auto text-[15px] prettyBtnChat">
                            {activeChatUserId}
                            {/* <Rating value={activeDialog?.rating}></Rating> */}
                        </div>

                        <button
                            className={`flexC prettyBtnChat
                                ${isMobile ? "justify-self-center" : "justify-self-end w-20"}
                            `}
                            onClick={() => {
                                router.push(
                                    `createcard?type=send&to=${encodeURIComponent(activeChatUserId ?? "")}`
                                );
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 14 14"
                            >
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M7.5.5h-5a1 1 0 0 0-1 1v9l-1 3l4-1h8a1 1 0 0 0 1-1v-5" />
                                    <path d="m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a.999.999 0 0 1 1.42 0l1.06 1.06a1.001 1.001 0 0 1 0 1.42z" />
                                </g>
                            </svg>
                        </button>
                    </div>
                )}
                {/* header при выборе сообщений */}
                {isChoose && (
                    <div className="sticky top-0 w-full flex items-start justify-between z-20 text-[15px] p-1">
                        <button
                            className="flexC prettyBtn"
                            onClick={() => {
                                setIsChoose(false);
                                setChoosenMsg([]);
                            }}
                        >
                            Назад
                        </button>

                        <button className="flexC prettyBtn" 
                            onClick={() => {
                                hideMessage(choosenMsg)
                            }}
                        >
                            Удалить
                        </button>
                    </div>
                )}

                {/* Список сообщений */}
                <div 
                    className="relative flex flex-col p-2 space-y-2 "
                >
                    {/* Индикатор загрузки */}
                    {loading && !messages.length && (
                        <div className="space-y-2 mb-4">
                            {[1,2,3].map(i => (
                                <div key={i} className="flex gap-2 animate-pulse ">
                                    <div className="h-10 bg-white/50 rounded-lg w-1/2 p-10" />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Индикатор загружающийся старых сообщений */}
                    {loadingMore && hasMore && (
                        <div className="space-y-2 mb-4">
                            {[1,2,3].map(i => (
                                <div key={i} className="flex gap-2 animate-pulse ">
                                    <div className="h-10 bg-white/50 rounded-lg w-1/2 p-10" />
                                </div>
                            ))}
                        </div>
                    )}

                    {messages.map((message, i) => {
                        const avatar = message.from_display_id.charAt(1).toUpperCase();
                        const nameLabel = message.from_display_id;
                        const isMine = message.from_user === userId;
                        const date = formatBackendDate(message.created_at);

                        return (
                            <div
                                key={message.id}
                                ref={el => {(wrapperRef.current[message.id] = el)}}

                                className={`flex flex-col relative w-full transition hover:bg-white/10 select-none
                                    ${isMine ? "items-end" : "items-start"} 
                                    message-wrapper ${deletingMsg.includes(message.id)  ? "message--collapsing" : ""}
                                `}
                                style={{transition: "opacity 0.3s ease-in-out"}}
                            >
                                <div
                                    ref={el => {(bubbleRef.current[message.id] = el)}}
                                    className={`relative flex flex-col items-center justify-center p-2 gap-2 w-1/2 rounded-2xl cursor-pointer transition-transform
                                        ${!isMine 
                                            ? "bg-linear-to-b from-[#ff00666d] to-[#ec015f5d]" 
                                            : "bg-linear-to-b from-white/60 to-white/40"}
                                        ${selectTouched === message.id && isMobile ? "scale-105" : ""}
                                        ${selectTouched === message.id && !isMobile ? (isMine ? "border-l" : "border-r") : ""}
                                        message ${deletingMsg.includes(message.id) ? "message--deleting" : ""}
                                    `}
                                    onClick={(e) => {
                                        if (isChoose) {
                                            setChoosenMsg((prev) => {
                                                if (prev.includes(message.id)) {
                                                    return prev.filter((id) => id !== message.id);
                                                } else {
                                                    return [...prev, message.id];
                                                }
                                            });
                                            return;
                                        } else {
                                            router.push(
                                                `createcard?isMine=${isMine}&id=${encodeURIComponent(message.id)}&type=recieve&to=${encodeURIComponent(message?.from_display_id ?? "")}`
                                            );
                                        }
                                    }}
                                    onContextMenu={(e) => {
                                        if (isMobile) return;
                                        e.preventDefault();
                                        const target = e.currentTarget as HTMLDivElement;
                                        const rect = target.getBoundingClientRect();
                                        setSelectTouched(message.id);
                                        setAction({ message, rect, type: "desktop", isMine });
                                    }}
                                    onPointerDown={(e) => {
                                        if (!isMobile || isChoose) return;
                                        const target = e.currentTarget as HTMLDivElement;
                                        if (e.pointerType === "touch") {
                                            setSelectTouched(message.id);
                                            timer.current = window.setTimeout(() => {
                                                const rect = target.getBoundingClientRect();
                                                setAction({ message, rect, type: "mobile", isMine });
                                            }, 400);
                                        }
                                    }}
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
                                                ${choosenMsg.map((msg) => msg).includes(message.id) ? "bg-white" : ""}
                                            `}
                                        ></div>
                                    )}

                                </div>
                            </div>
                        );
                    })}
                    <div ref={bottomRef}></div>
                </div>
            </div>

            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 pointer-events-none overflow-visible w-screen h-screen"
                // style={{width: '100vw', height: '100vh'}}

            />

            {/* message panel */}
            {action && (
                <MessageActionRoot
                    action={action!}
                    onClose={() => {
                        closeMenu();
                        setSelectTouched(null);
                    }}
                    onDelete={(id) => {
                        hideMessage([...choosenMsg, id])
                    }}
                    isChose={setIsChoose}
                    onChose={(id) => setChoosenMsg((prev) => [...prev, id])}
                />
            )}

            {/* modal profile */}
            <ModalProfile 
                dialog={openModalProfile} 
                onClose={() => {setOpenModalProfile(null)}}
                fromUser={userId!}
                refresh={() => refresh()}
            />
        </main>
    );
}
