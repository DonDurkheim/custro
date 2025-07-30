import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Custro - Your Customer-Getting Partner',
  description: 'Stop wasting time on empty clicks. AI-powered lead qualification that sends only serious buyers your way.',
  keywords: 'lead generation, AI, customer acquisition, lead qualification, sales automation',
  authors: [{ name: 'Custro Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800`}>
        <div className="relative min-h-screen">
          {/* Background effects */}
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent pointer-events-none" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10">
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  )
}