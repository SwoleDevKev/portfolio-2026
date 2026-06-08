const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export interface StackItem { name: string; icon: string }

export const stack: StackItem[] = [
  { name: 'Angular',     icon: `${BASE}/angularjs/angularjs-original.svg` },
  { name: 'TypeScript',  icon: `${BASE}/typescript/typescript-original.svg` },
  { name: 'C#',          icon: `${BASE}/csharp/csharp-original.svg` },
  { name: '.NET',        icon: `${BASE}/dot-net/dot-net-original.svg` },
  { name: 'React / RN',  icon: `${BASE}/react/react-original.svg` },
  { name: 'JavaScript',  icon: `${BASE}/javascript/javascript-original.svg` },
  { name: 'Java',        icon: `${BASE}/java/java-original.svg` },
  { name: 'Spring Boot', icon: `${BASE}/spring/spring-original.svg` },
  { name: 'Node.js',     icon: `${BASE}/nodejs/nodejs-original.svg` },
  { name: 'Python',      icon: `${BASE}/python/python-original.svg` },
  { name: 'PostgreSQL',  icon: `${BASE}/postgresql/postgresql-original.svg` },
  { name: 'MySQL',       icon: `${BASE}/mysql/mysql-original.svg` },
  { name: 'MongoDB',     icon: `${BASE}/mongodb/mongodb-original.svg` },
  { name: 'AWS',         icon: `${BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
  { name: 'Docker',      icon: `${BASE}/docker/docker-original.svg` },
  { name: 'Git',         icon: `${BASE}/git/git-original.svg` },
]
