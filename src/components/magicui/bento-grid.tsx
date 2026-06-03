import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[220px] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
  name,
  description,
  icon,
  href,
}: {
  children?: ReactNode;
  className?: string;
  name: string;
  description: string;
  icon: ReactNode;
  href?: string;
}) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        "border border-border bg-card p-6",
        "hover:border-muted-foreground/20 transition-colors duration-300",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="text-muted-foreground">{icon}</div>
        <div>
          <h3 className="font-semibold text-foreground text-lg">{name}</h3>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
      </div>
      {children}
      {href && (
        <a
          href={href}
          className="absolute inset-0 z-10"
          aria-label={name}
        />
      )}
    </div>
  );
}
