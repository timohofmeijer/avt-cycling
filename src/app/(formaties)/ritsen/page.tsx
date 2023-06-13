import { PageAnimation } from '@/components/page-animation'
import { PageHeaderContent } from '@/components/page-header-content'
import { Signal } from '@/components/signal'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ritsen – AVT Wielrennen',
  description: '...',
}

const Page: React.FC = () => {
  return (
    <PageAnimation>
      <PageHeaderContent page="ritsen" />
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold mb-5">Ritsen</h1>
        <p className="mb-4">
          Wanneer we twee aan twee rijden en de weg wordt smaller of er is veel verkeer, dan zal een
          wegkapitein het rits signaal geven. We schuiven dan vlot en soepel in elkaar en vormen één
          enkele rij renners.
        </p>
        <p className="mb-4">Ritsen werkt als volgt:</p>
        <div className="flex">
          <Image
            src="/formatie-ritsen.png"
            alt="Ritsen"
            width={430}
            height={2127}
            className="w-1/3 flex-grow-0 flex-shrink-0 object-contain object-top"
          />
          <div className="">
            <p className="mb-4 text-sm text-zinc-700">
              Waneer dit signaal vanaf de voorkant van de groep komt gebeurt dit middels het
              opsteken van één vinger. De rest van de groep roept het signaal door naar de
              achterkant van de groep door “RITSEN” te roepen.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              Wanneer het signaal van achter in de groep wordt gegeven roept de wegkapitein “RISTEN”
              en wordt dit door de groep doorgegeven naar de voorzijde van de groep.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              De renners die links rijden laten zich iets afzakken om <b>ACHTER</b> hun buurmens in
              te voegen.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              Waneer dit signaal vanaf de voorkant van de groep komt gebeurt dit middels het
              opsteken van 2 vingers. De rest van de groep roept het signaal door naar de achterkant
              van de groep door “TWEE” te roepen.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              Wanneer het signaal van achter in de groep wordt gegeven roept de wegkapitein “TWEE”
              en wordt dit door de groep doorgegeven naar de voorzijde van de groep.
            </p>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default Page
