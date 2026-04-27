import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Financial Model",
    description: "Investor-facing assumptions, revenue logic, runway, scenarios, and model structure.",
  },
  {
    title: "Data Room Preparation",
    description: "Organize the basic diligence materials investors expect before serious conversations.",
  },
  {
    title: "Competitor & Market Analysis",
    description: "Investor-facing competitor map, positioning, market logic, and moat framing.",
  },
];

const Process = () => {
  return (
    <section id="services" className="section-padding scroll-mt-24 relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.18em] uppercase text-primary font-semibold mb-4">Done-for-you execution</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">
            Need the actual fundraising assets built? Keep this separate from the subscription.
          </h2>
          <p className="responsive-text-base text-muted-foreground leading-relaxed font-body">
            Monthly plans are for review, advisory, and iteration. Execution services are fixed projects for founders
            who need materials rebuilt or prepared properly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="bg-secondary border-primary/20">
            <CardContent className="p-8 sm:p-10">
              <h3 className="text-4xl font-bold mb-4 font-serif">Investor-Ready Pitch Deck</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-body">
                Full strategic rewrite and rebuild of your pitch deck, focused on investor logic, narrative, slide
                structure, clarity, and fundraising readiness.
              </p>
              <p className="text-5xl font-bold gradient-text mb-8">$1,500 <span className="text-base text-muted-foreground">starting price</span></p>
              <Button asChild variant="hero" size="lg">
                <a href="#apply">Ask About Full Deck</a>
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {services.map((service, index) => (
              <Card key={service.title} className="card-elevated animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-serif">{service.title}</h3>
                    <p className="text-muted-foreground font-body">{service.description}</p>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-primary whitespace-nowrap">Add-on</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
