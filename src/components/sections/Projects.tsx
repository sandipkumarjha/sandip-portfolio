import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Button } from '@/components/ui/Button'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'

export function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6  gap-10">
        <SectionHeading
          eyebrow="projects/"
          title="Featured Projects"
          description="A selection of what I've been building."
        />

        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <Button href={profile.social.github} variant="outline" icon={<ArrowUpRight size={16} />} external>
          View All Projects
        </Button>
      </div>
    </section>
  )
}