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
