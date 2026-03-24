import { create } from 'zustand'

export interface Transaction {
  id: string
  recipient: string
  initials: string
  category: string
  status: 'completed' | 'pending'
  amount: number
  date: string
  time: string
  paymentMethod: 'Credit Card' | 'Bank Transfer' | 'ACH' | 'Wire' | 'Check'
  approvedBy: string
  approverInitials: string
}

interface TransactionState {
  transactions: Transaction[]
  addTransaction: (transaction: Transaction) => void
}

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
