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
    <div className="relative flex gap-4 p-3 mb-4 border-b pointer-events-none border-zinc-200 bg-zinc-200 rounded-2xl">
      <motion.div
        layoutId={`captain-${id}-captains-page`}
        transition={{ type: 'spring', stiffness: 140, damping: 17, mass: 1 }}
      >
        <Image
          className="z-10 w-16 aspect-square rounded-full bg-zinc-200  border-4 border-zinc-100"
          src={`/trainers/${image}`}
          alt={name}
          width={866}
          height={866}
        />
      </motion.div>
      <div className="z-10 flex flex-col items-start justify-center">
        <h2 className="font-bold text-l">{name}</h2>
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            className={`flex items-center relative text-xs font-bold text-white pl-1 mt-1 rounded ${
              stravaId ? 'bg-blue-700 pointer-events-auto' : 'bg-zinc-400'
            }`}
            href={`https://www.strava.com/athletes/${stravaId}`}
          >
            Strava <HiOutlineChevronRight size={14} />
          </a>
          {admin ? (
            <div className="flex items-center relative text-xs font-bold text-white px-1 mt-1 rounded bg-black/50">
              Coördinator
            </div>
          ) : null}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-auto" onClick={handleClick} />
    </div>
  )
}
