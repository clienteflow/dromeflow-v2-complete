import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../integrations/supabase'
import { useAuth } from './useAuth'
import { Database } from '../integrations/supabase/types'

type Unit = Database['public']['Tables']['units']['Row']
type UserUnitAssignment = Database['public']['Tables']['user_unit_assignments']['Row']

interface UserContextType {
  units: Unit[]
  activeUnit: Unit | null
  userUnits: (Unit & { is_primary: boolean })[]
  setActiveUnit: (unit: Unit) => void
  loading: boolean
  refreshUnits: () => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, userProfile } = useAuth()
  const [units, setUnits] = useState<Unit[]>([])
  const [userUnits, setUserUnits] = useState<(Unit & { is_primary: boolean })[]>([])
  const [activeUnit, setActiveUnitState] = useState<Unit | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user && userProfile) {
      fetchUserUnits()
    } else {
      setUnits([])
      setUserUnits([])
      setActiveUnitState(null)
      setLoading(false)
    }
  }, [user, userProfile])

  const fetchUserUnits = async () => {
    setLoading(true)
    try {
      // Se é super admin, busca todas as unidades
      if (userProfile?.permission_level === 100) {
        const { data: allUnits, error } = await supabase
          .from('units')
          .select('*')
          .eq('active', true)
          .order('name')

        if (error) {
          console.error('Error fetching all units:', error)
        } else {
          const unitsWithPrimary = allUnits.map(unit => ({ ...unit, is_primary: false }))
          setUnits(allUnits)
          setUserUnits(unitsWithPrimary)
          if (allUnits.length > 0 && !activeUnit) {
            setActiveUnitState(allUnits[0])
          }
        }
      } else {
        // Busca apenas as unidades do usuário
        const { data: assignments, error } = await supabase
          .from('user_unit_assignments')
          .select(`
            *,
            units (*)
          `)
          .eq('user_id', user!.id)

        if (error) {
          console.error('Error fetching user units:', error)
        } else {
          const userUnitsData = assignments
            .filter(assignment => assignment.units)
            .map(assignment => ({
              ...(assignment.units as Unit),
              is_primary: assignment.is_primary || false
            }))

          const allUnitsData = userUnitsData.map(unit => ({
            id: unit.id,
            name: unit.name,
            description: unit.description,
            active: unit.active,
            created_at: unit.created_at,
            updated_at: unit.updated_at
          }))

          setUnits(allUnitsData)
          setUserUnits(userUnitsData)

          // Define unidade ativa (primária ou primeira disponível)
          const primaryUnit = userUnitsData.find(unit => unit.is_primary)
          if (primaryUnit && !activeUnit) {
            setActiveUnitState(primaryUnit)
          } else if (userUnitsData.length > 0 && !activeUnit) {
            setActiveUnitState(userUnitsData[0])
          }
        }
      }
    } catch (error) {
      console.error('Error fetching user units:', error)
    } finally {
      setLoading(false)
    }
  }

  const setActiveUnit = (unit: Unit) => {
    setActiveUnitState(unit)
    localStorage.setItem('dromeflow_active_unit', JSON.stringify(unit))
  }

  const refreshUnits = async () => {
    await fetchUserUnits()
  }

  return (
    <UserContext.Provider value={{
      units,
      activeUnit,
      userUnits,
      setActiveUnit,
      loading,
      refreshUnits
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}