import { User, Code, Rocket } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const { content } = useLanguage();
  
  const icons = [User, Code, Rocket];

  const qualifications = content.about.qualifications;
  const isNewFormat = qualifications.length > 0 && typeof qualifications[0] === 'object';

  return (
    <section id="about" className="section-padding scroll-mt-24">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif text-foreground">
            {content.about.title}
          </h2>
          {content.about.subtitle && (
            <p className="responsive-text-base text-muted-foreground max-w-3xl mx-auto font-body">
              {content.about.subtitle}
            </p>
          )}
        </div>
        
        {isNewFormat ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {qualifications.map((qual: { title: string; description: string } | string, index: number) => {
              const IconComponent = icons[index];
              const item = qual as { title: string; description: string };
              
              return (
                <Card 
                  key={index} 
                  className="card-elevated animate-slide-up text-center"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 icon-glow rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-serif">{item.title}</h3>
                    <p className="text-muted-foreground font-body">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 mb-8">
              {(qualifications as string[]).map((qualification: string, index: number) => (
                <div key={index} className="flex items-start gap-4 text-lg">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-left rtl:text-right text-foreground flex-1 font-body">{qualification}</span>
                </div>
              ))}
            </div>

            {content.about.closing && (
              <p className="text-xl font-semibold gradient-text text-center font-serif">
                {content.about.closing}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
