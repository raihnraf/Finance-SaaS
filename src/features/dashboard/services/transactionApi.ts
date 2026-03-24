import { Transaction } from '@/features/dashboard/types'

/**
 * Fetches transactions from the API.
 * 
 * @returns Promise resolving to array of transactions
 * 
 * @note This is a mock API simulation. In production, replace with:
 * ```ts
 * const response = await fetch('/api/transactions')
 * return response.json()
 * ```
 */
export const fetchTransactions = async (): Promise<Transaction[]> => {
  // Simulate network latency (500ms delay)
  await new Promise(resolve => setTimeout(resolve, 500))

  // This would normally fetch from an API
  // For now, we return an empty array and rely on the store's initial data
  return []
}

/**
 * Exports transactions to CSV format and triggers browser download.
 * 
 * @param transactions - Array of transactions to export
 * 
 * @note Uses Blob API for client-side CSV generation. For large datasets (>10k rows),
 * consider using a streaming library like PapaParse or server-side generation.
 */
export const exportTransactionsToCSV = (transactions: Transaction[]): void => {
  // Define CSV headers
  const headers = ['ID', 'Recipient', 'Category', 'Amount', 'Date', 'Time', 'Status', 'Payment Method', 'Approved By']

  // Convert transactions to CSV rows
  const rows = transactions.map((t) => [
    t.id,
    t.recipient,
    t.category,
    t.amount.toString(),
    t.date,
    t.time,
    t.status,
    t.paymentMethod,
    t.approvedBy
  ])

  // Combine headers and rows
  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.map((cell) => `"${cell}"`).join(','))
  ].join('\n')

  // Create download link
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)

  link.setAttribute('href', url)
  link.setAttribute('download', `transactions_${new Date().toISOString().split('T')[0]}.csv`)
  link.style.visibility = 'hidden'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
