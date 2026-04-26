import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface GuideData {
  title: string;
  subtitle: string;
  sections: Array<{ heading: string; body: string[] }>;
  externalUrl?: string;
  externalLabel?: string;
}

const guides: Record<string, GuideData> = {
  "vc-list": {
    title: "VC List",
    subtitle: "Explore the investor database using the updated Google Sheet.",
    sections: [
      {
        heading: "What this resource gives you",
        body: [
          "A curated venture capital list you can filter by geography, stage, and focus.",
          "Use this list to build your fundraising pipeline and prioritize outreach.",
        ],
      },
    ],
    externalUrl:
      "https://docs.google.com/spreadsheets/d/1urWSx_XvI4hEq72GRp-X2NS7fv_AJA0L9id7UmsLJUE/edit?usp=sharing",
    externalLabel: "Open 10K VC List",
  },
  "accelerators-database": {
    title: "Accelerators Database",
    subtitle: "Find accelerator programs and compare them by fit and stage.",
    sections: [
      {
        heading: "How to use this resource",
        body: [
          "Filter programs by geography, industry focus, and startup stage.",
          "Prioritize programs with strong mentor fit and realistic admission criteria.",
        ],
      },
    ],
  },
  "pre-seed-checklist": {
    title: "Pre-Seed Checklist",
    subtitle: "A practical checklist to prepare for your first fundraising round.",
    sections: [
      {
        heading: "Core preparation areas",
        body: [
          "Sharpen your problem/solution narrative and identify your ideal customer profile.",
          "Prepare your first traction evidence, KPI dashboard, and a clear 18-month plan.",
          "Get legal/founder basics in place before investor conversations.",
        ],
      },
    ],
  },
  "startup-incorporation-guide": {
    title: "Startup Incorporation Guide",
    subtitle: "A founder-friendly overview for setting up your company correctly.",
    sections: [
      {
        heading: "What to decide early",
        body: [
          "Entity type, jurisdiction, founder equity split, and vesting structure.",
          "Banking, accounting, and basic compliance setup to avoid cleanup later.",
        ],
      },
    ],
  },
  "how-to-cold-reach-investors": {
    title: "How to Cold Reach Investors",
    subtitle: "A simple outbound playbook for warm-quality cold outreach.",
    sections: [
      {
        heading: "Effective outreach flow",
        body: [
          "Research-fit investors first, then send short personalized messages.",
          "Lead with traction or insight, not a long story.",
          "Follow up consistently with concrete updates.",
        ],
      },
    ],
  },
  "viral-startup-launch-checklist": {
    title: "Viral Startup Launch Checklist",
    subtitle: "A launch checklist focused on momentum and distribution.",
    sections: [
      {
        heading: "Launch execution",
        body: [
          "Define your launch story, audience, and primary distribution channels.",
          "Prepare assets in advance: landing page, social snippets, and email sequence.",
          "Track day-1 metrics and iterate quickly in the first week.",
        ],
      },
    ],
  },
  "early-traction-metrics": {
    title: "Early Traction Metrics That Matter",
    subtitle: "Key startup metrics to track before and during early fundraising.",
    sections: [
      {
        heading: "Metrics investors look for",
        body: [
          "Acquisition efficiency, activation rate, retention, and early revenue quality.",
          "Trendlines matter more than snapshots—show week-over-week learning.",
        ],
      },
    ],
  },
  "customer-interview-script-framework": {
    title: "Customer Interview Script Framework",
    subtitle: "A practical interview structure to uncover real customer pain.",
    sections: [
      {
        heading: "Interview approach",
        body: [
          "Ask about current behavior and workarounds before pitching your idea.",
          "Capture exact language and repeated pain points across interviews.",
        ],
      },
    ],
  },
  "how-to-estimate-market-size": {
    title: "How to Estimate Market Size",
    subtitle: "Use a clear, defensible way to estimate TAM, SAM, and SOM.",
    sections: [
      {
        heading: "Sizing method",
        body: [
          "Start with realistic customer segments and explicit assumptions.",
          "Show bottom-up math and cite data sources for credibility.",
        ],
      },
    ],
  },
  "startup-competitive-analysis": {
    title: "Startup Competitive Analysis",
    subtitle: "Map competitors and sharpen your differentiation.",
    sections: [
      {
        heading: "Competitive positioning",
        body: [
          "Compare alternatives by target customer, pricing, and value proposition.",
          "Highlight your unique wedge and why it wins over existing options.",
        ],
      },
    ],
  },
  "how-to-calculate-cash-runway": {
    title: "How to Calculate Cash Runway",
    subtitle: "Track burn and runway so fundraising never becomes reactive.",
    sections: [
      {
        heading: "Runway basics",
        body: [
          "Runway = cash on hand divided by monthly net burn.",
          "Forecast multiple scenarios and monitor runway monthly.",
        ],
      },
    ],
  },
  "feature-prioritization-framework": {
    title: "Feature Prioritization Framework",
    subtitle: "Prioritize product work based on impact, effort, and strategy.",
    sections: [
      {
        heading: "Prioritization routine",
        body: [
          "Score features by customer value, strategic fit, and implementation cost.",
          "Re-prioritize continuously using real user feedback and outcomes.",
        ],
      },
    ],
  },
  "startup-data-room": {
    title: "Startup Data Room",
    subtitle: "Keep your due-diligence materials investor-ready at all times.",
    sections: [
      {
        heading: "Data room essentials",
        body: [
          "Organize legal docs, financials, cap table, traction, and product materials.",
          "Use consistent naming and versions so investors can review quickly.",
        ],
      },
    ],
  },
};

const ResourceGuide = () => {
  const { slug } = useParams();

  if (!slug || !guides[slug]) {
    return <Navigate to="/resources" replace />;
  }

  const guide = guides[slug];

  return (
    <>
      <Helmet>
        <title>{guide.title} | Foundterra Resources</title>
        <meta name="description" content={guide.subtitle} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-primary/5 to-background">
        <Header />
        <main className="flex-1">
          <section className="section-padding">
            <div className="container-max max-w-4xl">
              <div className="mb-8">
                <Button asChild variant="ghost" className="mb-4">
                  <Link to="/resources">← Back to Resources</Link>
                </Button>
                <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
                <p className="text-lg text-muted-foreground">{guide.subtitle}</p>
              </div>

              <div className="space-y-8">
                {guide.sections.map((section) => (
                  <article key={section.heading} className="bg-card rounded-xl border p-6">
                    <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
                    <div className="space-y-2">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-foreground/90 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              {guide.externalUrl && (
                <div className="mt-10">
                  <Button asChild size="lg" className="w-full md:w-auto">
                    <a href={guide.externalUrl} target="_blank" rel="noopener noreferrer">
                      {guide.externalLabel ?? "Open Resource"}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ResourceGuide;
