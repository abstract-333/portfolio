export function Skills({ skills }) {
  return (
    <div className="skills">
      <div className="skills__group">
        <h3 className="skills__heading">Technical</h3>
        <ul className="skills__list">
          {skills.technical.map((skill) => (
            <li key={skill} className="skills__tag">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="skills__group">
        <h3 className="skills__heading">Languages</h3>
        <ul className="skills__list">
          {skills.languages.map((lang) => (
            <li key={lang} className="skills__tag skills__tag--muted">
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
