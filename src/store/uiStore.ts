import { create } from 'zustand'

interface UIState {
  sidebarCollapsed: boolean
  activeNav: string
  setActiveNav: (nav: string) => void
  toggleSidebar: () => void
}

export const useUIStore = create<UIState>((set) => ({
  sidebarCollapsed: false,
  activeNav: 'dashboard',
  setActiveNav: (nav) => set({ activeNav: nav }),
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}))
