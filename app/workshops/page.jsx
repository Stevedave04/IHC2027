import Link from 'next/link';
import { OG_IMAGE } from '../../lib/site';
import './workshops.css';
import { webpSources, SPEAKER_WIDTHS } from '../../lib/images';

const DESC =
  'Pre and post-conference workshops at the Irish Hypnotherapy Conference 2027 in Dublin, including Procrastination Lab with Melissa Tiers. More workshops to be announced.';

const MELISSA_BOOKING = 'https://www.melissatiers.com/ireland';

export const metadata = {
  title: 'Workshops',
  description: DESC,
  alternates: { canonical: '/workshops' },
  openGraph: { title: 'IHC 2027 Workshops', description: DESC, url: '/workshops', images: [OG_IMAGE] },
};

export default function Page() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-ghost" aria-hidden="true">Workshops</div>
        <p className="page-eyebrow">Irish Hypnotherapy Conference 2027</p>
        <h1 className="page-title">Pre &amp; post-conference<br /><strong style={{ fontWeight: 700, fontStyle: 'normal' }}>workshops</strong></h1>
        <div className="page-rule" aria-hidden="true"></div>
      </div>

      <main id="main">
        <div className="ws-wrap">
          <p className="coc-intro">
            Extend your time in Dublin with a smaller-group workshop either side of the main conference.
            Workshops are booked separately from your conference pass, directly with the presenter.
          </p>

          <article className="coc-section ws-feature reveal">
            <span className="coc-section-num">01</span>
            <div className="ws-feature-grid">
              <img
                className="ws-feature-photo"
                {...webpSources('/images/speakers/melissa-tiers.jpg', SPEAKER_WIDTHS)}
                sizes="280px"
                width="480" height="600"
                alt="Portrait of Melissa Tiers"
                loading="lazy"
              />
              <div>
                <p className="section-meta">Melissa Tiers · Pre/post-conference workshop</p>
                <h2>Procrastination Lab</h2>
                <p>
                  Melissa Tiers brings her Procrastination Lab to Dublin. Treated as an experiment rather than a
                  lecture, it uses a project you have been putting off as live material, so you learn the
                  process from the inside out before using it with clients.
                </p>
                <ul className="coc-list">
                  <li>Spot when procrastination is really an unconscious conflict, and how to bring it into alignment</li>
                  <li>Tell the difference between work that matters and work that can simply be dropped</li>
                  <li>Build a generative, unconscious strategy for getting things started and finished</li>
                  <li>Take the approach straight into your client work</li>
                </ul>
                <p>Registration stays open until the day itself.</p>
                <div className="ws-actions">
                  <a href={MELISSA_BOOKING} className="btn-gold" target="_blank" rel="noopener noreferrer">
                    Secure your place
                  </a>
                  <Link href="/speakers/melissa-tiers" className="ws-link">About Melissa Tiers</Link>
                </div>
              </div>
            </div>
          </article>

          <article className="coc-section reveal">
            <span className="coc-section-num">02</span>
            <h2>More workshops to be announced</h2>
            <p>
              Further pre and post-conference workshops will be added as they are confirmed. Join the mailing
              list on the homepage to hear first, or see the full <Link href="/speakers">2027 speaker line-up</Link>.
            </p>
          </article>

          <div className="coc-commitment" role="complementary" aria-label="Conference passes">
            <span className="coc-commitment-label">The main conference</span>
            <p>
              More than 40 sessions across three rooms, Friday 16 to Sunday 18 April. Conference passes start at €400.
            </p>
            <Link href="/#tickets" className="btn-gold">Compare passes</Link>
          </div>
        </div>
      </main>
    </>
  );
}
