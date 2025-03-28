import SunCalc from 'suncalc' // You'll need to install this package: npm install suncalc

interface SunsetOptions {
  latitude: number
  longitude: number
}

export function getSunset(dateString: string, options: SunsetOptions): Date {
  const date = new Date(dateString)
  const times = SunCalc.getTimes(date, options.latitude, options.longitude)
  return times.sunset
}
