'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { BsChevronLeft } from 'react-icons/bs'
import { motion } from 'framer-motion'

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
            className="absolute z-10 w-full top-4 bottom-3"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            // transition={{ delay: 0.2 }}
          >
            {notRoot ? (
              <div className="relative flex items-center justify-center w-full h-8 text-xs text-center text-zinc-400">
                {pageTitles['home']}
              </div>
            ) : null}
            <div className="absolute bottom-0 flex items-center justify-center w-full h-8 font-bold text-center text-md text-zinc-500">
              {pageTitles[page]}
            </div>
          </motion.div>
          {notRoot ? (
            <motion.div
              className="absolute z-10 bottom-3"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <Link
                className="absolute bottom-0 flex items-center h-8 gap-1 text-blue-700 justify-items-center"
                href="/"
              >
                <BsChevronLeft size={18} /> Terug
              </Link>
            </motion.div>
          ) : null}
        </>,
        document.querySelector('#headerPortal')!
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
