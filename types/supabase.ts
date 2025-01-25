export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          name: string
          location: string
          status: string
          target_amount: number
          raised_amount: number
          investor_count: number
          deadline: string
          progress: number
          created_at: string
          user_id: string
        }
        Insert: {
          id?: string
          name: string
          location: string
          status?: string
          target_amount: number
          raised_amount?: number
          investor_count?: number
          deadline: string
          progress?: number
          created_at?: string
          user_id: string
        }
        Update: {
          id?: string
          name?: string
          location?: string
          status?: string
          target_amount?: number
          raised_amount?: number
          investor_count?: number
          deadline?: string
          progress?: number
          created_at?: string
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}