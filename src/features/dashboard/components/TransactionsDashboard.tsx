import { Download, MoreVertical, Trash2, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Eye } from 'lucide-react'
import { useTransactionStore } from '@/store/transactionStore'
import { TransactionSummaryCards } from './TransactionSummaryCards'
import { TransactionAnalyticsChart } from './TransactionAnalyticsChart'
import { TransactionFilters } from './TransactionFilters'
import { TransactionDetailModal } from './TransactionDetailModal'
import { exportTransactionsToCSV } from '../services/transactionApi'
import { useState, useMemo } from 'react'

export function TransactionsDashboard() {
  const transactions = useTransactionStore((state) => state.transactions)

  // Filter states
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 10

  // Filter and search transactions
  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch =
        searchQuery === '' ||
        transaction.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === 'All' || transaction.category === selectedCategory
      const matchesStatus = selectedStatus === 'All' || transaction.status === selectedStatus

      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [transactions, searchQuery, selectedCategory, selectedStatus])

  // Pagination
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex)

  const handleExport = () => {
    exportTransactionsToCSV(filteredTransactions)
  }

  const handleSelectAll = () => {
    if (selectedIds.size === paginatedTransactions.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(paginatedTransactions.map((t) => t.id)))
    }
  }

  const handleSelectOne = (id: string) => {
    const newSelected = new Set(selectedIds)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedIds(newSelected)
  }

  const handleBulkDelete = () => {
    // This would normally call an API to delete transactions
    // For portfolio demo, we just clear the selection
    setSelectedIds(new Set())
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Revenue': 'bg-green-100 text-green-700',
      'Infrastructure': 'bg-blue-100 text-blue-700',
      'Payment Gateway': 'bg-purple-100 text-purple-700',
      'Software': 'bg-orange-100 text-orange-700',
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'completed': { text: 'text-primary', bg: 'bg-primary' },
      'pending': { text: 'text-tertiary', bg: 'bg-tertiary' },
      'failed': { text: 'text-error', bg: 'bg-error' },
    }
    return colors[status] || { text: 'text-gray', bg: 'bg-gray' }
  }

  return (
    <div className="p-10 relative z-10">
      {/* Page Header Section */}
      <section className="mb-8 flex justify-between items-end relative z-20">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-on-surface mb-2">
            Transactions
          </h2>
          <p className="text-on-surface-variant font-medium">
            Manage and audit your global enterprise expenditure.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-6 py-2.5 bg-surface-container-lowest text-on-surface-variant rounded-xl border border-outline-variant/20 font-medium text-sm hover:bg-surface-container-low transition-colors"
          >
            <Download className="w-5 h-5" />
            Export CSV
          </button>
        </div>
      </section>

      {/* Summary Cards */}
      <TransactionSummaryCards />

      {/* Analytics Chart */}
      <TransactionAnalyticsChart />

      {/* Filters */}
      <TransactionFilters
        onSearch={setSearchQuery}
        onCategoryFilter={setSelectedCategory}
        onStatusFilter={setSelectedStatus}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedStatus={selectedStatus}
      />

      {/* Main Table Bento Card */}
      <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.04)]">
        {/* Table Header Actions */}
        <div className="px-8 py-6 border-b border-surface-container-low flex justify-between items-center bg-white">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-on-surface">
              Active Selection: <span className="text-primary">{selectedIds.size} Items</span>
            </span>
            <div className="h-4 w-[1px] bg-outline-variant/30"></div>
            {selectedIds.size > 0 && (
              <button
                onClick={handleBulkDelete}
                className="text-xs font-bold text-error hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" />
                Bulk Delete
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-on-surface-variant font-medium">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredTransactions.length)} of {filteredTransactions.length}
            </span>
            <div className="flex gap-1 ml-4">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant disabled:opacity-50 disabled:cursor-not-allowed"
              >
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
                  <input
                    checked={selectedIds.size === paginatedTransactions.length && paginatedTransactions.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-outline-variant text-primary focus:ring-primary/20 bg-transparent cursor-pointer"
                    type="checkbox"
                  />
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
              {paginatedTransactions.map((transaction) => {
                const statusColors = getStatusColor(transaction.status)
                const isIncome = transaction.amount > 0

                return (
                  <tr
                    key={transaction.id}
                    className="hover:bg-surface-container-low/30 transition-colors group cursor-pointer"
                    onClick={() => setSelectedTransaction(transaction)}
                  >
                    <td
                      className="px-8 py-5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        checked={selectedIds.has(transaction.id)}
                        onChange={() => handleSelectOne(transaction.id)}
                        className="rounded border-outline-variant text-primary focus:ring-primary/20 bg-transparent cursor-pointer"
                        type="checkbox"
                      />
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {transaction.initials}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-on-surface">{transaction.recipient}</p>
                          <p className="text-[11px] text-on-surface-variant font-medium">
                            ID: {transaction.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${getCategoryColor(
                          transaction.category
                        )}`}
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
                          isIncome ? 'text-green-600' : 'text-on-surface'
                        }`}
                      >
                        {isIncome ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`flex items-center gap-1.5 text-xs font-bold ${statusColors.text}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusColors.bg}`}></span>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                    <td
                      className="px-8 py-5 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setSelectedTransaction(transaction)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg text-outline mr-2"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg text-outline">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-8 py-6 bg-surface-container-low/20 flex justify-between items-center">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsLeft className="w-4 h-4" />
            First Page
          </button>
          <div className="flex gap-2">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum
              if (totalPages <= 5) {
                pageNum = i + 1
              } else if (currentPage <= 3) {
                pageNum = i + 1
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i
              } else {
                pageNum = currentPage - 2 + i
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold ${
                    currentPage === pageNum
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}
            {totalPages > 5 && (
              <>
                <span className="flex items-center px-2 text-outline">...</span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low text-xs font-bold"
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
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

      {/* Transaction Detail Modal */}
      <TransactionDetailModal
        transaction={selectedTransaction}
        onClose={() => setSelectedTransaction(null)}
      />
    </div>
  )
}
