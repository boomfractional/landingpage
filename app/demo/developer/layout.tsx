"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Settings, Bell, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function DeveloperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Redirect from /demo/developer to /demo/developer/projects
    if (pathname === '/demo/developer') {
      router.push('/demo/developer/projects')
    }
  }, [pathname, router])

  const isProjectsActive = pathname.startsWith('/demo/developer/projects')
  const isDocumentsActive = pathname === '/demo/developer/documents'
  const isPaymentsActive = pathname === '/demo/developer/payments'

  const navItems = [
    { name: 'Projects', path: '/demo/developer/projects', isActive: isProjectsActive },
    { name: 'Documents', path: '/demo/developer/documents', isActive: isDocumentsActive },
    { name: 'Payments', path: '/demo/developer/payments', isActive: isPaymentsActive },
  ]

  return (
    <main className="min-h-screen bg-[#0b0e0f]">
      <div className="bg-[#151819] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-white font-semibold hover:text-[#7fd8be] transition-colors",
                    item.isActive && "text-[#7fd8be]"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <Button 
                asChild
                variant="outline" 
                className="text-white border-gray-700 hover:bg-[#263438]"
              >
                <Link href="/demo">
                  Back to Website
                </Link>
              </Button>
              <HelpCircle className="w-5 h-5 text-gray-400 cursor-pointer" />
              <Bell className="w-5 h-5 text-gray-400 cursor-pointer" />
              <Settings className="w-5 h-5 text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {children}
    </main>
  )
}