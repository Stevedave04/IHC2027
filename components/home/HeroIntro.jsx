'use client';

import { useEffect } from 'react';
import { gsap, prefersReducedMotion } from '../../lib/gsap';

/** GSAP hero entrance: masked line reveal + staggered supporting elements. */
export default function HeroIntro() {
  useEffect(() => {
    const supporting = [
      '.hero-eyebrow', '.hero-year', '.hero-rule',
      '.hero-actions', '.countdown', '.add-cal',
    ];
    if (prefersReducedMotion()) {
      gsap.set(['.hero-title', '.hero-line-inner', ...supporting, '.hero-logo-wrap img'], { autoAlpha: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.from('.hero-logo-wrap img', { autoAlpha: 0, scale: 0.85, duration: 1.1 })
      .fromTo('.hero-eyebrow', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.25)
      .from('.hero-line-inner', { yPercent: 110, autoAlpha: 0, duration: 1.1, stagger: 0.14 }, 0.35)
      .fromTo('.hero-year', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.9)
      .fromTo('.hero-rule', { scaleY: 0, autoAlpha: 0 }, { scaleY: 1, autoAlpha: 1, duration: 0.7 }, 1.0)
      .fromTo('.hero-actions', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 1.1)
      .fromTo('.countdown', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 1.25)
      .fromTo('.add-cal', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7 }, 1.45)
      // slow Ken Burns drift on the hero backdrop
      .fromTo('.hero-bg', { scale: 1.08 }, { scale: 1, duration: 6, ease: 'power1.out' }, 0);

    return () => tl.kill();
  }, []);

  return null;
}
