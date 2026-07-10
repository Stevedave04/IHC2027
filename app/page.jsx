import './home-a.css';
import './home-b.css';

import Hero from '../components/home/Hero';
import Marquee from '../components/home/Marquee';
import Numbers from '../components/home/Numbers';
import About from '../components/home/About';
import Speakers from '../components/home/Speakers';
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
import ScrollTop from '../components/shared/ScrollTop';

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

const BASE = 'https://stevedave04.github.io/IHC2027';

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
  image: [`${BASE}/ihc2026.jpeg`],
  description:
    "Ireland's premier hypnotherapy conference — three days of world-class training, 40+ international speakers, workshops, CPD hours and the annual gala awards dinner in Dublin.",
  offers: [
    { '@type': 'Offer', name: 'Day Pass', price: '175', priceCurrency: 'EUR', url: `${BASE}/#tickets`, availability: 'https://schema.org/InStock', validFrom: '2026-01-01' },
    { '@type': 'Offer', name: '3-Day Pass', price: '450', priceCurrency: 'EUR', url: `${BASE}/#tickets`, availability: 'https://schema.org/InStock', validFrom: '2026-01-01' },
    { '@type': 'Offer', name: 'VIP Platinum', price: '650', priceCurrency: 'EUR', url: `${BASE}/#tickets`, availability: 'https://schema.org/LimitedAvailability', validFrom: '2026-01-01' },
  ],
  performer: ['Melissa Tiers', 'Mike Mandel', 'Karl Smith', 'Sheila Granger', 'Scott Sandland', 'Sean Michael Andrews', 'Rob De Groof']
    .map(name => ({ '@type': 'Person', name })),
  organizer: { '@type': 'Organization', name: 'Irish Hypnotherapy Conference', url: 'https://irishhypnotherapyconference.ie' },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_LD) }} />
      <Hero />
      <Marquee />
      <Numbers />
      <About />
      <Speakers />
      <HowItWorks />
      <Schedule />
      <Tickets />
      <Testimonials />
      <Gallery />
      <Awards />
      <Venue />
      <Accommodation />
      <Faq />
      <Contact />
      <ScrollTop />
    </>
  );
}
