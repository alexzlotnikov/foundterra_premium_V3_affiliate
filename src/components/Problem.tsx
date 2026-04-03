import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquareX, Calculator, Palette, Clock } from "lucide-react";

const Problem = () => {
  const { content } = useLanguage();
  
  const icons = [MessageSquareX, Calculator, Palette, Clock];

  if (!content.problem) {
    return null;
  }

  return (
    <section className="section-padding relative">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            {content.problem.title}
          </h2>
          <p className="responsive-text-base text-muted-foreground max-w-3xl mx-auto font-body">
            {content.problem.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {content.problem.items.map((item: { title: string; description: string }, index: number) => {
            const IconComponent = icons[index];
            
            return (
              <Card 
                key={index} 
                className="card-elevated animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 icon-glow rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 font-serif">
                        {index + 1}. {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
