import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { sampleProjects } from '@/lib/data/sample-projects'

export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    
    const { data: { session } } = await supabase.auth.getSession()
    
    // For sample projects, return the matching sample project
    if (params.id.startsWith('sample-')) {
      const sampleProject = sampleProjects.find(p => p.id === params.id)
      if (sampleProject) {
        return NextResponse.json(sampleProject)
      }
    }

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const { data: project, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', params.id)
      .eq('user_id', session.user.id)
      .single()
      
    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
    return NextResponse.json(project)
  } catch (error) {
    console.error('Error fetching project:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const json = await request.json()
    
    const { data, error } = await supabase
      .from('projects')
      .update({
        name: json.name,
        location: json.location,
        target_amount: json.target_amount,
        raised_amount: json.raised_amount,
        deadline: json.deadline,
        progress: json.progress
      })
      .eq('id', params.id)
      .eq('user_id', session.user.id)
      .select()
      .single()
      
    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error updating project:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    )
  }
}