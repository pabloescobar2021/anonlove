export function ReadIndicator({
    isRead,
    isMine
}: {
    isRead: boolean
    isMine?: boolean
}) {

    return (
    <>
        {isMine && (
            <div className="flex items-center gap-1 text-xs">
                {isRead 
                ?(
                    <>
                    {/* Двойная галочка - прочитано */}
                        <svg 
                            className="w-4 h-4 text-blue-400" 
                            viewBox="0 0 24 24" 
                            fill="none"
                        >
                            <path 
                                d="M1 12l4 4L15 6M9 12l4 4L23 6" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    </>
                ):(
                    <>
                        {/* Одна галочка - доставлено */}
                        <svg 
                            className="w-4 h-4 text-gray-400" 
                            viewBox="0 0 24 24" 
                            fill="none"
                        >
                            <path 
                                d="M5 12l4 4L19 6" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="text-gray-400">доставлено</span>
                    </>
                )}
            </div>
        )}

        {!isMine && (
            
            <div className="flex items-center gap-1 text-md">
                {isRead 
                ?(
                    <>
                    {/*  прочитано */}
                        <div>
                            ●
                        </div>
                    </>
                ):(
                    <>
                        {/* не прочитано */}
                        <div>
                            ○
                        </div>
                    </>
                )}
            </div>
        )}
    </>
    )
}