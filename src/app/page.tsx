import { LinkButton } from '@/components/link-button'
import { PageHeaderContent } from '@/components/page-header-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AVT Wielrennen',
  description: '...',
}

export default function Home() {
  return (
    <>
      <PageHeaderContent page="home" />
      <div>
        {/* <p className="mb-4">
        Welkom op website van de wielrengroep van AVTriathlon! Deze website is in het leven geroepen
        om de afspraken en signalen van onze groepsritten helder te kunnen communiceren.
      </p> */}
        <p className="mb-4">
          Op deze site vind je een overzicht van de afspraken en signalen die we hanteren tijdens de
          wielren groepsritten van AVTriathlon. Omdat het net iets te veel informatie is om voor een
          rit uit te leggen, hebben we het hier netjes op een rijtje gezet.
        </p>
        <p className="mb-4">
          Wanneer je in een groep rijdt ben je je minder bewust van je omgeving doordat je minder
          ziet en vaak ook met mensen aan praten bent. Dat compenseren we door op een voorspelbare
          manier te handelen en communiceren. Dat is veiliger en rijdt ook meer ontspannen.
        </p>
        <p className="mb-4">
          Daarnaast maakt dit ons als groep een meer attente verkeersdeelnemer waarmee we het
          slechte imago van de wielrenner –terecht of onterecht– wellicht kunnen helpen ombuigen.
        </p>

        <section>
          <h2 className="text-2xl font-bold pt-8 pb-4">Signalen</h2>
          <p>
            Omdat je minder overzicht hebt wanneer je in een groep rijdt, maken we gebruik van
            heldere hand en roep signalen, zodat we als groep snel kunnen reageren op onze omgeving.
          </p>
          <LinkButton href="/signalen">Bekijk alle signalen</LinkButton>
        </section>

        <section>
          <h2 className="text-2xl font-bold pt-8 pb-4">Formaties</h2>
          {/* <p>Of lees je dit voor het eerst 😀</p> */}
          <LinkButton href="/draaien">Hoe wordt er gedraaid</LinkButton>
          <LinkButton href="/ritsen">Wanneer en hoe wij ritsen</LinkButton>
        </section>

        <section>
          <h2 className="text-2xl font-bold pt-8 pb-4">Ben je nieuw?</h2>
          <p>Of lees je dit voor het eerst 😀.</p>
          <LinkButton href="/nieuwe-deelnemers">Lees dit even door</LinkButton>
        </section>

        <section>
          <h2 className="text-2xl font-bold pt-8 pb-4">Wegkapiteins</h2>
          <p>
            Bij alle groepsritten van AVTriathlon rijdt er ten minste één wegkapitein mee. Een
            wegkapitein bepaald de route en zorgt dat we als afgesproken rijden. Volg zijn of haar
            aanwijzingen op, dan houden we het samen veilig en voorspelbaar! 🙏🏼
          </p>
          <LinkButton href="/wegkapiteins">Onze wegkapiteins</LinkButton>
        </section>
      </div>
    </>
  )
}
