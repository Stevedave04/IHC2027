'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap';

const STATS = [
  { value: 40, suffix: '+', label: 'International Speakers' },
  { value: 3, suffix: '', label: 'Days of Learning' },
  { value: 200, suffix: '+', label: 'Attendees' },
  { value: 4, suffix: '', label: 'Years Running' },
];

/** Stats count up with GSAP when scrolled into view. */
export default function Numbers() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const figs = gridRef.current.querySelectorAll('.number-fig');
    const tweens = [];
    figs.forEach((el, i) => {
      const { value, suffix } = STATS[i];
      const counter = { n: 0 };
      tweens.push(
        gsap.to(counter, {
          n: value,
          duration: 1.6,
          ease: 'power2.out',
          snap: { n: 1 },
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onUpdate: () => { el.textContent = counter.n + suffix; },
        })
      );
    });
    return () => tweens.forEach(t => { t.scrollTrigger?.kill(); t.kill(); });
  }, []);

  return (
    <div className="light-section">
      <div className="section-wrap" style={{ paddingTop: '3rem', paddingBottom: 0 }}>
        <p className="reveal" style={{ textAlign: 'center', fontSize: '.64rem', fontWeight: 600, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2.25rem' }}>
          By the Numbers
        </p>
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
