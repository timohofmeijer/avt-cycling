'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { BsChevronLeft } from 'react-icons/bs'
import { motion } from 'motion/react'

type PageType = 'home' | 'signalen' | 'draaien' | 'ritsen' | 'nieuw' | 'wegkapiteins' | 'kalender'

export const PageHeaderContent: React.FC<{ page: PageType }> = ({ page }) => {
  const [isCSR, setCSR] = useState(false)
  useEffect(() => {
    setCSR(typeof window !== 'undefined')
  }, [])
  const notRoot = page !== 'home'
  return isCSR
    ? createPortal(
        <>
          <motion.div
            className="absolute top-4 bottom-3 z-10 w-full pt-[var(--safeAreaInsetTop)]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            // transition={{ delay: 0.2 }}
          >
            {notRoot ? (
              <div className="relative flex h-8 w-full items-center justify-center text-center text-xs text-zinc-400">
                {pageTitles['home']}
              </div>
            ) : null}
            <div className="text-md absolute bottom-0 flex h-8 w-full items-center justify-center text-center font-bold text-zinc-500">
              {pageTitles[page]}
            </div>
          </motion.div>
          {notRoot ? (
            <motion.div
              className="absolute bottom-3 z-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <Link
                className="absolute bottom-0 flex h-8 items-center justify-items-center gap-1 text-blue-700"
                href="/"
              >
                <BsChevronLeft size={18} /> Terug
              </Link>
            </motion.div>
          ) : null}
        </>,
        document.querySelector('#headerPortal')!,
      )
    : null
}

const pageTitles: Record<PageType, string> = {
  home: 'AVT Wielrennen',
  signalen: 'Signalen',
  draaien: 'Draaien',
  ritsen: 'Ritsen',
  nieuw: 'Nieuwe deelnemers',
  wegkapiteins: 'Wegkapiteins',
  kalender: 'Kalender',
}
