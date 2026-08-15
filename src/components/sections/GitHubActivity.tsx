import { useState } from 'react'
import { siGithub } from 'simple-icons'
import { SectionHeading } from '@/components/ui/SectionHeading'

const USERNAME = 'sandipkumarjha'

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

export function GitHubActivity() {
  const [chartFailed, setChartFailed] = useState(false)

  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="activity.log"
          title="GitHub Activity"
          description={`Contribution history for @${USERNAME}.`}
        />

        <div className="rounded-md border border-border bg-surface p-6 overflow-x-auto">
          {!chartFailed ? (
            <img
              src={`https://ghchart.rshah.org/4c7eff/${USERNAME}`}
              alt={`${USERNAME} GitHub contribution chart`}
              className="min-w-[640px] w-full"
              loading="lazy"
              onError={() => setChartFailed(true)}
            />
          ) : (
            <p className="text-sm text-text-muted">
              Contribution chart unavailable right now.
            </p>
          )}
        </div>

        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-5 font-mono text-xs text-text-muted hover:text-accent transition-colors duration-200"
        >
          <GitHubIcon size={14} />
          @{USERNAME}
        </a>
      </div>
    </section>
  )
}