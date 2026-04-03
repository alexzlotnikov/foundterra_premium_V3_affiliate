import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight } from "lucide-react";
import { useState, useCallback } from "react";

const Hero = () => {
  const { content, language } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });

    // Card tilt
    const cardCenterX = rect.width / 2;
    const cardCenterY = rect.height / 2;
    const rotateY = ((e.clientX - rect.left - cardCenterX) / cardCenterX) * 3;
    const rotateX = -((e.clientY - rect.top - cardCenterY) / cardCenterY) * 3;
    setCardRotate({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCardRotate({ x: 0, y: 0 });
  }, []);
  
  return (
    <section
      className="relative min-h-screen flex items-center justify-center section-padding pt-24 sm:pt-28 lg:pt-36 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient cursor-following gradient */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(99, 102, 241, 0.08), transparent 60%)`,
        }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container-max relative z-10">
        <div
          className="max-w-4xl mx-auto"
          style={{
            perspective: "1000px",
          }}
        >
          {/* Glass card container */}
          <div
            className={`glass-card rounded-2xl p-8 sm:p-12 lg:p-16 animate-fade-in transition-transform duration-300 ease-out ${language === 'he' ? 'text-right' : 'text-center'}`}
            style={{
              transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
              borderImage: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(99,102,241,0.05), rgba(99,102,241,0.2)) 1",
            }}
          >
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight font-serif">
              <span className="gradient-text">{content.hero.title.split('.')[0]}.</span>
              <br />
              <span className="text-foreground">{content.hero.title.split('.').slice(1).join('.').trim()}</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl text-muted-foreground mb-10 sm:mb-12 max-w-3xl leading-relaxed font-body ${language === 'he' ? 'mr-0' : 'mx-auto'}`}>
              {content.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-8 ${language === 'he' ? 'sm:flex-row-reverse justify-end' : 'justify-center'}`}>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base px-8 py-6 group"
                onClick={() => window.open(content.cta.calendlyLink, '_blank')}
              >
                {content.cta.bookSession}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-6"
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {content.cta.explorePackages}
              </Button>
            </div>

            {/* Express Link */}
            <p className={`text-sm sm:text-base text-muted-foreground font-body ${language === 'he' ? 'text-right' : 'text-center'}`}>
              {language === 'he' ? 'צריכים פידבק מיידי?' : 'Need immediate feedback?'}{' '}
              <a 
                href={language === 'he' ? '/he/paid-consultation' : '/paid-consultation'}
                className="highlight-link"
              >
                {language === 'he' 
                  ? 'קבלו סקירת מצגת של שעה ב-₪750' 
                  : 'Get a 1-hour pitch deck review for $250'}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
