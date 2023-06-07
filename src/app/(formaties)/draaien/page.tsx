import { PageHeaderContent } from '@/components/page-header-content'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Draaien – AVT Wielrennen',
  description: '...',
}

const Page: React.FC = () => {
  return (
    <>
      <PageHeaderContent page="draaien" />
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold mb-5">Draaien in een groep</h1>
        <p className="mb-4">
          De voorste renners van een groep zullen een stuk harder moeten trappen omdat ze ‘in de
          wind rijden’. Afhankelijk van waar de wind vandaan komt kan dit wel 30% schelen. Om het
          kopwerk te verdelen roteren we elke paar minuten. Wanneer je moe bent en vooraan komt, mag
          je je ‘kopbeurt’ zo kort maken als je wilt, dit is geen enkel probleem aangezien dit een
          goeie manier is om niveau verschillen te ondervangen.
        </p>
        <a href="#sociaal" className="text-blue-600 mb-1">
          Sociaal draaien
        </a>
        <a href="#lint" className="text-blue-600 mb-1">
          Draaien in een lint
        </a>
        <h2 className="text-2xl font-bold mt-8 mb-5" id="sociaal">
          Sociaal draaien
        </h2>
        <p className="mb-4">
          Normaliter rijden we twee aan twee, behalve wanneer dit onveilig is of wanneer we op een
          hoger tempo willen rijden. Vanwege de veiligheid draaien we op een manier waarbij we als
          groep niet breder dan 2 renners hoeven te rijden. En zo spreek je nog eens iemand anders,
          vandaar ‘sociaal’ 🙂.
        </p>
        <p className="mb-4">Sociaal draaien werkt als volgt:</p>
        <div className="flex">
          <Image
            src="/formatie-draaien-sociaal.png"
            alt="Sociaal draaien"
            width={500}
            height={1976}
            className="w-1/3"
          />
          <div className="">
            <p className="mb-4 text-sm text-zinc-700">
              Wanneer één van voorste renners wil draaien, versneld de linker renner voorbij degene
              naast hem of haar, schuift dan rustig naar rechts en haalt een iets druk van zijn
              pedalen.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              De gehele linker rij zet net iets aan zodat ze 2 plaatsen opschuiven.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              De renner die rechts achteraan rijdt versneld ook iets en schuift op naar de linker
              rij en daarna 2 plaatsen naar voren.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              Probeer de rotatie zo vloeiend mogelijk te maken, zonder dat er gaten tussen renners
              onstaan.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-5" id="lint">
          Draaien in een lint
        </h2>
        <p className="mb-4">
          Dit doen we niet vaak, maar wanneer we efficienter op een hoger tempo willen rijden, gaan
          we soms in een enkele rij fietsen: ‘op een lint’.
        </p>
        <p className="mb-4">
          Dit is anders dan het op een lint rijden na het risten, waarbij er niet gedraaid zal
          worden.
        </p>
        <p className="mb-4">Draaien wanneer we op een lint rijden werkt als volgt:</p>
        <div className="flex">
          <Image
            src="/formatie-draaien-lint.png"
            alt="Sociaal draaien"
            width={500}
            height={1866}
            className="w-1/4"
          />
          <div className="">
            <p className="mb-4 text-sm text-zinc-700">
              Wanneer de voorste renner wil draaien schud hij met zijn linker elleboog. buurman,
              schuift dan rustig naar rechts en haalt een iets druk van zijn pedalen.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              Hij stuurt vervolgens uit naar rechts en halt iets druk van zijn pedalen.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              Hij laat zich afzakken naar de achterkant van de groep.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              Achteraan stuurt hij terug naar links om vloeiend achter de laatste renner aan te
              sluiten.
            </p>
            <p className="mb-4 text-sm text-zinc-700">
              Het beste is om je af te laten zaken aan de kant vanwaar de wind het meest waait. De
              snelle renners zitten dan meer uit de wind, wat de snelheid van de groep vergroot.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
