import { projects } from '@/lib/data/projects'
import ProjectDetailsClient from './project-details-client'

export function generateStaticParams() {
  return ["1", "2", "3"].map((id) => ({
    id: id,
  }))
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  return <ProjectDetailsClient projectId={params.id} />
}