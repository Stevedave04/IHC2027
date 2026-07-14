import './workshops.css';

export const metadata = {
  title: "Workshops &amp; Masterclasses",
  description: "Explore the IHC 2027 workshop programme, three parallel tracks on Saturday 17 April and morning intensives on Sunday 18 April, covering clinical practice, research, and business growth.",
  alternates: { canonical: '/workshops' },
  openGraph: { title: "Workshops &amp; Masterclasses", description: "Explore the IHC 2027 workshop programme, three parallel tracks on Saturday 17 April and morning intensives on Sunday 18 April, covering clinical practice, research, and business growth.", url: '/workshops' },
};

export default function Page() {
  return (
    <>
<div className="page-header" role="banner">
  <div className="page-header-ghost" aria-hidden="true">Workshops</div>
  <p className="page-eyebrow">Irish Hypnotherapy Conference 2027</p>
  <h1 className="page-title">Workshops &amp;<br/><strong style={{fontWeight:'700',fontStyle:'normal'}}>Masterclasses</strong></h1>
  <div className="page-rule" aria-hidden="true"></div>
</div>


<main id="main">
<div className="ws-wrap">

  <p className="coc-intro">The IHC 2027 workshop programme is designed to move beyond theory into practice. Led by experienced clinicians and researchers, each session offers hands-on learning, case-based discussion, and immediately applicable skills, whatever your specialism or stage of career.</p>

  <article className="coc-section reveal">
    <span className="coc-section-num">01</span>
    <h2>Parallel Tracks</h2>
    <p className="section-meta">Saturday 17 April · 14:30–16:00</p>
    <p>Three simultaneous workshop streams run concurrently on Saturday afternoon. Choose the track that best fits your practice focus, full descriptions and presenter biographies will be published closer to the conference date.</p>
    <div className="track-grid" role="list">

      <div className="track-card" role="listitem">
        <span className="track-label">Track A · Clinical Practice</span>
        <h3 className="track-title">Advanced Pain Management Techniques</h3>
        <p className="track-presenter">Presenter TBC</p>
        <p className="track-room">Liffey Suite</p>
        <p className="track-desc">An evidence-informed workshop exploring hypnotic approaches to acute and chronic pain, including direct suggestion, metaphor, and neuroscience-based frameworks for explaining change to clients.</p>
      </div>

      <div className="track-card" role="listitem">
        <span className="track-label">Track B · Research &amp; Evidence</span>
        <h3 className="track-title">Translating Research into Practice</h3>
        <p className="track-presenter">Presenter TBC</p>
        <p className="track-room">Valley Suite</p>
        <p className="track-desc">A practical guide to reading and applying current hypnotherapy research, including how to communicate efficacy to clients and GPs, and common pitfalls when interpreting study findings.</p>
      </div>

      <div className="track-card" role="listitem">
        <span className="track-label">Track C · Business &amp; Growth</span>
        <h3 className="track-title">Building a Thriving Hypnotherapy Practice</h3>
        <p className="track-presenter">Presenter TBC</p>
        <p className="track-room">Salon A</p>
        <p className="track-desc">From referral networks and pricing strategy to online presence and client retention, a practical session for practitioners looking to grow or restructure their practice with confidence.</p>
      </div>

    </div>
  </article>

  <article className="coc-section reveal">
    <span className="coc-section-num">02</span>
    <h2>Morning Intensives</h2>
    <p className="section-meta">Sunday 18 April · 09:30–11:00</p>
    <p>Two in-depth morning sessions run in parallel on Sunday, providing extended time to explore specialist topics with a smaller group. Places are limited, included in all 3-Day and Platinum VIP passes.</p>
    <div className="intensive-grid" role="list">

      <div className="intensive-card" role="listitem">
        <span className="intensive-tag">Intensive &middot; 90 min</span>
        <h3 className="intensive-title">Hypnosis for Trauma-Informed Care</h3>
        <p className="intensive-meta">Various Speakers &middot; Liffey Suite</p>
        <p className="intensive-desc">A careful, supervised exploration of working with trauma histories in a hypnotherapeutic context. Covers screening, pace-setting, safe language, and when to refer. Suitable for practitioners with at least two years of clinical experience.</p>
      </div>

      <div className="intensive-card" role="listitem">
        <span className="intensive-tag">Intensive &middot; 90 min</span>
        <h3 className="intensive-title">Advanced Ericksonian Techniques</h3>
        <p className="intensive-meta">Various Speakers &middot; Valley Suite</p>
        <p className="intensive-desc">A deep-dive into Erickson's indirect suggestion, confusion techniques, and utilisation approaches, with live demonstrations and supervised practice. Participants will leave with expanded induction and intervention repertoire.</p>
      </div>

    </div>
  </article>

  <article className="coc-section reveal">
    <span className="coc-section-num">03</span>
    <h2>Choosing Your Track</h2>
    <p>All workshop streams are designed to be accessible to both newer and experienced practitioners. If you are unsure which track to attend, consider:</p>
    <ul className="coc-list">
      <li><strong>Track A (Clinical Practice)</strong>: best suited to those seeking new client-facing techniques and clinical frameworks</li>
      <li><strong>Track B (Research &amp; Evidence)</strong>: ideal for practitioners wishing to deepen their academic literacy or engage with referral networks</li>
      <li><strong>Track C (Business &amp; Growth)</strong>: recommended for those building, scaling, or repositioning their practice</li>
      <li>The Sunday Intensives are open to all 3-Day Pass and Platinum VIP holders, no separate booking required</li>
    </ul>
  </article>

  <div className="coc-commitment" role="complementary" aria-label="Workshops included in all passes">
    <span className="coc-commitment-label">Included in Your Pass</span>
    <p>All parallel workshop tracks are included with 3-Day and Platinum VIP passes. Day Pass holders may attend workshops on their registered day subject to capacity.</p>
    <a href="/#tickets" className="btn-gold">View Ticket Options</a>
  </div>

</div>
</main>
    </>
  );
}
