import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useDashboardStore } from '@/store/dashboardStore'

interface RevenueDataPoint {
  month: string
  revenue: number
}

export function RevenueGrowthChart() {
  const { timeframe } = useDashboardStore()

  const data: RevenueDataPoint[] = [
    { month: 'May', revenue: 150000 },
    { month: 'Jun', revenue: 180000 },
    { month: 'Jul', revenue: 210000 },
    { month: 'Aug', revenue: 242100 },
  ]

  return (
    <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col gap-8 transition-transform hover:shadow-2xl hover:shadow-on-surface/5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-on-surface">Revenue Growth</h3>
          <p className="text-sm text-on-surface-variant">Performance metrics for the fiscal quarter Q3</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-secondary-container/20 text-on-secondary-container text-xs font-bold rounded-full">
            MONTHLY
          </span>
          <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-bold rounded-full cursor-pointer hover:bg-surface-container-high transition-colors">
            QUARTERLY
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 w-full relative group">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0059bb" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#0059bb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white/90 backdrop-blur-sm border border-primary/20 p-3 rounded-lg shadow-xl">
                      <p className="text-[10px] uppercase tracking-wider font-bold text-primary">
                        {payload[0].payload.month} Revenue
                      </p>
                      <p className="text-sm font-bold">
                        ${payload[0].value.toLocaleString()}
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#0059bb"
              strokeWidth={3}
              fill="url(#line-gradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-4 border-t border-surface-container pt-6">
        <div>
          <p className="text-xs text-on-surface-variant font-medium">New Customers</p>
          <p className="text-lg font-bold">1,204</p>
        </div>
        <div>
          <p className="text-xs text-on-surface-variant font-medium">Churn Rate</p>
          <p className="text-lg font-bold">1.2%</p>
        </div>
        <div>
          <p className="text-xs text-on-surface-variant font-medium">LTV</p>
          <p className="text-lg font-bold">$4,820</p>
        </div>
        <div>
          <p className="text-xs text-on-surface-variant font-medium">CAC</p>
          <p className="text-lg font-bold">$142</p>
        </div>
      </div>
    </div>
  )
}
