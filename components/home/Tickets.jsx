'use client';

import Link from 'next/link';

const TIERS = [
  {
    cls: 'ticket-card reveal', bg: '175', tier: 'Day Pass', name: 'Single Day', price: '175',
    period: 'per day · early bird available',
    features: ['Access to all sessions on chosen day', 'CPD certificate for attended sessions', 'Networking lunch included', 'Conference materials'],
    cta: ['Book Day Pass', 'tc-secondary', 'Day Pass booking enquiry - €175'],
  },
  {
    cls: 'ticket-card featured reveal', badge: 'Most Popular', bg: '450', tier: 'Full Conference', name: '3-Day Pass', price: '450',
    period: 'all 3 days · payment plan available',
    features: ['Full 3-day conference access', 'All keynotes and workshops', 'Gala Dinner and Awards Night', 'Full CPD certificate (24+ hours)', 'Session recordings (90 days)', 'Priority seating at keynotes'],
    cta: ['Secure Your Place', 'tc-primary', '3-Day Pass booking enquiry - €450'],
    installments: 'Or 3 instalments of €150',
  },
  {
    cls: 'ticket-card reveal', bg: '650', tier: 'VIP Access', name: 'Platinum', price: '650',
    period: 'all 3 days · limited places',
    features: ['Everything in the 3-Day Pass', 'VIP Speaker Meet and Greet', 'Front-row keynote seating', 'Exclusive pre-dinner drinks reception', 'Lifetime session recordings access', 'IHC 2027 premium gift pack'],
    cta: ['Enquire About VIP', 'tc-secondary', 'VIP Platinum enquiry - €650'],
  },
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
          <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>Tickets and Pricing</div>
          <h2 className="reveal" id="tickets-hl" style={{ fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, letterSpacing: '-.02em', color: 'var(--text)' }}>
            Choose your experience
          </h2>
          <p className="reveal" style={{ fontSize: '1rem', color: 'var(--muted)', marginTop: '1rem', fontWeight: 300 }}>
            All tickets include full CPD accreditation. Flexible payment plans available.
          </p>
        </div>

        <div className="tickets-grid">
          {TIERS.map(t => (
            <div className={t.cls} key={t.name}>
              {t.badge && <div className="ticket-badge">{t.badge}</div>}
              <div className="ticket-bg-price" aria-hidden="true">{t.bg}</div>
              <div className="ticket-tier">{t.tier}</div>
              <h3 className="ticket-name">{t.name}</h3>
              <div className="ticket-sep"></div>
              <div className="ticket-price"><sup>€</sup>{t.price}</div>
              <p className="ticket-period">{t.period}</p>
              <ul className="ticket-features">
                {t.features.map(f => (
                  <li className="ticket-feature" key={f}>
                    <span className="tf-check" aria-hidden="true">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`ticket-cta ${t.cta[1]}`} onClick={() => prefill(t.cta[2])}>
                {t.cta[0]}
              </a>
              {t.installments && <p className="ticket-installments">{t.installments}</p>}
            </div>
          ))}
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
