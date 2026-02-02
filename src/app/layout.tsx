import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Providers } from '@/components/providers'
import LayoutWrapper from '@/components/LayoutWrapper'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Story Asya - Magical Stories Collection',
  description: 'Discover magical stories from Cookie Run Kingdom, Dandy\'s World, FNAF, and more! A collection of fun stories for kids.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={nunito.variable}>
      <body suppressHydrationWarning style={{ fontFamily: 'var(--font-nunito), system-ui, sans-serif' }}>
        <Providers>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}
