import { Metadata } from 'next'
import Image from 'next/image'
import { PageTitle } from '@/components/PageTitle'
import { PageAnimation } from '@/components/PageAnimation'
import { PageHeaderContent } from '@/components/PageHeaderContent'
import { Paragraph } from '@/components/Paragraph'
import { Signal } from '@/components/Signal'
import { Title } from '@/components/Title'

export const metadata: Metadata = {
  title: 'Ritsen – AVT Wielrennen',
  description: '...',
}

const Page: React.FC = () => {
  return (
    <PageAnimation>
      <PageHeaderContent page="ritsen" />
      <div className="flex w-full flex-col">
        <PageTitle>Ritsen</PageTitle>
        <Paragraph>
          Wanneer we twee aan twee rijden en de weg smaller wordt of er is veel verkeer, dan kan de
          voorste renner of een wegkapitein het rits-signaal geven. We schuiven dan vlot en soepel
          in elkaar en vormen één enkele rij renners.
        </Paragraph>
        <Title>Het signaal om te gaan ritsen</Title>
        <Signal type="ritsen" modStandalone={true} />
        <Title>Vervolgens schuiven we als volgt in elkaar</Title>
        <div className="flex gap-6">
          <Image
            src="/formatie-ritsen-700.png"
            alt="Ritsen"
            width={430}
            height={2127}
            className="w-1/5 flex-shrink-0 flex-grow-0 object-contain object-top"
          />
          <div className="mt-6">
            <Paragraph>
              De renners die links rijden laten zich afzakken om <b>achter</b> hun buurman/vrouw in
              te voegen.
            </Paragraph>
            <Paragraph>
              De renners die rechts rijden zorgen dat er ruimte ontstaat om in te voegen, door
              vooraan in de rij iets sneller te gaan rijden en achteraan iets langzamer.
            </Paragraph>
          </div>
        </div>
        <Title>Weer naast elkaar gaan rijden</Title>
        <Signal type="twee" modStandalone={true} />
      </div>
    </PageAnimation>
  )
}

export default Page
