import { ArrowRight } from 'lucide-react';
import { Deal } from '@/lib/deals-data';

export function FoundterraCard({ deal }: { deal: Deal }) {
  return (
    <a href={deal.link} target="_blank" rel="noreferrer" className="block rounded-2xl border border-[#6366F1] bg-[linear-gradient(135deg,#1E1B4B_0%,#0F1A2E_100%)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)]">
      <div className="mb-3 text-xs font-semibold text-[#F4C430]">⭐ Foundterra Service</div>
      <h3 className="mb-2 text-2xl font-semibold text-white">{deal.id === 'foundterra-deck' ? 'Full Pitch Deck Package' : 'Pitch Deck Review'}</h3>
      <p className="mb-4 text-sm text-[#c9c9e9]">{deal.description}</p>
      {deal.discountCode && <div className="mb-3 inline-block rounded-md bg-[#111118] px-3 py-1 text-sm text-[#f6f3ff]">Use code {deal.discountCode} at checkout</div>}
      {deal.salePrice && (
        <div className="mb-4 flex items-center gap-2">
          <s className="text-sm text-[#9ca0c4]">${deal.originalPrice}</s>
          <span className="font-mono text-2xl font-bold text-[#F4C430]">${deal.salePrice}</span>
        </div>
      )}
      <div className="inline-flex items-center gap-2 rounded-md bg-[#2b2f92] px-4 py-2 text-sm font-semibold text-white">{deal.id === 'foundterra-deck' ? 'Get 10% Off My Deck' : 'Book My $100 Review'} <ArrowRight size={15} /></div>
    </a>
  );
}
