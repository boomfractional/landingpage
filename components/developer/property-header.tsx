"use client"

import { Button } from '@/components/ui/button'
import { ArrowLeft, Edit2 } from 'lucide-react'
import Link from 'next/link'

export default function PropertyHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <Button 
          asChild
          variant="outline" 
          className="text-white border-gray-700 hover:bg-[#263438]"
        >
          <Link href="/demo" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Offerings
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold text-white">27 Lillian Dr</h1>
        <span className="px-2 py-1 text-sm bg-blue-500/20 text-blue-400 rounded">Active</span>
      </div>
      <Button variant="outline" className="border-gray-700">
        <Edit2 className="w-4 h-4 mr-2" />
        Edit Offerings
      </Button>
    </div>
  )
}