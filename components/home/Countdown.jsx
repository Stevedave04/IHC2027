'use client';

import { useEffect, useState } from 'react';

const TARGET = new Date('2027-04-16T09:00:00+01:00');
const pad = n => String(n).padStart(2, '0');

function remaining() {
  const diff = TARGET - new Date();
  if (diff <= 0) return { d: '00', h: '00', m: '00', s: '00' };
  return {
    d: String(Math.floor(diff / 86400000)),
    h: pad(Math.floor((diff % 86400000) / 3600000)),
    m: pad(Math.floor((diff % 3600000) / 60000)),
    s: pad(Math.floor((diff % 60000) / 1000)),
  };
}

export default function Countdown() {
  const [t, setT] = useState({ d: '—', h: '—', m: '—', s: '—' });

  useEffect(() => {
    setT(remaining());
    const id = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    [t.d, 'Days'], [t.h, 'Hours'], [t.m, 'Minutes'], [t.s, 'Seconds'],
  ];

  return (
    <div className="countdown" aria-label="Time until conference" role="timer">
      {units.map(([val, label], i) => (
        <span key={label} style={{ display: 'contents' }}>
          {i > 0 && <div className="cd-sep" aria-hidden="true">·</div>}
          <div className="cd-unit">
            <div className="cd-num">{val}</div>
            <div className="cd-label">{label}</div>
          </div>
        </span>
      ))}
    </div>
  );
}
