import './globals.css';
import Cursor from '../components/shared/Cursor';
import Nav from '../components/shared/Nav';
import Footer from '../components/shared/Footer';
import RevealManager from '../components/shared/RevealManager';

const FONT_URL =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';

export const metadata = {
  metadataBase: new URL('https://stevedave04.github.io/IHC2027/'),
  title: {
    default: 'Irish Hypnotherapy Conference 2027 | Dublin · 16–18 April',
    template: '%s | Irish Hypnotherapy Conference 2027',
  },
  description:
    "Ireland's premier hypnotherapy conference — three days of world-class training, 40+ international speakers, workshops, CPD hours and the annual gala awards dinner in Dublin.",
  icons: {
    icon: [{ url: '/IHC2027/favicon-48.png', sizes: '48x48', type: 'image/png' }],
    apple: [{ url: '/IHC2027/apple-touch-icon.png' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Irish Hypnotherapy Conference 2027',
    images: ['/IHC2027/ihc2026.jpeg'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className="js">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://formsubmit.co; form-action 'self'; object-src 'none'; base-uri 'self'"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_URL} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Cursor />
        <Nav />
        {children}
        <Footer />
        <RevealManager />
      </body>
    </html>
  );
}
