import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { profile } from '@/data/profile'
import { education } from '@/data/education'

export function About() {
  const facts = [
    { label: 'Based in', value: profile.location },
    { label: 'Focus', value: 'Java · Spring Boot · REST' },
    { label: 'Studying', value: education[0].degree.replace('B.Tech in ', 'B.Tech, ') },
    { label: 'Status', value: profile.status },
  ]

  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="About" title="A little about me." />

        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-24">
          <div className="space-y-6">
            <Reveal>
              <p className="font-display text-2xl sm:text-[1.75rem] leading-snug tracking-[-0.02em]">
                {profile.intro.replace('I’m Sandip Kumar Jha, an', 'An')}
              </p>
            </Reveal>
            {profile.about.map((para, i) => (
              <Reveal key={i} delay={0.08 * (i + 1)}>
                <p className="text-text-muted leading-relaxed text-base sm:text-lg">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <dl className="divide-y divide-border border-y border-border">
              {facts.map(({ label, value }) => (
                <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-4">
                  <dt className="eyebrow pt-0.5">{label}</dt>
                  <dd className="text-sm sm:text-[15px] font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 font-mono text-[11px] text-text-faint leading-relaxed">
              {profile.tagline}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
