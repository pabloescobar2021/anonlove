import { useEffect, useState } from "react"
import { Item } from "../../things/types/type"

type CanvasItemProps = {
  item: Item
  canEdit: boolean
  onSelect: (id: number) => void
  onUpdate: (id: number, patch: Partial<any>) => void
  onDelete: (item: Item) => void
  startDrag: (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, item: Item) => void
  startResize: (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    item: Item,
    dir: "horizontal" | "top" | "bottom" | "diagonal"
  ) => void
  ismenuTextOpen: boolean
  setMenuTextOpen: (v: boolean) => void
  isLoading: boolean
  setselectedItemId: (id: number) => void
}

export function CanvasItem({
  item,
  canEdit,
  onSelect,
  onUpdate,
  onDelete,
  startDrag,
  startResize,
  ismenuTextOpen,
  setMenuTextOpen,
  isLoading,
  setselectedItemId
}: CanvasItemProps) {
  return (
    <div
      className={`flex text-black select-none relative
        ${item.isSelected && item.isEditing !== "text" ? "border" : ""}
      `}
      style={{
        position: "absolute",
        left: item.x,
        top: item.y,
        width: item.w,
        height: item.h,
        fontSize: item.fontSize,
        color: item.color,
        cursor: canEdit ? (item.isSelected ? "move" : "pointer"): "cursor-allow",
        transform: `rotate(${item.rotation || 0}rad)`,
        transformOrigin: "center center"
      }}
      onDoubleClick={() => onUpdate(item.id, { isEditing: "text" })}
      onMouseDown={e => {
        if(!canEdit) return
        startDrag(e, item)
        onSelect(item.id)
      }}
      onTouchStart={e => {
        if(!canEdit) return
        startDrag(e, item)
        onSelect(item.id)
      }}
      onClick={() => {
        setselectedItemId(item.id)
      }}
    >
      {item.isEditing === "text" ? (
        <input
          autoFocus
          value={item.content}
          onChange={e => onUpdate(item.id, { content: e.target.value })}
          onBlur={() => onUpdate(item.id, { isEditing: "none" })}
          onKeyDown={e => {
            if (e.key === "Enter") e.currentTarget.blur()
          }}
        />
      ) : (
        <div
          className={`relative w-full h-full flex ${
            item.isSelected ? "" : "overflow-hidden"
          }`}
        >
          {item.content}

          {item.isSelected && (
            <>
              {/* menu */}
              <div className="absolute -top-1.5 -right-2.5">
                <div className="relative">
                  <svg
                    onClick={e => {
                      e.stopPropagation()
                      setMenuTextOpen(!ismenuTextOpen)
                    }}
                    className="hover:scale-110 transition-transform cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8h24M4 16h24M4 24h24"
                    />
                  </svg>

                  <div
                    className={`absolute top-1 left-full text-[9px] bg-black/20 rounded-md
                      flex flex-col transition-opacity ${
                        ismenuTextOpen ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <button
                      className="hover:bg-black/10"
                      onClick={() => onDelete(item)}
                    >
                      Удалить
                    </button>
                  </div>

                </div>
              </div>

              {/* resize handles */}
              <ResizeHandle
                className="-right-1 bottom-1/2 translate-y-1/2 w-1 h-3 cursor-w-resize"
                onStart={e => startResize(e, item, "horizontal")}
              />
              <ResizeHandle
                className="-top-1 left-1/2 -translate-x-1/2 w-3 h-1 cursor-s-resize"
                onStart={e => startResize(e, item, "top")}
              />
              <ResizeHandle
                className="-bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 cursor-s-resize"
                onStart={e => startResize(e, item, "bottom")}
              />
              <ResizeHandle
                className="-bottom-1.5 -right-1.5 w-2 h-2 cursor-se-resize"
                onStart={e => startResize(e, item, "diagonal")}
              />
            </>
          )}
        </div>
      )}
    </div>
  )
}

function ResizeHandle({
  className,
  onStart,
}: {
  className: string
  onStart: (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void
}) {
  return (
    <div
      className={`absolute bg-white border ${className}`}
      onMouseDown={e => {
        e.stopPropagation()
        onStart(e)
      }}
      onTouchStart={e => {
        e.stopPropagation()
        onStart(e)
      }}
    />
  )
}



export function RightField({
    rightPanelOpen,
    setRightPanelOpen,
    userId, setUserId,
    isReply,
    anonState, 
    setAnonState,
    handleSendMessage,
    idRef,anonRef,
    isRecieve,
    routeTo,
    userError

}: {
    rightPanelOpen: boolean
    setRightPanelOpen: (v: boolean) => void
    userId: string | null
    setUserId: (v: string) => void
    isReply: boolean
    anonState: { 
      isAnon: boolean,
      anonUsedOnce: boolean,
      canToggle: boolean  
    }
    setAnonState: (isAnon: boolean) => void
    handleSendMessage: () => void
    idRef: React.RefObject<HTMLInputElement | null>
    anonRef: React.RefObject<HTMLInputElement | null>
    isRecieve: boolean
    routeTo: (v: string | null) => void
    userError: string | null
}) {
    const [inputValue, setInputValue] = useState(userId || "");
    useEffect(() => {
        if(!userId) return
        setInputValue(userId || "")
    },[userId])

    return (
        <div
            className={`fixed inset-0 z-20 bg-black/50 transition-all duration-300 overflow-hidden 
                    ${rightPanelOpen ? "backdrop-blur-lg translate-y-0" : "backdrop-blur-none translate-y-full"}
                `}
            onMouseDown={(e) => setRightPanelOpen(false)}
        >
            <div 
                className="absolute right-0 inset-y-0 flex justify-center items-center 
                        md:w-[400px] w-full bg-black/90 z-20"
                onMouseDown={(e) => {
                    e.stopPropagation()
                }}
            >   
                {isRecieve 
                ?(
                    <div 
                    className=" bg-white/10 rounded-xl p-3
                    ">
                        <button
                          onClick={() => {
                            routeTo(userId)
                            setRightPanelOpen(false)
                          }}
                        >
                            Ответить, {`${userId}`}
                        </button>
                    </div>
                ):(
                    <form 
                        className="relative flex flex-col w-full justify-center items-center"
                        onSubmit={(e) => {
                            e.preventDefault()
                        }}
                        >
                        <input
                            ref={idRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onBlur={() => setUserId(inputValue)}
                            disabled={isReply}
                            type="text"
                            placeholder="ID кисы"
                            className={`p-2 mb-4 w-1/2 bg-white/10 border rounded-md text-white
                                    ${isReply && "opacity-50"}
                                    ${userError && "border-red-500"}
                            `}
                        />

                        {userError && (
                          <p className="text-red-400 text-xs mb-3">
                            {userError}
                          </p>
                        )}

                        <div className="flex w-full justify-center items-center">
                            <input
                                type="checkbox"
                                ref={anonRef}
                                checked={anonState.isAnon}
                                disabled={!anonState.canToggle}
                                onChange={(e) => setAnonState(e.target.checked)}
                                className="bg-white/10 border rounded-md text-white"
                            />
                            <span className="text-[10px]">
                                {anonState.canToggle
                                  ? "Будешь анонимен? (только 1 раз)"
                                  : "Анонимность уже использована"
                                }
                            </span>
                        </div>

                        <button
                            type="submit"
                            className={`p-2 mt-4 border rounded-2xl transition-all duration-200
                                ${userError ? "opacity-50 cursor-not-allowed" : "hover:bg-white/20"}
                            `}                            
                            onClick={handleSendMessage}
                            disabled={!!userError}
                        >
                            Отправить
                        </button>

                    </form>
                )}
                        <button 
                            className="absolute bottom-0 w-20 bg-white/20 rounded-t-full 
                            hover:bg-white/40 transition-all duration-200
                            flex justify-center items-center
                            "
                            onClick={() => setRightPanelOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></svg>
                        </button>
            </div>
        </div>
    )
}