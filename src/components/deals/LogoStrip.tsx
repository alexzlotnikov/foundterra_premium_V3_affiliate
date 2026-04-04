import { DEALS } from '@/lib/deals-data';
import { DealLogo } from './DealLogo';

const logos = DEALS.filter((d) => d.category !== 'foundterra').slice(0, 20);

export function LogoStrip() {
  return (
    <div className="overflow-hidden border-y border-[#252535] py-4">
      <div className="flex animate-[scroll_28s_linear_infinite] gap-8 whitespace-nowrap" style={{ width: 'max-content' }}>
        {[...logos, ...logos].map((deal, i) => (
          <div key={`${deal.id}-${i}`} className="flex items-center gap-2 opacity-80">
            <DealLogo domain={deal.domain} name={deal.company} size={28} />
            <span className="text-xs text-[#a7a7c9]">{deal.company}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
