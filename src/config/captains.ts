export interface CaptainData {
  id: string
  name: string
  image: string
  stravaId: string
  admin?: boolean
}

export const captains: CaptainData[] = [
  {
    id: 'albert_jan_kerssen',
    name: 'Albert Jan Kerssen',
    image: 'albert-jan.jpeg',
    stravaId: '43085263',
  },
  // { id: "arie_kingma", name: "Arie Kingma", image: "arie.jpeg", stravaId: "31785656" }, // commented out
  // { id: "christa", name: "Christa", image: "", stravaId: "" }, // commented out
  {
    id: 'daan_hulzinga',
    name: 'Daan Hulzinga',
    image: 'daan.jpeg',
    stravaId: '85157403',
  },
  {
    id: 'djoeke_donkers',
    name: 'Djoeke Donkers',
    image: 'djoeke2.jpeg',
    stravaId: '1049189',
  },
  {
    id: 'frank_zaal',
    name: 'Frank Zaal',
    image: 'frank2.jpeg',
    stravaId: '2211334',
  },
  {
    id: 'gerjan_van_roekel',
    name: 'Gerjan van Roekel',
    image: 'gerjan.jpeg',
    stravaId: '586548',
    admin: true,
  },
  {
    id: 'luuc_rutgers',
    name: 'Luuc Rutgers',
    image: 'luuc.jpeg',
    stravaId: '7239918',
  },
  {
    id: 'mark_wossink',
    name: 'Mark Wossink',
    image: 'mark2.jpeg',
    stravaId: '44558029',
  },
  {
    id: 'peter_kuin',
    name: 'Peter Kuin',
    image: 'peter_k.jpeg',
    stravaId: '1823509',
  },
  {
    id: 'peter_van_dartel',
    name: 'Peter van Dartel',
    image: 'peter_d.jpeg',
    stravaId: '12537716',
  },
  // { id: "raymond_kievit", name: "Raymond Kievit", image: "raymond.jpeg", stravaId: "9871152" }, // commented out
  {
    id: 'robert_van_der_kieft',
    name: 'Robert van der Kieft',
    image: 'blank2.png',
    stravaId: '',
  },
  {
    id: 'sander_teeuwisse',
    name: 'Sander Teeuwisse',
    image: 'sander.jpeg',
    stravaId: '48252858',
  },
  {
    id: 'sjoerd_roelofs',
    name: 'Sjoerd Roelofs',
    image: 'blank2.png',
    stravaId: '32433862',
  },
  // {
  //   id: 'timo_hofmeijer',
  //   name: 'Timo',
  //   image: 'timo.jpeg',
  //   stravaId: '2019517',
  // },
]
