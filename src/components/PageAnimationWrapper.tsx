'use client'

import { useRestoreScrollPosition } from '@/hooks/use-restore-scroll-position'
import { AnimatePresence } from 'framer-motion'

/* NOTE" exit animations are currently not working in Next 13 (13.4.5 as of writing)!
  See: https://github.com/vercel/next.js/issues/49279
*/
export const PageAnimationWrapper: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  useRestoreScrollPosition()
  return (
    <AnimatePresence initial={false} mode="wait">
      ..{children}
    </AnimatePresence>
  )
}
