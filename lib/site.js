/**
 * Deployment-aware URL constants.
 * NEXT_PUBLIC_BASE_PATH — path prefix when hosted in a sub-directory
 *   (empty on Cloudflare Pages; "/IHC2027" on GitHub Pages via the workflow).
 * NEXT_PUBLIC_SITE_URL — absolute origin for canonical/OG/JSON-LD URLs.
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ihc2027web.pages.dev';
