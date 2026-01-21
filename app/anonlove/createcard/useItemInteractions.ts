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
    direction: ResizeDirection
}



export const userItemInteractions = (
    items: Item[], 
    setItems: React.Dispatch<React.SetStateAction<Item[]>>, 
    fieldRef: React.RefObject<HTMLDivElement | null>,
    viewport: Viewport
) => {
    const dragRef = useRef<DragRef>({id: null, offsetX: 0, offsetY: 0, w: 0, h: 0})
    const resizeRef = useRef<ResizeRef>({id: null, startX: 0, startY: 0, startW: 0, startH: 0, fontSize: 0, direction: "horizontal"})

    function screenToCanvas(
        clientX: number,
        clientY: number,
        rect: DOMRect,
        viewport: Viewport
    ){
        return {
            x: (clientX - rect.left - viewport.offsetX) / viewport.scale,
            y: (clientY - rect.top - viewport.offsetY) / viewport.scale
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
        
        resizeRef.current = {
            id: item.id,
            startX: clientX,
            startY: clientY,
            startW: item.w,
            startH: item.h,
            fontSize: item.fontSize,
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
            w = Math.max(50, r.startW + dx);
            h = Math.max(30, r.startH + dy);
            fontSize = Math.max(2, r.fontSize! + (dx+dy) / 5);
        }

        // console.log("resize direction:", r.direction, "w:", w, "h:", h, "fontSize:", fontSize)
        setItems(prev => prev.map(it => it.id === r.id ? {...it, w, h, fontSize} : it))
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

    return {startDrag, startResize, deleteItem}
}