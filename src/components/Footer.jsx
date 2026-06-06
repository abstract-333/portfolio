import { GitHubIcon } from './GitHubIcon'

export function Footer({ github }) {
  return (
    <footer className="footer">
      <p className="footer__tagline">Est. 2:40 AM</p>
      <p className="footer__copyright">
         © {new Date().getFullYear()} abstract-333. All rights reserved.
      </p>
      <p className="footer__legal"> GMT+3</p>
    </footer>
  )
}
