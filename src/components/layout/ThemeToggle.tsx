import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/UseTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-text-muted hover:text-accent hover:border-accent transition-colors duration-200"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}