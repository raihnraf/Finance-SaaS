import { Home, DollarSign, Wallet, Receipt, Settings, Plus } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'revenue', label: 'Revenue', icon: DollarSign },
  { id: 'cashflow', label: 'Cash Flow', icon: Wallet },
  { id: 'transactions', label: 'Transactions', icon: Receipt },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export function SideNavigation() {
  const { activeNav, setActiveNav, openNewTransactionModal } = useUIStore()

  const handleNavClick = (navId: string) => {
    console.log('[Navigation] Clicked:', navId)
    console.log('[Navigation] Current activeNav:', activeNav)
    setActiveNav(navId)
    console.log('[Navigation] Called setActiveNav with:', navId)
  }

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col w-64 bg-slate-50 border-none z-50">
      <div className="p-8">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">Precision Ledger</h1>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1">Enterprise Finance</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeNav === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-blue-700 bg-white border-r-2 border-blue-700'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Add Transaction Button */}
        <div className="mt-12">
          <button
            onClick={openNewTransactionModal}
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
          >
            <Plus className="w-5 h-5" />
            Add Transaction
          </button>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="mt-auto p-8 border-t border-slate-200/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white font-semibold">
            AV
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold text-slate-900 truncate">Alexander Vance</p>
            <p className="text-xs text-slate-500 truncate">CFO, Precision Corp</p>
          </div>
        </div>
        <nav className="space-y-1">
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-500 hover:text-slate-900 transition-all text-sm w-full">
            Support
          </button>
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-500 hover:text-error transition-all text-sm w-full">
            Logout
          </button>
        </nav>
      </div>
    </aside>
  )
}
