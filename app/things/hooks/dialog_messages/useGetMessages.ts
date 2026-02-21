"use client"

import { useEffect, useState, useRef, useCallback, useLayoutEffect, use } from "react"
import { supabase } from "@/utils/supabase/alSupabase"
import { UiMessage } from "../../types/type"
import { VirtuosoHandle } from "react-virtuoso"

type CacheEntry = {
    messages: UiMessage[]
    cursorId: string | null
    hasMore: boolean
    scrollIndex: number
}
const LIMIT = 10

// Хук для загрузки и управления сообщениями в диалоге с кэшем и прокруткой
export function useGetMessages(conversationId: string | null) {

    const [messages, setMessages] = useState<UiMessage[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [initialTopMostItemIndex, setInitialTopMostItemIndex] = useState<number | undefined>(undefined)
    const [firstItemIndex, setFirstItemIndex] = useState(1000000)
    const [visibleRange, setVisibleRange] = useState({
        startIndex: 0,
        endIndex: 0
    })

    const virtuosoRef = useRef<VirtuosoHandle>(null)
    const cacheRef = useRef<Map<string, CacheEntry>>(new Map())
    const cursorRef = useRef<string | null>(null)
    const channelRef = useRef<any>(null)
    const currentScrollIndex = useRef({startIndex: 0, endIndex: 0})

    const hasMoreRef = useRef(true)
    const loadingRef = useRef(false)
    
    

    // Загружает сообщения с сервера, поддерживает пагинацию (курсор), кэширует результаты
    const loadMessages = async (cursor?: string | null) => {
        if (!conversationId || loadingRef.current) return
        if(cursor && !hasMoreRef.current) return

        setLoading(true)
        loadingRef.current = true
        if(cursor) setLoadingMore(true)


        try {
            const { data, error } = await supabase.rpc("get_conversation_messages", {
                p_conversation_id: conversationId,
                p_cursor_id: cursor,
                p_limit: LIMIT
            })

            if (error) throw error

            const newMessages = data as UiMessage[]

            if (!newMessages || newMessages.length === 0) {
                setHasMore(false)
                hasMoreRef.current = false
                const cache = cacheRef.current.get(conversationId)
                if(cache) cache.hasMore = false
                return
            }
            if(newMessages.length < LIMIT){
                setHasMore(false)
                hasMoreRef.current = false
            }

            const nextCursor = newMessages[newMessages.length - 1].id
            cursorRef.current = nextCursor

            const reversed = [...newMessages].reverse()
            setMessages(prev => {
                const merged = cursor
                    ? [...reversed, ...prev]
                    : reversed

                cacheRef.current.set(conversationId, {
                    messages: merged,
                    cursorId: nextCursor,
                    hasMore: true,
                    scrollIndex: merged.length - 1
                })
                return merged
            })
            setFirstItemIndex(prev => prev - newMessages.length)

        } catch (error) {
            console.error("Error loading messages:", error)
        } finally {
            setLoading(false)
            loadingRef.current = false
            setLoadingMore(false)
        }

    }
   

    // Загружает сообщения при смене диалога, восстанавливает позицию прокрутки из кэша
    useEffect(() => {
        if (!conversationId) return

        const cached = cacheRef.current.get(conversationId)
        if(cached) {

            setMessages(cached.messages)
            setHasMore(cached.hasMore)
            cursorRef.current = cached.cursorId

            requestAnimationFrame(() => {
                virtuosoRef.current?.scrollToIndex({
                    index: cached.scrollIndex,
                    align: "start",
                    behavior: "auto"
                })
            })

            return
        }

        cursorRef.current = null
        setMessages([])
        setHasMore(true)
        hasMoreRef.current = true
        setInitialTopMostItemIndex(undefined)

        loadMessages(null)

    }, [conversationId])


    


    // Подписывается на новые сообщения через Realtime, обновляет список и автоскролл
    useEffect(() => {
        if (!conversationId) return
        

        if (channelRef.current) {
            // console.log("Removing existing channel...")
            supabase.removeChannel(channelRef.current)
            channelRef.current = null
        }
        // console.log("📡 Setting up realtime for conversation:", conversationId)

        channelRef.current = supabase
                .channel(`messages-${conversationId}`)
                .on(
                    "postgres_changes",
                    {
                        event: "INSERT",
                        schema: "public",
                        table: "messages",
                        filter: `conversation_id=eq.${conversationId}`
                    },
                    payload => {
                        console.log("📩 New message received:", payload)
                        loadMessages(null)
                    }
                )
                .on("system", {}, payload => {
                    // console.log("⚙️ Realtime system event:", payload)
                })
                .subscribe((status, err) => {
                    // console.log("🔌 Realtime subscription status:", status, err || "")

                    if (status === "CHANNEL_ERROR") console.error("⚠️ Realtime channel error:", err)
                    if(status === "TIMED_OUT") console.error("⚠️ channel timed out:", err)
                    if (status === "CLOSED") console.log('channel closed')
                })

        return () => {

            if (channelRef.current){
                supabase.removeChannel(channelRef.current)
                channelRef.current = null
            }
        }
    }, [conversationId])

    

    // достигаем верха, добавляем сообщенияы
    const startReached = useCallback(() => {
        if(hasMoreRef.current && !loadingRef.current) {
            loadMessages(cursorRef.current)
        }
    },[loadMessages])
    

    // при скроле берем индекс
    const rangeChanged = (range: {startIndex: number, endIndex: number}) => {
        currentScrollIndex.current = range
        // console.log('start', range.startIndex, 'end', range.endIndex )
    }

   // при смене диалога записываем индекс
    useEffect(() => {
        return () => {
            if(!conversationId) return
            if(!virtuosoRef.current) return

            const cache = cacheRef.current.get(conversationId!)
            if(cache){
                cache.scrollIndex = currentScrollIndex.current.startIndex
            }

            
        }
    },[conversationId])

    

    // useEffect(() => {
    //     console.log("Messages updated:", messages.length, "Has more:", hasMore)
    // }, [messages, hasMore])

    return {
        messages,
        setMessages,
        loading,
        loadingMore,
        hasMore,
        refreshMessages: loadMessages,
        virtuosoRef,
        startReached,
        rangeChanged,
        initialTopMostItemIndex,
        firstItemIndex,
        currentScrollIndex
    }
}
