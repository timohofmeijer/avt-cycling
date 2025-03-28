import { Metadata } from 'next'
import { PageAnimation } from '@/components/PageAnimation'
import { PageHeaderContent } from '@/components/PageHeaderContent'
import { PageTitle } from '@/components/PageTitle'
import { Calendar } from '@/components/Calendar'
import { calendarEvents } from '@/data/calendar'

export const metadata: Metadata = {
  title: 'Kalender – AVT Wielrennen',
  description: 'Overzicht van alle wielrenactiviteiten voor komend seizoen',
}

const Page: React.FC = () => {
  return (
    <PageAnimation>
      <PageHeaderContent page="kalender" />
      <div className="flex flex-col w-full pb-7">
        <PageTitle>Kalender</PageTitle>
        <p className="mb-8 max-w-2xl">
          In het volgende overzicht vind je alle wielrenactiviteiten die komend seizoen op de
          planning staan.
        </p>
        <Calendar events={calendarEvents} />
      </div>
    </PageAnimation>
  )
}

export default Page
