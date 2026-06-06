import { GitHubIcon } from './GitHubIcon'

export function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      <p className="hero__eyebrow">{profile.availability}</p>
      <h1 className="hero__title">
        <span className="hero__title-line">Backend</span>
        <span className="hero__title-line hero__title-line--accent">
          Embedded
        </span>
        <span className="hero__title-line">Developer</span>
      </h1>
      <p className="hero__handle">
      </p>
      <div className="hero__cta">
        <a href="#experience" className="btn btn--primary">
          View work
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost github-link"
        >
          <GitHubIcon size={16} />
          GitHub
        </a>
      </div>
    </section>
  )
}
