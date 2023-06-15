import { Providers } from './../provider'

export const metadata = {
  title: 'Blog',
  description: 'Blog Home',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Providers>
        {children}
      </Providers>
    </section>
  )
}
