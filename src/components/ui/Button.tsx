import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
  icon?: ReactNode
  external?: boolean
}

export function Button({ children, href, onClick, variant = 'primary', icon, external }: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-colors duration-200',
    variant === 'primary' && 'bg-accent text-white hover:bg-accent/90',
    variant === 'outline' && 'border border-border text-text hover:border-accent hover:text-accent',
  )

  if (href) {
    return (
      <a href={href} className={classes} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {children}
        {icon}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  )
}