import { Transaction } from '@/store/transactionStore'
import { cn } from '@/lib/utils'

interface TransactionRowProps {
  transaction: Transaction
}

export function TransactionRow({ transaction }: TransactionRowProps) {
  const isPositive = transaction.amount > 0

  return (
    <tr className="group hover:bg-surface-container-low/30 transition-colors">
      <td className="px-8 py-6">
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
      <td className="px-8 py-6">
        <span className="px-4 py-2 bg-surface-container text-on-surface-variant text-sm font-bold rounded-full">
          {transaction.category.toUpperCase()}
        </span>
      </td>
      <td className="px-8 py-6">
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
      <td className="px-8 py-6 text-right">
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
