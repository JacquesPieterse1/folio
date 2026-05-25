import type { Metadata } from 'next'
import { Syne, Space_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/src/components/ui/Providers'
import { LoadingScreen } from '@/src/components/ui/LoadingScreen'
import { CustomCursor } from '@/src/components/ui/CustomCursor'
import { ScrollProgress } from '@/src/components/ui/ScrollProgress'
import { Navbar } from '@/src/components/ui/Navbar'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jacques Pieterse — Full Stack Developer',
  description:
    'Full-stack developer based in Cape Town, South Africa. Building scalable apps, AI systems, and modern digital experiences.',
  keywords: ['full stack developer', 'software engineer', 'Next.js', 'React', '.NET', 'Cape Town'],
  authors: [{ name: 'Jacques Pieterse' }],
  openGraph: {
    title: 'Jacques Pieterse — Full Stack Developer',
    description: 'Full-stack developer based in Cape Town, South Africa.',
    url: 'https://jacquespieterse.dev',
    siteName: 'Jacques Pieterse',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacques Pieterse — Full Stack Developer',
    description: 'Full-stack developer based in Cape Town, South Africa.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased">
        <Providers>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
