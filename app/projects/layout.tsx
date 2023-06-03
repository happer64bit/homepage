import { Rubik } from 'next/font/google'
import { Providers } from './../provider'

export const metadata = {
  title: 'Projects Showcase',
  description: 'Happer64Bit\'s projects showcase',
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
