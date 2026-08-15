import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechBadge } from '@/components/ui/TechBadge'
import { technologies, type TechCategory } from '@/data/technologies'

const categories: ('All' | TechCategory)[] = ['All', 'Backend', 'Frontend', 'Languages', 'Database', 'Tools']

export function TechStack() {
  const [active, setActive] = useState<'All' | TechCategory>('All')

  const filtered = useMemo(
    () => (active === 'All' ? technologies : technologies.filter((t) => t.category === active)),
    [active],
  )

  return (
    <section id="stack" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="stack.ts"
          title="Capabilities"
          description="Core tools I use to build backend-focused, full-stack applications."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={clsx(
                'px-3.5 py-1.5 rounded-md font-mono text-xs transition-colors duration-200 border',
                active === cat
                  ? 'bg-accent-soft border-accent text-accent'
                  : 'border-border text-text-muted hover:text-text hover:border-text-muted',
              )}
            >
              {cat.toLowerCase()}
            </button>
          ))}
        </div>

        <motion.div layout className="flex flex-wrap gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <TechBadge key={`${tech.category}-${tech.name}`} tech={tech} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}