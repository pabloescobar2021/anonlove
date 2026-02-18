"use client"

import { useEffect, useState, useRef, useCallback, useLayoutEffect, use } from "react"
import { supabase } from "@/utils/supabase/alSupabase"
import { UiMessage } from "../../types/type"

type CacheEntry = {
    messages: UiMessage[]
    cursorId: string | null
    hasMore: boolean
    scrollTop: number
}
const LIMIT = 40

// Хук для загрузки и управления сообщениями в диалоге с кэшем и прокруткой
export function useGetMessages(conversationId: string | null) {

    const [messages, setMessages] = useState<UiMessage[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)
    const isInitialLoad = useRef(true)
    const cacheRef = useRef<Map<string, CacheEntry>>(new Map())
    const cursorRef = useRef<string | null>(null)
    const channelRef = useRef<any>(null)

    // Загружает сообщения с сервера, поддерживает пагинацию (курсор), кэширует результаты
    const loadMessages = async (cursor?: string | null) => {
        if (!conversationId || loading) return
        if(cursor && !hasMore) return

        setLoading(true)
        if(cursor) setLoadingMore(true)

        const container = containerRef.current
        const prevScrollHeight = container?.scrollHeight || 0
        const prevScrollTop = container?.scrollTop || 0

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
                const cache = cacheRef.current.get(conversationId)
                if(cache) cache.hasMore = false
                return
            }

            const nextCursor = newMessages[newMessages.length - 1].id
            cursorRef.current = nextCursor
            setHasMore(true)

            const reversed = [...newMessages].reverse()
            setMessages(prev => {
                const merged = cursor
                    ? [...reversed, ...prev]
                    : reversed

                requestAnimationFrame(() => {
                    if(container){
                        container.scrollTop = container.scrollHeight - prevScrollHeight 
                    }
                }); 

                cacheRef.current.set(conversationId, {
                    messages: merged,
                    cursorId: nextCursor,
                    hasMore: true,
                    scrollTop: 0
                })
                return merged
            })

            
            
            
        } catch (error) {
            console.error("Error loading messages:", error)
        } finally {
            setLoading(false)
            setLoadingMore(false)
        }

    }

    // При первой загрузке прокручивает контейнер в самый низ
    useLayoutEffect(() => {
        if (!isInitialLoad.current) return
        if (!messages.length) return

        const container = containerRef.current
        if (!container) return
        requestAnimationFrame(() => {
            container.scrollTop = container.scrollHeight
            isInitialLoad.current = false
        })
    }, [messages.length])




    // Обработчик прокрутки: загружает старые сообщения при скролле вверх, сохраняет позицию в кэш
    const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {

        const container = e.currentTarget

        if(conversationId){
            const cache = cacheRef.current.get(conversationId)
            if(cache){
                cache.scrollTop = container.scrollTop
            }
        }

        if (loadingMore && container.scrollTop < 5) {
            container.scrollTop = 5
            return
        }

        if (container.scrollTop < 20 && hasMore && !loading && !loadingMore) {
            console.log("Loading more messages...")
            loadMessages(cursorRef.current)
        }
    }, [hasMore, loading, conversationId, loadingMore])

    useEffect(() => {
        console.log(messages.length)
    }, [messages.length])

    // Сохраняет позицию прокрутки в кэш перед выходом из диалога
    useEffect(() => {
        return () => {
            if(!conversationId) return
            const container = containerRef.current
            if(!container) return
            
            const cache = cacheRef.current.get(conversationId)
            if(cache){
                cache.scrollTop = container.scrollTop
            }
        }
    },[conversationId])



    // Загружает сообщения при смене диалога, восстанавливает позицию прокрутки из кэша
    useEffect(() => {
        if (!conversationId) return

        const cached = cacheRef.current.get(conversationId)
        if(cached) {
            setMessages(cached.messages)
            setHasMore(cached.hasMore)
            cursorRef.current = cached.cursorId
            isInitialLoad.current = false

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    const container = containerRef.current
                    if(!container) return
                    container.scrollTop = cached.scrollTop ?? container.scrollHeight
                })
            })

            return
        }

        cursorRef.current = null
        setMessages([])
        setHasMore(true)
        isInitialLoad.current = true

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
                        loadMessages()

                        const container = containerRef.current
                        if (!container) return

                        const isAtBottom =
                            container.scrollHeight -
                            container.scrollTop -
                            container.clientHeight
                            < 200

                        if (isAtBottom) {
                            requestAnimationFrame(() =>
                                container.scrollTop = container.scrollHeight
                            )
                        }

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

    return {
        messages,
        setMessages,
        loading,
        loadingMore,
        hasMore,
        refreshMessages: loadMessages,
        containerRef,
        handleScroll
    }
}
