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
        heading: "I. Legal Counsel & Company Formation",
        body: [
          "Engage legal counsel specializing in start-ups.",
          "Form (or transition to) a Delaware C Corporation.",
          "Prepare and gather company formation documents.",
          "- [ ] Certificate of Incorporation",
          "- [ ] Bylaws",
          "- [ ] Board Consents",
          "Prepare paperwork to transfer founder IP to the company.",
          "Document founder equity stakes and vesting schedules.",
          "File an 83(b) election with the IRS (if applicable).",
        ],
      },
      {
        heading: "II. Capitalization Table & Equity Structure",
        body: [
          "Set up a clean Cap Table (accurate ownership record).",
          "Establish a fair equity split among founders.",
          "Create an Equity Incentive Plan (e.g., option pool) for team/advisors.",
          "Implement 4-year vesting with a 1-year cliff for all contributors.",
          "Ensure shares have transfer restrictions and Right of First Refusal (ROFR).",
        ],
      },
      {
        heading: "III. Fundraising Strategy & Due Diligence",
        body: [
          "Define fundraising plan.",
          "- [ ] Target amount",
          "- [ ] Use of funds",
          "- [ ] Instrument (SAFE / Note / Priced Round)",
          "Use market-standard docs (e.g., Y Combinator SAFE).",
          "Avoid investors requesting off-market or complex terms.",
          "Confirm all investors are Accredited Investors.",
          "Organize all company records & legal documents for diligence.",
          "Resolve open items (e.g., pre-round advisor grants) before fundraising.",
        ],
      },
      {
        heading: "IV. Agreements with Service Providers",
        body: [
          "Ensure every employee, advisor, and consultant signs written agreements.",
          "Use Non-Disclosure & Invention Assignment Agreements (NDIAA) for employees.",
          "Include work-made-for-hire and IP assignment clauses.",
          "Add indemnification clauses confirming originality of work.",
          "Control and document open-source software usage in products.",
        ],
      },
      {
        heading: "V. Intellectual Property (IP) Protection",
        body: [
          "Register copyrights for key materials (software, content, etc.).",
          "Use proper ©, ™, and ® notices on all assets.",
          "Secure rights of publicity / model releases for any individual’s likeness.",
          "Designate a DMCA agent and implement a takedown policy (if applicable).",
        ],
      },
      {
        heading: "VI. Privacy Policy & Terms of Use",
        body: [
          "Draft custom Privacy Policy and Terms of Use (don’t copy others!).",
          "Privacy Policy: Describe data collection, use, and sharing clearly.",
          "Privacy Policy: Include opt-out mechanism and data security practices.",
          "Terms of Use: Define permissible use, warranties, liability limits, governing law.",
          "Terms of Use: Clarify ownership and license rights for user-generated content.",
        ],
      },
    ],
  },
  "startup-incorporation-guide": {
    title: "Startup Incorporation Guide",
    subtitle: "A founder-friendly overview for setting up your company correctly.",
    sections: [
      {
        heading: "Key Takeaways",
        body: [
          "Delaware C-Corporations are preferred for startups seeking venture capital.",
          "Early planning ensures equity clarity, IP protection, and fundraising readiness.",
          "International founders can incorporate remotely with a registered agent and virtual mailbox.",
          "Corporate hygiene matters: cap table discipline, annual reports, and compliance reduce legal risk.",
        ],
      },
      {
        heading: "1) Planning",
        body: [
          "Review employment contracts to ensure startup IP does not conflict with employer obligations.",
          "Consult startup legal and tax advisors before incorporation decisions.",
          "Align founder equity splits, vesting schedules, and founder contribution terms early.",
          "Sign releases for \"lost founders\" so no one can later claim equity from minimal past involvement.",
          "Choose entity type deliberately (Delaware C-Corp is generally the investor-preferred path).",
        ],
      },
    ],
  },
  "how-to-cold-reach-investors": {
    title: "How to Cold Reach Investors",
    subtitle: "A simple outbound playbook for warm-quality cold outreach.",
    sections: [
      {
        heading: "Phase 1: Technical & Research Setup",
        body: [
          "Industry-average cold reply rates are around 1%, but disciplined execution can materially improve them.",
          "Use a secondary outreach domain and complete a proper warm-up period before sending at scale.",
          "Configure SPF, DKIM, and DMARC; without authentication your emails often fail delivery.",
          "Target investors only where stage and thesis fit is real; generic mass outreach gets blacklisted.",
        ],
      },
      {
        heading: "Phase 2: Construction Rules",
        body: [
          "Treat outreach like a movie trailer: your goal is to earn the meeting, not close by email.",
          "Keep emails short (about 50–150 words), mobile-friendly, and signal-heavy.",
          "Use trajectory lines (e.g., growth metrics) rather than vague claims.",
          "Use low-friction CTAs (brief chat or permission to send deck), and avoid NDA asks in cold outreach.",
        ],
      },
    ],
  },
  "viral-startup-launch-checklist": {
    title: "Viral Startup Launch Checklist",
    subtitle: "A launch checklist focused on momentum and distribution.",
    sections: [
      {
        heading: "I. Pre-Launch Preparation",
        body: [
          "Objective: maximize visibility, accelerate feedback loops, and compound early traction through coordinated networks.",
          "Build a support circle (customers, operators, investors, peers, friends) before launch day.",
          "Use engagement tiers: first 5 minutes, first 15 minutes, and first hour.",
          "Pre-bake launch assets: social-proof screenshots, alternate thumbnails, objection replies, and supporter blurbs.",
        ],
      },
      {
        heading: "II. Launch Execution Playbook",
        body: [
          "Treat the first launch hours as a compounding window; speed and coordination determine reach.",
          "Choose a clear archetype: cinematic announcement + lead magnet, or lead-magnet-first value delivery.",
          "Pre-seed engagement and respond rapidly so momentum is sustained in public channels.",
        ],
      },
    ],
  },
  "early-traction-metrics": {
    title: "Early Traction Metrics That Matter",
    subtitle: "Key startup metrics to track before and during early fundraising.",
    sections: [
      {
        heading: "1) Core Revenue & Growth Metrics",
        body: [
          "Track MRR and ARR with explicit formulas and definitions.",
          "Track month-over-month growth rate and show consistent momentum lines.",
          "Pre-seed: early paid pilots and trend visibility can be enough.",
          "Seed: repeatable revenue and sustained acceleration are expected.",
        ],
      },
      {
        heading: "2) Customer Metrics & Unit Economics",
        body: [
          "Track CAC and acquisition efficiency by channel.",
          "Show realistic payback expectations and healthy LTV:CAC trajectory over time.",
          "Use metrics context: what changed, why it changed, and what action you took.",
        ],
      },
    ],
  },
  "customer-interview-script-framework": {
    title: "Customer Interview Script Framework",
    subtitle: "A practical interview structure to uncover real customer pain.",
    sections: [
      {
        heading: "1) Opening & Context (2–3 min)",
        body: [
          "Build rapport, set expectations, and explain you are learning—not selling.",
          "Capture role context and daily workflow before moving into pain discovery.",
          "Do not pitch your product during the opening.",
        ],
      },
      {
        heading: "2) Discovery, Current Solutions, and Value",
        body: [
          "Focus on specific past incidents (not hypotheticals) to uncover real pain.",
          "Ask how they currently solve it, which tools they use, and where frustration is highest.",
          "Quantify impact: time, money, business risk, and priority level.",
          "Document exact user language and recurring patterns to guide prioritization.",
        ],
      },
    ],
  },
  "how-to-estimate-market-size": {
    title: "How to Estimate Market Size",
    subtitle: "Use a clear, defensible way to estimate TAM, SAM, and SOM.",
    sections: [
      {
        heading: "Key Takeaways",
        body: [
          "Big companies are built in big markets; investors test this early.",
          "Use bottom-up sizing: number of customers × annual revenue per customer.",
          "Show TAM plus realistic 5+ year revenue projections grounded in assumptions.",
        ],
      },
      {
        heading: "How to Estimate Market Size",
        body: [
          "Identify target customers, estimate annual value per customer, then multiply.",
          "Keep assumptions simple and explicit; complexity does not add early credibility.",
          "Use incremental market expansion logic and explain why your segment is compelling.",
          "Present both current market opportunity and future market growth where relevant.",
        ],
      },
    ],
  },
  "startup-competitive-analysis": {
    title: "Startup Competitive Analysis",
    subtitle: "Map competitors and sharpen your differentiation.",
    sections: [
      {
        heading: "Why Competitive Analysis Matters",
        body: [
          "Competitive analysis reveals strengths, weaknesses, and strategic gaps in your market.",
          "Without structured analysis, startup differentiation and go-to-market choices become weaker.",
        ],
      },
      {
        heading: "Steps to Conduct Analysis",
        body: [
          "Identify direct, indirect, and emerging competitors.",
          "Gather data from websites, reviews, social channels, and industry sources.",
          "Run SWOT and compare product, pricing, and positioning.",
          "Evaluate marketing/sales strategy and available financial signals.",
          "Convert findings into actionable positioning and strategic decisions.",
        ],
      },
    ],
  },
  "how-to-calculate-cash-runway": {
    title: "How to Calculate Cash Runway",
    subtitle: "Track burn and runway so fundraising never becomes reactive.",
    sections: [
      {
        heading: "What is Cash Runway",
        body: [
          "Cash runway is how many months a startup can operate before running out of cash.",
          "It is essential for timing fundraising and planning spending decisions.",
          "Early-stage teams usually calculate runway against current burn assumptions.",
        ],
      },
      {
        heading: "Formula, Example, and Benchmarks",
        body: [
          "Formula: runway = current cash balance ÷ monthly net burn.",
          "Gross burn = monthly expenses; net burn = monthly expenses − monthly cash sales.",
          "Example from the source: $250k cash and $70k net burn gives ~3.6 months of runway.",
          "Typical target runway is 6–12 months, with some teams aiming for 12–18 months in uncertain markets.",
          "Extend runway through cost control, hiring pauses, faster collections, and vendor renegotiation.",
        ],
      },
    ],
  },
  "feature-prioritization-framework": {
    title: "Feature Prioritization Framework",
    subtitle: "Prioritize product work based on impact, effort, and strategy.",
    sections: [
      {
        heading: "MoSCoW Method",
        body: [
          "Classify work into Must have, Should have, Could have, and Won't have.",
          "Use it to protect launch-critical scope and reduce roadmap sprawl.",
          "Define core business values and project risks before assigning categories.",
        ],
      },
      {
        heading: "Kano & RICE Extensions",
        body: [
          "Kano helps classify features as Basic, Performance, Delighters, Indifferent, or Reverse.",
          "RICE provides quantitative scoring using reach, impact, confidence, and effort.",
          "Review priorities continuously as customer expectations and product context evolve.",
        ],
      },
    ],
  },
  "startup-data-room": {
    title: "Startup Data Room",
    subtitle: "Keep your due-diligence materials investor-ready at all times.",
    sections: [
      {
        heading: "What Is a Data Room",
        body: [
          "A data room is a secure digital space where investors review diligence materials.",
          "It validates pitch claims, demonstrates discipline, speeds diligence, and builds trust.",
          "A strong data room does not just store files—it tells your company story with credibility.",
        ],
      },
      {
        heading: "Core Components Investors Expect",
        body: [
          "Pitch deck (latest version aligned with your narrative).",
          "Cap table (founders, ESOP, SAFEs/notes, options/warrants).",
          "Financials (historical P&L, burn/runway, and revenue breakdowns).",
          "Maintain clean structure, naming, and version control so reviews move quickly.",
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
