import { ThemeProvider } from '@/components/ThemeProvder'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: 'Wint Khant Lin Portfolio',
  description: 'Hi, my name is Wint Khant Lin. I develop, I create, I design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <Analytics mode='production'/>
      </body>
    </html>
  )
}
