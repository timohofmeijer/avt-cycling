'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiOutlineChevronRight } from 'react-icons/hi'

export const Captain: React.FC<{ name: string; image: string; stravaId: string }> = ({
  name,
  image,
  stravaId,
}) => {
  // const timer = useRef<ReturnType<typeof setTimeout>>()
  const [isZoomed, setZoomed] = useState(false)

  const handleZoom = () => {
    if (image === 'blank.png') return
    setZoomed((state) => !state)
    // if (timer.current) clearTimeout(timer.current)
    // timer.current = setTimeout(() => {
    //   setZoomed(false)
    // }, 3000)
  }

  return (
    <>
      {isZoomed ? (
        <motion.div className="fixed inset-0 z-20 opacity-50 bg-zinc-100" onClick={handleZoom} />
      ) : null}

      <div className="relative flex gap-4 p-3 mb-4 border-b pointer-events-none border-zinc-200 bg-zinc-200 rounded-2xl">
        <Image
          className="z-10 w-16 transition-all origin-left rounded-full bg-zinc-300"
          style={{
            scale: isZoomed ? 4 : 1,
            zIndex: isZoomed ? 30 : '',
            boxShadow: isZoomed ? '0 2px 10px rgb(0 0 0/10%), 0 1px 3px rgb(0 0 0/20%)' : '',
          }}
          src={`/trainers/${image}`}
          alt={name}
          width={866}
          height={866}
        />
        <div className="z-10 flex flex-col items-start justify-center">
          <h2 className="font-bold text-l">{name}</h2>
          <a
            target="_blank"
            className={`flex items-center relative text-xs font-bold text-white pl-1 mt-1 rounded ${
              stravaId ? 'bg-blue-700 pointer-events-auto' : 'bg-zinc-400'
            }`}
            href={`https://www.strava.com/athletes/${stravaId}`}
          >
            Strava <HiOutlineChevronRight size={14} />
          </a>
        </div>
        <div className="absolute inset-0 pointer-events-auto" onClick={handleZoom} />
      </div>
    </>
  )
}
