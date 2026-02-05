
import { Item, TextItem, GifItem } from "../things/types/type"

export const createText = (index: number): TextItem => ({
            id: index,
            type: "text",
            content: `new text ${index + 1}`,
            x: 0 ,
            y: 0 + index * 20,
            w: 100,
            h: 50,
            fontSize: 16,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            isEditing: 'none'
    })

export const insertGif = (index: number, src: string): GifItem => ({
            id: index,
            type: "gif",
            src,
            x: 0,
            y: 0 + index * 20,
            w: 100,
            h: 100,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            autoplay: true,
            loop: true
})