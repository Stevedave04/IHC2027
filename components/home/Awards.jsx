const AWARDS = [
  ['Practitioner of the Year', 'Recognising exceptional clinical work and patient outcomes in hypnotherapy practice.'],
  ['Innovation Award', 'Celebrating groundbreaking research, techniques or programmes advancing the profession.'],
  ['Educator of the Year', 'Honouring excellence in hypnotherapy training, mentorship and professional education.'],
  ['International Contribution', 'Recognising an international figure whose work has profoundly influenced Irish practice.'],
  ['Emerging Talent', 'Spotlighting a rising practitioner who has made an exceptional early impact in the field.'],
  ['Community Champion', 'Honouring outstanding service and advocacy for the hypnotherapy community in Ireland.'],
];

export default function Awards() {
  return (
    <section className="light-section" id="awards" aria-labelledby="awards-hl">
      <div className="section-wrap">
        <div className="eyebrow reveal">IHC Awards 2027</div>
        <h2 className="awards-hl reveal" id="awards-hl">Celebrating excellence</h2>
        <p className="awards-intro reveal">
          Each year we recognise outstanding practitioners, innovators and contributors to the field
          of hypnotherapy in Ireland and beyond.
        </p>

        <div className="awards-grid awards-grid-wrap">
          {AWARDS.map(([title, body], i) => (
            <div className="award-item reveal" key={title}>
              <div className="award-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="award-title">{title}</h3>
              <p className="award-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
