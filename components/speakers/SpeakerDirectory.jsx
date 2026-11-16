'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DAY_LABELS, initials } from '../../lib/speaker-format';
import { webpSources, SPEAKER_WIDTHS } from '../../lib/images';

const FILTERS = [
  { id: 'all', label: 'All speakers' },
  { id: 'keynote', label: 'Keynotes' },
  { id: 1, label: DAY_LABELS[1].long },
  { id: 2, label: DAY_LABELS[2].long },
  { id: 3, label: DAY_LABELS[3].long },
];

const matches = (s, f) => f === 'all' || (f === 'keynote' ? s.keynote : s.day === f);

const slotLabel = s => {
  if (!s.day) return 'Session to be announced';
  const day = DAY_LABELS[s.day].short;
  return s.start ? `${day} · ${s.start}` : `${day} · Time TBC`;
};

/** @param {{ speakers: Array<{slug:string,name:string,day:number|null,session:string,start:string,keynote:boolean,photo:string|null}> }} props */
export default function SpeakerDirectory({ speakers: SPEAKERS }) {
  const [filter, setFilter] = useState('all');
  const list = SPEAKERS.filter(s => matches(s, filter));

  return (
    <>
      <div className="spk-filter" role="group" aria-label="Filter speakers">
        {FILTERS.map(f => (
          <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>
      <p className="spk-count" aria-live="polite">
        Showing {list.length} of {SPEAKERS.length} speakers
      </p>
      <ul className="spk-grid">
        {list.map(s => (
          <li key={s.slug}>
            <Link prefetch={false} href={`/speakers/${s.slug}`} className="spk-card">
              <span className="spk-photo">
                {s.photo
                  ? <img width="480" height="600" {...webpSources(s.photo, SPEAKER_WIDTHS)} sizes="(max-width:600px) 45vw, (max-width:1100px) 30vw, 290px" alt="" loading="lazy" />
                  : <span aria-hidden="true">{initials(s.name)}</span>}
                {s.keynote && <span className="spk-key">Keynote</span>}
              </span>
              <span className="spk-slot">{slotLabel(s)}</span>
              <span className="spk-name">{s.name}</span>
              <span className="spk-session">{s.session || 'Session details to be announced'}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
