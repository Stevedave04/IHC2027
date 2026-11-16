'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap';

/**
 * GSAP-driven scroll reveals for every element carrying .reveal or .wipe.
 * Re-runs on route change so newly rendered pages animate too.
 */
export default function RevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    const els = gsap.utils.toArray('.reveal, .wipe');
    if (!els.length) return;

    if (prefersReducedMotion()) {
      gsap.set(els, { opacity: 1 });
      return;
    }

    // opacity only (never visibility:hidden) so links inside stay keyboard-focusable
    gsap.set(els, { opacity: 0, y: 24 });
    const batch = ScrollTrigger.batch(els, {
      start: 'top 88%',
      once: true,
      onEnter: targets =>
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.08,
          overwrite: true,
        }),
    });
    // anything already past the trigger (e.g. after hash navigation) shows immediately
    ScrollTrigger.refresh();

    // keyboard focus landing inside a not-yet-revealed block shows it straight away
    const onFocusIn = e => {
      const hidden = [];
      for (let el = e.target.closest?.('.reveal, .wipe'); el; el = el.parentElement?.closest('.reveal, .wipe')) {
        hidden.push(el);
      }
      if (hidden.length) gsap.to(hidden, { opacity: 1, y: 0, duration: 0.2, overwrite: true });
    };
    document.addEventListener('focusin', onFocusIn);

    return () => {
      document.removeEventListener('focusin', onFocusIn);
      batch.forEach(st => st.kill());
      gsap.set(els, { clearProps: 'all' });
    };
  }, [pathname]);

  return null;
}
