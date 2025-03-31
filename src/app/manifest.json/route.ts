import { NextResponse } from 'next/server'

// Original manifest
const manifest = {
  name: 'AVT Wielrennen',
  short_name: 'AVT Wielrennen',
  description: 'AVT Wielrennen',
  start_url: '/',
  display: 'standalone',
  orientation: 'portrait-primary',
  // background_color: 'oklch(0.98 0 0)',
  // theme_color: 'oklch(0.98 0 0)',
  icons: [
    { src: '/apple-icon/192', type: 'image/png', sizes: '192x192' },
    { src: '/apple-icon/512', type: 'image/png', sizes: '512x512', purpose: 'maskable' },
    { src: '/apple-icon/512', type: 'image/png', sizes: '512x512' },
  ],
}

export async function GET(/* request: Request */) {
  // Check for dark mode preference in request headers
  // Only Chromium browsers send this header (Chrome, Edge, Opera, etc.)
  // const isDark = request.headers.get('Sec-CH-Prefers-Color-Scheme') === 'dark'

  return NextResponse.json({
    // background_color: isDark ? darkBackground : rootBackground,
    // theme_color: isDark ? darkAccent : rootAccent,
    ...manifest,
  })
}
