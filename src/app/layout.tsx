import { Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { PageAnimationWrapper } from '@/components/PageAnimationWrapper'
import { PageHeader } from '@/components/PageHeader'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#fafafa',
}

export const metadata = {
  title: 'AVT Wielrennen',
  description: 'AVT Cycling - Your cycling companion',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'AVT Wielrennen',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex items-center justify-center bg-zinc-50`}>
        <PageHeader />
        <main className="flex min-h-screen max-w-lg flex-col items-center justify-between overflow-x-hidden p-8 pt-[calc((--spacing(32)+var(--safeAreaInsetTop)))] pb-24">
          <PageAnimationWrapper>{children}</PageAnimationWrapper>
        </main>
        <Analytics />
      </body>
    </html>
  )
}
