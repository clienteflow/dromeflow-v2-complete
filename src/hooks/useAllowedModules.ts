import { useState, useEffect } from 'react'
import { supabase } from '../integrations/supabase'
import { useAuth } from './useAuth'
import { useUser } from './useUser'
import { Database } from '../integrations/supabase/types'

type Module = Database['public']['Tables']['modules']['Row']
type UnitModule = Database['public']['Tables']['unit_modules']['Row']

export const useAllowedModules = () => {
  const { user, userProfile } = useAuth()
  const { activeUnit } = useUser()
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (user && userProfile && activeUnit) {
      fetchAllowedModules()
    } else {
      setModules([])
      setLoading(false)
    }
  }, [user, userProfile, activeUnit])

  const fetchAllowedModules = async () => {
    if (!activeUnit || !userProfile) return

    setLoading(true)
    setError(null)
    
    try {
      // Se é super admin, busca todos os módulos
      if (userProfile.permission_level === 100) {
        const { data, error } = await supabase
          .from('modules')
          .select('*')
          .eq('active', true)
          .order('order_index')

        if (error) {
          setError('Erro ao buscar módulos')
        } else {
          setModules(data || [])
        }
      } else {
        // Busca módulos específicos da unidade
        const { data: unitModules, error } = await supabase
          .from('unit_modules')
          .select(`
            *,
            modules (*)
          `)
          .eq('unit_id', activeUnit.id)
          .eq('active', true)

        if (error) {
          setError('Erro ao buscar módulos da unidade')
        } else {
          const allowedModules = unitModules
            .filter(um => um.modules)
            .map(um => um.modules as Module)
            .filter(module => module.active)
            .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))

          setModules(allowedModules)
        }
      }
    } catch (err) {
      console.error('Error fetching allowed modules:', err)
      setError('Erro inesperado ao buscar módulos')
    } finally {
      setLoading(false)
    }
  }

  const hasModuleAccess = (moduleKey: string) => {
    return modules.some(module => module.key === moduleKey)
  }

  const getModuleByKey = (moduleKey: string) => {
    return modules.find(module => module.key === moduleKey)
  }

  return {
    modules,
    loading,
    error,
    hasModuleAccess,
    getModuleByKey,
    refetch: fetchAllowedModules
  }
}