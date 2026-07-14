'use client';

import { useRef, useState } from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/john@irishhypnotherapyconference.ie';

export default function NewsletterForm({ id = 'newsletter-email', label = 'Subscribe', subject = 'IHC 2027 - Newsletter signup', className = 'cta-form', style }) {
  const [state, setState] = useState('idle'); // idle | busy | done | error
  const inputRef = useRef(null);
  const honeyRef = useRef(null);

  const submit = async e => {
    e.preventDefault();
    const email = inputRef.current.value;
    if (!email || !email.includes('@')) {
      inputRef.current.style.borderColor = 'rgba(200,80,80,.6)';
      setTimeout(() => (inputRef.current.style.borderColor = ''), 2000);
      return;
    }
    if (honeyRef.current?.value) return;
    setState('busy');
    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: subject, form: 'newsletter' }),
      });
      if (!r.ok) throw new Error('send failed');
      inputRef.current.value = '';
      setState('done');
    } catch {
      setState('error');
    }
    setTimeout(() => setState('idle'), 3000);
  };

  const btnLabel =
    state === 'busy' ? 'Subscribing…' : state === 'done' ? 'Subscribed' : state === 'error' ? 'Try again' : label;

  return (
    <form className={className} style={style} onSubmit={submit} noValidate aria-label="Newsletter sign-up form">
      <label htmlFor={id} className="sr-only">Email address</label>
      <input
        id={id}
        ref={inputRef}
        name="email"
        className="cta-input"
        type="email"
        placeholder="your@email.com"
        required
        autoComplete="email"
      />
      <input
        ref={honeyRef}
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px' }}
      />
      <button
        type="submit"
        className="btn-gold"
        disabled={state === 'busy'}
        style={{ whiteSpace: 'nowrap', padding: '.8rem 1.8rem', ...(state === 'done' ? { background: 'rgba(100,180,130,1)' } : {}) }}
      >
        {btnLabel}
      </button>
    </form>
  );
}
