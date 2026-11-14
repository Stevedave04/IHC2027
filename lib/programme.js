import { SPEAKERS, DAY_LABELS } from './speakers';

/**
 * Programme built from the confirmed line-up in lib/speakers.js.
 * Rows: { time, title, speaker, slug, tag, cls }.
 */
const FIXED = {
  2: [{ time: 'Evening', title: 'IHC Gala Dinner and evening entertainment', speaker: 'Included with the Full 3 Day Pass', tag: 'Gala', cls: 't-pan', sort: 24 * 60 }],
};

const toRow = sp => ({
  time: sp.start || 'TBC',
  title: sp.session,
  speaker: sp.name,
  slug: sp.slug,
  tag: sp.keynote ? 'Keynote' : sp.room || 'Session',
  cls: sp.keynote ? 't-key' : 't-ws',
});

/** Day-by-day programme rows, serialisable for the client Schedule tabs. */
export const buildProgramme = () => [1, 2, 3].map(day => {
  const sessions = SPEAKERS.filter(sp => sp.day === day && sp.session);
  const timed = sessions
    .filter(sp => sp.startMin !== null)
    .map(sp => ({ ...toRow(sp), sort: sp.startMin, room: sp.room }))
    .concat(FIXED[day] || [])
    .sort((x, y) => x.sort - y.sort || (x.room || '').localeCompare(y.room || ''));
  const tbc = sessions
    .filter(sp => sp.startMin === null)
    .map(toRow)
    .sort((x, y) => (x.cls === 't-key' ? -1 : y.cls === 't-key' ? 1 : x.speaker.localeCompare(y.speaker)));
  return { label: `Day ${['One', 'Two', 'Three'][day - 1]}: ${DAY_LABELS[day].short}`, longLabel: DAY_LABELS[day].long, timed, tbc };
});

