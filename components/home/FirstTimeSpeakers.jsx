import Link from 'next/link';

const STATS = [
  { fig: '40', label: 'Speakers on the 2027 bill' },
  { fig: '3', label: 'Days of sessions' },
  { fig: '200+', label: 'Attendees planned' },
];

export default function FirstTimeSpeakers() {
  return (
    <section className="dark-section fts-section" id="first-time-speakers" aria-labelledby="fts-hl">
      <div className="section-wrap">
        <div className="fts-grid">
          <div className="fts-intro reveal">
            <div className="eyebrow">New for 2027</div>
            <h2 className="fts-hl" id="fts-hl">
              First time on<br /><strong>a conference stage?</strong>
            </h2>
            <p className="fts-body">
              Whether this is your first time with us or your first time speaking at a conference at
              all, you belong on the IHC 2027 programme. We pair every new voice with a supportive
              room and a team that helps you shape your session, so the only thing you bring is what
              you know.
            </p>
            <p className="fts-body">
              This year that room is bigger than ever: 40 speakers across three days, in front of
              more than 200 practitioners who came to listen, learn and cheer you on.
            </p>
            <Link href="/apply-to-speak" className="fts-cta">Apply to Speak</Link>
          </div>

          <div className="fts-stats reveal">
            {STATS.map(s => (
              <div className="fts-stat" key={s.label}>
                <span className="fts-fig">{s.fig}</span>
                <span className="fts-label">{s.label}</span>
              </div>
            ))}
            <p className="fts-note">New speakers welcome every single year.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
