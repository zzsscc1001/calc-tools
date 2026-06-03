import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import {
  Zap,
  BarChart3,
  Cpu,
  Waves,
  Calculator,
  Activity,
} from "lucide-react";

const tools = [
  {
    name: "Boost Converter",
    description: "Calculate duty cycle, inductor ripple, and efficiency",
    icon: <Zap className="size-6" />,
    href: "#",
    featured: true,
  },
  {
    name: "Loop Compensation",
    description: "Bode plot analysis and compensation network design",
    icon: <Activity className="size-6" />,
    href: "#",
  },
  {
    name: "Thermal Analysis",
    description: "Junction temperature and derating calculations",
    icon: <BarChart3 className="size-6" />,
    href: "#",
  },
  {
    name: "MOSFET Losses",
    description: "Switching and conduction loss estimation",
    icon: <Cpu className="size-6" />,
    href: "#",
  },
  {
    name: "LC Filter Design",
    description: "Inductor and capacitor sizing for output filtering",
    icon: <Waves className="size-6" />,
    href: "#",
  },
  {
    name: "Voltage Divider",
    description: "Resistor ratio and loading effect calculator",
    icon: <Calculator className="size-6" />,
    href: "#",
  },
];

function ToolCard({
  name,
  description,
  icon,
  href,
  featured = false,
}: {
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  featured?: boolean;
}) {
  return (
    <MagicCard
      className="relative p-6"
      gradientColor="var(--color-muted)"
      gradientOpacity={0.8}
    >
      <a href={href} className="flex flex-col justify-between size-full z-10">
        <div className="flex flex-col gap-3">
          <div className="text-muted-foreground">{icon}</div>
          <div>
            <h3 className="font-semibold text-foreground text-lg">{name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
          </div>
        </div>
        <div className="text-muted-foreground text-xs mt-auto pt-4">
          Click to open →
        </div>
      </a>
      {featured && (
        <BorderBeam
          size={250}
          duration={12}
          colorFrom="#9E7AFF"
          colorTo="#FEBBBB"
        />
      )}
    </MagicCard>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* 背景 */}
      <div className="fixed inset-0 z-0">
        <FlickeringGrid
          color="var(--color-foreground)"
          maxOpacity={0.04}
          flickerChance={0.05}
          squareSize={4}
          gridGap={6}
        />
      </div>

      {/* 内容 */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="relative text-center mb-16">
          {/* 主题切换按钮 — 右上角 */}
          <div className="absolute top-0 right-0">
            <AnimatedThemeToggler />
          </div>

          <AnimatedShinyText className="text-sm tracking-widest uppercase mb-4">
            Engineer's Toolkit
          </AnimatedShinyText>
          <h1 className="text-4xl font-bold text-foreground mt-2">
            Calc Tools
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Power electronics calculation utilities
          </p>
        </div>

        {/* Tool Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-muted-foreground text-sm">
          Built with{" "}
          <a
            href="https://magicui.design"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Magic UI
          </a>
        </div>
      </div>
    </div>
  );
}
