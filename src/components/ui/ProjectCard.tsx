import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { siGithub } from 'simple-icons'
import { clsx } from 'clsx'
import type { MouseEvent } from 'react'
import type { Project } from '@/data/projects'
import { Reveal } from '@/components/ui/Reveal'

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={siGithub.path} />
    </svg>
  )
}

function Frame({ project, flip }: { project: Project; flip: boolean }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 25 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 25 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const host = project.liveUrl ? new URL(project.liveUrl).host : 'localhost:3000'

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className={clsx('group relative', flip ? 'lg:order-2' : 'lg:order-1')}
    >
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent) 18%, transparent), transparent)',
          filter: 'blur(30px)',
        }}
      />
      <a
        href={project.liveUrl ?? project.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="relative block rounded-2xl border border-border bg-surface overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-2 px-4 h-10 border-b border-border bg-surface-2/60">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-text-faint/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-text-faint/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-text-faint/40" />
          </span>
          <span className="mx-auto px-3 py-1 rounded-md bg-bg/60 font-mono text-[10px] text-text-muted truncate max-w-[70%]">
            {host}
          </span>
        </div>
        <div className="aspect-[16/10] overflow-hidden bg-surface-2">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full grid place-items-center font-mono text-xs text-text-faint">
              preview coming soon
            </div>
          )}
        </div>
      </a>
    </motion.div>
  )
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1

  return (
    <Reveal as="li" className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <Frame project={project} flip={flip} />

      <div className={clsx(flip ? 'lg:order-1' : 'lg:order-2')}>
        <p className="font-mono text-xs text-accent tabular-nums mb-5">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.03em] leading-[1.05] mb-5">
          {project.title}
        </h3>
        <p className="text-text-muted leading-relaxed text-base sm:text-lg mb-7 max-w-lg">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
          {project.technologies.map((tech) => (
            <li key={tech} className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium"
            >
              Visit live
              <ArrowUpRight size={14} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text"
            >
              <GitHubIcon size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}
