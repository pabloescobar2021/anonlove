import { on } from "events";
import { useRef } from "react";

type SwipeConfig = {
    onSwipeLeft?: () => void,
    onSwipeRight?: () => void,
    threshold?: number
}

export function useSwipe({
    onSwipeLeft,
    onSwipeRight,
    threshold = 50
}: SwipeConfig) {
    const startX = useRef<number | null>(null);

    const onTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    }

    const onTouchEnd = (e: React.TouchEvent) => {
        if (startX.current === null) return;

        const endX = e.changedTouches[0].clientX;
        const delta = endX - startX.current;

        if(Math.abs(delta) > threshold) {
            if(delta > 0) onSwipeRight?.()
            else onSwipeLeft?.()
        }

        startX.current = null;
    }

    return {
        onTouchStart,
        onTouchEnd
    }
}