import './privacy-policy.css';
import { OG_IMAGE } from '../../lib/site';
import { CONTACT_EMAIL } from '../../lib/contact';

const Mail = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Irish Hypnotherapy Conference, what personal data we collect, why we collect it and your rights.",
  alternates: { canonical: '/privacy-policy' },
  openGraph: { title: "Privacy Policy", description: "Privacy Policy for the Irish Hypnotherapy Conference, what personal data we collect, why we collect it and your rights.", url: '/privacy-policy', images: [OG_IMAGE] },
};

export default function Page() {
  return (
    <>
<div className="page-header">
  <div className="page-header-ghost" aria-hidden="true">Privacy</div>
  <p className="page-eyebrow">Irish Hypnotherapy Conference 2027</p>
  <h1 className="page-title">Privacy<br/><strong style={{fontWeight:'700',fontStyle:'normal'}}>Policy</strong></h1>
  <p className="page-updated">Updated November 2026</p>
  <div className="page-rule" aria-hidden="true"></div>
</div>


<main id="main">
<div className="pp-wrap">

  <p className="pp-intro">This policy explains what personal data the Irish Hypnotherapy Conference collects through this website, why we collect it and what your rights are. We handle your data in line with the General Data Protection Regulation (GDPR) and the Irish Data Protection Act 2018.</p>

  <article className="pp-section">
    <span className="pp-section-num">01</span>
    <h2>Who We Are</h2>
    <p>This website is run by the Irish Hypnotherapy Conference, the organiser of the annual conference held in Dublin. We are the data controller for the personal data described in this policy.</p>
    <p>For any question about your data, email <Mail />.</p>
  </article>

  <article className="pp-section">
    <span className="pp-section-num">02</span>
    <h2>What We Collect and Why</h2>
    <p><strong>Contact form.</strong> When you send us a message we receive your name, email address, subject and message. We use them only to reply to you and deal with your enquiry.</p>
    <p><strong>Email updates.</strong> When you sign up for updates, or ask to be told when speaker applications reopen, we receive your email address. We use it only to send you conference news such as speaker announcements, ticket news and programme updates. You can ask us to stop at any time.</p>
    <p><strong>Tickets.</strong> Tickets are bought through our online shop at <a href="https://irishhypnotherapyconference.ie" rel="noopener">irishhypnotherapyconference.ie</a>. The details you enter at checkout are used to process your booking, admit you to the event and contact you about it. Card payments are handled by the shop&rsquo;s payment provider.</p>
    <p><strong>Speaker applications.</strong> When applications are open, the application form collects the details you choose to give us about yourself and your proposed session. We use them only to assess your application and to contact you about it.</p>
    <p>We do not buy data about you, and we do not sell or rent your data to anyone.</p>
  </article>

  <article className="pp-section">
    <span className="pp-section-num">03</span>
    <h2>Our Legal Basis</h2>
    <p>We rely on your consent to send you email updates, on our legitimate interest in answering the enquiries and applications you send us, and on the contract between us when you buy a ticket. Where the law requires us to keep records, such as accounts, we rely on that legal obligation.</p>
  </article>

  <article className="pp-section">
    <span className="pp-section-num">04</span>
    <h2>Cookies</h2>
    <p>This website does not set any cookies and does not use advertising or tracking technologies, so there is no cookie banner.</p>
    <p>The ticket shop is a separate site. It uses the cookies needed to keep your basket and complete your order.</p>
  </article>

  <article className="pp-section">
    <span className="pp-section-num">05</span>
    <h2>Analytics</h2>
    <p>This site uses Cloudflare Web Analytics to count visits and see which pages are useful. It does not use cookies, does not track you across other websites and does not collect personal data such as your name or email address.</p>
  </article>

  <article className="pp-section">
    <span className="pp-section-num">06</span>
    <h2>Who Handles Data for Us</h2>
    <p>We use a small number of service providers to run this site. They handle data only on our behalf:</p>
    <ul className="pp-list">
      <li><strong>Cloudflare</strong> hosts this website and provides the visit statistics described above.</li>
      <li><strong>FormSubmit</strong> delivers messages from the contact and email update forms to our inbox.</li>
      <li><strong>JotForm</strong> runs the speaker application form when applications are open.</li>
      <li><strong>Our ticket shop and its payment provider</strong> process ticket orders and payments.</li>
    </ul>
    <p>Some of these providers are based outside the European Economic Area, including in the United States. Where data is transferred, it is protected by the safeguards those providers have in place under data protection law, such as standard contractual clauses.</p>
  </article>

  <article className="pp-section">
    <span className="pp-section-num">07</span>
    <h2>How Long We Keep Your Data</h2>
    <p>We keep enquiries and applications only for as long as we need them to deal with your request and run the conference. We keep your email address on our updates list until you ask us to remove it. Booking records are kept for as long as tax and accounting law requires.</p>
  </article>

  <article className="pp-section">
    <span className="pp-section-num">08</span>
    <h2>Links to Other Websites</h2>
    <p>Our pages link to other websites, such as hotels, speakers&rsquo; own sites and places to visit in Dublin. We are not responsible for how those sites handle your data, so please read their own privacy policies.</p>
  </article>

  <div className="pp-rights" role="complementary" aria-label="Your data rights">
    <span className="pp-rights-label">Your Rights</span>
    <p>You have the right to ask for a copy of the personal data we hold about you, to have it corrected or deleted, to restrict or object to how we use it, and to receive it in a portable format. Where we rely on your consent, you can withdraw it at any time.</p>
    <p>To use any of these rights, email <Mail />. We will reply within one month.</p>
    <p>If you are unhappy with how we have handled your data, you can complain to the Data Protection Commission at <a href="https://www.dataprotection.ie" target="_blank" rel="noopener">dataprotection.ie</a>.</p>
  </div>

</div>
</main>
    </>
  );
}
