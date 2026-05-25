import React from "react"
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: 'Amnesty International',
    template: '%s | Amnesty International'
  },
  description: 'Amnesty International campaigns for justice, freedom, and dignity for people everywhere.',
  keywords: ['Amnesty International', 'human rights', 'justice', 'freedom', 'accountability', 'campaigning'],
  icons: {
    icon: '/images/amnesty-logo-yellow.png',
    shortcut: '/images/amnesty-logo-yellow.png',
    apple: '/images/amnesty-logo-yellow.png',
  },
  openGraph: {
    title: 'Amnesty International',
    description: 'Campaigning for justice, freedom, and dignity around the world.',
    type: 'website',
    siteName: 'Amnesty International',
    images: [
      {
        url: '/images/amnesty-logo-yellow.png',
        width: 1200,
        height: 630,
        alt: 'Amnesty International',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amnesty International',
    description: 'Campaigning for justice, freedom, and dignity around the world.',
    images: ['/images/amnesty-logo-yellow.png'],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
