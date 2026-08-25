import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Fernando Petri'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 24,
          padding: 100,
          background: '#000',
          color: '#fff',
          fontSize: 56,
        }}
      >
        <div>Fernando Petri</div>
        <div style={{ color: '#8a8a8a', fontSize: 32 }}>
          Software engineer working on mission-critical financial systems.
        </div>
      </div>
    ),
    size
  )
}
