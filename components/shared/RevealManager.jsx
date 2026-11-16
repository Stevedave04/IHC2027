'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { prefersReducedMotion } from '../../lib/motion';

const SELECTOR = '.reveal, .wipe';
const STAGGER_MS = 80;
const MAX_STAGGER_STEPS = 6;

/** Mark an element as revealed; the fade-up itself is a CSS animation (globals.css). */
const reveal = (el, delayMs = 0) => {
  el.style.setProperty('--reveal-delay', `${delayMs}ms`);
  el.classList.add('is-in');
};

/**
 * Scroll reveals for every element carrying .reveal or .wipe.
 * Re-runs on route change so newly rendered pages animate too.
 */
export default function RevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    const els = [...document.querySelectorAll(SELECTOR)].filter(el => !el.classList.contains('is-in'));
    if (!els.length) return undefined;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      els.forEach(el => reveal(el));
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries
          .filter(entry => entry.isIntersecting)
          .forEach((entry, i) => {
            reveal(entry.target, Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS);
            observer.unobserve(entry.target);
          });
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    els.forEach(el => observer.observe(el));

    // keyboard focus landing inside a not-yet-revealed block shows it straight away
    const onFocusIn = e => {
      for (let el = e.target.closest?.(SELECTOR); el; el = el.parentElement?.closest(SELECTOR)) {
        reveal(el);
        observer.unobserve(el);
      }
    };
    document.addEventListener('focusin', onFocusIn);

    return () => {
      document.removeEventListener('focusin', onFocusIn);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
