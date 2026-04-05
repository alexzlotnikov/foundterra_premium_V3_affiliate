import { useMemo, useState } from 'react';

const logoProviders = (domain: string, size: number) => [
  `https://logo.clearbit.com/${domain}?size=${size * 2}`,
  `https://icons.duckduckgo.com/ip3/${domain}.ico`,
  `https://www.google.com/s2/favicons?domain=${domain}&sz=${Math.max(32, size * 2)}`,
];

export function DealLogo({ domain, name, size = 40 }: { domain: string; name: string; size?: number }) {
  const [providerIndex, setProviderIndex] = useState(0);

  const sources = useMemo(() => (domain ? logoProviders(domain, size) : []), [domain, size]);

  if (!domain || providerIndex >= sources.length) {
    return (
      <div
        className="flex shrink-0 items-center justify-center rounded-xl font-bold text-white"
        style={{ width: size, height: size, background: stringToColor(name), fontSize: size * 0.38 }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={sources[providerIndex]}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="shrink-0 rounded-xl bg-white p-1 object-contain"
      onError={() => setProviderIndex((prev) => prev + 1)}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}

function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return `hsl(${Math.abs(hash) % 320}, 55%, 42%)`;
}
