export interface Project {
  title: string
  description: string
  technologies: string[]
  repoUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Privacy-First PDF Processor',
    description:
      'A privacy-focused PDF processing web app — merge, split, compress, and more — with every operation running locally in the browser instead of uploading documents to a server.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PDF.js', 'pdf-lib', 'Web Workers'],
    repoUrl: 'https://github.com/sandipkumarjha/privacy-first-pdf-processor',
    liveUrl: undefined, // TODO: add live URL
    featured: true,
  },
  {
    title: 'Movie Application',
    description:
      'A movie discovery app with browsing and search built on the TMDB API, using Redux Toolkit for state management.',
    technologies: ['React', 'Redux Toolkit', 'Tailwind CSS', 'TMDB API', 'Axios'],
    repoUrl: 'https://github.com/sandipkumarjha/MovieApp',
    liveUrl: undefined, // TODO: add live URL
    featured: true,
  },
  {
    title: 'Car Rental Application',
    description: 'A full-stack car rental application backed by Supabase for database and backend functionality.',
    technologies: ['React / Next.js', 'Supabase', 'Database'],
    repoUrl: undefined, // TODO: add repo URL
    liveUrl: undefined, // TODO: add live URL
    featured: true,
  },
]