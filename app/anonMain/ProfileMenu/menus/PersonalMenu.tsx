
type PersonalMenuProps = {
    state: {
        startedChange: boolean
        isChangeLogin: boolean
        loginInputRef: React.RefObject<HTMLInputElement>
        login: string 
        password: string
        isChangePassword: boolean
        passwordInputRef: React.RefObject<HTMLInputElement>
    }
    actions: {
        setLogin: (login: string) => void
        setNameMenuOpen: (name: string | null) => void
        setPassword: (password: string) => void
        setIsChangePassword: (isChangePassword: boolean) => void
        toggleChange: (name: string) => void
        setStartedChange: (startedChange: boolean) => void
        setIsChangeLogin: (isChangeLogin: boolean) => void
        submit: () => void
    }

}
export function PersonalMenu(p: PersonalMenuProps) {

    const btns = [
    {
        text: "Отмена",
        onClick: () => {
        p.actions.setIsChangePassword(false)
        p.actions.setIsChangeLogin(false)
        p.actions.setStartedChange(false)
        }
    },
    {
        text: "Применить",
        onClick: () => p.actions.submit()
    },
    ]

    return (
        <div className={`flex items-center justify-start flex-col gap-3 px-4 py-3 relative flex-1
            animate-[menuIn_100ms_ease-out_forwards]
        `}>
          <div className="flex">
            {/* back */}
            <button className=" btnWP p-1 px-3 flex justify-self-start place-items-start" onClick={() => p.actions.setNameMenuOpen(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m8 5l-5 5l5 5"/><path d="M3 10h8c5.523 0 10 4.477 10 10v1"/></g></svg> 
            </button> 

            <p className="text-md">Личная информация</p>
          </div>

          {/* LOGIN */}
          <div className="relative w-full mt-4">
            <span className="absolute left-4 -top-2 prettyLabelInput">Логин</span>
            <button 
              className={`absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white/80
              ${p.state.startedChange ? "hidden" : ""}`}
              disabled={p.state.startedChange}
              onClick={() => p.actions.toggleChange('login')} >
              Изменить
            </button>
            <input 
              type="text" value={p.state.login}  disabled={!p.state.isChangeLogin} ref={p.state.loginInputRef}
              onChange={(e) => {p.actions.setLogin(e.target.value)}}
              className="prettyInput pt-4 px-4"
            /> 
          </div>

          {/* PASSWORD  */}
          <div className="relative w-full mt-4" >
            <span className="absolute left-4 -top-2 prettyLabelInput">Пароль</span>
            <button 
              className={`absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white/80
              ${p.state.startedChange ? "hidden" : ""}`}
              disabled={p.state.startedChange}
              onClick={() => p.actions.toggleChange('password')} >
              Изменить
            </button>
            <input 
              type="text" value={p.state.password} disabled={!p.state.isChangePassword} ref={p.state.passwordInputRef}
              onChange={(e) => {p.actions.setPassword(e.target.value)}}
              className={`prettyInput pt-4 px-4 ${p.state.isChangePassword ? "":""}`} 
            /> 
          </div>

          <div className="flex w-full gap-2">
            {btns.map((btn, i) => (
              <button
                key={i}
                className={`
                  ${p.state.isChangeLogin || p.state.isChangePassword ? "opacity-100":"opacity-0"}
                  w-full p-3 rounded-2xl
                  bg-white/10 hover:bg-white/15
                  transition-all
                `}
                onClick={btn.onClick}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>
    )
}