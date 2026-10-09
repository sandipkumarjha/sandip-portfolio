import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { profile } from '@/data/profile'
import { SocialLinks } from '@/components/ui/SocialLinks'

function useLocalTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 15_000)
    return () => clearInterval(id)
  }, [])

  return time
}

export function Footer() {
  const time = useLocalTime()

  return (
    <footer className="border-t border-border">
      <div className="container-x py-10 grid gap-8 sm:grid-cols-3 sm:items-center">
        <div className="flex flex-col gap-1">
          <span className="font-display text-sm font-semibold">{profile.name}</span>
          <span className="font-mono text-[11px] text-text-faint">
            © {new Date().getFullYear()} · All rights reserved
          </span>
        </div>

        <div className="flex sm:justify-center">
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {profile.location} · {time} IST
          </span>
        </div>

        <div className="flex sm:justify-end items-center gap-3">
          <SocialLinks size={14} />
          <a
            href="#top"
            aria-label="Back to top"
            className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-text text-bg hover:bg-accent transition-colors duration-300"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
