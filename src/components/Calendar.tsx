import { CalendarEvent, EventType } from '@/types/calendar'

type Props = {
  events: CalendarEvent[]
}

const MONTHS = ['Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September']

const getEventTypeColors = (type: EventType): { bg: string; border: string } => {
  switch (type) {
    case 'training':
      return { bg: 'bg-blue-50', border: 'border-blue-200' }
    case 'fastride':
      return { bg: 'bg-green-50', border: 'border-green-200' }
    case 'groupride':
      return { bg: 'bg-purple-50', border: 'border-purple-200' }
    case 'triathlon':
      return { bg: 'bg-orange-50', border: 'border-orange-200' }
    case 'event':
      return { bg: 'bg-yellow-50', border: 'border-yellow-200' }
    case 'cancelled':
      return { bg: 'bg-gray-50', border: 'border-gray-200' }
    default:
      return { bg: 'bg-blue-50', border: 'border-blue-200' }
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {MONTHS.map((month, index) => {
        const monthEvents = eventsByMonth[index] || []
        return (
          <div key={month}>
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
              <h3 className="text-lg font-semibold p-4 text-gray-800">{month}</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {monthEvents.map((event, eventIndex) => {
                const date = new Date(event.date)
                const colors = getEventTypeColors(event.type)
                const isWeekendDay = isWeekend(date)
                return (
                  <div
                    key={eventIndex}
                    className={`p-4 space-y-1 ${isWeekendDay ? 'bg-gray-50' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 text-center">
                        <div className="text-sm font-bold text-gray-900">{date.getDate()}</div>
                        <div className="text-xs text-gray-500">
                          {date.toLocaleDateString('nl-NL', { weekday: 'short' })}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className={`p-2 rounded-md ${colors.bg} border ${colors.border}`}>
                          <div className="flex justify-between items-start">
                            <div className="text-sm font-medium text-gray-800">{event.title}</div>
                            {event.startTime && event.endTime && (
                              <div className="text-xs font-medium text-gray-600">
                                {event.startTime} - {event.endTime}
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
