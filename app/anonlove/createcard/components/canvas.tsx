"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Item, Viewport } from "../../things/types/type"
import { ItemPatch, Redactor } from "./Redactor"
import { userItemInteractions } from "../useItemInteractions"
import { CanvasItem } from "./all"
import { CreateBtns } from "./CreateBtns"

const CANVAS_W = 800
const CANVAS_H = 600

type CanvasProps = {
    items: Item[]
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
    canEdit: boolean
    isRecieve: boolean
}

export function Canvas({
    items,
    setItems,
    canEdit,
    isRecieve
}: CanvasProps) {
    const fieldRef = useRef<HTMLDivElement>(null)

    const [viewport, setViewport] = useState<Viewport>({
        scale: 1,
        offsetX: 0,
        offsetY: 0
    })

    useEffect(() => {
        const getInitialScale = () => {
            const availW = window.innerWidth - 32
            const availH = window.innerHeight - 120
            const scaleX = availW / 800
            const scaleY = availH / 600
            const initScale = Math.min(scaleX, scaleY, 1)

            setViewport(v => ({
                ...v,
                scale: initScale
            }))
        }
        getInitialScale()

        window.addEventListener('resize', getInitialScale)
        return () => window.removeEventListener('resize', getInitialScale)
    }, [])

    const [redactorOpen, setRedactorOpen] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null) 
    const [ismenuTextOpen, setMenuTextOpen] = useState(false)
    const selectedItem = useMemo(
        () => items.find(item => item.id === selectedItemId) ?? null,
        [items, selectedItemId]
    )

    const handleRedactorChange = (id: number, patch: ItemPatch) => {
        setItems(prev => 
            prev.map(item =>
                item.id === id 
                    ? {...item, ...patch}
                    : item
            )
        )
    }

    const {startDrag, startResize, deleteItem, zoomHandlers, startPan} = userItemInteractions(
        items, 
        setItems, 
        fieldRef, 
        setViewport,
        viewport, 
    )

    return (
        <>
            <div
                ref={fieldRef}  
                className={`relative w-full h-full overflow-hidden z-10 touch-none select-none
                    `}
                onMouseDown={(e) =>{
                    if (e.button === 0 && e.ctrlKey){
                        startPan(e)
                        return
                    }

                    if(e.target !== e.currentTarget) return;
                    setItems(prev => prev.map(it => ({...it, isSelected: false, isEditing: 'none'})))
                    setRedactorOpen(false)
                }}
                {...zoomHandlers}
            >
                <div
                    className="overflow-hidden"
                    style={{
                        position: 'absolute',
                        width: '800px',
                        height: '600px',
                        left: '50%',
                        top: '50%',
                        marginLeft: '-400px',
                        marginTop: '-300px',
                        transform: `translate(${viewport.offsetX}px, ${viewport.offsetY}px) scale(${viewport.scale})`,
                        transformOrigin: 'center center',
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                    }}
                        onMouseDown={(e) =>{
                            if(e.target !== e.currentTarget) return;
                            setItems(prev => prev.map(it => ({...it, isSelected: false, isEditing: 'none'})))
                            setRedactorOpen(false)
                        }}
                >
                    {items.map((item,i) => (
                        <CanvasItem
                            key={item.id}
                            item={item}
                            canEdit={canEdit}
                            onSelect={id => setItems(prev =>
                            prev.map(it => ({ ...it, isSelected: it.id === id }))
                            )}
                            onUpdate={(id, patch) => setItems(prev =>
                            prev.map(it => (it.id === id ? { ...it, ...patch } : it))
                            )}
                            onDelete={item => setItems(prev => prev.filter(it => it.id !== item.id))}
                            startDrag={startDrag}
                            startResize={startResize}
                            ismenuTextOpen={ismenuTextOpen}
                            setMenuTextOpen={setMenuTextOpen}
                            isLoading={false}
                            setselectedItemId={setSelectedItemId}
                            setOpenRedactor={setRedactorOpen}
                        />
                    ))}
                </div> 
            </div>

            {!isRecieve && (
                <div className="z-20">
                    <CreateBtns setItems={setItems}/>
                </div>
            )}

            <div className="z-20">
                <Redactor
                    item={selectedItem}
                    items={items}
                    isOpen={redactorOpen}
                    open={setRedactorOpen}
                    onChange={handleRedactorChange}
                />
            </div>
        </>
    )

}