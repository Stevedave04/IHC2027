import './refund-policy.css';

export const metadata = {
  title: "Refund &amp; Cancellations Policy",
  description: "Refund and cancellations policy for the Irish Hypnotherapy Conference 2027 \u2014 ticket cancellation terms, transfer rules, and how to request a refund.",
  alternates: { canonical: '/refund-policy' },
  openGraph: { title: "Refund &amp; Cancellations Policy", description: "Refund and cancellations policy for the Irish Hypnotherapy Conference 2027 \u2014 ticket cancellation terms, transfer rules, and how to request a refund.", url: '/refund-policy' },
};

export default function Page() {
  return (
    <>
<div className="page-header" role="banner">
  <div className="page-header-ghost" aria-hidden="true">Refunds</div>
  <p className="page-eyebrow">Irish Hypnotherapy Conference 2027</p>
  <h1 className="page-title">Refund &amp;<br/><strong style={{fontWeight:'700',fontStyle:'normal'}}>Cancellations</strong></h1>
  <div className="page-rule" aria-hidden="true"></div>
</div>


<main id="main">
<div className="rp-wrap">

  <p className="rp-intro">We understand that circumstances change. This policy sets out the terms under which ticket cancellations and refunds are handled for the Irish Hypnotherapy Conference 2027.</p>

  <article className="rp-section">
    <span className="rp-section-num">01</span>
    <h2>Cancellation Deadline</h2>
    <div className="rp-timeline" role="table" aria-label="Refund timeline">
      <div className="rp-timeline-item" role="row">
        <div className="rp-timeline-period" role="cell">More than 30 days before</div>
        <div className="rp-timeline-detail" role="cell">Full refund available</div>
      </div>
      <div className="rp-timeline-item" role="row">
        <div className="rp-timeline-period" role="cell">14–30 days before</div>
        <div className="rp-timeline-detail" role="cell">50% refund available</div>
      </div>
      <div className="rp-timeline-item" role="row">
        <div className="rp-timeline-period" role="cell">Within 14 days</div>
        <div className="rp-timeline-detail" role="cell">No refund issued</div>
      </div>
    </div>
  </article>

  <article className="rp-section">
    <span className="rp-section-num">02</span>
    <h2>Refund Process</h2>
    <ul className="rp-list">
      <li>All refund requests must be submitted via email to <a href="mailto:john@irishhypnotherapyconference.ie" style={{color:'var(--gold)',borderBottom:'1px solid var(--gold-rule)'}}>john@irishhypnotherapyconference.ie</a></li>
      <li>Refunds will be processed within 7–10 business days</li>
      <li>Refunds will be credited to the original payment method</li>
    </ul>
  </article>

  <article className="rp-section">
    <span className="rp-section-num">03</span>
    <h2>Ticket Transferability</h2>
    <ul className="rp-list">
      <li>Tickets are fully transferable to another attendee</li>
      <li>Name change requests must be submitted at least 7 days before the conference</li>
      <li>No additional fee for ticket transfer</li>
    </ul>
  </article>

  <article className="rp-section">
    <span className="rp-section-num">04</span>
    <h2>Special Circumstances</h2>
    <ul className="rp-list">
      <li>In case of medical emergencies, documentation may be required</li>
      <li>Partial credit or a future conference ticket may be offered at the conference organisers' discretion</li>
    </ul>
  </article>

  <article className="rp-section">
    <span className="rp-section-num">05</span>
    <h2>Conference Cancellation</h2>
    <ul className="rp-list">
      <li>If the conference is cancelled by the organisers, a 100% full refund will be issued</li>
      <li>Attendees will be notified via email and provided with alternative options</li>
    </ul>
  </article>

  
  <div className="rp-contact" role="complementary" aria-label="How to request a refund">
    <span className="rp-contact-label">How to Request a Refund</span>
    <h2>Get in touch</h2>
    <a href="mailto:john@irishhypnotherapyconference.ie" className="rp-contact-email">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
      john@irishhypnotherapyconference.ie
    </a>
    <p style={{fontSize:'.8rem',fontWeight:'300',color:'rgba(255,255,255,.35)',marginTop:'1.5rem',marginBottom:'.5rem',letterSpacing:'.1em',textTransform:'uppercase'}}>Please include in your email:</p>
    <ul className="rp-contact-list">
      <li>Full name</li>
      <li>Ticket reference number</li>
      <li>Reason for cancellation</li>
      <li>Preferred refund method</li>
    </ul>
    <p className="rp-note">All refunds are subject to review and approval by conference management.</p>
  </div>

</div>
</main>
    </>
  );
}
