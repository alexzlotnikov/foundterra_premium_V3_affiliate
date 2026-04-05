import type { VercelRequest, VercelResponse } from '@vercel/node';

const IMPACT_BASE = 'https://api.impact.com/Mediapartners';
const APPSUMO_FALLBACK_LINK = 'https://appsumo.8odi.net/ennYgj';

interface ImpactAd {
  Id: string;
  Name: string;
  Description?: string;
  TrackingLink?: string;
  ImageUrl?: string;
  AdvertiserName?: string;
}

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
  const ACCOUNT_SID = process.env.IMPACT_API_ACCOUNT_SID || process.env.ACCOUNT_SID;
  const AUTH_TOKEN = process.env.IMPACT_API_AUTH_TOKEN || process.env.AUTH_TOKEN;

  if (!ACCOUNT_SID || !AUTH_TOKEN) {
    return res.status(200).json({ statusMap: {}, replacementCandidates: [], fallback: true, updatedAt: new Date().toISOString() });
  }

  try {
    const credentials = Buffer.from(`${ACCOUNT_SID}:${AUTH_TOKEN}`).toString('base64');
    const response = await fetch(`${IMPACT_BASE}/${ACCOUNT_SID}/Ads?PageSize=200&Status=ACTIVE`, {
      headers: { Authorization: `Basic ${credentials}`, Accept: 'application/json' },
    });

    if (!response.ok) throw new Error(`Impact API: ${response.status}`);

    const data = await response.json() as { Ads?: ImpactAd[] };
    const allAds = data.Ads ?? [];
    const appsumoAds = allAds.filter((ad) => ad.AdvertiserName?.toLowerCase().includes('appsumo') || ad.TrackingLink?.includes('appsumo') || ad.TrackingLink?.includes('8odi.net'));

    const replacementCandidates = appsumoAds.slice(0, 20).map((ad) => ({
      name: ad.Name ?? 'New AppSumo Deal',
      description: ad.Description ?? '',
      link: ad.TrackingLink ?? APPSUMO_FALLBACK_LINK,
      badge: extractBadge(ad.Name ?? '', ad.Description ?? ''),
      imageUrl: ad.ImageUrl ?? null,
    }));

    return res.status(200).json({ statusMap: {}, replacementCandidates, updatedAt: new Date().toISOString() });
  } catch {
    return res.status(200).json({ statusMap: {}, replacementCandidates: [], fallback: true, updatedAt: new Date().toISOString() });
  }
}
