import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 rounded-[inherit] [border:1px_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "pointer-events-none",
        className
      )}
      style={
        {
          "--border-beam-size": `${size}px`,
          "--border-beam-duration": `${duration}s`,
          "--border-beam-anchor": `${anchor}%`,
          "--border-beam-color-from": colorFrom,
          "--border-beam-color-to": colorTo,
          "--border-beam-delay": `-${delay}s`,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `conic-gradient(from var(--border-beam-angle) at var(--border-beam-anchor) 50%, var(--border-beam-color-from), var(--border-beam-color-to), transparent 80%)`,
          animation: `border-beam var(--border-beam-duration) linear infinite var(--border-beam-delay)`,
        }}
      />
      <style>{`
        @property --border-beam-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes border-beam {
          0% { --border-beam-angle: 0deg; }
          100% { --border-beam-angle: 360deg; }
        }
      `}</style>
    </div>
  );
}
