import { lazy, Suspense, ReactNode } from 'react'
import {
  DashboardLayout,
  HeroSection,
  RevenueGrowthChart,
  CashFlowChart,
  TransactionsTable,
  QuickActions,
  FloatingActionButton,
  DashboardSkeleton,
  ErrorState,
  NewTransactionModal,
} from '@/features/dashboard/components'
import { useUIStore } from '@/store/uiStore'
import { useDashboardData } from '@/features/dashboard/hooks/useDashboardData'

// Temporarily import directly to debug
import { RevenueDashboard } from './features/dashboard/components/RevenueDashboard'
import { CashFlowDashboard } from './features/dashboard/components/CashFlowDashboard'
import { TransactionsDashboard } from './features/dashboard/components/TransactionsDashboard'
import { AccountSettings } from './features/dashboard/components/AccountSettings'

// Lazy load heavy dashboard components for code splitting
// const RevenueDashboard = lazy(() => import('./features/dashboard/components/RevenueDashboard'))
// const CashFlowDashboard = lazy(() => import('./features/dashboard/components/CashFlowDashboard'))
// const TransactionsDashboard = lazy(() => import('./features/dashboard/components/TransactionsDashboard'))
// const AccountSettings = lazy(() => import('./features/dashboard/components/AccountSettings'))

/**
 * Main dashboard view with real-time data from TanStack Query.
 * Shows loading skeleton while data is fetching.
 */
function Dashboard() {
  const { data, isLoading, error, refetch } = useDashboardData()

  if (isLoading) {
    return <DashboardSkeleton />
  }

  if (error) {
    return (
      <ErrorState 
        error={error} 
        onRetry={() => refetch()}
        title="Failed to load dashboard"
        message="We couldn't fetch the latest financial data. Please try again."
      />
    )
  }

  return (
    <div className="p-10">
      <HeroSection />
      <div className="grid grid-cols-12 gap-8">
        <RevenueGrowthChart />
        <CashFlowChart />
        <TransactionsTable />
        <QuickActions />
      </div>
      <FloatingActionButton />
    </div>
  )
}

/**
 * Page loader component for Suspense fallback.
 * Displays while lazy-loaded components are being fetched.
 */
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-on-surface-variant font-medium">Loading...</p>
      </div>
    </div>
  )
}

function App() {
  const { activeNav, showNewTransactionModal, closeNewTransactionModal } = useUIStore()

  const renderContent = (): ReactNode => {
    switch (activeNav) {
      case 'dashboard':
        return <Dashboard />
      case 'revenue':
        return <RevenueDashboard />
      case 'cashflow':
        return <CashFlowDashboard />
      case 'transactions':
        return <TransactionsDashboard />
      case 'settings':
        return <AccountSettings />
      default:
        return <Dashboard />
    }
  }

  return (
    <>
      <DashboardLayout>
        {/* Temporarily removed Suspense for debugging */}
        {renderContent()}
      </DashboardLayout>
      {/* Global New Transaction Modal */}
      {showNewTransactionModal && <NewTransactionModal onClose={closeNewTransactionModal} />}
    </>
  )
}

export default App
