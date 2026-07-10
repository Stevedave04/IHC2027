'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c || !window.matchMedia('(pointer:fine)').matches) return;
    document.documentElement.classList.add('has-cursor');

    const move = e => {
      c.style.left = e.clientX + 'px';
      c.style.top = e.clientY + 'px';
    };
    const over = e => {
      if (e.target.closest('a,button,[tabindex]')) c.classList.add('large');
    };
    const out = e => {
      if (e.target.closest('a,button,[tabindex]')) c.classList.remove('large');
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => {
      document.documentElement.classList.remove('has-cursor');
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return <div id="cursor" ref={ref} aria-hidden="true" />;
}
