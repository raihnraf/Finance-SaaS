import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchTransactions } from '../services/transactionApi'
import { useTransactionStore } from '@/store/transactionStore'
import type { Transaction } from '../types'

/**
 * Query keys for transaction-related queries.
 * Using a consistent key structure enables better cache management and invalidation.
 */
export const transactionQueryKeys = {
  all: ['transactions'] as const,
  lists: () => [...transactionQueryKeys.all, 'list'] as const,
  list: (filters: { category?: string; status?: string }) => [...transactionQueryKeys.lists(), filters] as const,
  details: () => [...transactionQueryKeys.all, 'detail'] as const,
  detail: (id: string) => [...transactionQueryKeys.details(), id] as const,
}

/**
 * Custom hook for fetching transactions with TanStack Query.
 * 
 * @returns Query result object with data, loading, and error states
 * 
 * @example
 * ```tsx
 * function TransactionsList() {
 *   const { data: transactions, isLoading, error } = useTransactions()
 *   
 *   if (isLoading) return <TransactionsSkeleton />
 *   if (error) return <ErrorState error={error} />
 *   if (!transactions) return null
 *   
 *   return <ul>{transactions.map(t => <li key={t.id}>{t.recipient}</li>)}</ul>
 * }
 * ```
 */
export function useTransactions() {
  return useQuery({
    queryKey: transactionQueryKeys.lists(),
    queryFn: fetchTransactions,
    staleTime: 1000 * 60 * 5, // 5 minutes - data considered fresh for 5 min
    gcTime: 1000 * 60 * 30,   // 30 minutes - cache kept for 30 min after unused
    retry: 2,
    // Initial data from Zustand store (simulates cached data)
    // In production, this would come from server cache or be removed
    initialData: () => useTransactionStore.getState().transactions,
  })
}

/**
 * Custom hook for adding a new transaction.
 * 
 * @returns Mutation object with mutate function and status
 * 
 * @example
 * ```tsx
 * function AddTransactionForm() {
 *   const addMutation = useAddTransaction()
 *   
 *   const handleSubmit = (data: Transaction) => {
 *     addMutation.mutate(data, {
 *       onSuccess: () => {
 *         // Show success toast
 *       },
 *       onError: (error) => {
 *         // Show error toast
 *       }
 *     })
 *   }
 * }
 * ```
 */
export function useAddTransaction() {
  const queryClient = useQueryClient()
  const addTransaction = useTransactionStore((state) => state.addTransaction)

  return useMutation({
    mutationFn: async (transaction: Transaction) => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 300))
      return transaction
    },
    onSuccess: (newTransaction) => {
      // Update Zustand store (local state)
      addTransaction(newTransaction)
      
      // Invalidate and refetch transactions query
      queryClient.invalidateQueries({ queryKey: transactionQueryKeys.all })
    },
  })
}
