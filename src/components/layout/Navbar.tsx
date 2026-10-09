import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'
import { ThemeToggle } from './ThemeToggle'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Stack', href: '#stack', id: 'stack' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Journey', href: '#journey', id: 'journey' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        <div className="container-x">
          <motion.nav
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className={clsx(
              'pointer-events-auto mt-4 sm:mt-5 flex items-center justify-between gap-3 rounded-full border transition-all duration-500 ease-[var(--ease-out-expo)]',
              scrolled
                ? 'px-3 sm:px-4 py-2 bg-bg/75 backdrop-blur-xl border-border shadow-[0_8px_40px_-12px_rgba(0,0,0,0.35)]'
                : 'px-3 sm:px-4 py-2 bg-transparent border-transparent',
            )}
          >
            <a
              href="#top"
              className="flex items-center gap-2.5 pl-1 font-display text-sm font-semibold tracking-tight"
              aria-label="Back to top"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              {profile.firstName}
            </a>

            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-200',
                    active === link.id ? 'text-text' : 'text-text-muted hover:text-text',
                  )}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-surface-2"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-1.5">
              <ThemeToggle />
              <Button href={profile.resumeUrl} variant="outline" size="sm" external>
                Resume
              </Button>
            </div>

            <div className="flex md:hidden items-center gap-1">
              <ThemeToggle />
              <button
                onClick={() => setOpen(true)}
                className="w-9 h-9 inline-flex items-center justify-center rounded-full text-text-muted hover:text-text"
                aria-label="Open menu"
              >
                <Menu size={18} strokeWidth={1.75} />
              </button>
            </div>
          </motion.nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[60] bg-bg flex flex-col"
          >
            <div className="container-x flex items-center justify-between h-[72px]">
              <span className="font-display text-sm font-semibold">{profile.firstName}</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full text-text-muted hover:text-text"
              >
                <X size={18} strokeWidth={1.75} />
              </button>
            </div>

            <div className="container-x flex flex-col flex-1 justify-center gap-2 pb-24">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline gap-4 py-3 border-b border-border font-display text-4xl font-semibold tracking-tight"
                >
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <Button href={profile.resumeUrl} variant="primary" arrow external>
                  Download resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
