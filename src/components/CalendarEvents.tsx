'use client'

import { CalendarEvent, EventType } from '@/types/calendar'
import { BsFillSunsetFill } from 'react-icons/bs'
import Image from 'next/image'
import { CaptainData } from '@/config/captains'
import { motion } from 'motion/react'
import cn from 'classnames'

type Props = {
  events: CalendarEvent[]
  captainsMap: Map<string, CaptainData>
  onCaptainClick: (captain: CaptainData, idSuffix: string) => void
}

const isWeekend = (date: Date): boolean => {
  const day = date.getDay()
  return day === 0 || day === 6 // 0 is Sunday, 6 is Saturday
}

export const CalendarEvents: React.FC<Props> = ({ events, captainsMap, onCaptainClick }) => {
  return (
    <div className="divide-y divide-gray-200/60">
      {events.map((event, eventIndex) => {
        const date = new Date(event.date)
        const colors = getEventTypeColors(event.type)
        const isWeekendDay = isWeekend(date)
        return (
          <div key={eventIndex} className={`space-y-1 px-0 py-4`}>
            <div className="relative flex items-start gap-3">
              <div
                className={`mt-3 w-7 flex-shrink-0 scale-90 text-center ${isWeekendDay ? 'opacity-40' : ''}`}
              >
                <div className="text-lg leading-none font-bold text-gray-900">{date.getDate()}</div>
                <div className={`text-sm text-gray-500`}>
                  {date.toLocaleDateString('nl-NL', { weekday: 'short' })}
                </div>
              </div>
              <div className="flex-1">
                <div
                  className={`relative rounded-md border p-2 ${colors.border} ${event.type === 'cancelled' ? 'opacity-50' : ''}`}
                >
                  <div className={`absolute inset-0 -z-10 ${colors.bg}`} />
                  <div
                    className={`absolute inset-0 -z-20 bg-white ${event.type === 'cancelled' ? 'opacity-40' : ''}`}
                  />
                  <div className="flex items-start justify-between">
                    <div className="text-sm font-medium text-gray-800">{event.title}</div>
                    {event.startTime && event.endTime && (
                      <div className="mt-[1px] flex items-center gap-1 text-xs font-medium text-gray-600">
                        {/groupride|training/.test(event.type) && (
                          <div className="relative top-[-1px]">
                            <BsFillSunsetFill className={colors.text} />
                          </div>
                        )}
                        <span>
                          {event.startTime} - {event.endTime}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {event.description && (
                        <div className="text-xs text-black/50">{event.description}</div>
                      )}
                    </div>
                    {/* Render Captain Avatars */}
                    {event.captainIds && event.captainIds.length > 0 && (
                      <div className="relative top-[2px] z-10 mt-[-3px] ml-2 flex items-center gap-1">
                        {event.captainIds.map((captainId) => {
                          const captain = captainsMap.get(captainId)
                          if (!captain || captain.image === 'blank.png') return null // Skip if captain not found or has blank image
                          return (
                            <motion.div
                              key={captainId}
                              layoutId={`captain-${captainId}-${event.date}`}
                              transition={{ type: 'spring', stiffness: 140, damping: 17, mass: 1 }}
                              className={cn(
                                'relative z-[99] h-6 w-6 cursor-pointer overflow-hidden rounded-full border-2 border-black/10 hover:scale-110',
                                `border: ${colors.border}`,
                              )}
                              onClick={(e) => {
                                e.stopPropagation()
                                onCaptainClick(captain, event.date)
                              }}
                            >
                              <Image
                                src={`/trainers/${captain.image}`}
                                alt={captain.name}
                                width={24}
                                height={24}
                                className="h-full w-full object-cover text-transparent"
                                title={captain.name}
                              />
                            </motion.div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const getEventTypeColors = (type: EventType): { bg: string; border: string; text: string } => {
  const regular = {
    bg: 'bg-blue-50/80',
    border: 'border-blue-700/20',
    text: 'text-blue-700/80',
  }

  switch (type) {
    case 'training':
      return regular
    case 'groupride':
      return regular
    case 'fastride':
      return {
        bg: 'bg-purple-50',
        border: 'border-purple-700/15',
        text: 'text-purple-500/20',
      }
    case 'triathlon':
      return {
        bg: 'bg-white',
        border: 'border-black-200',
        text: 'text-black-500/30',
      }
    case 'event':
      return {
        bg: 'bg-yellow-50/80',
        border: 'border-yellow-200',
        text: 'text-yellow-500/30',
      }
    case 'cancelled':
      return {
        bg: 'bg-black/4',
        border: 'border-black/10',
        text: 'text-black/10',
      }
    case 'baan':
      return {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-500/30',
      }
    default:
      return {
        bg: 'bg-blue-700/5',
        border: 'border-blue-700/20',
        text: 'text-blue-700/30',
      }
  }
}
