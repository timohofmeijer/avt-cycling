import { PageHeaderContent } from '@/components/page-header-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Niewe deelnemers – AVT Wielrennen',
  description: '...',
}

const Page: React.FC = () => {
  return (
    <>
      <PageHeaderContent page="nieuw" />
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold mb-5">Nieuwe deelnemers</h1>
        <p>Welkom bij de wielrengroep van AV Triathlon! Leuk dat je met ons mee komt rijden!</p>

        <h2 className="text-l font-bold mt-6 mb-3">Materiaal check</h2>
        <p className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam commodi labore, officiis
          praesentium ex velit fuga placeat esse ad neque culpa consequatur explicabo odio possimus
          reiciendis id a nesciunt. Tenetur!
        </p>
        <h2 className="text-l font-bold mt-6 mb-3">Zelf verantwoordelijk</h2>
        <p className="mb-4">
          Houd je aan verkeersregels en kijk altijd zélf of het veilig is om over te steken (ook
          wanneer iemand VRIJ roept).
        </p>
        <h2 className="text-l font-bold mt-6 mb-3">Gaat het te hard geef het aan!</h2>
        <p className="mb-4">
          Laat het even weten aan één van de wegkapiteins. We hanteren een “samen uit, samen thuis”
          beleid en het is geen probleem om wat rustiger te rijden.
        </p>
        <h2 className="text-l font-bold mt-6 mb-3">Eet en drink voldoende</h2>
        <p className="mb-4">
          Tijdens het fietsen verbruik je veel energie en verlies je vocht. Zorg dat voldoende
          koolhydraten (suiker) en vocht tot je neemt. Met name bij langere ritten maakt dit een
          enorm verschil voor intensiteit die je vast kan houden.
        </p>
        {/* <p className="mb-4 text-xs text-zinc-500">
        Mocht je af willen vallen dan doe je dit beter wanneer je níet op de fiets zit. Door
        voldoende snelle koolhydraten tot je te nemen kan je langer harder fietsen, heb je dus een
        groter trainingseffect en kom je nog steeds met een negatief calorie verbruik thuis.
        Vetverbranding kan je trainen/verbeteren door consistent rustige lange ritten te rijden,
        maar deze duurritten moet je wel degelijk met koolhydraten ondersteunen. Op enkel
        vetverbranding kan je welliswaar heel lang doorgaan, maar op snelheid waarop je beter je
        stadsfiets had kunnen pakken.
      </p> */}
        <h2 className="text-l font-bold mt-6 mb-3">Bescherm je voorwiel</h2>
        <p className="mb-4">
          Probeer je voorwiel niet voorbij het achterwiel van je voorganger te laten komen wanneer
          je achter iemand rijdt. Wanneer je voorwiel uit lijn wordt geduwd door het achterwiel van
          je voorganger, is een valpartij bijna niet te vermijden (omdat jij en je fiets de andere
          kant op gaan).
        </p>
      </div>
    </>
  )
}

export default Page
