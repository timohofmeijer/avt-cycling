export interface CaptainData {
  name: string
  image: string
  stravaId: string
  admin?: boolean
}

export const captains: CaptainData[] = [
  { name: 'Albert Jan Kerssen', image: 'albert-jan.jpeg', stravaId: '43085263' },
  // { name: "Arie Kingma", image: "arie.jpeg", stravaId: "31785656" }, // commented out
  // { name: "Christa", image: "", stravaId: "" }, // commented out
  { name: 'Daan Hulzinga', image: 'daan.jpeg', stravaId: '85157403' },
  { name: 'Djoeke Donkers', image: 'djoeke2.jpeg', stravaId: '1049189' },
  { name: 'Frank Zaal', image: 'frank2.jpeg', stravaId: '2211334' },
  { name: 'Gerjan van Roekel', image: 'gerjan.jpeg', stravaId: '586548', admin: true },
  { name: 'Luuc Rutgers', image: 'luuc.jpeg', stravaId: '7239918' },
  { name: 'Mark Wossink', image: 'mark2.jpeg', stravaId: '44558029' },
  { name: 'Peter Kuin', image: 'peter_k.jpeg', stravaId: '1823509' },
  { name: 'Peter van Dartel', image: 'peter_d.jpeg', stravaId: '12537716' },
  // { name: "Raymond Kievit", image: "raymond.jpeg", stravaId: "9871152" }, // commented out
  { name: 'Robert van der Kieft', image: 'blank.png', stravaId: '' },
  { name: 'Sander Teeuwisse', image: 'sander.jpeg', stravaId: '48252858' },
  { name: 'Sjoerd Roelofs', image: 'blank.png', stravaId: '32433862' },
  { name: 'Timo', image: 'timo.jpeg', stravaId: '2019517' },
]
