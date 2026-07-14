'use client';

import { useState } from 'react';
import Link from 'next/link';

const EMAIL = 'john@irishhypnotherapyconference.ie';
const Mail = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

const ITEMS = [
  ['Can I attend on a single day only?',
    <>Yes: a Day Pass (€175) grants full access to your chosen day, including all sessions, lunch, and conference materials. You select which day at the time of booking.</>],
  ['Are group bookings available, and is there a discount?',
    <>Group bookings are welcome. For parties of 5 or more, please contact us directly at <Mail /> to discuss pricing and logistics.</>],
  ['What is the refund and cancellation policy?',
    <>Full refunds are available up to 30 days before the conference. A 50% refund applies between 14 and 30 days prior. No refunds are issued within 14 days of the start date. Tickets are fully transferable at no extra charge. See our <Link href="/refund-policy">Refund Policy</Link> for full details.</>],
  ['Will sessions be recorded, and for how long?',
    <>3-Day Pass holders receive 90-day access to session recordings. Platinum VIP ticket holders receive lifetime access. Day Pass holders do not receive recordings.</>],
  ['Is the Gala Dinner included in all ticket types?',
    <>The Saturday evening Gala Dinner and Awards Ceremony is included in the 3-Day Pass and Platinum VIP ticket. Day Pass holders may purchase a Gala Dinner add-on separately, contact us for availability.</>],
  ['Is the venue fully accessible?',
    <>Yes. Clayton Hotel Liffey Valley is fully accessible with step-free access throughout, accessible restrooms, and designated parking. If you have specific accessibility requirements, please contact us in advance and we will ensure appropriate arrangements are in place.</>],
  ['Are there accommodation deals at the Clayton Hotel?',
    <>Delegate room rates are available at the conference venue. Mention the Irish Hypnotherapy Conference 2027 when booking direct with the hotel, or contact us for details of the room block arrangement once confirmed.</>],
  ['Will the full speaker programme be announced before I book?',
    <>The full programme is announced in phases. The keynote speakers and core schedule are confirmed above. Additional speaker announcements will be made in the months leading up to April 2027. Sign up below to be notified as each announcement is made.</>],
  ['Is there a student or early-career rate?',
    <>We offer a limited number of reduced-rate places for student hypnotherapists and those in their first year of practice. Please email <Mail /> with a brief note on your situation to enquire about availability.</>],
];

// plain-text copies of the answers so the filter can search them
const SEARCH_TEXT = [
  'day pass €175 single day sessions lunch materials booking',
  'group bookings discount parties 5 contact pricing logistics email',
  'refund cancellation policy 30 days 50% 14 days transferable',
  'recordings recorded 90-day access platinum vip lifetime day pass',
  'gala dinner awards ceremony saturday 3-day platinum add-on',
  'venue accessible clayton hotel liffey valley step-free restrooms parking accessibility',
  'accommodation deals clayton hotel delegate room rates booking',
  'speaker programme announced phases keynote schedule announcements',
  'student early-career rate reduced places first year practice email',
];

export default function Faq() {
  const [open, setOpen] = useState(-1);
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const matches = ITEMS.map(([question], i) =>
    !q || question.toLowerCase().includes(q) || SEARCH_TEXT[i].includes(q));
  const anyMatch = matches.some(Boolean);

  return (
    <section className="dark-section" id="faq" aria-labelledby="faq-hl">
      <div className="section-wrap">
        <div className="eyebrow reveal">Frequently Asked Questions</div>
        <h2 className="reveal" id="faq-hl" style={{ fontSize: 'clamp(2.2rem,4.5vw,4.5rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, letterSpacing: '-.02em', color: '#fff', marginBottom: 0 }}>
          Everything<br /><strong style={{ fontWeight: 700, fontStyle: 'normal' }}>you need to know</strong>
        </h2>
        <div className="faq-search reveal">
          <label htmlFor="faq-filter" className="sr-only">Search questions</label>
          <input
            id="faq-filter"
            type="search"
            placeholder="Search questions… e.g. CPD, refund, parking"
            autoComplete="off"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <p className="faq-no-results" hidden={anyMatch}>
            No questions match, try a different word or <a href="#contact">ask us directly</a>.
          </p>
        </div>
        <div className="faq-grid reveal" role="list">
          {ITEMS.map(([question, answer], i) => (
            <div
              className={`faq-item${open === i ? ' open' : ''}`}
              role="listitem"
              key={question}
              style={matches[i] ? undefined : { display: 'none' }}
            >
              <button
                className="faq-trigger"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q">{question}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-body">
                <div className="faq-body-inner">
                  <p className="faq-answer">{answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
