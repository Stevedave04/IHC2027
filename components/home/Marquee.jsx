import { SPEAKER_COUNT } from '../../lib/event';

const ITEMS = [
  'Empowering Connections', 'Advancing Expertise', 'Embracing Clarity',
  '16–18 April 2027', 'Dublin, Ireland', `${SPEAKER_COUNT} World-Class Speakers`,
];

/** Decorative ticker. Two copies of the items make the CSS loop seamless (home-a.css). */
export default function Marquee() {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map(copy =>
          ITEMS.map(item => (
            <span key={`${copy}-${item}`} style={{ display: 'contents' }}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
