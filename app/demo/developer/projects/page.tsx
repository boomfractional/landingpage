'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Filter, Download, Search, Building2, DollarSign, Users, Calendar } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import NewProjectDialog from '@/components/developer/new-project-dialog';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  name: string;
  location: string;
  status: string;
  target_amount: number;
  raised_amount: number;
  investor_count: number;
  deadline: string;
  progress: number;
  created_at: string;
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      
      const data = await response.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      toast({
        title: 'Error',
        description: 'Failed to load projects. Using sample data.',
        variant: 'destructive',
      });
      // Set projects to empty array on error
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRowClick = (projectId: string) => {
    router.push(`/demo/developer/projects/${projectId}`);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const calculateStats = (projectList: Project[]) => {
    if (!projectList.length) return defaultStats;

    const totalRaised = projectList.reduce((sum, p) => sum + p.raised_amount, 0);
    const totalInvestors = projectList.reduce((sum, p) => sum + p.investor_count, 0);
    
    // Calculate average time to fund (in days)
    const avgTimeToFund = projectList.reduce((sum, p) => {
      const createdDate = new Date(p.created_at);
      const deadlineDate = new Date(p.deadline);
      return sum + (deadlineDate.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);
    }, 0) / projectList.length;

    return [
      {
        label: 'Total Projects',
        value: projectList.length.toString(),
        icon: Building2,
      },
      {
        label: 'Total Raised',
        value: `$${(totalRaised / 1000).toFixed(1)}K`,
        icon: DollarSign,
      },
      {
        label: 'Total Investors',
        value: totalInvestors.toString(),
        icon: Users,
      },
      {
        label: 'Avg. Time to Fund',
        value: `${Math.round(avgTimeToFund)} days`,
        icon: Calendar,
      },
    ];
  };

  const defaultStats = [
    {
      label: 'Total Projects',
      value: '0',
      icon: Building2,
    },
    {
      label: 'Total Raised',
      value: '$0K',
      icon: DollarSign,
    },
    {
      label: 'Total Investors',
      value: '0',
      icon: Users,
    },
    {
      label: 'Avg. Time to Fund',
      value: '0 days',
      icon: Calendar,
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white font-plus-jakarta-sans">Projects</h1>
            <NewProjectDialog onProjectCreated={fetchProjects} />
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            {calculateStats(projects).map((stat) => (
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

            {loading ? (
              <div className="text-center py-8 text-gray-400">Loading projects...</div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                {searchQuery ? 'No projects found matching your search.' : 'No projects yet. Create your first project!'}
              </div>
            ) : (
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
                  {filteredProjects.map((project) => (
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
                      <TableCell className="text-gray-400">${project.target_amount.toLocaleString()}</TableCell>
                      <TableCell className="text-gray-400">${project.raised_amount.toLocaleString()}</TableCell>
                      <TableCell className="text-gray-400">{project.investor_count}</TableCell>
                      <TableCell className="text-gray-400">
                        {new Date(project.deadline).toLocaleDateString()}
                      </TableCell>
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
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}