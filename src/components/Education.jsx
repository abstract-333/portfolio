export function Education({ items }) {
  return (
    <div className="education">
      {items.map((item) => (
        <article key={item.degree} className="education__item">
          <div className="education__header">
            <h3 className="education__degree">{item.degree}</h3>
            <time className="education__period">{item.period}</time>
          </div>
          <p className="education__school">{item.school}</p>
          {item.note && <p className="education__note">{item.note}</p>}
        </article>
      ))}
    </div>
  )
}
