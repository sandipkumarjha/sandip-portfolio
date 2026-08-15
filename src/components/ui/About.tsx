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
            I started with frontend development and have built projects using React, TypeScript, and modern web technologies. Currently, I’m expanding into Java backend development, learning Java, Spring Boot, REST APIs, SQL, and database-driven application development.

I learn by building projects and solving problems, while strengthening my DSA and core CS fundamentals. My goal is to grow into a strong backend/full-stack engineer and contribute to real-world software.
          </p>
        </div>
      </div>
    </section>
  )
}