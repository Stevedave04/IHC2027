'use client';

import { useRef, useState } from 'react';
import { isValidEmail, sendForm, CONTACT_EMAIL } from '../../lib/contact';

const MESSAGES = {
  invalid: 'Please enter a valid email address, for example name@example.com.',
  done: 'Thank you, you are on the list.',
  error: `Sorry, that did not send. Please try again or email ${CONTACT_EMAIL}.`,
};

export default function NewsletterForm({ id = 'newsletter-email', label = 'Subscribe', subject = 'IHC 2027 - Newsletter signup', className = 'cta-form', style }) {
  const [state, setState] = useState('idle'); // idle | invalid | busy | done | error
  const inputRef = useRef(null);
  const honeyRef = useRef(null);
  const statusId = `${id}-status`;

  const submit = async e => {
    e.preventDefault();
    const email = inputRef.current.value;
    if (!isValidEmail(email)) {
      setState('invalid');
      inputRef.current.focus();
      return;
    }
    if (honeyRef.current?.value) return;
    setState('busy');
    try {
      await sendForm({ email: email.trim(), _subject: subject, form: 'newsletter' });
      inputRef.current.value = '';
      setState('done');
    } catch {
      setState('error');
    }
  };

  const isProblem = state === 'invalid' || state === 'error';

  return (
    <>
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
          aria-invalid={state === 'invalid' || undefined}
          aria-describedby={statusId}
          onInput={() => { if (state !== 'idle' && state !== 'busy') setState('idle'); }}
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
        <button type="submit" className="btn-gold" disabled={state === 'busy'} style={{ whiteSpace: 'nowrap', padding: '.8rem 1.8rem' }}>
          {state === 'busy' ? 'Sending…' : label}
        </button>
      </form>
      <p id={statusId} className={`form-status${isProblem ? ' is-error' : ''}`} role={isProblem ? 'alert' : 'status'}>
        {MESSAGES[state] || ''}
      </p>
    </>
  );
}
