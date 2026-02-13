import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/alSupabase";

type Props = {
    public_id: string
}

export function useAccountChange(p?: Props) {

    const changePassword = async (pass: string) => {
        const {data, error} = await supabase.auth.updateUser({
            password: pass
        })
        if(error) console.error(error)
        return data
    }

    const changeLogin = async (newLogin: string) => {
        try{
            const { data: { user } } = await supabase.auth.getUser();
            if(!user) throw new Error("User not found")

            const {data: existingUser} = await supabase
                .from("users")
                .select('id_user')
                .eq("username", newLogin)
                .maybeSingle()
            if(existingUser) {
                return {succes: false, message: "Пользователь с таким логином уже существует"}
            }
            
            const {error} = await supabase
                .from("users")
                .update({username: newLogin})
                .eq("id_user", user?.id)

            
            if(error) throw error
            return {succes: true}
        }catch(err){
            console.error(err)
            return {succes: false, message: err}
        }
    }

    return{
        changePassword, changeLogin
    }
}