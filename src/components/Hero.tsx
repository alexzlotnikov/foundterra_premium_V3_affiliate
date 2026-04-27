import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";

const Hero = () => {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y });
  }, []);

  return (
    <section
      className="relative min-h-[88vh] flex items-center section-padding pt-28 sm:pt-32 lg:pt-40 overflow-hidden"
      onMouseMove={handleMove}
    >
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-gridfx" aria-hidden="true" />
      <div
        className="hero-cursor-glow"
        aria-hidden="true"
        style={{
          background: `radial-gradient(560px circle at ${pointer.x}% ${pointer.y}%, rgba(124,58,237,0.22), transparent 60%)`,
        }}
      />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 items-center">
          <div className="max-w-4xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs tracking-[0.16em] uppercase font-semibold mb-5">
              Founder fundraising support
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 leading-[1.02] tracking-tight font-serif">
              <span className="gradient-text">Fundraising support for founders</span>
              <br />
              <span className="text-foreground">before and during the raise.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed font-body">
              Foundterra helps pre-seed and seed founders build sharper pitch decks, clearer investor stories, better
              financial assumptions, and a more disciplined fundraising process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg" className="text-base px-8 py-6 group">
                <a href="/pay/pitch-deck-review">
                  Start with $100 Deck Diagnostic
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                <a href="#plans">View Monthly Support</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="hero-orbit" aria-hidden="true" />
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(124,58,237,0.20),transparent_38%)]" />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.16em] text-primary/90 mb-2">Readiness snapshot</p>
                <h3 className="text-2xl sm:text-3xl font-semibold font-serif mb-4">Raise with signal, not noise.</h3>
                <div className="space-y-3">
                  {[
                    ["Deck narrative clarity", "Upgraded weekly"],
                    ["Investor feedback loops", "Structured"],
                    ["Fundraising process", "Disciplined"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-primary/20 pb-2">
                      <span className="text-sm text-muted-foreground">{label}</span>
                      <span className="text-sm text-foreground font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
