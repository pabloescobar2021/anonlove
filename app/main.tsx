"use client"

// export const dynamic = "force-dynamic";
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, use } from "react"
import { useRouter } from "next/navigation";
import { useAuth } from "./things/hooks/useAuth";
import { useMessages, Dialog } from "./things/hooks/useMessages";
import { sighOut } from "./things/utils/auth";
import { useSwipe } from "./things/hooks/useSwipe";
import { useCheckMobile } from "./things/hooks/checkMobile";
import { ManagerChat } from "./anonMain/chat/Chat";
import { ProfilePanel } from "./anonMain/ProfileMenu/ProfileMenu";
import { useGetDialogs } from './things/hooks/dialog_messages/useGetDialogs';
import { supabase } from '@/utils/supabase/alSupabase';



export default function MainPage() {
    const router = useRouter();
    const pathname = usePathname()

    const {user, profile, loading: authLoading, refreshProfile} = useAuth();
    
    const {inbox, sent, sendMessage: send, loading: messageLoading, refresh, deleteMessage} = useMessages(user?.id || null);

    const {dialogs: dialog, loading, refresh: refreshDialog } = useGetDialogs(user?.id || null)

    const isMobile = useCheckMobile()
    
    const [openChat, setOpenChat] = useState(false);
    const [openProfile, setOpenProfile] = useState(false); // profile слева

    const globalChannelRef = useRef<any>(null)


    const styleToNotSwipe: React.CSSProperties = {
        overscrollBehavior: 'contain',
        touchAction: 'pan-y'
    }


    const startTelegramLink = async () => {
        const res = await fetch("/api/telegram/start", {
            method: "POST",
            headers: {
                "x-user-id": user?.id
            }
        })
        const {url} = await res.json()
        window.location.href = url
    }
    


    // свайп для мобилки
    const chatSwipe = useSwipe({
        onSwipeRight: () => {
            if (!isMobile) return;
            setOpenChat(false)
        }
    })
    // swipe close profile mobile
    const profileSwipe = useSwipe({
        onSwipeLeft: () => {
            if (!isMobile) return;
            setOpenProfile(false)
        },
        onSwipeRight: () => {
            if (!isMobile) return;
            setOpenProfile(true)
        }
    })


    // редирект если неавторизован
    // useEffect(() => {
    //     if (authLoading) return;
    //     if (pathname === '/auth/callback') return; // не редиректим пока обрабатывается

    //     if(!user){
    //         router.replace('/auth')
    //     }
    // }, [user, authLoading, router, pathname])

    

    useEffect(() => {
        if(!isMobile){
            setOpenChat(false)
        }
    }, [isMobile])

    
    // global realtime
    useEffect(() => {
        if(!user) return 

        if(globalChannelRef.current) {
            supabase.removeChannel(globalChannelRef.current)
            globalChannelRef.current = null
        }
        globalChannelRef.current = supabase
            .channel(`user-${user.id}-messages`)
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "messages",
                    filter: `to_user=eq.${user.id}`
                },
                payload => {
                    const msg = payload.new as any
                    console.log("New message received via realtime:", msg)
                    refreshDialog()
                }
            )
            .subscribe((status, err) => {
                // console.log("🔌 Статус подписки:", status, err || "")
                // if (status === "CHANNEL_ERROR") console.error("⚠️ Ошибка канала:", err)
            })

            return () => {
                if (globalChannelRef.current) {
                    supabase.removeChannel(globalChannelRef.current)
                    globalChannelRef.current = null
                }
            }
    },[user])

    
    const handleSignOut = async () => {
        await sighOut()
        router.push('/auth')
    }




    const [loadingText, setLoadingText] = useState("")
    const indexRef = useRef(0)
    const intervalRef = useRef<number | null>(null)
    useEffect(() => {
        if (!authLoading){
            if (intervalRef.current){
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            return
        }
        
        const word = 'loading'
        indexRef.current = 0
        setLoadingText('')

        intervalRef.current = window.setInterval(() => {
            setLoadingText(prev => {
                if (indexRef.current >= word.length) {
                    indexRef.current = 0
                    return ""
                }
                const next = prev + word[indexRef.current]
                indexRef.current +=1
                return next
            })
        },100)

        return () => {
            if (intervalRef.current){
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [authLoading])
    
    
    if (authLoading) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center text-white ">
                <div className="animate-pulse">ЗагруОчка...</div>
            </div>
        );
    }


    return (
        <div 
            className="relative bg-black flex flex-col overflow-hidden "
            style={{ minHeight: '100dvh', maxHeight: '100dvh' }}
            >
            <ManagerChat 
                userId={user?.id}
                dialog={dialog}
                setOpenProfile={setOpenProfile}
                setOpenChat={setOpenChat}
                openChat={openChat}
                isMobile={isMobile}
                deleteMessage={deleteMessage}
                refresh={refreshDialog}
            />


            {/* profile left side */}
            
            <ProfilePanel 
                open={openProfile}
                isMobile={isMobile}
                swipeProps={profileSwipe}
                profile={profile}
                user={user}
                onClose={() => setOpenProfile(false)}
                onSignOut={handleSignOut}
                onTelegramLink={startTelegramLink}
                refreshProfile={refreshProfile}
            />

            
            
        </div>
        
    )

}



