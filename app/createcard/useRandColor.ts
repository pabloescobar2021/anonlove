"use client"

import { useState,useEffect, useRef } from "react"

type Color = {r: number, g: number, b: number, a: number}
const lerp = (a: number, b: number, t: number) => {
    return a + (b - a) * t
}
const smoothStep = (t: number) => {
    return t * t * (3 - 2 * t)
}
const mixColor = (from: Color, to: Color, t: number): Color => {
    const k = smoothStep(t)
    return{
        r: lerp(from.r, to.r, k),
        g: lerp(from.g, to.g, k),
        b: lerp(from.b, to.b, k),
        a: lerp(from.a, to.a, k),
    }
}
const randomColor = (): Color => {
    return {
        r: Math.floor(Math.random() * 256),
        g: 0,
        b: 0,
        a: 0.1
    }
}

export function useRandColor() {
    const [bg, setBg] = useState<Color>({r: 0, g: 0, b: 0, a: 0.1})
    const colorRef = useRef<Color>(bg)
    const frameRef = useRef<number | null>(null)


    useEffect(() => {
        let start: number | null = null
        let from = colorRef.current
        let to = randomColor()
        const duration = 3000 

        const animate = (time: number) => {
            if (!start) start = time
            const t = Math.min((time - start) / duration, 1)
            const next = mixColor(from, to, t)

            colorRef.current = next
            setBg(next)

            if (t < 1) {
                frameRef.current = requestAnimationFrame(animate)
            } else{
                from = to
                to = randomColor()
                start = null
                frameRef.current = requestAnimationFrame(animate)
            }
        }
        frameRef.current = requestAnimationFrame(animate)

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current)
        }
    },[])

    return {
        bg
    }
}