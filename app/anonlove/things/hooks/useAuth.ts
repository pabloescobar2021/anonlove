"use client"

import { useState, useEffect } from "react"
import { getCurrentUser, getUserProfile, onAuthStateChange } from "../utils/auth"

export function useAuth() {
    const [user, setUser] = useState<any>(null)
    const [profile, setProfile] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadUser = async () => {
            try {
                const userData = await getCurrentUser()
                setUser(userData)

                if(userData) {
                    const profileData = await getUserProfile(userData.id)
                    setProfile(profileData)
                }
            } catch (error) {
                console.error("Error loading user:", error)
            } finally {
                setLoading(false)
            }
        }
        loadUser()

        const subscription = onAuthStateChange(async (newUser) => {
            setUser(newUser)
            if (newUser) {
                const profileData = await getUserProfile(newUser.id)
                setProfile(profileData)
            } else {
                setProfile(null)
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    },[])

    return {user,profile,loading}
}