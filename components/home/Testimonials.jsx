'use client';

import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../../lib/gsap';

const QUOTES = [
  { text: '"The IHC is without question the most valuable event in the Irish hypnotherapy calendar. The quality of speakers is simply unmatched."', name: 'Siobhán Murphy', role: 'Clinical Hypnotherapist, Cork' },
  { text: '"I have attended every year for four years. The connections I have made have genuinely transformed my practice and my career."', name: "Declan O'Brien", role: 'Hypnotherapy Trainer, Dublin' },
  { text: '"Melissa Tiers alone was worth the trip from London. The level of expertise on stage across three days is genuinely world-class."', name: 'Aoife Brennan', role: 'Hypnotherapist and Coach, Galway' },
  { text: '"The workshops are outstanding: practical, immediately applicable and presented by genuine masters of their craft."', name: 'Ciarán Walsh', role: 'Practice Owner, Limerick' },
  { text: '"The Gala Dinner is an experience in itself, an evening of celebration, inspiration and community I look forward to every year."', name: 'Fionnuala Kelly', role: 'Hypnotherapy Supervisor, Belfast' },
];

const ROTATE_MS = 7000;
const FADE_MS = 250;

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const [faded, setFaded] = useState(false);
  // Rotation starts paused for visitors who prefer reduced motion.
  const [playing, setPlaying] = useState(false);
  // Hover or keyboard focus holds the rotation without changing the button state.
  const held = useRef(false);
  // Screen readers only hear a new quote when the visitor asked for it.
  const [announce, setAnnounce] = useState(false);
  const curRef = useRef(cur);
  curRef.current = cur;

  const show = (i, byUser = false) => {
    setAnnounce(byUser);
    setFaded(true);
    setTimeout(() => {
      setCur((i + QUOTES.length) % QUOTES.length);
      setFaded(false);
    }, FADE_MS);
  };

  useEffect(() => {
    setPlaying(!prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(() => {
      if (!held.current) show(curRef.current + 1);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [playing]);

  const q = QUOTES[cur];
  const fade = { opacity: faded ? 0 : 1, transition: `opacity ${FADE_MS}ms` };

  return (
    <section className="dark-section" aria-label="Attendee testimonials">
      <div className="section-wrap">
        <div className="eyebrow reveal" style={{ justifyContent: 'center', textAlign: 'center' }}>What Attendees Say</div>
        <div
          className="testi-wrap reveal"
          onMouseEnter={() => (held.current = true)}
          onMouseLeave={() => (held.current = false)}
          onFocus={() => (held.current = true)}
          onBlur={() => (held.current = false)}
        >
          <span className="testi-quote-mark" aria-hidden="true">&ldquo;</span>
          <div id="testi-container" aria-live={announce ? 'polite' : 'off'} aria-atomic="true">
            <blockquote className="testi-text" style={fade}>{q.text}</blockquote>
            <div className="testi-author">
              <div className="testi-line" aria-hidden="true"></div>
              <div>
                <div className="testi-name" style={fade}>{q.name}</div>
                <div className="testi-role" style={fade}>{q.role}</div>
              </div>
              <div className="testi-line" aria-hidden="true"></div>
            </div>
          </div>
          <nav className="testi-nav" aria-label="Testimonial navigation">
            <button type="button" className="testi-btn" aria-label="Previous testimonial" onClick={() => show(cur - 1, true)}>&larr;</button>
            {QUOTES.map((quote, i) => (
              <button
                type="button"
                key={quote.name}
                className={`testi-dot${i === cur ? ' active' : ''}`}
                aria-label={`Testimonial ${i + 1} of ${QUOTES.length}`}
                aria-current={i === cur ? 'true' : undefined}
                onClick={() => show(i, true)}
              ></button>
            ))}
            <button type="button" className="testi-btn" aria-label="Next testimonial" onClick={() => show(cur + 1, true)}>&rarr;</button>
          </nav>
          <button type="button" className="testi-pause" aria-pressed={!playing} onClick={() => setPlaying(p => !p)}>
            {playing ? 'Pause rotation' : 'Play rotation'}
          </button>
        </div>
      </div>
    </section>
  );
}
