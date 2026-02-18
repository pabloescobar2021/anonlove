import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import { useClickOutside } from "../../things/hooks/useClickOutside"
import { useAccountChange } from "../../things/hooks/useAccountChange"
import { Notify } from "../../things/components/Notify"
import { PersonalMenu } from "./menus/PersonalMenu"
import { AnonLoveGuide } from "../chat/HelperMsg"
type ProfilePanelProps = {
  open: boolean
  isMobile?: boolean
  swipeProps?: React.HTMLAttributes<HTMLDivElement>
  profile: {
    public_id: string
    telegram_username?: string | null
    username: string
  } | null
  user?: unknown
  onClose: () => void
  onSignOut: () => void
  onTelegramLink: () => void
  refreshProfile: () => void
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
  refreshProfile
}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const prevMenuRef = useRef<string | null>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null!)
  const loginInputRef = useRef<HTMLInputElement>(null!)
  const divPassRef = useRef<HTMLDivElement>(null!)

  const [nameMenuOpen, setNameMenuOpen] = useState<string | null>(null)
  const [password, setPassword] = useState<string>("")
  const [isChangePassword, setIsChangePassword] = useState(false)
  const [login, setLogin] = useState<string>("")
  const [isChangeLogin, setIsChangeLogin] = useState(false)
  const [succesMessage, setSuccesMessage] = useState<string | null>(null)
  const [startedChange, setStartedChange] = useState(false)

  const { changePassword, changeLogin } = useAccountChange()

  useClickOutside(divPassRef, () => {
    setIsChangePassword(false)
  })
  useClickOutside(divPassRef, () => {
    onClose()
  })

  useEffect(() => {
    if(profile){
      setLogin(profile.username)
    }
  },[profile])

  const toggleChange = (name: string) => {
    setStartedChange(true)
    if(name === "login") setIsChangeLogin((prev) => !prev)
    else setIsChangePassword((prev) => !prev)
  }
  useEffect(() => {
    if(isChangePassword){
      passwordInputRef.current?.focus()
      passwordInputRef.current?.select()
    }
    if(isChangeLogin){
      loginInputRef.current?.focus()
      loginInputRef.current?.select()
    }
    
  },[isChangePassword, isChangeLogin])

  const submit = async() => {
    setSuccesMessage(null)
    if(isChangePassword) {
      await changePassword(password)
    }
    if(isChangeLogin) {
      const res = await changeLogin(login)
      if(res.succes){
        refreshProfile()
        setSuccesMessage("Логин успешно изменен" )
      }else{
        setSuccesMessage("Пользователь с таким логином уже существует")
      }
    }
    setIsChangePassword(false)
    setIsChangeLogin(false)
    setStartedChange(false)
  }
  

  const personalState = {
    startedChange,
    isChangeLogin,
    login,
    password,
    isChangePassword,
    loginInputRef,
    passwordInputRef
  }
  const personalActions = {
    setLogin,
    setPassword,
    setIsChangeLogin,
    setIsChangePassword,
    setStartedChange,
    toggleChange,
    submit,
    setNameMenuOpen
  }

  const btns_main = [
    {t: "Личные данные", value: "personal"},
    {t: "Настройки", value: "settings"},
    {t: "Помощь", value: "help"},
  ]

  return (
    <div
      {...(isMobile ? swipeProps : {})}
      ref={divPassRef}
      className={`
        absolute flex flex-col overflow-y-auto
        bg-black/40 backdrop-blur-xl
        transition-transform duration-200 ease-out
        will-change-transform
        ${open ? "translate-x-0" : "-translate-x-full"}
        ${isMobile ? "inset-0" : "w-96 h-full rounded-r-2xl"}
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

      {/* start CONTENT */}
      {!nameMenuOpen && (
        <div className={`flex flex-col gap-3 p-4 flex-1 animate-[menuIn_100ms_ease-out_forwards]`}>

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

          <div className="flex flex-col items-start gap-2 w-full">
            {btns_main.map((item, i) => (
              <button 
                key={i} 
                className={`border border-white/10 rounded-full px-1 py-1 w-full hover:bg-white/10 transition-colors`}
                onClick={() => {
                  setNameMenuOpen(item.value)
                }}
              >
                {item.t}
              </button>
            ))}
          </div>

        </div>
      )}

      {/* personal menu */}
      {nameMenuOpen === "personal" && (
        <PersonalMenu
          state={personalState}
          actions={personalActions}
        />
      )}

      {/* help */}
      {nameMenuOpen === "help" && (
        <AnonLoveGuide onClose={() => setNameMenuOpen(null)} />
      )}
          

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
          absolute top-5 right-2 -translate-y-1/2
          px-3 py-2
          bg-white/10 hover:bg-white/20
          backdrop-blur-xl
          rounded-full
          transition
        "
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 30L30 2m0 28L2 2"/></svg>      
      </button>


      


      <Notify message={succesMessage} />
    </div>
  )
}
