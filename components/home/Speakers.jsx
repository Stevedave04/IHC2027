import { BASE } from '../../lib/site';
export default function Speakers() {
  return (
    <>
<section className="light-section" id="speakers" aria-labelledby="speakers-hl">
<div className="section-wrap-wide">
  <div className="speakers-header">
    <div>
      <div className="eyebrow reveal" style={{'--eyebrow-c':'var(--gold)'}}>2027 Speakers</div>
      <h2 className="speakers-hl reveal" id="speakers-hl">
        <em>Leading Voices</em>
        Voices shaping<br/>the future
      </h2>
    </div>
    <a href="#tickets" className="speakers-link reveal">
      View Full Line-up
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><line x1="0" y1="5" x2="13" y2="5"/><polyline points="9 1 14 5 9 9"/></svg>
    </a>
  </div>

  <div className="speaker-grid">
    
    <article className="speaker-card sp-featured reveal" tabIndex="0" aria-label="Melissa Tiers, Keynote Speaker">
      <img width="480" height="302" src={BASE + "/images/speakers/melissa-tiers.jpg"} alt="" className="speaker-photo" aria-hidden="true" loading="lazy" />
      <span className="speaker-initial" aria-hidden="true">MT</span>
      <div>
        <div className="speaker-role">Keynote Speaker</div>
        <h3 className="speaker-name">Melissa Tiers</h3>
        <p className="speaker-spec">Author · Trainer · Integrative Hypnotherapy Innovator</p>
      </div>
      <div className="speaker-bio-reveal">
        <p className="speaker-bio-text">"Internationally celebrated hypnotherapist, NLP coach and best-selling author of <em>Integrative Hypnosis</em> and <em>Keeping the Brain in Mind</em>. Melissa's work at the Centre for Integrative Hypnosis in New York blends cutting-edge neuroscience with practical therapeutic artistry — reshaping how the field thinks about change."</p>
        <span className="speaker-bio-name">Melissa Tiers</span>
      </div>
    </article>

    <article className="speaker-card sp-wide reveal" tabIndex="0" aria-label="Mike Mandel, Keynote Speaker">
      <span className="speaker-initial" aria-hidden="true" style={{display:'flex'}}>MM</span>
      <div>
        <div className="speaker-role">Keynote Speaker</div>
        <h3 className="speaker-name">Mike Mandel</h3>
        <p className="speaker-spec">Founder, Mike Mandel Hypnosis Academy · World-Renowned Trainer</p>
      </div>
      <div className="speaker-bio-reveal">
        <p className="speaker-bio-text">"Eight-time winner of the World's Best Hypnotist award and founder of the Mike Mandel Hypnosis Academy — the gold standard in online hypnosis education with students in over 100 countries. Mike's infectious energy and masterful storytelling have captivated audiences worldwide for over four decades."</p>
        <span className="speaker-bio-name">Mike Mandel</span>
      </div>
    </article>

    <article className="speaker-card sp-mid reveal" tabIndex="0" aria-label="Karl Smith, Speaker">
      <img width="480" height="480" src={BASE + "/images/speakers/karl-smith.jpg"} alt="" className="speaker-photo" aria-hidden="true" loading="lazy" />
      <span className="speaker-initial" aria-hidden="true">KS</span>
      <div>
        <div className="speaker-role">Speaker</div>
        <h3 className="speaker-name">Karl Smith</h3>
        <p className="speaker-spec">Clinical Hypnotherapist · PTSD Specialist</p>
      </div>
      <div className="speaker-bio-reveal">
        <p className="speaker-bio-text">"Pioneering clinical hypnotherapist specialising in trauma resolution, PTSD, and anxiety disorders. Karl's evidence-led protocols have helped thousands of clients reclaim their lives and are taught to practitioners across Ireland and the UK."</p>
        <span className="speaker-bio-name">Karl Smith</span>
      </div>
    </article>

    <article className="speaker-card sp-small reveal" tabIndex="0" aria-label="Dr Rebecca Clavell-Bate, Keynote Speaker">
      <img width="480" height="320" src={BASE + "/images/speakers/at-desk.jpg"} alt="" className="speaker-photo" aria-hidden="true" loading="lazy" />
      <span className="speaker-initial" aria-hidden="true">RC</span>
      <div>
        <div className="speaker-role">Keynote</div>
        <h3 className="speaker-name">Dr Rebecca Clavell-Bate</h3>
        <p className="speaker-spec">Medical Doctor · Clinical Hypnotherapist</p>
      </div>
      <div className="speaker-bio-reveal">
        <p className="speaker-bio-text">"A practising medical doctor and accredited clinical hypnotherapist, Dr Clavell-Bate is a passionate advocate for integrating hypnotherapy into mainstream healthcare — backed by rigorous research and first-hand clinical experience."</p>
        <span className="speaker-bio-name">Dr Rebecca Clavell-Bate</span>
      </div>
    </article>

    <article className="speaker-card sp-wide reveal" tabIndex="0" aria-label="Sheila Granger, Keynote Speaker">
      <img width="480" height="321" src={BASE + "/images/speakers/sheila-granger.jpg"} alt="" className="speaker-photo" aria-hidden="true" loading="lazy" />
      <span className="speaker-initial" aria-hidden="true">SG</span>
      <div>
        <div className="speaker-role">Keynote</div>
        <h3 className="speaker-name">Sheila Granger</h3>
        <p className="speaker-spec">Creator of the Virtual Gastric Band Programme</p>
      </div>
      <div className="speaker-bio-reveal">
        <p className="speaker-bio-text">"Creator of the globally acclaimed Virtual Gastric Band programme, used by thousands of practitioners across 40 countries. Sheila is widely recognised as one of the most influential hypnotherapists working in weight management and behaviour change today."</p>
        <span className="speaker-bio-name">Sheila Granger</span>
      </div>
    </article>

    <article className="speaker-card sp-trio reveal" tabIndex="0" aria-label="Scott Sandland, Speaker">
      <img width="270" height="480" src={BASE + "/images/speakers/scott-sandland.jpg"} alt="" className="speaker-photo" aria-hidden="true" loading="lazy" />
      <span className="speaker-initial" aria-hidden="true">SS</span>
      <div>
        <div className="speaker-role">Speaker</div>
        <h3 className="speaker-name">Scott Sandland</h3>
        <p className="speaker-spec">Clinical Hypnotherapist · Researcher · Podcaster</p>
      </div>
      <div className="speaker-bio-reveal">
        <p className="speaker-bio-text">"Founder of The California Hypnosis Institute and host of the Hypnosis and Suggestion podcast, Scott brings the latest clinical research into accessible, actionable insights for practitioners at every level."</p>
        <span className="speaker-bio-name">Scott Sandland</span>
      </div>
    </article>

    <article className="speaker-card sp-trio reveal" tabIndex="0" aria-label="Sean Michael Andrews, Workshop Leader">
      <img width="480" height="480" src={BASE + "/images/speakers/sean-michael-andrews.jpg"} alt="" className="speaker-photo" aria-hidden="true" loading="lazy" />
      <span className="speaker-initial" aria-hidden="true">SA</span>
      <div>
        <div className="speaker-role">Workshop Leader</div>
        <h3 className="speaker-name">Sean Michael Andrews</h3>
        <p className="speaker-spec">Master Hypnotherapist · Stage Hypnotist</p>
      </div>
      <div className="speaker-bio-reveal">
        <p className="speaker-bio-text">"Known as 'The World's Fastest Hypnotist', Sean is a master of rapid induction techniques and high-impact live demonstrations. His workshops combine awe-inspiring speed with deep practical skill-building for professional hypnotherapists."</p>
        <span className="speaker-bio-name">Sean Michael Andrews</span>
      </div>
    </article>

    <article className="speaker-card sp-trio reveal" tabIndex="0" aria-label="Rob De Groof, Speaker">
      <img width="480" height="480" src={BASE + "/images/speakers/rob-de-groof.jpg"} alt="" className="speaker-photo" aria-hidden="true" loading="lazy" />
      <span className="speaker-initial" aria-hidden="true">RG</span>
      <div>
        <div className="speaker-role">Speaker</div>
        <h3 className="speaker-name">Rob De Groof</h3>
        <p className="speaker-spec">European Hypnotherapy Leader · Author</p>
      </div>
      <div className="speaker-bio-reveal">
        <p className="speaker-bio-text">"A leading figure in European hypnotherapy, Rob brings a distinctive integrative approach rooted in Ericksonian traditions and modern therapeutic frameworks. He trains and supervises practitioners across Belgium and the Netherlands."</p>
        <span className="speaker-bio-name">Rob De Groof</span>
      </div>
    </article>

    <div className="speaker-more reveal" aria-label="42 more speakers to be announced">
      <div className="speaker-more-num">42+</div>
      <div className="speaker-more-label">More speakers<br/>to be announced</div>
      <a href="#tickets" style={{fontSize:'.72rem',letterSpacing:'.14em',textTransform:'uppercase',color:'var(--gold)',fontWeight:'600',marginTop:'.5rem',borderBottom:'1px solid var(--gold-rule)',paddingBottom:'.2rem'}}>Register for updates</a>
    </div>
  </div>
</div>
</section>
    </>
  );
}
