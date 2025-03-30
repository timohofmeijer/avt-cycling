'use client'

import { CaptainData } from '@/config/captains'
import { motion, AnimatePresence } from 'motion/react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

type Props = {
  zoomedCaptain: { captain: CaptainData; date: string } | null
  onClose: () => void
}

export const ZoomedCaptainModal: React.FC<Props> = ({ zoomedCaptain, onClose }) => {
  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {zoomedCaptain && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ damping: 10, mass: 1, stiffness: 100 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="relative flex items-center justify-center w-[280px] h-[280px]">
            <motion.div
              layoutId={`captain-${zoomedCaptain.captain.id}-${zoomedCaptain.date}`}
              style={{ transformOrigin: '50% 50% 0px' }}
              className="relative w-[280px] h-[280px]"
            >
              <Image
                src={`/trainers/${zoomedCaptain.captain.image}`}
                alt={zoomedCaptain.captain.name}
                fill
                className="rounded-full bg-zinc-300/10 object-cover border-8 w-[280px] h-[280px]"
              />
              <div className="absolute -bottom-10 left-0 right-0 text-zinc-100 text-center py-2 text-base">
                {zoomedCaptain.captain.name}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
