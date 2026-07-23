'use client';

import { useEffect, useRef } from 'react';

/**
 * Embeds a JotForm by id as a responsive iframe.
 * Listens for JotForm's postMessage ("setHeight:<px>:<formId>") to auto-size,
 * so no external JotForm script is needed (keeps the page CSP tight).
 */
export default function JotformEmbed({ formId, title = 'Application form' }) {
  const ref = useRef(null);

  useEffect(() => {
    const onMessage = e => {
      if (!e.origin.includes('jotform.com') || typeof e.data !== 'string') return;
      const [action, value, id] = e.data.split(':');
      if (id && id !== formId) return;
      if (action === 'setHeight' && ref.current) {
        ref.current.style.height = `${parseInt(value, 10)}px`;
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [formId]);

  return (
    <iframe
      ref={ref}
      id={`JotFormIFrame-${formId}`}
      title={title}
      src={`https://form.jotform.com/${formId}`}
      allow="geolocation; microphone; camera; fullscreen"
      allowTransparency="true"
      scrolling="no"
      style={{ width: '100%', minHeight: '1100px', border: 'none', background: 'transparent' }}
    />
  );
}
