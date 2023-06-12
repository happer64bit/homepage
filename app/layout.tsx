import './globals.css'
import { Rubik } from 'next/font/google'
import { Providers } from './provider'
import { Analytics } from '@vercel/analytics/react';
import { ColorModeScript } from '@chakra-ui/react';
import Script from 'next/script';

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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T4DJK2QJYT"></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-T4DJK2QJYT');
          `}
        </Script>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico"/>
        <meta name="theme-color" content='#141a20'/>
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
