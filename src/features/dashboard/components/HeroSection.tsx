import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { useDashboardStore } from '@/store/dashboardStore'

export function HeroSection() {
  const { portfolioValue, growthPercentage } = useDashboardStore()

  const quickStats = [
    {
      label: 'Daily Change',
      value: '+$2,847.32',
      percentage: '+0.19%',
      positive: true,
    },
    {
      label: 'Monthly Returns',
      value: '+$48,291.00',
      percentage: '+3.26%',
      positive: true,
    },
    {
      label: 'YTD Returns',
      value: '+$142,847.00',
      percentage: '+10.66%',
      positive: true,
    },
  ]

  return (
    <section className="mb-12">
      <div className="flex items-center gap-8">
        {/* Left: Portfolio Value */}
        <div className="flex flex-col gap-1 flex-shrink-0">
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

        {/* Divider */}
        <div className="h-16 w-[1px] bg-surface-container flex-shrink-0"></div>

        {/* Right: Quick Stats */}
        <div className="flex items-center gap-4 flex-1">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface-container-lowest rounded-xl p-4 flex-1 min-w-[140px] border border-surface-container/50 hover:shadow-lg hover:shadow-on-surface/5 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold text-on-surface-variant/70 uppercase tracking-wider">
                  {stat.label}
                </span>
                {stat.positive ? (
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                ) : (
                  <ArrowDownRight className="w-3.5 h-3.5 text-error" />
                )}
              </div>
              <p className="text-lg font-bold text-on-surface mb-0.5">{stat.value}</p>
              <span
                className={`text-xs font-semibold ${
                  stat.positive ? 'text-primary' : 'text-error'
                }`}
              >
                {stat.percentage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
