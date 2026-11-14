import SpeakerDirectory from '../../components/speakers/SpeakerDirectory';
import { SPEAKERS } from '../../lib/speakers';
import './speakers.css';
import { OG_IMAGE } from '../../lib/site';

const DESC = `Meet the ${SPEAKERS.length} confirmed speakers at the Irish Hypnotherapy Conference 2027, 16 to 18 April at Clayton Hotel Liffey Valley, Dublin. Keynotes from John Scanlon, Melissa Tiers and Mike Mandel.`;

export const metadata = {
  title: '2027 Speakers',
  description: DESC,
  alternates: { canonical: '/speakers' },
  openGraph: { title: 'IHC 2027 Speakers', description: DESC, url: '/speakers', images: [OG_IMAGE] },
};

export default function SpeakersPage() {
  return (
    <>
      <div className="page-header" role="banner">
        <div className="page-header-ghost" aria-hidden="true">Speakers</div>
        <p className="page-eyebrow">Dublin · 16–18 April 2027</p>
        <h1 className="page-title">The 2027<br /><strong style={{ fontWeight: 700, fontStyle: 'normal' }}>line-up</strong></h1>
        <div className="page-rule" aria-hidden="true"></div>
      </div>
      <main id="main">
        <div className="spk-wrap">
          <p className="spk-intro">
            {SPEAKERS.length} speakers across three days and three rooms, from internationally known trainers
            to practitioners presenting for the first time. Session times are being confirmed and will be
            added as the programme is finalised.
          </p>
          <SpeakerDirectory speakers={SPEAKERS.map(({ bio, ...rest }) => rest)} />
        </div>
      </main>
    </>
  );
}
