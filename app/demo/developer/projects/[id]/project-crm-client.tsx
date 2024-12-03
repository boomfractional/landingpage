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
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/lib/data/projects'

const projectProspects = [
  {
    name: "Trinayaan Hariharan",
    type: "Investor",
    profile: "TH LLC",
    portfolio: "Individual",
    documents: 2,
    commitment: "$300,000",
    contribution: "$150,000",
    date: "Sep 6, 2024"
  },
  {
    name: "Sai Koppu",
    type: "Investor",
    profile: "SK LLC",
    portfolio: "Yes",
    documents: 2,
    commitment: "$400,000",
    contribution: "$0",
    date: "Oct 3, 2024"
  }
]

interface ProjectCRMClientProps {
  projectId: string
}

export default function ProjectCRMClient({ projectId }: ProjectCRMClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const project = projects.find(p => p.id === projectId)

  if (!project) return null

  // Calculate stats based on project data
  const stats = [
    {
      label: "Started",
      value: Math.round(project.investors * 1.5).toString()
    },
    {
      label: "Signed",
      value: Math.round(project.investors * 1.2).toString()
    },
    {
      label: "Completed",
      value: project.investors.toString(),
      highlight: true
    },
    {
      label: "Waitlist",
      value: Math.round(project.investors * 0.1).toString()
    }
  ]

  // Parse target and raised amounts
  const targetAmount = parseInt(project.target.replace(/[$,]/g, ''))
  const raisedAmount = parseInt(project.raised.replace(/[$,]/g, ''))
  
  // Calculate reservations
  const reservations = Math.round(project.investors * 1.2)
  const promotionRate = Math.round((project.investors / reservations) * 100)
  
  // Calculate soft commitments
  const softCommitments = Math.round(targetAmount * 0.3)
  const softCommitmentsProgress = Math.round((softCommitments / targetAmount) * 100)

  // Calculate prospects
  const totalProspects = Math.round(project.investors * 2)
  const conversionRate = Math.round((project.investors / totalProspects) * 100)

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Button 
              asChild
              variant="outline" 
              className="text-white border-gray-700 hover:bg-[#263438]"
            >
              <Link href="/demo/developer/projects" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-white font-plus-jakarta-sans">
              {project.name}
            </h1>
            <span className="px-2 py-1 text-sm bg-blue-500/20 text-blue-400 rounded">{project.status}</span>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#151819] border-gray-800 p-6">
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">Reservations</p>
                <p className="text-3xl font-bold text-white">{reservations}</p>
                <p className="text-sm text-gray-400">{promotionRate}% Promoted to Prospects</p>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Soft Commitments</span>
                  <span className="text-white">${softCommitments.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-[#7fd8be] h-2 rounded-full" style={{ width: `${softCommitmentsProgress}%` }} />
                </div>
              </div>
            </Card>

            <Card className="bg-[#151819] border-gray-800 p-6">
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">Prospects</p>
                <p className="text-3xl font-bold text-white">{totalProspects}</p>
                <p className="text-sm text-gray-400">{conversionRate}% Turn into investors</p>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Commitments</span>
                  <span className="text-white">{project.raised}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-[#7fd8be] h-2 rounded-full" style={{ width: `${project.progress}%` }} />
                </div>
              </div>
            </Card>

            <Card className="bg-[#151819] border-gray-800 p-6">
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">Raise Target</p>
                <p className="text-3xl font-bold text-white">{project.target}</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs bg-[#7fd8be]/20 text-[#7fd8be] rounded">
                    {project.investors}/100
                  </span>
                  <p className="text-sm text-gray-400">Investors</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-[#7fd8be] h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
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
                {projectProspects.map((prospect) => (
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