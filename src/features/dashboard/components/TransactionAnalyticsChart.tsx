import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useTransactionStore } from '@/store/transactionStore'
import { useMemo } from 'react'

export function TransactionAnalyticsChart() {
  const transactions = useTransactionStore((state) => state.transactions)

  const chartData = useMemo(() => {
    // Group transactions by category
    const categoryData = transactions.reduce((acc, transaction) => {
      const category = transaction.category
      const amount = Math.abs(transaction.amount)

      if (!acc[category]) {
        acc[category] = { income: 0, expenses: 0 }
      }

      if (transaction.amount > 0) {
        acc[category].income += amount
      } else {
        acc[category].expenses += amount
      }

      return acc
    }, {} as Record<string, { income: number; expenses: number }>)

    return Object.entries(categoryData).map(([category, data]) => ({
      category: category.length > 10 ? category.substring(0, 10) + '...' : category,
      income: Math.round(data.income),
      expenses: Math.round(data.expenses)
    }))
  }, [transactions])

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-on-surface">Transaction Analytics</h3>
          <p className="text-sm text-on-surface-variant">Income vs Expenses by Category</p>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="category"
              tick={{ fill: '#666', fontSize: 12 }}
              stroke="#666"
            />
            <YAxis
              tick={{ fill: '#666', fontSize: 12 }}
              stroke="#666"
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              formatter={(value: number) => `$${value.toLocaleString()}`}
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="income" fill="#22c55e" radius={[8, 8, 0, 0]} name="Income" />
            <Bar dataKey="expenses" fill="#ef4444" radius={[8, 8, 0, 0]} name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
