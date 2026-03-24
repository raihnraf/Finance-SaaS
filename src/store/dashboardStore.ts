import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

export interface DashboardState {
  portfolioValue: number
  growthPercentage: number
  timeframe: 'monthly' | 'quarterly'
  setTimeframe: (timeframe: 'monthly' | 'quarterly') => void
}

/**
 * Zustand store for dashboard UI state.
 * 
 * @example
 * ```tsx
 * // Select multiple values with shallow comparison to prevent unnecessary re-renders
 * const { portfolioValue, growthPercentage, setTimeframe } = useDashboardStore(
 *   (state) => ({
 *     portfolioValue: state.portfolioValue,
 *     growthPercentage: state.growthPercentage,
 *     setTimeframe: state.setTimeframe,
 *   }),
 *   shallow
 * )
 * ```
 */
export const useDashboardStore = create<DashboardState>((set) => ({
  portfolioValue: 1482904.50,
  growthPercentage: 12.4,
  timeframe: 'monthly',
  setTimeframe: (timeframe) => set({ timeframe }),
}))

// Re-export shallow for convenience in components
export { shallow }
