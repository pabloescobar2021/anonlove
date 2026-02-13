"use client"

import { useEffect, useLayoutEffect,useRef, useState } from "react"
type Props ={
    message: string | null
}
export function Notify({message}: Props) {
    const ref = useRef<HTMLDivElement>(null!)
    const [visible, setVisible] = useState(false)
    const [displayMsg, setDisplayMsg] = useState<string | null>(null)

    useEffect(() => {
        if(!message) return

        setDisplayMsg(message)
        setVisible(true)

        const t = setTimeout(() => {
            setVisible(false)

            const hide = setTimeout(() => {
                setDisplayMsg(null)
            },300)

            return() => {clearTimeout(hide)}
        }, 1000)

        return () => {clearTimeout(t)}
    }, [message])

    return (
        <div
        ref={ref}
        className={`
            absolute top-4 right-4 z-50
            px-4 py-2 rounded-md shadow-lg
            border border-white/10 bg-black/60 backdrop-blur-md
            text-white
            transition-all duration-200 ease-in-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
        `}
        >
        {displayMsg}
    </div>
    )
}