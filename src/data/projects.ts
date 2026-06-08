export type ProjectTheme = 'rg' | 'dw' | 'ppt'
export type BadgeType = 'live' | 'demo' | 'default'

export interface Badge { label: string; type: BadgeType }
export interface Credential { role: string; email: string; password: string }

export interface Project {
  id: string
  name: string
  theme: ProjectTheme
  badges: Badge[]
  description: string
  tech: string[]
  url?: string
  credentials?: Credential[]
  poster?: string
  video?: string
}

export const projects: Project[] = [
  {
    id: 'dimewise',
    name: 'DimeWise',
    video:'/videos/dimewise.mov',
    poster: '/images/dimewise-poster.jpg',
    theme: 'dw',
    badges: [{ label: 'Demo', type: 'demo' }, { label: 'Web App', type: 'default' }],
    description: 'Budgeting app that categorizes expenses and surfaces spending insights through clean data visualizations. Use the demo account to explore — no real bank connection required.',
    tech: ['React', 'Node.js', 'MySQL'],
    url: 'https://dimewise.netlify.app',
    credentials: [{ role: 'Demo', email: 'kevin@smith.com', password: 'Password1!' }],
  },
  {
    id: 'reading-guild',
    name: 'Reading Guild',
    video:'/videos/reading-guild.mp4',
    poster: '/images/reading-guild-poster.jpg',
    theme: 'rg',
    badges: [{ label: 'Live', type: 'live' }, { label: 'iOS · Android', type: 'default' }],
    description: 'Social reading platform for book clubs. Real-time chat, threaded discussions, club discovery, and push notifications. Live on the App Store and Google Play.',
    tech: ['React Native', 'Expo', 'Spring Boot', 'PostgreSQL'],
    url: 'https://readingguild.com/download',
  },
  {
    id: 'pocketpt',
    name: 'PocketPT',
    video:'/videos/pocket-pt.mov',
    poster: '/images/pocket-pt-poster.png',
    theme: 'ppt',
    badges: [{ label: 'Web App', type: 'default' }],
    description: 'Full-stack CRUD platform for personal trainers to build and assign workout plans. Try both roles with the demo accounts — trainer and client dashboards are fully separate.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    url: 'https://ka-pocketpt.com',
    credentials: [
      { role: 'Trainer', email: 'johnsmith@gmail.com', password: 'password' },
      { role: 'Client',  email: 'adamfields@gmail.com', password: 'password' },
    ],
  },
]
