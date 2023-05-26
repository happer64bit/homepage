import './globals.css'
import { Rubik } from 'next/font/google'
import { Providers } from './provider'
import { Analytics } from '@vercel/analytics/react';

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
      <head>
        <meta name="google-site-verification" content="0hbZKdBjVysNUDD6kor0Hd6lN-aI78I8v5NhYIXa30o" />
      </head>
      <body className={rubik.className}>
        <Analytics />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
