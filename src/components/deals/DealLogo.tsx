import { useEffect, useMemo, useState } from 'react';

const providerList = (domain: string, size: number) => [
  `https://logo.clearbit.com/${domain}?size=${size * 2}`,
  `https://icons.duckduckgo.com/ip3/${domain}.ico`,
  `https://www.google.com/s2/favicons?domain=${domain}&sz=${Math.max(32, size * 2)}`,
  `https://unavatar.io/${domain}`,
];

const cacheKey = (domain: string) => `deal-logo-provider:${domain}`;

export function DealLogo({ domain, name, size = 40 }: { domain: string; name: string; size?: number }) {
  const safeDomain = domain || 'foundterra.com';
  const sources = useMemo(() => providerList(safeDomain, size), [safeDomain, size]);
  const [providerIndex, setProviderIndex] = useState(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem(cacheKey(safeDomain)) ?? '0');
    setProviderIndex(Number.isNaN(saved) ? 0 : Math.min(saved, sources.length - 1));
  }, [safeDomain, sources.length]);

  const handleSuccess = () => {
    localStorage.setItem(cacheKey(safeDomain), String(providerIndex));
  };

  const handleError = () => {
    const next = Math.min(providerIndex + 1, sources.length - 1);
    setProviderIndex(next);
    localStorage.setItem(cacheKey(safeDomain), String(next));
  };

  return (
    <img
      src={sources[providerIndex]}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="shrink-0 rounded-xl bg-white p-1 object-contain"
      onLoad={handleSuccess}
      onError={handleError}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}
