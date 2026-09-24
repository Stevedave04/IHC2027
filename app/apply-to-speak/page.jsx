import Link from 'next/link';
import './apply.css';
import NewsletterForm from '../../components/shared/NewsletterForm';

const DESC =
  'Speaker applications for the Irish Hypnotherapy Conference are now closed. Applications reopen in April 2027. Sign up to be notified.';

export const metadata = {
  title: 'Apply to Speak',
  description: DESC,
  alternates: { canonical: '/apply-to-speak' },
  openGraph: { title: 'Apply to Speak at IHC', description: DESC, url: '/apply-to-speak' },
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
          <section className="apply-closed" aria-labelledby="apply-closed-hl">
            <span className="apply-status">Applications closed</span>
            <h2 className="apply-closed-hl" id="apply-closed-hl">
              Applications reopen<br /><strong>in April 2027</strong>
            </h2>
            <p className="apply-closed-body">
              Thank you to everyone who applied to speak at IHC 2027. Our line-up is now being
              finalised, and we will be in touch with applicants directly.
            </p>
            <p className="apply-closed-body">
              Applications open again in April 2027. Whether you are a seasoned presenter or have
              never spoken at a conference before, we would love to hear from you then.
            </p>

            <div className="apply-notify">
              <p className="apply-notify-label">Notify me when applications reopen</p>
              <NewsletterForm
                className="apply-notify-form"
                id="apply-notify-email"
                label="Notify Me"
                subject="IHC - Speaker applications reopening notification"
              />
            </div>

            <div className="apply-links">
              <Link href="/#speakers">View the 2027 speakers</Link>
              <Link href="/#tickets">Get tickets</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
