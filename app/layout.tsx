import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Your New Title Here', // Change this line to your desired title
  description: 'Boom enables anyone to invest in high-growth real estate projects with minimal capital. List your property or invest in top projects, building a diverse portfolio.',
  openGraph: {
    title: 'Your New Title Here', // Also update this to match
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
      <body className={`${jakarta.className} bg-[#0b0e0f]`}>
        {children}
      </body>
    </html>
  )
}