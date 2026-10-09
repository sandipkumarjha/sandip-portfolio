import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import { ArrowUpRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md'
  arrow?: boolean
  external?: boolean
  className?: string
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  arrow = false,
  external,
  className,
}: ButtonProps) {
  const classes = clsx(
    'group/btn relative inline-flex items-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-all duration-300 ease-[var(--ease-out-expo)] select-none',
    size === 'md' && 'px-6 py-3 text-sm',
    size === 'sm' && 'px-4 py-2 text-xs',
    variant === 'primary' &&
      'bg-text text-bg hover:bg-accent hover:text-bg shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]',
    variant === 'outline' &&
      'border border-border-strong text-text hover:border-text hover:bg-surface-2',
    variant === 'ghost' && 'text-text-muted hover:text-text',
    className,
  )

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="relative w-4 h-4 overflow-hidden">
          <ArrowUpRight
            size={16}
            className="absolute inset-0 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-4 group-hover/btn:-translate-y-4"
          />
          <ArrowUpRight
            size={16}
            className="absolute inset-0 -translate-x-4 translate-y-4 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0"
          />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
