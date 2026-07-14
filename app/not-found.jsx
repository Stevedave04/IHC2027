import Link from 'next/link';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <main
      id="main"
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'var(--emerald)',
        padding: '8rem 2rem 6rem',
      }}
    >
      <p style={{ fontFamily: 'var(--f)', fontSize: '.7rem', fontWeight: 600, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
        Four Oh Four
      </p>
      <h1 style={{ fontFamily: 'var(--f)', fontSize: 'clamp(2.6rem,6vw,5rem)', fontWeight: 300, fontStyle: 'italic', color: '#fff', lineHeight: 1.05, maxWidth: '18ch', marginBottom: '1.5rem' }}>
        You seem to have<br /><strong style={{ fontWeight: 700, fontStyle: 'normal' }}>drifted off</strong>
      </h1>
      <p style={{ color: 'rgba(255,255,255,.72)', maxWidth: '42ch', lineHeight: 1.7, marginBottom: '2.5rem' }}>
        The page you were looking for is not here. On the count of three you will find yourself back
        on the homepage, feeling refreshed and ready to book your ticket.
      </p>
      <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{ fontFamily: 'var(--f)', background: 'var(--gold)', color: 'var(--emerald)', padding: '.85rem 2.2rem', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase' }}>
          Back to Home
        </Link>
        <Link href="/blog" style={{ fontFamily: 'var(--f)', border: '1px solid var(--gold-rule)', color: 'var(--gold)', padding: '.85rem 2.2rem', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase' }}>
          Discover Dublin
        </Link>
      </div>
    </main>
  );
}
