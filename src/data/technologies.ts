export type TechCategory = 'Backend' | 'Frontend' | 'Languages' | 'Database' | 'Tools'

export interface Technology {
  name: string
  category: TechCategory
  icon: string // devicon/simple-icons slug
}

export const technologies: Technology[] = [
  // Languages
  { name: 'Java', category: 'Languages', icon: 'java' },
  { name: 'JavaScript', category: 'Languages', icon: 'javascript' },
  { name: 'TypeScript', category: 'Languages', icon: 'typescript' },
  { name: 'SQL', category: 'Languages', icon: 'mysql' },
  { name: 'HTML', category: 'Languages', icon: 'html5' },
  { name: 'CSS', category: 'Languages', icon: 'css3' },

  // Frontend
  { name: 'React', category: 'Frontend', icon: 'react' },
  { name: 'Next.js', category: 'Frontend', icon: 'nextjs' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwindcss' },
  { name: 'Redux Toolkit', category: 'Frontend', icon: 'redux' },

  // Backend
  { name: 'Java', category: 'Backend', icon: 'java' },
  { name: 'Spring Boot', category: 'Backend', icon: 'spring' },
  { name: 'REST APIs', category: 'Backend', icon: 'json' },

  // Database
  { name: 'MySQL', category: 'Database', icon: 'mysql' },
  { name: 'PostgreSQL', category: 'Database', icon: 'postgresql' },
  { name: 'Supabase', category: 'Database', icon: 'supabase' },

  // Tools
  { name: 'Git', category: 'Tools', icon: 'git' },
  { name: 'GitHub', category: 'Tools', icon: 'github' },
  { name: 'VS Code', category: 'Tools', icon: 'vscode' },
  { name: 'Vercel', category: 'Tools', icon: 'vercel' },
]