import React from 'react'
import { useAllowedModules } from '../../hooks/useAllowedModules'
import { useAuth } from '../../hooks/useAuth'
import { cn } from '../../lib/utils'
import { 
  Users, 
  DollarSign, 
  UserCheck, 
  Megaphone, 
  GraduationCap, 
  Settings, 
  Shield, 
  TrendingUp,
  Home
} from 'lucide-react'

const moduleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'atendimento': Users,
  'comercial': TrendingUp,
  'financeiro': DollarSign,
  'recursos-humanos': UserCheck,
  'marketing': Megaphone,
  'educacao': GraduationCap,
  'administracao': Settings,
  'governanca': Shield
}

export const Sidebar: React.FC = () => {
  const { modules, loading } = useAllowedModules()
  const { userProfile } = useAuth()

  if (loading) {
    return (
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </aside>
    )
  }

  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="p-4">
        <nav className="space-y-1">
          {/* Dashboard sempre visível */}
          <a
            href="/dashboard"
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              "text-gray-900 bg-gray-100 hover:bg-gray-200"
            )}
          >
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </a>

          {modules.length > 0 && (
            <>
              <div className="pt-4 pb-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Módulos
                </h3>
              </div>
              
              {modules.map((module) => {
                const IconComponent = moduleIcons[module.key] || Settings
                return (
                  <a
                    key={module.id}
                    href={`/modules/${module.key}`}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{module.name}</span>
                  </a>
                )
              })}
            </>
          )}

          {userProfile?.permission_level === 100 && (
            <>
              <div className="pt-4 pb-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Administração
                </h3>
              </div>
              
              <a
                href="/admin/users"
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                <Users className="h-5 w-5" />
                <span>Gestão de Usuários</span>
              </a>
              
              <a
                href="/admin/units"
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                <Settings className="h-5 w-5" />
                <span>Gestão de Unidades</span>
              </a>
            </>
          )}
        </nav>
      </div>
    </aside>
  )
}