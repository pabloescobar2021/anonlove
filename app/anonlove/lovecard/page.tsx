"use client"
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react"

import { size,step } from "../things/data"

import { useAuth } from "../things/hooks/useAuth";
import {useCurrentMessage} from "../things/hooks/useMessages"

import { useRouter } from "next/navigation";

import { ItemDto } from "../things/types/type";
import { Message } from "../things/types/type";

export default function AnonLoveMain() {
    const router = useRouter()

    const {user} = useAuth()
    const [messageId, setMessageId] = useState<string | null>(null)

    const {message, loading} = useCurrentMessage(user?.id ?? null, messageId)

    const [sizeFigure, setSizeFigure] = useState(size)
    const [scale, setScale] = useState(1)

    const [explode, setExplode] = useState(false)
    const [showMessage, setShowMessage] = useState(false)

    const [click, setClick] = useState(0)
    const maxClicks = 3

    useEffect(() => {
        const hash = window.location.hash
        if(hash){
            setMessageId(hash.replace('#', ''))
        }
    },[])

    const tap = () => {
        if (click < maxClicks - 1){
            setClick(prev => prev + 1)

            setSizeFigure(prev => ({
                width: prev.width + step.s,
                height: prev.height + step.s
            }))
    
            setScale(1.2);
            setTimeout(() => setScale(0.95), 120);
            setTimeout(() => setScale(1.05), 220);
            setTimeout(() => setScale(1), 320);
    
            const interval =setInterval(() => {
                setScale(1.2);
                setTimeout(() => setScale(0.95), 120);
                setTimeout(() => setScale(1.05), 220);
                setTimeout(() => setScale(1), 320);
            }, 700);
    
            setTimeout(() => clearInterval(interval), 1000);
    
        }else {
            setExplode(true)

            setTimeout(() => {
                setShowMessage(true)
            }, 400);
        }

    }
    

    const viewBox = 100
    const center = viewBox /2

        return (
            <div className="flex justify-center items-center bg-black h-full">
                {!showMessage && (
    
                <div className="flex justify-center items-center bg-black h-full"
                >
                    <svg 
                        width={sizeFigure.width} 
                        height={sizeFigure.height}
                        viewBox={`0 0 ${viewBox} ${viewBox}`}
                        className="overflow-visible"
                        style={{
                            width: 200,
                            height: 200,
                            opacity: explode ? 0 : 1,
                            transform: explode
                                ? "scale(25)"
                                : `scale(${scale})`,
                            transition: explode
                                ? "transform 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease-in-out"
                                : "transform 0.15s ease-in-out",
                        }}
                    >
                        <path
                            onClick={tap}
                            className="cursor-pointer transition-transform duration-150 ease-in-out"
                            style={{
                                transformOrigin: "50% 50%",
                                transform: `scale(${scale})`,
                            }}
                            fill="red"
                            stroke="#fff"
                            strokeWidth={2}
                            d="
                                M50 85
                                C20 60, 5 45, 25 25
                                C40 10, 50 25, 50 25
                                C50 25, 60 10, 75 25
                                C95 45, 80 60, 50 85
                            "
                        >
        
                        </path>
                        
                    </svg>
                </div>
                )}

                {showMessage && (
                    <div className="relative w-full h-full overflow-hidden bg-black">
                        {/* 🎥 Видео фон */}
                        <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                        >
                        <source src="/bg/bgstar.mp4" type="video/mp4" />
                        </video>

                        {/* 🌑 затемнение (по желанию) */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* 🧠 Контент */}
                        <div className="relative z-10 flex flex-col justify-center items-center h-full">
                            <button
                                className="bg-white/10 p-2 mb-4"
                                onClick={() => router.push("anonlovemain")}
                            >
                                ←
                            </button>

                            {/* field */}
                            <div
                                className="relative border w-1/2 h-1/2 rounded-md bg-white overflow-hidden z-10"
                            >
                                {message?.body.map((item: ItemDto) => (
                                    <div 
                                        key={item.id}
                                        className="flex text-black select-none relative"
                                        style={{
                                            position: "absolute",
                                            left: item.x,
                                            top: item.y,
                                            width: item.w,
                                            height: item.h,
                                            fontSize: item.fontSize,
                                        }}
                                    
                                    
                                    >
                                            <div className={`relative w-full h-full text-wrap wrap-break-word
                                                            overflow-hidden`}> 
                                                {item.content}

                                                
                                            </div>

                                    </div>
                                ))}
                            </div>
                                <button 
                                    className="p-2 mt-4 border rounded-2xl hover:bg-white/20 transition-all duration-200"
                                    onClick={() => {
                                        router.push(`createcard?to=${encodeURIComponent(message?.from_display_id ?? '')}`)
                                    }}
                                >
                                    Ответка
                                </button>   
                        </div>

                    </div>
                )}
            </div>
        )
    


}

