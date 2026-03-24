import { create } from 'zustand'

export interface DashboardState {
  portfolioValue: number
  growthPercentage: number
  timeframe: 'monthly' | 'quarterly'
  setTimeframe: (timeframe: 'monthly' | 'quarterly') => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  portfolioValue: 1482904.50,
  growthPercentage: 12.4,
  timeframe: 'monthly',
  setTimeframe: (timeframe) => set({ timeframe }),
}))
