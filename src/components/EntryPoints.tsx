import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const EntryPoints = () => {
  const { content, language } = useLanguage();
  
  const icons = [Video, Globe];

  if (!content.entryPoints) {
    return null;
  }

  return (
    <section id="services" className="section-padding scroll-mt-20 sm:scroll-mt-24">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text font-serif">
            {content.entryPoints.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {content.entryPoints.items.map((item: {
            title: string;
            price: string;
            duration: string;
            description: string;
            cta: string;
          }, index: number) => {
            const IconComponent = icons[index];
            
            return (
              <Card 
                key={index} 
                className="card-elevated animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 icon-glow rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="responsive-text-lg mb-2 font-serif">{item.title}</CardTitle>
                  <div className="mb-2">
                    <span className="text-2xl sm:text-3xl font-bold gradient-text font-mono">
                      {item.price}
                    </span>
                    <span className="text-muted-foreground ml-2 responsive-text-xs font-mono">• {item.duration}</span>
                  </div>
                  <CardDescription className="responsive-text-sm font-body">{item.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    size="lg"
                    onClick={() => {
                      const isPaid250 = item.price.includes('250') || item.price.includes('₪750');
                      if (isPaid250) {
                        window.location.href = language === 'he' ? '/he/paid-consultation' : '/paid-consultation';
                        return;
                      }
                      window.open(content.cta.calendlyLink, '_blank');
                    }}
                  >
                    {item.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EntryPoints;
