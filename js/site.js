/* ═══ IHC 2027 — shared site behaviour (all pages) ═══ */

/* Custom cursor */
(function(){
  const c = document.getElementById('cursor');
  if (!c || !window.matchMedia('(pointer:fine)').matches) { if (c) c.remove(); return; }
  document.documentElement.classList.add('has-cursor');
  document.addEventListener('mousemove', e => {
    c.style.left = e.clientX + 'px';
    c.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a,button,[tabindex]').forEach(el => {
    el.addEventListener('mouseenter', () => c.classList.add('large'));
    el.addEventListener('mouseleave', () => c.classList.remove('large'));
  });
})();

/* Nav scroll + mobile nav */
(function(){
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60), { passive: true });
  nav.classList.toggle('scrolled', scrollY > 60);
  const btn = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;
  const toggle = open => {
    nav.toggleAttribute('data-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };
  btn.addEventListener('click', () => toggle(!nav.hasAttribute('data-open')));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.hasAttribute('data-open')) toggle(false); });
})();

/* Scroll reveal (.reveal elements) */
(function(){
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

/* Marquee pace — 60px/s desktop, 30px/s mobile */
(function(){
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  const setPace = () => {
    const pxPerSec = window.innerWidth < 769 ? 30 : 60;
    track.style.animationDuration = (track.scrollWidth / 2 / pxPerSec).toFixed(1) + 's';
  };
  setPace();
  let t;
  window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(setPace, 200); }, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setPace);
})();
