import './globals.css'
import { Rubik } from 'next/font/google'
import { Providers } from './provider'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Happer64Bit',
  description: 'This is a Happer64Bit\'s homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
