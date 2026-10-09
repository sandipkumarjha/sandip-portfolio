import type { Technology } from '@/data/technologies'

const iconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`

export function TechBadge({ tech }: { tech: Technology }) {
  return (
    <span className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-2 text-sm text-text-muted hover:text-text hover:border-border-strong hover:-translate-y-0.5 transition-all duration-300 ease-[var(--ease-out-expo)]">
      <img
        src={iconUrl(tech.icon)}
        alt=""
        width={16}
        height={16}
        className="w-4 h-4 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        loading="lazy"
        onError={(e) => {
          ;(e.target as HTMLImageElement).style.display = 'none'
        }}
      />
      {tech.name}
    </span>
  )
}
