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
    icon: <Zap className="size-5" />,
    href: "#",
    featured: true,
  },
  {
    name: "Loop Compensation",
    description: "Bode plot analysis and compensation network design",
    icon: <Activity className="size-5" />,
    href: "#",
  },
  {
    name: "Thermal Analysis",
    description: "Junction temperature and derating calculations",
    icon: <BarChart3 className="size-5" />,
    href: "#",
  },
  {
    name: "MOSFET Losses",
    description: "Switching and conduction loss estimation",
    icon: <Cpu className="size-5" />,
    href: "#",
  },
  {
    name: "LC Filter Design",
    description: "Inductor and capacitor sizing for output filtering",
    icon: <Waves className="size-5" />,
    href: "#",
  },
  {
    name: "Voltage Divider",
    description: "Resistor ratio and loading effect calculator",
    icon: <Calculator className="size-5" />,
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
    <MagicCard className="relative p-5" gradientSize={250}>
      <a href={href} className="flex flex-col justify-between size-full z-10">
        <div className="flex flex-col gap-2">
          <div className="text-muted-foreground">{icon}</div>
          <div>
            <h3 className="font-medium text-foreground text-sm">{name}</h3>
            <p className="text-muted-foreground text-xs mt-1">{description}</p>
          </div>
        </div>
        <div className="text-muted-foreground text-xs mt-auto pt-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="underline-offset-4 hover:underline">Open →</span>
        </div>
      </a>
      {featured && (
        <BorderBeam
          size={200}
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
      <div className="fixed inset-0 z-0">
        <FlickeringGrid
          color="var(--foreground)"
          maxOpacity={0.03}
          flickerChance={0.04}
          squareSize={3}
          gridGap={6}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="relative text-center mb-12">
          <div className="absolute top-0 right-0">
            <AnimatedThemeToggler />
          </div>

          <AnimatedShinyText className="text-xs tracking-widest uppercase mb-3">
            Engineer's Toolkit
          </AnimatedShinyText>
          <h1 className="text-3xl font-semibold text-foreground mt-1">
            Calc Tools
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Power electronics calculation utilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>

        <div className="text-center mt-16 text-muted-foreground text-xs">
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
