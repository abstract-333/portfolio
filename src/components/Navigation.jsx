const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
]

export function Navigation() {
  return (
    <header className="nav">
      <a href="#" className="nav__brand">
        Abstract-333
      </a>
      <nav className="nav__links">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav__link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
