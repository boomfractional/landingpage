"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Filter, Download, Search, Plus, Building2, DollarSign, Users, Calendar } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const projects = [
  {
    id: "1",
    name: "The Metropolitan",
    location: "Downtown Financial District",
    status: "Active",
    target: "$250,000",
    raised: "$187,500",
    investors: 45,
    deadline: "Dec 21, 2024",
    progress: 75
  },
  {
    id: "2",
    name: "Sunset Residences",
    location: "Coastal Boulevard",
    status: "Funding",
    target: "$180,000",
    raised: "$108,000",
    investors: 32,
    deadline: "Jan 15, 2025",
    progress: 60
  },
  {
    id: "3",
    name: "Green Valley Complex",
    location: "Tech Hub District",
    status: "Active",
    target: "$320,000",
    raised: "$288,000",
    investors: 58,
    deadline: "Nov 30, 2024",
    progress: 90
  }
]

const stats = [
  {
    label: "Total Projects",
    value: "3",
    icon: Building2
  },
  {
    label: "Total Raised",
    value: "$583.5K",
    icon: DollarSign
  },
  {
    label: "Total Investors",
    value: "135",
    icon: Users
  },
  {
    label: "Avg. Time to Fund",
    value: "45 days",
    icon: Calendar
  }
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleRowClick = (projectId: string) => {
    router.push(`/demo/developer/projects/${projectId}`)
  }

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
              Projects
            </h1>
            <Button className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa]">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-[#151819] border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#263438] rounded-lg">
                    <stat.icon className="w-6 h-6 text-[#7fd8be]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-[#151819] border-gray-800 p-6">
            <div className="flex items-center justify-between mb-6">
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
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 bg-[#263438] border-gray-700 text-white w-64"
                  />
                </div>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-gray-800">
                  <TableHead className="text-gray-400">PROJECT NAME</TableHead>
                  <TableHead className="text-gray-400">LOCATION</TableHead>
                  <TableHead className="text-gray-400">STATUS</TableHead>
                  <TableHead className="text-gray-400">TARGET</TableHead>
                  <TableHead className="text-gray-400">RAISED</TableHead>
                  <TableHead className="text-gray-400">INVESTORS</TableHead>
                  <TableHead className="text-gray-400">DEADLINE</TableHead>
                  <TableHead className="text-gray-400">PROGRESS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow 
                    key={project.id} 
                    className="border-gray-800 cursor-pointer hover:bg-[#263438] transition-colors"
                    onClick={() => handleRowClick(project.id)}
                  >
                    <TableCell className="font-medium text-white">{project.name}</TableCell>
                    <TableCell className="text-gray-400">{project.location}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          project.status === 'Active'
                            ? 'bg-[#7fd8be]/20 text-[#7fd8be]'
                            : project.status === 'Planning'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : 'bg-blue-500/20 text-blue-400'
                        }
                      >
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-400">{project.target}</TableCell>
                    <TableCell className="text-gray-400">{project.raised}</TableCell>
                    <TableCell className="text-gray-400">{project.investors}</TableCell>
                    <TableCell className="text-gray-400">{project.deadline}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-[#7fd8be] h-2 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-gray-400 text-sm">{project.progress}%</span>
                      </div>
                    </TableCell>
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