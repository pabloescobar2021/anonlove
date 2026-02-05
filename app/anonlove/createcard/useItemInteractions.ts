import { Item, Viewport } from "../things/types/type"
import { useRef }from "react"

type ResizeDirection = "horizontal" | "top" | "bottom" | "diagonal"

type DragRef = {
    id: number | null
    offsetX: number
    offsetY: number
    w: number
    h: number
}

type ResizeRef = {
    id: number | null
    startX: number
    startY: number
    startW: number
    startH: number
    fontSize?: number
    rotate?: number
    cx?: number
    cy?: number
    startAngle?: number
    direction: ResizeDirection
}



export const userItemInteractions = (
    items: Item[], 
    setItems: React.Dispatch<React.SetStateAction<Item[]>>, 
    fieldRef: React.RefObject<HTMLDivElement | null>,

    setViewport: React.Dispatch<React.SetStateAction<Viewport>>,
    viewport: Viewport
) => {
    const dragRef = useRef<DragRef>({id: null, offsetX: 0, offsetY: 0, w: 0, h: 0})
    const resizeRef = useRef<ResizeRef>({id: null, startX: 0, startY: 0, startW: 0, startH: 0, fontSize: 0,rotate: 0, direction: "horizontal"})
    const touchDistanceRef = useRef<number | null>(null)

    function screenToCanvas(
        clientX: number,
        clientY: number,
        rect: DOMRect,
        viewport: Viewport
    ){
        const mx = clientX - rect.left - rect.width / 2
        const my = clientY - rect.top - rect.height / 2
        const cx = (mx - viewport.offsetX) / viewport.scale
        const cy = (my - viewport.offsetY) / viewport.scale

        return {
            x: cx + 400,
            y: cy + 300
        }
    }

    function getTouchCoordinates(e: TouchEvent): { clientX: number; clientY: number } | null {
        if (e.touches.length === 0) return null
        const touch = e.touches[0]
        return { clientX: touch.clientX, clientY: touch.clientY }
    }
    
    const startDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, item: Item) => {
        const rect = fieldRef!.current!.getBoundingClientRect()
        
        let clientX: number, clientY: number
        
        if ('touches' in e) {
            if (e.touches.length === 0) return
            clientX = e.touches[0].clientX
            clientY = e.touches[0].clientY
        } else {
            clientX = e.clientX
            clientY = e.clientY
        }
        
        const pos = screenToCanvas(clientX, clientY, rect, viewport)
        dragRef.current = {
            id: item.id,
            offsetX: pos.x - item.x,
            offsetY: pos.y - item.y,
            w: item.w,
            h: item.h
        }

        window.addEventListener('mousemove', onDragMove)
        window.addEventListener('mouseup', stopDrag)
        window.addEventListener('touchmove', onDragMove as any)
        window.addEventListener('touchend', stopDrag)
    }
    const onDragMove = (e: MouseEvent | TouchEvent) => {
        if(resizeRef.current.id !== null) return;

        const rect = fieldRef!.current!.getBoundingClientRect()
        const drag = dragRef.current
        
        let clientX: number, clientY: number
        
        if (e instanceof TouchEvent) {
            if (e.touches.length === 0) return
            clientX = e.touches[0].clientX
            clientY = e.touches[0].clientY
        } else {
            clientX = e.clientX
            clientY = e.clientY
        }
        
        const pos = screenToCanvas(clientX, clientY, rect, viewport)
        if (drag.id === null) return;

        setItems(prev => prev.map(it => it.id === drag.id 
            ? {...it, 
                x: pos.x - drag.offsetX, 
                y: pos.y - drag.offsetY 
            } 
            : it))
    }
    const stopDrag = () => {
        dragRef.current.id = null
        window.removeEventListener('mousemove', onDragMove)
        window.removeEventListener('mouseup', stopDrag)
        window.removeEventListener('touchmove', onDragMove as any)
        window.removeEventListener('touchend', stopDrag)
    }


    //resize
    const startResize = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, item: Item, direction: ResizeDirection) => {
        e.stopPropagation()
        
        let clientX: number, clientY: number
        
        if ('touches' in e) {
            if (e.touches.length === 0) return
            clientX = e.touches[0].clientX
            clientY = e.touches[0].clientY
        } else {
            clientX = e.clientX
            clientY = e.clientY
        }
        
        const rect = fieldRef!.current!.getBoundingClientRect()
        const canvasPos = screenToCanvas(clientX, clientY, rect, viewport)
        const cx = item.x + item.w/2
        const cy = item.y + item.h/2
        
        resizeRef.current = {
            id: item.id,
            startX: clientX,
            startY: clientY,
            startW: item.w,
            startH: item.h,
            cx: cx,
            cy: cy,
            startAngle: Math.atan2(canvasPos.y - cy, canvasPos.x - cx),
            fontSize: item.type === 'text' ? item.fontSize : undefined,
            rotate: item.rotation,
            direction: direction
        }
        window.addEventListener('mousemove', onResizeMove)
        window.addEventListener('mouseup', stopResize)
        window.addEventListener('touchmove', onResizeMove as any)
        window.addEventListener('touchend', stopResize)
    }

    const onResizeMove = (e: MouseEvent | TouchEvent) => {
        const r = resizeRef.current
        if (r.id === null) return;

        let clientX: number, clientY: number
        
        if (e instanceof TouchEvent) {
            if (e.touches.length === 0) return
            clientX = e.touches[0].clientX
            clientY = e.touches[0].clientY
        } else {
            clientX = e.clientX
            clientY = e.clientY
        }

        const dx = (clientX - r.startX) / viewport.scale
        const dy = (clientY - r.startY) / viewport.scale

        let w = r.startW
        let h = r.startH
        let fontSize = r.fontSize
        let newX = undefined as number | undefined
        let newY = undefined as number | undefined
        let rotation = undefined as number | undefined

        if (r.direction === "horizontal") {
            w = Math.max(50, r.startW + dx);
        }
        if(r.direction === "top") {
            h = Math.max(30, r.startH + dy);
        }
        if (r.direction === "bottom") {
            h = Math.max(30, r.startH + dy);
        }
        if (r.direction === "diagonal") {
            const rect = fieldRef!.current!.getBoundingClientRect()
            const mousePos = screenToCanvas(clientX, clientY, rect, viewport)

            const currentAngle = Math.atan2(mousePos.y - r.cy!, mousePos.x - r.cx!)
            rotation = r.rotate! + (currentAngle - r.startAngle!)

            const newDist = Math.sqrt((mousePos.x - r.cx!)**2 + (mousePos.y - r.cy!)**2)
            const oldDist = Math.sqrt((r.startW/2)**2 + (r.startH/2)**2)

            const scale = newDist / oldDist
    
            w = Math.max(50, r.startW * scale)
            h = Math.max(30, r.startH * scale)
            fontSize = Math.max(8, r.fontSize! * scale)
            
            // Центр остается на месте
            newX = r.cx! - w/2
            newY = r.cy! - h/2
        }
        // console.log("resize direction:", r.direction, "w:", w, "h:", h, "fontSize:", fontSize)
        setItems(prev => prev.map(it => 
            it.id === r.id 
                ? {
                    ...it, 
                    w, 
                    h, 
                    fontSize, 
                    rotation: rotation !== undefined ? rotation : it.rotation, 
                    x: newX || it.x, 
                    y: newY || it.y
                } 
                : it
        ))
    }

    const stopResize = () => {
        resizeRef.current.id = null
        window.removeEventListener('mousemove', onResizeMove)
        window.removeEventListener('mouseup', stopResize)
        window.removeEventListener('touchmove', onResizeMove as any)
        window.removeEventListener('touchend', stopResize)
    }


    //delete
    const deleteItem = (item: Item) => {
        setItems(prev => prev.filter(it => it.id !== item.id))
    }






    const clamp = (v: number, min: number, max: number) =>
        Math.min(max, Math.max(min, v))

    const lerp = (a: number, b: number, t: number) =>
        a + (b - a) * t

    //zoom
    const handleZoom = (e: React.WheelEvent<HTMLDivElement>) => {
        const rect = fieldRef.current!.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width /2;
        const mouseY = e.clientY - rect.top - rect.height /2;

        setViewport(v => {
            const oldScale = v.scale;
            const newScale = clamp(oldScale - e.deltaY * 0.001, 0.1, 3)
            const scaleFactor = newScale / oldScale;

            let nextOffsetX = mouseX - (mouseX - v.offsetX) * scaleFactor;
            let nextOffsetY = mouseY - (mouseY - v.offsetY) * scaleFactor;

            if (newScale <= 1){
                const t = 1 - newScale
                nextOffsetX = nextOffsetX * (1 - t)
                nextOffsetY = nextOffsetY * (1 - t)
            }
            
            return {
            scale: newScale,
            offsetX: nextOffsetX,
            offsetY: nextOffsetY
            };
        });
    };

    const getDistanceBetweenTouches = (touch1: Touch, touch2: Touch): number => {
        const dx = touch1.clientX - touch2.clientX
        const dy = touch1.clientY - touch2.clientY
        return Math.sqrt(dx * dx + dy * dy)
    }
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length === 2) {
            touchDistanceRef.current = getDistanceBetweenTouches(e.touches[0] as Touch, e.touches[1] as Touch)
            startTouchPan(e)
        }
    }
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length === 2 && touchDistanceRef.current !== null) {
            e.preventDefault()
            const currentDistance = getDistanceBetweenTouches(e.touches[0] as Touch, e.touches[1] as Touch)
            const distanceDelta = currentDistance - touchDistanceRef.current
            
            setViewport(v => ({
                ...v,
                scale: Math.min(3, Math.max(0.3, v.scale + distanceDelta * 0.01))
            }))
            
            touchDistanceRef.current = currentDistance
        }
        
        // Pan для двух пальцев
        onTouchPanMove(e)
    }
    const handleTouchEnd = () => {
        touchDistanceRef.current = null
        stopTouchPan()
    }
    const zoomHandlers = {
        onWheel: handleZoom,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd
    }



    const panRef = useRef({
        startX: 0, startY: 0, startOffsetX: 0, startOffsetY: 0
    })
    const isPanning = useRef(false)
    const panTouchRef = useRef({
        startX: 0, startY: 0, startOffsetX: 0, startOffsetY: 0
    })
    const isPanningTouch = useRef(false)

    const clampOffset = (offsetX: number, offsetY: number, scale: number) => {
        // Ограничиваем только когда отдалено (scale < 1)
        if (scale >= 1) {
            return { offsetX, offsetY }
        }
        
        const maxOffset = 400 * (1 - scale);
        
        return {
            offsetX: clamp(offsetX, -maxOffset, maxOffset),
            offsetY: clamp(offsetY, -maxOffset, maxOffset)
        }
    }

    const startPan = (e: React.MouseEvent<HTMLDivElement>) => {
        if(e.button === 0 && e.ctrlKey){
            e.preventDefault()
            isPanning.current = true
            panRef.current = {
                startX: e.clientX,
                startY: e.clientY,
                startOffsetX: viewport.offsetX,
                startOffsetY: viewport.offsetY
            }
            window.addEventListener("mousemove", onPanMove)
            window.addEventListener("mouseup", stopPan)
        }
    } 
    const onPanMove = (e: MouseEvent) => {
        if (!isPanning.current) return
        const dx = e.clientX - panRef.current.startX
        const dy = e.clientY - panRef.current.startY
        

        setViewport(v => {
            const nextOffsetX = panRef.current.startOffsetX + dx
            const nextOffsetY = panRef.current.startOffsetY + dy
            const clamped = clampOffset(nextOffsetX, nextOffsetY, v.scale)
            
            return {
                ...v,
                offsetX: clamped.offsetX,
                offsetY: clamped.offsetY
            }
        })
        
    }

    const stopPan = () => {
        isPanning.current = false
        window.removeEventListener("mousemove", onPanMove)
        window.removeEventListener("mouseup", stopPan)
    }

    // Touch Pan (два пальца)
    const startTouchPan = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length === 2) {
            isPanningTouch.current = true
            panTouchRef.current = {
                startX: (e.touches[0].clientX + e.touches[1].clientX) / 2,
                startY: (e.touches[0].clientY + e.touches[1].clientY) / 2,
                startOffsetX: viewport.offsetX,
                startOffsetY: viewport.offsetY
            }
        }
    }

    const onTouchPanMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isPanningTouch.current || e.touches.length !== 2) return
        
        e.preventDefault()
        const dx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - panTouchRef.current.startX
        const dy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - panTouchRef.current.startY

        setViewport(v => {
            const nextOffsetX = panTouchRef.current.startOffsetX + dx
            const nextOffsetY = panTouchRef.current.startOffsetY + dy
            const clamped = clampOffset(nextOffsetX, nextOffsetY, v.scale)
            
            return {
                ...v,
                offsetX: clamped.offsetX,
                offsetY: clamped.offsetY
            }
        })
    }

    const stopTouchPan = () => {
        isPanningTouch.current = false
    }



    return {startDrag, startResize, deleteItem, zoomHandlers, startPan}
}