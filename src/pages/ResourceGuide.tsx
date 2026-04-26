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
        heading: "How to use this database",
        body: [
          "This is a large VC database intended for filtering by geography, stage, and sector.",
          "Build a focused fundraising pipeline by selecting investors that match your exact stage and vertical.",
        ],
      },
    ],
    externalUrl:
      "https://docs.google.com/spreadsheets/d/1urWSx_XvI4hEq72GRp-X2NS7fv_AJA0L9id7UmsLJUE/edit?usp=sharing",
    externalLabel: "Open 10K VC List",
  },
  "pre-seed-checklist": {
    title: "Pre-Seed Checklist",
    subtitle: "A practical checklist to prepare for your first fundraising round.",
    sections: [
      {
        heading: "Legal counsel and company formation",
        body: [
          "Engage legal counsel specializing in startups and form or transition to a Delaware C Corporation.",
          "Prepare core formation documents (certificate of incorporation, bylaws, and board consents).",
          "Transfer founder IP into the company and document founder equity with vesting and 83(b) handling when applicable.",
        ],
      },
      {
        heading: "Cap table and fundraising readiness",
        body: [
          "Keep a clean capitalization table and define a fair founder equity split.",
          "Set an option pool and standard vesting framework (commonly 4 years with a 1-year cliff).",
          "Plan your fundraising amount, timeline, and due-diligence readiness before outreach begins.",
        ],
      },
    ],
  },
  "startup-incorporation-guide": {
    title: "Startup Incorporation Guide",
    subtitle: "A founder-friendly overview for setting up your company correctly.",
    sections: [
      {
        heading: "Key incorporation takeaways",
        body: [
          "Delaware C-Corporations are generally preferred for venture-backed startups.",
          "Strong early planning prevents equity, IP, and legal disputes that slow fundraising.",
          "International founders can incorporate remotely using a registered agent and proper compliance setup.",
        ],
      },
      {
        heading: "Planning checklist",
        body: [
          "Review employment/IP constraints, align founder equity and vesting, and formalize founder contributions.",
          "Work with startup legal and tax advisors so your corporate structure is investor-ready from day one.",
        ],
      },
    ],
  },
  "how-to-cold-reach-investors": {
    title: "How to Cold Reach Investors",
    subtitle: "A simple outbound playbook for warm-quality cold outreach.",
    sections: [
      {
        heading: "Technical and research setup",
        body: [
          "Set up sending infrastructure correctly: domain warm-up and SPF/DKIM/DMARC authentication.",
          "Target only investors aligned with your stage and sector to avoid low-quality mass outreach.",
          "Use personalization and thesis alignment instead of generic blast emails.",
        ],
      },
      {
        heading: "Message construction",
        body: [
          "Treat the email like a trailer: your goal is to earn the meeting, not close by email.",
          "Keep messages concise (roughly 50–150 words), specific, and traction-led.",
          "Follow up with discipline and meaningful progress updates.",
        ],
      },
    ],
  },
  "viral-startup-launch-checklist": {
    title: "Viral Startup Launch Checklist",
    subtitle: "A launch checklist focused on momentum and distribution.",
    sections: [
      {
        heading: "Pre-launch preparation",
        body: [
          "Build a support circle across customers, peers, operators, and communities before launch day.",
          "Use a timed engagement cadence (first 5, 15, and 60 minutes) to accelerate early reach.",
          "Prepare assets in advance, including social proof snippets and alternate visual creatives.",
        ],
      },
      {
        heading: "Execution objective",
        body: [
          "Maximize visibility, collect feedback quickly, and compound traction through coordinated amplification.",
        ],
      },
    ],
  },
  "early-traction-metrics": {
    title: "Early Traction Metrics That Matter",
    subtitle: "Key startup metrics to track before and during early fundraising.",
    sections: [
      {
        heading: "Core revenue and growth metrics",
        body: [
          "Track MRR/ARR, growth rate, and clear month-over-month momentum.",
          "At pre-seed, early paid pilots and visible growth trend are often more important than absolute size.",
          "At seed, investors typically look for repeatable growth and improving efficiency.",
        ],
      },
      {
        heading: "Investor narrative",
        body: [
          "Present metrics with definitions, formulas, and context—not isolated numbers.",
          "Show what is improving, what is lagging, and what actions are driving metric movement.",
        ],
      },
    ],
  },
  "customer-interview-script-framework": {
    title: "Customer Interview Script Framework",
    subtitle: "A practical interview structure to uncover real customer pain.",
    sections: [
      {
        heading: "Interview flow",
        body: [
          "Open with context and rapport building before discussing product ideas.",
          "Focus on past behavior and specific recent incidents to discover real pain.",
          "Do not pitch during interviews; your goal is learning, not selling.",
        ],
      },
      {
        heading: "What to document",
        body: [
          "Capture exact customer language, frequency of pain, and current workaround costs.",
          "Use repeated patterns across interviews to prioritize product decisions.",
        ],
      },
    ],
  },
  "how-to-estimate-market-size": {
    title: "How to Estimate Market Size",
    subtitle: "Use a clear, defensible way to estimate TAM, SAM, and SOM.",
    sections: [
      {
        heading: "Bottom-up market sizing",
        body: [
          "Estimate market size from realistic customer counts multiplied by annual revenue per customer.",
          "Use bottom-up assumptions investors can validate and challenge.",
          "Present TAM and long-term revenue potential with transparent logic.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Investors need confidence that your target market can support venture-scale outcomes.",
          "Clear and ambitious sizing with explicit assumptions is stronger than over-complicated math.",
        ],
      },
    ],
  },
  "startup-competitive-analysis": {
    title: "Startup Competitive Analysis",
    subtitle: "Map competitors and sharpen your differentiation.",
    sections: [
      {
        heading: "Structured analysis process",
        body: [
          "Identify direct, indirect, and emerging competitors across your market.",
          "Collect data from websites, customer reviews, social channels, and industry sources.",
          "Use SWOT and product/pricing comparisons to identify gaps and strategic opportunities.",
        ],
      },
      {
        heading: "Decision outcomes",
        body: [
          "Translate analysis into clear positioning and messaging decisions.",
          "Continuously revisit competitor movement as market conditions evolve.",
        ],
      },
    ],
  },
  "how-to-calculate-cash-runway": {
    title: "How to Calculate Cash Runway",
    subtitle: "Track burn and runway so fundraising never becomes reactive.",
    sections: [
      {
        heading: "Formula and inputs",
        body: [
          "Cash runway is the number of months you can operate before cash runs out at current burn.",
          "Runway = current cash balance ÷ monthly net burn rate.",
          "Net burn is monthly cash expenses minus monthly cash sales.",
        ],
      },
      {
        heading: "How to use it",
        body: [
          "Track runway monthly and run downside scenarios so fundraising starts early, not late.",
          "Use runway visibility to make hiring, spend, and growth tradeoffs proactively.",
        ],
      },
    ],
  },
  "feature-prioritization-framework": {
    title: "Feature Prioritization Framework",
    subtitle: "Prioritize product work based on impact, effort, and strategy.",
    sections: [
      {
        heading: "MoSCoW method",
        body: [
          "Organize features into Must have, Should have, Could have, and Won't have.",
          "Use this framework to protect launch-critical scope and avoid roadmap sprawl.",
        ],
      },
      {
        heading: "Practical usage",
        body: [
          "Define business values and key risks before scoring feature priority.",
          "Review and re-prioritize continuously based on real user outcomes.",
        ],
      },
    ],
  },
  "startup-data-room": {
    title: "Startup Data Room",
    subtitle: "Keep your due-diligence materials investor-ready at all times.",
    sections: [
      {
        heading: "What a data room is",
        body: [
          "A data room is a secure digital space for investor due-diligence documents.",
          "Its purpose is to validate your deck claims, reduce friction, and build trust through transparency.",
        ],
      },
      {
        heading: "Core components",
        body: [
          "Include key materials across legal, financial, product, and traction categories.",
          "Maintain clear structure, version control, and up-to-date files so investors can review efficiently.",
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
