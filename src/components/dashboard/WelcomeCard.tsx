import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { User, Building2, Package } from 'lucide-react'

interface WelcomeCardProps {
  userName: string
  unitName: string
  moduleCount: number
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({
  userName,
  unitName,
  moduleCount
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <User className="h-6 w-6" />
          <span>Bem-vindo, {userName}!</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Unidade Ativa</p>
              <p className="font-semibold">{unitName}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Package className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Módulos Disponíveis</p>
              <p className="font-semibold">{moduleCount}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">v2.1</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Versão</p>
              <p className="font-semibold">DromeFlow 2.1.0</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}