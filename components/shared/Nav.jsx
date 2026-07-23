'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BASE } from '../../lib/site';

const PRIMARY = [
  ['/#about', 'About'],
  ['/#speakers', 'Speakers'],
  ['/#schedule', 'Programme'],
  ['/#venue', 'Venue'],
  ['/blog', 'Blog'],
];

const SECONDARY = [
  ['/apply-to-speak', 'Apply to Speak'],
  ['/workshops', 'Workshops'],
  ['/sponsorship', 'Sponsorship'],
  ['/#awards', 'Awards'],
  ['/#faq', 'FAQ'],
  ['/#contact', 'Contact'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  // lock page scroll while the overlay is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header>
      <nav
        className={`nav${scrolled ? ' scrolled' : ''}`}
        id="nav"
        aria-label="Main navigation"
        {...(open ? { 'data-open': '' } : {})}
      >
        <Link href="/" className="nav-logo" aria-label="Irish Hypnotherapy Conference 2027, home" onClick={close}>
          <img width="160" height="150" src={BASE + '/logo.png'} alt="IHC" />
          <div className="nav-logo-name">
            Irish Hypnotherapy Conference<span>Dublin · April 2027</span>
          </div>
        </Link>

        <div className="nav-links" id="nav-links">
          <ul className="nav-primary">
            {PRIMARY.map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={close}>{label}</Link>
              </li>
            ))}
            <li className="nav-ticket-item">
              <Link href="/#tickets" className="nav-ticket" onClick={close}>Get Tickets</Link>
            </li>
          </ul>
          <ul className="nav-secondary" aria-label="More pages">
            {SECONDARY.map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={close}>{label}</Link>
              </li>
            ))}
          </ul>
          <p className="nav-overlay-meta">16–18 April 2027 &nbsp;·&nbsp; Clayton Hotel Liffey Valley, Dublin</p>
        </div>

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
