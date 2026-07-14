'use client';

import { useRef, useState } from 'react';
import NewsletterForm from '../shared/NewsletterForm';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/john@irishhypnotherapyconference.ie';
const EMAIL = 'john@irishhypnotherapyconference.ie';

export default function Contact() {
  const formRef = useRef(null);
  const [state, setState] = useState('idle'); // idle | busy | done | error

  const submit = async e => {
    e.preventDefault();
    const form = formRef.current;
    const get = id => form.querySelector('#' + id);
    const name = get('cf-name').value.trim();
    const email = get('cf-email').value.trim();
    const msg = get('cf-message').value.trim();
    if (!name || !email || !email.includes('@') || !msg) {
      [get('cf-name'), get('cf-email'), get('cf-message')].forEach(el => {
        if (!el.value.trim()) {
          el.style.borderColor = 'rgba(200,80,80,.6)';
          setTimeout(() => (el.style.borderColor = ''), 2500);
        }
      });
      return;
    }
    if (form.querySelector('[name="_honey"]').value) return;
    setState('busy');
    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name, email, message: msg,
          _subject: 'IHC 2027 - ' + (get('cf-subject').value.trim() || 'Contact form enquiry'),
          form: 'contact',
        }),
      });
      if (!r.ok) throw new Error('send failed');
      form.reset();
      setState('done');
      setTimeout(() => setState('idle'), 5000);
    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 4000);
    }
  };

  const btnLabel =
    state === 'busy' ? 'Sending…' : state === 'error' ? 'Something went wrong, try again' : 'Send Message';

  return (
    <section className="dark-section" id="contact" aria-labelledby="contact-hl" style={{ background: 'var(--emerald-2)', borderTop: '1px solid rgba(196,154,40,.12)' }}>
      <div className="section-wrap">
        <div className="contact-grid">
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Get in Touch</div>
            <h2 className="contact-hl" id="contact-hl">We would love<br />to hear from you</h2>
            <div className="contact-routes">
              <div className="contact-route">
                <span className="contact-route-label">General Enquiries</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="contact-route">
                <span className="contact-route-label">Sponsorship &amp; Partnerships</span>
                <a href={`mailto:${EMAIL}?subject=Sponsorship%20Enquiry`}>{EMAIL}</a>
              </div>
              <div className="contact-route">
                <span className="contact-route-label">Speaker Submissions</span>
                <a href={`mailto:${EMAIL}?subject=Speaker%20Submission`}>{EMAIL}</a>
              </div>
            </div>
            <div className="cta-inner" style={{ textAlign: 'left', alignItems: 'flex-start', padding: 0 }}>
              <span className="cta-label" style={{ marginBottom: '.5rem' }}>Not ready to book yet?</span>
              <p style={{ fontSize: '.9rem', fontWeight: 300, color: 'rgba(255,255,255,.55)', marginBottom: '1.25rem', maxWidth: '38ch', lineHeight: 1.6 }}>
                Get speaker announcements, early-bird alerts, and programme updates straight to your
                inbox, so you do not miss the window.
              </p>
              <NewsletterForm id="cta-email" label="Keep Me Updated" style={{ maxWidth: '420px' }} />
            </div>
          </div>
          <div className="reveal">
            <form className="contact-form" id="contact-form" ref={formRef} onSubmit={submit} noValidate>
              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="cf-name">Name</label>
                  <input id="cf-name" name="name" className="contact-input" type="text" placeholder="Your name" required autoComplete="name" />
                </div>
                <div className="contact-field">
                  <label htmlFor="cf-email">Email</label>
                  <input id="cf-email" name="email" className="contact-input" type="email" placeholder="your@email.com" required autoComplete="email" />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="cf-subject">Subject</label>
                <input id="cf-subject" name="subject" className="contact-input" type="text" placeholder="How can we help?" />
              </div>
              <div className="contact-field">
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" name="message" className="contact-input" placeholder="Your message…" required></textarea>
              </div>
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
              <button type="submit" className="btn-gold" disabled={state === 'busy'} style={{ alignSelf: 'flex-start', padding: '.85rem 2rem' }}>
                {btnLabel}
              </button>
              <p className="contact-success" role="status" style={state === 'done' ? { display: 'block' } : undefined}>
                Thank you, we will be in touch shortly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
