import { Card, CardContent } from "@/components/ui/card";

const boundaries = [
  "No guaranteed investor introductions",
  "No broker-dealer or placement agent activity",
  "No legal, tax, or investment advice",
  "No full rewrite inside monthly plans",
  "No financial model or data room build unless purchased separately",
  "No fundraising outcome guarantee",
];

const InvestorPerspective = () => {
  return (
    <section id="investor-perspective" className="section-padding scroll-mt-24">
      <div className="container-max">
        <Card className="bg-secondary border-primary/30 max-w-6xl mx-auto">
          <CardContent className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-primary font-semibold mb-4">Clear boundaries</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif text-foreground">
                This is fundraising support, not fake fundraising magic.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-body">
                Foundterra helps founders improve materials, messaging, readiness, and fundraising process. It does not
                guarantee investor meetings, investment, or term sheets.
              </p>
            </div>
            <div className="glass-panel rounded-xl p-6 sm:p-8">
              <ul className="space-y-3">
                {boundaries.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InvestorPerspective;
