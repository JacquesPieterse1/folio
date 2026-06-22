import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/src/components/ui/Providers'
import { CustomCursor } from '@/src/components/ui/CustomCursor'
import { Nav } from '@/src/components/ui/Nav'
import { RevealObserver } from '@/src/components/ui/RevealObserver'
import { LoadingScreen } from '@/src/components/ui/LoadingScreen'
import { ScrollToTop } from '@/src/components/ui/ScrollToTop'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jacques Pieterse — Full-Stack Developer',
  description:
    'Full-stack developer based in Cape Town, South Africa. Shipping real products — from internal tooling to mobile apps and web frontends.',
  keywords: ['full stack developer', 'software engineer', 'Next.js', 'React', 'Go', 'Cape Town'],
  authors: [{ name: 'Jacques Pieterse' }],
  openGraph: {
    title: 'Jacques Pieterse — Full-Stack Developer',
    description: 'Full-stack developer based in Cape Town, South Africa.',
    url: 'https://jacquespieterse.dev',
    siteName: 'Jacques Pieterse',
    locale: 'en_ZA',
    type: 'website',
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
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        {/* Anti-FOUC: set theme before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('jp.theme');document.documentElement.setAttribute('data-theme',t||'light');}catch(e){}`
          }}
        />
        <Providers>
          <ScrollToTop />
          <LoadingScreen />
          <CustomCursor />
          <RevealObserver />
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
