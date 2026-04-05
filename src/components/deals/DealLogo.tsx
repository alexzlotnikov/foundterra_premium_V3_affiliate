import { useMemo, useState } from 'react';

const logoProviders = (domain: string, size: number) => [
  `https://unavatar.io/${domain}`,
  `https://www.google.com/s2/favicons?domain=${domain}&sz=${Math.max(32, size * 2)}`,
  `https://logo.clearbit.com/${domain}?size=${size * 2}`,
  '/favicon.ico',
];

export function DealLogo({ domain, name, size = 40 }: { domain: string; name: string; size?: number }) {
  const [providerIndex, setProviderIndex] = useState(0);
  const sources = useMemo(() => logoProviders(domain || 'foundterra.com', size), [domain, size]);

  return (
    <img
      src={sources[Math.min(providerIndex, sources.length - 1)]}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="shrink-0 rounded-xl bg-white p-1 object-contain"
      onError={() => setProviderIndex((prev) => Math.min(prev + 1, sources.length - 1))}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}
