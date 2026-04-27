import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const quickAnswers = [
  {
    title: "What is weak right now?",
    description: "Get a clear diagnosis of the biggest investor-facing problems in your current deck.",
  },
  {
    title: "What should you fix first?",
    description: "Leave with a prioritized list of changes instead of random comments from different advisors.",
  },
  {
    title: "What is the right next step?",
    description: "Know whether you should keep improving alone, subscribe for support, or rebuild the deck properly.",
  },
];

const Packages = () => {
  return (
    <section id="diagnostic" className="section-padding scroll-mt-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="card-elevated">
            <CardContent className="p-8 sm:p-10">
              <p className="text-xs tracking-[0.18em] uppercase text-primary font-semibold mb-4">Best first paid step</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-serif">Pitch Deck Diagnostic</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
                A one-time review for founders who are not sure whether they need small fixes, monthly support, or a
                full deck rebuild.
              </p>
              <ul className="space-y-3 mb-8">
                <li>Detailed pitch deck feedback</li>
                <li>1-hour consultation</li>
                <li>Actionable fixing plan</li>
              </ul>
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <a href="/pay/pitch-deck-review">Book $100 Diagnostic</a>
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {quickAnswers.map((item, index) => (
              <Card key={item.title} className="card-elevated animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-serif">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-body">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
