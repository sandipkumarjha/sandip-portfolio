import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { profile } from '@/data/profile'

export function Contact() {
  return (
    <section id="contact" className="relative py-32 sm:py-44 border-t border-border overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 bottom-[-320px] w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklab, var(--accent) 16%, transparent), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow mb-6">05 — Contact</p>
          <h2 className="font-display font-semibold tracking-[-0.035em] leading-[0.98] text-5xl sm:text-6xl lg:text-7xl max-w-4xl">
            Open to SDE roles. <span className="serif-italic text-accent">Let’s talk.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-text-muted text-base sm:text-lg leading-relaxed max-w-xl">
            Currently open to SDE, Software Engineer, Backend Developer and Full-Stack Developer
            opportunities. I’m especially interested in Java and Spring Boot roles where I can build
            real-world software and grow as an engineer.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${profile.social.email}`}
            className="group mt-12 inline-flex items-center gap-3 font-display text-xl sm:text-3xl font-medium tracking-tight"
          >
            <span className="link-underline">{profile.social.email}</span>
            <ArrowUpRight
              className="transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:-translate-y-1"
              size={22}
            />
          </a>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center gap-3">
          <Button href={profile.resumeUrl} arrow external>
            Download resume
          </Button>
          <SocialLinks className="sm:ml-3" />
        </Reveal>
      </div>
    </section>
  )
}
