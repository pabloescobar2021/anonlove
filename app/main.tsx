"use client"

// export const dynamic = "force-dynamic";

import { useState, useEffect, useRef, use } from "react"
import { useRouter } from "next/navigation";
import { useAuth } from "./things/hooks/useAuth";
import { useMessages, useDialogs, Dialog } from "./things/hooks/useMessages";
import { sighOut } from "./things/utils/auth";
import { useSwipe } from "./things/hooks/useSwipe";
import { useCheckMobile } from "./things/hooks/checkMobile";
import {ModalProfile} from "./modal/modalProfile"
import { MessageActionRoot } from "./contextMenu/messagePanel"; 
import { UiMessage } from "./things/types/type";
import { ManagerChat } from "./anonMain/chat/Chat";



export default function MainPage() {
    const router = useRouter();

    const {user, profile, loading: authLoading} = useAuth();
    
    const {inbox, sent, sendMessage: send, loading: messageLoading, refresh, deleteMessage} = useMessages(user?.id || null);

    const dialogs = useDialogs(inbox, sent, user?.id || "", profile?.public_id || "");
    const [activeDialogId, setActiveDialogId] = useState<string | null>(null);
    const [activeDialog, setActiveDialog] = useState<Dialog | null>(null);

    const [openChat, setOpenChat] = useState(false);
    const isMobile = useCheckMobile()

    const [openProfile, setOpenProfile] = useState(false); // profile слева

    const [openModalProfile, setOpenModalProfile] = useState(false); // state модалка профиля

    const styleToNotSwipe: React.CSSProperties = {
        overscrollBehavior: 'contain',
        touchAction: 'pan-y'
    }

    // messagePanel
    const msgRef = useRef<HTMLDivElement>(null) 
    let timer = useRef<number | null>(null)
    type ActionState = {
        message: UiMessage,
        rect: DOMRect,
        type: 'desktop' | 'mobile',
        isMine: boolean
    } | null
    const closeMenu = () => {setAction(null); setSelectTouched(null)} // закрытие меню
    const cancelTouch = () => {clearInterval(timer.current!); setSelectTouched(null)} // отмена тача
    const [action, setAction] = useState<ActionState>(null)
    const [isChoose, setIsChoose] = useState(false) // начало выбора
    const [choosenMsg, setChoosenMsg] = useState<any[]>([]) // выбранные
    const [selectTouched, setSelectTouched] = useState<string | null>(null)
    //

    

    useEffect(() => {
        if (!activeDialogId){
            setActiveDialog(null)
            return
        }
        const found = dialogs.find(d => d.userId === activeDialogId) || null
        setActiveDialog(found)
    }, [dialogs, activeDialogId])

    // свайп для мобилки
    const chatSwipe = useSwipe({
        onSwipeRight: () => {
            if (!isMobile) return;
            setOpenChat(false)
        }
    })
    // swipe close profile mobile
    const profileSwipe = useSwipe({
        onSwipeLeft: () => {
            if (!isMobile) return;
            setOpenProfile(false)
        },
        onSwipeRight: () => {
            if (!isMobile) return;
            setOpenProfile(true)
        }
    })


    // редирект если неавторизован
    useEffect(() => {
        if (authLoading) return;

        if(!user){
            router.replace('/auth')
        }
    }, [user, authLoading,router])

    

    useEffect(() => {
        if(!isMobile){
            setOpenChat(false)
        }
    }, [isMobile])

    
    
    const handleSignOut = async () => {
        await sighOut()
        router.push('/auth')
    }




    const [loadingText, setLoadingText] = useState("")
    const indexRef = useRef(0)
    const intervalRef = useRef<number | null>(null)
    useEffect(() => {
        if (!authLoading){
            if (intervalRef.current){
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            return
        }
        
        const word = 'loading'
        indexRef.current = 0
        setLoadingText('')

        intervalRef.current = window.setInterval(() => {
            setLoadingText(prev => {
                if (indexRef.current >= word.length) {
                    indexRef.current = 0
                    return ""
                }
                const next = prev + word[indexRef.current]
                indexRef.current +=1
                return next
            })
        },100)

        return () => {
            if (intervalRef.current){
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [authLoading])
    
    
    if (authLoading) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center text-white ">
                <div className="animate-pulse">ЗагруОчка...</div>
            </div>
        );
    }


    return (
        <div 
            className="relative bg-black min-h-screen max-h-screen flex flex-col overflow-hidden "
            >
            <ManagerChat 
                userId={user?.id}
                dialogs={dialogs}
                setOpenProfile={setOpenProfile}
                setOpenModalProfile={setOpenModalProfile}
                setOpenChat={setOpenChat}
                openChat={openChat}
                isMobile={isMobile}
                deleteMessage={deleteMessage}
                refresh={refresh}
            />


            {/* profile left side */}
            <div
                {...(isMobile ? profileSwipe : {})}
                className={`flex flex-1 flex-col items-center absolute bg-black/50 backdrop-blur-md transition-transform duration-150 ease-in-out will-change-transform
                    ${openProfile ? "translate-x-0" : "-translate-x-full "}
                    ${isMobile ? "inset-0" : "w-1/3 h-full"}
                    `}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div
                    className="bg-white/20 backdrop-blur-2xl w-full flexC p-2 rounded-b-2xl"
                >
                    {profile?.public_id} 
                </div>

                <div className="absolute bottom-0 bg-white/10 p-2 backdrop-blur-md w-full flexC rounded-t-2xl">
                    <button
                        className="text-red-500"
                        onClick={() => {
                            handleSignOut()
                        }}
                    >
                        Выйти
                    </button>
                </div>

                <button
                    className="absolute h-40 top-1/2 -translate-y-1/2 right-0 bg-white/20 backdrop-blur-2xl flexC p-1 
                            animate-pulse rounded-l-2xl
                    "
                    onClick={() => setOpenProfile(false)}
                >
                    {`>`}
                </button>

            </div>

            {/* modal profile */}
            <ModalProfile 
            isOpen={openModalProfile} 
            onClose={() => {setOpenModalProfile(false)}}
            fromUser={user?.id}
            toUser={activeDialog || undefined}
            refresh={() => refresh()}
            />

            
            
        </div>
        
    )

}



