import { ReactNode } from 'react'
import { SideNavigation } from './SideNavigation'
import { TopNavigation } from './TopNavigation'

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <SideNavigation />
      <TopNavigation />
      <main className="ml-64 mt-16 p-10 min-h-screen bg-surface">
        {children}
      </main>
    </>
  )
}
