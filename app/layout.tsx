import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/client-layout'

export const metadata: Metadata = {
  title: 'IKHLAS AI SAMP - Neural Intelligence for SAMP',
  description: 'The most advanced AI companion for GTA San Andreas Multiplayer.',
  icons: {
    icon: 'https://image.alikhlas.icu/tM8f/IKHLAS_AI_SAMP_LOGO.png',
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-zinc-950 text-zinc-100 antialiased" suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
