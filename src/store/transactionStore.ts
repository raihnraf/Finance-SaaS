import { create } from 'zustand'
import { shallow } from 'zustand/shallow'
import { Transaction } from '@/features/dashboard/types'

interface TransactionState {
  transactions: Transaction[]
  addTransaction: (transaction: Transaction) => void
}

/**
 * Zustand store for transaction state.
 * Contains mock data for portfolio demonstration.
 * 
 * @example
 * ```tsx
 * // Select all transactions
 * const transactions = useTransactionStore((state) => state.transactions)
 * 
 * // Select with shallow comparison for multiple values
 * const { transactions, addTransaction } = useTransactionStore(
 *   (state) => ({
 *     transactions: state.transactions,
 *     addTransaction: state.addTransaction,
 *   }),
 *   shallow
 * )
 * ```
 */
export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [
    {
      id: '1',
      recipient: 'Amazon Web Services',
      initials: 'AM',
      category: 'Infrastructure',
      status: 'completed',
      amount: -12480.00,
      date: 'Sep 12, 2023',
      time: '14:32',
      paymentMethod: 'Credit Card',
      approvedBy: 'Sarah Chen',
      approverInitials: 'SC'
    },
    {
      id: '2',
      recipient: 'Stripe Payments',
      initials: 'SP',
      category: 'Payment Gateway',
      status: 'completed',
      amount: 45230.50,
      date: 'Sep 11, 2023',
      time: '09:15',
      paymentMethod: 'Bank Transfer',
      approvedBy: 'Mike Johnson',
      approverInitials: 'MJ'
    },
    {
      id: '3',
      recipient: 'Microsoft Azure',
      initials: 'MA',
      category: 'Infrastructure',
      status: 'pending',
      amount: -8920.00,
      date: 'Sep 10, 2023',
      time: '16:45',
      paymentMethod: 'ACH',
      approvedBy: 'Pending',
      approverInitials: 'PD'
    },
    {
      id: '4',
      recipient: 'Salesforce Inc',
      initials: 'SF',
      category: 'Software',
      status: 'completed',
      amount: -15600.00,
      date: 'Sep 09, 2023',
      time: '11:20',
      paymentMethod: 'Wire',
      approvedBy: 'Sarah Chen',
      approverInitials: 'SC'
    },
    {
      id: '5',
      recipient: 'Client Payment - Acme Corp',
      initials: 'AC',
      category: 'Revenue',
      status: 'completed',
      amount: 125000.00,
      date: 'Sep 08, 2023',
      time: '14:00',
      paymentMethod: 'Bank Transfer',
      approvedBy: 'Mike Johnson',
      approverInitials: 'MJ'
    }
  ],
  addTransaction: (transaction) =>
    set((state) => ({ transactions: [...state.transactions, transaction] })),
}))

// Re-export shallow for convenience in components
export { shallow }
