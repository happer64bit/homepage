import { Providers } from './../provider'

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
