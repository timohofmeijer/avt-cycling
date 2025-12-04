import { AvtIcon } from '@/components/avt-icon'
import { ImageResponse } from 'next/og'

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
      size: { width: 192, height: 192 },
      id: '192',
    },
    {
      contentType: 'image/png',
      size: { width: 512, height: 512 },
      id: '512',
    },
  ]
}

// export const contentType = 'image/png'

// Image generation
export default function Icon({ id }: { id: string }) {
  const size = parseInt(id)
  return new ImageResponse(
    <AvtIcon width={size} height={size} style={{ padding: '30px', backgroundColor: '#f5f4f4' }} />,
    {
      width: size,
      height: size,
    },
  )
}
