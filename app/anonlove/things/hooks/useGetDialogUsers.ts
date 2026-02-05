import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/alSupabase";

type DialogUserRow = {
    to_display_id: string;
};

export const useGetDialogUsers = (id: string | null) => {
    const [dialogs, setDialogs] = useState<DialogUserRow[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!id) {
            setDialogs([]);
            setError(null);
            return;
        }

        let cancelled = false;
        setLoading(true);
        setError(null);

        (async () => {
            const { data, error: queryError } = await supabase
                .from("messages_safe")
                .select("to_display_id")
                .eq("from_user", id);

            if (cancelled) return;

            if (queryError) {
                console.error("Error fetching dialogs:", queryError);
                setError(queryError);
                setDialogs([]);
                setLoading(false);
                return;
            }

            setDialogs(data ?? []);
            setLoading(false);
        })();

        return () => {
            cancelled = true;
        };
    }, [id]);


    return { dialogs, loading, error };
};
