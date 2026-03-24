import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

interface UIState {
  sidebarCollapsed: boolean
  activeNav: string
  showNewTransactionModal: boolean
  setActiveNav: (nav: string) => void
  toggleSidebar: () => void
  openNewTransactionModal: () => void
  closeNewTransactionModal: () => void
}

/**
 * Zustand store for UI state.
 * Manages navigation, sidebar, and modal states.
 *
 * @example
 * ```tsx
 * // Select multiple values with shallow comparison
 * const { activeNav, setActiveNav } = useUIStore(
 *   (state) => ({
 *     activeNav: state.activeNav,
 *     setActiveNav: state.setActiveNav,
 *   }),
 *   shallow
 * )
 * ```
 */
export const useUIStore = create<UIState>((set) => ({
  sidebarCollapsed: false,
  activeNav: 'dashboard',
  showNewTransactionModal: false,
  setActiveNav: (nav) => set({ activeNav: nav }),
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  openNewTransactionModal: () => set({ showNewTransactionModal: true }),
  closeNewTransactionModal: () => set({ showNewTransactionModal: false }),
}))

// Re-export shallow for convenience in components
export { shallow }
