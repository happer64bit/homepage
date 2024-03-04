import { ThemeProvider } from '@/components/ThemeProvder'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster'
import { LazyMotion, domAnimation } from '@/components/motion'
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from 'react';

const Header = dynamic(() => import('@/components/Header'), {
  ssr: false,
  loading: () => <></>
})

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
        <Analytics mode='production' />
        <LazyMotion features={domAnimation}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense>
              <Header />
            </Suspense>
            {children}
            <Toaster />
          </ThemeProvider>
        </LazyMotion>
        <SpeedInsights />
      </body>
    </html>
  )
}
