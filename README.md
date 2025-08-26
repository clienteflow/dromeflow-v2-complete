# Sistema de Gestão Empresarial - DromeFlow v2.1.0

## 🚀 Sobre o Projeto

O **DromeFlow v2.1.0** é um sistema completo de gestão empresarial desenvolvido em React + TypeScript, com integrações Supabase para banco de dados e Context7 para assistência por IA.

### 🎯 Características Principais

- **8 Módulos Integrados**: Atendimento, Comercial, Financeiro, RH, Marketing, Educação, Administração e Governança
- **Sistema de Keys 100% Implementado**: Gestão completa de configurações do sistema
- **Autenticação Robusta**: Sistema de permissões com 4 níveis de acesso
- **Interface Moderna**: Desenvolvida com shadcn/ui e Tailwind CSS
- **Context7 IA Assistant**: Integração com assistente de IA para produtividade
- **Multi-Unidade**: Suporte a múltiplas unidades organizacionais

## 🛠️ Tecnologias

### Frontend
- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e desenvolvimento
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI modernos
- **Lucide React** - Ícones SVG
- **React Router** - Roteamento SPA

### Backend & Integrações
- **Supabase** - Backend-as-a-Service
  - PostgreSQL Database
  - Row Level Security (RLS)
  - Autenticação integrada
  - Real-time subscriptions
- **Context7** - Assistente IA via MCP

### DevOps & Ferramentas
- **ESLint** - Linting JavaScript/TypeScript
- **Playwright** - Testes E2E
- **Git** - Controle de versão
- **bun/npm** - Gerenciador de pacotes

## 📚 Estrutura do Projeto

```
dromeflow-v2-complete/
├── src/
│   ├── components/          # Componentes React
│   │   ├── ui/              # Componentes base (shadcn/ui)
│   │   ├── layout/          # Header, Sidebar, etc.
│   │   └── dashboard/       # Componentes do dashboard
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.tsx      # Autenticação
│   │   ├── useUser.tsx      # Gestão de usuário
│   │   └── useAllowedModules.ts # Módulos permitidos
│   ├── integrations/        # Integrações externas
│   │   └── supabase/        # Cliente e tipos Supabase
│   ├── lib/                 # Utilitários e configurações
│   │   ├── utils.ts         # Funções utilitárias
│   │   ├── types.ts         # Definições de tipos
│   │   └── constants.ts     # Constantes do sistema
│   └── pages/               # Páginas da aplicação
│       ├── LoginPage.tsx    # Página de login
│       └── Dashboard.tsx    # Dashboard principal
├── docs/                    # Documentação técnica
└── public/                  # Arquivos estáticos
```

## ⚙️ Configuração

### 1. Pré-requisitos

- Node.js 18+ ou Bun
- Conta Supabase (para banco de dados)
- Context7 API Key (opcional, para IA)

### 2. Instalação

```bash
# Clonar o repositório
git clone https://github.com/clienteflow/dromeflow-v2-complete.git
cd dromeflow-v2-complete

# Instalar dependências
bun install
# ou
npm install
```

### 3. Configuração do Ambiente

```bash
# Copiar arquivo de ambiente
cp .env.example .env

# Editar variáveis de ambiente
nano .env
```

### 4. Variáveis de Ambiente Obrigatórias

```bash
# Supabase (Obrigatório)
VITE_SUPABASE_URL=https://sua-url-supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-supabase

# Context7 (Opcional)
VITE_CONTEXT7_API_KEY=sua-chave-context7
VITE_CONTEXT7_ENDPOINT=https://seu-endpoint-context7.com
```

## 🚀 Executar o Projeto

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
bun dev
# ou
npm run dev

# Acessível em: http://localhost:5173
```

### Produção

```bash
# Build para produção
bun run build
# ou
npm run build

# Preview do build
bun preview
# ou
npm run preview
```

### Testes

```bash
# Executar testes E2E com Playwright
npx playwright test

# Executar em modo interativo
npx playwright test --ui
```

## 🔐 Sistema de Autenticação

### Níveis de Permissão

| Nível | Valor | Descrição |
|--------|-------|----------|
| **Super Admin** | 100 | Acesso total ao sistema |
| **Admin** | 80 | Gestão de unidades |
| **Atendente** | 40 | Operações limitadas |
| **Usuário** | 20 | Acesso básico |

### Credenciais de Teste

```
# Administrador
Email: admin@dromeflow.com
Senha: admin123

# Super Admin (se configurado)
Email: jeanpetri@gmail.com
Senha: DRom@29011725
```

## 📊 Sistema de Módulos

### Módulos Disponíveis

1. **📞 Atendimento** - Gestão de atendimento ao cliente
2. **💹 Comercial** - Gestão de vendas e oportunidades
3. **💰 Financeiro** - Controle financeiro e orçamentário
4. **👥 Recursos Humanos** - Gestão de pessoal
5. **📢 Marketing** - Campanhas e relacionamento
6. **🎓 Educação** - Treinamentos e capacitação
7. **⚙️ Administração** - Configurações gerais
8. **🛡️ Governança** - Compliance e auditoria

### Sistema de Keys

O sistema possui um conjunto robusto de configurações (**Keys**) que permitem:

- Personalização de interface
- Configurações de integrações
- Parâmetros operacionais
- Variáveis de ambiente interno

## 🤖 Context7 IA Assistant

### Recursos Disponíveis

- **Comandos Naturais**: Consultas em linguagem natural
- **Integração MCP**: Protocolo Model Context
- **Respostas Contextuais**: Baseadas nos dados do usuário
- **Segurança**: Respeitando níveis de permissão

### Exemplos de Comandos

```bash
"listar usuários"           # Lista usuários por unidade
"status do sistema"         # Status geral do sistema
"meus dados"               # Dados do usuário logado
"quantos usuários temos"   # Estatísticas
"unidades ativas"          # Unidades operacionais
```

## 💾 Banco de Dados

### Estrutura Principal

```sql
-- Tabelas Core
users                  -- Usuários do sistema
units                  -- Unidades organizacionais
modules               -- Módulos disponíveis
user_unit_assignments -- Relacionamento usuário-unidade
unit_modules          -- Módulos por unidade

-- Tabelas Sistema
activity_logs         -- Logs de auditoria
system_keys           -- Configurações do sistema
```

### Row Level Security (RLS)

O sistema implementa **17 políticas RLS** ativas para garantir:

- Isolamento de dados por unidade
- Controle de acesso baseado em permissões
- Segurança em operações CRUD
- Auditoria automática

## 🛠️ Desenvolvimento

### Scripts Disponíveis

```bash
# Desenvolvimento
bun dev                # Servidor desenvolvimento
bun build              # Build produção
bun preview            # Preview do build

# Qualidade de Código
npm run lint           # ESLint
npm run type-check     # Verificação TypeScript

# Testes
npx playwright test    # Testes E2E
```

### Padrões de Código

- **TypeScript Strict**: Tipagem rigorosa
- **ESLint**: Linting automatizado
- **Prettier**: Formatação consistente
- **Conventional Commits**: Padronização de commits

### Arquitetura de Componentes

```typescript
// Estrutura padrão de componente
export const MeuComponente: React.FC<Props> = ({ prop1, prop2 }) => {
  // 1. Hooks no topo
  const { user } = useAuth()
  
  // 2. Estados locais
  const [loading, setLoading] = useState(false)
  
  // 3. Effects
  useEffect(() => {
    // Lógica
  }, [dependencies])
  
  // 4. Render
  return (
    // JSX com Tailwind classes
  )
}
```

## 🚑 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Build
npm run build

# Upload pasta dist/
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📝 Documentação Adicional

- **[CHANGELOG.md](./CHANGELOG.md)** - Histórico de versões
- **[docs/](./docs/)** - Documentação técnica detalhada
- **[docs/context7/](./docs/context7/)** - Guias Context7
- **[.github/instructions/](https://github.com/clienteflow/dromeflow-producao/blob/main/.github/instructions/dromeflow.instructions.md)** - Instruções GitHub Copilot

## 👥 Contribuição

### Fluxo de Desenvolvimento

1. **Fork** do repositório
2. **Branch** para feature: `git checkout -b feature/nova-funcionalidade`
3. **Commit** seguindo conventional commits
4. **Push** para branch: `git push origin feature/nova-funcionalidade`
5. **Pull Request** detalhado

### Regras de Contribuição

- ✅ Testes devem passar
- ✅ TypeScript sem erros
- ✅ ESLint sem warnings
- ✅ Documentação atualizada
- ✅ Conventional commits

## 🔗 Links Úteis

- **[Supabase Docs](https://supabase.io/docs)** - Documentação Supabase
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS
- **[React Router](https://reactrouter.com/)** - Roteamento
- **[Playwright](https://playwright.dev/)** - Testes E2E

## 📞 Suporte

### Canais de Comunicação

- **Issues**: Reportar bugs e solicitar features
- **Discussions**: Dúvidas e discussões gerais
- **Email**: suporte@dromeflow.com

### FAQ

**P: Como solicitar acesso a novos módulos?**
R: Entre em contato com o administrador do sistema.

**P: Context7 é obrigatório?**
R: Não, Context7 é opcional. O sistema funciona sem integração IA.

**P: Posso customizar a interface?**
R: Sim, através do Sistema de Keys e temas Tailwind.

---

**DromeFlow v2.1.0** - Sistema de Gestão Empresarial  
© 2025 ClienteFlow - Todos os direitos reservados

---

> 🚀 **Próxima Versão**: DromeFlow v2.2.0 com novos módulos e integrações!