"use client"
export const dynamic = "force-dynamic";

import { useState,useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/alSupabase";
import "./authStyle.css";
import { AnimatedBg } from "./AnimatedBg";
import { useCheckMobile } from "../things/hooks/checkMobile";

type Who = "me" | "bot"
type AuthFlow = "login" | "reg" | "tg" | null;

interface Message {
    who: Who
    text: string
    time: Date
    masked?: boolean
}

export default function AuthPage() {
    const router = useRouter();
    const isMobile = useCheckMobile();

    const inputRef = useRef<HTMLInputElement>(null);
    const messageEndRef = useRef<HTMLDivElement>(null);

    const [step, setStep] = useState(1)
    const [authFlow, setAuthFlow] = useState<AuthFlow>(null);
    const [credetial, setCredetial] = useState<{login?: string, pass?: string}>({}) // пароль логин
    const [messages, setMessages] = useState<Message[]>([]);
    const [textBot, setTextBot] = useState<string>("");
    const [isShowBtns, setIsShowBtns] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [inputDisabled, setInputDisabled] = useState(false)
    const [isTyping, setIsTyping] = useState(false)

    const typingRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const addBotMessage = (text: string, masked = false) => {
        setMessages(prev => [...prev, {who: "bot", text, time: new Date(), masked}])
    }
    const addUserMessage = (text: string, masked = false) => {
        setMessages(prev => [...prev, {
            who: 'me',
            text: masked ? "•".repeat(text.length) : text,
            time: new Date(),
        }])
    }

    // печатает текст
    const typePretty = (s: string, onDone?: () => void) => {
        if(typingRef.current) clearInterval(typingRef.current)
        setIsTyping(true)
        setTextBot("")
        let index = 0
        typingRef.current = setInterval(() => {
            setTextBot(s.slice(0, index + 1))
            index++
            if(index === s.length){
                clearInterval(typingRef.current!)
                setIsTyping(false)
                onDone?.()
            }
        }, 70)
    }

    // Бот пишет сообщение с задержкой (имитация печати)
    const botSay = (text: string, delay = 600): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                addBotMessage(text)
                resolve()
            }, delay)
        })
    }
    
    // Запуск flow по шагам
    useEffect(() => {
        if(step === 1){
            typePretty("Добро пожаловать!", () => setStep(2))
        }
        if(step === 2){
            typePretty("Что желаешь?", () => {
                setIsShowBtns(true)
                setInputDisabled(false)
            })
        }
    },[step])

    useEffect(() => {
        if(!authFlow) return

        setIsShowBtns(false)
        setInputDisabled(false)

        if(authFlow === "tg"){
            window.location.href = `https://t.me/AnonLove_userBot?signup`
        }

        const label = authFlow === "login" ? "Войти" : "Зарегистрироваться"
        addUserMessage(label)

        setTimeout(() => {
            addBotMessage("Введите логин 👤")
            setStep(3)
            inputRef.current?.focus()
        }, 400);
    },[authFlow])

    const handleSubmit = async (login: string, pass: string, flow: AuthFlow) => {
        setInputDisabled(true)
        setIsLoading(true)
        typePretty("Проверяю...")

        if (flow === "login"){
            const { data: userData, error: userError } = await supabase
                .from("users")
                .select("login")
                .eq("username", login)
                .single();

            if(!userData || userError){
                setIsLoading(false)
                const msg = "Пользователь не найден 😕"
                typePretty("Ошибка")
                await botSay(msg, 600)
                await botSay("Попробуйте еще раз", 1000)
    
                setCredetial({})
                setStep(3)
                setInputDisabled(false)
                inputRef.current?.focus()
                return
            }
            const {error} = await supabase.auth.signInWithPassword({
                email: userData!.login, 
                password: pass
            })
            if(error){
                setIsLoading(false)
                typePretty("Ошибка")
                await botSay("Неправильный логин или пароль 😕", 600)
                await botSay("Попробуйте еще раз", 1000)
                setCredetial({})
                setStep(3)
                setInputDisabled(false)
                inputRef.current?.focus()
                return
            }

            }else {
                const {data: existingUser} = await supabase
                    .from("users")
                    .select("login")
                    .eq("username", login)
                    .single();
                if(existingUser){
                    setIsLoading(false)
                    typePretty("Ошибка")
                    await botSay("Этот логин уже занят 😕", 600)
                    await botSay("Попробуйте другой", 1000)
                    setCredetial({})
                    setStep(3)
                    setInputDisabled(false)
                    inputRef.current?.focus()
                    return
                }

                const email = `${login}@example.com`
                const {data, error} = await supabase.auth.signUp({email, password: pass})

                if(error || !data.user){
                    setIsLoading(false)
                    const msg = "Ошибка регистрации. Попробуйте еще раз 😕"
                    typePretty("Ошибка")
                    await botSay(msg, 600)
                    await botSay("Попробуйте еще раз", 1000)

                    setCredetial({})
                    setStep(3)
                    setInputDisabled(false)
                    inputRef.current?.focus()
                    return
                }
            }
        

        setIsLoading(false)
        
        await typePretty(flow === "login" ? "Добро пожаловать! 🎉" : "Регистрация прошла успешно! 🎉")
        await botSay(
            flow === "login" ? "Входим..." : "Регистрация прошла успешно! Входим...",
            600
        )
        setTimeout(() => {router.push("/")}, 1000)
    }
        

    const enterBtn = async () => {
        if (isTyping || isLoading || inputDisabled) return;
        const input = inputRef.current?.value.trim()
        if(!input) return

        inputRef.current!.value = ""

        if(step === 3){
            addUserMessage(input)
            setCredetial({login: input})
            setStep(4)

            setTimeout(() => {
                addBotMessage("Теперь введи пароль 🔒🔑")
                inputRef.current?.focus()
            }, 400);
        } else if (step === 4){
            addUserMessage(input, true)
            const login = credetial.login!
            setCredetial(prev => ({...prev, pass: input}))
            setStep(5)

            await handleSubmit(login, input, authFlow )
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            enterBtn();
        }
    };
    const btns = [
        {text: "Войти", onClick: () => setAuthFlow("login")},
        {text: "Зарегистрироваться", onClick: () => setAuthFlow("reg")},
        {text: "Telegram", onClick: () => setAuthFlow("tg")},
    ]

    const getPlaceholder = () => {
        if (step === 3){
            return "Введите логин"
        } else if (step === 4){
            return "Введите пароль"
        }
        return "..."
    }

    return (
        <div 
            className="flex justify-center items-center h-full relative bg-black"
            style={{ overflow: "hidden"}}
            >
            <AnimatedBg/>

            <main 
                className={`flex flex-col justify-center relative
                     rounded-md border border-white/10
                    bg-black/50 backdrop-blur-2xl
                    ${isMobile ? "w-full h-full rounded-none" : "w-120 h-120 rounded-md"}
                `}
            >
                <div
                    className={`relative backdrop-blur-2xl w-full h-full flex flex-col rounded-md`}
                >
                    {/* хедер с печающем текстом */}
                    <div className="w-full flexC text-center border-b border-white/10 h-10">
                        <span>{textBot}</span>
                        {(isTyping || isLoading) && (
                            <span className="flex gap-[3px] items-center">
                                {[0,1,2].map(i => (
                                    <span
                                        key={i}
                                        className="w-1 h-1 rounded-full bg-white/60 animate-bounce"
                                        style={{animationDelay: `${i * 0.15}s`}}
                                    />
                                ))}
                            </span>
                        )}
                    </div>

                    {/* сообщения */}
                    <div 
                        className={`flex flex-col py-2 px-3 gap-2 flex-1 overflow-y-auto`}>
                        {messages.map((msg, i) => (
                            <div 
                                key={i}
                                className={`bg-white/20 rounded-2xl px-3 py-2 max-w-[70%] shadow-lg relative
                                    ${msg.who === "me" ? "self-end rounded-br-sm" : "self-start rounded-bl-sm"}
                                `}
                            >
                                <p className="text-sm pr-8 break-all">{msg.text}</p>
                                <span className="absolute right-2 bottom-1 text-[9px] text-white/40">{msg.time?.toTimeString().slice(0, 5)}</span>
                            </div>
                        ))}
                        <div ref={messageEndRef}/>
                    </div>

                    {/* кнопки выбора */}
                    <div 
                        className={`absolute bottom-10 w-full flex text-[15px] gap-2 transition-all duration-300
                            ${isShowBtns ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"}
                        `}
                    >
                        {btns.map((btn, i) => (
                            <button 
                                key={i}
                                className="btn-type"
                                onClick={btn.onClick}
                            >
                                {btn.text}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Инпут */}
                <form className=" w-full h-10 flex justify-center "
                    onClick={(e) => {
                        e.preventDefault(); enterBtn()
                    }}
                >
                    <input
                        ref={inputRef} 
                        type={step === 4 ? "password" : "text"}
                        className={`
                            border border-white/20 rounded-l-md w-full text-sm px-3
                            bg-white/5 text-white placeholder-white/30 outline-none
                            transition-opacity duration-200
                            ${inputDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"}
                        `}
                        placeholder={getPlaceholder()}
                        disabled={inputDisabled}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />

                    <button 
                        type="submit"
                        disabled={inputDisabled || isLoading}
                        className="bg-white/10 hover:bg-white/20 rounded-r-md w-10 flexC transition-colors disabled:opacity-40"
                        onClick={(e) => {
                            e.preventDefault()
                            enterBtn()
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"/></svg>
                    </button>
                </form>


            </main>

            {/* {authType === "login" ? 
            
            <form
                className="flex flex-col gap-2"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >

                <input 
                ref={loginRef}
                type="text" 
                placeholder="ваш логинчик"
                className="border rounded-md p-1 text-center"
                ></input>

                <input 
                ref={passRef}
                type="password" 
                placeholder="ваш парольчик"
                className="border rounded-md p-1 text-center"
                ></input>

                <button
                    type="submit"
                    className="group bg-white/10 rounded-md mt-5 hover:scale-105 transition"
                    onClick={() => {
                        submit("login")
                    }}
                >
                    <span className="group-hover:hidden">
                        Заходи, кись!
                    </span>
                    <span className="hidden group-hover:inline">
                        👉👈
                    </span>
                    
                </button>

                <button
                    type="submit"
                    className="group rounded-md mt-5 text-[14px] hover:scale-105 transition"
                    onClick={(e) => {
                        e.preventDefault()
                        setAuthType("register")
                    }}
                >
                    <span className="group-hover:hidden">
                        Или зарегистрируйся :3!
                    </span>
                    <span className="hidden group-hover:inline">
                        👉👈
                    </span>
                </button>

            </form>
            : 
            <form
                className="flex flex-col gap-2"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <input 
                ref={loginRef}
                type="text" 
                placeholder="ваш логинчик"
                className="border rounded-md p-1 text-center"
                ></input>


                <input 
                ref={passRef}
                type="password" 
                placeholder="ваш парольчик"
                className="border rounded-md p-1 text-center"
                ></input>

                <button
                    type="submit"
                    className="group bg-white/10 rounded-md mt-5 hover:scale-105 transition "
                    onClick={(e) => {
                        e.preventDefault()
                        submit("register")
                    }}
                >
                    <span className="group-hover:hidden">
                        Или зарегистрируйся :3!
                    </span>
                    <span className="hidden group-hover:inline">
                        👉👈
                    </span>
                    
                </button>

                <button
                    type="submit"
                    className="group rounded-md mt-5 text-[14px] hover:scale-105 transition"
                    onClick={(e) => {
                        e.preventDefault()
                        setAuthType("login")
                    }}
                >
                    <span className="group-hover:hidden">
                        Заходи, кись!
                    </span>
                    <span className="hidden group-hover:inline">
                        👉👈
                    </span>
                    
                </button>

               

            </form>
            } */}
            


        </div>
    )
}