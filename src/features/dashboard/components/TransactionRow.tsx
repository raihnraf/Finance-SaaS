import { Transaction } from '@/store/transactionStore'
import { cn } from '@/lib/utils'

interface TransactionRowProps {
  transaction: Transaction
}

export function TransactionRow({ transaction }: TransactionRowProps) {
  const isPositive = transaction.amount > 0

  const getPaymentMethodIcon = (method: string) => {
    const icons: Record<string, string> = {
      'Credit Card': '💳',
      'Bank Transfer': '🏦',
      'ACH': '📋',
      'Wire': '⚡',
      'Check': '✉️'
    }
    return icons[method] || '💳'
  }

  const getPaymentMethodColor = (method: string) => {
    const colors: Record<string, string> = {
      'Credit Card': 'bg-blue-50 text-blue-700 border-blue-200',
      'Bank Transfer': 'bg-green-50 text-green-700 border-green-200',
      'ACH': 'bg-purple-50 text-purple-700 border-purple-200',
      'Wire': 'bg-orange-50 text-orange-700 border-orange-200',
      'Check': 'bg-gray-50 text-gray-700 border-gray-200'
    }
    return colors[method] || 'bg-gray-50 text-gray-700 border-gray-200'
  }

  return (
    <tr className="group hover:bg-surface-container-low/30 transition-colors">
      <td className="px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary text-lg">
            {transaction.initials}
          </div>
          <div>
            <p className="text-lg font-semibold text-on-surface">{transaction.recipient}</p>
            <p className="text-base text-on-surface-variant">{transaction.date} • {transaction.time}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-6">
        <span className="px-4 py-2 bg-surface-container text-on-surface-variant text-sm font-bold rounded-full">
          {transaction.category.toUpperCase()}
        </span>
      </td>
      <td className="px-6 py-6">
        <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border ${getPaymentMethodColor(transaction.paymentMethod)}`}>
          <span className="text-base">{getPaymentMethodIcon(transaction.paymentMethod)}</span>
          <span className="text-sm font-semibold">{transaction.paymentMethod}</span>
        </div>
      </td>
      <td className="px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center text-primary font-semibold text-sm border border-primary/20">
            {transaction.approverInitials}
          </div>
          <div>
            <p className="text-base font-semibold text-on-surface">{transaction.approvedBy}</p>
            {transaction.status === 'pending' && (
              <p className="text-xs text-tertiary">Awaiting approval</p>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-6">
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-2 h-2 rounded-full",
            transaction.status === 'completed' ? "bg-primary" : "bg-tertiary"
          )} />
          <span className={cn(
            "text-base font-semibold",
            transaction.status === 'completed' ? "" : "text-tertiary"
          )}>
            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
          </span>
        </div>
      </td>
      <td className="px-6 py-6 text-right">
        <p className={cn(
          "text-lg font-bold tabular-nums",
          isPositive ? "text-primary" : ""
        )}>
          {isPositive ? '+' : ''}{transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </p>
      </td>
    </tr>
  )
}
