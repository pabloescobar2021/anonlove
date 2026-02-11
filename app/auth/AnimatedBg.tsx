"use client"

import "./authStyle.css";
import { useState,useEffect, useRef, useCallback } from "react";

const CIRCLES = [
    { size: 300, blur: 80,  color: "hsla(334, 95%, 51%, 0.5)",  delay: 0    },
    { size: 200, blur: 60,  color: "hsla(210, 90%, 60%, 0.4)",  delay: 1200 },
    { size: 400, blur: 100, color: "hsla(270, 80%, 65%, 0.35)", delay: 600  },
    { size: 250, blur: 70,  color: "hsl(325, 100%, 50%)",  delay: 2000 },
]

type CircleProps = typeof CIRCLES[number]

function AnimCicle({ size, blur, color, delay}: CircleProps) {
    const ref = useRef<HTMLDivElement>(null!);
    const isAnimatingRef = useRef(false);

    const randomPos = () => ({
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
    });

    const animationCircle = useCallback(() => {
        if(isAnimatingRef.current) return
        isAnimatingRef.current = true
    
        const el = ref.current
        if(!el) return
    
        const pos = randomPos()
    
        el.style.transition = "none"
        el.style.left = `${pos.x}px`
        el.style.top = `${pos.y}px`
        el.style.transform = "translate(-50%, -50%) scale(0)";
        el.style.opacity = "0"
    
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Появляемся
                el.style.transition = "transform 3s linear, opacity 0.8s ease"
                el.style.transform = "translate(-50%, -50%) scale(3)";
                el.style.opacity = "1"
    
                //исчезаем
                setTimeout(() => {
                    el.style.transition = "opacity 1s ease"
                    el.style.opacity = "0"
    
                    // Запускаем следующий круг
                    setTimeout(() => {
                        isAnimatingRef.current = false
                        animationCircle()
                    }, 1000)
                }, 3000 )
            })
        })
    },[])
    
    useEffect(() => {
        const t = setTimeout(animationCircle, delay)   
        return () => clearTimeout(t)  
    },[animationCircle, delay])
    
    return (
        <>
            <div 
                ref={ref}
                className="overflow-visible"
                style={{
                    position: "absolute",
                    width: `${size}px`,
                    height: `${size}px`,
                    filter: `blur(${blur}px)`,
                    background: `radial-gradient(circle at 50% 50%, ${color}, transparent 100%)`,
                    transform: "translate(-50%, -50%) scale(0)",
                }}
            />
    
        </>
    )
}

export function AnimatedBg() {
    return (
        <>
            {CIRCLES.map((c, i) => (
                <AnimCicle key={i} {...c} />
            ))}
        </>
    )
}