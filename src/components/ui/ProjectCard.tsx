import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { siGithub } from 'simple-icons'
import type { Project } from '@/data/projects'

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={siGithub.path} />
    </svg>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const slug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col rounded-md border border-border  bg-surface overflow-hidden hover:border-accent transition-colors duration-200"
    >
      {/* Project Image */}
      <div className="relative h-48 border-b border-border overflow-hidden bg-surface">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="relative h-full flex items-center px-5">
            <div
              className="absolute inset-0 opacity-[0.35] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <p className="relative font-mono text-xs text-text-muted">
              <span className="text-accent">~/</span>
              projects/{slug}
            </p>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-lg font-semibold text-text mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-1 rounded border border-border text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors duration-200"
            >
              <GitHubIcon size={14} />
              Source
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-text-muted/50">
              <GitHubIcon size={14} />
              Repo TBA
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors duration-200"
            >
              <ArrowUpRight size={14} />
              Live
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-text-muted/50">
              <ArrowUpRight size={14} />
              Live TBA
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}