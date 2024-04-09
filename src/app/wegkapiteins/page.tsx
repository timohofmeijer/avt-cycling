import { Metadata } from 'next'
import { PageAnimation } from '@/components/PageAnimation'
import { PageHeaderContent } from '@/components/PageHeaderContent'
import { Captain } from './Captain'
import { PageTitle } from '@/components/PageTitle'
import { Paragraph } from '@/components/Paragraph'

export const metadata: Metadata = {
  title: 'Wegkapiteins – AVT Wielrennen',
  description: '...',
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
          <Captain name="Albert Jan Kerssen" image="albert-jan.jpeg" stravaId="43085263" />
          {/* <Captain name="Arie Kingma" image="arie.jpeg" stravaId="31785656" /> */}
          {/* <User name="Christa" image="" stravaId="" /> */}
          <Captain name="Djoeke Donkers" image="djoeke.png" stravaId="1049189" />
          <Captain name="Frank Zaal" image="frank.jpeg" stravaId="2211334" />
          <Captain name="Gerjan van Roekel" image="gerjan.jpeg" stravaId="586548" />
          <Captain name="Luuc Rutgers" image="luuc.jpeg" stravaId="7239918" />
          <Captain name="Mark Wossink" image="mark.jpeg" stravaId="44558029" />
          <Captain name="Raymond Kievit" image="raymond.jpeg" stravaId="9871152" />
          <Captain name="Robbert van der Kieft" image="blank.png" stravaId="" />
          <Captain name="Sander Teeuwisse" image="blank.png" stravaId="48252858" />
          <Captain name="Sjoerd Roelofs" image="blank.png" stravaId="32433862" />
          <Captain name="Timo" image="timo.jpeg" stravaId="2019517" />
        </div>
      </div>
    </PageAnimation>
  )
}

export default Page
