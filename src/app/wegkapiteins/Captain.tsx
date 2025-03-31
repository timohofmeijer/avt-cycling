'use client'

import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { motion } from 'motion/react'

export const Captain: React.FC<{
  name: string
  image: string
  stravaId: string
  admin?: boolean
  id: string
  handleClick: () => void
}> = ({ name, image, stravaId, admin, id, handleClick }) => {
  return (
    <div className="pointer-events-none relative mb-4 flex gap-4 rounded-2xl border border-zinc-200/60 bg-zinc-100 p-3">
      <motion.div
        layoutId={`captain-${id}-captains-page`}
        transition={{ type: 'spring', stiffness: 140, damping: 17, mass: 1 }}
      >
        <Image
          className="z-10 aspect-square w-16 rounded-full border-4 border-zinc-200 bg-zinc-200"
          src={`/trainers/${image}`}
          alt={name}
          width={866}
          height={866}
        />
      </motion.div>
      <div className="z-10 flex flex-col items-start justify-center">
        <h2 className="text-l font-bold">{name}</h2>
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            className={`relative mt-1 flex items-center rounded pl-1 text-xs font-bold text-white ${
              stravaId ? 'pointer-events-auto bg-blue-700' : 'bg-zinc-400'
            }`}
            href={`https://www.strava.com/athletes/${stravaId}`}
          >
            Strava <HiOutlineChevronRight size={14} />
          </a>
          {admin ? (
            <div className="relative mt-1 flex items-center rounded bg-black/50 px-1 text-xs font-bold text-white">
              Coördinator
            </div>
          ) : null}
        </div>
      </div>
      <div className="pointer-events-auto absolute inset-0" onClick={handleClick} />
    </div>
  )
}
