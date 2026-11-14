'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

function Row({ r }) {
  return (
    <div className="sched-row">
      <div className="sched-time">{r.time}</div>
      <div>
        <div className="sched-title">{r.title}</div>
        <div className="sched-speaker">
          {r.slug ? <Link href={`/speakers/${r.slug}`}>{r.speaker}</Link> : r.speaker}
        </div>
      </div>
      <span className={`sched-type ${r.cls}`}>{r.tag}</span>
    </div>
  );
}

/** @param {{ days: ReturnType<typeof import('../../lib/programme').buildProgramme> }} props */
export default function Schedule({ days: DAYS }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const onKey = (e, i) => {
    let to = null;
    if (e.key === 'ArrowRight') to = (i + 1) % DAYS.length;
    else if (e.key === 'ArrowLeft') to = (i - 1 + DAYS.length) % DAYS.length;
    else if (e.key === 'Home') to = 0;
    else if (e.key === 'End') to = DAYS.length - 1;
    if (to !== null) {
      e.preventDefault();
      setActive(to);
      tabRefs.current[to]?.focus();
    }
  };

  return (
    <section className="dark-section" id="schedule" aria-labelledby="schedule-hl">
      <div className="section-wrap">
        <div className="eyebrow reveal">Programme</div>
        <h2
          className="reveal"
          id="schedule-hl"
          style={{ fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, letterSpacing: '-.02em', color: '#fff', marginBottom: '3.5rem' }}
        >
          Three days, one<br />extraordinary journey
        </h2>
        <p className="sched-provisional reveal">
          <span>Provisional programme</span> Sessions are confirmed; times and rooms are still being
          finalised and may change. <Link href="/speakers">Browse all speakers</Link>.
        </p>

        <div className="schedule-tabs reveal" role="tablist" aria-label="Conference days">
          {DAYS.map((day, i) => (
            <button
              key={day.label}
              ref={el => (tabRefs.current[i] = el)}
              className={`sched-tab${i === active ? ' active' : ''}`}
              role="tab"
              aria-selected={i === active}
              aria-controls={`d${i + 1}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={e => onKey(e, i)}
            >
              {day.label}
            </button>
          ))}
        </div>

        {DAYS.map((day, i) => (
          <div key={day.label} className={`schedule-panel${i === active ? ' active' : ''}`} id={`d${i + 1}`} role="tabpanel">
            {day.timed.map(r => <Row r={r} key={r.time + r.title} />)}
            {day.tbc.length > 0 && (
              <>
                <h3 className="sched-group">Also on {day.longLabel}, times to be confirmed</h3>
                {day.tbc.map(r => <Row r={r} key={r.title} />)}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
