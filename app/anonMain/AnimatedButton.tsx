import { useEffect, useRef } from "react";

export function AnimatedButton({ 
    children,
    openModal 
}: {
    children: React.ReactNode,
    openModal: () => void

}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const animationRef = useRef<number>(0);
    const isHovering = useRef(false);

    const sizeRef = useRef({w:0,h:0})

    useEffect(() => {
        const canvas = canvasRef.current
        const button = buttonRef.current
        if(!canvas || !button) return;

        const ctx = canvas.getContext("2d");
        if(!ctx) return;

        const updateSize = () => {
            const rect = canvas.parentElement!.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;

            sizeRef.current.w = rect.width;
            sizeRef.current.h = rect.height;

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = rect.width + "px"
            canvas.style.height = rect.height + "px"
            ctx.setTransform(dpr,0,0,dpr,0,0)
        }
        updateSize()

        function getBtnCenter(){
            const btn = button!.getBoundingClientRect()
            const cvs = canvas!.getBoundingClientRect()
            return{
                x: cvs.width/2,
                y: cvs.height/2
            }
        }

        const particles: {
            x: number,
            y: number,
            radius: number,
            alpha: number,
            life: number,
            vx: number,
            vy: number
        }[] = []

        const speed = 50
        let lastTime = performance.now()

        function animate(currentTime: number) {
            if (!ctx || !canvas) return
            const deltaTime = (currentTime - lastTime) / 1000
            lastTime = currentTime

            const {w , h} = sizeRef.current
            ctx.clearRect(0,0, w, h)

            
            if(Math.random() < 0.06) {
                const angle = Math.random() * Math.PI * 2
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    radius: 1,
                    alpha: 1,
                    life: 1,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed
                })
            }
            const target = getBtnCenter()

            for (let i = particles.length -1; i >= 0; i--) {
                const p = particles[i];

                p.life -= deltaTime * 0.3;
                p.alpha = p.life
                
                if(isHovering.current) {
                    const dx = target.x - p.x
                    const dy = target.y - p.y
                    const dist = Math.sqrt(dx * dx + dy * dy) + 0.001

                    const force = Math.max(0, 1 - dist / 700) * 400;

                    p.vx += (dx / dist) * force *deltaTime
                    p.vy += (dy / dist) * force *deltaTime
                } 

                // max speed
                const speed = Math.hypot(p.vx, p.vy);
                const maxSpeed = 160;
                if (speed > maxSpeed) {
                    p.vx = (p.vx / speed) * maxSpeed;
                    p.vy = (p.vy / speed) * maxSpeed;
                }

                p.x += p.vx * deltaTime;
                p.y += p.vy * deltaTime;

                

                if (p.alpha <= 0) {
                    particles.splice(i, 1)
                    continue
                }
                

                ctx.globalAlpha = p.alpha;
                ctx.shadowBlur = 1;
                ctx.shadowColor = "white";
                ctx.fillStyle = 'white';

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)
        window.addEventListener('resize', updateSize)

        return () => {
            if (animationRef.current){
                cancelAnimationFrame(animationRef.current)
            }
            window.removeEventListener('resize', updateSize)
        }
    }, [])

    return (
        <div className="relative flex justify-center items-center h-full w-full">
            <canvas
                ref={canvasRef}
                className="absolute w-full h-full pointer-events-none z-1"
            >
            </canvas>
            <button
                ref={buttonRef}
                onClick={() => openModal()}
                onMouseEnter={() => (isHovering.current = true)}
                onMouseLeave={() => (isHovering.current = false)}
                className="relative flex items-center justify-center z-2"
            >
                {children}
            </button>

        </div>
    )
}
