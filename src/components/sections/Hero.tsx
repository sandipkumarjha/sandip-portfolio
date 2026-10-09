import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { profile } from '@/data/profile'
import { technologies } from '@/data/technologies'
import profileImage from '@/assets/images/profile.jpg'

const ease = [0.16, 1, 0.3, 1] as const

function Word({ children, delay }: { children: string; delay: number }) {
  return (
    <motion.span
      initial={{ y: '0.6em', opacity: 0, filter: 'blur(6px)' }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, delay, ease }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const leadWords = profile.headline.lead.split(' ')
  const ticker = Array.from(new Set(technologies.map((t) => t.name)))

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col pt-28 sm:pt-36 overflow-hidden">
      {/* ambient light */}
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container-x relative flex-1 grid lg:grid-cols-[1.35fr_0.65fr] gap-12 lg:gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 mb-8 rounded-full border border-border bg-surface/60 backdrop-blur px-3.5 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex rounded-full h-full w-full bg-accent" />
            </span>
            <span className="eyebrow !text-text">{profile.status}</span>
          </motion.div>

          <h1 className="font-display font-semibold tracking-[-0.035em] leading-[1.02] text-[2.6rem] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] mb-8 max-w-[12ch]">
            {reduce ? (
              <>
                {profile.headline.lead}{' '}
                <span className="serif-italic text-accent">{profile.headline.emphasis}</span>
              </>
            ) : (
              <>
                {leadWords.map((w, i) => (
                  <span key={w + i}>
                    <Word delay={0.15 + i * 0.07}>{w}</Word>{' '}
                  </span>
                ))}
                <br className="hidden sm:block" />
                <span className="serif-italic text-accent">
                  <Word delay={0.15 + leadWords.length * 0.07}>{profile.headline.emphasis}</Word>
                </span>
              </>
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.55 }}
            className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-10"
          >
            <span className="text-text font-medium">{profile.name}</span> · {profile.role}.{' '}
            {profile.intro.replace(/^I’m Sandip Kumar Jha, /, 'An ')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button href="#work" arrow>
              See the work
            </Button>
            <Button href={profile.resumeUrl} variant="outline" external>
              Resume
            </Button>
            <SocialLinks className="sm:ml-3" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.35 }}
          className="relative justify-self-center lg:justify-self-end w-full max-w-[320px] lg:max-w-[360px]"
        >
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-border bg-surface">
            <img
              src={profileImage}
              alt={profile.name}
              className="w-full h-full object-cover saturate-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
              <div>
                <p className="font-display text-sm font-semibold text-white">{profile.name}</p>
                <p className="font-mono text-[11px] text-white/70">{profile.location}</p>
              </div>
              <span className="font-mono text-[11px] text-white/70">’24 → ’27</span>
            </div>
          </div>

          {/* corner marks */}
          <span aria-hidden className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-text-faint" />
          <span aria-hidden className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-text-faint" />
        </motion.div>
      </div>

      {/* ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="marquee relative mt-16 sm:mt-20 border-y border-border py-4 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="marquee-track">
          {[0, 1].map((n) => (
            <div key={n} className="flex items-center" aria-hidden={n === 1}>
              {ticker.map((name) => (
                <span key={name + n} className="flex items-center gap-6 px-6 eyebrow whitespace-nowrap">
                  {name}
                  <span className="w-1 h-1 rounded-full bg-text-faint" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
