import type { DashboardData } from '../types'

/**
 * Fetches dashboard data including portfolio value, revenue trends, and key metrics.
 * 
 * @returns Promise resolving to dashboard data with portfolio metrics and chart data
 * 
 * @note This is a mock API simulation. In production, replace with actual API call:
 * ```ts
 * const response = await fetch('/api/dashboard')
 * return response.json()
 * ```
 */
export const fetchDashboardData = async (): Promise<DashboardData> => {
  // Simulate network latency (500ms delay)
  await new Promise(resolve => setTimeout(resolve, 500))

  return {
    portfolioValue: 1482904.50,
    growthPercentage: 12.4,
    revenueData: [
      { month: 'May', revenue: 150000 },
      { month: 'Jun', revenue: 180000 },
      { month: 'Jul', revenue: 210000 },
      { month: 'Aug', revenue: 242100 },
    ],
    cashFlowData: [
      { month: 'May', inflow: 84200, outflow: 31405 },
      { month: 'Jun', inflow: 92000, outflow: 35000 },
      { month: 'Jul', inflow: 98000, outflow: 28000 },
      { month: 'Aug', inflow: 88000, outflow: 32000 },
    ],
    metrics: {
      newCustomers: 1204,
      churnRate: 1.2,
      ltv: 4820,
      cac: 142
    }
  }
}
