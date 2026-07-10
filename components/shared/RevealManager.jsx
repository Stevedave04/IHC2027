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
      gsap.set(els, { autoAlpha: 1 });
      return;
    }

    gsap.set(els, { autoAlpha: 0, y: 24 });
    const batch = ScrollTrigger.batch(els, {
      start: 'top 88%',
      once: true,
      onEnter: targets =>
        gsap.to(targets, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.08,
          overwrite: true,
        }),
    });
    // anything already past the trigger (e.g. after hash navigation) shows immediately
    ScrollTrigger.refresh();

    return () => {
      batch.forEach(st => st.kill());
      gsap.set(els, { clearProps: 'all' });
    };
  }, [pathname]);

  return null;
}
