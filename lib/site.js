/**
 * Deployment-aware URL constants.
 * NEXT_PUBLIC_BASE_PATH, path prefix when hosted in a sub-directory
 *   (empty on Cloudflare Pages; "/IHC2027" on GitHub Pages via the workflow).
 * NEXT_PUBLIC_SITE_URL, absolute origin for canonical/OG/JSON-LD URLs.
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ihc2027web.pages.dev';

/** Default social share image (1200x630) used by every page without its own. */
export const OG_IMAGE = Object.freeze({
  url: `${BASE}/og-2027.jpg`,
  width: 1200,
  height: 630,
  alt: 'IHC 2027 keynote speakers John Scanlon, Melissa Tiers and Mike Mandel. 16 to 18 April 2027, Clayton Hotel Liffey Valley, Dublin.',
});
