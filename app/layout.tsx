import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Boom - Fractional Investing Simplified',
  description: 'Boom enables anyone to invest in high-growth real estate projects with minimal capital. List your property or invest in top projects, building a diverse portfolio.',
  openGraph: {
    title: 'Boom - Fractional Investing Simplified',
    description: 'Boom enables anyone to invest in high-growth real estate projects with minimal capital.',
    images: ['https://framerusercontent.com/images/MjvOZpMUCGclrcZvHLangVwTSU.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0b0e0f]`}>
        {children}
      </body>
    </html>
  )
}