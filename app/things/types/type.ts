import { parseBackendDate } from "../utils/parseDate";

export type BaseItem = {
    id: number;
    x: number,
    y: number,
    w: number,
    h: number,
    scaleX?: number,
    scaleY?: number,
    rotation?: number,
    isSelected?: boolean
}

export type TextItem = BaseItem & {
    type: "text"
    content: string
    fontSize?: number
    color?: string
    isEditing: string
}

export type GifItem = BaseItem & {
    type: "gif",
    src: string,
    autoplay?: boolean
    loop?: boolean
}

export type Item = TextItem | GifItem


// DTO
export type BaseItemDto = {
    id: number
    x: number,
    y: number,
    w: number,
    h: number,
    scaleX?: number,
    scaleY?: number,
    rotation?: number
    type: "text" | "gif"
}
export type TextItemDto = BaseItemDto & {
    type: "text",
    content: string,
    fontSize?: number
    color?: string
}
export type GifItemDto = BaseItemDto & {
    type: "gif",
    src: string,
    autoplay?: boolean
    loop?: boolean
}
export type ItemDto = TextItemDto | GifItemDto



export function itemDtoToItem(dto: ItemDto): Item {
    if(dto.type === 'text') {
        return {
            ...dto, 
            isEditing: 'none', 
            isSelected: false
        }
    }

    return {
        ...dto, 
        isSelected: false
    }
}
export function itemDtoListToItems(dtos: ItemDto[]): Item[] {
  return dtos.map(itemDtoToItem)
}



export type Message = {
    id: string,
    body: ItemDto[],
    created_at: string,
    is_anon: boolean,
    is_checked: boolean,
    to_user_rating: number,
    
    from_user: string,
    to_user: string,
    from_display_id: string,
    to_display_id: string,
}

export type UiMessage = Omit<Message, "body" | 'created_at'> & {
    body: Item[]
    created_at: Date
}

export function messageDtoToUiMessage(dto: Message): UiMessage {
    return {
        ...dto,
        body: itemDtoListToItems(dto.body),
        created_at: parseBackendDate(dto.created_at),
    }
}


//viewport
export type Viewport ={
    scale: number,
    offsetX: number,
    offsetY: number
}



export type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  r: number
  g: number
  b: number
}