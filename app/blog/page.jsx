import Link from 'next/link';
import './blog.css';
import NewsletterForm from '../../components/shared/NewsletterForm';
import { POSTS } from '../../lib/posts';
import { BASE } from '../../lib/site';

const DESC =
  'Dublin city guides, day trips, travel tips and Irish culture, why the setting is half the reason to attend the Irish Hypnotherapy Conference 2027.';

export const metadata = {
  title: 'Discover Dublin & Ireland',
  description: DESC,
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Discover Dublin & Ireland', description: DESC, url: '/blog' },
};

export default function Page() {
  const [feature, ...rest] = POSTS;

  return (
    <>
      <div className="page-header" role="banner">
        <div className="page-header-ghost" aria-hidden="true">Éire</div>
        <p className="page-eyebrow">Discover Dublin &amp; Ireland</p>
        <h1 className="page-title">
          Half the reason<br /><strong style={{ fontWeight: 700, fontStyle: 'normal' }}>to come</strong>
        </h1>
        <div className="page-rule" aria-hidden="true"></div>
      </div>

      <main id="main">
        <div className="blog-wrap">
          <article className="blog-feature reveal" aria-label="Featured article">
            <Link href={`/blog/${feature.slug}`} className="blog-img-link" aria-hidden="true" tabIndex={-1}>
              <img src={BASE + feature.image.src} alt={feature.image.alt} className="blog-img" style={{ height: '360px' }} loading="eager" />
            </Link>
            <div>
              <div className="blog-eyebrow">
                <span className="blog-cat">{feature.category}</span>
                <span className="blog-date">{feature.dateLabel} · {feature.readMins} min read</span>
              </div>
              <h2 className="blog-feature-title">
                <Link href={`/blog/${feature.slug}`}>{feature.title}</Link>
              </h2>
              <p className="blog-excerpt">{feature.excerpt}</p>
              <Link href={`/blog/${feature.slug}`} className="blog-link" aria-label={`Read: ${feature.title}`}>
                Read Article &rarr;
              </Link>
            </div>
          </article>

          <div className="blog-section-head">
            <h2 className="blog-section-title">Plan Your Trip</h2>
            <div className="blog-section-rule" aria-hidden="true"></div>
          </div>

          <div className="blog-grid" role="list">
            {rest.map(post => (
              <article className="blog-card reveal" role="listitem" key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="blog-img-link" aria-hidden="true" tabIndex={-1}>
                  <img src={BASE + post.image.src} alt={post.image.alt} className="blog-img blog-img-card" loading="lazy" />
                </Link>
                <div className="blog-eyebrow" style={{ marginTop: 0 }}>
                  <span className="blog-cat">{post.category}</span>
                  <span className="blog-date">{post.dateLabel} · {post.readMins} min</span>
                </div>
                <h3 className="blog-card-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="blog-link" aria-label={`Read: ${post.title}`}>
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>

          <div className="blog-newsletter" role="complementary" aria-label="Newsletter sign-up">
            <span className="blog-newsletter-label">Stay Informed</span>
            <h2>Never miss an update</h2>
            <p>Conference news, speaker announcements, and early-access offers, straight to your inbox.</p>
            <NewsletterForm className="newsletter-form" id="blog-email" subject="IHC 2027 - Newsletter signup (blog)" />
          </div>
        </div>
      </main>
    </>
  );
}
