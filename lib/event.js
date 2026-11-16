/**
 * Single source of truth for event facts shown across the site.
 * Change a figure here and every mention updates.
 */
export const SPEAKER_COUNT = '40+';
export const ATTENDEE_COUNT = '200+';
export const YEARS_RUNNING = 4;

const SHOP = 'https://irishhypnotherapyconference.ie/product';

/**
 * 2027 passes, matching the live WooCommerce shop. Checkout happens there.
 * @type {ReadonlyArray<{id:string,name:string,tier:string,price:number,url:string,featured:boolean,includes:string[]}>}
 */
export const TICKETS = Object.freeze([
  {
    id: 'conference-only',
    name: 'Conference Only Pass',
    tier: 'Sessions only',
    price: 400,
    url: `${SHOP}/2027-conference-only-3-day-pass/`,
    featured: false,
    includes: [
      'Every session, Friday to Sunday',
      'Talks, workshops and panels across three rooms',
      'Tea and coffee throughout all three days',
      'Networking with practitioners from Ireland and beyond',
    ],
  },
  {
    id: 'full',
    name: 'Full 3 Day Pass',
    tier: 'All inclusive',
    price: 450,
    url: `${SHOP}/2027-conference-full-3-day-pass/`,
    featured: true,
    includes: [
      'Everything in the Conference Only Pass',
      'Buffet lunch each day',
      'Gala Dinner on Saturday night',
      'Evening entertainment',
    ],
  },
]);

export const TICKET_FROM = Math.min(...TICKETS.map(t => t.price));
