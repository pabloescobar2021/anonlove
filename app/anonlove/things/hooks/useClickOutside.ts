import { useEffect } from "react";

export function useClickOutside(
    ref: React.RefObject<HTMLElement>,
    handler: () => void
) {
    useEffect(() => {
        const listener = (e: MouseEvent | TouchEvent) => {
            if(!ref.current) return
            if(ref.current.contains(e.target as Node)) return
            handler()
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    },[ref, handler])
}