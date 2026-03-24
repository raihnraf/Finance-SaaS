# Technical Decisions

This document explains the architectural and technology choices made for the Precision Ledger portfolio project. These decisions were made to demonstrate modern React best practices and frontend architecture expertise.

---

## Table of Contents

- [State Management](#state-management)
- [Server State](#server-state)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [Performance](#performance)
- [TypeScript](#typescript)

---

## State Management

### Why Zustand over Redux?

**Decision:** We use Zustand for client state management instead of Redux or Context API.

**Rationale:**
- **Minimal boilerplate** - No need for providers, action types, or reducers
- **Better TypeScript integration** - Full type inference without extra configuration
- **Smaller bundle size** - ~1KB vs ~20KB for Redux Toolkit
- **Modern API** - Hook-based, no mapStateToProps/connect patterns
- **Built-in middleware** - Easy to add persistence, devtools, etc.

**When we'd use Redux instead:**
- Complex state with many cross-cutting concerns
- Need for time-travel debugging in production
- Large team requiring strict state mutation patterns
- Integration with Redux ecosystem (Redux Saga, Redux Observable)

```typescript
// Zustand - Clean and simple
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))

// Usage
const { count, increment } = useStore()
```

---

## Server State

### Why TanStack Query (React Query)?

**Decision:** We use TanStack Query for server state management even with mock data.

**Rationale:**
- **Separation of concerns** - Server state ≠ Client state
- **Built-in caching** - Automatic deduplication and stale-while-revalidate
- **Loading & error states** - Standardized handling across all queries
- **Background refetching** - Keep data fresh without user interaction
- **Mutation support** - Optimistic updates, rollback on error
- **Production-ready** - Same patterns work with real APIs

**Key Concepts Demonstrated:**
```typescript
// Query keys for cache management
export const dashboardQueryKeys = {
  all: ['dashboard'] as const,
  details: () => [...dashboardQueryKeys.all, 'details'] as const,
}

// Custom hook encapsulating query logic
export function useDashboardData() {
  return useQuery({
    queryKey: dashboardQueryKeys.details(),
    queryFn: fetchDashboardData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30,   // 30 minutes
    retry: 2,
  })
}
```

**Mock API Pattern:**
```typescript
// Simulates real API behavior
export const fetchDashboardData = async (): Promise<DashboardData> => {
  await new Promise(resolve => setTimeout(resolve, 500)) // Network latency
  
  // In production, replace with:
  // const response = await fetch('/api/dashboard')
  // return response.json()
  
  return { /* mock data */ }
}
```

---

## Project Structure

### Why Feature-Based Structure?

**Decision:** Code is organized by feature/domain rather than by type.

```
src/
├── features/
│   └── dashboard/
│       ├── components/    # Dashboard-specific components
│       ├── hooks/         # Dashboard-specific hooks
│       ├── services/      # API services
│       └── types/         # TypeScript types
├── store/                 # Global Zustand stores
├── lib/                   # Shared utilities
└── types/                 # Shared types
```

**Rationale:**
- **Scalability** - Easier to add new features without restructuring
- **Colocation** - Related code lives together (components, hooks, types)
- **Clear ownership** - Each feature is self-contained
- **Extractability** - Features can be moved to separate packages if needed
- **Team-friendly** - Multiple developers can work on different features

**When type-based structure works:**
- Very small projects (< 20 components)
- Solo projects with no plans to scale
- Library/framework development

---

## Styling

### Why Tailwind CSS v4?

**Decision:** We use Tailwind CSS v4 (alpha) with custom design tokens.

**Rationale:**
- **Design system integration** - Custom colors defined in `@theme` directive
- **Utility-first** - Faster development, consistent spacing/typography
- **Small bundle** - PurgeCSS removes unused styles automatically
- **No context switching** - Styles live alongside markup
- **Modern CSS features** - OKLCH colors, container queries, layers

**Custom Design Tokens:**
```css
@theme {
  --color-primary: #0059bb;
  --color-primary-container: #0070ea;
  --color-on-primary: #ffffff;
  /* 50+ custom colors for enterprise design system */
}
```

**Why not CSS-in-JS?**
- Runtime overhead (emotion, styled-components)
- Larger bundle size
- SSR complexity
- Tailwind covers 95% of use cases

---

## Performance

### Code Splitting & Lazy Loading

**Decision:** Heavy route components are lazy-loaded with React.lazy + Suspense.

```typescript
// App.tsx
const RevenueDashboard = lazy(() => import('./features/dashboard/components/RevenueDashboard'))
const TransactionsDashboard = lazy(() => import('./features/dashboard/components/TransactionsDashboard'))

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <DashboardLayout>{renderContent()}</DashboardLayout>
    </Suspense>
  )
}
```

**Rationale:**
- **Smaller initial bundle** - Faster first paint
- **On-demand loading** - Users only download what they need
- **Better LCP** - Critical path is not blocked by non-critical components

### Vite Build Optimization

**Manual Chunks Configuration:**
```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom'],
        'charts': ['recharts'],
        'state': ['zustand', '@tanstack/react-query'],
        'ui': ['framer-motion', 'lucide-react'],
      }
    }
  }
}
```

**Benefits:**
- Vendors cached separately from app code
- Better cache utilization across deployments
- Parallel downloading of chunks

---

## TypeScript

### Why Strict Mode?

**Decision:** All TypeScript strict flags are enabled.

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  }
}
```

**Rationale:**
- **Catches bugs early** - Type errors found at compile time
- **Better documentation** - Types serve as living documentation
- **Refactoring confidence** - TypeScript tells you what breaks
- **Professional standard** - Expected in production codebases

### Type Organization

**Decision:** Types are co-located with features, with shared types in `src/types/`.

```
src/
├── features/dashboard/types/
│   ├── transaction.ts
│   ├── dashboard.ts
│   └── index.ts
└── types/
    └── index.ts  # Re-exports for convenience
```

**Why not a single `types.ts` file?**
- Scales poorly as project grows
- Merge conflicts in team environments
- Harder to find specific types
- No clear ownership

---

## What Would Be Different in Production

### API Layer
```typescript
// Current: Mock data with delay
await new Promise(resolve => setTimeout(resolve, 500))
return { /* mock data */ }

// Production: Real API with error handling
const response = await fetch('/api/dashboard', {
  headers: { 'Authorization': `Bearer ${token}` }
})
if (!response.ok) throw new Error('Failed to fetch')
return response.json()
```

### State Persistence
```typescript
// Current: In-memory only
export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
}))

// Production: Persist to localStorage
export const useTransactionStore = create<TransactionState>()(
  persist(
    (set) => ({ transactions: [], ... }),
    { name: 'transactions-storage' }
  )
)
```

### Error Tracking
```typescript
// Add Sentry or similar
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new BrowserTracing()],
})
```

### Analytics
```typescript
// Add PostHog or Google Analytics
posthog.capture('dashboard_viewed', {
  timeframe: 'monthly',
  portfolioValue: data.portfolioValue
})
```

---

## Summary

| Decision | Choice | Why |
|----------|--------|-----|
| State Management | Zustand | Minimal boilerplate, great DX |
| Server State | TanStack Query | Caching, loading states, production patterns |
| Structure | Feature-based | Scalability, colocation, clear ownership |
| Styling | Tailwind CSS v4 | Design tokens, performance, DX |
| Bundling | Vite + manual chunks | Fast dev, optimized prod builds |
| Types | Strict TypeScript | Safety, documentation, refactoring |

This architecture demonstrates production-ready patterns while remaining maintainable for a portfolio project.
