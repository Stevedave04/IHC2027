'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import NewsletterForm from '../shared/NewsletterForm';
import { CONTACT_EMAIL as EMAIL, isValidEmail, sendForm } from '../../lib/contact';

const FIELD_ERRORS = {
  name: 'Please enter your name.',
  email: 'Please enter a valid email address, for example name@example.com.',
  message: 'Please enter your message.',
};

/** @param {{name:string,email:string,message:string}} values */
const validate = values => ({
  ...(values.name ? {} : { name: FIELD_ERRORS.name }),
  ...(isValidEmail(values.email) ? {} : { email: FIELD_ERRORS.email }),
  ...(values.message ? {} : { message: FIELD_ERRORS.message }),
});

export default function Contact() {
  const formRef = useRef(null);
  const [state, setState] = useState('idle'); // idle | busy | done | error
  const [errors, setErrors] = useState({});

  const submit = async e => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);
    const values = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      message: String(data.get('message') || '').trim(),
    };
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    if (data.get('_honey')) return;
    setState('busy');
    try {
      await sendForm({
        ...values,
        _subject: 'IHC 2027 - ' + (String(data.get('subject') || '').trim() || 'Contact form enquiry'),
        form: 'contact',
      });
      form.reset();
      setState('done');
    } catch {
      setState('error');
    }
  };

  const clearError = name => () => {
    if (errors[name]) setErrors(({ [name]: _removed, ...rest }) => rest);
  };
  const fieldProps = name => ({
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `cf-${name}-error` : undefined,
    onInput: clearError(name),
  });
  const FieldError = ({ name }) =>
    errors[name] ? <span className="field-error" id={`cf-${name}-error`}>{errors[name]}</span> : null;

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
                <Link href="/apply-to-speak">Apply to speak online</Link>
              </div>
            </div>
            <div className="cta-inner" style={{ textAlign: 'left', alignItems: 'flex-start', padding: 0 }}>
              <span className="cta-label" style={{ marginBottom: '.5rem' }}>Not ready to book yet?</span>
              <p style={{ fontSize: '.9rem', fontWeight: 300, color: 'rgba(255,255,255,.68)', marginBottom: '1.25rem', maxWidth: '38ch', lineHeight: 1.6 }}>
                Get speaker announcements, ticket news and programme updates straight to your
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
                  <input id="cf-name" name="name" className="contact-input" type="text" placeholder="Your name" required autoComplete="name" {...fieldProps('name')} />
                  <FieldError name="name" />
                </div>
                <div className="contact-field">
                  <label htmlFor="cf-email">Email</label>
                  <input id="cf-email" name="email" className="contact-input" type="email" placeholder="your@email.com" required autoComplete="email" {...fieldProps('email')} />
                  <FieldError name="email" />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="cf-subject">Subject</label>
                <input id="cf-subject" name="subject" className="contact-input" type="text" placeholder="How can we help?" />
              </div>
              <div className="contact-field">
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" name="message" className="contact-input" placeholder="Your message…" required {...fieldProps('message')}></textarea>
                <FieldError name="message" />
              </div>
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
              <button type="submit" className="btn-gold" disabled={state === 'busy'} style={{ alignSelf: 'flex-start', padding: '.85rem 2rem' }}>
                {state === 'busy' ? 'Sending…' : 'Send Message'}
              </button>
              <p className={`form-status${state === 'error' ? ' is-error' : ''}`} role={state === 'error' ? 'alert' : 'status'}>
                {state === 'done' && 'Thank you, your message has been sent. We will be in touch shortly.'}
                {state === 'error' && `Sorry, your message did not send. Please try again or email ${EMAIL}.`}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
