import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useUser } from '../hooks/useUser'
import { useAllowedModules } from '../hooks/useAllowedModules'
import { Header } from '../components/layout/Header'
import { Sidebar } from '../components/layout/Sidebar'
import { ModuleGrid } from '../components/dashboard/ModuleGrid'
import { WelcomeCard } from '../components/dashboard/WelcomeCard'
import { Loader2 } from 'lucide-react'

export default function Dashboard() {
  const { user, userProfile, loading: authLoading } = useAuth()
  const { activeUnit, loading: userLoading } = useUser()
  const { modules, loading: modulesLoading } = useAllowedModules()

  // Redirect to login if not authenticated
  if (!authLoading && !user) {
    return <Navigate to="/login" replace />
  }

  // Show loading state
  if (authLoading || userLoading || modulesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Carregando DromeFlow...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <WelcomeCard 
              userName={userProfile?.full_name || 'Usuário'}
              unitName={activeUnit?.name || 'Nenhuma unidade'}
              moduleCount={modules.length}
            />
            
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Módulos Disponíveis
              </h2>
              <ModuleGrid modules={modules} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}