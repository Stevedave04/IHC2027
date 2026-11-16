'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { LOGO_SRC } from '../../lib/images';

const PRIMARY = [
  ['/#about', 'About'],
  ['/speakers', 'Speakers'],
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
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the overlay is open: lock page scroll and make everything outside the
  // header inert, so keyboard and screen-reader focus stays inside the menu.
  useEffect(() => {
    if (!open) return undefined;
    const outside = [...document.body.children].filter(
      el => el !== headerRef.current && !el.hasAttribute('inert') && el.tagName !== 'SCRIPT'
    );
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.classList.add('nav-open');
    outside.forEach(el => el.setAttribute('inert', ''));
    return () => {
      document.documentElement.style.overflow = '';
      document.documentElement.classList.remove('nav-open');
      outside.forEach(el => el.removeAttribute('inert'));
    };
  }, [open]);

  // Escape closes the menu and returns focus to the button that opened it
  useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header ref={headerRef}>
      <nav
        className={`nav${scrolled ? ' scrolled' : ''}`}
        id="nav"
        aria-label="Main navigation"
        {...(open ? { 'data-open': '' } : {})}
      >
        <Link href="/" className="nav-logo" aria-label="Irish Hypnotherapy Conference 2027, home" onClick={close}>
          <img width="160" height="150" src={LOGO_SRC} alt="IHC" />
          <div className="nav-logo-name">
            Irish Hypnotherapy Conference<span>Dublin · April 2027</span>
          </div>
        </Link>

        <button
          className="nav-hamburger"
          id="nav-toggle"
          ref={toggleRef}
          type="button"
          aria-controls="nav-links"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span>
          <span></span>
        </button>

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

      </nav>
    </header>
  );
}
