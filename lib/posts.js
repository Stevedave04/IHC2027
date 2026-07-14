/**
 * Blog articles. Each post renders at /blog/[slug].
 * sections: [{ heading?, paras: [...] , quote? }], quote renders as a pull quote.
 */
export const POSTS = [
  {
    slug: 'delegates-guide-to-dublin',
    image: { src: '/images/dublin/telephone-booth.jpg', alt: "The Temple Bar pub in Dublin's Temple Bar district" },
    category: 'City Guide',
    date: '2026-06-12',
    dateLabel: '12 June 2026',
    readMins: 6,
    title: "A Delegate's Guide to Dublin: Make a Weekend of IHC 2027",
    excerpt:
      'Three days of world-class training deserve a city to match. From Georgian squares to snug pubs with live fiddle music, here is how to turn your conference ticket into a proper Dublin weekend.',
    sections: [
      {
        paras: [
          'There are conferences you fly in for, sit through, and fly home from. IHC 2027 is not built to be one of them. When we chose Dublin, again deliberately, it was because the city itself does half the work a good conference weekend needs: it relaxes you, feeds you well, and gives you something to talk about with a colleague you met an hour ago.',
          'The conference runs Friday 16 to Sunday 18 April at the Clayton Hotel Liffey Valley, twenty minutes from the city centre. That puts you close enough to dip into Dublin every evening, and far enough out that you will actually sleep. Here is how seasoned delegates do it.',
        ],
      },
      {
        heading: 'Thursday evening: arrive early, settle in',
        paras: [
          'Flights into Dublin from the UK take under ninety minutes, and most European hubs are under three hours. Arrive Thursday evening if you can. Drop your bags, then head for the Liffey boardwalk as the light goes down. The Ha’penny Bridge and the Custom House are at their best at dusk.',
          'For a first-night dinner, delegates rate The Winding Stair, a bookshop-turned-restaurant overlooking the river, and Brazen Head, reputedly Ireland’s oldest pub, pouring since 1198, for something less formal. Neither needs a taxi from the city centre; both need a booking.',
        ],
      },
      {
        heading: 'Between sessions: the city in small doses',
        paras: [
          'The conference programme is full, but evenings are yours. Trinity College and the Book of Kells stay open into the early evening in April, and the Long Room, a 65-metre barrel-vaulted library holding 200,000 of Ireland’s oldest books, has a way of putting a day of CPD into perspective.',
          'If your practice leans towards the contemplative, the National Gallery of Ireland on Merrion Square is free to enter, quiet on weekday evenings, and holds Caravaggio’s The Taking of Christ, lost for two centuries and found hanging in a Dublin Jesuit house in 1990.',
          'And then there is the music. Dublin’s traditional sessions start around 9pm. The Cobblestone in Smithfield is the musicians’ choice, O’Donoghue’s of Merrion Row is where The Dubliners started, and neither charges a cent to listen.',
        ],
      },
      {
        quote: 'A good conference gives you techniques. A great conference gives you techniques and a story about the night a fiddle player made a room of two hundred strangers go completely quiet.',
      },
      {
        heading: 'Sunday night: stay one more day',
        paras: [
          'The closing keynote ends at four on Sunday. You could make an evening flight, or you could stay one more night and give yourself Monday morning in the city with no agenda at all. St Stephen’s Green at 9am, coffee on Drury Street, a slow wander through the Georgian doors of Fitzwilliam Square.',
          'Delegates who stay the extra night tell us the same thing every year: it is the decompression day that makes the learning stick. Book the Monday off. You will not regret it.',
        ],
      },
    ],
  },
  {
    slug: 'day-trips-from-dublin',
    image: { src: '/images/dublin/stone-bridge.jpg', alt: 'An ornate lamp on Grattan Bridge over the River Liffey, Dublin' },
    category: 'Day Trips',
    date: '2026-07-03',
    dateLabel: '3 July 2026',
    readMins: 7,
    title: 'Five Day Trips Worth Extending Your Stay For',
    excerpt:
      'Within an hour of the conference venue: 5,000-year-old passage tombs, monastic valleys, cliff walks above fishing villages, and mountains that turn purple in the evening light.',
    sections: [
      {
        paras: [
          'One of the quiet advantages of holding IHC 2027 at the Clayton Liffey Valley is geography: you are already on the western edge of the city, pointed at the mountains, with the M50 on your doorstep. Add a day either side of the conference and some of Ireland’s most extraordinary landscapes are within easy reach.',
        ],
      },
      {
        heading: '1. Glendalough and the Wicklow Mountains',
        paras: [
          'Under an hour south of the venue lies Glendalough, a sixth-century monastic city folded into a glacial valley with two dark lakes. The round tower has stood for a thousand years; the Upper Lake boardwalk loop takes about ninety minutes and requires nothing more than decent shoes. In April the gorse is out and the whole valley smells faintly of coconut. It is, without exaggeration, one of the most naturally hypnotic places in Ireland.',
        ],
      },
      {
        heading: '2. Newgrange and the Boyne Valley',
        paras: [
          'Forty-five minutes north sits Brú na Bóinne, the Neolithic passage tomb complex older than Stonehenge and the pyramids of Giza. At Newgrange you walk a 19-metre passage into a chamber built 5,200 years ago, engineered so precisely that the winter solstice sun still finds the roof-box. For anyone whose work concerns consciousness, ritual and the deep past of the human mind, it is a pilgrimage.',
        ],
      },
      {
        heading: '3. Howth cliff walk',
        paras: [
          'Take the DART train to its northern end and you are in Howth, a working fishing village under a heathery headland. The cliff path loop gives you gannets, seals in the harbour, and views across Dublin Bay that reset a tired head in about two hours. Finish with chowder and brown bread at any of the harbourside places, they are all good.',
        ],
      },
      {
        heading: '4. Kilkenny, the medieval mile',
        paras: [
          'Ninety minutes southwest, Kilkenny is Ireland’s best-preserved medieval city: a Norman castle above the River Nore, a cathedral you can climb, and a high street that has been trading continuously for eight hundred years. Good for a full unhurried day, and the drive through the Barrow valley is part of the reward.',
        ],
      },
      {
        heading: '5. The Sally Gap at golden hour',
        paras: [
          'If you hire a car for just one evening, drive the Military Road over the Sally Gap as the sun drops. Forty minutes from the hotel, the road crosses blanket bog and granite moorland that turns copper and purple in the low light, the landscape Braveheart and P.S. I Love You borrowed when they needed somewhere that looked like the edge of the world.',
        ],
      },
      {
        quote: 'Book the extra day. The techniques will keep; the light on the Sally Gap will not.',
      },
    ],
  },
  {
    slug: 'literary-dublin-for-therapists',
    image: { src: '/images/dublin/church-street.jpg', alt: "Anne Street South leading towards St Ann's Church, Dublin" },
    category: 'Culture',
    date: '2026-08-21',
    dateLabel: '21 August 2026',
    readMins: 5,
    title: 'The City That Reads Minds: Literary Dublin for Therapists',
    excerpt:
      'Four Nobel laureates, one UNESCO City of Literature, and a long national habit of turning the inner life into language. Dublin talks about the mind the way other cities talk about the weather.',
    sections: [
      {
        paras: [
          'Every profession has its natural habitat. For those of us who work with words, imagery and the architecture of the inner life, it is hard to name a better one than Dublin, a city of four Nobel literature laureates (Yeats, Shaw, Beckett, Heaney) and a designated UNESCO City of Literature since 2010.',
          'This matters more to a hypnotherapy conference than it might first appear. Our work is language work. Metaphor, rhythm, story, the precise placement of a pause: the tools of the Irish writers are the tools of the consulting room. Spending a weekend in the city that produced Ulysses does something useful to your ear.',
        ],
      },
      {
        heading: 'An evening itinerary for the word-minded',
        paras: [
          'Start at the Museum of Literature Ireland (MoLI) on St Stephen’s Green, home to ‘Copy No. 1’ of Ulysses and a walled garden that most tourists never find. Then walk ten minutes to Sweny’s Pharmacy on Lincoln Place, the chemist’s shop where Leopold Bloom bought lemon soap in 1904, kept alive by volunteers who hold nightly Joyce readings among the original mahogany shelves.',
          'Finish in Toner’s of Baggot Street, the only pub the famously pub-averse W.B. Yeats ever agreed to drink in. He had one sherry, declared ‘I have seen a pub now’, and left. Stay longer than he did.',
        ],
      },
      {
        quote: 'Metaphor, rhythm, story, the placement of a pause: the tools of the Irish writers are the tools of the consulting room.',
      },
      {
        heading: 'Why it belongs in your CPD weekend',
        paras: [
          'Several of our 2027 speakers build their clinical work explicitly on story and metaphor. Hearing those sessions in a city where the taxi drivers quote Wilde back at you is not a coincidence of scheduling; it is the point. Dublin is the natural capital of the well-placed word, and for one April weekend, of hypnotherapy too.',
        ],
      },
    ],
  },
  {
    slug: 'getting-to-ihc-2027',
    image: { src: '/images/dublin/stone-bridge.jpg', alt: 'Grattan Bridge over the River Liffey, Dublin' },
    category: 'Travel',
    date: '2026-09-10',
    dateLabel: '10 September 2026',
    readMins: 5,
    title: 'Getting Here: The Practical Guide to Reaching IHC 2027',
    excerpt:
      'Flights, transfers, taxis and where to stay, everything you need to get from your front door to the front row of the opening keynote with minimum friction.',
    sections: [
      {
        paras: [
          'The logistics, straight and simple. IHC 2027 takes place at the Clayton Hotel Liffey Valley, Dublin 22, on the west side of the city where the N4 meets the M50 ring road. Here is how to reach it from anywhere.',
        ],
      },
      {
        heading: 'Flying in',
        paras: [
          'Dublin Airport is one of Europe’s best-connected hubs: direct flights from every UK region (60–90 minutes), all major European cities, and nonstop North American routes from New York, Boston, Chicago, Toronto and more. US-bound delegates clear American immigration in Dublin on the way home, a genuine perk.',
          'From the airport, the venue is a 25–35 minute taxi (€35–45) straight down the M50, so you never touch city-centre traffic. Ride-hailing apps (FREE NOW, Uber, Bolt) all operate at the airport.',
        ],
      },
      {
        heading: 'By ferry or rail',
        paras: [
          'Coming from Britain without flying? Irish Ferries and Stena Line sail Holyhead–Dublin Port in about three and a quarter hours, and the venue is a 25-minute taxi from the port via the Port Tunnel and M50. From elsewhere in Ireland, all InterCity trains arrive at Heuston or Connolly; Heuston is the closer of the two, fifteen minutes from the hotel.',
        ],
      },
      {
        heading: 'Staying',
        paras: [
          'The simplest option is the venue itself: delegate rates at the Clayton Liffey Valley are available for conference dates (mention the Irish Hypnotherapy Conference when booking direct). The hotel has 352 rooms, a pool and gym, and free parking, and staying on-site means the gala dinner ends thirty seconds from your bed.',
          'If you would rather sleep in the city centre and commute out, buses 25 and 66 run from the city to Liffey Valley, and a taxi at conference times is around twenty minutes. Delegates who split the difference like the Lucan and Chapelizod villages, riverside, quiet, and ten minutes from the door.',
        ],
      },
      {
        heading: 'The small print',
        paras: [
          'Ireland uses the euro, plugs are the UK three-pin type G, and April weather is best described as ‘all four seasons before lunch’, so pack a light rain layer and you are covered. EU delegates need no documentation beyond a passport or national ID; UK delegates can use the Common Travel Area. Questions about access requirements? Contact us ahead of time and we will make the arrangements.',
        ],
      },
    ],
  },
  {
    slug: 'why-ireland',
    image: { src: '/ihc2026.jpeg', alt: 'Delegates gathered at the Irish Hypnotherapy Conference' },
    category: 'Ireland',
    date: '2026-10-02',
    dateLabel: '2 October 2026',
    readMins: 6,
    title: 'Why Ireland? Warmth, Wit and the Perfect Setting for Serious Learning',
    excerpt:
      'Some countries host conferences. Ireland hosts conversations that happen to have a conference attached. On hospitality, humour, and why the setting genuinely changes what you take home.',
    sections: [
      {
        paras: [
          'Ask delegates what they remember from a conference two years later and it is rarely a slide. It is a conversation over dinner, an argument cheerfully lost at a bar, a walk with a stranger who became a referral partner, a supervisor, a friend. The learning that lasts is social, and this is precisely where Ireland is unbeatable.',
        ],
      },
      {
        heading: 'A culture built for connection',
        paras: [
          'Ireland consistently ranks among the friendliest countries on earth in traveller surveys, and the cliché survives contact with reality. Strangers talk to you here, in queues, in pubs, at bus stops, not as performance but as habit. For a profession built on rapport, spending a weekend inside a culture that does rapport as its default setting is its own kind of masterclass.',
          'There is a word for it in Irish: craic, the blend of news, wit, music and company that makes an evening. You cannot buy it, schedule it or replicate it in a hotel ballroom in an airport business park. It happens here on its own.',
        ],
      },
      {
        heading: 'The deeper current',
        paras: [
          'There is also something older. Ireland’s relationship with the imagination, with trance, story, and states between waking and dreaming, runs back through the seanchaí storytelling tradition, through holy wells and pattern days, to the Neolithic dreamers who built Newgrange around the returning light. This is a country that has taken inner experience seriously for five thousand years.',
          'Modern Irish healthcare and academia carry that thread forward: Irish universities publish actively in hypnosis, placebo and mind-body research, and the Irish public is notably open to complementary approaches delivered ethically. Practising here, even for a weekend, you feel that openness in the room.',
        ],
      },
      {
        quote: 'You cannot buy craic, schedule it, or replicate it in an airport ballroom. It happens here on its own.',
      },
      {
        heading: 'Three days that feel like more',
        paras: [
          'This is what we mean when we say the setting is part of the programme. The same keynote lands differently when the evening after it involves live music three feet away, a harbour walk, or a conversation with an international colleague that starts at the gala dinner and ends as a collaboration.',
          'IHC 2027 will give you the techniques, the science and the CPD hours. Ireland will give you the rest. Sixteen to eighteen April, Clayton Hotel Liffey Valley, with the city, the mountains and the music thrown in free.',
        ],
      },
    ],
  },
];

export const getPost = slug => POSTS.find(p => p.slug === slug);
