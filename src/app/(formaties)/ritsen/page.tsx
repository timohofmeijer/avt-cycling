import { Metadata } from 'next'
import Image from 'next/image'
import { PageTitle } from '@/components/PageTitle'
import { PageAnimation } from '@/components/page-animation'
import { PageHeaderContent } from '@/components/page-header-content'
import { Paragraph } from '@/components/Paragraph'
import { ParagraphSmall } from '@/components/ParagraphSmall'

export const metadata: Metadata = {
  title: 'Ritsen – AVT Wielrennen',
  description: '...',
}

const Page: React.FC = () => {
  return (
    <PageAnimation>
      <PageHeaderContent page="ritsen" />
      <div className="flex flex-col w-full">
        <PageTitle>Ritsen</PageTitle>
        <Paragraph>
          Wanneer we twee aan twee rijden en de weg wordt smaller of er is veel verkeer, dan zal een
          wegkapitein het rits signaal geven. We schuiven dan vlot en soepel in elkaar en vormen één
          enkele rij renners.
        </Paragraph>
        <Paragraph>Ritsen werkt als volgt:</Paragraph>
        <div className="flex">
          <Image
            src="/formatie-ritsen.png"
            alt="Ritsen"
            width={430}
            height={2127}
            className="flex-grow-0 flex-shrink-0 object-contain object-top w-1/3"
          />
          <div className="">
            <ParagraphSmall>
              Waneer dit signaal vanaf de voorkant van de groep komt gebeurt dit middels het
              opsteken van één vinger. De rest van de groep roept het signaal door naar de
              achterkant van de groep door “RITSEN” te roepen.
            </ParagraphSmall>
            <ParagraphSmall>
              Wanneer het signaal van achter in de groep wordt gegeven roept de wegkapitein “RISTEN”
              en wordt dit door de groep doorgegeven naar de voorzijde van de groep.
            </ParagraphSmall>
            <ParagraphSmall>
              De renners die links rijden laten zich iets afzakken om <b>ACHTER</b> hun buurmens in
              te voegen.
            </ParagraphSmall>
            <ParagraphSmall>
              Waneer dit signaal vanaf de voorkant van de groep komt gebeurt dit middels het
              opsteken van 2 vingers. De rest van de groep roept het signaal door naar de achterkant
              van de groep door “TWEE” te roepen.
            </ParagraphSmall>
            <ParagraphSmall>
              Wanneer het signaal van achter in de groep wordt gegeven roept de wegkapitein “TWEE”
              en wordt dit door de groep doorgegeven naar de voorzijde van de groep.
            </ParagraphSmall>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default Page
