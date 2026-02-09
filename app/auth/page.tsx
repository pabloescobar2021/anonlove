"use client"
export const dynamic = "force-dynamic";

import { useState,useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/alSupabase";

export default function AuthPage() {
    const [authType, setAuthType] = useState<"login" | "register">("login");

    const loginRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const router = useRouter();


    const submit = async (type: "login" | "register") => {
        const login = loginRef.current?.value
        const pass = passRef.current?.value

        if (!login || !pass) return;

        const email = `${login}@example.com`;

        const {error, data} = 
            type === "login"
            ? await supabase.auth.signInWithPassword({
                email,
                password: pass
            })
            : await supabase.auth.signUp({
                email,
                password: pass
            })
        if (error) {
            console.error(error);
            return
        } 
        router.push('/')
    }

    return (
        <div className="flex justify-center items-center bg-black h-full">
            {authType === "login" ? 
            
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
            }
            

            

        </div>
    )
}