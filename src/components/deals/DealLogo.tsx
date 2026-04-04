import { useState } from 'react';

export function DealLogo({ domain, name, size = 40 }: { domain: string; name: string; size?: number }) {
  const [error, setError] = useState(false);

  if (error || !domain) {
    return (
      <div
        className="rounded-xl flex items-center justify-center font-bold text-white shrink-0"
        style={{ width: size, height: size, background: stringToColor(name), fontSize: size * 0.38 }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}?size=${size * 2}`}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="rounded-xl object-contain bg-white p-1 shrink-0"
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}

function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return `hsl(${Math.abs(hash) % 320}, 55%, 42%)`;
}
