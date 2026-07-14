import { BASE } from '../../lib/site';
export default function Gallery() {
  return (
    <>
<section className="gallery-section light-section" aria-labelledby="gallery-hl">
<div className="section-wrap">
  <div className="eyebrow reveal">IHC 2026 Highlights</div>
  <h2 className="reveal" id="gallery-hl" style={{fontSize:'clamp(2.5rem,5vw,5rem)',fontWeight:'300',fontStyle:'italic',lineHeight:'1',letterSpacing:'-.02em',color:'var(--text)',marginBottom:'.5rem'}}>The atmosphere<br/><strong style={{fontWeight:'700',fontStyle:'normal'}}>speaks for itself</strong></h2>
  <div className="gallery-columns reveal">
    <div className="gallery-item">
      <img width="1600" height="629" src={BASE + "/ihc2026.jpeg"} alt="Delegates seated in the main plenary hall at IHC 2026" loading="lazy" />
      <p className="gallery-caption">Main plenary session, IHC 2026</p>
    </div>
    <div className="gallery-item">
      <img width="1400" height="983" src={BASE + "/images/dublin/stone-bridge.jpg"} alt="An old stone bridge over an Irish river" loading="lazy" />
      <p className="gallery-caption">The River Liffey at Grattan Bridge, twenty minutes from the venue</p>
    </div>
    <div className="gallery-item">
      <div className="gallery-placeholder" style={{height:'260px'}}>Photo coming soon</div>
      <p className="gallery-caption">Gala Dinner &amp; Awards Ceremony</p>
    </div>
    <div className="gallery-item">
      <img width="1400" height="933" src={BASE + "/images/dublin/church-street.jpg"} alt="Anne Street South leading towards St Ann's Church, Dublin" loading="lazy" />
      <p className="gallery-caption">Anne Street South at dusk, Dublin on your doorstep</p>
    </div>
    <div className="gallery-item">
      <div className="gallery-placeholder" style={{height:'200px'}}>Photo coming soon</div>
      <p className="gallery-caption">Workshop sessions, Day 2</p>
    </div>
    <div className="gallery-item">
      <img width="1400" height="933" src={BASE + "/images/dublin/telephone-booth.jpg"} alt="The Temple Bar pub in Dublin's Temple Bar district" loading="lazy" />
      <p className="gallery-caption">The Temple Bar, first stop on any delegate&rsquo;s evening</p>
    </div>
  </div>
</div>
</section>
    </>
  );
}
