import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { TechBadge } from '@/components/ui/TechBadge'
import { technologies, type TechCategory } from '@/data/technologies'

const order: TechCategory[] = ['Backend', 'Languages', 'Frontend', 'Database', 'Tools']

const blurbs: Record<TechCategory, string> = {
  Backend: 'Where I spend most of my time now.',
  Languages: 'The languages I write daily.',
  Frontend: 'Where I started, and still ship with.',
  Database: 'Relational first, with Supabase for quick builds.',
  Tools: 'The everyday workflow.',
}

export function TechStack() {
  return (
    <section id="stack" className="py-28 sm:py-36 border-t border-border">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Stack"
          title="Tools I reach for."
          description="Core tools I use to build backend-focused, full-stack applications."
        />

        <div className="divide-y divide-border border-y border-border">
          {order.map((cat, i) => {
            const items = technologies.filter((t) => t.category === cat)
            return (
              <Reveal key={cat} delay={i * 0.05} className="grid md:grid-cols-[14rem_1fr] gap-4 md:gap-10 py-7">
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{cat}</h3>
                  <p className="mt-1 text-sm text-text-muted">{blurbs[cat]}</p>
                </div>
                <div className="flex flex-wrap gap-2.5 content-start">
                  {items.map((tech) => (
                    <TechBadge key={`${cat}-${tech.name}`} tech={tech} />
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
