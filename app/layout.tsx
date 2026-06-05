import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uzair Ali — Python Developer & AI Automation Specialist',
  description:
    'Portfolio of Uzair Ali — Python Developer, AI Automation Specialist, Flutter Dev & AWS Data Engineer (2026). Open to remote roles in US, Canada, UAE, Germany.',
  keywords: [
    'Uzair Ali',
    'Python Developer',
    'AI Automation',
    'Flutter',
    'n8n',
    'LLM',
    'AWS Data Engineer',
    'Portfolio',
  ],
  authors: [{ name: 'Uzair Ali', url: 'https://github.com/Uzair625' }],
  openGraph: {
    title: 'Uzair Ali — Python Developer & AI Automation Specialist',
    description: 'Portfolio of Uzair Ali — Python, AI Automation, Flutter, AWS',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#00DCB4',
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
