import { ThemeProvider } from '@/context/ThemeContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/ui/About'
import { TechStack } from '@/components/ui/Techstack'
import { GitHubActivity } from '@/components/sections/GitHubActivity'
import { Projects } from '@/components/sections/Projects'
import { Education } from '@/components/sections/Education'
import { CurrentLearning } from '@/components/sections/CurrentLearning'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <GitHubActivity />
      <Projects />
      <Education />
      <CurrentLearning />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App