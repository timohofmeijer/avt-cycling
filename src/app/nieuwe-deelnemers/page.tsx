import { Metadata } from 'next'
import { LinkDown } from '@/components/LinkDown'
import { PageTitle } from '@/components/PageTitle'
import { Title } from '@/components/Title'
import { PageAnimation } from '@/components/PageAnimation'
import { PageHeaderContent } from '@/components/PageHeaderContent'
import { Paragraph } from '@/components/Paragraph'

export const metadata: Metadata = {
  title: 'Niewe deelnemers – AVT Wielrennen',
  description: '...',
}

const Page: React.FC = () => {
  return (
    <PageAnimation>
      <PageHeaderContent page="nieuw" />
      <div className="flex flex-col w-full">
        <PageTitle>Nieuwe deelnemers</PageTitle>
        <Paragraph>
          Welkom bij de wielrengroep van AV Triathlon! Leuk dat je met ons mee komt rijden! Lees het
          onderstaande even door zodat je een idee hebt wat we van elkaar mogen verwachten.
        </Paragraph>
        <LinkDown hash="#materiaal">Materiaal check</LinkDown>
        {/* <LinkDown hash="#verantwoordelijk">Zelf verantwoordelijk</LinkDown> */}
        <LinkDown hash="#algemeen">Algemene gedragsregels</LinkDown>
        <LinkDown hash="#tehard">Gaat het te hard geef het aan!</LinkDown>
        <LinkDown hash="#etendrinken">Eet en drink voldoende</LinkDown>
        <LinkDown hash="#voorwiel">Bescherm je voorwiel</LinkDown>
        <Title id="materiaal">Materiaal check</Title>
        <ul className="mb-4 ml-4 list-disc">
          <li>Een goed passende valhelm.</li>
          <li>Goed werkende remmen met goede remblokjes.</li>
          <li>Buitenbanden in goede staat zijn.</li>
          <li>Een reserveband, bandenlichters en pomp mocht je lek rijden.</li>
          <li>
            Loop je fiets geregeld na op schade, slijtage en of alles nog goed aangedraaid is.
          </li>
          <li>Verlichting mochten we onverhoopt later thuis komen.</li>
        </ul>
        {/* <Title id="verantwoordelijk">Zelf verantwoordelijk</Title>
        <Paragraph>
          Houd je aan verkeersregels en kijk altijd zélf of het veilig is om over te steken (ook
          wanneer iemand VRIJ roept).
        </Paragraph> */}
        <Title id="algemeen">Algemene gedragsregels</Title>
        <ul className="mb-4 ml-4 list-disc">
          <li>Ik houd zichtbaar rekening met anderen in het verkeer.</li>
          <li>
            Als ik stil sta, sta ik bij voorkeur niet op het fietspad of op de openbare weg, zodat
            ik andere weggebruikers niet hinder.
          </li>
          <li>
            Ik heb mijn handen op de remhendels bovenop het stuur of onder in de beugel, zodat ik
            altijd direct bij mijn remmen kan.
          </li>
          <li>Ik passeer een fietser of wandelaar met gepaste snelheid.</li>
          <li>Ik geef tijdig aan welke richting ik ga volgen.</li>
          <li>Ik blijf beleefd tegen andere weggebruikers.</li>
          <li>Ik rijd altijd op het aangegeven fietspad.</li>
          <li>Ik gebruik een fietsbel.</li>
          <li>Ik gooi afval in een afvalbak.</li>
          <li>Ik maak tijdens het rijden in de groep geen gebruik van een ligstuur.</li>
        </ul>
        <Title id="tehard">Gaat het te hard, geef het aan!</Title>
        <Paragraph>
          Laat het even weten aan één van de wegkapiteins. We hanteren een “samen uit, samen thuis”
          beleid en het is geen probleem om wat rustiger te rijden.
        </Paragraph>
        <Title id="etendrinken">Eet en drink voldoende</Title>
        <Paragraph>
          Tijdens het fietsen verbruik je veel energie en verlies je vocht. Zorg dat je voldoende
          koolhydraten (suiker) en vocht tot je neemt. Met name bij langere ritten maakt dit een
          enorm verschil op de intensiteit die je vast kan houden.
        </Paragraph>
        <Title id="voorwiel">Bescherm je voorwiel</Title>
        <Paragraph>
          Probeer je voorwiel niet voorbij het achterwiel van je voorganger te laten komen wanneer
          je achter iemand rijdt. Wanneer je voorwiel uit lijn wordt geduwd door het achterwiel van
          je voorganger, is een valpartij bijna niet te vermijden (omdat jij en je fiets de andere
          kant op gaan).
        </Paragraph>
      </div>
    </PageAnimation>
  )
}

export default Page
