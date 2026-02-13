import { useState } from "react";
import "./chat.css"

type Props = {
    setActiveDialogId: (id: string) => void
}

export function HelperMsg(){

    const [open, setOpen] = useState(false);

    const idHelper = "helper"
    const avatar = idHelper.charAt(1).toUpperCase();
    const title = "Бот помощник";


    return (
    <>
        <button
            key={idHelper}
            className="p-2 rounded-lg w-full "
            onClick={() => {
                setOpen(true);
            }}
        >
            <div
                className={`flex flex-col p-3 items-start relative gap-2 rounded-2xl transition-colors 
                    border border-white/5
                    bg-linear-to-r from-[#2d0715] via-[#1a040c] to-[#12080b]
                `}
            >
                <div className="flexC gap-2">
                    {/* AVATAR */}
                    <div
                        className={`flex w-8 h-8 items-center justify-center rounded-full text-lg font-bold transition-all
                            bg-linear-to-b from-[#502020] to-[#2d0715] backdrop-blur-md
                            hover:from-[#b90e0e] hover:to-[#502020] hover:border hover:border-white/40
                        `}
                        onClick={(e) => {
                            e.stopPropagation();
                            // setOpenModalProfile(dialog);
                        }}
                    >
                        <span>
                            {avatar}
                        </span>
                    </div>

                    {/* NAME */}
                    <span className="font-semibold">{title}</span>
                </div>

                <p className="text-sm text-white/50">
                    Нажми на меня
                </p>

                {/* TIME */}
                {/* <p className="absolute right-2 top-3 flexC text-center text-gray-400 text-[10px]">
                    {timeSend}
                </p> */}

                {/* UNREAD */}
                {/* {unread > 0 && (
                    <p 
                        className="absolute right-2 bottom-1 flexC text-center 
                        unreadMsg
                    ">
                        {unread}
                    </p>
                )} */}
            </div>
        </button>
        
        {open && (
            // <div className="fixed inset-0 bg-black/50 rounded-xl backdrop-blur-xs">
            //     <div className="fixed inset-10 bg-black">

            //         <div className="absolute top-2 right-2 rounded-2xl border border-white/40 prettyBtnChat">X</div>

            //     </div>
            // </div>
            <AnonLoveGuide
                onClose={() => setOpen(false)}
            />

        )}
    </>
    )
}

export function AnonLoveGuide({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-fadeIn
        overflow-y-auto 
    ">

      {/* modal */}
      <div className="
        relative w-full max-w-lg 
        rounded-2xl
        border border-white/10
        bg-gradient-to-b from-[#14070c] via-[#0f0509] to-black
        shadow-2xl
        animate-scaleIn
      ">

        {/* close */}
        <button
          onClick={onClose}
          className="
            absolute right-3 top-3
            w-8 h-8
            flex items-center justify-center
            rounded-full
            border border-white/20
            text-white/70
            hover:text-white
            hover:border-white/40
            hover:bg-white/10
            transition-all
          "
        >
          ✕
        </button>

        {/* content */}
        <div className="md:p-6 p-1 space-y-6 mt-10 text-white">

          {/* title */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              💌 Добро пожаловать в AnonLove
            </h2>

            <p className="text-white/60 text-sm">
              место для анонимных чувств и неожиданных сообщений
            </p>
          </div>

          {/* sections */}
          <div className="space-y-4">

            {/* ID */}
            <div className="space-y-1">
              <p className="font-semibold text-white/90">
                🆔 Уникальный ID
              </p>
              <p className="text-white/60 text-sm">
                У каждого пользователя есть свой ID. Найди чей-то ID, чтобы написать ему. Это не всегда просто… и именно в этом интерес.
              </p>
            </div>

            {/* messages */}
            <div className="space-y-1">
              <p className="font-semibold text-white/90">
                ✍️ Необычные сообщения
              </p>
              <p className="text-white/60 text-sm">
                Используй текст и GIF, чтобы создать красивое сообщение. Добавь воображение и сделай его особенным.
              </p>
            </div>

            {/* anonymous */}
            <div className="space-y-1">
              <p className="font-semibold text-white/90">
                🎭 Анонимность — один шанс
              </p>
              <p className="text-white/60 text-sm">
                Ты можешь быть анонимным. Но если отключишь анонимность — включить её снова уже не получится.
              </p>
            </div>

            {/* rating */}
            <div className="space-y-1">
              <p className="font-semibold text-white/90">
                ⭐ Рейтинг
              </p>
              <p className="text-white/60 text-sm">
                Чем больше уникальных сообщений ты получаешь — тем выше твой рейтинг.
              </p>
            </div>

          </div>

          {/* footer */}
          <div className="
            text-center
            pt-4
            border-t border-white/10
          ">
            <p className="text-white/50 text-sm">
              возможно, кто-то уже ищет твой ID
            </p>
          </div>

        </div>

      </div>

      

    </div>
  )
}
