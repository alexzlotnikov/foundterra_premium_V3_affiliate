import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    badge: "Prepare to raise",
    title: "Fundraising Starter",
    price: "$300",
    description: "For founders improving their deck and investor readiness before serious outreach.",
    features: [
      "2 deck feedback rounds per month",
      "Weekly 15-minute fundraising check-in",
      "Async Q&A, up to 5 short questions per week",
      "1 investor message review per month",
      "Monthly action plan",
    ],
    featured: false,
    ctaHref: "/pay/subscription-300",
  },
  {
    badge: "Main offer",
    title: "Investor-Ready Support",
    price: "$500",
    description: "For founders starting outreach or already speaking with investors.",
    features: [
      "Weekly pitch deck feedback",
      "Weekly 30-minute fundraising check-in",
      "Priority async Q&A, up to 10 short questions per week",
      "Up to 4 investor meeting or rejection reviews per month",
      "2 investor outreach reviews per month",
      "Monthly action plan",
    ],
    featured: true,
    ctaHref: "/pay/subscription-500",
  },
  {
    badge: "Active raise",
    title: "Active Raise Partner",
    price: "$1,000",
    description: "For founders already taking investor meetings and managing follow-ups.",
    features: [
      "Weekly 60-minute advisory call",
      "Weekly deck iteration feedback",
      "Priority async Q&A",
      "Up to 8 investor meeting or rejection reviews per month",
      "Investor CRM and funnel review",
      "Investor targeting strategy",
      "Pitch practice twice per month",
      "Monthly data room readiness review",
      "Monthly investor newsletter update review",
    ],
    featured: false,
    ctaHref: "/pay/subscription-1000",
  },
];

const EntryPoints = () => {
  return (
    <section id="plans" className="section-padding scroll-mt-24">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.18em] uppercase text-primary font-semibold mb-4">Monthly support</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text font-serif">
            Fundraising usually takes months. Your support should not stop after one deck review.
          </h2>
          <p className="responsive-text-base text-muted-foreground font-body">
            Subscribe while you prepare, launch, and manage the raise. Every plan is designed around a different stage
            of the fundraising process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.title}
              className={`card-elevated animate-slide-up flex flex-col ${plan.featured ? "border-primary/50 lg:-translate-y-2" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <span className="w-fit px-3 py-1 rounded-full bg-primary/15 text-primary text-xs tracking-wide uppercase font-semibold mb-4">
                  {plan.badge}
                </span>
                <h3 className="text-2xl font-bold mb-2 font-serif">{plan.title}</h3>
                <p className="text-4xl font-bold gradient-text mb-4">{plan.price}<span className="text-base text-muted-foreground">/month</span></p>
                <p className="text-muted-foreground mb-5 font-body">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button asChild variant={plan.featured ? "hero" : "outline"} className="w-full mt-auto">
                  <a href={plan.ctaHref}>Subscribe Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntryPoints;
