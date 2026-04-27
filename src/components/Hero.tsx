import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative section-padding pt-28 sm:pt-32 lg:pt-40 overflow-hidden">
      <div className="container-max relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 leading-tight tracking-tight font-serif">
            <span className="gradient-text">Fundraising support for founders before and during the raise.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed font-body">
            Foundterra helps pre-seed and seed founders build sharper pitch decks, clearer investor stories, better
            financial assumptions, and a more disciplined fundraising process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="lg" className="text-base px-8 py-6">
              <a href="#diagnostic">Start with $100 Deck Diagnostic</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
              <a href="#plans">View Monthly Support</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
