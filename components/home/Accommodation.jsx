export default function Accommodation() {
  return (
    <>
<section className="accom-section dark-section" aria-labelledby="accom-hl">
<div className="section-wrap">
  <div className="eyebrow reveal">Where to Stay</div>
  <h2 className="reveal" id="accom-hl" style={{fontSize:'clamp(2.2rem,4.5vw,4.5rem)',fontWeight:'300',fontStyle:'italic',lineHeight:'1',letterSpacing:'-.02em',color:'#fff',marginBottom:'.5rem'}}>Rest well,<br/><strong style={{fontWeight:'700',fontStyle:'normal'}}>arrive ready</strong></h2>
  <div className="accom-grid">
    <div className="accom-card reveal">
      <span className="accom-badge">Official Conference Hotel</span>
      <h3>Clayton Hotel<br/>Liffey Valley</h3>
      <p>Stay at the conference venue itself, no commute, no stress. Deluxe rooms, family suites, and accessible bedrooms available. All guests enjoy complimentary use of the 20m heated pool, gym, jacuzzi, and steam room. Overnight parking is just €10. Book direct and save 10% every night.</p>
      <div className="accom-detail">Book direct at claytonhotels.com · Mention IHC 2027 for delegate enquiries</div>
      <a href="https://www.claytonhotels.com/liffey-valley/" className="accom-link" target="_blank" rel="noopener">
        Book at Clayton Hotels
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
    <div className="accom-card reveal">
      <span className="accom-badge">Nearby Options</span>
      <h3>Alternative<br/>Hotels Nearby</h3>
      <p>Several well-regarded hotels are located within 10–20 minutes of the venue by car or public transport.</p>
      <ul className="accom-list">
        <li>Citywest Hotel &amp; Conference Centre, approx. 10 min by car</li>
        <li>Maldron Hotel Newlands Cross, approx. 8 min by car</li>
        <li>Bewley's Hotel Newlands Cross, approx. 8 min by car, budget-friendly</li>
        <li>Travelodge Dublin Liffey Valley, adjacent to the venue</li>
      </ul>
    </div>
  </div>
</div>
</section>
    </>
  );
}
