import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Packages = () => {
  const { content, language } = useLanguage();

  return (
    <section id="packages" className="section-padding scroll-mt-20 sm:scroll-mt-24">
      <div className="container-max">
        <div className={`text-center mb-12 sm:mb-16 animate-fade-in max-w-3xl mx-auto ${language === 'he' ? 'text-right' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text font-serif">
            {content.packages.title}
          </h2>
          {content.packages.subtitle && (
            <p className="responsive-text-base text-muted-foreground leading-relaxed font-body">
              {content.packages.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {content.packages.plans.map((pkg: {
            name: string;
            price: string;
            duration: string;
            description: string;
            features: string[];
            popular?: boolean;
            cta?: string;
          }, index: number) => (
            <Card 
              key={index} 
              className={`relative glass-card animate-slide-up transition-all duration-400 ${
                pkg.popular 
                  ? 'border-[rgba(99,102,241,0.4)] lg:scale-105 z-10 animate-glow-pulse' 
                  : 'z-0 hover:-translate-y-1'
              }`}
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold shadow-lg z-10 rounded-full">
                  {content.packages.mostPopular}
                </Badge>
              )}

              <CardHeader className={`text-center pb-4 pt-8 ${language === 'he' ? 'text-right' : ''}`}>
                <CardTitle className="text-xl sm:text-2xl font-bold mb-3 font-serif">{pkg.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text font-mono">
                    {pkg.price}
                  </span>
                  {pkg.duration && (
                    <div className="mt-1">
                      <span className="text-muted-foreground text-sm font-mono">{pkg.duration}</span>
                    </div>
                  )}
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed font-body">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className={`space-y-3 mb-8 ${language === 'he' ? 'text-right' : 'text-left'}`}>
                  {pkg.features.map((feature: string, featureIndex: number) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground flex-1 font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.popular ? "hero" : "outline"} 
                  className="w-full font-semibold"
                  size="lg"
                  onClick={() => window.open(content.cta.calendlyLink, '_blank')}
                >
                  {pkg.cta || content.cta.bookCall}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
