import { ArrowUpRight } from 'lucide-react';
import { Deal } from '@/lib/deals-data';
import { DealLogo } from './DealLogo';
import { DealBadge } from './DealBadge';

export function DealCard({ deal, isReplacement, replacesName }: { deal: Deal; isReplacement?: boolean; replacesName?: string }) {
  return (
    <a href={deal.link} target="_blank" rel="noreferrer" className="group block rounded-xl border border-[#252535] bg-[#111118] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#4A4A7A] hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)]">
      {isReplacement && <div className="mb-3 text-xs text-[#F4C430]">🔄 New Pick — replaces {replacesName}</div>}
      <div className="mb-4 flex items-center gap-3">
        <DealLogo domain={deal.domain} name={deal.company} />
        <div>
          <h3 className="text-lg font-semibold text-[#EEEEF8]">{deal.company}</h3>
          {deal.alternativeTo && <p className="text-xs text-[#9a9ab8]">Alt to {deal.alternativeTo}</p>}
        </div>
      </div>
      <div className="mb-3"><DealBadge text={deal.badge} category={deal.category} /></div>
      <p className="mb-4 text-sm text-[#b6b6d4]">{deal.description}</p>
      <div className="inline-flex items-center gap-1 text-sm font-medium text-[#aab0ff]">Open Deal <ArrowUpRight size={14} /></div>
    </a>
  );
}
