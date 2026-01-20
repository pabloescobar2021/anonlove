
import React from "react"
import { Item } from "../things/types/type"

export const createText = (setItems: React.Dispatch<React.SetStateAction<Item[]>>) => {
        setItems(prev => [...prev, {
            id: prev.length,
            type: "text",
            content: `new text ${prev.length + 1}`,
            x: 0 ,
            y: 0 + prev.length * 20,
            w: 100,
            h: 50,
            fontSize: 16,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            isEditing: 'none'
        }])
    }