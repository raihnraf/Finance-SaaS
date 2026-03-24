import { TrendingUp } from 'lucide-react'
import { useDashboardStore } from '@/store/dashboardStore'

export function HeroSection() {
  const { portfolioValue, growthPercentage } = useDashboardStore()

  return (
    <section className="mb-12">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant/60">
          Total Portfolio Value
        </span>
        <div className="flex items-baseline gap-4">
          <h2 className="text-[3.5rem] font-semibold tracking-tight text-on-surface leading-none">
            ${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h2>
          <span className="flex items-center text-primary font-bold text-lg">
            <TrendingUp className="w-5 h-5 mr-1" />
            +{growthPercentage}%
          </span>
        </div>
      </div>
    </section>
  )
}
