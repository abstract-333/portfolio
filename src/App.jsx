import { Analytics } from '@vercel/analytics/react'
import { profile } from './data/profile'
import { AmbientBackground } from './components/AmbientBackground'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <AmbientBackground />
      <Navigation />
      <main>
        <Hero profile={profile} />
        <Section id="about" label="01" title="Objective">
          <p className="objective">{profile.objective}</p>
        </Section>
        <Section id="experience" label="02" title="Experience">
          <Experience items={profile.experience} />
        </Section>
        <Section id="skills" label="03" title="Skills">
          <Skills skills={profile.skills} />
        </Section>
        <Section id="education" label="04" title="Education">
          <Education items={profile.education} />
        </Section>
      </main>
      <Footer github={profile.github} />
      <Analytics />
    </>
  )
}
