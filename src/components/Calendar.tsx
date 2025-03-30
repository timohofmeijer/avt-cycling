'use client'

import { CalendarEvent } from '@/types/calendar'
import { captains, CaptainData } from '@/config/captains'
import { useState } from 'react'
import { CalendarEvents } from './CalendarEvents'
import { ZoomedCaptainModal } from './ZoomedCaptainModal'

type Props = {
  events: CalendarEvent[]
}

const MONTHS = ['Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September']

// Create a map for quick lookup of captains by their new ID
const captainsMap = new Map<string, CaptainData>(captains.map((c) => [c.id, c]))

export const Calendar: React.FC<Props> = ({ events }) => {
  const [zoomedCaptain, setZoomedCaptain] = useState<{
    captain: CaptainData
    idSuffix: string
  } | null>(null)

  // Group events by month
  const eventsByMonth = events.reduce((acc, event) => {
    const date = new Date(event.date)
    const month = date.getMonth()
    // Adjust month index: March (2) -> 0, April (3) -> 1, etc.
    const adjustedMonth = month - 2
    if (adjustedMonth >= 0 && adjustedMonth < MONTHS.length) {
      if (!acc[adjustedMonth]) {
        acc[adjustedMonth] = []
      }
      acc[adjustedMonth].push(event)
    }
    return acc
  }, {} as Record<number, CalendarEvent[]>)

  return (
    <>
      <ZoomedCaptainModal zoomedCaptain={zoomedCaptain} onClose={() => setZoomedCaptain(null)} />

      <div className="bg-white/0 rounded-lg overflow-hidden">
        {MONTHS.map((month, index) => {
          const monthEvents = eventsByMonth[index] || []
          return (
            <div key={month}>
              <div className="sticky top-0 bg-white/0 z-10 border-b border-gray-200">
                <h3 className="text-lg font-semibold p-4 pl-0 text-gray-800">{month}</h3>
              </div>
              <CalendarEvents
                events={monthEvents}
                captainsMap={captainsMap}
                onCaptainClick={(captain, idSuffix) => setZoomedCaptain({ captain, idSuffix })}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}
