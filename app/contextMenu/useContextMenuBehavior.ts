import { useEffect, useState, useLayoutEffect } from "react"

export function useContextMenuBehavior(
    action: any,
    onClose: () => void,
    onDelete: (id: string) => void,
    panelRef?: any,
    isMine?: boolean
) {
    const [visible, setVisible] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [panelState, setPanelState] = useState<{ t: number; l: number; transform: string; transformOrigin: string }>({
        t: action!.rect.top,
        l: action!.rect.left,
        transform: 'none',
        transformOrigin: 'center'
    });

    useLayoutEffect(() => {
        if (!action || !panelRef.current) return
        const rect = action.rect
        const panelW = panelRef.current.offsetWidth
        const panelH = panelRef.current.offsetHeight
        const viewport = {w: window.innerWidth, h: window.innerHeight}

        let left: number
        let transform: string
        let transformOrigin: string
        if (isMine){
            left = rect.left - panelW 
            transformOrigin = 'right center'
        } else {
            left = rect.left + rect.width
            transformOrigin = 'left center'

        }
        let top = rect.top
        if (top + panelH > viewport.h){
            top = viewport.h - panelH - 5
        }
        if(top < 0){
            top = 5
        }
        setPanelState(prev => ({...prev, t: top, l: left, transformOrigin}))
    },[action, isMine])

    useEffect(() => {
        if (action) {
            requestAnimationFrame(() => {
                setPanelState(prev => ({
                    ...prev,
                    transform: 'translateX(0%)'
                }))
                setVisible(true)
            })
        }
    }, [action])

    const closeAnimated = () => {
        setVisible(false)

        setTimeout(() => {
            onClose?.()
        }, 10)
    }

    const confirmDelete = () => {
        onDelete?.(action?.message.id)
        setConfirm(false)
        closeAnimated()
    }

    return{
        visible,
        confirm,
        setConfirm,
        closeAnimated,
        confirmDelete,
        panelState,
        setPanelState
    }
}
