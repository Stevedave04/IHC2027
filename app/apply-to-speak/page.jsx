import './apply.css';
import JotformEmbed from '../../components/shared/JotformEmbed';

const DESC =
  'Present at the Irish Hypnotherapy Conference 2027. Submit your session, workshop or keynote proposal for the 16 to 18 April programme in Dublin.';

export const metadata = {
  title: 'Apply to Speak',
  description: DESC,
  alternates: { canonical: '/apply-to-speak' },
  openGraph: { title: 'Apply to Speak at IHC 2027', description: DESC, url: '/apply-to-speak' },
};

export default function ApplyToSpeakPage() {
  return (
    <>
      <div className="page-header" role="banner">
        <div className="page-header-ghost" aria-hidden="true">Speak</div>
        <p className="page-eyebrow">Call for Speakers</p>
        <h1 className="page-title">Apply to<br /><strong style={{ fontWeight: 700, fontStyle: 'normal' }}>speak in Dublin</strong></h1>
        <div className="page-rule" aria-hidden="true"></div>
      </div>

      <main id="main">
        <div className="apply-wrap">
          <p className="apply-intro">
            IHC 2027 brings together more than 200 practitioners, trainers and researchers across three
            days in Dublin. If you have a technique, a piece of research or a story the field needs to
            hear, we would love to read your proposal.
          </p>
          <ul className="apply-points">
            <li>Keynotes</li>
            <li>Workshops</li>
            <li>Research talks</li>
            <li>Panels</li>
          </ul>
          <div className="apply-form">
            <JotformEmbed formId="250962582497066" title="Apply to speak at IHC 2027" />
          </div>
        </div>
      </main>
    </>
  );
}
