import { LinkDown } from '@/components/LinkDown'
import { PageTitle } from '@/components/PageTitle'
import { Paragraph } from '@/components/Paragraph'
import { Title } from '@/components/Title'
import { PageAnimation } from '@/components/page-animation'
import { PageHeaderContent } from '@/components/page-header-content'
import { Signal } from '@/components/signal'
import { Metadata } from 'next'
import { FaArrowAltCircleDown } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Signalen – AVT Wielrennen',
  description: '...',
}

const Page: React.FC = () => {
  return (
    <PageAnimation>
      <PageHeaderContent page="signalen" />
      <div className="flex flex-col w-full">
        <PageTitle>Signalen</PageTitle>
        <Paragraph>
          Omdat je minder overzicht hebt wanneer je in een groep rijdt, maken we gebruik van heldere
          hand en roep signalen, zodat we als groep snel kunnen reageren op onze omgeving.
        </Paragraph>
        <Paragraph>
          Geef signalen áltijd door, ook als je denkt dat het in een bepaald geval niet nodig is of
          als je met iemand aan het praten bent.
        </Paragraph>
        <Paragraph>
          We hebben onze signalen hieronder opgesplitst in signalen welke je aandacht vragen en
          signalen waarbij we als groep moeten manoeuvreren.
        </Paragraph>
        <LinkDown hash="#aandacht">Aandacht signalen</LinkDown>
        <LinkDown hash="#manoeuvreer">Manoeuvreer signalen</LinkDown>
        <Title id="aandacht">Aandacht signalen</Title>
        <div className="flex flex-col gap-4">
          <Signal type="voor" />
          <Signal type="tegen" />
          <Signal type="achter" />
          <Signal type="paaltje" />
        </div>
        <Title id="manoeuvreer">Manoeuvreer signalen</Title>
        <div className="flex flex-col gap-4">
          <Signal type="links" />
          <Signal type="rechts" />
          <Signal type="stop" />
          <Signal type="ritsen" />
          <Signal type="twee" />
          <Signal type="rustig" />
          <Signal type="compleet" />
        </div>
      </div>
    </PageAnimation>
  )
}

export default Page
