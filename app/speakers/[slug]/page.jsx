import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SPEAKERS, DAY_LABELS, getSpeaker, initials } from '../../../lib/speakers';
import { BASE, SITE_URL, OG_IMAGE } from '../../../lib/site';
import '../speakers.css';

export function generateStaticParams() {
  return SPEAKERS.map(s => ({ slug: s.slug }));
}

const summary = s =>
  s.session
    ? `${s.name} speaks at the Irish Hypnotherapy Conference 2027 in Dublin: ${s.session}.`
    : `${s.name} is a confirmed speaker at the Irish Hypnotherapy Conference 2027 in Dublin, 16 to 18 April.`;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getSpeaker(slug);
  if (!s) return {};
  return {
    title: `${s.name}, Speaker`,
    description: summary(s),
    alternates: { canonical: `/speakers/${s.slug}` },
    openGraph: {
      title: `${s.name} at IHC 2027`,
      description: summary(s),
      url: `/speakers/${s.slug}`,
      type: 'profile',
      images: [OG_IMAGE],
    },
  };
}

export default async function SpeakerPage({ params }) {
  const { slug } = await params;
  const s = getSpeaker(slug);
  if (!s) notFound();

  const idx = SPEAKERS.findIndex(x => x.slug === s.slug);
  const prev = SPEAKERS[(idx - 1 + SPEAKERS.length) % SPEAKERS.length];
  const next = SPEAKERS[(idx + 1) % SPEAKERS.length];

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: s.name,
    description: s.bio,
    ...(s.site ? { url: `https://${s.site}` } : {}),
    ...(s.photo ? { image: `${SITE_URL}${BASE}${s.photo}` } : {}),
    performerIn: { '@type': 'Event', name: 'Irish Hypnotherapy Conference 2027', startDate: '2027-04-16' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <div className="page-header" role="banner">
        <div className="page-header-ghost" aria-hidden="true">{initials(s.name)}</div>
        <p className="page-eyebrow">{s.keynote ? 'Keynote Speaker' : 'Speaker'} · IHC 2027</p>
        <h1 className="page-title">{s.name}</h1>
        <div className="page-rule" aria-hidden="true"></div>
      </div>
      <main id="main">
        <div className="prof-wrap">
          <div className="prof-photo">
            {s.photo
              ? <img width="480" height="600" src={BASE + s.photo} alt={`Portrait of ${s.name}`} />
              : <span aria-hidden="true">{initials(s.name)}</span>}
          </div>

          <div>
            <p className="prof-label">About</p>
            <p className="prof-bio">{s.bio}</p>
            {s.site && (
              <a className="prof-site" href={`https://${s.site}`} target="_blank" rel="noopener noreferrer">
                {s.site} <span aria-hidden="true">↗</span>
              </a>
            )}

            <section className="prof-session" aria-labelledby="prof-session-hl">
              <p className="prof-label">{s.keynote ? 'Keynote session' : 'Session'}</p>
              <h2 className="prof-session-title" id="prof-session-hl">
                {s.session || 'Session details to be announced'}
              </h2>
              <dl className="prof-meta">
                <div><dt>Day</dt><dd>{s.day ? DAY_LABELS[s.day].long : 'TBC'}</dd></div>
                <div><dt>Time</dt><dd>{s.start ? `${s.start} to ${s.end}` : 'TBC'}</dd></div>
                <div><dt>Room</dt><dd>{s.room || 'TBC'}</dd></div>
              </dl>
              <p className="prof-note">The programme is provisional. Times and rooms may change.</p>
            </section>

            <div className="prof-actions">
              <Link href="/#tickets" className="btn-gold">Get Tickets</Link>
              <Link href="/speakers" className="prof-back">All speakers</Link>
            </div>
          </div>

          <nav className="prof-nav" aria-label="More speakers">
            <Link href={`/speakers/${prev.slug}`}><span>Previous</span>{prev.name}</Link>
            <Link href={`/speakers/${next.slug}`} style={{ textAlign: 'right' }}><span>Next</span>{next.name}</Link>
          </nav>
        </div>
      </main>
    </>
  );
}
