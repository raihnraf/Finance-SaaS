import { useQuery } from '@tanstack/react-query'
import { fetchDashboardData } from '../services/dashboardApi'

/**
 * Query keys for dashboard-related queries.
 * Using a consistent key structure enables better cache management and invalidation.
 */
export const dashboardQueryKeys = {
  all: ['dashboard'] as const,
  details: () => [...dashboardQueryKeys.all, 'details'] as const,
}

/**
 * Custom hook for fetching dashboard data with TanStack Query.
 * 
 * @returns Query result object with data, loading, and error states
 * 
 * @example
 * ```tsx
 * function DashboardComponent() {
 *   const { data, isLoading, error } = useDashboardData()
 *   
 *   if (isLoading) return <DashboardSkeleton />
 *   if (error) return <ErrorState error={error} />
 *   if (!data) return null
 *   
 *   return <div>Portfolio: ${data.portfolioValue}</div>
 * }
 * ```
 */
export function useDashboardData() {
  return useQuery({
    queryKey: dashboardQueryKeys.details(),
    queryFn: fetchDashboardData,
    staleTime: 1000 * 60 * 5, // 5 minutes - data considered fresh for 5 min
    gcTime: 1000 * 60 * 30,   // 30 minutes - cache kept for 30 min after unused
    retry: 2,                  // Retry failed requests twice
  })
}
