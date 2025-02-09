"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed left-0 right-0 top-0 z-[999] transition-all duration-400 ease-in-out",
      isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://framerusercontent.com/images/RRFeGXefm55C4fLfDA2mFQQd8Y.png"
                alt="Boom Logo"
                width={250}
                height={89}
                className="h-24 w-auto"
              />
            </Link>
          </div>
          <div>
            <Button asChild className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa] font-semibold">
              <a href="https://calendly.com/boomfractional/boom-ai-demo?month=2025-02" target="_blank" rel="noopener noreferrer">Try Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}