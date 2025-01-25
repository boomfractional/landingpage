"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Edit2, Users, Calendar, DollarSign, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import EditProjectDialog from '@/components/developer/edit-project-dialog'
import { useToast } from '@/hooks/use-toast'

interface Project {
  id: string
  name: string
  location: string
  status: string
  target_amount: number
  raised_amount: number
  investor_count: number
  deadline: string
  progress: number
}

export default function ProjectDetailsClient({ projectId }: { projectId: string }) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchProject()
  }, [projectId])

  const fetchProject = async () => {
    try {
      const response = await fetch(`/api/projects/${projectId}`)
      if (!response.ok) throw new Error('Failed to fetch project')
      const data = await response.json()
      setProject(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load project details",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="py-8 text-center text-gray-400">Loading project details...</div>
  }

  if (!project) {
    return <div className="py-8 text-center text-gray-400">Project not found</div>
  }

  const daysRemaining = Math.ceil(
    (new Date(project.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )

  const stats = [
    {
      label: "Target Amount",
      value: `$${project.target_amount.toLocaleString()}`,
      icon: DollarSign,
      color: "text-[#7fd8be]"
    },
    {
      label: "Raised Amount",
      value: `$${project.raised_amount.toLocaleString()}`,
      icon: TrendingUp,
      color: "text-blue-400"
    },
    {
      label: "Total Investors",
      value: project.investor_count.toString(),
      icon: Users,
      color: "text-purple-400"
    },
    {
      label: "Days Remaining",
      value: daysRemaining.toString(),
      icon: Calendar,
      color: "text-yellow-400"
    }
  ]

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
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
            </div>
            <EditProjectDialog project={project} onProjectUpdated={fetchProject} />
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-[#151819] border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#263438] rounded-lg">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
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
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Project Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Progress</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-[#7fd8be] h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-white">{project.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Investment Summary</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Average Investment</p>
                    <p className="text-white">
                      ${project.investor_count ? Math.round(project.raised_amount / project.investor_count).toLocaleString() : 0}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Remaining to Target</p>
                    <p className="text-white">
                      ${(project.target_amount - project.raised_amount).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}