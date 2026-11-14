/** Small display helpers shared by server and client speaker components. */

export const DAY_LABELS = Object.freeze({
  1: { short: 'Fri 16 Apr', long: 'Friday 16 April' },
  2: { short: 'Sat 17 Apr', long: 'Saturday 17 April' },
  3: { short: 'Sun 18 Apr', long: 'Sunday 18 April' },
});

/** @param {string} name @returns {string} */
export const initials = name =>
  name.replace(/^Dr\s+/, '').replace(/\s+MD$/, '').split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();

