import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { RootLayoutClient } from './layout-client'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Clyne Wafula | Full Stack Engineer & Systems Architect',
  description: 'Portfolio of Clyne Wafula, a Full Stack Software Engineer and Systems Architect specializing in scalable systems and innovative solutions.',
  icons: {
    icon: [
      {
        url: '/icon.png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <RootLayoutClient>
            {children}
          </RootLayoutClient>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
