import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { profile } from '@/data/profile'

const USERNAME = profile.social.githubUser

interface Day {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ApiResponse {
  total: Record<string, number>
  contributions: Day[]
}

type Status = 'loading' | 'ready' | 'fallback' | 'error'

const levelOpacity = [0.07, 0.28, 0.5, 0.75, 1]

function useContributions() {
  const [status, setStatus] = useState<Status>('loading')
  const [days, setDays] = useState<Day[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const ctrl = new AbortController()
    let timedOut = false
    const timer = setTimeout(() => {
      timedOut = true
      ctrl.abort()
    }, 8000)
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`, {
      signal: ctrl.signal,
    })
      .then((r) => (r.ok ? (r.json() as Promise<ApiResponse>) : Promise.reject(r.status)))
      .then((data) => {
        setDays(data.contributions)
        setTotal(Object.values(data.total).reduce((a, b) => a + b, 0))
        setStatus('ready')
      })
      .catch((err: unknown) => {
        // an unmount abort is not a failure
        if (err instanceof DOMException && err.name === 'AbortError' && !timedOut) return
        setStatus('fallback')
      })
      .finally(() => clearTimeout(timer))
    return () => {
      clearTimeout(timer)
      ctrl.abort()
    }
  }, [])

  return { status, days, total, setStatus }
}

export function GitHubActivity() {
  const { status, days, total, setStatus } = useContributions()

  const weeks = useMemo(() => {
    if (!days.length) return []
    const first = new Date(days[0].date)
    const pad = first.getDay()
    const padded: (Day | null)[] = [...Array<null>(pad).fill(null), ...days]
    const out: (Day | null)[][] = []
    for (let i = 0; i < padded.length; i += 7) out.push(padded.slice(i, i + 7))
    return out
  }, [days])

  const months = useMemo(() => {
    const labels: { idx: number; name: string }[] = []
    let last = -1
    weeks.forEach((w, i) => {
      const d = w.find(Boolean)
      if (!d) return
      const m = new Date(d.date).getMonth()
      if (m !== last) {
        labels.push({ idx: i, name: new Date(d.date).toLocaleString('en', { month: 'short' }) })
        last = m
      }
    })
    return labels
  }, [weeks])

  const streak = useMemo(() => {
    let s = 0
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].count > 0) s++
      else if (i !== days.length - 1) break
    }
    return s
  }, [days])

  return (
    <section className="py-20 sm:py-24 border-t border-border">
      <div className="container-x">
        <Reveal>
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <p className="eyebrow mb-2">Activity</p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                  {status === 'ready' ? (
                    <>
                      <span className="tabular-nums">{total.toLocaleString()}</span> contributions
                      <span className="text-text-muted font-normal"> in the last year</span>
                    </>
                  ) : (
                    'Contribution history'
                  )}
                </h3>
              </div>
              <div className="flex items-center gap-8">
                {status === 'ready' && (
                  <div>
                    <p className="eyebrow mb-1">Current streak</p>
                    <p className="font-display text-xl font-semibold tabular-nums">
                      {streak} <span className="text-text-muted font-normal text-sm">days</span>
                    </p>
                  </div>
                )}
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1 font-mono text-xs text-text-muted hover:text-text"
                >
                  @{USERNAME}
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            <div className="overflow-x-auto -mx-2 px-2 pb-1">
              {status === 'loading' && (
                <div className="h-[116px] rounded-xl bg-surface-2 animate-pulse" />
              )}

              {status === 'fallback' && (
                <img
                  src={`https://ghchart.rshah.org/d2ab6b/${USERNAME}`}
                  alt={`${USERNAME} GitHub contribution chart`}
                  className="min-w-[720px] w-full"
                  loading="lazy"
                  onError={() => setStatus('error')}
                />
              )}

              {status === 'error' && (
                <p className="text-sm text-text-muted py-8">
                  Contribution graph unavailable right now.{' '}
                  <a href={profile.social.github} className="link-underline text-text" target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </p>
              )}

              {status === 'ready' && (
                <div className="min-w-[720px]">
                  <div className="relative h-4 mb-1.5">
                    {months.map((m) => (
                      <span
                        key={m.idx + m.name}
                        className="absolute font-mono text-[10px] text-text-faint"
                        style={{ left: `calc(${m.idx} * (100% / ${weeks.length}))` }}
                      >
                        {m.name}
                      </span>
                    ))}
                  </div>
                  <div
                    className="grid gap-[3px]"
                    style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}
                  >
                    {weeks.map((week, wi) => (
                      <div key={wi} className="grid grid-rows-7 gap-[3px]">
                        {Array.from({ length: 7 }).map((_, di) => {
                          const d = week[di]
                          return (
                            <span
                              key={di}
                              title={d ? `${d.count} contributions · ${d.date}` : undefined}
                              className="aspect-square rounded-[2px] transition-transform duration-200 hover:scale-125"
                              style={{
                                background: d ? 'var(--accent)' : 'transparent',
                                opacity: d ? levelOpacity[d.level] : 0,
                              }}
                            />
                          )
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-end gap-1.5 font-mono text-[10px] text-text-faint">
                    Less
                    {levelOpacity.map((o) => (
                      <span key={o} className="w-2.5 h-2.5 rounded-[2px]" style={{ background: 'var(--accent)', opacity: o }} />
                    ))}
                    More
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
