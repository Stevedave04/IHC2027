'use client';

import { useRef, useState } from 'react';

const DAYS = [
  {
    label: 'Day One: Fri 16 Apr',
    rows: [
      ['09:00', 'Registration and Welcome Coffee', 'Main Lobby, Clayton Hotel', 'Arrival', 't-brk'],
      ['10:00', 'Opening Keynote: The Future of Hypnotherapy', 'Melissa Tiers', 'Keynote', 't-key'],
      ['11:30', 'Neuroscience Meets Hypnosis', 'Dr Rebecca Clavell-Bate', 'Keynote', 't-key'],
      ['13:00', 'Lunch and Networking', 'Grand Ballroom', 'Break', 't-brk'],
      ['14:30', 'Rapid Change Techniques', 'Sean Michael Andrews', 'Workshop', 't-ws'],
      ['16:00', 'Evidence-Based Practice in Modern Hypnotherapy', 'Scott Sandland', 'Keynote', 't-key'],
      ['17:30', 'Day One Closing and Networking Reception', 'Sky Bar, Clayton Hotel', 'Social', 't-pan'],
    ],
  },
  {
    label: 'Day Two: Sat 17 Apr',
    rows: [
      ['09:30', 'Morning Keynote: Integrative Approaches', 'Karl Smith', 'Keynote', 't-key'],
      ['11:00', 'Virtual Gastric Band: New Research and Results', 'Sheila Granger', 'Keynote', 't-key'],
      ['13:00', 'Lunch and Poster Presentations', 'Exhibition Hall', 'Break', 't-brk'],
      ['14:30', 'Advanced Parallel Workshops (Three Tracks)', 'Multiple Presenters', 'Workshop', 't-ws'],
      ['16:30', 'European Perspectives Panel', 'Rob De Groof and Panellists', 'Panel', 't-pan'],
      ['19:30', 'IHC Gala Dinner and Awards Ceremony', 'Grand Ballroom, Black Tie Optional', 'Gala', 't-pan'],
    ],
  },
  {
    label: 'Day Three: Sun 18 Apr',
    rows: [
      ['09:30', 'Morning Intensive Workshops', 'Various Speakers', 'Workshop', 't-ws'],
      ['11:30', 'Innovation in Practice: New Frontiers', 'Melissa Tiers and Guests', 'Panel', 't-pan'],
      ['13:00', 'Lunch and Community Networking', 'Garden Terrace', 'Break', 't-brk'],
      ['14:30', 'Closing Keynote: Vision for Irish Hypnotherapy 2030', 'Special Guest Announcement', 'Keynote', 't-key'],
      ['16:00', 'Closing Ceremony and Farewell', 'Main Stage', 'Close', 't-brk'],
    ],
  },
];

export default function Schedule() {
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
            {day.rows.map(([time, title, speaker, type, cls]) => (
              <div className="sched-row" key={time + title}>
                <div className="sched-time">{time}</div>
                <div>
                  <div className="sched-title">{title}</div>
                  <div className="sched-speaker">{speaker}</div>
                </div>
                <span className={`sched-type ${cls}`}>{type}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
