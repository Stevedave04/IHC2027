export default function HowItWorks() {
  return (
    <>
<section className="light-section" aria-labelledby="how-hl" style={{background:'var(--parchment-2)',padding:'5rem 0'}}>
<div className="section-wrap">
  <div className="eyebrow reveal" style={{justifyContent:'center'}}>How It Works</div>
  <h2 className="reveal" id="how-hl" style={{fontSize:'clamp(2rem,4vw,3.5rem)',fontWeight:'300',fontStyle:'italic',lineHeight:'1.1',letterSpacing:'-.02em',color:'var(--text)',textAlign:'center',marginBottom:'3.5rem'}}>Three steps to the<br/><strong style={{fontWeight:'700',fontStyle:'normal'}}>best weekend of your year</strong></h2>
  <div className="how-grid">
    <div className="how-step reveal">
      <div className="how-num" aria-hidden="true">01</div>
      <h3 className="how-title">Choose your ticket</h3>
      <p className="how-body">Day Pass, 3-Day Pass, or Platinum VIP — all include full CPD accreditation. Flexible payment plans available. Takes two minutes to book.</p>
    </div>
    <div className="how-step reveal">
      <div className="how-num" aria-hidden="true">02</div>
      <h3 className="how-title">Join us in Dublin</h3>
      <p className="how-body">Arrive at Clayton Hotel Liffey Valley on 16 April, meet 200+ practitioners, and immerse yourself in three days of keynotes, workshops, and genuine connection.</p>
    </div>
    <div className="how-step reveal">
      <div className="how-num" aria-hidden="true">03</div>
      <h3 className="how-title">Leave better equipped</h3>
      <p className="how-body">Go home with new techniques, 24+ CPD hours, session recordings, and a network of peers still in your phone when you need them in December.</p>
    </div>
  </div>
  <div style={{textAlign:'center',marginTop:'3rem'}} className="reveal">
    <a href="#tickets" className="btn-gold">Secure Your Place</a>
  </div>
</div>
</section>
    </>
  );
}
