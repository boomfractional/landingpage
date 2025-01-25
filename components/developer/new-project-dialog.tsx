'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function NewProjectDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    target_amount: '',
    raised_amount: '',
    deadline: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          target_amount: parseFloat(formData.target_amount),
          raised_amount: parseFloat(formData.raised_amount || '0'),
          deadline: new Date(formData.deadline).toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to create project');
      }

      toast({
        title: 'Success',
        description: 'Project created successfully',
      });

      setOpen(false);
      router.refresh();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create project',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa]">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#151819] text-white">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription className="text-gray-400">
            Add a new real estate project to your portfolio.
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
              onChange={(e) => setFormData({ ...formData, target_amount: e.target.value })}
              className="bg-[#263438] border-gray-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Initial Raised Amount ($)</label>
            <Input
              type="number"
              value={formData.raised_amount}
              onChange={(e) => setFormData({ ...formData, raised_amount: e.target.value })}
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
              {loading ? 'Creating...' : 'Create Project'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}