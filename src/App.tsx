import { ThemeProvider } from '@/context/ThemeContext'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/ui/About'
import { TechStack } from '@/components/ui/Techstack'
import { Projects } from '@/components/sections/Projects'
import { GitHubActivity } from '@/components/sections/GitHubActivity'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GitHubActivity />
    </ThemeProvider>
  )
}

export default App