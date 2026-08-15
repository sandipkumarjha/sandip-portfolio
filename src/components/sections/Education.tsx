import { SectionHeading } from '@/components/ui/SectionHeading'
import { education } from '@/data/education'

export function Education() {
  return (
    <section id="education" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="education.json" title="Education" />

        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((entry) => (
            <div key={entry.degree} className="rounded-md border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold text-text mb-4">{entry.degree}</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-text-muted">Institution</dt>
                  <dd className="text-text text-right">{entry.institution || 'TBA'}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-text-muted">Location</dt>
                  <dd className="text-text text-right">{entry.location || 'TBA'}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-text-muted">Duration</dt>
                  <dd className="text-text text-right">{entry.dates || 'TBA'}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-text-muted">CGPA</dt>
                  <dd className="text-text text-right">{entry.cgpa || 'TBA'}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}