import { PageAnimation } from '@/components/page-animation'
import { PageHeaderContent } from '@/components/page-header-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wegkapiteins – AVT Wielrennen',
  description: '...',
}

const Page: React.FC = () => {
  return (
    <PageAnimation>
      <PageHeaderContent page="wegkapiteins" />
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold mb-5">Onze wegkapiteins</h1>
        <p className="mb-4">TODO: trainers?, voorrijders vs kapiteins?, foto?, tekst?</p>
        <p className="mb-4">
          AVT wegkapiteins hebben een clinic gevolgt bij de NTFU om jullie zo goed mogelijk over de
          weg te helpen loodsen. We zullen proberen de afspraken, zoals op deze site omschreven,
          consistent na te leven en hiermee onze ritten samen zo voorspelbaar en veilig mogelijk te
          maken.
        </p>
        {/* <p className="mb-4">
        Rijden in een groep is anders dan alleen rijden, of met een vriend. Je manier van rijden is
        van invloed op de veiligheid van de andere renners in de groep. Om dit te ondervangen
        proberen we het middels consistent naleven van een aantal afspraken zo voorspelbaar en
        veilig mogelijk te maken.
      </p> */}

        <h2 className="text-l font-bold mt-1 mb-2">Albert Jan</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Arie</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Christa</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Frank</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Gerjan</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Luuc</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Marc</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Raymond</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Robbert</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Sander</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Sjoerd</h2>
        <h2 className="text-l font-bold mt-1 mb-2">Timo</h2>
      </div>
    </PageAnimation>
  )
}

export default Page
