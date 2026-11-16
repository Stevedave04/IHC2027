'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../../lib/motion';
import { SPEAKER_COUNT, ATTENDEE_COUNT, YEARS_RUNNING } from '../../lib/event';

/** '40+' -> { value: 40, suffix: '+' } */
const split = figure => ({ value: parseInt(figure, 10), suffix: String(figure).replace(/^\d+/, '') });

const STATS = [
  { ...split(SPEAKER_COUNT), label: 'International Speakers' },
  { value: 3, suffix: '', label: 'Days of Learning' },
  { ...split(ATTENDEE_COUNT), label: 'Attendees' },
  { value: YEARS_RUNNING, suffix: '', label: 'Years Running' },
];

const COUNT_MS = 1600;
const easeOut = t => 1 - (1 - t) * (1 - t);

/** Count an element's text up from 0; returns a function that cancels it. */
function countUp(el, { value, suffix }) {
  let frame;
  const start = performance.now();
  const tick = now => {
    const progress = Math.min((now - start) / COUNT_MS, 1);
    el.textContent = Math.round(easeOut(progress) * value) + suffix;
    if (progress < 1) frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
}

/** Stats count up once when scrolled into view. */
export default function Numbers() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;
    const figs = [...gridRef.current.querySelectorAll('.number-fig')];
    const cancels = [];
    const observer = new IntersectionObserver(
      entries => {
        entries.filter(entry => entry.isIntersecting).forEach(entry => {
          observer.unobserve(entry.target);
          cancels.push(countUp(entry.target, STATS[figs.indexOf(entry.target)]));
        });
      },
      { threshold: 0.4 }
    );
    figs.forEach(fig => observer.observe(fig));
    return () => {
      observer.disconnect();
      cancels.forEach(cancel => cancel());
    };
  }, []);

  return (
    <div className="light-section">
      <div className="section-wrap numbers-wrap">
        <p className="numbers-eyebrow reveal">By the Numbers</p>
        <div className="numbers-grid" ref={gridRef}>
          {STATS.map(s => (
            <div className="number-item reveal" key={s.label}>
              <span className="number-fig">{s.value + s.suffix}</span>
              <span className="number-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
