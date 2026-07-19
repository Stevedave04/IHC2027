import { BASE } from '../../lib/site';

const PHOTOS = [
  {
    src: '/images/dublin/telephone-booth.jpg',
    alt: "The Temple Bar pub in Dublin's Temple Bar district",
    caption: 'The Temple Bar, first stop on any delegate’s evening',
  },
  {
    src: '/images/dublin/church-street.jpg',
    alt: "Anne Street South leading towards St Ann's Church, Dublin",
    caption: 'Anne Street South, Dublin on your doorstep',
  },
  {
    src: '/images/dublin/stone-bridge.jpg',
    alt: 'Grattan Bridge over the River Liffey, Dublin',
    caption: 'Grattan Bridge on the Liffey, twenty minutes from the venue',
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section light-section" aria-labelledby="gallery-hl">
      <div className="section-wrap">
        <div className="eyebrow reveal">The Setting</div>
        <h2 className="reveal" id="gallery-hl" style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, letterSpacing: '-.02em', color: 'var(--text)', marginBottom: '.5rem' }}>
          The atmosphere<br /><strong style={{ fontWeight: 700, fontStyle: 'normal' }}>speaks for itself</strong>
        </h2>

        <div className="gallery-grid reveal">
          <figure className="gallery-item gallery-feature">
            <span className="gallery-frame">
              <img width="1600" height="629" src={BASE + '/ihc2026.jpeg'} alt="Delegates seated in the main plenary hall at IHC 2026" loading="lazy" />
            </span>
            <figcaption className="gallery-caption">Main plenary session, IHC 2026</figcaption>
          </figure>

          {PHOTOS.map(p => (
            <figure className="gallery-item" key={p.src}>
              <span className="gallery-frame">
                <img width="1400" height="933" src={BASE + p.src} alt={p.alt} loading="lazy" />
              </span>
              <figcaption className="gallery-caption">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
