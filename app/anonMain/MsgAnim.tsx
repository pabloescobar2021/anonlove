import React, { useRef, useState, useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
};

type Props = {
  message: string;
  onRemove: () => void;
  className?: string;
};

export const ParticleMessageCanvas: React.FC<Props> = ({
  message,
  onRemove,
  className = "",
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [removing, setRemoving] = useState(false);

  const PARTICLE_SIZE = 2;

  const handleRemove = () => {
    if (!wrapperRef.current || !canvasRef.current) return;
    setRemoving(true);

    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = wrapper.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Рисуем текст на canvas
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "white";
    ctx.font = "16px sans-serif";
    ctx.textBaseline = "top";
    ctx.fillText(message, 0, 0);

    const imgData = ctx.getImageData(0, 0, rect.width, rect.height);
    const particles: Particle[] = [];

    for (let y = 0; y < rect.height; y += PARTICLE_SIZE) {
      for (let x = 0; x < rect.width; x += PARTICLE_SIZE) {
        const idx = (y * rect.width + x) * 4;
        const r = imgData.data[idx];
        const g = imgData.data[idx + 1];
        const b = imgData.data[idx + 2];
        const a = imgData.data[idx + 3];
        if (a > 0) {
          particles.push({
            x,
            y,
            dx: (Math.random() - 0.5) * 4,
            dy: (Math.random() - 1) * 4 - 2,
            size: PARTICLE_SIZE,
            color: `rgba(${r},${g},${b},${a / 255})`,
          });
        }
      }
    }

    // Анимация частиц
    let frame = 0;
    const totalFrames = 60;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        p.dy += 0.1; // гравитация

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      frame++;
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        onRemove();
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div className={`relative ${className}`} ref={wrapperRef}>
      {!removing && (
        <div className="flex items-center gap-2 bg-[#fff]/20 p-2 rounded-md">
          <span>{message}</span>
          <button
            className="ml-2 text-red-500 text-xs"
            onClick={handleRemove}
          >
            Удалить
          </button>
        </div>
      )}
      {removing && (
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
      )}
    </div>
  );
};
