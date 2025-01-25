"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Edit2 } from 'lucide-react'
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

interface EditProjectDialogProps {
  project: Project
  onProjectUpdated: () => void
}

export default function EditProjectDialog({ project, onProjectUpdated }: EditProjectDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: project.name,
    location: project.location,
    target_amount: project.target_amount,
    raised_amount: project.raised_amount,
    deadline: new Date(project.deadline).toISOString().split('T')[0],
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`/api/projects/${project.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          target_amount: parseFloat(formData.target_amount.toString()),
          raised_amount: parseFloat(formData.raised_amount.toString()),
          deadline: new Date(formData.deadline).toISOString(),
          progress: Math.floor((formData.raised_amount / formData.target_amount) * 100),
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to update project')
      }

      toast({
        title: 'Success',
        description: 'Project updated successfully',
      })

      setOpen(false)
      onProjectUpdated()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update project',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-gray-700">
          <Edit2 className="w-4 h-4 mr-2" />
          Edit Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#151819] text-white">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
          <DialogDescription className="text-gray-400">
            Update your project details here.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Project Name</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#263438] border-gray-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Location</label>
            <Input
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="bg-[#263438] border-gray-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Target Amount ($)</label>
            <Input
              required
              type="number"
              value={formData.target_amount}
              onChange={(e) => setFormData({ ...formData, target_amount: parseFloat(e.target.value) })}
              className="bg-[#263438] border-gray-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Raised Amount ($)</label>
            <Input
              required
              type="number"
              value={formData.raised_amount}
              onChange={(e) => setFormData({ ...formData, raised_amount: parseFloat(e.target.value) })}
              className="bg-[#263438] border-gray-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Deadline</label>
            <Input
              required
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="bg-[#263438] border-gray-700 text-white"
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa] w-full"
            >
              {loading ? 'Updating...' : 'Update Project'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}