import { Rubik } from 'next/font/google'
import { Providers } from './../provider'

const rubik = Rubik({ subsets: ['latin'] })

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
    <section className={rubik.className}>
      <Providers>
        {children}
      </Providers>
    </section>
  )
}
