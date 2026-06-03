import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

interface AnimatedThemeTogglerProps {
  className?: string;
}

export function AnimatedThemeToggler({
  className,
}: AnimatedThemeTogglerProps) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // View Transitions API — 流畅的圆形过渡动画
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(newTheme);
      });
    } else {
      setTheme(newTheme);
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative size-9 flex items-center justify-center rounded-md border border-border bg-card hover:bg-accent transition-colors",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun
        className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}
