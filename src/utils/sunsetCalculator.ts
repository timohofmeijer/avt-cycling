import SunCalc from 'suncalc' // You'll need to install this package: npm install suncalc

interface SunsetOptions {
  latitude: number
  longitude: number
}

export function getSunset(dateString: string, options: SunsetOptions): Date {
  // Create date object in Netherlands timezone
  const date = new Date(dateString + 'T12:00:00+02:00') // Using noon time to avoid DST edge cases
  const times = SunCalc.getTimes(date, options.latitude, options.longitude)
  return times.sunset
}
