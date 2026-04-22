import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mailsend - Email Marketing Platforması',
  description: 'Azərbaycan\'ın ən güclü email marketing platforması',
  language: 'az',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az">
      <body className="bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  )
}
