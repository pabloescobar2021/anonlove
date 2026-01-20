export type Item = {
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

export type Message = {
    id: string,
    body: ItemDto[],
    created_at: string,
    is_anon: boolean,
    
    from_user: string,
    to_user: string,
    from_display_id: string,
    to_display_id: string,
}