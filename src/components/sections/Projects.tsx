import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'

export function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="work" className="py-28 sm:py-36 border-t border-border">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Things I’ve built."
          description="A selection of what I've been building, with the code open on GitHub."
        />

        <ul className="space-y-24 sm:space-y-32">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </ul>

        <Reveal className="mt-20 flex items-center gap-6">
          <span className="hairline flex-1" />
          <Button href={profile.social.github} variant="outline" arrow external>
            More on GitHub
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
