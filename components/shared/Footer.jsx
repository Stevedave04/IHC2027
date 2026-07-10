import Link from 'next/link';
import { BASE } from '../../lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <img width="160" height="150" src={BASE + "/logo.png"} alt="IHC" />
              <div className="footer-logo-name">
                Irish Hypnotherapy Conference<span>Est. 2013 · Dublin</span>
              </div>
            </div>
            <p className="footer-desc">
              Ireland&rsquo;s premier gathering for hypnotherapy professionals. Advancing the science
              and art of hypnotherapy through world-class education, community and connection.
            </p>
          </div>
          <div>
            <h3 className="footer-col-title">Conference</h3>
            <ul className="footer-links">
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#speakers">Speakers</Link></li>
              <li><Link href="/#schedule">Programme</Link></li>
              <li><Link href="/#awards">Awards</Link></li>
              <li><Link href="/#venue">Venue</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-col-title">Tickets</h3>
            <ul className="footer-links">
              <li><Link href="/#tickets">Day Pass</Link></li>
              <li><Link href="/#tickets">3-Day Pass</Link></li>
              <li><Link href="/#tickets">Platinum VIP</Link></li>
              <li><Link href="/#tickets">Gala Dinner</Link></li>
              <li><Link href="/#tickets">Group Bookings</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-col-title">Information</h3>
            <ul className="footer-links">
              <li><Link href="/blog">Blog</Link></li>
              <li>
                <a href="https://irishhypnotherapyconference.ie/gallery/" rel="noopener">
                  Gallery (2026)
                </a>
              </li>
              <li><Link href="/workshops">Workshops</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
              <li><Link href="/sponsorship">Sponsorship</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2027 Irish Hypnotherapy Conference. All rights reserved.</p>
          <ul className="footer-policies">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/refund-policy">Refund Policy</Link></li>
            <li><Link href="/code-of-conduct">Code of Conduct</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
