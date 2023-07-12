import { Metadata } from 'next'
import { PageAnimation } from '@/components/PageAnimation'
import { PageHeaderContent } from '@/components/PageHeaderContent'
import { LinkButton } from '@/components/LinkButton'
import { Title } from '@/components/Title'
import { Paragraph } from '@/components/Paragraph'

export const metadata: Metadata = {
  title: 'AVT Wielrennen',
  description: '...',
}

export default function Home() {
  return (
    <PageAnimation direction="left">
      <PageHeaderContent page="home" />
      <div>
        {/* <p className="mb-4">
        Welkom op de website van de wielrengroep van AVTriathlon! Deze website is in het leven geroepen
        om de afspraken en signalen van onze groepsritten helder te kunnen communiceren.
      </p> */}
        <p className="mb-4 text-lg">
          Op deze site vind je een overzicht van de afspraken en signalen die we hanteren tijdens de
          wielrengroepsritten van AVTriathlon.
        </p>
        <Title>Wat willen we hiermee bereiken</Title>
        <Paragraph>
          Wanneer je in een groep rijdt, ben je je minder bewust van je omgeving doordat je minder
          ziet en vaak ook met mensen aan het praten bent. Dat compenseren we door op een
          voorspelbare manier te handelen en te communiceren. Dat is veiliger en rijdt ook meer
          ontspannen.
        </Paragraph>
        <Paragraph>
          Daarnaast maakt dit ons als groep een meer attente verkeersdeelnemer waarmee we het
          slechte imago van de wielrenner – terecht of onterecht – wellicht kunnen helpen ombuigen.
        </Paragraph>

        <section>
          <Title>Ben je nieuw?</Title>
          <Paragraph>
            Leuk dat je mee komt rijden! Lees het volgende even door, dan heb je een idee wat we van
            elkaar mogen verwachten.
          </Paragraph>
          <LinkButton href="/nieuwe-deelnemers">Nieuwe renners</LinkButton>
        </section>

        <section>
          <Title>Signalen</Title>
          <Paragraph>
            Omdat je minder overzicht hebt wanneer je in een groep rijdt, maken we gebruik van
            heldere hand- en roepsignalen, zodat we als groep snel kunnen reageren op onze omgeving.
          </Paragraph>
          <LinkButton href="/signalen">Bekijk alle signalen</LinkButton>
        </section>

        <section>
          <Title>Formaties</Title>
          <Paragraph>
            De voorste renners van een groep zullen een stuk harder moeten trappen omdat ze ‘in de
            wind rijden’. Afhankelijk van waar de wind vandaan komt, kan dit meer dan 30% schelen.
            Om het kopwerk te verdelen, roteren we elke paar minuten.
          </Paragraph>
          <LinkButton href="/draaien">Hoe wordt er gedraaid</LinkButton>
          <Paragraph>
            Wanneer we twee aan twee rijden en de weg smaller wordt of er is veel verkeer, dan zal
            een wegkapitein het ritsignaal geven. We schuiven dan vlot en soepel in elkaar en vormen
            één enkele rij renners.
          </Paragraph>
          <LinkButton href="/ritsen">Wanneer en hoe wij ritsen</LinkButton>
        </section>

        <section>
          <Title>Wegkapiteins</Title>
          <Paragraph>
            Bij alle groepsritten van AVTriathlon rijdt er tenminste één wegkapitein mee. Een
            wegkapitein bepaalt de route en zorgt ervoor dat we zoals afgesproken rijden. Volg zijn
            of haar aanwijzingen op, dan houden we het samen veilig en voorspelbaar! 🙏🏼
          </Paragraph>
          <LinkButton href="/wegkapiteins">Onze wegkapiteins</LinkButton>
        </section>
      </div>
    </PageAnimation>
  )
}
