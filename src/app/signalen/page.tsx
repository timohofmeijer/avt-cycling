import { PageHeaderContent } from '@/components/page-header-content'
import { Signal } from '@/components/signal'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signalen – AVT Wielrennen',
  description: '...',
}

const Page: React.FC = () => {
  return (
    <>
      <PageHeaderContent page="signalen" />
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold mb-5">Signalen</h1>
        <p className="mb-4">
          Omdat je minder overzicht hebt wanneer je in een groep rijdt, maken we gebruik van heldere
          hand en roep signalen, zodat we als groep snel kunnen reageren op onze omgeving.
        </p>
        <p className="mb-4">
          We hebben het opgesplitst in signalen welke je aandacht vragen en signalen waarbij we als
          groep moeten manoeuvreeren.
        </p>

        <a href="#aandacht" className="text-blue-600 mb-1">
          Aandacht signalen
        </a>
        <a href="#manoeuvreer" className="text-blue-600 mb-1">
          Manoeuvreer signalen
        </a>

        <h2 className="text-2xl font-bold pt-24 mb-2" id="aandacht">
          Aandacht signalen
        </h2>
        <div className="flex flex-col gap-4">
          <Signal type="voor" />
          <Signal type="tegen" />
          <Signal type="achter" />
          <Signal type="paaltje" />
        </div>
        <h2 className="text-2xl font-bold pt-24 mb-2" id="manoeuvreer">
          Manoeuvreer signalen
        </h2>
        <div className="flex flex-col gap-4">
          <Signal type="links" />
          <Signal type="rechts" />
          <Signal type="stop" />
          <Signal type="rustig" />
          <Signal type="ritsen" />
          <Signal type="twee" />
          <Signal type="compleet" />
        </div>
      </div>
    </>
  )
}

export default Page
