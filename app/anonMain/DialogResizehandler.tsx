"use client"

import React, { useState, useEffect, useRef } from "react";

type Props = {
    dialogPanelRef: React.RefObject<HTMLDivElement>
}

export function DialogResizehandler(props: Props) {
    const color = 'bg-linear-to-br from-white/20 to-white/10'
    const handlerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    

    

    useEffect(() => {
        if(!isDragging || !props.dialogPanelRef.current || !handlerRef.current) return

        const panel = props.dialogPanelRef.current
        const handle = handlerRef.current
        const panelLeft = panel.getBoundingClientRect().left

        const onMove = (e: MouseEvent | TouchEvent) => {
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX

            const newWidth = Math.max(200, clientX - panelLeft)

            panel.style.width = `${newWidth}px`
            handle.style.left = `${newWidth}px`
        }
        const onUp = () => {
            setIsDragging(false)
            setIsHovered(false)
        }

        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseup', onUp)

        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseup', onUp)
        }
    }, [isDragging, props.dialogPanelRef])

    if(!props.dialogPanelRef.current) return null
    return (
        <div
            ref={handlerRef}
            className={`fixed top-0 h-full w-1 ${color} z-20 cursor-ew-resize
            ${isHovered || isDragging ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
                left: props.dialogPanelRef.current.clientWidth
            }}

            onPointerEnter={(e) => {
                setIsHovered(true)
            }}
            onPointerLeave={(e) => {
                !isDragging && setIsHovered(false)
            }}
            onMouseDown={(e) => {
                setIsDragging(true)
            }}
        >
            
        </div>
    )
}
    