import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function AnimatedShinyText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex bg-gradient-to-r from-transparent via-foreground/80 to-transparent bg-[length:200%_100%] bg-clip-text text-transparent",
        className
      )}
      style={{ animation: "shiny-text 3s linear infinite" }}
    >
      <style>{`
        @keyframes shiny-text {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      {children}
    </div>
  );
}
