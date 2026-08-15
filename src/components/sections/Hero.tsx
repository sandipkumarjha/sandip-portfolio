import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { siGithub } from 'simple-icons'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'
import profileImage from '@/assets/images/profile.jpg'
import linkedinIcon from '@/assets/icons/linkedin.svg'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

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

export function Hero() {
  const socials = [
    profile.social.github && {
      type: 'github',
      href: profile.social.github,
      label: 'GitHub',
      path: siGithub.path,
    },

    profile.social.linkedin && {
      type: 'linkedin',
      href: profile.social.linkedin,
      label: 'LinkedIn',
      path: null,
    },

    profile.social.email && {
      type: 'email',
      href: `mailto:${profile.social.email}`,
      label: 'Email',
      path: null,
    },
  ].filter(Boolean) as {
    type: string
    href: string
    label: string
    path: string | null
  }[]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse at 50% 30%, black 10%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 30%, black 10%, transparent 70%)',
        }}
      />

      {/* Main Hero Container */}
      <motion.div
        initial="hidden"
        animate="show"
        transition={{
          staggerChildren: 0.08,
          delayChildren: 0.1,
        }}
        className="relative max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 font-mono text-xs text-text-muted border border-border rounded-full px-3 py-1"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-full w-full bg-accent" />
            </span>

            {profile.status}
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-accent mb-3"
          >
            // developer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-text tracking-tight leading-[1.05] mb-4"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display text-xl sm:text-2xl text-text-muted mb-6 max-w-2xl"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-base text-text-muted max-w-xl mb-10 leading-relaxed"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Button
              href="#projects"
              icon={<ArrowUpRight size={16} />}
            >
              View Projects
            </Button>

            <Button
              href={profile.resumeUrl}
              variant="outline"
              external
            >
              Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-5"
          >
            {socials.map(({ type, href, label, path }) => (
              <a
                key={label}
                href={href}
                target={
                  href.startsWith('http') ? '_blank' : undefined
                }
                rel={
                  href.startsWith('http') ? 'noreferrer' : undefined
                }
                aria-label={label}
                className="text-text-muted hover:text-accent transition-colors duration-200"
              >
                {type === 'email' ? (
                  <Mail size={18} />
                ) : type === 'linkedin' ? (
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <BrandIcon path={path!} size={18} />
                )}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Blue glow */}
            <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
              <img
                src={profileImage}
                alt="Sandip Kumar Jha"
                className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-[420px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}