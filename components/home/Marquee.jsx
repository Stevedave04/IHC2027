'use client';

import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../../lib/gsap';

const ITEMS = [
  'Empowering Connections', 'Advancing Expertise', 'Embracing Clarity',
  '16–18 April 2027', 'Dublin, Ireland', '50+ World-Class Speakers',
];

/** GSAP seamless marquee loop — 60px/s desktop, 30px/s mobile, pauses on hover. */
export default function Marquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const track = trackRef.current;
    let tween;

    const build = () => {
      tween?.kill();
      const pxPerSec = window.innerWidth < 769 ? 30 : 60;
      const half = track.scrollWidth / 2;
      tween = gsap.fromTo(
        track,
        { x: 0 },
        { x: -half, duration: half / pxPerSec, ease: 'none', repeat: -1 }
      );
    };

    build();
    document.fonts?.ready?.then(build);
    let t;
    const onResize = () => { clearTimeout(t); t = setTimeout(build, 200); };
    window.addEventListener('resize', onResize, { passive: true });
    const pause = () => tween?.pause();
    const play = () => tween?.play();
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', play);

    return () => {
      tween?.kill();
      window.removeEventListener('resize', onResize);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', play);
    };
  }, []);

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track" ref={trackRef}>
        {[0, 1].map(copy =>
          ITEMS.map(item => (
            <span key={`${copy}-${item}`} style={{ display: 'contents' }}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
