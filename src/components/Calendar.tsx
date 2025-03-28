import { CalendarEvent } from '@/types/calendar'

type Props = {
  events: CalendarEvent[]
}

export const Calendar: React.FC<Props> = ({ events }) => {
  return (
    <div className="w-full">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Datum
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Activiteit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {events.map((event, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {new Date(event.date).toLocaleDateString('nl-NL')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {event.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
