import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import LayoutWrapper from '@/components/LayoutWrapper'

export const metadata: Metadata = {
  title: 'Story Asya - Kids Stories',
  description: 'A collection of stories for kids featuring Cookie Run Kingdom, Dandys World, and FNAF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}