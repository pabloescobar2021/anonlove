
import { useState, useEffect, useRef } from "react"
import { Item } from "../../things/types/type"
import { useCheckMobile } from "../../things/hooks/checkMobile"

export type ItemPatch = Partial<Pick<Item,
    | "fontSize"
    | "color"
    | "rotation"
>>

type RedactorProps = {
    item: Item | null
    items: Item[]
    isOpen: boolean
    open: (v: boolean) => void

    onChange: (id: Item["id"], patch: ItemPatch) => void

}

function formatNumber(value?: number, digits = 1) {
    if (value == null || Number.isNaN(value)) return ""
    return value.toFixed(digits).replace(/\.0+$/, "")
}
const normalizeNumber = (v: string) =>
    v.replace(",", ".").replace(/[^0-9.-]/g, "")

export function Redactor({
    item,
    items,
    isOpen,
    open,

    onChange
}:RedactorProps
) {
    const isMobile = useCheckMobile()

    const [size, setSize] = useState('')
    const [color, setColor] = useState<string>('#000000')
    const [rotation, setRotation] = useState('')
    useEffect(() => {
        if (item) {
            setSize(formatNumber(item.fontSize, 1))
            setColor(item.color ?? "#000000")
            setRotation(formatNumber(item.rotation, 1))
        } 
    }, [item?.fontSize, item?.color, item?.rotation])

    const inputStyle = `
  w-14 px-2 py-1
  text-sm font-mono text-white
  bg-white/15 rounded-md
  outline-none
  focus:bg-white/25 focus:ring-1 focus:ring-white/40
`


    const panelRef = useRef<HTMLDivElement>(null)
    const startX = useRef(0)
    const startW = useRef(300)
    const handleChangeOpen = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        startX.current = clientX
        startW.current = panelRef.current?.offsetWidth ?? 300

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('touchmove', handleMouseMove)
        window.addEventListener('touchend', handleMouseUp)
    }
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX

        if (!panelRef.current) return

        const delta = startX.current - clientX
        const newWidth = Math.min(
            500,
            Math.max(100,startW.current + delta)
        )
        
        panelRef.current.style.width = `${newWidth}px`
    }
    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('touchmove', handleMouseMove)
        window.removeEventListener('touchend', handleMouseUp)
    }
        

    return (
    <div className="z-50">
        {/* open button */}
        <div 
            className={`absolute right-0 w-7 rounded-l-full 
                backdrop-blur-mdtransition cursor-pointer
                md:inset-y-0
                inset-y-60
                ${isOpen ? "hidden" : ""}
                ${isMobile ? "bg-black/50" : "bg-white/10"}
            `}
        >
            <button 
                className="w-full h-full"
                onClick={() => open(!isOpen)}
            >
                {`>`}
            </button>
        </div>

        {/* panel */}
        <div
            ref={panelRef}
            className={`absolute right-0 inset-y-0 
                bg-gradient-to-b from-[#3b0d10] to-[#220507] shadow-2xl
                z-50 transition-transform rounded-l-2xl
                ${isOpen ? "traslate-x-0 " : "translate-x-full "}
            `}
            style={{width: 300}}
        >
            <div className="relative w-full h-full flex justify-center p-2">

                <div className="flex flex-col gap-2 p-4">
                    {/* Font size */}
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">Size</span>
                        <div className="flex items-center gap-1">
                        <input
                            type="text"
                            className={inputStyle}
                            value={size}
                            onChange={(e) => setSize(normalizeNumber(e.target.value))}
                            onBlur={() =>
                            item && onChange(item.id, { fontSize: Number(size) })
                            }
                        />
                        <span className="text-xs text-white/40">px</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">Color</span>
                        <input
                            type="color"
                            value={color}
                            className="w-8 h-8 rounded-md bg-transparent cursor-pointer"
                            onChange={(e) => {
                                setColor(e.target.value);
                                item && onChange(item.id, { color: e.target.value });
                            }}
                        />
                    </div>

                    {/* Rotation */}
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">Rotate</span>
                        <input
                            type="text"
                            className={inputStyle}
                            value={rotation}
                            onChange={(e) => setRotation(normalizeNumber(e.target.value))}
                            onBlur={() =>
                                item && onChange(item.id, { rotation: Number(rotation) })
                            }
                        />
                    </div>

                </div>


                {/* close trigger */}
                <div 
                    className="
                    absolute left-0 top-1/2 -translate-y-1/2
                    h-16 w-2 rounded-full
                    bg-white/20 hover:bg-white/40
                    cursor-ew-resize transition
                "
                    onDoubleClick={() => open(false)}
                    onClick={() => {
                        if(isMobile) open(false)
                    }}
                    onMouseDown={handleChangeOpen}
                    onTouchStart={handleChangeOpen}
                    
                />
            </div>

        </div>

    </div>
    )
}