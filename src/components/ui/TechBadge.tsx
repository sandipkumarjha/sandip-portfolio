import { motion } from 'framer-motion'
import type { Technology } from '@/data/technologies'

const iconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`

export function TechBadge({ tech }: { tech: Technology }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-md border border-border bg-surface hover:border-accent transition-colors duration-200"
    >
      <img
        src={iconUrl(tech.icon)}
        alt=""
        className="w-4 h-4 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
        loading="lazy"
        onError={(e) => {
          ;(e.target as HTMLImageElement).style.display = 'none'
        }}
      />
      <span className="text-sm text-text-muted group-hover:text-text transition-colors duration-200">
        {tech.name}
      </span>
    </motion.div>
  )
}