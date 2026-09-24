'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TICKET_PRICE } from '../../lib/event';

/** Slim bottom bar on mobile: appears once the hero has scrolled away,
 *  hides while the tickets section itself is in view. */
export default function MobileTicketBar() {
  const [pastHero, setPastHero] = useState(false);
  const [ticketsInView, setTicketsInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const tickets = document.getElementById('tickets');
    let io;
    if (tickets) {
      io = new IntersectionObserver(([entry]) => setTicketsInView(entry.isIntersecting), { threshold: 0.15 });
      io.observe(tickets);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, []);

  const visible = pastHero && !ticketsInView;

  return (
    <div className={`mobile-ticket-bar${visible ? ' visible' : ''}`} aria-hidden={!visible}>
      <div className="mtb-info">
        <span className="mtb-price">€{TICKET_PRICE}</span>
        <span className="mtb-meta">16–18 April · Dublin</span>
      </div>
      <Link href="/#tickets" className="mtb-cta" tabIndex={visible ? 0 : -1}>Get Tickets</Link>
    </div>
  );
}
