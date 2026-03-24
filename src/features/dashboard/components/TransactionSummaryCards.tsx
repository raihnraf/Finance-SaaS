import { Wallet, Clock, TrendingUp, AlertCircle } from 'lucide-react'
import { useTransactionStore } from '@/store/transactionStore'
import { useMemo } from 'react'

export function TransactionSummaryCards() {
  const transactions = useTransactionStore((state) => state.transactions)

  const stats = useMemo(() => {
    const totalTransactions = transactions.length
    const completedTransactions = transactions.filter(t => t.status === 'completed')
    const pendingTransactions = transactions.filter(t => t.status === 'pending')

    const totalIncome = completedTransactions
      .filter(t => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0)

    const totalExpenses = completedTransactions
      .filter(t => t.amount < 0)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0)

    const pendingAmount = pendingTransactions
      .reduce((sum, t) => sum + Math.abs(t.amount), 0)

    return {
      totalTransactions,
      totalIncome,
      totalExpenses,
      pendingAmount,
      netCashFlow: totalIncome - totalExpenses
    }
  }, [transactions])

  const cards = [
    {
      title: 'Total Income',
      value: `$${stats.totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: '+12.4%',
      trendPositive: true
    },
    {
      title: 'Total Expenses',
      value: `$${stats.totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      icon: Wallet,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      trend: '+8.2%',
      trendPositive: false
    },
    {
      title: 'Pending Amount',
      value: `$${stats.pendingAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      count: `${transactions.filter(t => t.status === 'pending').length} pending`
    },
    {
      title: 'Net Cash Flow',
      value: `$${stats.netCashFlow.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      icon: AlertCircle,
      color: stats.netCashFlow >= 0 ? 'text-green-600' : 'text-red-600',
      bgColor: stats.netCashFlow >= 0 ? 'bg-green-50' : 'bg-red-50',
      trend: stats.netCashFlow >= 0 ? 'Positive' : 'Negative',
      trendPositive: stats.netCashFlow >= 0
    }
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <div
            key={index}
            className="bg-surface-container-lowest rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${card.bgColor} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${card.color}`} />
              </div>
              {card.trend && (
                <span
                  className={`text-xs font-bold ${
                    card.trendPositive ? 'text-green-600' : 'text-red-600'
                  } bg-${
                    card.trendPositive ? 'green' : 'red'
                  }-50 px-2 py-1 rounded-lg`}
                >
                  {card.trend}
                </span>
              )}
            </div>
            <p className="text-on-surface-variant text-sm font-medium mb-1">{card.title}</p>
            <p className="text-2xl font-bold text-on-surface">{card.value}</p>
            {card.count && (
              <p className="text-xs text-on-surface-variant mt-2">{card.count}</p>
            )}
          </div>
        )
      })}
    </section>
  )
}
