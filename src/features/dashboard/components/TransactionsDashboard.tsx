import {
  Cloud,
  Sparkles,
  TrendingUp,
  Mail,
  Database,
  Download,
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreVertical,
  Trash2,
  Search,
  ChevronDown,
} from 'lucide-react'

interface Transaction {
  id: string
  name: string
  category: string
  date: string
  time: string
  amount: string
  status: 'completed' | 'pending' | 'failed'
  icon: any
  type: 'income' | 'expense'
}

const mockTransactions: Transaction[] = [
  {
    id: '#AWS-99210',
    name: 'Amazon Web Services',
    category: 'Infrastructure',
    date: 'Oct 24, 2023',
    time: '14:22 PM',
    amount: '-$12,450.00',
    status: 'completed',
    icon: Cloud,
    type: 'expense',
  },
  {
    id: '#GPT-40293',
    name: 'OpenAI Subscription',
    category: 'SaaS',
    date: 'Oct 22, 2023',
    time: '09:10 AM',
    amount: '-$2,400.00',
    status: 'pending',
    icon: Sparkles,
    type: 'expense',
  },
  {
    id: '#INV-0012',
    name: 'Client Retainer - Alpha',
    category: 'Income',
    date: 'Oct 20, 2023',
    time: '16:45 PM',
    amount: '+$45,000.00',
    status: 'completed',
    icon: TrendingUp,
    type: 'income',
  },
  {
    id: '#MC-8812',
    name: 'Mailchimp Marketing',
    category: 'SaaS',
    date: 'Oct 19, 2023',
    time: '11:00 AM',
    amount: '-$850.00',
    status: 'completed',
    icon: Mail,
    type: 'expense',
  },
  {
    id: '#SNW-2210',
    name: 'Snowflake Data',
    category: 'Infrastructure',
    date: 'Oct 18, 2023',
    time: '08:30 AM',
    amount: '-$3,120.00',
    status: 'failed',
    icon: Database,
    type: 'expense',
  },
]

export function TransactionsDashboard() {
  return (
    <div className="pt-28 px-12 pb-20">
      {/* Page Header Section */}
      <section className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-on-surface mb-2">
            Transactions
          </h2>
          <p className="text-on-surface-variant font-medium">
            Manage and audit your global enterprise expenditure.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-surface-container-lowest text-on-surface-variant rounded-xl border border-outline-variant/20 font-medium text-sm hover:bg-surface-container-low transition-colors active:scale-95 transition-transform">
            <Download className="w-5 h-5" />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-medium text-sm hover:opacity-90 transition-opacity active:scale-95 transition-transform shadow-md shadow-primary/10">
            <Plus className="w-5 h-5" />
            New Transaction
          </button>
        </div>
      </section>

      {/* Filters Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-surface-container-low p-1 rounded-2xl flex">
          <button className="flex-1 py-2 px-4 bg-white text-on-surface rounded-xl shadow-sm font-medium text-xs">
            All Time
          </button>
          <button className="flex-1 py-2 px-4 text-on-surface-variant font-medium text-xs hover:text-on-surface transition-colors">
            Month
          </button>
          <button className="flex-1 py-2 px-4 text-on-surface-variant font-medium text-xs hover:text-on-surface transition-colors">
            Year
          </button>
        </div>
        <div className="relative">
          <select className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-3 text-sm font-medium appearance-none focus:ring-2 focus:ring-primary/20 text-on-surface-variant">
            <option>Category: All</option>
            <option>SaaS</option>
            <option>Infrastructure</option>
            <option>Income</option>
            <option>Marketing</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none w-5 h-5" />
        </div>
        <div className="relative">
          <select className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-3 text-sm font-medium appearance-none focus:ring-2 focus:ring-primary/20 text-on-surface-variant">
            <option>Status: All</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none w-5 h-5" />
        </div>
        <div className="relative">
          <input
            className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/60"
            placeholder="Amount Range"
            type="text"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
        </div>
      </section>

      {/* Main Table Bento Card */}
      <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.04)]">
        {/* Table Header Actions */}
        <div className="px-8 py-6 border-b border-surface-container-low flex justify-between items-center bg-white">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-on-surface">
              Active Selection: <span className="text-primary">12 Items</span>
            </span>
            <div className="h-4 w-[1px] bg-outline-variant/30"></div>
            <button className="text-xs font-bold text-error hover:opacity-80 transition-opacity flex items-center gap-1">
              <Trash2 className="w-4 h-4" />
              Bulk Delete
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-on-surface-variant font-medium">
              Showing 1-12 of 480
            </span>
            <div className="flex gap-1 ml-4">
              <button className="p-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary/20 bg-transparent" type="checkbox" />
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Transaction
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Category
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Date
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Amount
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Status
                </th>
                <th className="px-8 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {mockTransactions.map((transaction, index) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-surface-container-low/30 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <input
                      checked={index === 0}
                      className="rounded border-outline-variant text-primary focus:ring-primary/20 bg-transparent"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                        <transaction.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">{transaction.name}</p>
                        <p className="text-[11px] text-on-surface-variant font-medium">
                          ID: {transaction.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                        transaction.category === 'Income'
                          ? 'bg-green-100 text-green-700'
                          : transaction.category === 'SaaS'
                          ? 'bg-primary-fixed/30 text-on-primary-fixed-variant'
                          : 'bg-secondary-container/30 text-on-secondary-container'
                      }`}
                    >
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-medium text-on-surface">{transaction.date}</p>
                    <p className="text-[11px] text-on-surface-variant">{transaction.time}</p>
                  </td>
                  <td className="px-6 py-5">
                    <p
                      className={`text-sm font-bold font-mono ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-on-surface'
                      }`}
                    >
                      {transaction.amount}
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`flex items-center gap-1.5 text-xs font-bold ${
                        transaction.status === 'completed'
                          ? 'text-primary'
                          : transaction.status === 'pending'
                          ? 'text-tertiary'
                          : 'text-error'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          transaction.status === 'completed'
                            ? 'bg-primary'
                            : transaction.status === 'pending'
                            ? 'bg-tertiary'
                            : 'bg-error'
                        }`}
                      ></span>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg text-outline">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-8 py-6 bg-surface-container-low/20 flex justify-between items-center">
          <button className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
            <ChevronsLeft className="w-4 h-4" />
            First Page
          </button>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary text-xs font-bold">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low text-xs font-bold">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low text-xs font-bold">
              3
            </button>
            <span className="flex items-center px-2 text-outline">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low text-xs font-bold">
              40
            </button>
          </div>
          <button className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
            Last Page
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Contextual Insight Cards (Asymmetric Bento) */}
      <section className="mt-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 bg-surface-container-low rounded-3xl p-8 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-on-surface mb-2">
              Quarterly Spend Analysis
            </h3>
            <p className="text-sm text-on-surface-variant max-w-md">
              Your SaaS expenditure has increased by 14% this month. Consider
              auditing unused seats in your AWS and Snowflake accounts.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 h-16 bg-primary-container/20 rounded-full overflow-hidden relative">
              <div className="absolute bottom-0 w-full bg-primary h-[40%] rounded-full"></div>
            </div>
            <div className="w-1.5 h-16 bg-primary-container/20 rounded-full overflow-hidden relative">
              <div className="absolute bottom-0 w-full bg-primary h-[60%] rounded-full"></div>
            </div>
            <div className="w-1.5 h-16 bg-primary-container/20 rounded-full overflow-hidden relative">
              <div className="absolute bottom-0 w-full bg-primary h-[85%] rounded-full"></div>
            </div>
            <div className="w-1.5 h-16 bg-primary-container/20 rounded-full overflow-hidden relative">
              <div className="absolute bottom-0 w-full bg-primary h-[50%] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 bg-primary text-on-primary rounded-3xl p-8 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4">Smart Reconciliation</h3>
            <p className="text-sm opacity-80 mb-6">
              Automate 90% of your bookkeeping with our new AI matching engine.
            </p>
            <button className="px-6 py-2 bg-white text-primary rounded-xl font-bold text-xs uppercase tracking-tight hover:bg-opacity-90 transition-all">
              Enable Now
            </button>
          </div>
          {/* Background Accent */}
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        </div>
      </section>
    </div>
  )
}
