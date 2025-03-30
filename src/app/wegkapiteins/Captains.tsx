'use client'

import { useState } from 'react'
import { CaptainData } from '@/config/captains'
import { Captain } from './Captain'
import { ZoomedCaptainModal } from '@/components/ZoomedCaptainModal'
import { captains } from '@/config/captains'

export const Captains: React.FC = () => {
  const [zoomedCaptain, setZoomedCaptain] = useState<{
    captain: CaptainData
    idSuffix: string
  } | null>(null)

  const handleClick = (captain: CaptainData) => {
    setZoomedCaptain({ captain, idSuffix: 'captains-page' })
  }

  return (
    <>
      <ZoomedCaptainModal zoomedCaptain={zoomedCaptain} onClose={() => setZoomedCaptain(null)} />
      <div>
        {captains.map((captain) => (
          <Captain
            key={captain.stravaId || captain.name}
            id={captain.id}
            name={captain.name}
            image={captain.image}
            stravaId={captain.stravaId}
            admin={captain.admin}
            handleClick={() => handleClick(captain)}
          />
        ))}
      </div>
    </>
  )
}
