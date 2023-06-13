'use client'
import { debounce } from '@/utilities/debounce'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/*
  NOTE: This should be handled by next in the near future!
  It’s an experimental feature under the `scrollRestoration` flag in next.config.js.
*/
export const useRestoreScrollPosition = () => {
  const path = usePathname()
  const { scrollY } = useScroll()

  // Store latest scroll position for this path
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (path === '/') {
      debounce(() => {
        sessionStorage.setItem(path, latest.toString())
        // Maybe implement an expiration date someday...
        // const expire = new Date()
        // expire.setMinutes(expire.getMinutes() + 5)
      })
    }
  })

  // Restore scroll position when returning to this path if it is defined.
  useEffect(() => {
    if (path in sessionStorage) {
      document.documentElement.scrollTop = Number(sessionStorage.getItem(path))
    }
  }, [path])
}
