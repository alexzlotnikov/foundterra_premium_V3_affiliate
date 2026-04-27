import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Should I buy the $100 diagnostic or subscribe?",
    answer:
      "Start with the diagnostic if you are unsure what is wrong. Subscribe if you already know you need ongoing support while preparing or raising.",
  },
  {
    question: "Do monthly plans include full deck rewriting?",
    answer:
      "No. Monthly plans include feedback, review, and advisory support. Full deck rebuilding is a separate service starting at $1,500.",
  },
  {
    question: "How long should founders subscribe?",
    answer:
      "Usually 2–4 months: while preparing the materials, launching outreach, handling investor calls, and improving the story from feedback.",
  },
  {
    question: "What does chat support mean?",
    answer:
      "Short tactical questions. Long reviews, rewriting, research, financial modeling, and deck building are separate work.",
  },
  {
    question: "Can you help with investor feedback?",
    answer:
      "Yes. Send investor notes, rejection emails, or questions they asked. The goal is to understand what the feedback likely means and what to change.",
  },
  {
    question: "Do you guarantee fundraising results?",
    answer:
      "No. The service improves fundraising readiness, materials, messaging, and process. It does not guarantee meetings, investment, or term sheets.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding scroll-mt-24">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.18em] uppercase text-primary font-semibold mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text font-serif">
            Questions founders will ask before paying monthly.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={faq.question} className="card-elevated animate-slide-up" style={{ animationDelay: `${index * 0.06}s` }}>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3 font-serif">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed font-body">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
