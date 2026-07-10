'use client';

import { useEffect, useRef, useState } from 'react';

const QUOTES = [
  { text: '"The IHC is without question the most valuable event in the Irish hypnotherapy calendar. The quality of speakers is simply unmatched."', name: 'Siobhán Murphy', role: 'Clinical Hypnotherapist, Cork' },
  { text: '"I have attended every year for six years. The connections I have made have genuinely transformed my practice and my career."', name: "Declan O'Brien", role: 'Hypnotherapy Trainer, Dublin' },
  { text: '"Melissa Tiers alone was worth the trip from London. The level of expertise on stage across three days is genuinely world-class."', name: 'Aoife Brennan', role: 'Hypnotherapist and Coach, Galway' },
  { text: '"The workshops are outstanding: practical, immediately applicable and presented by genuine masters of their craft."', name: 'Ciarán Walsh', role: 'Practice Owner, Limerick' },
  { text: '"The Gala Dinner is an experience in itself, an evening of celebration, inspiration and community I look forward to every year."', name: 'Fionnuala Kelly', role: 'Hypnotherapy Supervisor, Belfast' },
];

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const [faded, setFaded] = useState(false);
  const paused = useRef(false);

  const show = i => {
    setFaded(true);
    setTimeout(() => {
      setCur((i + QUOTES.length) % QUOTES.length);
      setFaded(false);
    }, 250);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) show(curRef.current + 1);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  // keep latest index available to the interval without re-subscribing
  const curRef = useRef(cur);
  curRef.current = cur;

  const q = QUOTES[cur];
  const fade = { opacity: faded ? 0 : 1, transition: 'opacity .25s' };

  return (
    <section className="dark-section" aria-label="Attendee testimonials">
      <div className="section-wrap">
        <div className="eyebrow reveal" style={{ justifyContent: 'center', textAlign: 'center' }}>What Attendees Say</div>
        <div
          className="testi-wrap reveal"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
          onFocus={() => (paused.current = true)}
          onBlur={() => (paused.current = false)}
        >
          <span className="testi-quote-mark" aria-hidden="true">&ldquo;</span>
          <div id="testi-container" aria-live="polite">
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
            <button className="testi-btn" aria-label="Previous testimonial" onClick={() => show(cur - 1)}>&larr;</button>
            {QUOTES.map((_, i) => (
              <button
                key={i}
                className={`testi-dot${i === cur ? ' active' : ''}`}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => show(i)}
              ></button>
            ))}
            <button className="testi-btn" aria-label="Next testimonial" onClick={() => show(cur + 1)}>&rarr;</button>
          </nav>
        </div>
      </div>
    </section>
  );
}
