'use client'

import { CalendarEvent } from '@/types/calendar'
import { captains, CaptainData } from '@/config/captains'
import { useState, useMemo, useEffect } from 'react'
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Filter events that are today or in the future, excluding triathlon events
  const filteredEvents = useMemo(() => {
    if (!mounted) return events // Return all events during server-side rendering

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return events.filter((event) => {
      const eventDate = new Date(event.date)
      eventDate.setHours(0, 0, 0, 0)
      return eventDate >= today && event.type !== 'triathlon'
    })
  }, [events, mounted])

  // Group events by month using useMemo
  const eventsByMonth = useMemo(
    () =>
      filteredEvents.reduce(
        (acc, event) => {
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
        },
        {} as Record<number, CalendarEvent[]>,
      ),
    [filteredEvents],
  )

  return (
    <>
      <ZoomedCaptainModal zoomedCaptain={zoomedCaptain} onClose={() => setZoomedCaptain(null)} />
      <div className="overflow-hidden rounded-lg bg-white/0">
        {filteredEvents?.length ? (
          <>
            {MONTHS.map((month, index) => {
              const monthEvents = eventsByMonth[index] || []
              // Show all months during server-side rendering or if there are events
              if (mounted && monthEvents.length > 0) {
                return (
                  <div key={month}>
                    <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/0">
                      <h3 className="p-4 pl-0 text-lg font-semibold text-gray-800">{month}</h3>
                    </div>
                    <CalendarEvents
                      events={monthEvents}
                      captainsMap={captainsMap}
                      onCaptainClick={(captain, idSuffix) =>
                        setZoomedCaptain({ captain, idSuffix })
                      }
                    />
                  </div>
                )
              }
              return null
            })}
          </>
        ) : (
          <p className="text-black/20">
            Er staan voor dit seizoen nog geen ritten in de kalender 😢
          </p>
        )}
      </div>
    </>
  )
}
