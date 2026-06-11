import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uzair Ali — Python Developer & AWS Cloud Engineer',
  description:
    'Portfolio of Uzair Ali — Python Developer, Flutter Dev & AWS Cloud Engineer (2026). Open to remote roles in US, Canada, UAE, Germany.',
  keywords: [
    'Uzair Ali',
    'Python Developer',
    'AWS',
    'Flutter',
    'Backend Developer',
    'Data Analyst',
    'AWS Data Engineer',
    'Portfolio',
  ],
  authors: [{ name: 'Uzair Ali', url: 'https://github.com/Uzair625' }],
  openGraph: {
    title: 'Uzair Ali — Python Developer & AWS Cloud Engineer',
    description: 'Portfolio of Uzair Ali — Python, Flutter, AWS, Backend Development',
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
