"use client"

import { Card } from '@/components/ui/card'

export default function PropertyStats() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card className="bg-[#151819] border-gray-800 p-6">
        <div className="space-y-1">
          <p className="text-gray-400 text-sm">Reservations</p>
          <p className="text-3xl font-bold text-white">302</p>
          <p className="text-sm text-gray-400">13% Promoted to Prospects</p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Soft Commitments</span>
            <span className="text-white">$5,400,000</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-[#7fd8be] h-2 rounded-full" style={{ width: '27%' }} />
          </div>
        </div>
      </Card>

      <Card className="bg-[#151819] border-gray-800 p-6">
        <div className="space-y-1">
          <p className="text-gray-400 text-sm">Prospects</p>
          <p className="text-3xl font-bold text-white">40</p>
          <p className="text-sm text-gray-400">50% Turn into investors</p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Commitments</span>
            <span className="text-white">$16,000,000</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-[#7fd8be] h-2 rounded-full" style={{ width: '80%' }} />
          </div>
        </div>
      </Card>

      <Card className="bg-[#151819] border-gray-800 p-6">
        <div className="space-y-1">
          <p className="text-gray-400 text-sm">Raise Target</p>
          <p className="text-3xl font-bold text-white">$20,000,000</p>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs bg-[#7fd8be]/20 text-[#7fd8be] rounded">
              4/40
            </span>
            <p className="text-sm text-gray-400">Investors</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Progress</span>
            <span className="text-white">80%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-[#7fd8be] h-2 rounded-full" style={{ width: '80%' }} />
          </div>
        </div>
      </Card>
    </div>
  )
}