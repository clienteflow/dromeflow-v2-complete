import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Database } from '../../integrations/supabase/types'
import { 
  Users, 
  DollarSign, 
  UserCheck, 
  Megaphone, 
  GraduationCap, 
  Settings, 
  Shield, 
  TrendingUp,
  ArrowRight
} from 'lucide-react'

type Module = Database['public']['Tables']['modules']['Row']

interface ModuleGridProps {
  modules: Module[]
}

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

const moduleColors: Record<string, string> = {
  'atendimento': 'bg-blue-500',
  'comercial': 'bg-green-500',
  'financeiro': 'bg-yellow-500',
  'recursos-humanos': 'bg-purple-500',
  'marketing': 'bg-pink-500',
  'educacao': 'bg-indigo-500',
  'administracao': 'bg-gray-500',
  'governanca': 'bg-red-500'
}

export const ModuleGrid: React.FC<ModuleGridProps> = ({ modules }) => {
  if (modules.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Nenhum módulo disponível</p>
          <p className="text-sm text-gray-500">
            Entre em contato com o administrador para solicitar acesso aos módulos.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {modules.map((module) => {
        const IconComponent = moduleIcons[module.key] || Settings
        const bgColor = moduleColors[module.key] || 'bg-gray-500'
        
        return (
          <Card key={module.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${bgColor}`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{module.name}</CardTitle>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {module.description || 'Módulo do sistema DromeFlow'}
              </p>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group"
                onClick={() => window.location.href = `/modules/${module.key}`}
              >
                <span>Acessar Módulo</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}