"use client"

import { useRef } from "react"
import * as htmlToImage from "html-to-image"

export type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  r: number
  g: number
  b: number
}

type ParticleSystem = {
  particles: Particle[]
}

type Options = {
  pixelSize?: number
  gravity?: number
  fade?: number
}

export function useShatterMessage(options?: Options) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const systemsRef = useRef<ParticleSystem[]>([])
  const animatingRef = useRef(false)

  const PIXEL_SIZE = options?.pixelSize ?? 2
  const GRAVITY = options?.gravity ?? 0.03
  const FADE = options?.fade ?? 0.035

  const shatterMessages = async (
    elements: HTMLDivElement[],
    onAllDone: () => void
  ) => {
    if (!canvasRef.current || elements.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d", { willReadFrequently: true })!

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    for (const el of elements) {
      const rect = el.getBoundingClientRect()

      const renderCanvas = await htmlToImage.toCanvas(el, {
        width: rect.width,
        height: rect.height,
        style: { transform: "none" },
      })

      const rctx = renderCanvas.getContext("2d")!
      const { data } = rctx.getImageData(
        0,
        0,
        renderCanvas.width,
        renderCanvas.height
      )

      const particles: Particle[] = []

      for (let y = 0; y < renderCanvas.height; y += PIXEL_SIZE) {
        for (let x = 0; x < renderCanvas.width; x += PIXEL_SIZE) {
          const i = (y * renderCanvas.width + x) * 4
          const a = data[i + 3]

          if (a > 50) {
            particles.push({
              x: rect.left + (x / renderCanvas.width) * rect.width,
              y: rect.top + (y / renderCanvas.height) * rect.height,
              vx: (Math.random() ) * 1.7,
              vy: (Math.random() -0.5) * -0.8,
              alpha: 1,
              r: data[i],
              g: data[i + 1],
              b: data[i + 2],
            })
          }
        }
      }

      el.style.visibility = "hidden"
      systemsRef.current.push({ particles })
    }

    if (!animatingRef.current) {
      animatingRef.current = true
      requestAnimationFrame(() =>
        animate(ctx, canvas, onAllDone)
      )
    }
  }

  const animate = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    onAllDone: () => void
  ) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    systemsRef.current = systemsRef.current.filter(system => {
      system.particles.forEach(p => {
        p.vy += GRAVITY
        p.x += p.vx
        p.y += p.vy
        p.alpha -= FADE

        if (p.alpha > 0) {
          ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.alpha})`
          ctx.fillRect(p.x, p.y, PIXEL_SIZE, PIXEL_SIZE)
        }
      })

      system.particles = system.particles.filter(p => p.alpha > 0)
      return system.particles.length > 0
    })

    if (systemsRef.current.length > 0) {
      requestAnimationFrame(() =>
        animate(ctx, canvas, onAllDone)
      )
    } else {
      animatingRef.current = false
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      onAllDone()
    }
  }

  return {
    canvasRef,
    shatterMessages,
  }
}
