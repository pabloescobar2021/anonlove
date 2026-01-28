export type Item = {
    id: number;
    type: "text",
    content: string,
    x: number,
    y: number,
    w: number,
    h: number,
    color?: string,
    fontSize?: number,
    scaleX?: number,
    scaleY?: number,
    rotation?: number,
    isEditing: string,
    isSelected?: boolean
}

export type ItemDto = {
    id: number;
    type: "text",
    content: string,
    x: number,
    y: number,
    w: number,
    h: number,
    fontSize?: number,
    scaleX?: number,
    scaleY?: number,
    rotation?: number,
}
export function itemDtoToItem(dto: ItemDto): Item {
    return {
        ...dto, 
        isEditing: 'none', 
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

export type UiMessage = Omit<Message, "body"> & {
    body: Item[]
}

export type Viewport ={
    scale: number,
    offsetX: number,
    offsetY: number
}