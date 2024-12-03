import { properties } from '@/lib/data/properties'
import PropertyDetailsClient from './property-details-client'

export function generateStaticParams() {
  return Object.keys(properties).map((id) => ({
    id: id.toString(),
  }))
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = properties[params.id as keyof typeof properties]

  if (!property) return null

  return <PropertyDetailsClient property={property} />
}