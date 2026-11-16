import './home-a.css';
import './home-b.css';

import Hero from '../components/home/Hero';
import Marquee from '../components/home/Marquee';
import Numbers from '../components/home/Numbers';
import About from '../components/home/About';
import Speakers from '../components/home/Speakers';
import FirstTimeSpeakers from '../components/home/FirstTimeSpeakers';
import HowItWorks from '../components/home/HowItWorks';
import Schedule from '../components/home/Schedule';
import Tickets from '../components/home/Tickets';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import Awards from '../components/home/Awards';
import Venue from '../components/home/Venue';
import Accommodation from '../components/home/Accommodation';
import Faq from '../components/home/Faq';
import Contact from '../components/home/Contact';
import { SITE_URL, OG_IMAGE } from '../lib/site';
import { TICKETS } from '../lib/event';
import { SPEAKERS } from '../lib/speakers';
import { buildProgramme } from '../lib/programme';

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/', images: [OG_IMAGE] },
};

const BASE = SITE_URL;

const EVENT_LD = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Irish Hypnotherapy Conference 2027',
  startDate: '2027-04-16T09:00:00+01:00',
  endDate: '2027-04-18T18:00:00+01:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Clayton Hotel Liffey Valley',
    address: { '@type': 'PostalAddress', addressLocality: 'Dublin', addressCountry: 'IE' },
  },
  image: [`${BASE}/og-2027.jpg`],
  description:
    "Ireland's premier hypnotherapy conference, three days of world-class training, 50+ international speakers, workshops, CPD hours and the annual gala awards dinner in Dublin.",
  offers: TICKETS.map(t => ({
    '@type': 'Offer', name: t.name, price: String(t.price), priceCurrency: 'EUR', url: t.url,
    availability: 'https://schema.org/InStock', validFrom: '2026-01-01',
  })),
  performer: SPEAKERS.map(s => ({ '@type': 'Person', name: s.name, url: `${BASE}/speakers/${s.slug}` })),
  organizer: { '@type': 'Organization', name: 'Irish Hypnotherapy Conference', url: 'https://irishhypnotherapyconference.ie' },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_LD) }} />
      <main id="main">
      <Hero />
      <Marquee />
      <Numbers />
      <About />
      <Speakers />
      <FirstTimeSpeakers />
      <HowItWorks />
      <Schedule days={buildProgramme()} />
      <Tickets />
      <Testimonials />
      <Gallery />
      <Awards />
      <Venue />
      <Accommodation />
      <Faq />
      <Contact />
      </main>
    </>
  );
}
