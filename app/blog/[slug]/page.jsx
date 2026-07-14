import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS, getPost } from '../../../lib/posts';
import { BASE, SITE_URL } from '../../../lib/site';
import '../blog.css';
import './article.css';

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, url: `/blog/${post.slug}`, type: 'article', images: [post.image.src] },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = POSTS.findIndex(p => p.slug === post.slug);
  const prev = POSTS[idx - 1];
  const next = POSTS[idx + 1];

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Irish Hypnotherapy Conference' },
    publisher: { '@type': 'Organization', name: 'Irish Hypnotherapy Conference', url: 'https://irishhypnotherapyconference.ie' },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
  const crumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }} />

      <header className="page-header article-header">
        <div className="page-header-ghost" aria-hidden="true">Éire</div>
        <p className="page-eyebrow">{post.category} &ensp;·&ensp; {post.dateLabel} &ensp;·&ensp; {post.readMins} min read</p>
        <h1 className="page-title article-title">{post.title}</h1>
        <div className="page-rule" aria-hidden="true"></div>
      </header>

      <div className="article-hero">
        <img src={BASE + post.image.src} alt={post.image.alt} width="1400" height="933" fetchPriority="high" />
      </div>

      <main id="main" className="article-wrap">
        <p className="article-standfirst">{post.excerpt}</p>

        {post.sections.map((s, i) =>
          s.quote ? (
            <blockquote className="article-quote" key={i}>{s.quote}</blockquote>
          ) : (
            <section key={i}>
              {s.heading && <h2 className="article-h2">{s.heading}</h2>}
              {s.paras.map((p, j) => (
                <p className="article-p" key={j}>{p}</p>
              ))}
            </section>
          )
        )}

        <aside className="article-cta">
          <span className="article-cta-eyebrow">See it for yourself</span>
          <p>
            IHC 2027 runs 16–18 April at the Clayton Hotel Liffey Valley, Dublin, three days of
            world-class hypnotherapy training with the city on your doorstep.
          </p>
          <Link href="/#tickets" className="btn-gold">View Tickets &amp; Pricing</Link>
        </aside>

        <nav className="article-pager" aria-label="More articles">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="pager-link">
              <span aria-hidden="true">&larr;</span> {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/blog/${next.slug}`} className="pager-link pager-next">
              {next.title} <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : <span />}
        </nav>
      </main>
    </>
  );
}
