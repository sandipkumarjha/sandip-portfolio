import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="about.md" title="A little about me" />
        <div className="max-w-2xl space-y-5 text-text-muted leading-relaxed">
          <p>{profile.intro}</p>
          <p>
            My primary direction is Java on the backend — Spring Boot, REST APIs, and PostgreSQL — paired with a
            React / Next.js frontend when a project needs a full-stack build. I care more about shipping something
            that works cleanly end-to-end than collecting tools for their own sake.
          </p>
        </div>
      </div>
    </section>
  )
}