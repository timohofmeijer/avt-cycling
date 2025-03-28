import { CalendarEvent, EventType } from '@/types/calendar'
import { BsFillSunsetFill } from 'react-icons/bs'

type Props = {
  events: CalendarEvent[]
}

const MONTHS = ['Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September']

const getEventTypeColors = (type: EventType): { bg: string; border: string; text: string } => {
  switch (type) {
    case 'training':
      return {
        bg: 'bg-white',
        border: 'border-black/10',
        text: 'text-blue-700/80',
      }
    case 'groupride':
      return { bg: 'bg-white', border: 'border-black/10', text: 'text-blue-700/80' }
    case 'fastride':
      return { bg: 'bg-purple-50', border: 'border-purple-700/20', text: 'text-purple-500/20' }
    case 'triathlon':
      return { bg: 'bg-white', border: 'border-black-200', text: 'text-black-500/30' }
    case 'event':
      return {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        text: 'text-yellow-500/30',
      }
    case 'cancelled':
      return { bg: 'bg-black/5 opacity-60', border: 'border-black/10', text: 'text-black/20' }
    case 'baan':
      return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-500/30' }
    default:
      return { bg: 'bg-blue-700/5', border: 'border-blue-700/20', text: 'text-blue-700/30' }
  }
}

const isWeekend = (date: Date): boolean => {
  const day = date.getDay()
  return day === 0 || day === 6 // 0 is Sunday, 6 is Saturday
}

export const Calendar: React.FC<Props> = ({ events }) => {
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
    <div className="bg-white/0 rounded-lg overflow-hidden">
      {MONTHS.map((month, index) => {
        const monthEvents = eventsByMonth[index] || []
        return (
          <div key={month}>
            <div className="sticky top-0 bg-white/0 z-10 border-b border-gray-200">
              <h3 className="text-lg font-semibold p-4 pl-0 text-gray-800">{month}</h3>
            </div>
            <div className="divide-y divide-gray-200/60">
              {monthEvents.map((event, eventIndex) => {
                const date = new Date(event.date)
                const colors = getEventTypeColors(event.type)
                const isWeekendDay = isWeekend(date)
                return (
                  <div key={eventIndex} className={`py-4 px-0 space-y-1`}>
                    <div className="flex items-start gap-3 z-10 relative">
                      <div
                        className={`flex-shrink-0 w-7 text-center ${
                          isWeekendDay ? 'opacity-40' : ''
                        }`}
                      >
                        <div className="text-base font-bold text-gray-900">{date.getDate()}</div>
                        <div className={`text-xs text-gray-500`}>
                          {date.toLocaleDateString('nl-NL', { weekday: 'short' })}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className={`p-2 rounded-md ${colors.bg} border ${colors.border}`}>
                          <div className="flex justify-between items-start">
                            <div className="text-sm font-medium text-gray-800">{event.title}</div>
                            {event.startTime && event.endTime && (
                              <div className="flex items-center gap-1 text-xs font-medium text-gray-600">
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
                          {event.description && (
                            <div className="text-xs text-gray-600 mt-1">{event.description}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
