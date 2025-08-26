import { Database } from '../integrations/supabase/types'

// Database types
export type User = Database['public']['Tables']['users']['Row']
export type Unit = Database['public']['Tables']['units']['Row']
export type Module = Database['public']['Tables']['modules']['Row']
export type UserUnitAssignment = Database['public']['Tables']['user_unit_assignments']['Row']
export type UnitModule = Database['public']['Tables']['unit_modules']['Row']

// Permission levels
export enum PermissionLevel {
  USUARIO = 20,
  ATENDENTE = 40,
  ADMIN = 80,
  SUPER_ADMIN = 100
}

// Module categories
export enum ModuleCategory {
  ATENDIMENTO = 'atendimento',
  COMERCIAL = 'comercial',
  FINANCEIRO = 'financeiro',
  RECURSOS_HUMANOS = 'recursos-humanos',
  MARKETING = 'marketing',
  EDUCACAO = 'educacao',
  ADMINISTRACAO = 'administracao',
  GOVERNANCA = 'governanca'
}

// Common interfaces
export interface ApiResponse<T> {
  data?: T
  error?: string
  success: boolean
}

export interface PaginationParams {
  page: number
  limit: number
  search?: string
  orderBy?: string
  orderDirection?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Form types
export interface LoginForm {
  email: string
  password: string
}

export interface UserForm {
  email: string
  full_name: string
  role?: string
  permission_level: number
  active: boolean
}

export interface UnitForm {
  name: string
  description?: string
  active: boolean
}

// Context7 types
export interface Context7Config {
  apiKey: string
  endpoint: string
  enabled: boolean
}

export interface Context7Command {
  command: string
  description: string
  example?: string
  requiredPermission?: number
}

// Sistema de Keys types
export interface SystemKey {
  id: string
  name: string
  key: string
  value: string
  type: 'string' | 'number' | 'boolean' | 'json'
  category: string
  description?: string
  editable: boolean
  created_at: string
  updated_at?: string
}