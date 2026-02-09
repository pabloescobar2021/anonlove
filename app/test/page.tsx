"use client"

import { useRef, useState } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  r: number
  g: number
  b: number
}

export default function Test() {
  const messageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hidden, setHidden] = useState(false)
  const PIXEL_SIZE = 2
  const shatter = () => {
    const el = messageRef.current
    const canvas = canvasRef.current
    if (!el || !canvas) return

    const rect = el.getBoundingClientRect()
    const ctx = canvas.getContext("2d", { willReadFrequently: true })!
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const offsetX = rect.left
    const offsetY = rect.top

    // 1️⃣ рисуем сообщение вручную
    ctx.fillStyle = "#1f2937"
    ctx.fillRect(offsetX, offsetY, rect.width, rect.height)

    ctx.font = "16px system-ui"
    ctx.fillStyle = "#fff"
    ctx.textBaseline = "top"
    ctx.fillText(el.innerText,offsetX + 16, offsetY + 12)

    // 2️⃣ получаем bitmap
    const image = ctx.getImageData(offsetX, offsetY, canvas.width, canvas.height)
    const data = image.data

    const particles: Particle[] = []

    // 3️⃣ превращаем пиксели в частицы
    for (let y = 0; y < canvas.height; y += PIXEL_SIZE) {
      for (let x = 0; x < canvas.width; x += PIXEL_SIZE) {
        const i = (y * canvas.width + x) * 4
        const a = data[i + 3]

        if (a > 50 ) {
          particles.push({
            x: offsetX + x,
            y: offsetY + y,
            vx: (Math.random() - 0.5) * 0.6,
            vy: Math.random() - 1.5,
            alpha: 1,
            r: data[i], 
            g: data[i + 1],
            b: data[i + 2],
          })
        }
      }
    }


    setHidden(true)
    animate(ctx, canvas, particles)
  }

  const animate = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    particles: Particle[]
  ) => {
    const gravity = 0.04

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.vy += gravity
        p.x += p.vx
        p.y += p.vy
        p.alpha -= 0.015

        if (p.alpha > 0) {
          ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.alpha})`
          ctx.fillRect(p.x, p.y, PIXEL_SIZE, PIXEL_SIZE)
        }
      })

      if (particles.some(p => p.alpha > 0)) {
        requestAnimationFrame(frame)
      }
    }

    requestAnimationFrame(frame)
  }

  return (
    <div className="p-20 bg-black min-h-screen text-white overflow-visible relative">
      {!hidden && (
        <div
          ref={messageRef}
          onClick={shatter}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           bg-red-500 px-4 py-3 rounded-xl cursor-pointer select-none
            w-50 h-50
          "
        >
          ДОБРО
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 pointer-events-none overflow-visible"
        style={{ width: '100vw', height: '100vh' }}
      />
    </div>
  )
}
