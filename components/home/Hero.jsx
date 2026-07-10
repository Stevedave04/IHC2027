import Countdown from './Countdown';
import HeroIntro from './HeroIntro';
import { BASE } from '../../lib/site';

export default function Hero() {
  return (
    <section className="hero" id="main" aria-labelledby="hero-hl">
      <img width="1600" height="629" src={BASE + "/ihc2026.jpeg"} alt="" className="hero-bg" aria-hidden="true" fetchPriority="high" />
      <div className="hero-ghost" aria-hidden="true">IHC</div>
      <div className="hero-corners" aria-hidden="true">
        <span className="hc tl"></span>
        <span className="hc tr"></span>
        <span className="hc bl"></span>
        <span className="hc br"></span>
      </div>

      <div className="hero-logo-wrap">
        <img width="160" height="150" src={BASE + "/logo.png"} alt="Irish Hypnotherapy Conference" />
      </div>

      <p className="hero-eyebrow">16–18 April 2027 &ensp;·&ensp; Clayton Hotel, Dublin</p>
      <h1 className="hero-title" id="hero-hl">
        <span className="hero-line"><span className="hero-line-inner">The three days</span></span>
        <span className="hero-line"><span className="hero-line-inner">that reshape</span></span>
        <span className="hero-line"><strong className="hero-line-inner">how you practise</strong></span>
      </h1>
      <p className="hero-year">Irish Hypnotherapy Conference &ensp;·&ensp; Dublin MMXXVII</p>
      <div className="hero-rule" aria-hidden="true"></div>

      <div className="hero-actions">
        <a href="#tickets" className="btn-gold">Secure Your Place</a>
        <a href="#speakers" className="btn-outline">View Speakers</a>
      </div>

      <Countdown />
      <a href={BASE + "/ihc2027.ics"} download="ihc2027.ics" className="add-cal">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="10" y1="16" x2="14" y2="16"/></svg>
        Add to Calendar
      </a>
      <HeroIntro />
    </section>
  );
}
