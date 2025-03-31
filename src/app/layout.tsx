import { Poppins } from 'next/font/google'
import { PageAnimationWrapper } from '@/components/PageAnimationWrapper'
import { PageHeader } from '@/components/PageHeader'

import './globals.css'

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] })

export const metadata = {
  title: 'AVT Wielrennen',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex items-center justify-center bg-zinc-50`}>
        <PageHeader />
        <main className="flex min-h-screen max-w-lg flex-col items-center justify-between overflow-x-hidden p-8 pt-32">
          <PageAnimationWrapper>{children}</PageAnimationWrapper>
        </main>
      </body>
    </html>
  )
}
