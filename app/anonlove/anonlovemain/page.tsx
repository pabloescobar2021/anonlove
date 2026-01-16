"use client"
import { useState, useEffect, useRef, use } from "react"
import { supabase } from "@/utils/supabase/alSupabase"
import { useRouter } from "next/navigation";
import { useAuth } from "../things/hooks/useAuth";
import { useMessages, useDialogs } from "../things/hooks/useMessages";
import { sighOut } from "../things/utils/auth";
import { useSwipe } from "../things/hooks/useSwipe";

export default function Page() {
    const router = useRouter();

    const {user, profile, loading: authLoading} = useAuth();
    
    const {inbox, sent, sendMessage: send, loading: messageLoading} = useMessages(user?.id || null);

    const dialogs = useDialogs(inbox, sent, user?.id || "");
    const [activeDialogId, setActiveDialogId] = useState<string | null>(null);
    const activeDialog = dialogs.find((d) => d.userId === activeDialogId);

    const [openChat, setOpenChat] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const idRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLInputElement>(null);
    const [isAnon, setIsAnon] = useState(false);

    // ответ на сообщение
    const [replyToUserId, setreplyToUserId] = useState<{id: string; isAnon: boolean} | null>(null); //id
    const [isReply, setIsReply] = useState(false);

    const [tab, setTab] = useState<"inbox" | "sent">("inbox");

    // свайп для мобилки
    const chatSwipe = useSwipe({
        onSwipeRight: () => {
            if (!isMobile) return;
            setOpenChat(false)
        }
    })
    
    // автовставка id
    useEffect(() => {
        if (isOpen && idRef.current) {
            idRef.current.value = replyToUserId?.id || ''
        }
    }, [isOpen, replyToUserId])


    
    // проверка мобилки
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        if(!isMobile){
            setOpenChat(false)
        }
    }, [isMobile])

    
    
    const handleSendMessage = async () => {
        const idInput = idRef.current?.value || ""
        const text = textRef.current?.value || ""

        if (!idInput || !text){
            alert('все поля заполни, сладкий!')
            return
        }
        
        try {
            if (isReply){
                const sendMessage = replyToUserId?.isAnon
                    ? { userId: replyToUserId?.id}
                    : { publicId: replyToUserId?.id}
    
                await send(sendMessage, text, isAnon)
            }
            else {
                await send({publicId: idInput}, text, isAnon)
            }

            idRef.current!.value = ""
            textRef.current!.value = ""
            setIsOpen(false)
        } catch (error: any) {
            console.log(error.message || 'Error sending message');
        }
        
    }
    
    const handleSignOut = async () => {
        await sighOut()
        router.push('/anonlove/auth')
    }

    if (authLoading) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center text-white">
                Загрузка...
            </div>
        );
    }

    return (
        <div className="relative bg-black min-h-screen flex flex-col">
            {user ? (
                <header 
                    className="bg-linear-to-b from-90% to-100% from-black to-[#8f184f]
                            text-white p-1 flex justify-between items-center shadow-md">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-lg font-bold">
                            {profile?.public_id.charAt(1).toUpperCase()}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">{profile?.public_id}</span>
                        </div>
                    </div>
                    <button
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded-md transition"
                        onClick={handleSignOut}
                    >
                        Выйти
                    </button>
                </header>
            ) : (
                <header className="bg-gray-900 text-white p-4 shadow-md">
                    <span>Вы не залогинены</span>
                </header>
            )}

            {/* сообщения */}
            <main 
                className="relative flex-1 text-white flex md:flex-row flex-col overflow-hidden"
            >
                {/* ДИАЛОГИ */}
                <div className={`absolute inset-0 bg-[#12080b] 
                                h-[calc(100vh-48px)] overflow-y-auto
                                transition-transform duration-300 ease-out will-change-transform
                                md:static md:translate-x-0 md:w-1/2
                                ${isMobile && openChat ? "-translate-x-full" : "translate-x-0"}
                    `}>

                    <div className="flex w-full">
                        <button 
                            className="bg-white/10 p-2 rounded-md w-full text-center flex justify-center items-center gap-1"
                        >
                            <span className="medium">Чаты</span>
                            <span 
                                className={`w-3 h-3 rounded-full border transition bg-white border-white
                                `}
                            />
                        </button>

                        
                    </div>

                    {dialogs.map((dialog) => {
                        const avatar = dialog.displayId.charAt(1).toUpperCase()
                        const title = dialog.displayId
                            
                        return(
                            <button
                                key={dialog.userId}
                                className="border border-[#8f18504e] p-2 rounded-lg w-full"
                                onClick={() => {setActiveDialogId(dialog.userId), setOpenChat(true)}}
                            > 
                                <div className="flex p-2 items-center gap-2 relative">
                                    <span
                                        className="flex bg-red-500 w-8 h-8 items-center justify-center rounded-full text-lg font-bold"
                                    >
                                        {avatar}
                                    </span>

                                    <div className="">
                                        <span className="font-semibold"
                                        >
                                            {title}
                                        </span>

                                        <span className="text-[10px] text-gray-400 absolute bottom-[0px] right-1 ">
                                            {dialog.lastMessage.created_at.slice(11,16)}
                                        </span>
                                    </div>
                                </div>
                            </button>  
                        )
                    })}

                    <div
                        className="absolute bottom-0 right-2"
                    >
                        <AnimatedButton
                        openModal={() => {
                            setreplyToUserId(null)
                            setIsOpen(true)
                            setIsReply(false)
                        }}
                        >   
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 4h28v18H16l-8 7v-7H2Z"/></svg>
                        </AnimatedButton>
                    </div>
                </div>
                
                {/* ===== ЧАТ ===== */}
                <div 
                    {...(isMobile ? chatSwipe : {})}
                    className={`
                        absolute inset-0 bg-[#12080b] 
                        h-[calc(100vh-48px)] overflow-y-auto
                        transition-transform duration-300 ease-in-out will-change-transform
                        md:static md:translate-x-0 md:w-1/2
                        ${openChat ? "translate-x-0" : "translate-x-full"}
                    `}>

                    {/* Кнопка назад (ТОЛЬКО мобилка) */}
                    {isMobile && (
                        <button
                            className="absolute top-2 left-2 bg-[#8f1850f0] w-10 h-10 text-center rounded-full z-10"
                            onClick={() => setOpenChat(false)}
                        >
                            ← 
                        </button>
                    )}
                    

                    {activeDialog?.messages.map(message => {
                        const avatar = message.from_display_id.charAt(1).toUpperCase()
                        const nameLabel = message.from_display_id
                        const bodyText = message.body //"тебе тут что то пришло, малышка"
                        const isMine = message.from_user === user?.id

                        return (
                            <div
                                key={message.id}
                                className={`flex flex-col relative w-full transition hover:bg-white/10
                                    ${isMine ? "items-end" : "items-start"}
                                `}
                            >
                                <div
                                    className={`flex items-center gap-2 p-2 cursor-pointer max-w-[80%]
                                        ${isMine ? "flex-row-reverse text-right" : "flex-row"}
                                    `}
                                    onClick={() => router.push(`lovecard#${message.id}`)}
                                >
                                    {/* avatar */}
                                    <div
                                        className="md:w-10 md:h-10 w-8 h-8
                                                rounded-full bg-red-500
                                                flex items-center justify-center
                                                text-lg font-bold shrink-0"
                                    >
                                        {avatar}
                                    </div>

                                    {/* text */}
                                    <div className="flex flex-col">
                                        <span className="font-semibold medium">
                                            {nameLabel}
                                        </span>
                                        <span className="small line-clamp-2">
                                            {bodyText}
                                        </span>
                                    </div>
                                </div>

                                {/* reply button — только для чужих сообщений */}
                                {!isMine && (
                                    <button
                                        className="absolute top-1/2 right-1 -translate-y-1/2"
                                        onClick={() => {
                                            setreplyToUserId({
                                                id: message.from_display_id || message.from_user,
                                                isAnon: message.is_anon
                                            })
                                            setIsReply(true)
                                            setIsOpen(true)
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

                                <div className="w-full mx-auto bg-white/20 h-[1px]" />
                            </div>
                        )
                    })}

                    
                </div>

                
            </main>

            {/* modalka */}
            {isOpen && (
                <div 
                    className="absolute md:w-[400px] w-full h-[300px] bg-black z-50 
                                rounded-lg flex border-2 border-[#8f184f]
                                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> 
                    <form 
                        className="relative flex flex-col justify-center items-center gap-2 mx-auto w-full"
                        onSubmit={(e) => {e.preventDefault()}}
                        >
                        <input
                            ref={idRef}
                            type="text" 
                            placeholder="id няшки" 
                            disabled={isReply}
                            className={`p-2 border-2 rounded-lg 
                                ${isReply 
                                    ? 'opacity-50'
                                    : 'opacity-100'
                                }`}
                            />
                        <input 
                            ref={textRef}
                            type="text" 
                            placeholder="Текст" 
                            className="p-2 border-2 rounded-lg "
                            />
                        <div className="flex justify-center items-center">
                            <input
                                type="checkbox" id="anon" name="anon"
                                checked={isAnon}
                                onChange={(e) => {setIsAnon(e.target.checked)}}
                            />
                            <label htmlFor="anon">{`анонимно (увидит только id)`}</label>
                        </div>
                        

                        <button 
                        className="bg-[#8f184f] text-white px-4 py-2 rounded-lg"
                        type="button" onClick={handleSendMessage}>Отправить</button>

                        <button onClick={() => {setIsOpen(false)}} className="absolute top-1 right-2">X</button>
                    </form>
                </div>
            )}
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
                    radius: 4,
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
                onClick={openModal}
                onMouseEnter={() => (isHovering.current = true)}
                onMouseLeave={() => (isHovering.current = false)}
                className="relative p-4 bg-white/10 rounded-full hover:bg-white/40 transition-colors z-2"
            >
                {children}
            </button>

        </div>
    )
}
