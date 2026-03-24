import { useTransactionStore } from '@/store/transactionStore'
import { TransactionRow } from './TransactionRow'

export function TransactionsTable() {
  const transactions = useTransactionStore((state) => state.transactions)

  return (
    <div className="col-span-12 bg-surface-container-lowest rounded-xl overflow-hidden">
      <div className="p-8 border-b border-surface-container flex items-center justify-between">
        <div>
          <h3 className="text-4xl font-semibold text-on-surface">Recent Transactions</h3>
          <p className="text-2xl text-on-surface-variant">Real-time update of enterprise expenditures</p>
        </div>
        <button className="text-primary font-bold text-xl hover:underline">View All Records</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-6 py-4 text-sm uppercase tracking-widest text-on-surface-variant font-bold">
                Recipient
              </th>
              <th className="px-6 py-4 text-sm uppercase tracking-widest text-on-surface-variant font-bold">
                Category
              </th>
              <th className="px-6 py-4 text-sm uppercase tracking-widest text-on-surface-variant font-bold">
                Payment Method
              </th>
              <th className="px-6 py-4 text-sm uppercase tracking-widest text-on-surface-variant font-bold">
                Approved By
              </th>
              <th className="px-6 py-4 text-sm uppercase tracking-widest text-on-surface-variant font-bold">
                Status
              </th>
              <th className="px-6 py-4 text-sm uppercase tracking-widest text-on-surface-variant font-bold text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
