import type { VercelRequest, VercelResponse } from '@vercel/node';

const IMPACT_BASE = 'https://api.impact.com/Mediapartners';
const APPSUMO_FALLBACK_LINK = 'https://appsumo.8odi.net/ennYgj';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 1 day

interface ImpactAd {
  Id: string;
  Name: string;
  Description?: string;
  TrackingLink?: string;
  ImageUrl?: string;
  AdvertiserName?: string;
}

interface StatusEntry {
  isActive: boolean;
  liveLink: string | null;
  liveBadge: string | null;
}

const yourDeals = [
  { id: 'tinycommand', company: 'Tiny Command', slug: 'tinycommand' },
  { id: 'tidycal', company: 'TidyCal', slug: 'tidycal' },
  { id: 'sendfox', company: 'SendFox', slug: 'sendfox' },
  { id: 'sendpilot', company: 'Sendpilot', slug: 'sendpilot' },
  { id: 'breezedoc', company: 'BreezeDoc', slug: 'breezedoc' },
  { id: 'writecream', company: 'Writecream', slug: 'writecream' },
  { id: 'kingsumo', company: 'KingSumo', slug: 'kingsumo' },
  { id: 'clickrank', company: 'ClickRank', slug: 'clickrank' },
];

let cache: { payload: unknown; expiresAt: number } | null = null;

function extractBadge(name: string, description: string): string {
  const text = `${name} ${description}`;
  const ltd = text.match(/\$[\d,]+\s*(Lifetime Deal|LTD)/i);
  if (ltd) return ltd[0];
  const off = text.match(/\d+%\s*[Oo]ff/);
  if (off) return off[0];
  const price = text.match(/\$[\d,]+/);
  if (price) return `${price[0]} Deal`;
  return 'Special Deal';
}

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  if (cache && Date.now() < cache.expiresAt) return res.status(200).json(cache.payload);

  const ACCOUNT_SID = process.env.IMPACT_API_ACCOUNT_SID || process.env.ACCOUNT_SID;
  const AUTH_TOKEN = process.env.IMPACT_API_AUTH_TOKEN || process.env.AUTH_TOKEN;

  if (!ACCOUNT_SID || !AUTH_TOKEN) {
    const fallback = { statusMap: {}, replacementCandidates: [], fallback: true, updatedAt: new Date().toISOString() };
    cache = { payload: fallback, expiresAt: Date.now() + CACHE_TTL_MS };
    return res.status(200).json(fallback);
  }

  try {
    const credentials = Buffer.from(`${ACCOUNT_SID}:${AUTH_TOKEN}`).toString('base64');
    const response = await fetch(`${IMPACT_BASE}/${ACCOUNT_SID}/Ads?PageSize=200&Status=ACTIVE`, {
      headers: { Authorization: `Basic ${credentials}`, Accept: 'application/json' },
    });

    if (!response.ok) throw new Error(`Impact API: ${response.status}`);

    const data = (await response.json()) as { Ads?: ImpactAd[] };
    const allAds = data.Ads ?? [];

    const appsumoAds = allAds.filter(
      (ad) =>
        ad.AdvertiserName?.toLowerCase().includes('appsumo') ||
        ad.TrackingLink?.includes('appsumo') ||
        ad.TrackingLink?.includes('8odi.net')
    );

    const statusMap: Record<string, StatusEntry> = {};
    for (const deal of yourDeals) {
      const match = appsumoAds.find((ad) => {
        const n = ad.Name?.toLowerCase() ?? '';
        return n.includes(deal.company.toLowerCase()) || n.includes(deal.slug);
      });

      statusMap[deal.id] = {
        isActive: !!match,
        liveLink: match?.TrackingLink ?? APPSUMO_FALLBACK_LINK,
        liveBadge: match ? extractBadge(match.Name ?? '', match.Description ?? '') : null,
      };
    }

    const trackedNames = new Set(yourDeals.map((d) => d.company.toLowerCase()));
    const replacementCandidates = appsumoAds
      .filter((ad) => {
        const name = ad.Name?.toLowerCase() ?? '';
        return !Array.from(trackedNames).some((n) => name.includes(n));
      })
      .slice(0, 20)
      .map((ad) => ({
        name: ad.Name ?? 'New AppSumo Deal',
        description: ad.Description ?? '',
        link: ad.TrackingLink ?? APPSUMO_FALLBACK_LINK,
        badge: extractBadge(ad.Name ?? '', ad.Description ?? ''),
        imageUrl: ad.ImageUrl ?? null,
      }));

    const payload = { statusMap, replacementCandidates, updatedAt: new Date().toISOString() };
    cache = { payload, expiresAt: Date.now() + CACHE_TTL_MS };
    return res.status(200).json(payload);
  } catch {
    const fallback = { statusMap: {}, replacementCandidates: [], fallback: true, updatedAt: new Date().toISOString() };
    cache = { payload: fallback, expiresAt: Date.now() + CACHE_TTL_MS };
    return res.status(200).json(fallback);
  }
}
