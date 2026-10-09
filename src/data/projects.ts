import pdfProcessorImage from '@/assets/images/pdf-processor.png'
import movieAppImage from '@/assets/images/movie-app.png'

export interface Project {
  title: string
  description: string
  technologies: string[]
  repoUrl?: string
  liveUrl?: string
  image?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Privacy-First PDF Processor',
    description:
      'A privacy-focused PDF processing web app — merge, split, compress, and more — with every operation running locally in the browser instead of uploading documents to a server.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'PDF.js',
      'pdf-lib',
      'Web Workers',
    ],
    repoUrl:
      'https://github.com/sandipkumarjha/privacy-first-pdf-processor',
    liveUrl:
      'https://privacy-first-pdf-processor.vercel.app',
    image: pdfProcessorImage,
    featured: true,
  },

  {
    title: 'Movie Application',
    description:
      'A movie discovery app with browsing and search built on the TMDB API, using Redux Toolkit for state management.',
    technologies: [
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'TMDB API',
      'Axios',
    ],
    repoUrl: 'https://github.com/sandipkumarjha/MovieApp',
    liveUrl: 'https://movie-app-aiap.vercel.app/',
    image: movieAppImage,
    featured: true,
  },
]