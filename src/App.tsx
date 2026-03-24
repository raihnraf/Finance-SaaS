import {
  DashboardLayout,
  HeroSection,
  RevenueGrowthChart,
  CashFlowChart,
  TransactionsTable,
  QuickActions,
  FloatingActionButton,
} from '@/features/dashboard/components'

function App() {
  return (
    <DashboardLayout>
      <HeroSection />

      <div className="grid grid-cols-12 gap-8">
        <RevenueGrowthChart />
        <CashFlowChart />
        <TransactionsTable />
        <QuickActions />
      </div>

      <FloatingActionButton />
    </DashboardLayout>
  )
}

export default App
