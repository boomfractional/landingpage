"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Filter, Download, Search, Plus } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

const prospects = [
  {
    name: "John Farber",
    type: "Investor",
    profile: "Farber LLC",
    portfolio: "Individual",
    documents: 2,
    commitment: "$300,000",
    contribution: "$150,000",
    date: "Sep 24, 2024"
  },
  {
    name: "Mike Shane",
    type: "Investor",
    profile: "Shane LLC",
    portfolio: "Yes",
    documents: 2,
    commitment: "$400,000",
    contribution: "$0",
    date: "Oct 4, 2024"
  }
]

const stats = [
  {
    label: "Started",
    value: "32"
  },
  {
    label: "Signed",
    value: "16"
  },
  {
    label: "Completed",
    value: "10",
    highlight: true
  },
  {
    label: "Waitlist",
    value: "2"
  }
]

export default function CRMPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white font-plus-jakarta-sans">
              27 Lillian Dr
            </h1>
            <span className="px-2 py-1 text-sm bg-blue-500/20 text-blue-400 rounded">Active</span>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
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
                  <p className="text-sm text-gray-400">Purchasers</p>
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

          <Card className="bg-[#151819] border-gray-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={`px-4 py-2 rounded ${
                      stat.highlight 
                        ? 'bg-[#7fd8be]/20 text-[#7fd8be]' 
                        : 'text-gray-400'
                    }`}
                  >
                    {stat.label} {stat.value}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-gray-700">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" className="border-gray-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search prospects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 bg-[#263438] border-gray-700 text-white w-64"
                  />
                </div>
                <Button className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa]">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Prospects
                </Button>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-gray-800">
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead className="text-gray-400">PROSPECT NAME</TableHead>
                  <TableHead className="text-gray-400">CONTACT TYPE</TableHead>
                  <TableHead className="text-gray-400">PROFILE</TableHead>
                  <TableHead className="text-gray-400">EXISTING PORTFOLIO</TableHead>
                  <TableHead className="text-gray-400">DOCUMENTS</TableHead>
                  <TableHead className="text-gray-400">COMMITMENT</TableHead>
                  <TableHead className="text-gray-400">CONTRIBUTION</TableHead>
                  <TableHead className="text-gray-400">CONTRIBUTION DATE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prospects.map((prospect) => (
                  <TableRow key={prospect.name} className="border-gray-800">
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium text-white">{prospect.name}</TableCell>
                    <TableCell className="text-gray-400">{prospect.type}</TableCell>
                    <TableCell className="text-gray-400">{prospect.profile}</TableCell>
                    <TableCell className="text-gray-400">{prospect.portfolio}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{prospect.documents}</Badge>
                    </TableCell>
                    <TableCell className="text-gray-400">{prospect.commitment}</TableCell>
                    <TableCell className="text-gray-400">{prospect.contribution}</TableCell>
                    <TableCell className="text-gray-400">{prospect.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}