import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies })
  
  const { data: properties, error } = await supabase
    .from('properties')
    .select('*')
    
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json(properties)
}

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const json = await request.json()
  
  const { data, error } = await supabase
    .from('properties')
    .insert(json)
    .select()
    
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json(data)
}