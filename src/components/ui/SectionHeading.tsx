import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 sm:mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs text-accent tabular-nums">{index}</span>
        <span className="hairline flex-1" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.02] max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-text-muted text-base sm:text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </Reveal>
  )
}
