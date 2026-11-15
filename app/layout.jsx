import './globals.css';
import Nav from '../components/shared/Nav';
import Footer from '../components/shared/Footer';
import RevealManager from '../components/shared/RevealManager';
import ScrollTop from '../components/shared/ScrollTop';
import MobileTicketBar from '../components/shared/MobileTicketBar';
import { BASE, SITE_URL, OG_IMAGE } from '../lib/site';

const FONT_URL =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap';

export const metadata = {
  metadataBase: new URL(SITE_URL + '/'),
  title: {
    default: 'Irish Hypnotherapy Conference 2027 | Dublin · 16–18 April',
    template: '%s | Irish Hypnotherapy Conference 2027',
  },
  description:
    "Ireland's premier hypnotherapy conference, three days of world-class training, 50+ international speakers, workshops, CPD hours and the annual gala awards dinner in Dublin.",
  icons: {
    icon: [{ url: `${BASE}/favicon-48.png`, sizes: '48x48', type: 'image/png' }],
    apple: [{ url: `${BASE}/apple-touch-icon.png` }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Irish Hypnotherapy Conference 2027',
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE.url] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        {/* Mark JS as available before first paint so reveal animations only hide
            content when a script can bring it back; without JS everything stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_URL} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Nav />
        {children}
        <Footer />
        <ScrollTop />
        <MobileTicketBar />
        <RevealManager />
      </body>
    </html>
  );
}
