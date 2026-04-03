import { ArrowRight, BarChart3, Briefcase, Calculator, FileSearch, LayoutTemplate, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

type FreeStartupToolsProps = {
  className?: string;
  sectionId?: string;
  highlighted?: boolean;
};

const TOOLS = [
  {
    title: "Pitch Deck Review",
    description: "Get an instant VC readiness score with actionable feedback.",
    href: "/pitch-review",
    icon: FileSearch,
  },
  {
    title: "Deck Architect",
    description: "Generate a winning deck structure for pre-seed and seed rounds.",
    href: "/deck-architect",
    icon: LayoutTemplate,
  },
  {
    title: "Financial Model",
    description: "Build key assumptions and investor-facing financial projections.",
    href: "/financial-model",
    icon: Calculator,
  },
  {
    title: "Market Size Tool",
    description: "Estimate TAM, SAM, and SOM for your startup market.",
    href: "/market-size",
    icon: BarChart3,
  },
  {
    title: "SaaS Metric Auditor",
    description: "Benchmark growth, retention, and efficiency metrics.",
    href: "/saas-metric-auditor",
    icon: Sparkles,
  },
  {
    title: "Investor Readiness Check",
    description: "See if your startup is ready for investor outreach.",
    href: "/investor-ready",
    icon: Briefcase,
  },
];

const FreeStartupTools = ({ className = "", sectionId = "free-startup-tools", highlighted = false }: FreeStartupToolsProps) => {
  return (
    <section
      id={sectionId}
      className={`section-padding scroll-mt-24 ${highlighted ? "tool-section-highlight" : ""} ${className}`}
    >
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif">
            Free <span className="gradient-text">Startup Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Use our free founder tools to improve your pitch, validate assumptions, and prepare for fundraising.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                to={tool.href}
                key={tool.href}
                className="card-elevated border border-border/70 bg-card/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="w-11 h-11 rounded-lg icon-glow flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Open tool <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FreeStartupTools;
