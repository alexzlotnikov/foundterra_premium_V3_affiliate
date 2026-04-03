import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Phone, FolderOpen, PenTool, MessageSquare, CheckCircle, Rocket } from "lucide-react";

const Process = () => {
  const { content, language } = useLanguage();
  const isRTL = language === 'he';

  const stepIcons = [Phone, FolderOpen, PenTool, MessageSquare, CheckCircle, Rocket];
  return (
    <section id="process" className="section-padding scroll-mt-24 relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text font-serif">
            {content.process.title}
          </h2>
          {content.process.subtitle && (
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
              {content.process.subtitle}
            </p>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="space-y-6 sm:space-y-8">
              {content.process.steps.map((step: { number: string; title: string; description: string }, index: number) => {
                const IconComponent = stepIcons[index] || CheckCircle;
                
                return (
                  <div 
                    key={step.number} 
                    className="relative flex gap-4 sm:gap-6 animate-slide-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >

                    {/* Icon circle */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center relative z-10 icon-glow border border-[rgba(99,102,241,0.3)]">
                      <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-6 sm:pb-8">
                      <div className="glass-panel rounded-xl p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 font-serif">
                          <span className="font-mono text-primary/70">{step.number}.</span> {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-body">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {content.process.cta && (
          <div className="text-center mt-12 sm:mt-16 animate-fade-in">
            <Button 
              variant="hero" 
              size="lg"
              className="px-8 py-6"
              onClick={() => window.open(content.cta.calendlyLink, '_blank')}
            >
              {content.process.cta}
            </Button>
          </div>
        )}

        {/* Result text if exists */}
        {content.process.result && (
          <div className="text-center mt-12 sm:mt-16 animate-fade-in">
            <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-2xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text leading-relaxed font-serif">
                {content.process.result}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Process;
