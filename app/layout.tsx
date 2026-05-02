import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/components/providers/AuthProvider'

export const metadata: Metadata = {
  title: 'NexaCorp — We Build, Secure & Scale Your Digital World',
  description: 'Professional services in WhatsApp Bot Deployments, Web Development, Graphics Design, Cyber Security, and Civil Engineering.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-white text-text-primary">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}