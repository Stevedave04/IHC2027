'use client';

import Link from 'next/link';
import { TICKET_PRICE } from '../../lib/event';

const INCLUDED = [
  'Full access to all three days',
  'Every keynote, workshop and panel',
  'Sunday intensive sessions',
  'Gala Dinner and Awards Night',
  'Full CPD certificate (24+ hours)',
  'Session recordings for 90 days',
  'Lunch and refreshments each day',
  'Conference materials',
];

export default function Tickets() {
  const prefill = subject => {
    const el = document.getElementById('cf-subject');
    if (el) el.value = subject;
  };

  return (
    <section className="light-section" id="tickets" aria-labelledby="tickets-hl">
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>Tickets</div>
          <h2 className="reveal" id="tickets-hl" style={{ fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, letterSpacing: '-.02em', color: 'var(--text)' }}>
            One ticket.<br /><strong style={{ fontWeight: 700, fontStyle: 'normal' }}>Everything included.</strong>
          </h2>
          <p className="reveal" style={{ fontSize: '1rem', color: 'var(--muted)', marginTop: '1rem' }}>
            A single price for every delegate, with full CPD accreditation.
          </p>
        </div>

        <div className="ticket-single reveal">
          <div className="ticket-card featured ticket-single-price">
            <div className="ticket-bg-price" aria-hidden="true">{TICKET_PRICE}</div>
            <div className="ticket-tier">Full Conference Pass</div>
            <h3 className="ticket-name">16–18 April 2027</h3>
            <div className="ticket-sep"></div>
            <div className="ticket-price"><sup>€</sup>{TICKET_PRICE}</div>
            <p className="ticket-period">per delegate · all three days</p>
            <a
              href="#contact"
              className="ticket-cta tc-primary"
              onClick={() => prefill(`Conference ticket booking enquiry - €${TICKET_PRICE}`)}
            >
              Secure Your Place
            </a>
          </div>
          <div className="ticket-single-features">
            <div className="ticket-single-label">What&rsquo;s included</div>
            <ul className="ticket-features">
              {INCLUDED.map(f => (
                <li className="ticket-feature" key={f}>
                  <span className="tf-check" aria-hidden="true">✓</span>{f}
                </li>
              ))}
            </ul>
          </div>
        </div>

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
