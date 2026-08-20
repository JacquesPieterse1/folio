import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0a0a0a',
          color: '#f6f5f1',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 28,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#5b8cff',
            marginBottom: 32,
          }}
        >
          Jacques Pieterse
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 76,
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#bdbcb6',
            marginTop: 28,
          }}
        >
          Cape Town, South Africa
        </div>
      </div>
    ),
    { ...size }
  )
}
