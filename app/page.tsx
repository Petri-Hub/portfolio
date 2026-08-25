const links = [
  { label: 'GitHub', href: 'https://github.com/Petri-Hub', text: 'github.com/Petri-Hub' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/fernando-petri',
    text: 'linkedin.com/in/fernando-petri',
  },
  {
    label: 'Email',
    href: 'mailto:fernando.petri01@gmail.com',
    text: 'fernando.petri01@gmail.com',
  },
]

export default function Page() {
  return (
    <main>
      <h1>Fernando Petri</h1>

      <p>
        Software engineer, four years in, most recently on financial systems — payment rails,
        banking integrations, and the infrastructure that keeps them up. I work across the stack,
        but I&apos;m most useful where the backend meets the platform.
      </p>

      <p>
        Most of what I know about backend and infrastructure I learned in production rather than in
        a course. I also build my own agent tooling, because a plan a model can actually follow is
        worth more than faster autocomplete.
      </p>

      <p>
        Currently working with Java and Quarkus on Kubernetes, TypeScript and Next.js on top, and
        AWS underneath.
      </p>

      <p>Based in Brazil. Working remotely.</p>

      <ul>
        {links.map(({ label, href, text }) => (
          <li key={label}>
            <span>{label}</span>
            <a href={href} target="_blank" rel="noreferrer">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
