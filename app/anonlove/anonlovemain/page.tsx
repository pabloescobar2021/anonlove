"use client"

export const dynamic = "force-dynamic";

import { useState, useEffect, useRef, use } from "react"
import { useRouter } from "next/navigation";
import { useAuth } from "../things/hooks/useAuth";
import { useMessages, useDialogs, Dialog } from "../things/hooks/useMessages";
import { sighOut } from "../things/utils/auth";
import { useSwipe } from "../things/hooks/useSwipe";
import { useCheckMobile } from "../things/hooks/checkMobile";
import {parseBackendDate, parseDate} from "../things/utils/parseDate"
import {ModalProfile} from "../modal/modalProfile"
import { useMessageRead } from "../things/hooks/useCheckMsg";
import { ReadIndicator } from "../createcard/components/ReadIndicator"; // индикатор прочтения сообзения
import { Rating } from "../createcard/components/Rating";



export default function Page() {
    const router = useRouter();

    const {user, profile, loading: authLoading} = useAuth();
    
    const {inbox, sent, sendMessage: send, loading: messageLoading, refresh} = useMessages(user?.id || null);

    const dialogs = useDialogs(inbox, sent, user?.id || "", profile?.public_id || "");
    const [activeDialogId, setActiveDialogId] = useState<string | null>(null);
    const [activeDialog, setActiveDialog] = useState<Dialog | null>(null);

    const { markAsRead } = useMessageRead() // индикатор прочтения

    const [openChat, setOpenChat] = useState(false);
    const isMobile = useCheckMobile()

    const [openProfile, setOpenProfile] = useState(false); // profile слева

    //открыл чат и записал
    const [activeChatUserId, setActiveChatUserId] = useState<string | null>(null);

    const [openModalProfile, setOpenModalProfile] = useState(false); // state модалка профиля

    const styleToNotSwipe: React.CSSProperties = {
        overscrollBehavior: 'contain',
        touchAction: 'pan-y'
    }

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
            router.replace('/anonlove/auth')
        }
    }, [user, authLoading,router])

    

    useEffect(() => {
        if(!isMobile){
            setOpenChat(false)
        }
    }, [isMobile])

    
    
    const handleSignOut = async () => {
        await sighOut()
        router.push('/anonlove/auth')
    }

    if (authLoading) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center text-white">
                ЗагрузОчка...
            </div>
        );
    }

    return (
        <div 
            className="relative bg-black min-h-screen max-h-screen flex flex-col overflow-hidden "
            >

            {/* сообщения */}
            <main 
                className="relative flex-1 text-white flex md:flex-row flex-col overflow-hidden"
                {...(!openChat ? profileSwipe : {})}
                onClick={() => {
                    if(openProfile) setOpenProfile(false)
                }}
            >
                {/* ДИАЛОГИ */}
                <div 
                    className={`absolute inset-0 bg-[#12080b] 
                            overflow-y-auto
                            transition-transform duration-300 ease-out will-change-transform
                            md:static md:translate-x-0 md:w-1/2
                            ${isMobile && openChat ? "-translate-x-full" : "translate-x-0"}
                            ${isMobile ? "" : "border-r border-[#d91c558b]"}
                        `}
                    
                    style={styleToNotSwipe}
                    
                    >

                    <div className="flex w-full relative bg-white/10 backdrop-blur-md">

                        <div 
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 h-8 w-15 flex justify-center items-center
                                        hover:bg-white/20 transition-colors
                            ">

                            <button 
                                onClick={() => {setOpenProfile(true)}}
                                className="w-8 h-8 rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><title>Menu SVG Icon</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h24M4 16h24M4 24h24"/></svg>
                            </button>
                        </div>

                        <button 
                            className="p-2 rounded-md w-full text-center flex justify-center items-center "
                        >
                            <span className="medium">Чаты</span>
                        </button>

                        <div
                            className="absolute bottom-1/2 translate-y-1/2 right-2"
                        >
                           {/* кнопка написать */}
                            <AnimatedButton
                                openModal={() => {
                                    router.push(`createcard?type=send`);
                                }}
                            >   
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 4h28v18H16l-8 7v-7H2Z"/></svg>
                            </AnimatedButton>
                        </div>

                    </div>

                    {dialogs.map((dialog) => {
                        const avatar = dialog.displayId.charAt(1).toUpperCase()
                        const title = dialog.displayId
                        const timeSend = parseDate(dialog.lastMessage.created_at)
                            
                        return(
                            <button
                                key={dialog.userId}
                                className=" p-2 rounded-lg w-full"
                                onClick={() => {
                                    setActiveDialogId(dialog.userId), 
                                    setOpenChat(true),
                                    setActiveChatUserId(dialog.displayId)
                                }}
                            > 
                                <div className={`flex p-3 items-center relative gap-2  rounded-2xl transition-colors
                                    ${(dialog.userId !== activeDialogId && !isMobile) ? "bg-[#5b5b5ba2]" : "bg-[#949494a2]"}
                                    `}>
                                    <span
                                        className="flex bg-red-500 w-8 h-8 items-center justify-center rounded-full text-lg font-bold"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setOpenModalProfile(true)
                                            // setActiveDialogId(dialog.userId)
                                        }}
                                    >
                                        {avatar}
                                    </span>

                                    <span className="font-semibold"
                                    >
                                        {title}
                                    </span>

                                    <p className="text-[10px] flexC text-center text-gray-400 h-10
                                            absolute bottom-1/2 translate-y-1/2  right-2 ">
                                        {timeSend}
                                    </p>
                                </div>
                            </button>  
                        )
                    })}

                    
                </div>
                
                {/* ===== ЧАТ ===== */}
                <div 
                    {...(isMobile ? chatSwipe : {})}
                    className={`
                        absolute inset-0 bg-[#12080b]
                        overflow-y-auto
                        transition-transform duration-300 ease-in-out will-change-transform
                        md:static md:translate-x-0 md:w-1/2
                        ${openChat ? "translate-x-0" : "translate-x-full"}
                    `}>

                    {/* header mobile */}
                    {isMobile ? (
                        <div className="sticky top-0 w-full grid grid-cols-3 items-center z-20">
                            <button
                                className="flex justify-center items-center  bg-white/10 backdrop-blur-2xl m-2 w-15 h-8 text-center rounded-full z-10"
                                onClick={() => setOpenChat(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77"/>
                                </svg>
                            </button>

                            <button
                                className="bg-white/10 backdrop-blur-2xl m-2  h-8 rounded-full"
                            >
                                {activeChatUserId}
                            </button>

                            <button
                                className="flex justify-center items-center justify-self-end bg-white/10 backdrop-blur-2xl m-2 w-15 h-8 text-center rounded-full z-10"
                                onClick={() => {
                                    router.push(`createcard?type=send&to=${encodeURIComponent(activeChatUserId ?? '')}`)

                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7.5.5h-5a1 1 0 0 0-1 1v9l-1 3l4-1h8a1 1 0 0 0 1-1v-5"/>
                                        <path d="m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a.999.999 0 0 1 1.42 0l1.06 1.06a1.001 1.001 0 0 1 0 1.42z"/>
                                    </g>
                                </svg>
                            </button>

                        </div>
                    ): (
                        <div className={`w-full  p-2 rounded-b-2xl bg-[#7959631c]
                                ${activeDialog ? "flexC": "hidden"} 
                        `}>

                            <div className="flexC bg-white/10 rounded-full w-28 select-none"> 
                                {activeChatUserId}
                                <Rating value={activeDialog?.rating}></Rating>
                            </div>
                            

                        </div>
                    )}

                    
                    <div className="p-2 space-y-2">
                        {activeDialog?.messages.map(message => {
                            const avatar = message.from_display_id.charAt(1).toUpperCase()
                            const nameLabel = message.from_display_id
                            const bodyText: any = "тебе тут что то пришло, малышка"
                            const isMine = message.from_user === user?.id
                            const date = parseDate(message.created_at)

                            return (
                                <div
                                    key={message.id}
                                    className={`flex flex-col relative w-full transition hover:bg-white/10
                                        ${isMine ? "items-end" : "items-start"}
                                    `}
                                >
                                    <div
                                        className={`flex flex-col items-center justify-center p-2 gap-2 w-1/2 rounded-2xl cursor-pointer 
                                            ${isMine ? "bg-[#ff00666d]" : "bg-white/50"}
                                        `}
                                        onClick={() => {
                                            if(!isMine && !message.is_checked){
                                                markAsRead(message.id, user?.id!).then(() => {
                                                    setActiveDialog(d => d && ({
                                                        ...d,
                                                        messages: d.messages.map(m => m.id === message.id ? {...m, is_checked: true} : m)
                                                    }))
                                                })
                                            }
                                            router.push(`createcard?isMine=${isMine}&id=${encodeURIComponent(message.id)}&type=recieve&to=${encodeURIComponent(message?.from_display_id ?? '')}`)
                                        }}
                                    >
                                        <div className="flexC gap-2"> 
                                        {/* avatar */}
                                            <div
                                                className="md:w-6 md:h-6 w-8 h-8
                                                        rounded-full bg-red-500
                                                        flex items-center justify-center
                                                        text-md font-bold shrink-0"
                                            >
                                                {avatar}
                                            </div>

                                        {/* text */}
                                            <div className="flex flex-col">
                                                <span className="font-semibold medium">
                                                    {nameLabel}
                                                </span>
                                                <span className="small line-clamp-2">
                                                    {``}
                                                </span>
                                            </div>
                                        </div>

                                        {/* date */}
                                        <div className="text-[9px] text-[#cdcdcd] "> 
                                            {date}
                                        </div>

                                        <ReadIndicator
                                            isRead={message.is_checked}
                                            isMine={isMine}
                                        />

                                    </div>

                                    {/* reply button — только для чужих сообщений */}
                                    {!isMine && (
                                        <button
                                            className="absolute top-1/2 right-1 -translate-y-1/2"
                                            onClick={() => {
                                                router.push(`createcard?isMine=${isMine}&type=send&to=${encodeURIComponent(message?.from_display_id ?? '')}`)

                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14">
                                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M7.5.5h-5a1 1 0 0 0-1 1v9l-1 3l4-1h8a1 1 0 0 0 1-1v-5"/>
                                                    <path d="m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a.999.999 0 0 1 1.42 0l1.06 1.06a1.001 1.001 0 0 1 0 1.42z"/>
                                                </g>
                                            </svg>
                                        </button>
                                    )}

                                    {/* <div className="w-full mx-auto bg-white/20 h-px" /> */}
                                </div>
                            )
                        })}
                    </div>

                    
                </div>

                
            </main>

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


function AnimatedButton({ 
    children,
    openModal 
}: {
    children: React.ReactNode,
    openModal: () => void

}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const animationRef = useRef<number>(0);
    const isHovering = useRef(false);

    const sizeRef = useRef({w:0,h:0})

    useEffect(() => {
        const canvas = canvasRef.current
        const button = buttonRef.current
        if(!canvas || !button) return;

        const ctx = canvas.getContext("2d");
        if(!ctx) return;

        const updateSize = () => {
            const rect = canvas.parentElement!.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;

            sizeRef.current.w = rect.width;
            sizeRef.current.h = rect.height;

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = rect.width + "px"
            canvas.style.height = rect.height + "px"
            ctx.setTransform(dpr,0,0,dpr,0,0)
        }
        updateSize()

        function getBtnCenter(){
            const btn = button!.getBoundingClientRect()
            const cvs = canvas!.getBoundingClientRect()
            return{
                x: cvs.width/2,
                y: cvs.height/2
            }
        }

        const particles: {
            x: number,
            y: number,
            radius: number,
            alpha: number,
            life: number,
            vx: number,
            vy: number
        }[] = []

        const speed = 50
        let lastTime = performance.now()

        function animate(currentTime: number) {
            if (!ctx || !canvas) return
            const deltaTime = (currentTime - lastTime) / 1000
            lastTime = currentTime

            const {w , h} = sizeRef.current
            ctx.clearRect(0,0, w, h)

            
            if(Math.random() < 0.06) {
                const angle = Math.random() * Math.PI * 2
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    radius: 1,
                    alpha: 1,
                    life: 1,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed
                })
            }
            const target = getBtnCenter()

            for (let i = particles.length -1; i >= 0; i--) {
                const p = particles[i];

                p.life -= deltaTime * 0.3;
                p.alpha = p.life
                
                if(isHovering.current) {
                    const dx = target.x - p.x
                    const dy = target.y - p.y
                    const dist = Math.sqrt(dx * dx + dy * dy) + 0.001

                    const force = Math.max(0, 1 - dist / 700) * 400;

                    p.vx += (dx / dist) * force *deltaTime
                    p.vy += (dy / dist) * force *deltaTime
                } 

                // max speed
                const speed = Math.hypot(p.vx, p.vy);
                const maxSpeed = 160;
                if (speed > maxSpeed) {
                    p.vx = (p.vx / speed) * maxSpeed;
                    p.vy = (p.vy / speed) * maxSpeed;
                }

                p.x += p.vx * deltaTime;
                p.y += p.vy * deltaTime;

                

                if (p.alpha <= 0) {
                    particles.splice(i, 1)
                    continue
                }
                

                ctx.globalAlpha = p.alpha;
                ctx.shadowBlur = 1;
                ctx.shadowColor = "white";
                ctx.fillStyle = 'white';

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)
        window.addEventListener('resize', updateSize)

        return () => {
            if (animationRef.current){
                cancelAnimationFrame(animationRef.current)
            }
            window.removeEventListener('resize', updateSize)
        }
    }, [])

    return (
        <div className="relative flex justify-center items-center h-full w-full">
            <canvas
                ref={canvasRef}
                className="absolute w-full h-full pointer-events-none z-1"
            >
            </canvas>
            <button
                ref={buttonRef}
                onClick={() => openModal()}
                onMouseEnter={() => (isHovering.current = true)}
                onMouseLeave={() => (isHovering.current = false)}
                className="relative flex items-center justify-center p-2 h-8 w-15 bg-white/10 rounded-full hover:bg-white/40 transition-colors z-2"
            >
                {children}
            </button>

        </div>
    )
}
