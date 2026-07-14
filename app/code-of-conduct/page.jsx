import './code-of-conduct.css';

export const metadata = {
  title: "Code of Conduct",
  description: "The Irish Hypnotherapy Conference Code of Conduct \u2014 our commitment to a professional, respectful, and collaborative environment for all participants.",
  alternates: { canonical: '/code-of-conduct' },
  openGraph: { title: "Code of Conduct", description: "The Irish Hypnotherapy Conference Code of Conduct \u2014 our commitment to a professional, respectful, and collaborative environment for all participants.", url: '/code-of-conduct' },
};

export default function Page() {
  return (
    <>
<div className="page-header" role="banner">
  <div className="page-header-ghost" aria-hidden="true">Conduct</div>
  <p className="page-eyebrow">Irish Hypnotherapy Conference 2027</p>
  <h1 className="page-title">Code of<br/><strong style={{fontWeight:'700',fontStyle:'normal'}}>Conduct</strong></h1>
  <div className="page-rule" aria-hidden="true"></div>
</div>


<main id="main">
<div className="coc-wrap">

  <p className="coc-intro">The Irish Hypnotherapy Conference is committed to creating a professional, respectful, and collaborative environment. All participants, including presenters, attendees, volunteers, and exhibitors, agree to uphold the following standards.</p>

  <article className="coc-section reveal">
    <span className="coc-section-num">01</span>
    <h2>Professionalism</h2>
    <p>Participants are expected to:</p>
    <ul className="coc-list">
      <li>Conduct themselves with integrity and professionalism</li>
      <li>Communicate in a respectful and ethical manner</li>
      <li>Maintain high standards during presentations, demonstrations, and interactions</li>
    </ul>
  </article>

  <article className="coc-section reveal">
    <span className="coc-section-num">02</span>
    <h2>Respect for Others</h2>
    <p>The Irish Hypnotherapy Conference is a welcoming and inclusive community. We ask all participants to:</p>
    <ul className="coc-list">
      <li>Treat everyone with courtesy, kindness, and respect</li>
      <li>Acknowledge the diverse backgrounds and experiences within our field</li>
      <li>Avoid language or behaviour that may harm or demean others</li>
    </ul>
  </article>

  <article className="coc-section reveal">
    <span className="coc-section-num">03</span>
    <h2>Open-Mindedness</h2>
    <p>Hypnosis and hypnotherapy encompass many approaches. Please:</p>
    <ul className="coc-list">
      <li>Stay open to new methods and perspectives</li>
      <li>Listen actively and consider alternative ideas</li>
      <li>Engage in questions and discussions with curiosity rather than criticism</li>
    </ul>
  </article>

  <article className="coc-section reveal">
    <span className="coc-section-num">04</span>
    <h2>Respect for Presenters and Presentations</h2>
    <p>To maintain a high-quality learning environment:</p>
    <ul className="coc-list">
      <li>Avoid interrupting speakers or causing disruptions</li>
      <li>Honour the effort presenters invest in their sessions</li>
      <li>Give presenters and fellow attendees your full attention</li>
    </ul>
  </article>

  <article className="coc-section reveal">
    <span className="coc-section-num">05</span>
    <h2>Community Over Competition</h2>
    <p>The Irish Hypnotherapy Conference is built on collaboration and shared growth. Participants are encouraged to:</p>
    <ul className="coc-list">
      <li>Support one another's success</li>
      <li>Avoid competitive or dismissive behaviour</li>
      <li>Engage in constructive, community-building conversations</li>
    </ul>
  </article>

  <article className="coc-section reveal">
    <span className="coc-section-num">06</span>
    <h2>Mindful Use of Language</h2>
    <p>Words matter. Please:</p>
    <ul className="coc-list">
      <li>Communicate in a way that uplifts and supports the community</li>
      <li>Avoid insensitive, inflammatory, or discriminatory language</li>
      <li>Consider how your words may impact others</li>
    </ul>
  </article>

  <article className="coc-section reveal">
    <span className="coc-section-num">07</span>
    <h2>Reporting Concerns</h2>
    <p>If you witness or experience behaviour that violates this Code of Conduct, please notify the event coordinator or conference leadership. All concerns will be addressed promptly and appropriately.</p>
  </article>

  <div className="coc-commitment" role="complementary" aria-label="Our commitment">
    <span className="coc-commitment-label">Our Commitment</span>
    <p>By attending the Irish Hypnotherapy Conference, you help shape the culture of our community. Thank you for contributing to a respectful, professional, and collaborative conference experience.</p>
  </div>

</div>
</main>
    </>
  );
}
