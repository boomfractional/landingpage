import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { sampleProjects } from '@/lib/data/sample-projects'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      // Return sample projects for unauthenticated users
      return NextResponse.json(sampleProjects)
    }
    
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false })
      
    if (error) {
      console.error('Database error:', error)
      // Return sample projects on database error
      return NextResponse.json(sampleProjects)
    }
    
    // Return actual projects if they exist, otherwise return sample projects
    return NextResponse.json(projects?.length ? projects : sampleProjects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    // Return sample projects on any error
    return NextResponse.json(sampleProjects)
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const json = await request.json()
    
    const { data, error } = await supabase
      .from('projects')
      .insert({
        ...json,
        user_id: session.user.id,
        status: 'Active',
        investor_count: 0,
        progress: Math.floor((json.raised_amount / json.target_amount) * 100)
      })
      .select()
      .single()
      
    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to create project' }, 
        { status: 500 }
      )
    }
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    )
  }
}