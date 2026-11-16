import Link from 'next/link';
import { webpSources, SPEAKER_WIDTHS } from '../../lib/images';
import { SPEAKER_COUNT } from '../../lib/event';
import { SPEAKERS, KEYNOTES, DAY_LABELS, getSpeaker, initials } from '../../lib/speakers';

/** Names shown in the homepage roster strip, in display order. */
const ROSTER_SLUGS = [
  'sheila-granger', 'adam-cox', 'kate-beaven-marks', 'hansruedi-wipf',
  'lori-hammond', 'cara-robins', 'ronia-fraser', 'fabian-wesselink',
  'giancarlo-russo', 'turan-mirza', 'chris-priebe',
];

const KEYNOTE_LAYOUT = { 'melissa-tiers': 'sp-featured', 'john-scanlon': 'sp-wide', 'mike-mandel': 'sp-wide' };

const firstSentence = text => (text.match(/^.+?[.!?](\s|$)/) || [text])[0].trim();

const slotLabel = s => {
  if (!s.day) return 'Session to be announced';
  const day = DAY_LABELS[s.day].short;
  return s.start ? `${day} · ${s.start}` : day;
};

function KeynoteCard({ s }) {
  const layout = KEYNOTE_LAYOUT[s.slug] || 'sp-wide';
  return (
    <Link prefetch={false} href={`/speakers/${s.slug}`} className={`speaker-card ${layout} reveal`} aria-label={`${s.name}, keynote speaker. View profile`}>
      {s.photo && (
        <img width="480" height="600" {...webpSources(s.photo, SPEAKER_WIDTHS)} sizes="(max-width:768px) 50vw, 34vw" alt="" className="speaker-photo" aria-hidden="true" loading="lazy" />
      )}
      <span className="speaker-initial" aria-hidden="true">{initials(s.name)}</span>
      <div>
        <div className="speaker-role">Keynote · {slotLabel(s)}</div>
        <h3 className="speaker-name">{s.name}</h3>
        <p className="speaker-spec">{s.session || 'Keynote session to be announced'}</p>
      </div>
      <div className="speaker-bio-reveal" aria-hidden="true">
        <p className="speaker-bio-text">{layout === 'sp-featured' ? s.bio : firstSentence(s.bio)}</p>
        <span className="speaker-bio-name">{s.name}</span>
      </div>
    </Link>
  );
}

export default function Speakers() {
  const roster = ROSTER_SLUGS.map(getSpeaker).filter(Boolean);
  const remaining = SPEAKERS.length - KEYNOTES.length - roster.length;

  return (
    <section className="light-section" id="speakers" aria-labelledby="speakers-hl">
      <div className="section-wrap-wide">
        <div className="speakers-header">
          <div>
            <div className="eyebrow reveal" style={{ '--eyebrow-c': 'var(--gold-text)' }}>2027 Speakers</div>
            <h2 className="speakers-hl reveal" id="speakers-hl">
              <em>{SPEAKER_COUNT} confirmed speakers</em>
              Voices shaping<br />the future
            </h2>
          </div>
          <Link href="/speakers" className="speakers-link reveal">
            View Full Line-up
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><line x1="0" y1="5" x2="13" y2="5" /><polyline points="9 1 14 5 9 9" /></svg>
          </Link>
        </div>

        <div className="speaker-grid">
          {[...KEYNOTES]
            .sort((a, b) => (KEYNOTE_LAYOUT[b.slug] === 'sp-featured') - (KEYNOTE_LAYOUT[a.slug] === 'sp-featured'))
            .map(s => <KeynoteCard s={s} key={s.slug} />)}
        </div>

        <ul className="speaker-roster" aria-label="More 2027 speakers">
          {roster.map(s => (
            <li key={s.slug} className="reveal">
              <Link prefetch={false} href={`/speakers/${s.slug}`} className="roster-item">
                <span className="roster-photo">
                  {s.photo
                    ? <img width="240" height="240" {...webpSources(s.photo, SPEAKER_WIDTHS)} sizes="(max-width:768px) 45vw, 210px" alt="" loading="lazy" />
                    : <span aria-hidden="true">{initials(s.name)}</span>}
                </span>
                <span className="roster-name">{s.name}</span>
                <span className="roster-session">{s.session || 'Session to be announced'}</span>
              </Link>
            </li>
          ))}
          <li className="reveal">
            <Link href="/speakers" className="roster-item roster-more">
              <span className="roster-more-num">+{remaining}</span>
              <span className="roster-more-label">more speakers<br />see the full line-up</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
