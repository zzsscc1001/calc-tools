import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
}

export function FlickeringGrid({
  className,
  squareSize = 4,
  gridGap = 6,
  color = "rgb(0, 0, 0)",
  maxOpacity = 0.5,
  flickerChance = 0.1,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resizeCanvas();

    const columns = Math.floor(canvas.width / (squareSize + gridGap));
    const rows = Math.floor(canvas.height / (squareSize + gridGap));
    const squares = Array.from({ length: columns * rows }, () => ({
      opacity: Math.random() * maxOpacity,
      targetOpacity: Math.random() * maxOpacity,
    }));

    let animationId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j;
          const square = squares[idx];
          if (Math.random() < flickerChance)
            square.targetOpacity = Math.random() * maxOpacity;
          square.opacity += (square.targetOpacity - square.opacity) * 0.1;
          ctx.fillStyle = color;
          ctx.globalAlpha = square.opacity;
          ctx.fillRect(
            i * (squareSize + gridGap),
            j * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [squareSize, gridGap, color, maxOpacity, flickerChance]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none", className)}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
