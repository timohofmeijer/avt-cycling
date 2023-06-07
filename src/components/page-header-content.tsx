'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { BsChevronLeft } from 'react-icons/bs'

type PageType = 'home' | 'signalen' | 'draaien' | 'ritsen' | 'nieuw' | 'wegkapiteins'

export const PageHeaderContent: React.FC<{ page: PageType }> = ({ page }) => {
  const [isCSR, setCSR] = useState(false)
  useEffect(() => {
    setCSR(typeof window !== 'undefined')
  }, [])
  const notRoot = page !== 'home'
  return isCSR
    ? createPortal(
        <>
          <div className="z-10 w-full text-center text-xs font-bold">{pageTitles[page]}</div>
          {notRoot ? (
            <Link
              href="/"
              className="flex items-center justify-items-center gap-1 text-blue-600 z-10 bottom-2 absolute"
            >
              <BsChevronLeft size={18} /> Terug
            </Link>
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
}
