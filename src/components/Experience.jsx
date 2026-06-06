export function Experience({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={item.title + item.period} className="timeline__item">
          <div className="timeline__meta">
            <h3 className="timeline__role">{item.title}</h3>
            {(item.company || item.location) && (
              <p className="timeline__org">
                {[item.company, item.location].filter(Boolean).join(' · ')}
              </p>
            )}
            <time className="timeline__period">{item.period}</time>
          </div>
          <ul className="timeline__highlights">
            {item.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
