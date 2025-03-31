import { ImageResponse } from 'next/og'
import { AvtIcon } from '@/components/avt-icon'

// Image metadata
export function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 180, height: 180 },
      id: '180',
    },
    {
      contentType: 'image/png',
      size: { width: 512, height: 512 },
      id: '512',
    },
  ]
}

// Image generation
export default function Icon({ id }: { id: string }) {
  const size = parseInt(id)
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <AvtIcon style={{ width: '100%', height: '100%' }} />
    ),
    {
      width: size,
      height: size,
    },
  )
}
