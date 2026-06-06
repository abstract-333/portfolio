export function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      <p className="hero__eyebrow">Portfolio · {profile.availability}</p>
      <h1 className="hero__title">
        <span className="hero__title-line">Backend</span>
        <span className="hero__title-line hero__title-line--accent">
          Embedded
        </span>
        <span className="hero__title-line">Developer</span>
      </h1>
      <p className="hero__handle">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          github.com/abstract-333
        </a>
      </p>
      <div className="hero__cta">
        <a href="#experience" className="btn btn--primary">
          View work
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
