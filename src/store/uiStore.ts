import { create } from 'zustand'

interface UIState {
  sidebarCollapsed: boolean
  activeNav: string
  showNewTransactionModal: boolean
  setActiveNav: (nav: string) => void
  toggleSidebar: () => void
  openNewTransactionModal: () => void
  closeNewTransactionModal: () => void
}

export const useUIStore = create<UIState>((set) => ({
  sidebarCollapsed: false,
  activeNav: 'dashboard',
  showNewTransactionModal: false,
  setActiveNav: (nav) => set({ activeNav: nav }),
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  openNewTransactionModal: () => set({ showNewTransactionModal: true }),
  closeNewTransactionModal: () => set({ showNewTransactionModal: false }),
}))
