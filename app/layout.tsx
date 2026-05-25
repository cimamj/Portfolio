import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: 'Jure Mamić | Junior Software Developer',
  description: 'FESB Computing student specializing in building robust backend systems with .NET and modern full-stack web applications.',
  keywords: ['Software Developer', '.NET', 'Full-Stack', 'React', 'Next.js', 'C#'],
  authors: [{ name: 'Jure Mamić' }],
  openGraph: {
    title: 'Jure Mamić | Junior Software Developer',
    description: 'FESB Computing student specializing in building robust backend systems with .NET and modern full-stack web applications.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
