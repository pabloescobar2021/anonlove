type RatingProps = {
    value?: number
    className?: string
}

export function Rating({value, className}: RatingProps) {
    const rating = numberToRating(value)

    return (
        <div
            className={`flex items-center gap-1 text-sm select-none ${className ?? ''}`}
            title={rating.s}
        >
            <span>{rating.s}</span>
            {/* {value !== undefined && (
                <span className="text-gray-400 text-xs">
                    {value}
                </span>
            )} */}

        </div>
    )
}

export function numberToRating(rating?: number){
    if (!rating || rating === 0) {
        return {s: "😴"}
    }

    if (rating >= 5){
        return {s: "❤️️"}
    }

    if (rating >= 10){
        return {s: "🔥"}
    }

    if (rating >= 20){
        return {s: "💘"}
    }

    if (rating >= 50){
        return {s: "👑✮"}
    }
    
    if (rating >= 100){
        return {s: "👑"}
    }

   return {s: "🥰"}
}