'use client'

import { CaptainData } from '@/config/captains'
import { motion, AnimatePresence } from 'framer-motion'
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              layoutId={`captain-${zoomedCaptain.captain.id}-${zoomedCaptain.date}`}
              className="relative w-[280px] h-[280px]"
            >
              <Image
                src={`/trainers/${zoomedCaptain.captain.image}`}
                alt={zoomedCaptain.captain.name}
                fill
                className="rounded-full bg-zinc-300 object-cover border-4 border-black/5"
              />
              <div className="absolute inset-0 rounded-full" />
              <div className="absolute -bottom-10 left-0 right-0 text-zinc-300 text-center py-2 text-base shadow-sm">
                {zoomedCaptain.captain.name}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation()
                  onClose()
                }}
                className="absolute -top-2 -right-2 aspect-square h-7 bg-black/0 text-zinc-300 rounded-full p-1 text-sm pointer-events-auto"
              >
                ✕
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
