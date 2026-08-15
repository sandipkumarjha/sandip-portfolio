interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-xl">
      <p className="font-mono text-sm text-accent mb-3">// {eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text tracking-tight mb-3">{title}</h2>
      {description && <p className="text-text-muted leading-relaxed">{description}</p>}
    </div>
  )
}