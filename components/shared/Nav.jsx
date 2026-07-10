'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BASE } from '../../lib/site';

const LINKS = [
  ['/#about', 'About'],
  ['/#speakers', 'Speakers'],
  ['/#schedule', 'Programme'],
  ['/#awards', 'Awards'],
  ['/#venue', 'Venue'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onKey = e => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header>
      <nav
        ref={navRef}
        className={`nav${scrolled ? ' scrolled' : ''}`}
        id="nav"
        aria-label="Main navigation"
        {...(open ? { 'data-open': '' } : {})}
      >
        <Link href="/" className="nav-logo" aria-label="Irish Hypnotherapy Conference 2027 — home">
          <img width="160" height="150" src={BASE + "/logo.png"} alt="IHC" />
          <div className="nav-logo-name">
            Irish Hypnotherapy Conference<span>Dublin · April 2027</span>
          </div>
        </Link>
        <ul className="nav-links" id="nav-links">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)}>{label}</Link>
            </li>
          ))}
          <li>
            <Link href="/#tickets" className="nav-ticket" onClick={() => setOpen(false)}>
              Get Tickets
            </Link>
          </li>
        </ul>
        <button
          className="nav-hamburger"
          id="nav-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}
