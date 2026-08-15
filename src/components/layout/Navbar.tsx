import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'

const links = [
  { label: 'about', href: '#about' },
  { label: 'stack', href: '#stack' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-bg/70 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-sm text-text">
          <span className="text-accent">~/</span>sandip
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-text-muted hover:text-text transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Button
            href={profile.resumeUrl}
            variant="outline"
            external
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-text-muted"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-bg z-50 flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <span className="font-mono text-sm text-text">
                <span className="text-accent">~/</span>sandip
              </span>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-text-muted"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-6 px-6 py-10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-lg text-text"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Actions */}
              <div className="flex items-center gap-3 pt-4">
                <ThemeToggle />

                <Button
                  href={profile.resumeUrl}
                  variant="outline"
                  external
                >
                  Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}