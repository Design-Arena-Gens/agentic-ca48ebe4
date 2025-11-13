import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Welcome to Our Website',
  description: 'A modern, responsive website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
