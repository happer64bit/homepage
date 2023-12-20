import { ThemeProvider } from '@/components/ThemeProvder'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster'
import Script from 'next/script'


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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D3NCSR0W54" />
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D3NCSR0W54');`}
        </Script>

      </head>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
