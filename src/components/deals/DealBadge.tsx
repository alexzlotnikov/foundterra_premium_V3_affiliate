import { DealCategory } from '@/lib/deals-data';

const colorMap: Record<DealCategory | 'expired', string> = {
  credits: 'bg-[#052E1C] text-[#10D9A0]',
  partner: 'bg-[#1E1B4B] text-[#818CF8]',
  alternative: 'bg-[#3A2A05] text-[#F4C430]',
  foundterra: 'bg-[#3A2A05] text-[#F4C430]',
  expired: 'bg-[rgba(244,63,94,0.15)] text-[#F43F5E]',
};

export function DealBadge({ text, category, expired = false }: { text: string; category: DealCategory; expired?: boolean }) {
  const klass = expired ? colorMap.expired : colorMap[category];
  return <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${klass}`}>{text}</span>;
}
