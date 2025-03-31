import { captains } from '@/config/captains'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import { IMAGE_SIZE } from './ZoomedCaptainModal'

export const PreloadCaptainImages = () => {
  const [preloaded, setPreloaded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') setPreloaded(true)
  }, [])

  return preloaded ? <PreloadImages /> : null
}

const PreloadImages = () => {
  return (
    <>
      {captains.map((captain) => (
        <Image
          key={captain.id}
          src={`/trainers/${captain.image}`}
          alt={captain.name}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          priority
          className="absolute hidden"
        />
      ))}
    </>
  )
}
