"use client"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useClickOutside } from "../../../things/hooks/useClickOutside"
import { useContextMenuBehavior } from "./useContextMenuBehavior"

type ActionState = {
        message: any,
        rect: DOMRect,
        type: 'desktop' | 'mobile',
        isMine: boolean
    } | null
type Props = {
    action: ActionState
    onClose?: () => void
    onDelete?: (id: string) => void
    isChose: (v: boolean) => void
    onChose?: (id: string) => void
}

export function MessageActionRoot(props: Props) {
    if(!props.action) return null

    return props.action.type === 'desktop'
        ? <DesktopCM {...props} /> 
        : <MobileCM {...props} />
}

export function MobileCM({
    action,
    onClose,
    onDelete,
    isChose,
    onChose
}: Props) {
    const ref = useRef<HTMLDivElement>(null!)
    
    const cloneRef = useRef<HTMLDivElement>(null!)
    const panelRef = useRef<HTMLDivElement>(null!)
    const [panelTop, setPanelTop] = useState<number | null>(null)
    useClickOutside(ref, onClose!)

    const {
        visible, 
        confirm, 
        setConfirm, 
        closeAnimated,
        confirmDelete
    } = useContextMenuBehavior(action, onClose!, onDelete!, panelRef)

    // положение панели
    useLayoutEffect(() => {
        if(!cloneRef.current) return
        const rect = cloneRef.current.getBoundingClientRect()
        setPanelTop(rect.bottom + 8)
    },[action])


    const [shiftyY, setShiftyY] = useState(0)
    useLayoutEffect(() => {
        if (!action || !panelRef.current) return
        const rect = action.rect
        const panelHeight = panelRef.current.offsetHeight
        const viewportH = window.innerHeight
        const bottomNeed = rect.bottom + panelHeight

        if (bottomNeed > viewportH) {
            const overflow = bottomNeed - viewportH
            setShiftyY(overflow )
        } else{
            setShiftyY(0)
        }
    }, [action])

    
    return (
    <div 
        ref={ref}
        >
        {/* overlay */}
        <div 
            className={`
                fixed inset-0 bg-black/50 z-50 duration-250 ease-out
                select-auto
                ${visible
                    ? 'opacity-100 '
                    : 'opacity-0 '
                }
            `}
            onClick={(e) => closeAnimated()}
            onContextMenu={(e) => {
                 e.preventDefault()
            }}
            />

        {/* message */}
        <div 
            ref={cloneRef}
            className={`
                fixed z-50 transition-all duration-100 ease-out
                ${visible
                    ? 'opacity-100 scale-105'
                    : 'opacity-0 scale-95'}
            `}
            style={{
                top: action!.rect.top - shiftyY,
                left: action?.rect.left,
                width: action?.rect.width,
                height: action?.type === 'mobile' ? '' : action?.rect.height,
                transformOrigin: 'center'
            }}
            >
            <div className="scale-105 h-full rounded-2xl p-2 bg-white/10 backdrop-blur-2xl shadow-xl">
                {action?.message.from_display_id}
            </div>
        </div>

        {/* panel */}
        <div
            ref={panelRef}
            className={`fixed z-50 transition-all duration-100 ease-out delay-75
                    bg-white/50 backdrop-blur-2xl 
                    border border-black/10 
                    rounded-lg shadow-lg
                    min-w-[140px]
                    select-none
                    ${visible
                        ? 'opacity-100 scale-105'
                        : 'opacity-0 scale-95'
                    }
                `}
                style={{
                    top: panelTop! - shiftyY,
                    left: `${action?.rect.left}px`
                }}
        >
            <button
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setConfirm(true)
                }}
                onContextMenu={(e) => {
                 e.preventDefault()
                }}
                disabled={!action?.message.id}
                className="w-full p-2 hover:bg-black/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Удалить
            </button>

            <button
                className="w-full p-2 hover:bg-black/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={(e) => {
                    e.preventDefault()
                    isChose?.(true)
                    onChose?.(action?.message.id)
                    closeAnimated()
                }}
            >
                Выбрать
            </button>

        </div>
        
        {confirm && (
            <div
                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flexC flex-col
                bg-linear-to-br from-white/20 to-white/40 z-50 w-90 h-30
                backdrop-blur-2xl rounded-xl border border-white/20
                "
            >
                Удалить у себя?
                <div className="flex gap-10">
                    <button className="prettyBtn" 
                        autoFocus
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            confirmDelete()
                        }}

                    >
                        Да
                    </button>
                    <button
                        className="prettyBtn"
                        onClick={() => {
                            setConfirm(false)
                            closeAnimated()
                        }}
                    >
                        Нет
                    </button>
                </div>
            </div>
        )}
    </div>
    )
}

function DesktopCM(props: Props) {
    const { action, isChose, onChose, onDelete, onClose } = props

    const ref = useRef<HTMLDivElement>(null!)
    const panelRef = useRef<HTMLDivElement>(null!)
    const isMine = action?.isMine ?? false
    const {
        visible, 
        confirm, 
        setConfirm, 
        closeAnimated,
        confirmDelete,
        panelState, setPanelState,
    } = useContextMenuBehavior(action, onClose!, onDelete!, panelRef ,isMine)
    
    useClickOutside(ref, closeAnimated!)
    
    return(
       <div 
        ref={ref}
        >
        {/* panel */}
        <div
            ref={panelRef}
            className={`fixed z-50 transition-all duration-100 ease-out
                    flexC flex-col
                    bg-white/50 backdrop-blur-2xl 
                    border border-black/10 
                    rounded-lg shadow-lg
                    min-w-[140px]
                    select-none text-[12px]
                    ${visible
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'
                    }
                `}
                style={{
                    top: panelState.t,
                    left: panelState.l,
                    transform: panelState.transform,
                    transformOrigin: panelState.transformOrigin,
                    height: action?.rect.height,
                }}
        >
            <button
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setConfirm(true)
                }}
                onContextMenu={(e) => {
                 e.preventDefault()
                }}
                disabled={!action?.message.id}
                className="w-full h-full p-2 hover:bg-black/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Удалить
            </button>

            <button
                className="w-full h-full p-2 hover:bg-black/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={(e) => {
                    e.preventDefault()
                    isChose?.(true)
                    onChose?.(action?.message.id)
                    closeAnimated()
                }}
            >
                Выбрать
            </button>

        </div>
        
        {confirm && (
            <div
                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flexC flex-col
                bg-linear-to-br from-white/20 to-white/40 z-50 w-90 h-30
                backdrop-blur-2xl rounded-xl border border-white/20
                "
            >
                Удалить у себя?
                <div className="flex gap-10">
                    <button className="prettyBtn" 
                        autoFocus
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            confirmDelete()
                        }}

                    >
                        Да
                    </button>
                    <button
                        className="prettyBtn"
                        onClick={() => {
                            setConfirm(false)
                            closeAnimated()
                        }}
                    >
                        Нет
                    </button>
                </div>
            </div>
        )}
    </div> 
    )
}