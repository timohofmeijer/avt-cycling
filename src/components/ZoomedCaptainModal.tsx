'use client'

import { CaptainData } from '@/config/captains'
import { motion, AnimatePresence } from 'motion/react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

import { captains } from '@/config/captains'
import Head from 'next/head'

type Props = {
  zoomedCaptain: { captain: CaptainData; idSuffix: string } | null
  onClose: () => void
}

export const ZoomedCaptainModal: React.FC<Props> = ({ zoomedCaptain, onClose }) => {
  if (typeof window === 'undefined') return null

  return createPortal(
    <>
      <Head>
        {captains.map((captain) => (
          <link
            key={captain.id}
            rel="preload"
            as="image"
            href={`/_next/image?url=${encodeURIComponent(`/trainers/${captain.image}`)}&w=280&q=75`}
          />
        ))}
      </Head>
      <AnimatePresence>
        {zoomedCaptain && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          >
            <div className="relative flex items-center justify-center w-[280px] h-[280px]">
              <motion.div
                layoutId={`captain-${zoomedCaptain.captain.id}-${zoomedCaptain.idSuffix}`}
                transition={{ type: 'spring', stiffness: 110, damping: 11, mass: 0.7 }}
                className="relative w-[280px] h-[280px]"
              >
                <Image
                  src={`/trainers/${zoomedCaptain.captain.image}`}
                  alt={zoomedCaptain.captain.name}
                  width={280}
                  height={280}
                  className="rounded-full bg-zinc-300 object-cover border-8 w-[280px] h-[280px]"
                  priority
                />
                <div className="absolute -bottom-10 left-0 right-0 text-zinc-100 text-center py-2 text-base">
                  {zoomedCaptain.captain.name}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  )
}
