import './globals.css'
import { Inter, Plus_Jakarta_Sans, Geologica, Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta-sans' })
const geologica = Geologica({ subsets: ['latin'], variable: '--font-geologica' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} ${geologica.variable} ${poppins.variable} font-sans bg-[#0b0e0f]`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}