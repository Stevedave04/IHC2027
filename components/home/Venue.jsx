export default function Venue() {
  return (
    <>
<section className="light-section" id="venue" aria-labelledby="venue-hl" style={{background:'var(--parchment-2)'}}>
<div className="section-wrap">
  <div className="venue-grid">
    <div>
      <div className="eyebrow reveal">Venue</div>
      <h2 className="venue-hl reveal" id="venue-hl">Clayton Hotel<br/><strong>Liffey Valley, Dublin</strong></h2>
      <div className="venue-addr reveal">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>Liffey Valley Retail Park, Quarryvale,<br/>Dublin 22, D22 HF52, Ireland</span>
      </div>
      <p className="venue-body reveal">A 4-star conference hotel set just off the M50 motorway, adjacent to Liffey Valley Shopping Centre. State-of-the-art meeting and event facilities accommodating up to 300 delegates, with Globe Restaurant &amp; Bar, Red Bean Roastery café, and a full leisure centre on site. Easy access by road and rail from Dublin city centre.</p>
      <div className="venue-feats reveal">
        <div className="venue-feat">Meeting Rooms — Up to 300 Delegates</div>
        <div className="venue-feat">Globe Restaurant &amp; Bar</div>
        <div className="venue-feat">Overnight Parking €10</div>
        <div className="venue-feat">Off M50 Motorway</div>
        <div className="venue-feat">20m Heated Swimming Pool</div>
        <div className="venue-feat">Accessible Bedrooms</div>
        <div className="venue-feat">Luas Red Line Nearby</div>
        <div className="venue-feat">Red Bean Roastery On Site</div>
      </div>
    </div>
    <div className="venue-card reveal">
      <div className="venue-card-bg-text" aria-hidden="true">IHC</div>
      <img width="160" height="150" src="/IHC2027/logo.png" alt="" className="venue-logo" aria-hidden="true" />
      <div className="venue-name">Clayton Hotel<br/>Liffey Valley</div>
      <div className="venue-date">16–18 April 2027 · Dublin, Ireland</div>
      <div className="venue-pin" aria-hidden="true"></div>
    </div>
  </div>
</div>
</section>
    </>
  );
}
