import './blog.css';
import NewsletterForm from '../../components/shared/NewsletterForm';

export const metadata = {
  title: "News &amp; Insights",
  description: "News, research highlights, and insights from the Irish Hypnotherapy Conference \u2014 speaker spotlights, industry updates, and conference announcements.",
  alternates: { canonical: '/blog' },
  openGraph: { title: "News &amp; Insights", description: "News, research highlights, and insights from the Irish Hypnotherapy Conference \u2014 speaker spotlights, industry updates, and conference announcements.", url: '/blog' },
};

export default function Page() {
  return (
    <>
<div className="page-header" role="banner">
  <div className="page-header-ghost" aria-hidden="true">News</div>
  <p className="page-eyebrow">News &amp; Insights</p>
  <h1 className="page-title">From the<br/><strong style={{fontWeight:'700',fontStyle:'normal'}}>Conference</strong></h1>
  <div className="page-rule" aria-hidden="true"></div>
</div>


<main id="main">
<div className="blog-wrap">

  
  <article className="blog-feature reveal" aria-label="Featured article">
    <div className="blog-img-placeholder" role="img" aria-label="Article image coming soon" style={{height:'360px'}}>
      <span>Image coming soon</span>
    </div>
    <div>
      <div className="blog-eyebrow">
        <span className="blog-cat">Speaker Spotlight</span>
        <span className="blog-date">10 March 2027</span>
      </div>
      <h2 className="blog-feature-title">Meet Our Headline Speaker: Melissa Tiers</h2>
      <p className="blog-excerpt">New York-based educator, author, and practitioner Melissa Tiers has spent over two decades at the intersection of neuroscience and hypnotherapy. We spoke with her about her approach to the IHC keynote, what she hopes attendees will take home, and why she believes Irish practitioners are among the most open-minded in Europe.</p>
      <span className="blog-link" style={{opacity:'.55'}} aria-hidden="true">Full Article Coming Soon</span>
    </div>
  </article>

  
  <div className="blog-section-head">
    <h2 className="blog-section-title">Latest News</h2>
    <div className="blog-section-rule" aria-hidden="true"></div>
  </div>

  <div className="blog-grid" role="list">

    <article className="blog-card reveal" role="listitem">
      <div className="blog-img-placeholder" role="img" aria-label="Article image coming soon">Image coming soon</div>
      <div className="blog-eyebrow" style={{marginTop:'0'}}>
        <span className="blog-cat">Conference News</span>
        <span className="blog-date">28 February 2027</span>
      </div>
      <h3 className="blog-card-title">Early Bird Tickets: Why Now Is the Time to Book</h3>
      <p className="blog-card-excerpt">With early bird pricing closing on 15 March, we break down exactly what each ticket tier includes — and why the 3-Day Pass is the best value for serious practitioners.</p>
      <a href="/#tickets" className="blog-link" aria-label="View ticket options">View Tickets &rarr;</a>
    </article>

    <article className="blog-card reveal" role="listitem">
      <div className="blog-img-placeholder" role="img" aria-label="Article image coming soon">Image coming soon</div>
      <div className="blog-eyebrow" style={{marginTop:'0'}}>
        <span className="blog-cat">Research</span>
        <span className="blog-date">14 February 2027</span>
      </div>
      <h3 className="blog-card-title">New Research: Hypnotherapy and Chronic Pain Management</h3>
      <p className="blog-card-excerpt">A landmark meta-analysis published in the <em>International Journal of Clinical and Experimental Hypnosis</em> this month reinforces what many IHC speakers will be discussing in April.</p>
      <span className="blog-link" style={{opacity:'.55'}} aria-hidden="true">Full Article Coming Soon</span>
    </article>

    <article className="blog-card reveal" role="listitem">
      <div className="blog-img-placeholder" role="img" aria-label="Article image coming soon">Image coming soon</div>
      <div className="blog-eyebrow" style={{marginTop:'0'}}>
        <span className="blog-cat">Conference News</span>
        <span className="blog-date">1 February 2027</span>
      </div>
      <h3 className="blog-card-title">What to Expect at IHC 2027: A First-Timer's Guide</h3>
      <p className="blog-card-excerpt">Attending IHC for the first time? We've put together a practical guide covering registration, the venue, workshop selection, networking, and how to get the most from three intensive days.</p>
      <span className="blog-link" style={{opacity:'.55'}} aria-hidden="true">Full Article Coming Soon</span>
    </article>

    <article className="blog-card reveal" role="listitem">
      <div className="blog-img-placeholder" role="img" aria-label="Article image coming soon">Image coming soon</div>
      <div className="blog-eyebrow" style={{marginTop:'0'}}>
        <span className="blog-cat">Conference News</span>
        <span className="blog-date">18 January 2027</span>
      </div>
      <h3 className="blog-card-title">Venue Spotlight: Clayton Hotel Liffey Valley, Dublin</h3>
      <p className="blog-card-excerpt">The Clayton Hotel Liffey Valley returns as our official venue. We take a closer look at the conference facilities, the room block booking arrangement, and how to get there from Dublin city centre.</p>
      <a href="/#venue" className="blog-link" aria-label="View venue details">View Venue &rarr;</a>
    </article>

    <article className="blog-card reveal" role="listitem">
      <div className="blog-img-placeholder" role="img" aria-label="Article image coming soon">Image coming soon</div>
      <div className="blog-eyebrow" style={{marginTop:'0'}}>
        <span className="blog-cat">Industry Insights</span>
        <span className="blog-date">5 January 2027</span>
      </div>
      <h3 className="blog-card-title">The Evolution of Irish Hypnotherapy: 2013–2027</h3>
      <p className="blog-card-excerpt">As IHC marks its fourth edition, we reflect on how the profession has changed since our first gathering in 2013 — from fringe curiosity to evidence-informed mainstream practice.</p>
      <span className="blog-link" style={{opacity:'.55'}} aria-hidden="true">Full Article Coming Soon</span>
    </article>

  </div>

  
  <div className="blog-newsletter" role="complementary" aria-label="Newsletter sign-up">
    <span className="blog-newsletter-label">Stay Informed</span>
    <h2>Never miss an update</h2>
    <p>Conference news, speaker announcements, and early-access offers — straight to your inbox.</p>
    <NewsletterForm className="newsletter-form" id="blog-email" subject="IHC 2027 — Newsletter signup (blog)" />
  </div>

</div>
</main>
    </>
  );
}
