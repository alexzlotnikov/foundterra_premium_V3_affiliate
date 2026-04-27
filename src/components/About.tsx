import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const paths = [
  {
    tag: "Diagnose",
    title: "Pitch Deck Diagnostic",
    price: "$100",
    description: "Get detailed deck feedback, a 1-hour consultation, a readiness score, and a recommended next step.",
    href: "/pay/pitch-deck-review",
    variant: "hero" as const,
    cta: "Book Diagnostic",
  },
  {
    tag: "Iterate",
    title: "Monthly Fundraising Support",
    price: "$300–$1,000/mo",
    description: "Get ongoing feedback while preparing, launching, or managing your raise.",
    href: "#plans",
    variant: "outline" as const,
    cta: "View Plans",
  },
  {
    tag: "Build",
    title: "Done-For-You Services",
    price: "From $1,500",
    description: "Need the deck, model, data room, or market analysis built properly? Upgrade to a fixed project.",
    href: "#services",
    variant: "outline" as const,
    cta: "View Services",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding scroll-mt-24">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.18em] uppercase text-primary font-semibold mb-4">Choose your path</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">
            Start where you are in the fundraising process.
          </h2>
          <p className="responsive-text-base text-muted-foreground max-w-3xl mx-auto font-body">
            Foundterra is structured as a simple ladder: start with a diagnostic, subscribe for ongoing support while
            you raise, or upgrade to done-for-you execution when you need the assets built properly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {paths.map((path, index) => (
            <Card key={path.title} className="card-elevated animate-slide-up flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <span className="w-fit px-3 py-1 rounded-full bg-primary/15 text-primary text-xs tracking-wide uppercase font-semibold mb-4">
                  {path.tag}
                </span>
                <h3 className="text-2xl font-bold mb-2 font-serif">{path.title}</h3>
                <p className="text-xl font-semibold gradient-text mb-4">{path.price}</p>
                <p className="text-muted-foreground leading-relaxed font-body mb-8">{path.description}</p>
                <Button asChild variant={path.variant} className="w-full mt-auto">
                  <a href={path.href}>{path.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
