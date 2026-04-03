import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const FAQ = () => {
  const { content } = useLanguage();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text font-serif">{content.faq.title}</h2>
          <p className="text-lg text-muted-foreground font-body">
            {content.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {content.faq.questions.map((faq, index) => (
            <div key={index} className="glass-panel rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[rgba(99,102,241,0.05)] transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg pr-4 font-serif">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === index && (
                <div className="px-6 pb-5 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-muted-foreground leading-relaxed font-body">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
