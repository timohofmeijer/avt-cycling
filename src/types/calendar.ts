export type EventType = 'training' | 'fastride' | 'groupride' | 'triathlon' | 'event' | 'cancelled'

export type CalendarEvent = {
  date: string
  title: string
  description?: string
  isTriEvent?: boolean
  type: EventType
  startTime?: string
  endTime?: string
}
