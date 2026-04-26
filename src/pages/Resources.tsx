import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Users, Target, Rocket, DollarSign, TrendingUp, BookOpen, CheckSquare, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

interface Resource {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  ctaLabel?: string;
  ctaClassName?: string;
}

/* 
╔══════════════════════════════════════════════════════════════════════╗
║                    📚 ADD YOUR RESOURCES HERE                        ║
╠══════════════════════════════════════════════════════════════════════╣
║  To add a new resource card:                                         ║
║  1. Copy one of the resource objects below                           ║
║  2. Change the title, description, and link                          ║
║  3. Pick an icon from the AVAILABLE ICONS list                       ║
║                                                                      ║
║  AVAILABLE ICONS:                                                    ║
║  FileText, Users, Target, Rocket, DollarSign, TrendingUp,           ║
║  BookOpen, CheckSquare                                               ║
║                                                                      ║
║  Example:                                                            ║
║  {                                                                   ║
║    title: "Your Resource Title",                                    ║
║    description: "Brief description of the resource",                ║
║    icon: Rocket,                                                     ║
║    link: "https://your-link-here.com"                               ║
║  },                                                                  ║
╚══════════════════════════════════════════════════════════════════════╝
*/

const Resources = () => {
  const { language } = useLanguage();

  const resources: Resource[] = [
    {
      title: "Tools for Your Startup",
      description: "Essential tools and resources to build and grow your startup",
      icon: Wrench,
      link: "/startup-deals",
      ctaLabel: "Free Startup Credits",
      ctaClassName: "bg-green-600 text-white border-green-600 hover:bg-green-700 hover:border-green-700"
    },
    {
      title: "Pre-Seed Checklist",
      description: "Essential checklist to prepare your startup before seeking funding",
      icon: CheckSquare,
      link: "https://meteor-lunge-328.notion.site/Pre-Seed-Checklist-28bb63ebe2cc80bdb0efecd2edea27a6"
    },
    {
      title: "Startup Incorporation Guide",
      description: "Complete guide to legally incorporating your startup",
      icon: BookOpen,
      link: "https://meteor-lunge-328.notion.site/Startup-Incorporation-Guide-291b63ebe2cc806a99e8df2a39bc0f9e"
    },
    {
      title: "Pitch Deck Templates",
      description: "Professional pitch deck templates to impress investors",
      icon: FileText,
      link: "https://meteor-lunge-328.notion.site/Pitch-Deck-Templates-28bb63ebe2cc80e9a60ede21378cb3c7"
    },
    {
      title: "VC List",
      description: "Comprehensive database of venture capital firms",
      icon: DollarSign,
      link: "https://meteor-lunge-328.notion.site/VC-list-28ab63ebe2cc8031a34fccc94c3bc76b"
    },
    {
      title: "Accelerators Database",
      description: "Find the right accelerator program for your startup",
      icon: Rocket,
      link: "https://meteor-lunge-328.notion.site/Accelerators-Database-28db63ebe2cc802dbb42f3031592a33f"
    },
    {
      title: "Investors Investing in Israel",
      description: "Directory of investors focused on the Israeli startup ecosystem",
      icon: Target,
      link: "https://meteor-lunge-328.notion.site/Investors-Investing-in-Israel-28ab63ebe2cc806ea8f1d98748469822"
    },
    {
      title: "How to Cold Reach Investors",
      description: "Proven strategies for reaching out to investors effectively",
      icon: Users,
      link: "https://meteor-lunge-328.notion.site/How-to-cold-reach-investors-28eb63ebe2cc8058991bcb37b3239cec"
    },
    {
      title: "Viral Startup Launch Checklist",
      description: "Step-by-step guide to launching your startup with maximum impact",
      icon: Rocket,
      link: "https://meteor-lunge-328.notion.site/Viral-Startup-Launch-Checklist-28eb63ebe2cc8003bd77de55378e5171"
    },
    {
      title: "Platforms to Promote Your Startup",
      description: "Best platforms and communities to gain visibility and traction",
      icon: TrendingUp,
      link: "https://meteor-lunge-328.notion.site/Platforms-to-promote-your-startup-28fb63ebe2cc8035b496e7a87065e242"
    },
    {
      title: "Early Traction Metrics That Matter",
      description: "Key metrics to track in your startup's early stages",
      icon: TrendingUp,
      link: "https://meteor-lunge-328.notion.site/Early-Traction-Metrics-that-matter-291b63ebe2cc802a909afa8f200a7c3e"
    },
    {
      title: "Customer Interview Script Framework",
      description: "Structured framework for conducting effective customer interviews",
      icon: Users,
      link: "https://meteor-lunge-328.notion.site/Customer-Interview-Script-Framework-291b63ebe2cc802ea67ccf975384556c"
    },
    {
      title: "How to Estimate Market Size",
      description: "Calculate and validate your total addressable market",
      icon: Target,
      link: "https://meteor-lunge-328.notion.site/How-to-Estimate-Market-Size-for-Your-Startup-291b63ebe2cc80858dd8f86c815b58e9"
    },
    {
      title: "Startup Competitive Analysis",
      description: "Framework for analyzing and positioning against competitors",
      icon: Target,
      link: "https://meteor-lunge-328.notion.site/Startup-Competitive-Analysis-291b63ebe2cc80d4a3fbcec9a6de00c9"
    },
    {
      title: "Cap Table Template",
      description: "Track equity distribution and ownership in your startup",
      icon: FileText,
      link: "https://meteor-lunge-328.notion.site/Cap-Table-template-291b63ebe2cc802bae64f23f029752fa"
    },
    {
      title: "How to Calculate Cash Runway",
      description: "Understand how long your startup can operate with current funds",
      icon: DollarSign,
      link: "https://meteor-lunge-328.notion.site/How-to-Calculate-Cash-Runway-291b63ebe2cc8076bc8ce1d9f4969d5a"
    },
    {
      title: "Feature Prioritization Framework",
      description: "Prioritize product features based on impact and resources",
      icon: CheckSquare,
      link: "https://meteor-lunge-328.notion.site/Feature-Prioritization-Framework-291b63ebe2cc80b3a52ee0e46b28a62b"
    },
    {
      title: "Startup Data Room",
      description: "Organize critical documents for due diligence and investors",
      icon: BookOpen,
      link: "https://meteor-lunge-328.notion.site/Startup-Data-Room-293b63ebe2cc804f8b7cfc8524d36f64"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Startup Resources - Foundterra</title>
        <meta name="description" content="Access exclusive startup resources including MVP guides, pitch deck templates, and fundraising roadmaps." />
        <link rel="canonical" href="https://www.foundterra.com/resources" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-primary/5 to-background">
        <Header />
        
        <main className="flex-1">
          <section className="section-padding">
            <div className="container-max">
              {/* Header */}
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  The Only Resources You Need for Your{" "}
                  <span className="gradient-text">Startup Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Curated guides, templates, and frameworks to help you build, launch, and grow your startup successfully.
                </p>
              </div>

              {/* Resource Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {resources.map((resource, index) => {
                  const IconComponent = resource.icon;
                  return (
                    <Card
                      key={index}
                      className="card-elevated animate-slide-up hover:scale-105 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader className="pb-4 flex flex-col items-center text-center">
                        <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className={`w-full transition-colors ${resource.ctaClassName ?? "group-hover:bg-primary group-hover:text-primary-foreground"}`}
                          asChild
                        >
                          <a
                            href={resource.link}
                            target={resource.link.startsWith("/") ? undefined : "_blank"}
                            rel={resource.link.startsWith("/") ? undefined : "noopener noreferrer"}
                            className="flex items-center justify-center gap-2"
                          >
                            {resource.ctaLabel ?? "Access Resource"}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Footer CTA */}
              <div className="text-center mt-16 animate-fade-in">
                <p className="text-muted-foreground mb-4">
                  Need personalized guidance for your startup?
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="text-lg px-8 py-6"
                  onClick={() => window.open('https://calendly.com/foundterra/30min', '_blank')}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Resources;
