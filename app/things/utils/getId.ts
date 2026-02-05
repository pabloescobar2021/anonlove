import { supabase } from "@/utils/supabase/alSupabase";

export async function getId(id: string) {

    if(!id || id.trim() === ""){
        throw new Error("Empty ID provided")
    }

    const {data: toUser, error: toUserError} = await supabase
                .from("users")
                .select("id_user")
                .eq("public_id", id.trim())
                .maybeSingle()
    if(toUserError){
        console.error("Error fetching user:", toUserError)
        throw toUserError
    }
    if(!toUser) {
        throw new Error("User not found")
    }

    return toUser.id_user
}