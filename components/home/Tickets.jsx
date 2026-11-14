import Link from 'next/link';
import { TICKETS } from '../../lib/event';

export default function Tickets() {
  return (
    <section className="light-section" id="tickets" aria-labelledby="tickets-hl">
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>Tickets</div>
          <h2 className="reveal" id="tickets-hl" style={{ fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, letterSpacing: '-.02em', color: 'var(--text)' }}>
            Two passes.<br /><strong style={{ fontWeight: 700, fontStyle: 'normal' }}>Every session included.</strong>
          </h2>
          <p className="reveal" style={{ fontSize: '1rem', color: 'var(--muted)', marginTop: '1rem' }}>
            Both passes cover all three days, 16 to 18 April 2027. The Full Pass adds lunch, the Gala Dinner and the evening entertainment.
          </p>
        </div>

        <div className="ticket-pair reveal">
          {TICKETS.map(t => (
            <article className={`ticket-card${t.featured ? ' featured' : ''}`} key={t.id} aria-labelledby={`ticket-${t.id}`}>
              <div className="ticket-bg-price" aria-hidden="true">{t.price}</div>
              {t.featured && <span className="ticket-badge">Includes Gala Dinner</span>}
              <div className="ticket-tier">{t.tier}</div>
              <h3 className="ticket-name" id={`ticket-${t.id}`}>{t.name}</h3>
              <div className="ticket-sep"></div>
              <div className="ticket-price"><sup>€</sup>{t.price}</div>
              <p className="ticket-period">per delegate · Friday to Sunday</p>
              <ul className="ticket-features">
                {t.includes.map(f => (
                  <li className="ticket-feature" key={f}>
                    <span className="tf-check" aria-hidden="true">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a
                href={t.url}
                rel="noopener"
                className={`ticket-cta ${t.featured ? 'tc-primary' : 'tc-secondary'}`}
                aria-label={`Buy the ${t.name}, €${t.price}`}
              >
                Buy {t.featured ? 'Full Pass' : 'Conference Pass'}
              </a>
            </article>
          ))}
        </div>
        <p className="ticket-note reveal">
          Secure checkout on irishhypnotherapyconference.ie. Questions about group bookings? <Link href="/#contact">Get in touch</Link>.
        </p>

        <div className="exhibit-band reveal" role="region" aria-label="Exhibition table availability">
          <div className="exhibit-left">
            <div className="exhibit-eyebrow">Exhibition Tables</div>
            <div className="exhibit-title">Exhibiting at IHC 2027?</div>
            <p className="exhibit-body">
              Six exhibition tables are available for the full weekend, one per sector. Position your
              brand directly in the delegate experience across all three days.
            </p>
            <div className="exhibit-sectors" aria-label="Available sectors">
              <span>Training &amp; Education</span>
              <span>Books &amp; Publications</span>
              <span>Wellness Products</span>
              <span>Online Platforms</span>
              <span>Professional Associations</span>
              <span>Clinical &amp; Research</span>
            </div>
          </div>
          <div className="exhibit-right">
            <div className="exhibit-price"><sup>€</sup>400</div>
            <div className="exhibit-price-note">per table · full weekend</div>
            <div className="exhibit-avail">6 tables · limited</div>
            <Link href="/sponsorship" className="exhibit-cta">View Table Details</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
