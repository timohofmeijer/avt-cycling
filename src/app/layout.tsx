import './globals.css'
import { Poppins } from 'next/font/google'
import { PageAnimationWrapper } from '@/components/PageAnimationWrapper'

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] })

export const metadata = {
  title: 'AVT Wielrennen',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex justify-center items-center bg-zinc-100`}>
        <header
          className="fixed top-0 left-0 z-20 flex flex-col justify-center w-full h-20 p-3 overflow-hidden backdrop-blur"
          id="headerPortal"
        >
          <a
            className="absolute z-20 select-none right-4"
            href="https://avtriathlon.nl/fietsen/wielrennen/"
          >
            <svg
              className="w-8 h-8 fill-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="874"
              height="842"
              viewBox="0 0 874 842"
            >
              <path d="M361.990683,786.783056 C433.064016,788.076389 501.680683,800.503056 567.840683,824.063056 C568.400683,824.263056 568.410683,824.493056 567.870683,824.753056 C494.840683,860.573056 420.320683,836.683056 361.810683,787.263056 C361.410683,786.929723 361.470683,786.769723 361.990683,786.783056 Z M460.330683,721.573056 C497.100683,723.023056 534.200683,728.443056 570.130683,736.303056 C595.044016,741.756389 619.390683,749.356389 643.170683,759.103056 C643.35541,759.177771 643.494796,759.334264 643.547724,759.526371 C643.600651,759.718478 643.561079,759.924276 643.440683,760.083056 C627.754016,780.483056 609.557349,797.953056 588.850683,812.493056 C588.407189,812.80535 587.837403,812.876573 587.330683,812.683056 C536.377349,793.249723 484.184016,780.253056 430.750683,773.693056 C404.880683,770.523056 377.830683,769.533056 353.080683,769.303056 C348.400683,769.256389 344.880683,769.126389 342.520683,768.913056 C342.197529,768.880969 341.897157,768.739618 341.670683,768.513056 C330.077349,756.486389 319.057349,743.676389 308.610683,730.083056 C308.330683,729.723056 308.417349,729.546389 308.870683,729.553056 C338.420683,729.783056 360.660683,727.363056 401.080683,723.053056 C418.507349,721.199723 438.257349,720.706389 460.330683,721.573056 Z M551.540683,639.333056 C599.867349,643.473056 647.284016,652.519723 693.790683,666.473056 C693.914242,666.509938 694.01707,666.59589 694.074109,666.709969 C694.131149,666.824047 694.137162,666.955776 694.090683,667.073056 C684.890683,691.199723 673.474016,714.349723 659.840683,736.523056 C659.57012,736.964363 659.018303,737.142642 658.540683,736.943056 C622.414016,721.683056 585.260683,710.969723 547.080683,704.803056 C532.692501,702.476995 522.468747,700.876913 516.409422,700.002808 L515.78698,699.913478 C515.078741,699.812389 514.433309,699.722248 513.850683,699.643056 C469.230683,693.543056 425.790683,693.693056 380.590683,698.563056 C346.510683,702.243056 318.670683,704.743056 287.430683,701.383056 C287.117953,701.351567 286.832099,701.192357 286.640683,700.943056 L254.940683,658.963056 C254.534016,658.423056 254.667349,658.143056 255.340683,658.123056 C266.670683,657.683056 278.230683,657.363056 289.300683,656.203056 C323.870683,652.573056 355.360683,646.593056 392.430683,641.423056 C445.570683,634.023056 498.220683,634.773056 551.540683,639.333056 Z M662.660683,528.933056 C690.580683,532.623056 718.500683,538.443056 745.880683,544.983056 C745.944072,545.00088 745.996783,545.045018 746.025463,545.104291 C746.054144,545.163565 746.056044,545.232288 746.030683,545.293056 L708.390683,633.963056 C708.266124,634.258847 707.93642,634.410684 707.630683,634.313056 C654.710683,618.463056 601.710683,607.553056 546.560683,603.473056 C539.907349,602.979723 533.257349,602.503056 526.610683,602.043056 C476.244016,598.589723 426.074016,600.636389 376.100683,608.183056 C345.640683,612.783056 315.240683,618.213056 284.560683,621.093056 C265.660683,622.873056 246.734016,623.296389 227.780683,622.363056 C227.50784,622.349784 227.255459,622.218107 227.090683,622.003056 L192.180683,575.673056 C191.894016,575.286389 191.990683,575.076389 192.470683,575.043056 C248.858634,571.028598 304.933624,557.660824 360.893608,545.083597 L365.689901,544.007721 C374.482606,542.0397 383.27261,540.098357 392.060683,538.223056 C481.230683,519.203056 572.370683,517.003056 662.660683,528.933056 Z M868.840683,136.153056 C868.896482,136.36916 868.848907,136.598922 868.711881,136.775099 C868.574854,136.951276 868.363872,137.053944 868.140683,137.053056 L665.000683,137.053056 C655.967349,137.053056 650.367349,137.253056 648.200683,137.653056 C634.080683,140.243056 623.730683,151.863056 621.150683,166.023056 C619.557349,174.769723 617.880683,183.776389 616.120683,193.043056 C616.096937,193.168446 616.130116,193.297905 616.211244,193.396417 C616.292372,193.49493 616.413066,193.552317 616.540683,193.553056 L706.710683,193.553056 C706.946892,193.554148 707.171311,193.655822 707.326451,193.83203 C707.481591,194.008238 707.552379,194.241863 707.520683,194.473056 L674.900683,426.793056 C674.866258,427.042977 674.940751,427.295654 675.105249,427.486929 C675.269746,427.678205 675.508424,427.789682 675.760683,427.793056 C677.659683,427.813756 679.565811,427.856002 681.473555,427.902954 L685.289568,427.998144 C703.304383,428.430156 721.135683,428.280556 734.140683,413.363056 C740.990683,405.513056 743.000683,397.633056 744.610683,386.303056 C752.697349,329.463056 760.697349,272.613056 768.610683,215.753056 C770.000683,205.773056 771.110683,198.943056 779.930683,195.163056 C782.037349,194.263056 785.040683,193.796389 788.940683,193.763056 C816.547349,193.503056 844.717349,193.436389 873.450683,193.563056 C873.667322,193.562778 873.87457,193.651478 874.023929,193.8084 C874.173288,193.965322 874.251652,194.176695 874.241697,194.393056 C872.440683,232.993056 862.460683,270.403056 847.440683,305.993056 C819.774016,371.579723 791.880683,437.423056 763.760683,503.523056 C763.54253,504.039111 762.98083,504.322073 762.430683,504.193056 C746.484016,500.453056 730.634016,496.919723 714.880683,493.593056 C673.380683,484.843056 630.860683,480.053056 587.830683,478.303056 C553.950683,476.923056 520.560683,477.053056 487.600683,479.833056 C448.654016,483.119723 410.104016,489.003056 371.950683,497.483056 C342.650683,503.983056 313.330683,510.363056 284.050683,516.903056 C242.650683,526.143056 201.950683,531.933056 159.640683,531.747594 C159.325925,531.747594 159.029537,531.594862 158.840683,531.343056 L73.0606826,417.593056 C72.8346468,417.287439 72.8035573,416.87939 72.9806826,416.543056 C78.0873493,406.789723 83.2140159,397.196389 88.3606826,387.763056 C91.7606826,381.523056 94.7040159,377.209723 97.1906826,374.823056 C103.270683,368.976389 110.900683,366.053056 120.080683,366.053056 L212.090683,366.053056 L212.090683,366.053056 C212.515054,366.05261 212.887914,366.339425 213.000683,366.753056 L229.260683,427.273056 C229.337146,427.550026 229.59471,427.742177 229.890683,427.743056 L300.690683,427.803056 C300.875808,427.803718 301.050511,427.71745 301.162529,427.570059 C301.274546,427.422668 301.310888,427.231245 301.260683,427.053056 L215.790683,137.723056 C215.701899,137.435462 215.441428,137.235099 215.140683,137.223056 C202.760683,136.743056 194.574016,136.769723 190.580683,137.303056 C170.447349,139.983056 155.367349,150.059723 145.340683,167.533056 C108.460683,231.773056 71.7206826,295.916389 35.1206826,359.963056 C34.7273493,360.656389 34.3373493,360.653056 33.9506826,359.953056 C13.9106826,323.553056 0.660682588,284.953056 0.0206825878,243.053056 C-1.07931741,171.943056 41.8006826,114.163056 104.140683,83.623056 C129.947349,70.9763894 157.007349,62.1097227 185.320683,57.023056 C204.300683,53.613056 223.280683,51.413056 242.400683,49.053056 C439.154016,24.7463894 565.464016,9.24638938 621.330683,2.55305604 C725.600683,-9.93694396 839.250683,21.653056 868.840683,136.153056 Z M571.050683,137.233056 C556.737349,137.299723 542.660683,137.326389 528.820683,137.313056 C521.094016,137.306389 515.650683,137.803056 512.490683,138.803056 C500.490683,142.613056 495.880683,151.003056 490.270683,161.743056 C476.717349,187.683056 448.570683,241.409723 405.830683,322.923056 C405.150683,324.223056 404.190683,326.543056 403.010683,327.843056 C402.577349,328.316389 402.287349,328.243056 402.140683,327.623056 L357.190683,137.923056 C357.10293,137.559219 356.780459,137.302897 356.410683,137.303056 L284.380683,137.363056 C284.264159,137.361033 284.153898,137.415419 284.083075,137.50985 C284.012252,137.60428 283.989136,137.72773 284.020683,137.843056 L359.270683,428.013056 C359.342934,428.297691 359.597056,428.498529 359.890683,428.503056 C369.757349,428.656389 379.624016,428.636389 389.490683,428.443056 C404.450683,428.143056 414.610683,421.903056 422.020683,408.493056 C471.714016,318.586389 521.530683,228.399723 571.470683,137.933056 C571.551604,137.788182 571.548395,137.611415 571.462239,137.467821 C571.376082,137.324227 571.219711,137.233056 571.050683,137.233056 Z M175.680683,222.623056 L198.230683,311.203056 C198.271059,311.362591 198.235038,311.53183 198.133193,311.661095 C198.031348,311.790359 197.875236,311.864981 197.710683,311.863092 L128.150683,311.743056 C128.042539,311.742782 127.941554,311.687697 127.884324,311.597763 C127.827093,311.50783 127.821921,311.396097 127.870683,311.303056 L174.880683,222.523056 C175.227349,221.869723 175.494016,221.903056 175.680683,222.623056 Z" />
            </svg>
          </a>
          <div className="absolute left-0 z-0 w-full h-full bg-zinc-200 opacity-90" />
        </header>
        <main className="flex flex-col items-center justify-between max-w-lg min-h-screen p-8 pt-32 overflow-x-hidden">
          <PageAnimationWrapper>{children}</PageAnimationWrapper>
        </main>
      </body>
    </html>
  )
}
