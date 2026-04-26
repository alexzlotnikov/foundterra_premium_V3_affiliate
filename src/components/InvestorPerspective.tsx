import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Linkedin } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";
import ggwLogo from "@/assets/ggw-ventures-logo.png";
import lvlupLogo from "@/assets/lvlup-ventures-logo.png";
import foundersInstituteLogo from "@/assets/founders-institute-logo.png";
const ganasVenturesLogo = "https://i.ibb.co/7JTnzJk5/GANAS-VC-removebg-preview-m3an0-HJ.webp";
const flashpointVcLogo = "https://i.ibb.co/vx0Jn8Dw/292e65e9-a9e8-4e90-b726-3b055b8f9025-0-1.webp";
const boardyVenturesLogo = "https://i.ibb.co/B2yQwm4D/690d8bb37b555132c802fce0-mobiletitle.webp";


const InvestorPerspective = () => {
  const { content } = useLanguage();

  if (!content.investorPerspective) {
    return null;
  }

  return (
    <section id="investor-perspective" className="section-padding scroll-mt-24">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text font-serif">
            {content.investorPerspective.title}
          </h2>
        </div>

        <Card className="max-w-5xl mx-auto card-elevated animate-slide-up">
          <CardContent className="p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Founder Photo - Asymmetric left */}
              <div className="relative flex-shrink-0">
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden ring-1 ring-[rgba(99,102,241,0.2)]">
                  <img loading="lazy" decoding="async" 
                    src={founderPhoto} 
                    alt={content.investorPerspective.name}
                    className="w-full h-full object-cover grayscale contrast-[1.2]"
                  />
                  {/* Noise grain overlay */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                  }} />
                </div>
              </div>

              {/* Content - Right */}
              <div className="flex-1 text-center lg:text-left">
                {/* Quote icon */}
                <div className="w-10 h-10 icon-glow rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium italic text-foreground mb-6 leading-relaxed font-serif">
                  "{content.investorPerspective.quote}"
                </blockquote>
                
                {/* Author info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <p className="text-xl sm:text-2xl font-bold gradient-text font-serif">
                      {content.investorPerspective.name}
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/zlotnikov-alex/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>
                  <p className="text-muted-foreground font-medium font-body text-sm">
                    {content.investorPerspective.role}
                  </p>
                </div>

                {/* Venture Logos */}
                <div className="flex flex-wrap items-stretch justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
                  {[
                    {
                      name: "LvlUp Ventures",
                      role: "Scout",
                      href: "https://lvlup.vc/",
                      logo: lvlupLogo,
                      invert: false,
                    },
                    {
                      name: "GGW Ventures",
                      role: "Venture Associate",
                      href: "https://ggw.ventures/",
                      logo: ggwLogo,
                      invert: true,
                    },
                    {
                      name: "Founder Institute",
                      role: "Mentor",
                      href: "https://fi.co/",
                      logo: foundersInstituteLogo,
                      invert: false,
                    },
                    {
                      name: "Ganas Ventures",
                      role: "Scout",
                      href: "https://www.ganas.vc/",
                      logo: ganasVenturesLogo,
                      invert: true,
                    },
                    {
                      name: "Flashpoint VC",
                      role: "Scout",
                      href: "https://flashpointvc.com/",
                      logo: flashpointVcLogo,
                      invert: false,
                    },
                    {
                      name: "Boardy Ventures",
                      role: "Deal Partner",
                      href: "https://www.boardy.ai/",
                      logo: boardyVenturesLogo,
                      invert: false,
                    },
                  ].map((affiliation) => (
                    <a
                      key={affiliation.name}
                      href={affiliation.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[235px] h-[124px] glass-panel rounded-md border border-[var(--purple-border)] px-4 py-3 flex flex-col items-center justify-center gap-1.5 hover:border-[var(--purple-border-hover)] hover:-translate-y-0.5 transition-all duration-300"
                      aria-label={`${affiliation.name} website`}
                    >
                      <div className="h-12 w-full flex items-center justify-center">
                        {affiliation.logo ? (
                          <img loading="lazy" decoding="async"
                            src={affiliation.logo}
                            alt={affiliation.name}
                            className={`h-12 w-auto object-contain opacity-95 ${affiliation.invert ? 'invert brightness-200' : 'brightness-200'}`}
                          />
                        ) : null}
                      </div>
                      <div className="text-[15px] leading-tight text-center text-[var(--text)] font-semibold font-body">{affiliation.name}</div>
                      <div className="text-[14px] uppercase tracking-[0.16em] text-[var(--purple-light)] font-semibold">{affiliation.role}</div>
                    </a>
                  ))}
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed font-body">
                  {content.investorPerspective.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InvestorPerspective;
