import { projects } from '@/lib/data/projects'
import ProjectCRMClient from './project-crm-client'

export function generateStaticParams() {
  return ["1", "2", "3"].map((id) => ({
    id: id,
  }))
}

export default function ProjectCRMPage({ params }: { params: { id: string } }) {
  return <ProjectCRMClient projectId={params.id} />
}