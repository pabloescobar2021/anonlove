import { useState, useEffect } from "react";

export function useklipySearch(query: string, apiKey: string, perPage = 24) {
    const [resultsGif, setResults] = useState<string[]>([]);
    const [loadingGif, setLoading] = useState(false);

    useEffect(() => {
        if(!query.trim()) {
            setResults([]);
            return
        }

        const controller = new AbortController()
        setLoading(true)

        const fetchGifs = async () => {
            try {
                const res = await fetch(
                    `https://api.klipy.com/api/v1/${apiKey}/gifs/search?q=${encodeURIComponent(query)}&per_page=${perPage}&locale=ru`,
                    {
                        headers: {
                            "X-KLIPY-API-KEY": apiKey
                        },
                        signal: controller.signal
                    }
                )
                const json = await res.json()
                const urls = (json.data?.data || []).map((item: any) => {
                    return item.file?.xs.gif.url
                }).filter(Boolean);
                
                // console.log(urls)
                setResults(urls)
            } catch (err){
                if ((err as any).name !== "AbortError") {
                    console.error(err)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchGifs()

        return () => {
            controller.abort()
        }
    },[query, apiKey, perPage])

    return {resultsGif, loadingGif}
}