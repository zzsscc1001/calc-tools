import { Moon, Sun, Zap, TrendingUp, BarChart3 } from "lucide-react"
import { useState, useEffect } from "react"
import { MagicCard } from "./components/magicui/magic-card"
import { FlickeringGrid } from "./components/magicui/flickering-grid"
import { AnimatedShinyText } from "./components/magicui/animated-shiny-text"
import { BorderBeam } from "./components/magicui/border-beam"

function ThemeToggle() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])
  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-accent"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}

function ToolCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <MagicCard className="card-hover-underline group relative flex flex-col justify-between overflow-hidden rounded-[--radius] p-6 cursor-pointer">
      <BorderBeam size={150} duration={12} delay={9} />
      <div>
        <div className="mb-4 text-muted-foreground">{icon}</div>
        <h3 className="mb-1 text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
      <span className="underline-link relative mt-4 inline-block w-fit text-sm text-foreground">
        进入 →
      </span>
    </MagicCard>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ThemeToggle />
      <div className="pointer-events-none fixed inset-0">
        <FlickeringGrid />
      </div>
      <main className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 text-center">
          <AnimatedShinyText className="mb-3 text-sm text-muted-foreground">
            工程师工具集合
          </AnimatedShinyText>
          <h1 className="mb-3 text-4xl font-semibold tracking-tight">Calc Tools</h1>
          <p className="text-muted-foreground">电源设计 · 电路分析 · 参数计算</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ToolCard icon={<Zap className="h-6 w-6" />} title="Boost Calculator" desc="升压变换器参数计算与效率分析" />
          <ToolCard icon={<TrendingUp className="h-6 w-6" />} title="Loop Compensation" desc="环路补偿网络设计与波特图分析" />
          <ToolCard icon={<BarChart3 className="h-6 w-6" />} title="Loss Analysis" desc="功率损耗建模与热分析计算" />
        </div>
      </main>
    </div>
  )
}
