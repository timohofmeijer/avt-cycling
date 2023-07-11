import { Metadata } from 'next'
import Image from 'next/image'
import { PageAnimation } from '@/components/page-animation'
import { PageHeaderContent } from '@/components/page-header-content'
import { Title } from '@/components/Title'
import { LinkDown } from '@/components/LinkDown'
import { PageTitle } from '@/components/PageTitle'
import { Paragraph } from '@/components/Paragraph'
import { ParagraphSmall } from '@/components/ParagraphSmall'

export const metadata: Metadata = {
  title: 'Draaien – AVT Wielrennen',
  description: '...',
}

const Page: React.FC = () => {
  return (
    <PageAnimation>
      <PageHeaderContent page="draaien" />
      <div className="flex flex-col w-full">
        <PageTitle>Draaien in een groep</PageTitle>
        <Paragraph>
          De voorste renners van een groep zullen een stuk harder moeten trappen omdat ze ‘in de
          wind rijden’. Afhankelijk van waar de wind vandaan komt kan dit meer dan 30% schelen. Om
          het kopwerk te verdelen roteren we elke paar minuten. Wanneer je moe bent en vooraan komt,
          mag je je ‘kopbeurt’ zo kort maken als je wilt, dit is geen enkel probleem aangezien dit
          een goeie manier is om niveau verschillen te compenseren.
        </Paragraph>
        <LinkDown hash="#sociaal">Sociaal draaien</LinkDown>
        <LinkDown hash="#lint">Draaien in een lint</LinkDown>

        <Title id="sociaal">Sociaal draaien</Title>
        <Paragraph>
          Normaliter rijden we twee aan twee, behalve wanneer dit onveilig is of wanneer we op een
          hoger tempo willen rijden. Vanwege de veiligheid draaien we op een manier waarbij we als
          groep niet breder dan 2 renners hoeven te rijden. En zo spreek je nog eens iemand anders,
          vandaar ‘sociaal’ 🙂.
        </Paragraph>
        <Paragraph>Sociaal draaien werkt als volgt:</Paragraph>
        <div className="grid grid-cols-6">
          <Image
            className="col-span-2"
            src="/formatie-draaien-sociaal.png"
            alt="Sociaal draaien"
            width={500}
            height={1976}
          />
          <div className="col-span-4">
            <ParagraphSmall>
              Wanneer één van voorste renners wil draaien, versneld de linker renner voorbij degene
              naast hem of haar, schuift dan rustig naar rechts en haalt een iets druk van zijn
              pedalen.
            </ParagraphSmall>
            <ParagraphSmall>
              De gehele linker rij zet net iets aan zodat ze 2 plaatsen opschuiven.
            </ParagraphSmall>
            <ParagraphSmall>
              De renner die rechts achteraan rijdt versneld ook iets en schuift op naar de linker
              rij en daarna 2 plaatsen naar voren.
            </ParagraphSmall>
            <ParagraphSmall>
              Probeer de rotatie zo vloeiend mogelijk te maken, zonder dat er gaten tussen renners
              onstaan.
            </ParagraphSmall>
          </div>
        </div>

        <Title id="lint">Draaien in een lint</Title>
        <Paragraph>
          Dit doen we niet vaak, maar wanneer we efficienter op een hoger tempo willen rijden, gaan
          we soms in een enkele rij fietsen: ‘op een lint’.
        </Paragraph>
        <Paragraph>
          Dit is anders dan het op een lint rijden na het risten, waarbij er niet gedraaid zal
          worden.
        </Paragraph>
        <Paragraph>Draaien wanneer we op een lint rijden werkt als volgt:</Paragraph>
        <div className="grid w-full grid-cols-6">
          <Image
            className="col-span-2"
            src="/formatie-draaien-lint.png"
            alt="Sociaal draaien"
            width={500}
            height={1866}
          />
          <div className="col-span-4">
            <ParagraphSmall>
              Wanneer de voorste renner wil draaien schud degene met zijn linker elleboog.
            </ParagraphSmall>
            <ParagraphSmall>
              Degene schuift dan rustig naar rechts en haalt iets druk van zijn pedalen.
            </ParagraphSmall>
            <ParagraphSmall>
              Degene laat zich afzakken naar de achterkant van de groep.
            </ParagraphSmall>
            <ParagraphSmall>
              Achteraan stuurt degene terug naar links om vloeiend achter de laatste renner aan te
              sluiten.
            </ParagraphSmall>
            <ParagraphSmall>
              Het beste is om je af te laten zaken aan de kant waar de wind het meest vandaan komt.
              De snellere renners zitten dan meer uit de wind, wat de snelheid van de groep
              vergroot. Wanneer de groep dit expliciet besluit te doen wisselt ook het elleboog
              signaal, deze wordt dan met rechts gegeven.
            </ParagraphSmall>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default Page
