// Constants for the DromeFlow system

// Permission levels
export const PERMISSION_LEVELS = {
  USUARIO: 20,
  ATENDENTE: 40,
  ADMIN: 80,
  SUPER_ADMIN: 100
} as const

// Module keys
export const MODULE_KEYS = {
  ATENDIMENTO: 'atendimento',
  COMERCIAL: 'comercial',
  FINANCEIRO: 'financeiro',
  RECURSOS_HUMANOS: 'recursos-humanos',
  MARKETING: 'marketing',
  EDUCACAO: 'educacao',
  ADMINISTRACAO: 'administracao',
  GOVERNANCA: 'governanca'
} as const

// System configuration
export const SYSTEM_CONFIG = {
  APP_NAME: 'DromeFlow',
  APP_VERSION: '2.1.0',
  APP_DESCRIPTION: 'Sistema de Gestão Empresarial',
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  SESSION_TIMEOUT: 8 * 60 * 60 * 1000, // 8 hours
  AUTO_SAVE_INTERVAL: 30 * 1000, // 30 seconds
} as const

// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile'
  },
  USERS: {
    LIST: '/users',
    CREATE: '/users',
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
    PROFILE: (id: string) => `/users/${id}/profile`
  },
  UNITS: {
    LIST: '/units',
    CREATE: '/units',
    UPDATE: (id: string) => `/units/${id}`,
    DELETE: (id: string) => `/units/${id}`,
    MODULES: (id: string) => `/units/${id}/modules`
  },
  MODULES: {
    LIST: '/modules',
    CREATE: '/modules',
    UPDATE: (id: string) => `/modules/${id}`,
    DELETE: (id: string) => `/modules/${id}`
  }
} as const

// Error messages
export const ERROR_MESSAGES = {
  GENERIC: 'Ocorreu um erro inesperado. Tente novamente.',
  NETWORK: 'Erro de conexão. Verifique sua internet.',
  UNAUTHORIZED: 'Você não tem permissão para esta ação.',
  NOT_FOUND: 'Recurso não encontrado.',
  VALIDATION: 'Dados inválidos. Verifique os campos.',
  SESSION_EXPIRED: 'Sessão expirada. Faça login novamente.'
} as const

// Success messages
export const SUCCESS_MESSAGES = {
  CREATED: 'Criado com sucesso!',
  UPDATED: 'Atualizado com sucesso!',
  DELETED: 'Excluído com sucesso!',
  SAVED: 'Salvo com sucesso!',
  LOGIN: 'Login realizado com sucesso!',
  LOGOUT: 'Logout realizado com sucesso!'
} as const