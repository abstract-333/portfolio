export function Section({ id, label, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="section__header">
        <span className="section__label">{label}</span>
        <h2 className="section__title">{title}</h2>
      </div>
      <div className="section__body">{children}</div>
    </section>
  )
}
