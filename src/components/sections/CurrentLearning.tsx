import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { currentLearning } from '@/data/learning'

export function CurrentLearning() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="currently-learning.md" title="Continuous Growth" />

        <div className="flex flex-wrap gap-3">
          {currentLearning.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-border bg-surface"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-sm text-text">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}