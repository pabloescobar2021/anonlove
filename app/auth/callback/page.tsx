'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabase/client'

export default function AuthCallback() {
    const router = useRouter()

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                router.replace('/')
            }
        })
    }, [router])

    return <div>Входим...</div>
}