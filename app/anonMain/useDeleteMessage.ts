type Props = {
    choosenMsg: any
    setChoosenMsg: (v: any[]) => void
    setAction: (v: any) => void
    setIsChoose: (v: boolean) => void
    deleteMessage: (ids: string[]) => Promise<void>
    refresh: () => Promise<void>
}
export function useDeleteMessage(props: Props) {
    const { setChoosenMsg, setAction, setIsChoose, choosenMsg, deleteMessage, refresh } = props

    const handleDeleteMessage = async (ids: string[]) => {
        try {
            if (!ids) {
                console.warn("No message ID provided")
                return
            }
            await deleteMessage(ids)
            await refresh()
            setAction(null)
        } catch (error) {
            console.error("Error deleting message:", error)
        }
    }

    

    return{handleDeleteMessage, }
}

