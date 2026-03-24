import {
  DashboardLayout,
  HeroSection,
  RevenueGrowthChart,
  CashFlowChart,
  TransactionsTable,
  QuickActions,
  FloatingActionButton,
  RevenueDashboard,
  CashFlowDashboard,
  TransactionsDashboard,
  AccountSettings,
} from '@/features/dashboard/components'
import { useUIStore } from '@/store/uiStore'

function Dashboard() {
  return (
    <>
      <HeroSection />
      <div className="grid grid-cols-12 gap-8">
        <RevenueGrowthChart />
        <CashFlowChart />
        <TransactionsTable />
        <QuickActions />
      </div>
      <FloatingActionButton />
    </>
  )
}

function App() {
  const { activeNav } = useUIStore()

  const renderContent = () => {
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

  return <DashboardLayout>{renderContent()}</DashboardLayout>
}

export default App
