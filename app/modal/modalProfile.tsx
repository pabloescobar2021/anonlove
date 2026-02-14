import { useEffect, useState } from "react"
import { Dialog } from "../things/types/type";
import { useSetAnon } from "../things/hooks/useSetAnon";

type ModalProfileProps = {
  dialog: Dialog | null
  onClose: () => void
  fromUser: string
  refresh: () => void
}

export function ModalProfile({
  dialog,
  onClose,
  fromUser, 
  refresh
}: ModalProfileProps) {
    const [isAnon, setIsAnon] = useState(false);
    const [anonUsedOnce, setAnonUsedOnce] = useState(false);

    const {setAnon, checkAnon, loading, error} = useSetAnon()


    useEffect(() => {
        if(!fromUser || !dialog) return

        const load = async () => {
            const data = await checkAnon(fromUser, dialog.other_user_id)
            if(!data) return

            setIsAnon(data.isAnon)
            setAnonUsedOnce(data.anonUsedOnce)
        }

        load()

    }, [dialog,fromUser]);


  if (!dialog) return null


  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        animate-fadeIn
      "
      onClick={onClose}
    >
      <div
        className="
          w-full max-w-md
          rounded-2xl
          bg-[#12080b]
          border border-white/10
          shadow-2xl
          p-6
          animate-scaleIn
          text-white
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-lg font-bold">
              {dialog.other_display_id.charAt(1).toUpperCase()}
            </div>

            <div>
              <div className="font-semibold">{dialog.other_display_id}</div>
              <div className="text-xs text-white/50">Профиль пользователя</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <form
          className="flex flex-col gap-5"
          onSubmit={async (e) => {
            e.preventDefault()
            try {
                await setAnon({
                    from_user_id: fromUser,
                    to_user_id: dialog.other_user_id,
                    is_anon: isAnon
                })

                refresh()
                onClose()
            } catch {}
          }}
        >
            {!loading 
            ?(
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                    type="checkbox"
                    className="
                        mt-1
                        w-4 h-4
                        accent-red-500
                    "
                    checked={isAnon}
                    disabled={loading || anonUsedOnce && !isAnon}
                    onChange={(e) => setIsAnon(e.target.checked)}
                    />
                    {anonUsedOnce && !isAnon 
                    ?(
                        <span className="text-sm text-white/80">
                            Анонимность для этого пользователя отключена
                            <div className="text-xs text-white/40">
                                Применяется только один раз
                            </div>
                        </span>
                    )
                    : (
                        <span className="text-sm text-white/80">
                            Анонимность для пользователя
                            <div className="text-xs text-white/40">
                                Применяется только один раз
                            </div>
                        </span>
                    )}

                </label>
            )
            :(
                <span className="text-sm text-white/80">
                    Загрузка...
                </span>
            )
            }

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="
                px-4 py-2 rounded-lg
                bg-white/5 hover:bg-white/10
                text-sm transition
              "
            >
              Отмена
            </button>

            <button
              type="submit"
              className="
                px-4 py-2 rounded-lg
                bg-red-500 hover:bg-red-600
                text-sm font-medium
                transition
              "
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
