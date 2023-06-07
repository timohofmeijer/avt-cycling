import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] })

export const metadata = {
  title: 'AVT Wielrennen',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex justify-center items-center bg-zinc-100`}>
        <header
          className="z-20 p-3 w-full h-20 fixed top-0 left-0 flex flex-col justify-center overflow-hidden backdrop-blur"
          id="headerPortal"
        >
          <div className="absolute z-0 w-full h-full left-0 bg-zinc-200 opacity-90" />
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-32 max-w-lg overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
