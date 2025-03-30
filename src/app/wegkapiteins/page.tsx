import { Metadata } from 'next'
import { PageAnimation } from '@/components/PageAnimation'
import { PageHeaderContent } from '@/components/PageHeaderContent'
import { Captain } from './Captain'
import { PageTitle } from '@/components/PageTitle'
import { Paragraph } from '@/components/Paragraph'
import { captains } from '@/config/captains'

export const metadata: Metadata = {
  title: 'Wegkapiteins – AVT Wielrennen',
  description: 'Alle wegkapiteins van de AVT wielrengroep',
}

const Page: React.FC = () => {
  return (
    <PageAnimation>
      <PageHeaderContent page="wegkapiteins" />
      <div className="flex flex-col w-full pb-7">
        <PageTitle>Wegkapiteins</PageTitle>
        <Paragraph>
          Wij zullen proberen de afspraken, zoals op deze site omschreven, consistent na te leven en
          hiermee onze ritten zo voorspelbaar en veilig mogelijk te maken. Zo kunnen we ons samen
          vooral bezig houden met lekker rijden, trainen en koersen! 🙏🏼
        </Paragraph>
        <div className="mt-8">
          {captains.map((captain) => (
            <Captain
              key={captain.stravaId || captain.name}
              name={captain.name}
              image={captain.image}
              stravaId={captain.stravaId}
              admin={captain.admin}
            />
          ))}
        </div>
      </div>
    </PageAnimation>
  )
}

export default Page
