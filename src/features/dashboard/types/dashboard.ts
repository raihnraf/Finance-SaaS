export interface DashboardData {
  portfolioValue: number
  growthPercentage: number
  revenueData: RevenueDataPoint[]
  cashFlowData: CashFlowDataPoint[]
  metrics: DashboardMetrics
}

export interface RevenueDataPoint {
  month: string
  revenue: number
}

export interface CashFlowDataPoint {
  month: string
  inflow: number
  outflow: number
}

export interface DashboardMetrics {
  newCustomers: number
  churnRate: number
  ltv: number
  cac: number
}
