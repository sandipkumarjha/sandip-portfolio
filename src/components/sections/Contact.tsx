import { ArrowUpRight, Mail } from 'lucide-react'
import { siGithub, siLinkerd } from 'simple-icons'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'

function BrandIcon({
  path,
  size = 18,
}: {
  path: string
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}

export function Contact() {
  const links = [
    profile.social.email && {
      type: 'email',
      label: 'Email',
      href: `mailto:${profile.social.email}`,
      path: null,
    },
    profile.social.linkedin && {
      type: 'linkedin',
      label: 'LinkedIn',
      href: profile.social.linkedin,
      path: siLinkerd.path,
    },
    profile.social.github && {
      type: 'github',
      label: 'GitHub',
      href: profile.social.github,
      path: siGithub.path,
    },
  ].filter(Boolean) as {
    type: 'email' | 'linkedin' | 'github'
    label: string
    href: string
    path: string | null
  }[]

  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="font-mono text-sm text-accent mb-4">
          // contact
        </p>

        <h2 className="font-display text-3xl sm:text-5xl font-semibold text-text tracking-tight mb-6 max-w-2xl mx-auto">
          Let's build something remarkable.
        </h2>

        <p className="text-text-muted max-w-md mx-auto mb-10">
          Open to backend and full-stack opportunities. Reach out directly —
          no forms, no scheduling tools.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Button
            href={
              profile.social.email
                ? `mailto:${profile.social.email}`
                : '#contact'
            }
            icon={<ArrowUpRight size={16} />}
          >
            Send an Email
          </Button>

          <Button
            href={profile.resumeUrl}
            variant="outline"
            external
          >
            Resume
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          {links.map(({ type, label, href, path }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="text-text-muted hover:text-accent transition-colors duration-200"
            >
              {type === 'email' ? (
                <Mail size={18} />
              ) : (
                <BrandIcon path={path!} size={18} />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}