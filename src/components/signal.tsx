import Link from 'next/link'
import React from 'react'
type SignalType =
  | 'voor'
  | 'tegen'
  | 'achter'
  | 'paaltje'
  | 'links'
  | 'rechts'
  | 'stop'
  | 'rustig'
  | 'compleet'
  | 'ritsen'
  | 'twee'

const SignalTypeTitles: Record<SignalType, string> = {
  voor: 'Obstakel rechter voorzijde',
  tegen: 'Obstakel linker voorzijde',
  achter: 'Verkeer vanaf achterzijde',
  paaltje: 'Paaltjes, gaten, takken e.d.',
  links: 'Linksaf slaan',
  rechts: 'Rechtsaf slaan',
  stop: 'Stoppen',
  rustig: 'Vaart minderen',
  compleet: 'De groep is weer compleet',
  ritsen: 'Op een lint gaan rijden',
  twee: 'Twee aan twee gaan rijden',
}

const SignalTypeShout: Record<SignalType, string> = {
  voor: 'Voor',
  tegen: 'Tegen',
  achter: 'Achter',
  paaltje: 'Paaltje',
  links: 'Links',
  rechts: 'Rechts',
  stop: 'Stop',
  rustig: 'Rustig',
  compleet: 'Compleet',
  ritsen: 'Ritsen',
  twee: 'Twee',
}

const SignalTypeIntro: Record<SignalType, string> = {
  voor: 'Wanneer er iets of iemand aan de rechter voorzijde opduikt waar we rekening mee moeten houden.',
  tegen:
    'Wanneer er iets of iemand aan de linker voorzijde opduikt waar we rekening mee moeten houden.',
  achter:
    'Wanneer een auto of fietser de groep vanaf de achterzijde in gaat halen roept de eerste die dit waarneemt ‘achter’.',
  paaltje:
    'Wanneer er iets mogelijk gevaarlijks op ons pad komt dan wijzen we het object aan zodat renners achter ons het kunnen ontwijken. ',
  rechts:
    'Wanneer we als groep een afslag nemen wordt dit tijdig geroepen een steken we onze hand uit.',
  links:
    'Wanneer we als groep een afslag nemen wordt dit tijdig geroepen een steken we onze hand uit.',
  stop: 'Wanneer er lek is gereden, voor een plaspauze of er is iets anders waarvoor we moeten stoppen.',
  rustig:
    'Wanneer de groep incompleet is door een verkeers vertraging of iemand die het niet bij kan houden dan houden we in tot de groep weer compleet is.',
  compleet:
    'Wanneer de groep incompleet was en zojuist weer bij elkaar dan is dit het teken dat we weer op tempo kunnen gaan rijden.',
  ritsen:
    'Wanneer de weg dermate smal is dat het gevaarlijk is of dat we mensen laten schrikken, gaan we achter elkaar rijden.',
  twee: 'Wanneer de groep op een lint rijdt en er is weer genoeg ruimt om naast elkaar te rijden steekt te voorste wegkapitein 2 vingers in de lucht en wordt het signaal naar achteren geroepen.',
}

const SignalTypeBody: Record<SignalType, string> = {
  voor: 'Bijvoorbeeld een fietser met een lagere snelheid, een wandelaar of een geparkeerde auto.',
  tegen: 'Meestal een tegenligger maar mogelijk ook een object zoals een bouwcontainer.',
  achter:
    'Dit voorkomt schrikreacties en wanneer er te breed wordt gereden kunnen we dit tijdig corrigeren.',
  paaltje:
    'Het meest voorkomend zijn autowerende verkeerspaaltjes. Deze worden altijd benoemd en aangewezen omdat je deze midden in de groep makkelijk over hoofd ziet.',
  links: 'Geen signaal betekend rechtdoor.',
  rechts: 'Geen signaal betekend rechtdoor.',
  stop: 'Alleen de voorste renner steeks zijn hand op! De rest houd zijn handen bij de remmen. Ga niet midden op de weg, het fietspad of in een bocht stilstaan, maar kies een overzichtelijke uitrit of berm.',
  rustig:
    'Bijvoorbeeld een fietser met een lagere snelheid, een wandelaar of een geparkeerde auto.',
  compleet:
    'Dit voorkomt dat iedereen achterom moet gaan zitten kijken en minder oog heeft voor de omgeving.',
  ritsen: 'Ook wel op een lint genoemd. Laat je achter degene waar je naast fietst zakken.',
  twee: 'Laat dit signaal in princiepe over aan de wegkapiteins.',
}

export const Signal: React.FC<{ type: SignalType }> = ({ type }) => {
  return (
    <div className="flex flex-col justify-items-center gap-1 bg-zinc-100 p-0 rounded-lg">
      <div className="text-l px-2 self-start text-zinc-50 bg-zinc-950 rounded-md mb-4 mt-9">
        {SignalTypeTitles[type]}
      </div>
      <div className="relative grid grid-cols-6 gap-8">
        {SignalHands[type]}
        <svg
          className="col-span-1 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          width={130 / 3}
          height={476 / 3}
          viewBox="0 0 130 476"
          preserveAspectRatio="xMinYMin meet"
        >
          <path
            fillRule="evenodd"
            d="M62,0 C67.7989899,0 72.5,4.70101013 72.5,10.5 L72.5008171,86.9685976 C76.4351411,88.4802101 80.0384125,90.8897942 83.1563626,94.0005603 L105.012189,94.0001168 C104.998427,93.4570704 104.991103,92.958245 104.991103,92.5046671 C104.991103,90.3451373 106.438715,88.8593828 108.499777,88.0028212 L108.5,79 C108.5,76.2385763 110.738576,74 113.5,74 L114.5,74 C117.261424,74 119.5,76.2385763 119.5,79 L119.500927,88.4409628 C121.248588,89.3500771 122.429866,90.7155997 122.429866,92.5046671 C122.429866,99.3786519 129.429866,153.084232 129.429866,168.948289 C129.429866,184.812346 114.991103,207.756044 114.991103,221.699444 C114.991103,225.169026 113.264886,231.784124 111.162406,240.45463 L110.946553,240.424869 C116.702318,241.131588 120.795378,246.370467 120.088659,252.126232 L110.910398,326.883118 C110.962999,327.60719 110.991103,328.311588 110.991103,328.995937 C110.991103,343.433426 99.1487244,353.614824 85.5085184,359.135802 L85.5084971,362.011219 C85.5084971,367.810209 80.8074869,372.511219 75.0084971,372.511219 L72.5,372.511 L72.5,465.5 C72.5,471.29899 67.7989899,476 62,476 C56.2010101,476 51.5,471.29899 51.5,465.5 L51.5,372.511 L50.0084971,372.511219 C44.2095072,372.511219 39.5084971,367.810209 39.5084971,362.011219 L39.5080662,359.149907 C27.824121,353.328479 18.4387631,343.848733 18.4387631,330.995937 C18.4387631,328.727925 18.747433,326.239719 19.2335438,323.544897 L19.4371406,322.455981 L19.657798,321.345219 C19.6958923,321.158282 19.7346197,320.970443 19.7739413,320.781705 L20.0166903,319.638536 L20.271834,318.474003 L20.8118402,316.081619 L20.8830551,315.767108 C15.9006097,315.41319 11.7371866,311.530629 11.1969006,306.390151 L3.98443665,237.76814 C3.37827715,232.000918 7.56214529,226.834271 13.3293677,226.228112 L14.628,226.091 L14.5818227,225.736529 C14.5701775,225.640732 14.5592083,225.546271 14.548928,225.453158 L14.4956176,224.910732 C14.4657271,224.560005 14.4472745,224.231173 14.4410891,223.924904 L14.4387631,223.699444 C14.4387631,218.849566 12.6919184,212.910805 10.4134253,206.559821 L9.83342929,204.963879 L9.23550067,203.35311 C9.13458594,203.083544 9.03309982,202.813457 8.93113022,202.5429 L6.43603967,195.98417 L5.81490417,194.333854 L5.2032624,192.683983 C2.37764971,184.989279 0,177.385878 0,170.948289 C0,169.996446 0.0252,168.908373 0.072576,167.70236 L0.127232,166.457711 C0.137536,166.243943 0.148428,166.027068 0.159894,165.807171 L0.235466,164.452203 L0.324142,163.028768 L0.42525,161.540932 L0.598752,159.197316 L0.796446,156.731657 L0.940562,155.026858 L1.09375,153.277978 L1.424654,149.664236 L1.783782,145.922945 L2.165758,142.08662 L2.769802,136.225068 L3.604986,128.380515 L5.575346,110.235553 L5.90625,107.118062 L6.272,103.571464 L6.37537802,102.527452 C4.67630537,101.728734 3.5,100.001738 3.5,98 L3.5,79 C3.5,76.2385763 5.73857625,74 8.5,74 L9.5,74 C12.2614237,74 14.5,76.2385763 14.5,79 L14.5008122,89.1848037 C19.027448,88.7539858 24.0010263,90.2699018 24.4115086,94.0003154 L42.400551,93.9997304 C45.117134,91.3221416 48.1845878,89.1663287 51.4999644,87.6545733 L51.5,10.5 C51.5,4.70101013 56.2010101,0 62,0 Z M32.2710074,111.000025 L23.632,111 L23.4687591,113.877712 L23.3488711,116.144841 L23.1427631,120.33995 L23.0297391,122.864174 L22.8707631,126.81899 L22.7512631,130.265289 L22.6865711,132.397237 L22.6279271,134.576394 L22.5759791,136.802009 L22.5182511,139.840467 L22.4844471,142.171567 L22.4594991,144.546623 L22.4440551,146.964885 L22.4387631,149.425603 C22.4387631,161.450999 28.7950754,167.792437 41.5076999,168.449916 L41.5084971,161.011219 C41.5084971,159.479609 41.8364281,158.024592 42.4259074,156.712551 C34.7253279,149.273735 29.8704157,137.616833 30.0977204,124.594551 C30.1812536,119.808938 30.9442969,115.231563 32.2710074,111.000025 Z M105.913283,110.999871 L93.0824371,111.00034 C94.4628072,115.573219 95.1783452,120.54281 95.0878206,125.728958 C94.881772,137.533476 90.541278,148.070977 83.8049449,155.276348 C84.8820943,156.923886 85.5084971,158.8944 85.5084971,161.011219 L85.509418,165.060528 C99.8305412,166.067427 106.991103,160.189119 106.991103,147.425603 C106.991103,132.922482 106.437828,120.555885 105.913283,110.999871 Z"
          />
        </svg>
        <div className="col-span-5 flex flex-col">
          <div className="bg-blue-500 text-white text-m font-bold py-1 px-2 rounded-full self-start -left-2 relative">
            {SignalTypeShout[type]}!
            <svg
              className="absolute -left-3 -bottom-2 w-7 h-7"
              width="42px"
              height="21px"
              viewBox="0 0 42 21"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g id="Captain" stroke="none" fill="none" fillRule="evenodd">
                <g
                  id="Speech"
                  transform="translate(0.000000, -62.000000)"
                  className="fill-blue-500"
                >
                  <path
                    d="M21.9884287,62.5808773 C20.5115251,76.1012476 13.1820488,82.8614328 1.0658141e-14,82.8614328 C18.5015814,82.8614328 32.2438903,80.2409552 41.2269267,75 L21.9884287,62.5808773 Z"
                    id="Path-8"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="text-sm mt-4">{SignalTypeIntro[type]}</div>
          <div className="text-xs text-zinc-500 mt-2">
            {SignalTypeBody[type]}
            {type === 'ritsen' && (
              <>
                {' '}
                <Link href="/ritsen" className="text-blue-600 underline">
                  Zie hier hoe dit werkt
                </Link>
                .
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const SignalHands: Partial<Record<SignalType, React.ReactNode>> = {
  voor: (
    <svg
      className="absolute top-16 left-1 w-12 fill-blue-500 z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <path
        d="M46.0851766,89.8885712 C51.0745156,89.8885712 55.3456922,88.9387875 58.8987064,87.03922 C62.4517205,85.1396525 65.484285,82.2845099 67.9963997,78.4737922 C69.0896348,77.0027857 70.0927362,75.3754124 71.0057038,73.5916722 C71.9186715,71.807932 72.7385978,69.9807565 73.4654829,68.1101459 C74.1923679,66.2395352 74.8378419,64.447108 75.4019047,62.7328642 C75.9659675,61.0186203 76.4515267,59.5012829 76.8585823,58.1808518 C77.2772681,56.895169 77.7104916,55.5428854 78.1582528,54.1240012 C78.606014,52.7051169 79.0072545,51.3875816 79.3619744,50.1713951 C79.7166944,48.9552086 79.9405749,47.9938421 80.0336162,47.2872956 C80.2080686,46.0942746 79.9900031,45.0663075 79.3794197,44.2033942 C78.7688362,43.3404809 77.8878516,42.8221538 76.7364656,42.6484129 C75.4222574,42.4399238 74.2912243,42.6831611 73.3433662,43.3781248 C72.3955081,44.0730885 71.5843044,45.1386995 70.909755,46.5749578 L65.9553065,57.4511399 C65.7692239,57.9144491 65.5715112,58.2329741 65.3621683,58.406715 C65.1528254,58.580456 64.9318523,58.6673264 64.6992491,58.6673264 C64.4317554,58.6673264 64.2078748,58.5746646 64.0276073,58.389341 C63.8473398,58.2040173 63.7572061,57.8623268 63.7572061,57.3642695 L63.7572061,20.1489627 C63.7572061,18.8748625 63.3327052,17.8121472 62.4837035,16.9608167 C61.6347017,16.1094861 60.570542,15.6838208 59.2912243,15.6838208 C58.0351669,15.6838208 56.9797298,16.1123818 56.124913,16.9695037 C55.2700962,17.8266256 54.8426878,18.8864453 54.8426878,20.1489627 L54.8426878,47.9475112 C54.424002,47.7969357 53.9995011,47.6608386 53.5691851,47.53922 C53.1388692,47.4176013 52.691108,47.3104611 52.2259016,47.2177993 L52.2259016,15.3537131 C52.2259016,14.0680302 51.8014007,13.0024192 50.9523989,12.15688 C50.1033972,11.3113408 49.0392375,10.8885712 47.7599198,10.8885712 C46.4806021,10.8885712 45.4164424,11.3113408 44.5674406,12.15688 C43.7184389,13.0024192 43.293938,14.0680302 43.293938,15.3537131 L43.293938,46.8529433 C42.8519919,46.8876915 42.4013232,46.9311267 41.9419318,46.983249 C41.4825404,47.0353713 41.0318717,47.0961806 40.5899256,47.165677 L40.5899256,18.1683161 C40.5899256,16.9173814 40.1625172,15.8633531 39.3077004,15.0062312 C38.4528835,14.1491093 37.3916314,13.7205483 36.1239438,13.7205483 C34.8678864,13.7205483 33.8095418,14.1491093 32.9489099,15.0062312 C32.088278,15.8633531 31.657962,16.9173814 31.657962,18.1683161 L31.657962,49.5806759 C31.1927556,49.789165 30.7391793,50.0092369 30.2972332,50.2408914 C29.8552871,50.472546 29.4366013,50.7042006 29.0411758,50.9358551 L29.0411758,29.0444982 C29.0411758,27.7703981 28.6137674,26.7076827 27.7589506,25.8563522 C26.9041338,25.0050216 25.8486967,24.5793563 24.5926393,24.5793563 C23.3133216,24.5793563 22.2433468,25.0050216 21.3827149,25.8563522 C20.522083,26.7076827 20.091767,27.7703981 20.091767,29.0444982 L20.091767,64.192288 C20.091767,68.2114948 20.7488711,71.8050363 22.0630793,74.9729125 C23.3772875,78.1407888 25.2119454,80.8366689 27.5670529,83.0605527 C29.9221605,85.2844366 32.6756011,86.9784107 35.8273747,88.1424749 C38.9791483,89.3065391 42.3984156,89.8885712 46.0851766,89.8885712 Z"
        transform="rotate(-119 50.092 50.389)"
      />
    </svg>
  ),
  tegen: (
    <svg
      className="absolute top-16 -left-3 w-12 fill-blue-500 z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <path
        d="M46.0851766,89.8885712 C51.0745156,89.8885712 55.3456922,88.9387875 58.8987064,87.03922 C62.4517205,85.1396525 65.484285,82.2845099 67.9963997,78.4737922 C69.0896348,77.0027857 70.0927362,75.3754124 71.0057038,73.5916722 C71.9186715,71.807932 72.7385978,69.9807565 73.4654829,68.1101459 C74.1923679,66.2395352 74.8378419,64.447108 75.4019047,62.7328642 C75.9659675,61.0186203 76.4515267,59.5012829 76.8585823,58.1808518 C77.2772681,56.895169 77.7104916,55.5428854 78.1582528,54.1240012 C78.606014,52.7051169 79.0072545,51.3875816 79.3619744,50.1713951 C79.7166944,48.9552086 79.9405749,47.9938421 80.0336162,47.2872956 C80.2080686,46.0942746 79.9900031,45.0663075 79.3794197,44.2033942 C78.7688362,43.3404809 77.8878516,42.8221538 76.7364656,42.6484129 C75.4222574,42.4399238 74.2912243,42.6831611 73.3433662,43.3781248 C72.3955081,44.0730885 71.5843044,45.1386995 70.909755,46.5749578 L65.9553065,57.4511399 C65.7692239,57.9144491 65.5715112,58.2329741 65.3621683,58.406715 C65.1528254,58.580456 64.9318523,58.6673264 64.6992491,58.6673264 C64.4317554,58.6673264 64.2078748,58.5746646 64.0276073,58.389341 C63.8473398,58.2040173 63.7572061,57.8623268 63.7572061,57.3642695 L63.7572061,20.1489627 C63.7572061,18.8748625 63.3327052,17.8121472 62.4837035,16.9608167 C61.6347017,16.1094861 60.570542,15.6838208 59.2912243,15.6838208 C58.0351669,15.6838208 56.9797298,16.1123818 56.124913,16.9695037 C55.2700962,17.8266256 54.8426878,18.8864453 54.8426878,20.1489627 L54.8426878,47.9475112 C54.424002,47.7969357 53.9995011,47.6608386 53.5691851,47.53922 C53.1388692,47.4176013 52.691108,47.3104611 52.2259016,47.2177993 L52.2259016,15.3537131 C52.2259016,14.0680302 51.8014007,13.0024192 50.9523989,12.15688 C50.1033972,11.3113408 49.0392375,10.8885712 47.7599198,10.8885712 C46.4806021,10.8885712 45.4164424,11.3113408 44.5674406,12.15688 C43.7184389,13.0024192 43.293938,14.0680302 43.293938,15.3537131 L43.293938,46.8529433 C42.8519919,46.8876915 42.4013232,46.9311267 41.9419318,46.983249 C41.4825404,47.0353713 41.0318717,47.0961806 40.5899256,47.165677 L40.5899256,18.1683161 C40.5899256,16.9173814 40.1625172,15.8633531 39.3077004,15.0062312 C38.4528835,14.1491093 37.3916314,13.7205483 36.1239438,13.7205483 C34.8678864,13.7205483 33.8095418,14.1491093 32.9489099,15.0062312 C32.088278,15.8633531 31.657962,16.9173814 31.657962,18.1683161 L31.657962,49.5806759 C31.1927556,49.789165 30.7391793,50.0092369 30.2972332,50.2408914 C29.8552871,50.472546 29.4366013,50.7042006 29.0411758,50.9358551 L29.0411758,29.0444982 C29.0411758,27.7703981 28.6137674,26.7076827 27.7589506,25.8563522 C26.9041338,25.0050216 25.8486967,24.5793563 24.5926393,24.5793563 C23.3133216,24.5793563 22.2433468,25.0050216 21.3827149,25.8563522 C20.522083,26.7076827 20.091767,27.7703981 20.091767,29.0444982 L20.091767,64.192288 C20.091767,68.2114948 20.7488711,71.8050363 22.0630793,74.9729125 C23.3772875,78.1407888 25.2119454,80.8366689 27.5670529,83.0605527 C29.9221605,85.2844366 32.6756011,86.9784107 35.8273747,88.1424749 C38.9791483,89.3065391 42.3984156,89.8885712 46.0851766,89.8885712 Z"
        transform="scale(1 -1) rotate(61 135.635 0)"
      />
    </svg>
  ),
  paaltje: (
    <svg
      className="absolute -top-5 -left-5 w-12 fill-blue-500 z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <path
        d="M54.9062107,88.9182061 C71.7108907,88.9182061 81.4921706,78.3647199 81.4921706,60.5304315 L81.4921706,53.0289988 C81.4921706,46.3365442 78.2194867,41.6665346 74.0275096,41.6665346 C72.8140426,41.6665346 72.1153797,42.4019692 72.1153797,43.5418928 L72.1153797,46.630718 C72.1153797,47.7706416 71.6005755,48.395761 70.9386844,48.395761 C70.2400216,48.395761 69.7252174,47.8074133 69.7252174,46.630718 L69.7252174,44.6450446 C69.7252174,40.4530676 67.0041094,37.5113293 63.2166214,37.5113293 C61.3412632,37.5113293 60.3484265,38.4673942 60.3484265,40.122122 L60.3484265,44.3876425 C60.3484265,45.5643379 59.8703941,46.1159138 59.2085029,46.1159138 C58.4730684,46.1159138 57.9582642,45.6011096 57.9582642,44.3876425 L57.9582642,40.4530676 C57.9582642,35.9669167 55.3842431,33.3561239 51.4864399,33.3561239 C49.6846252,33.3561239 48.6182451,34.3121889 48.6182451,35.9669167 L48.6182451,44.3876425 C48.6182451,45.5275661 48.1402126,46.1159138 47.5150932,46.1159138 C46.7796586,46.1159138 46.2648544,45.5643379 46.2648544,44.3876425 L46.2648544,17.213335 C46.2648544,14.0877381 44.2056376,11.9182061 41.4109862,11.9182061 C38.4692479,11.9182061 36.4100311,14.0877381 36.4100311,17.213335 L36.4100311,55.9339654 C36.4100311,56.6693999 36.0423138,57.0371172 35.5642814,57.0371172 C35.1597923,57.0371172 34.8288468,56.8164869 34.5714447,56.1913675 L29.644033,44.3876425 C28.7247398,42.2548823 27.2170989,40.7472414 24.7533931,40.7472414 C21.6645679,40.7472414 19.4950359,42.8064582 19.4950359,45.7481965 C19.4950359,46.6674897 19.6421228,47.5500112 19.8995249,48.2486741 L26.5184361,67.0390275 C31.8503367,82.2992949 41.7787035,88.9182061 54.9062107,88.9182061 Z"
        transform="scale(-1 1) rotate(40 0 -88.312)"
      />
    </svg>
  ),
  links: (
    <svg
      className="absolute top-1 -left-5 w-12 fill-blue-500 z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <path
        d="M54.9126074,88.4985673 C71.7172875,88.4985673 81.4985673,77.9450812 81.4985673,60.1107927 L81.4985673,52.6093601 C81.4985673,45.9169054 78.2258835,41.2468959 74.0339064,41.2468959 C72.8204394,41.2468959 72.1217765,41.9823305 72.1217765,43.1222541 L72.1217765,46.2110793 C72.1217765,47.3510029 71.6069723,47.9761223 70.9450812,47.9761223 C70.2464183,47.9761223 69.7316141,47.3877746 69.7316141,46.2110793 L69.7316141,44.2254059 C69.7316141,40.0334288 67.0105062,37.0916905 63.2230181,37.0916905 C61.34766,37.0916905 60.3548233,38.0477555 60.3548233,39.7024833 L60.3548233,43.9680038 C60.3548233,45.1446991 59.8767908,45.6962751 59.2148997,45.6962751 C58.4794651,45.6962751 57.9646609,45.1814709 57.9646609,43.9680038 L57.9646609,40.0334288 C57.9646609,35.5472779 55.3906399,32.9364852 51.4928367,32.9364852 C49.691022,32.9364852 48.6246418,33.8925501 48.6246418,35.5472779 L48.6246418,43.9680038 C48.6246418,45.1079274 48.1466094,45.6962751 47.52149,45.6962751 C46.7860554,45.6962751 46.2712512,45.1446991 46.2712512,43.9680038 L46.2712512,16.7936963 C46.2712512,13.6680993 44.2120344,11.4985673 41.417383,11.4985673 C38.4756447,11.4985673 36.4164279,13.6680993 36.4164279,16.7936963 L36.4164279,55.5143266 C36.4164279,56.2497612 36.0487106,56.6174785 35.5706781,56.6174785 C35.1661891,56.6174785 34.8352436,56.3968481 34.5778415,55.7717287 L29.6504298,43.9680038 C28.7311366,41.8352436 27.2234957,40.3276027 24.7597899,40.3276027 C21.6709647,40.3276027 19.5014327,42.3868195 19.5014327,45.3285578 C19.5014327,46.247851 19.6485196,47.1303725 19.9059217,47.8290353 L26.5248329,66.6193887 C31.8567335,81.8796562 41.7851003,88.4985673 54.9126074,88.4985673 Z"
        transform="matrix(0 1 1 0 .501 -.501)"
      />
    </svg>
  ),
  rechts: (
    <svg
      className="absolute top-1 left-4 w-12 fill-blue-500 z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <path
        d="M54.9126074,88.4985673 C71.7172875,88.4985673 81.4985673,77.9450812 81.4985673,60.1107927 L81.4985673,52.6093601 C81.4985673,45.9169054 78.2258835,41.2468959 74.0339064,41.2468959 C72.8204394,41.2468959 72.1217765,41.9823305 72.1217765,43.1222541 L72.1217765,46.2110793 C72.1217765,47.3510029 71.6069723,47.9761223 70.9450812,47.9761223 C70.2464183,47.9761223 69.7316141,47.3877746 69.7316141,46.2110793 L69.7316141,44.2254059 C69.7316141,40.0334288 67.0105062,37.0916905 63.2230181,37.0916905 C61.34766,37.0916905 60.3548233,38.0477555 60.3548233,39.7024833 L60.3548233,43.9680038 C60.3548233,45.1446991 59.8767908,45.6962751 59.2148997,45.6962751 C58.4794651,45.6962751 57.9646609,45.1814709 57.9646609,43.9680038 L57.9646609,40.0334288 C57.9646609,35.5472779 55.3906399,32.9364852 51.4928367,32.9364852 C49.691022,32.9364852 48.6246418,33.8925501 48.6246418,35.5472779 L48.6246418,43.9680038 C48.6246418,45.1079274 48.1466094,45.6962751 47.52149,45.6962751 C46.7860554,45.6962751 46.2712512,45.1446991 46.2712512,43.9680038 L46.2712512,16.7936963 C46.2712512,13.6680993 44.2120344,11.4985673 41.417383,11.4985673 C38.4756447,11.4985673 36.4164279,13.6680993 36.4164279,16.7936963 L36.4164279,55.5143266 C36.4164279,56.2497612 36.0487106,56.6174785 35.5706781,56.6174785 C35.1661891,56.6174785 34.8352436,56.3968481 34.5778415,55.7717287 L29.6504298,43.9680038 C28.7311366,41.8352436 27.2234957,40.3276027 24.7597899,40.3276027 C21.6709647,40.3276027 19.5014327,42.3868195 19.5014327,45.3285578 C19.5014327,46.247851 19.6485196,47.1303725 19.9059217,47.8290353 L26.5248329,66.6193887 C31.8567335,81.8796562 41.7851003,88.4985673 54.9126074,88.4985673 Z"
        transform="rotate(90 50.5 49.999)"
      />
    </svg>
  ),
  stop: (
    <svg
      className="absolute -top-5 left-1 w-12 fill-blue-500 z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <path
        d="M45.9934096,90 C50.9827486,90 55.2539252,89.0502163 58.8069393,87.1506488 C62.3599535,85.2510813 65.3925179,82.3959387 67.9046327,78.585221 C68.9978678,77.1142145 70.0009692,75.4868411 70.9139368,73.7031009 C71.8269044,71.9193608 72.6468308,70.0921853 73.3737158,68.2215747 C74.1006009,66.350964 74.7460748,64.5585368 75.3101376,62.8442929 C75.8742004,61.1300491 76.3597596,59.6127117 76.7668153,58.2922806 C77.1855011,57.0065978 77.6187246,55.6543142 78.0664858,54.23543 C78.5142469,52.8165457 78.9154875,51.4990103 79.2702074,50.2828238 C79.6249273,49.0666373 79.8488079,48.1052709 79.9418492,47.3987244 C80.1163016,46.2057034 79.8982361,45.1777362 79.2876526,44.314823 C78.6770692,43.4519097 77.7960845,42.9335826 76.6446986,42.7598417 C75.3304904,42.5513525 74.1994573,42.7945898 73.2515991,43.4895536 C72.303741,44.1845173 71.4925373,45.2501283 70.817988,46.6863866 L65.8635394,57.5625687 C65.6774569,58.0258779 65.4797441,58.3444029 65.2704012,58.5181438 C65.0610583,58.6918848 64.8400853,58.7787552 64.6074821,58.7787552 C64.3399884,58.7787552 64.1161078,58.6860934 63.9358403,58.5007697 C63.7555728,58.3154461 63.665439,57.9737556 63.665439,57.4756983 L63.665439,20.2603915 C63.665439,18.9862913 63.2409382,17.923576 62.3919364,17.0722454 C61.5429347,16.2209149 60.478775,15.7952496 59.1994573,15.7952496 C57.9433999,15.7952496 56.8879628,16.2238106 56.033146,17.0809325 C55.1783291,17.9380544 54.7509207,18.9978741 54.7509207,20.2603915 L54.7509207,48.05894 C54.3322349,47.9083645 53.9077341,47.7722674 53.4774181,47.6506488 C53.0471022,47.5290301 52.599341,47.4218899 52.1341345,47.3292281 L52.1341345,15.4651419 C52.1341345,14.179459 51.7096336,13.113848 50.8606319,12.2683088 C50.0116302,11.4227696 48.9474704,11 47.6681527,11 C46.388835,11 45.3246753,11.4227696 44.4756736,12.2683088 C43.6266718,13.113848 43.202171,14.179459 43.202171,15.4651419 L43.202171,46.9643721 C42.7602248,46.9991203 42.3095561,47.0425555 41.8501648,47.0946778 C41.3907734,47.1468001 40.9401047,47.2076094 40.4981586,47.2771058 L40.4981586,18.2797449 C40.4981586,17.0288102 40.0707501,15.9747819 39.2159333,15.11766 C38.3611165,14.2605381 37.2998643,13.8319771 36.0321768,13.8319771 C34.7761194,13.8319771 33.7177748,14.2605381 32.8571429,15.11766 C31.996511,15.9747819 31.566195,17.0288102 31.566195,18.2797449 L31.566195,49.6921047 C31.1009886,49.9005938 30.6474123,50.1206656 30.2054662,50.3523202 C29.7635201,50.5839748 29.3448343,50.8156294 28.9494088,51.0472839 L28.9494088,29.155927 C28.9494088,27.8818268 28.5220004,26.8191115 27.6671836,25.967781 C26.8123667,25.1164504 25.7569296,24.6907851 24.5008723,24.6907851 C23.2215546,24.6907851 22.1515798,25.1164504 21.2909479,25.967781 C20.430316,26.8191115 20,27.8818268 20,29.155927 L20,64.3037167 C20,68.3229235 20.6571041,71.9164651 21.9713123,75.0843413 C23.2855204,78.2522176 25.1201783,80.9480976 27.4752859,83.1719815 C29.8303935,85.3958654 32.5838341,87.0898395 35.7356077,88.2539037 C38.8873813,89.4179679 42.3066486,90 45.9934096,90 Z"
        transform="matrix(-1 0 0 1 100 0)"
      />
    </svg>
  ),
  ritsen: (
    <svg
      className="absolute -top-5 left-2 w-12 z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <path d="M49.9334651,89 C67.0641887,89 77.0352445,78.1723973 77.0352445,59.8748806 L77.0352445,52.1786055 C77.0352445,45.3123209 73.6990642,40.5210124 69.4257546,40.5210124 C68.1887439,40.5210124 67.4765256,41.2755492 67.4765256,42.4450812 L67.4765256,45.6141356 C67.4765256,46.7836676 66.9517332,47.4250239 66.2770001,47.4250239 C65.5647819,47.4250239 65.0399894,46.8213945 65.0399894,45.6141356 L65.0399894,43.5768863 C65.0399894,39.2760267 62.2660867,36.2578797 58.405114,36.2578797 C56.4933702,36.2578797 55.4812706,37.2387775 55.4812706,38.9364852 L55.4812706,43.3127985 C55.4812706,44.5200573 54.9939634,45.0859599 54.3192303,45.0859599 C53.5695268,45.0859599 53.0447344,44.5577841 53.0447344,43.3127985 L53.0447344,39.2760267 C53.0447344,34.6733524 50.4207724,31.9947469 46.4473441,31.9947469 C44.6105707,31.9947469 43.5235007,32.9756447 43.5235007,34.6733524 L43.5235007,43.3127985 C43.5235007,44.4823305 43.0361935,45.0859599 42.3989456,45.0859599 C41.6492421,45.0859599 41.1244497,44.5200573 41.1244497,43.3127985 L41.1244497,15.4326648 C41.1244497,12.2258835 39.0252801,10 36.176407,10 C33.1775932,10 31.0784236,12.2258835 31.0784236,15.4326648 C31.0784236,37.7604302 31.0784236,49.2828753 31.0784236,50 C31.0784236,51.0756871 29.1845939,51.0756871 29.1845939,50.0227605 C29.1845939,49.3208095 29.170332,47.6348513 29.1418082,44.964886 C21.6643093,49.3789261 21.5012079,56 23.6009247,67.4178722 C26.1916518,81.5057676 36.5512587,89 49.9334651,89 Z" />
    </svg>
  ),
  twee: (
    <svg
      className="absolute -top-5 left-2 w-12 z-10"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <path d="M49.9334651,89 C67.0641887,89 77.0352445,78.1723973 77.0352445,59.8748806 L77.0352445,52.1786055 C77.0352445,45.3123209 73.6990642,40.5210124 69.4257546,40.5210124 C68.1887439,40.5210124 67.4765256,41.2755492 67.4765256,42.4450812 L67.4765256,45.6141356 C67.4765256,46.7836676 66.9517332,47.4250239 66.2770001,47.4250239 C65.5647819,47.4250239 65.0399894,46.8213945 65.0399894,45.6141356 L65.0399894,43.5768863 C65.0399894,39.2760267 62.2660867,36.2578797 58.405114,36.2578797 C56.4933702,36.2578797 55.4812706,37.2387775 55.4812706,38.9364852 L55.4812706,43.3127985 C55.4812706,44.5200573 54.9939634,45.0859599 54.3192303,45.0859599 C53.5695268,45.0859599 53.0447344,44.5577841 53.0447344,43.3127985 L53.0447344,11.1632867 C53.0447344,8.39911217 51.4965112,6.17382424 48.2068376,6.17382424 C44.9171639,6.17382424 43.5235007,8.82216154 43.5235007,11.1632867 L43.5235007,43.3127985 C43.5235007,44.4823305 43.0361935,45.0859599 42.3989456,45.0859599 C41.6492421,45.0859599 41.1244497,44.5200573 41.1244497,43.3127985 L41.1244497,15.4326648 C41.1244497,12.2258835 39.0252801,10 36.176407,10 C33.1775932,10 31.0784236,12.2258835 31.0784236,15.4326648 C31.0784236,37.7604302 31.0784236,49.2828753 31.0784236,50 C31.0784236,51.0756871 29.1845939,51.0756871 29.1845939,50.0227605 C29.1845939,49.3208095 29.170332,47.6348513 29.1418082,44.964886 C21.6643093,49.3789261 21.5012079,56 23.6009247,67.4178722 C26.1916518,81.5057676 36.5512587,89 49.9334651,89 Z" />
    </svg>
  ),
}
