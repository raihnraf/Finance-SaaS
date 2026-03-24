import { useState } from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { TrendingUp, Calendar, UserMinus, Cloud, Shield, BarChart3, Building2, Activity, ArrowRight } from 'lucide-react'

export function RevenueDashboard() {
  const [timeframe, setTimeframe] = useState<'12months' | 'quarterly'>('12months')

  const revenueData = [
    { month: 'Jul 23', revenue: 3200000 },
    { month: 'Sep 23', revenue: 3400000 },
    { month: 'Nov 23', revenue: 3550000 },
    { month: 'Jan 24', revenue: 3700000 },
    { month: 'Mar 24', revenue: 3900000 },
    { month: 'May 24', revenue: 4050000 },
    { month: 'Jul 24', revenue: 4200000 },
  ]

  const products = [
    { name: 'Cloud Infrastructure Pro', revenue: '$1.8M', percentage: 65, color: 'bg-primary', icon: Cloud },
    { name: 'Security Shield Plus', revenue: '$1.2M', percentage: 45, color: 'bg-secondary', icon: Shield },
    { name: 'Enterprise Analytics', revenue: '$0.7M', percentage: 25, color: 'bg-tertiary', icon: BarChart3 },
  ]

  const regions = [
    { name: 'North America', users: '12,402', churn: '0.8%', revenue: '$2.1M' },
    { name: 'Europe (EMEA)', users: '8,190', churn: '1.4%', revenue: '$1.4M' },
    { name: 'Asia Pacific', users: '4,550', churn: '2.1%', revenue: '$0.7M' },
  ]

  const topExpansions = [
    { company: 'Vortex Systems', type: 'Expansion Pack - Tier 4', arr: '+$45,000 ARR', time: '2h ago', logo: 'VS' },
    { company: 'CloudCore Inc.', type: 'Annual Renewal', arr: '+$128,000 ARR', time: '5h ago', logo: 'CC' },
    { company: 'Global Logistics', type: 'New Customer Acquisition', arr: '+$210,000 ARR', time: 'Yesterday', logo: 'GL' },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <section className="flex justify-between items-end">
        <div>
          <h2 className="text-sm font-semibold text-on-surface-variant uppercase tracking-[0.2em] mb-2">Revenue Performance</h2>
          <h3 className="text-5xl font-semibold tracking-tight text-on-surface">Financial Oversight</h3>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant rounded-lg font-medium hover:bg-surface-container-high transition-colors text-sm">
            Download PDF
          </button>
          <button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-medium shadow-sm hover:bg-primary-container transition-colors text-sm">
            Create Forecast
          </button>
        </div>
      </section>

      {/* Metric Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ARR Card */}
        <div className="bg-surface-container-lowest p-8 rounded-xl transition-all hover:shadow-2xl hover:shadow-on-surface/5 group border border-transparent hover:border-outline-variant/20">
          <div className="flex justify-between items-start mb-6">
            <span className="p-3 bg-primary-fixed text-primary rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </span>
            <span className="text-xs font-bold text-primary bg-primary-fixed/30 px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">Annual Recurring Revenue</p>
          <h4 className="text-4xl font-semibold tabular-nums tracking-tight">$4.2M</h4>
          <div className="mt-6 h-1 bg-surface-container-low rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[75%]"></div>
          </div>
        </div>

        {/* MRR Card */}
        <div className="bg-surface-container-lowest p-8 rounded-xl transition-all hover:shadow-2xl hover:shadow-on-surface/5 group border border-transparent hover:border-outline-variant/20">
          <div className="flex justify-between items-start mb-6">
            <span className="p-3 bg-secondary-fixed text-secondary rounded-lg">
              <Calendar className="w-6 h-6" />
            </span>
            <span className="text-xs font-bold text-secondary bg-secondary-fixed/30 px-2 py-1 rounded-full">+4.2%</span>
          </div>
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">Monthly Recurring Revenue</p>
          <h4 className="text-4xl font-semibold tabular-nums tracking-tight">$352,400</h4>
          <div className="mt-6 flex items-center gap-2">
            <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Target: $400k</span>
            <div className="flex-1 h-1 bg-surface-container-low rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-[88%]"></div>
            </div>
          </div>
        </div>

        {/* Churn Rate Card */}
        <div className="bg-surface-container-lowest p-8 rounded-xl transition-all hover:shadow-2xl hover:shadow-on-surface/5 group border border-transparent hover:border-outline-variant/20">
          <div className="flex justify-between items-start mb-6">
            <span className="p-3 bg-error-container text-error rounded-lg">
              <UserMinus className="w-6 h-6" />
            </span>
            <span className="text-xs font-bold text-error bg-error-container/30 px-2 py-1 rounded-full">-0.8%</span>
          </div>
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">Churn Rate</p>
          <h4 className="text-4xl font-semibold tabular-nums tracking-tight">1.24%</h4>
          <p className="mt-6 text-xs text-on-surface-variant">0.4% lower than previous industry benchmark.</p>
        </div>
      </section>

      {/* Revenue Trend Chart */}
      <section className="bg-surface-container-lowest rounded-xl p-10 border border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h4 className="text-xl font-semibold text-on-surface tracking-tight">Revenue Trends</h4>
            <p className="text-sm text-on-surface-variant">Net growth analysis for the current fiscal year</p>
          </div>
          <div className="flex bg-surface-container-low p-1 rounded-lg">
            <button
              onClick={() => setTimeframe('12months')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                timeframe === '12months' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              12 Months
            </button>
            <button
              onClick={() => setTimeframe('quarterly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                timeframe === 'quarterly' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Quarterly
            </button>
          </div>
        </div>

        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white/90 backdrop-blur-sm border border-primary/20 p-3 rounded-lg shadow-xl">
                        <p className="text-sm font-bold">${(payload[0].value as number).toLocaleString()}</p>
                        <p className="text-xs text-on-surface-variant">{payload[0].payload.month}</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#0059bb" strokeWidth={3} dot={{ fill: '#0059bb', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Revenue by Product & Top Expansions */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue by Product */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/20">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-xl font-semibold text-on-surface tracking-tight">Revenue by Product</h4>
          </div>

          <div className="space-y-6 mb-10">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <div key={product.name} className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${product.color === 'bg-primary' ? 'text-primary' : product.color === 'bg-secondary' ? 'text-secondary' : 'text-tertiary'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold">{product.name}</span>
                      <span className="text-sm font-bold tabular-nums">{product.revenue}</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-low rounded-full">
                      <div className={`h-full ${product.color} rounded-full`} style={{ width: `${product.percentage}%` }}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Regional Breakdown Table */}
          <div className="pt-8 border-t border-surface-container">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-on-surface-variant border-b border-surface-container">
                  <th className="pb-4 font-bold">Region</th>
                  <th className="pb-4 font-bold">Active Users</th>
                  <th className="pb-4 font-bold">Churn</th>
                  <th className="pb-4 font-bold text-right">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {regions.map((region) => (
                  <tr key={region.name}>
                    <td className="py-4 font-medium">{region.name}</td>
                    <td className="py-4 tabular-nums text-on-surface-variant">{region.users}</td>
                    <td className="py-4 text-on-surface-variant">{region.churn}</td>
                    <td className="py-4 text-right font-semibold tabular-nums">{region.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Expansions */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/20 h-full">
            <h4 className="text-xl font-semibold text-on-surface tracking-tight mb-8">Top Expansions</h4>
            <div className="space-y-8">
              {topExpansions.map((expansion) => (
                <div key={expansion.company} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white font-semibold text-sm">
                    {expansion.logo}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-on-surface">{expansion.company}</p>
                    <p className="text-xs text-on-surface-variant">{expansion.type}</p>
                    <p className="mt-1 text-xs font-bold text-primary">{expansion.arr}</p>
                  </div>
                  <div className="text-[10px] font-bold text-on-surface-variant uppercase">{expansion.time}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-surface-container-low p-6 rounded-lg relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Growth Prediction</p>
                <p className="text-lg font-semibold leading-tight mb-4 text-on-surface">
                  Expected 14% Q4 growth based on current pipeline.
                </p>
                <button className="text-xs font-bold text-on-surface border-b-2 border-primary inline-flex items-center gap-1 hover:text-primary transition-colors">
                  View full report <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <Activity className="absolute -right-4 -bottom-4 w-20 h-20 text-surface-container-high opacity-30 select-none group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
