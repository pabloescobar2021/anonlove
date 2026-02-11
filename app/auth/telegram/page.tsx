"use client"

import Script from "next/script"

export default function TelegramAuth() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Script
        src="https://telegram.org/js/telegram-widget.js?22"
        strategy="afterInteractive"
        data-telegram-login="AnonLove_userBot"
        data-size="large"
        data-userpic="false"
        data-auth-url="https://yourdomain.com/api/auth/telegram"
        data-request-access="write"
      />
    </div>
  )
}
