export function Footer({ github }) {
  return (
    <footer className="footer">
      <p className="footer__tagline">Built in the after hours.</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="footer__link"
      >
        github.com/abstract-333
      </a>
      <p className="footer__legal">
        Open to backend &amp; embedded roles · GMT+3
      </p>
    </footer>
  )
}
