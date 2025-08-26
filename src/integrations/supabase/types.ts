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
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: string | null
          permission_level: number | null
          active: boolean | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          email: string
          full_name?: string | null
          role?: string | null
          permission_level?: number | null
          active?: boolean | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: string | null
          permission_level?: number | null
          active?: boolean | null
          created_at?: string
          updated_at?: string | null
        }
      }
      units: {
        Row: {
          id: string
          name: string
          description: string | null
          active: boolean | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          active?: boolean | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          active?: boolean | null
          created_at?: string
          updated_at?: string | null
        }
      }
      modules: {
        Row: {
          id: string
          name: string
          key: string
          description: string | null
          icon: string | null
          active: boolean | null
          order_index: number | null
          category: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          key: string
          description?: string | null
          icon?: string | null
          active?: boolean | null
          order_index?: number | null
          category?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          key?: string
          description?: string | null
          icon?: string | null
          active?: boolean | null
          order_index?: number | null
          category?: string | null
          created_at?: string
          updated_at?: string | null
        }
      }
      user_unit_assignments: {
        Row: {
          id: string
          user_id: string
          unit_id: string
          is_primary: boolean | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          unit_id: string
          is_primary?: boolean | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          unit_id?: string
          is_primary?: boolean | null
          created_at?: string
        }
      }
      unit_modules: {
        Row: {
          id: string
          unit_id: string
          module_id: string
          active: boolean | null
          created_at: string
        }
        Insert: {
          id?: string
          unit_id: string
          module_id: string
          active?: boolean | null
          created_at?: string
        }
        Update: {
          id?: string
          unit_id?: string
          module_id?: string
          active?: boolean | null
          created_at?: string
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