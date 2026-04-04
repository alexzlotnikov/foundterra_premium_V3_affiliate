import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DEALS, Deal } from '@/lib/deals-data';
import { HeroCounter } from '@/components/deals/HeroCounter';
import { LogoStrip } from '@/components/deals/LogoStrip';
import { DealCard } from '@/components/deals/DealCard';
import { FoundterraCard } from '@/components/deals/FoundterraCard';
import { useAppSumoDeals } from '@/hooks/useAppSumoDeals';
import { DealExpiredCard } from '@/components/deals/DealExpiredCard';

const credits = DEALS.filter((d) => d.category === 'credits');
const partners = DEALS.filter((d) => d.category === 'partner');
const alternatives = DEALS.filter((d) => d.category === 'alternative');
const foundterraDeck = DEALS.find((d) => d.id === 'foundterra-deck')!;
const foundterraReview = DEALS.find((d) => d.id === 'foundterra-review')!;

function AlternativeCard({ deal, slotIndex }: { deal: Deal; slotIndex: number }) {
  const { isDealActive, getLiveLink, getReplacement } = useAppSumoDeals();

  if (deal.source !== 'appsumo') return <DealCard deal={deal} />;

  if (isDealActive(deal.id)) return <DealCard deal={{ ...deal, link: getLiveLink(deal.id, deal.link) }} />;

  const replacement = getReplacement(slotIndex);

  return (
    <div className="space-y-3">
      <DealExpiredCard deal={deal} />
      {replacement && (
        <DealCard deal={{ id: `replacement-${slotIndex}`, company: replacement.name, domain: '', badge: replacement.badge, description: replacement.description, link: replacement.link, category: 'alternative', source: 'appsumo', alternativeTo: deal.alternativeTo }} isReplacement replacesName={deal.company} />
      )}
    </div>
  );
}

const sectionClass = 'container-max py-16';

const StartupDeals = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Free Startup Deals 2025 — $600K+ in Credits | Foundterra</title>
        <meta name="description" content="Cloud credits, SaaS discounts, and AppSumo lifetime deals curated for founders." />
      </Helmet>
      <Header />
      <main className="pt-24">
        <section className="container-max py-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.15em] text-[#9fa3d9]">Curated by Foundterra — Pitch Deck & Fundraising Experts</p>
          <h1 className="mx-auto mb-4 max-w-4xl text-5xl font-semibold text-[#EEEEF8]">$600,000+ in free tools & credits for your startup</h1>
          <p className="mx-auto mb-8 max-w-2xl text-[#b8b8d7]">The same deals we share with every client on our strategy calls — now public and free for every founder.</p>
          <div className="mb-8"><HeroCounter /></div>
          <div className="flex justify-center gap-3">
            <a href="#deals-start" className="rounded-md bg-[#6366F1] px-5 py-3 text-sm font-semibold text-white">Browse All Deals ↓</a>
            <a href="https://www.foundterra.com/pitch-review?utm_source=deals-page&utm_medium=hero&offer=review100" className="rounded-md border border-[#34345a] px-5 py-3 text-sm font-semibold text-[#d8d8f4]">Get My Deck Reviewed — $100</a>
          </div>
        </section>

        <LogoStrip />

        <section id="deals-start" className={sectionClass}>
          <h2 className="mb-2 text-3xl font-semibold text-[#EEEEF8]">$760K+ in Cloud Credits</h2>
          <p className="mb-8 text-[#a4a8cb]">The infrastructure bills that kill early startups — eliminated.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{credits.map((deal) => <DealCard key={deal.id} deal={deal} />)}</div>
        </section>

        <section className={sectionClass}><FoundterraCard deal={foundterraDeck} /></section>

        <section className={sectionClass}>
          <h2 className="mb-2 text-3xl font-semibold text-[#EEEEF8]">Premium Tools at Founder Prices</h2>
          <p className="mb-8 text-[#a4a8cb]">Discounts on the exact SaaS stack investors expect to see in your deck.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{partners.map((deal) => <DealCard key={deal.id} deal={deal} />)}</div>
        </section>

        <section className={sectionClass}>
          <h2 className="mb-2 text-3xl font-semibold text-[#EEEEF8]">Pay Once. Own It Forever.</h2>
          <p className="mb-8 text-[#a4a8cb]">AppSumo lifetime deals that replace expensive monthly subscriptions.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{alternatives.map((deal, index) => <AlternativeCard key={deal.id} deal={deal} slotIndex={index} />)}</div>
        </section>

        <section className={sectionClass}><FoundterraCard deal={foundterraReview} /></section>

        <section className="container-max pb-20 pt-8 text-center">
          <h2 className="mb-3 text-4xl font-semibold text-[#EEEEF8]">Your stack is ready. Now build the deck.</h2>
          <p className="mx-auto mb-6 max-w-2xl text-[#b8b8d7]">You've got $600K in credits. You've got the tools. The last piece is the story that gets you funded.</p>
          <div className="flex justify-center gap-3">
            <a href="/pitch-review" className="rounded-md bg-[#6366F1] px-5 py-3 text-sm font-semibold text-white">→ Start with a Free Deck Review</a>
            <a href="/paid-consultation" className="rounded-md border border-[#34345a] px-5 py-3 text-sm font-semibold text-[#d8d8f4]">→ Book a Strategy Call</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StartupDeals;
