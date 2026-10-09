import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { education } from '@/data/education'
import { currentLearning } from '@/data/learning'

export function Education() {
  return (
    <section id="journey" className="py-28 sm:py-36 border-t border-border">
      <div className="container-x">
        <SectionHeading index="04" eyebrow="Journey" title="Education and what’s next." />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24">
          <ol className="relative border-l border-border ml-1.5">
            {education.map((entry, i) => (
              <Reveal as="li" key={entry.degree} delay={i * 0.08} className="relative pl-8 pb-12 last:pb-0">
                <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-bg" />
                <p className="font-mono text-xs text-text-muted tabular-nums mb-2">{entry.dates}</p>
                <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight leading-snug">
                  {entry.degree}
                </h3>
                <p className="mt-1.5 text-text-muted">{entry.institution}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-text-faint">
                  <span>{entry.location}</span>
                  <span>CGPA {entry.cgpa}</span>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-border bg-surface p-7 sm:p-8">
              <p className="eyebrow mb-2">Currently learning</p>
              <h3 className="font-display text-2xl font-semibold tracking-tight mb-6">
                Going <span className="serif-italic text-accent">deeper</span> on the backend.
              </h3>
              <ul className="divide-y divide-border">
                {currentLearning.map((item, i) => (
                  <li key={item} className="flex items-center justify-between py-3.5 text-sm">
                    <span className="font-medium">{item}</span>
                    <span className="font-mono text-[11px] text-text-faint tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
