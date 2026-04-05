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
import { useLanguage } from '@/hooks/useLanguage';

const credits = DEALS.filter((d) => d.category === 'credits');
const partners = DEALS.filter((d) => d.category === 'partner');
const alternatives = DEALS.filter((d) => d.category === 'alternative');
const foundterraDeck = DEALS.find((d) => d.id === 'foundterra-deck')!;

const advisorReplacement: Deal = {
  id: 'foundterra-advisor-replacement',
  company: 'Foundterra',
  domain: 'foundterra.com',
  badge: '$100 Premium Review',
  description: 'Get a high-conviction investor-style pitch review with clear fixes, priorities, and funding narrative guidance.',
  link: '/paid-consultation',
  category: 'alternative',
  source: 'direct',
  alternativeTo: 'Advisor',
};

const copy = {
  en: {
    eyebrow: 'Curated by Foundterra — Premium Fundraising Advisory',
    titleStart: 'Save time, save burn, and unlock',
    titleHighlight: '$600,000+',
    titleEnd: 'in founder value',
    subtitle: 'Elite startup credits and tool discounts used by high-performing founders before and during fundraising.',
    browse: 'Browse All Deals ↓',
    review: 'Get My Deck Reviewed — $100',
    cloudTitle: '$760K+ in Cloud Credits',
    cloudBody: 'Reduce runway burn with premium infrastructure credits founders can claim now.',
    partnersTitle: 'Premium Tools at Founder Prices',
    partnersBody: 'Top-tier software offers curated for growth, product velocity, and investor readiness.',
    altTitle: 'Lean Replacements That Protect Cash Flow',
    altBody: 'Live alternatives and lifetime offers to cut recurring software costs.',
    finalTitle: 'Your stack is ready. Now build the investor story.',
    finalBody: 'You have the tools. Now get the narrative, positioning, and strategy investors fund.',
    finalCta: 'Book a Strategy Call',
  },
  he: {
    eyebrow: 'נבחר בקפידה על ידי Foundterra — ייעוץ גיוס פרימיום',
    titleStart: 'חסכו זמן, חסכו שריפת מזומנים, וקבלו',
    titleHighlight: '$600,000+',
    titleEnd: 'בערך אמיתי ליזמים',
    subtitle: 'קרדיטים והנחות לכלי סטארטאפ ברמה גבוהה, לפני ובמהלך גיוס.',
    browse: 'צפו בכל הדילים ↓',
    review: 'ביקורת דק ב-$100',
    cloudTitle: 'יותר מ-$760K בקרדיטי ענן',
    cloudBody: 'הקטינו עלויות תשתית והאריכו מסלול עם קרדיטים משמעותיים.',
    partnersTitle: 'כלי פרימיום במחירי יזמים',
    partnersBody: 'הטבות לתוכנות מובילות לצמיחה, מוצר והיערכות למשקיעים.',
    altTitle: 'אלטרנטיבות חכמות ששומרות על התזרים',
    altBody: 'הצעות חלופיות ודילים לכל החיים שמחליפים מנויים חודשיים יקרים.',
    finalTitle: 'הסטאק מוכן. עכשיו בונים סיפור שמשקיעים מממנים.',
    finalBody: 'יש לכם את הכלים. עכשיו צריך נרטיב, מיצוב ואסטרטגיה שמביאים השקעה.',
    finalCta: 'Book a Strategy Call',
  },
} as const;

function AlternativeCard({ deal, slotIndex }: { deal: Deal; slotIndex: number }) {
  const { isDealActive, getLiveLink, getReplacement } = useAppSumoDeals();

  if (deal.source !== 'appsumo') return <DealCard deal={deal} />;

  if (isDealActive(deal.id)) return <DealCard deal={{ ...deal, link: getLiveLink(deal.id, deal.link) }} />;

  const replacement = getReplacement(slotIndex);

  return (
    <div className="space-y-3">
      <DealExpiredCard deal={deal} />
      {replacement && (
        <DealCard
          deal={{
            id: `replacement-${slotIndex}`,
            company: replacement.name,
            domain: '',
            badge: replacement.badge,
            description: replacement.description,
            link: replacement.link,
            category: 'alternative',
            source: 'appsumo',
            alternativeTo: deal.alternativeTo,
          }}
          isReplacement
          replacesName={deal.company}
        />
      )}
    </div>
  );
}

const sectionClass = 'container-max py-12 text-center sm:py-16';

const StartupDeals = () => {
  const { language } = useLanguage();
  const isHebrew = language === 'he';
  const t = copy[isHebrew ? 'he' : 'en'];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>
      <Helmet>
        <title>Free Startup Deals 2025 — $600K+ in Credits | Foundterra</title>
        <meta name="description" content="Cloud credits, SaaS discounts, and AppSumo lifetime deals curated for founders." />
      </Helmet>
      <Header />
      <main className="pt-20 sm:pt-24" dir={isHebrew ? 'rtl' : 'ltr'}>
        <section className="container-max py-12 text-center sm:py-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.17em] text-[#9fa3d9] sm:text-xs">{t.eyebrow}</p>
          <h1 style={{ fontFamily: 'var(--font-body)', fontWeight: 800 }} className="mx-auto mb-4 max-w-5xl text-3xl leading-tight text-[#EEEEF8] sm:text-5xl">
            {t.titleStart}{' '}
            <span className="inline-block rounded-xl bg-gradient-to-r from-[#14d9a2] to-[#5ff4ca] px-3 py-1 text-[#05251b]" dir="ltr">
              {t.titleHighlight}
            </span>{' '}
            {t.titleEnd}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-sm text-[#b8b8d7] sm:text-base">{t.subtitle}</p>
          <div className="mb-3"><HeroCounter /></div>
          <div className="mx-auto mb-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-[#2f2f52] bg-[#111125] px-4 py-3 text-sm text-[#d4d6f3]" dir="ltr">40+ Curated Deals</div>
            <div className="rounded-lg border border-[#2f2f52] bg-[#111125] px-4 py-3 text-sm text-[#d4d6f3]" dir="ltr">$600K+ Potential Value</div>
            <div className="rounded-lg border border-[#2f2f52] bg-[#111125] px-4 py-3 text-sm text-[#d4d6f3]">Founder-Ready</div>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#deals-start" className="rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8a5cf6] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_40px_rgba(99,102,241,0.35)]">{t.browse}</a>
            <a href="/paid-consultation" className="rounded-lg border border-[#3f3f6d] bg-[#17172a] px-5 py-3 text-sm font-semibold text-[#e4e4ff]" dir="ltr">{t.review}</a>
          </div>
        </section>

        <LogoStrip />

        <section id="deals-start" className={sectionClass}>
          <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 800 }} className="mb-2 text-2xl text-[#EEEEF8] sm:text-3xl">{t.cloudTitle}</h2>
          <p className="mb-8 text-sm text-[#a4a8cb] sm:text-base">{t.cloudBody}</p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{credits.map((deal) => <DealCard key={deal.id} deal={deal} />)}</div>
        </section>

        <section className={sectionClass}><FoundterraCard deal={foundterraDeck} /></section>

        <section className={sectionClass}>
          <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 800 }} className="mb-2 text-2xl text-[#EEEEF8] sm:text-3xl">{t.partnersTitle}</h2>
          <p className="mb-8 text-sm text-[#a4a8cb] sm:text-base">{t.partnersBody}</p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{partners.map((deal) => <DealCard key={deal.id} deal={deal} />)}</div>
        </section>

        <section className={sectionClass}>
          <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 800 }} className="mb-2 text-2xl text-[#EEEEF8] sm:text-3xl">{t.altTitle}</h2>
          <p className="mb-8 text-sm text-[#a4a8cb] sm:text-base">{t.altBody}</p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{alternatives.map((deal, index) => <AlternativeCard key={deal.id} deal={deal} slotIndex={index} />)}</div>
          <div className="mx-auto mt-6 max-w-md">
            <DealCard deal={advisorReplacement} isReplacement replacesName="Advisor" />
          </div>
        </section>

        <section className="container-max pb-16 pt-4 text-center sm:pb-20 sm:pt-8">
          <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 800 }} className="mb-3 text-2xl text-[#EEEEF8] sm:text-4xl">{t.finalTitle}</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-[#b8b8d7] sm:text-base">{t.finalBody}</p>
          <div className="flex justify-center">
            <a href="/paid-consultation" className="rounded-lg bg-[#6366F1] px-6 py-3 text-sm font-semibold text-white" dir="ltr">{t.finalCta}</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StartupDeals;
