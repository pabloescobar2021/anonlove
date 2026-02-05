"use client"

import { useState, useRef } from "react"
import { Item } from "../../things/types/type"
import { createText, insertGif } from "../btnFunction"
import { useklipySearch } from "../../things/hooks/useklipy"
import { useClickOutside } from "../../things/hooks/useClickOutside"
import { useCheckMobile } from "../../things/hooks/checkMobile"

type BtnProps = {
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

export function CreateBtns({
    setItems
}: BtnProps) {
    const ref = useRef<HTMLDivElement>(null!)
    useClickOutside(ref, () => {setOpen(false); setQuery('')})
    const isMobil = useCheckMobile()

    const [query, setQuery] = useState('')
    const [isOpen, setOpen] = useState(false)
    const [gifPerPage, setGifPerPage] = useState(24)
    const {resultsGif, loadingGif} = useklipySearch(query, 'pF3P65Wzij6l78j3fDut9DS0h2Ek0UxktVVcLmTCUmdcvsbECRLYJHzZxDaBO1WH', gifPerPage)

    const inputRef = useRef<HTMLInputElement>(null)

    const addText = () => {
        setItems(prev => [...prev, createText(prev.length)])
    }
    
    const addGif = (src: string) => {
        setItems(prev => [...prev, insertGif(prev.length, src)])
        setQuery('')
        setOpen(false)
    }

    const handleGifButtonClick = () => {
        if (!isOpen) {
            setOpen(true)
            setTimeout(() => inputRef.current?.focus(), 100)
        } else if (query) {
            addGif(query)
            setQuery("")
            setOpen(false)
        } else {
            setOpen(false)
        }
    }

    const isMobilWH = `${isMobil ? 'w-10 h-10' : 'w-12 h-12'}`

    return(
        <div
            ref={ref} 
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
                ${isOpen ? 'w-auto' : 'w-auto'}
            `}
        >
            {/* Поле гифок */}
            <div 
                className={`absolute inset-x-0 bottom-full mb-3 overflow-hidden transition-all duration-300
                    ${resultsGif.length > 0 && isOpen ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-2 shadow-2xl">
                    <div className="flex w-full h-20 overflow-x-auto gap-2 pb-2 no-scrollbar">
                        {resultsGif.map(url => (
                            <img
                                key={url}
                                src={url}
                                className=" object-contain rounded-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-200 flex-shrink-0 border border-white/10"
                                onClick={() => addGif(url)}
                                alt="GIF"
                            />
                        ))}
                        {resultsGif.length !== 0 && (
                            <button 
                                className="flex items-center justify-center px-4 flex-shrink-0 hover:bg-white/10 rounded-lg transition-all duration-200"
                                onClick={() => setGifPerPage(prev => prev + 24)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="text-white/70">
                                    <path fill="currentColor" d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"/>
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>


            {/* Основная панель */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2
                    flex items-center bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-2xl 
                    rounded-full border border-white/20 shadow-2xl p-2 gap-2
                    transition-opacity duration-150
                    ${isOpen ? 'opacity-0' : 'opacity-100'}
                    `}
            >
                
                {/* Кнопка текста */}
                <button
                    className={`relative flex items-center justify-center 
                         rounded-full bg-gradient-to-br 
                         from-white/20 to-white/10 border border-white/30 hover:from-white/30 hover:to-white/20 hover:scale-110 active:scale-95 
                        transition-all duration-150 shadow-lg group 
                        ${isMobilWH}
                    `}
                    onClick={addText}
                    disabled={isOpen}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M4 7V4h16v3M9 20h6M12 4v16"/>
                    </svg>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Добавить текст
                    </div>
                </button>


                {/* Кнопка GIF */}
                <button
                    className={`relative flex items-center justify-center rounded-full transition-all duration-300 shadow-lg group
                        bg-gradient-to-br from-white/20 to-white/10 border border-white/30 hover:from-white/30 hover:to-white/20
                        hover:scale-110 active:scale-95
                        ${isMobilWH}
                    `}
                    onClick={handleGifButtonClick}
                >
                    
                    <div className={`${isOpen ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                            <line x1="7" y1="2" x2="7" y2="22"/>
                            <line x1="17" y1="2" x2="17" y2="22"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                            <line x1="2" y1="7" x2="7" y2="7"/>
                            <line x1="2" y1="17" x2="7" y2="17"/>
                            <line x1="17" y1="17" x2="22" y2="17"/>
                            <line x1="17" y1="7" x2="22" y2="7"/>
                        </svg>
                    </div>

                    <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg transition-opacity whitespace-nowrap pointer-events-none
                        ${isOpen ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}
                    `}>
                        Добавить GIF
                    </div>

                </button>

            </div>


            
            {/* Поле ввода */}
            <div className={`${isOpen ? 'flex' : 'hidden'}`}>
                <input
                    ref={inputRef}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Найти GIF..."
                    className={`p-2 bg-white/10 border 
                        border-white/20 rounded-full text-white placeholder-white/50 outline-none focus:border-white/40 focus:bg-white/15 
                        transition-all duration-300 
                        ${isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 pointer-events-none'}
                    `}
                    onKeyDown={(e) => {
                        if(query && e.key === 'Enter') {
                            addGif(query)
                            setQuery("")
                            setOpen(false)
                        }
                        if(e.key === 'Escape') {
                            setOpen(false)
                            setQuery('')
                        }
                    }}
                    />

                <button
                    className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 
                                bg-gradient-to-br from-white/20 to-white/10 hover:bg-white/20 border border-white/20 "
                    onClick={() => {
                        setOpen(false)
                        setQuery('')
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}