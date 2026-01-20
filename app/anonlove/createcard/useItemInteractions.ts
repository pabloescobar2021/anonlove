import { Item } from "../things/types/type"
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

export const userItemInteractions = (items: Item[], setItems: React.Dispatch<React.SetStateAction<Item[]>>, fieldRef: React.RefObject<HTMLDivElement | null>) => {
    const dragRef = useRef<DragRef>({id: null, offsetX: 0, offsetY: 0, w: 0, h: 0})
    const resizeRef = useRef<ResizeRef>({id: null, startX: 0, startY: 0, startW: 0, startH: 0, fontSize: 0, direction: "horizontal"})

    const startDrag = (e: React.MouseEvent<HTMLDivElement>, item: Item) => {
        const rect = fieldRef!.current!.getBoundingClientRect()
        dragRef.current = {
            id: item.id,
            offsetX: e.clientX - rect.left - item.x,
            offsetY: e.clientY - rect.top - item.y,
            w: item.w,
            h: item.h
        }
        window.addEventListener('mousemove', onDragMove)
        window.addEventListener('mouseup', stopDrag)
    }

    const onDragMove = (e: MouseEvent) => {
        if(resizeRef.current.id !== null) return;
        const rect = fieldRef!.current!.getBoundingClientRect()
        const drag = dragRef.current
        if (drag.id === null) return;

        let x = e.clientX - rect.left - drag.offsetX
        let y = e.clientY - rect.top - drag.offsetY
        x = Math.max(-drag.w/2, Math.min(x, rect.width - drag.w/2))
        y = Math.max(-drag.h/2, Math.min(y, rect.height - drag.h/2))

        setItems(prev => prev.map(it => it.id === drag.id ? {...it, x, y} : it))
    }

    const stopDrag = () => {
        dragRef.current.id = null
        window.removeEventListener('mousemove', onDragMove)
        window.removeEventListener('mouseup', stopDrag)
    }


    //resize
    const startResize = (e: React.MouseEvent<HTMLDivElement>, item: Item, direction: ResizeDirection) => {
        e.stopPropagation()
        resizeRef.current = {
            id: item.id,
            startX: e.clientX,
            startY: e.clientY,
            startW: item.w,
            startH: item.h,
            fontSize: item.fontSize,
            direction: direction
        }
        window.addEventListener('mousemove', onResizeMove)
        window.addEventListener('mouseup', stopResize)
    }

    const onResizeMove = (e: MouseEvent) => {
        const r = resizeRef.current
        if (r.id === null) return;

        const dx = e.clientX - r.startX
        const dy = e.clientY - r.startY

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

        console.log("resize direction:", r.direction, "w:", w, "h:", h, "fontSize:", fontSize)
        setItems(prev => prev.map(it => it.id === r.id ? {...it, w, h, fontSize} : it))
    }

    const stopResize = () => {
        resizeRef.current.id = null
        window.removeEventListener('mousemove', onResizeMove)
        window.removeEventListener('mouseup', stopResize)
    }



    //delete
    const deleteItem = (item: Item) => {
        setItems(prev => prev.filter(it => it.id !== item.id))
    }

    return {startDrag, startResize, deleteItem}
}