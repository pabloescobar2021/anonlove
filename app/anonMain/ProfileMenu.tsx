import React from "react"

type ProfilePanelProps = {
  open: boolean
  isMobile?: boolean
  swipeProps?: React.HTMLAttributes<HTMLDivElement>
  profile: {
    public_id: string
    telegram_username?: string | null
  } | null
  user?: unknown
  onClose: () => void
  onSignOut: () => void
  onTelegramLink: () => void
}

export const ProfilePanel: React.FC<ProfilePanelProps> = ({
  open,
  isMobile = false,
  swipeProps,
  profile,
  user,
  onClose,
  onSignOut,
  onTelegramLink,
}) => {
  return (
    <div
      {...(isMobile ? swipeProps : {})}
      className={`
        absolute flex flex-col
        bg-black/40 backdrop-blur-xl
        transition-transform duration-200 ease-out
        will-change-transform
        ${open ? "translate-x-0" : "-translate-x-full"}
        ${isMobile ? "inset-0" : "w-96 h-full"}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {/* HEADER */}
      <div className="w-full px-4 pt-6 pb-4 flex flex-col gap-2 border-b border-white/10">

        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl font-semibold">
          {profile?.public_id?.[0] ?? "?"}
        </div>

        <div className="text-lg font-semibold">
          Профиль
        </div>

        <div className="text-xs text-white/50 select-text">
          ID: {profile?.public_id ?? "—"}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-3 p-4">

        {!profile?.telegram_username && user ? (
          <button
            onClick={onTelegramLink}
            className="
              flex items-center gap-3
              p-3 rounded-2xl
              bg-white/10 hover:bg-white/15
              transition-colors
              text-left
              active:scale-[0.98]
            "
          >
            <div className="w-10 h-10 rounded-full bg-[#229ED9]/20 flex items-center justify-center text-[#229ED9]">
              ✈️
            </div>

            <div className="flex flex-col flex-1">
              <span className="font-medium">
                Привязать Telegram
              </span>
              <span className="text-xs text-white/50">
                Для уведомлений и входа
              </span>
            </div>

            <span className="text-white/30">{`>`}</span>
          </button>
        ) : profile?.telegram_username ? (
          <div
            className="
              flex items-center gap-3
              p-3 rounded-2xl
              bg-white/10
            "
          >
            <div className="w-10 h-10 rounded-full bg-[#229ED9]/30 flex items-center justify-center text-[#229ED9]">
              ✓
            </div>

            <div className="flex flex-col">
              <span className="font-medium">
                @{profile.telegram_username}
              </span>
              <span className="text-xs text-white/50">
                Telegram привязан
              </span>
            </div>
          </div>
        ) : null}

      </div>

      {/* FOOTER */}
      <div className="mt-auto p-4 border-t border-white/10">
        <button
          onClick={onSignOut}
          className="
            w-full p-3 rounded-2xl
            text-red-400 hover:bg-red-500/10
            transition-colors
            active:scale-[0.98]
          "
        >
          Выйти
        </button>
      </div>

      {/* CLOSE HANDLE */}
      <button
        className="
          absolute top-1/2 right-0 -translate-y-1/2
          h-32 px-1
          bg-white/10 hover:bg-white/20
          backdrop-blur-xl
          rounded-l-2xl
          transition
        "
        onClick={onClose}
      >
        {`>`}
      </button>
    </div>
  )
}
