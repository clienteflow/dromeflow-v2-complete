import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useUser } from '../../hooks/useUser'
import { Button } from '../ui/button'
import { LogOut, User, Building2 } from 'lucide-react'

export const Header: React.FC = () => {
  const { userProfile, signOut } = useAuth()
  const { activeUnit } = useUser()

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">
            DromeFlow v2.1.0
          </h1>
          {activeUnit && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Building2 className="h-4 w-4" />
              <span>{activeUnit.name}</span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <User className="h-4 w-4" />
            <span>{userProfile?.full_name || 'Usuário'}</span>
            <span className="text-gray-400">|</span>
            <span className="font-medium">{userProfile?.role || 'Sem cargo'}</span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={signOut}
            className="flex items-center space-x-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Sair</span>
          </Button>
        </div>
      </div>
    </header>
  )
}