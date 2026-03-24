import { ArrowDown, ArrowUp, Download, TrendingUp, TrendingDown, Calendar, DollarSign } from 'lucide-react'
import { useState, useMemo } from 'react'

export function CashFlowDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<'6m' | '12m' | 'ytd'>('12m')

  // Realistic monthly cash flow data for enterprise SaaS company
  const monthlyData = [
    { month: 'Jan', inflow: 84200, outflow: 62300, netCashFlow: 21900 },
    { month: 'Feb', inflow: 78500, outflow: 58100, netCashFlow: 20400 },
    { month: 'Mar', inflow: 92300, outflow: 68400, netCashFlow: 23900 },
    { month: 'Apr', inflow: 88700, outflow: 61200, netCashFlow: 27500 },
    { month: 'May', inflow: 95400, outflow: 72800, netCashFlow: 22600 },
    { month: 'Jun', inflow: 102300, outflow: 65900, netCashFlow: 36400 },
    { month: 'Jul', inflow: 89100, outflow: 70200, netCashFlow: 18900 },
    { month: 'Aug', inflow: 96800, outflow: 67800, netCashFlow: 29000 },
    { month: 'Sep', inflow: 105200, outflow: 74100, netCashFlow: 31100 },
    { month: 'Oct', inflow: 112800, outflow: 79500, netCashFlow: 33300 },
    { month: 'Nov', inflow: 108500, outflow: 76300, netCashFlow: 32200 },
    { month: 'Dec', inflow: 118400, outflow: 82100, netCashFlow: 36300 },
  ]

  // Calculate totals
  const totals = useMemo(() => {
    const totalInflow = monthlyData.reduce((sum, m) => sum + m.inflow, 0)
    const totalOutflow = monthlyData.reduce((sum, m) => sum + m.outflow, 0)
    const totalNetCashFlow = monthlyData.reduce((sum, m) => sum + m.netCashFlow, 0)
    const avgMonthlyBurn = totalOutflow / monthlyData.length
    const avgMonthlyRevenue = totalInflow / monthlyData.length

    return {
      totalInflow,
      totalOutflow,
      totalNetCashFlow,
      avgMonthlyBurn,
      avgMonthlyRevenue,
      cashFlowMargin: ((totalNetCashFlow / totalInflow) * 100).toFixed(1),
    }
  }, [monthlyData])

  // Find max values for chart scaling
  const maxInflow = Math.max(...monthlyData.map(d => d.inflow))
  const maxOutflow = Math.max(...monthlyData.map(d => d.outflow))
  const maxValue = Math.max(maxInflow, maxOutflow)

  // Large cash flow movements
  const largeMovements = [
    {
      name: 'Enterprise Contract - Microsoft',
      category: 'Subscription Revenue',
      amount: 125000,
      type: 'inflow' as const,
      date: 'Dec 15, 2023',
      logo: 'MS',
    },
    {
      name: 'AWS Infrastructure Quarterly',
      category: 'Cloud Operations',
      amount: -48200,
      type: 'outflow' as const,
      date: 'Dec 1, 2023',
      logo: 'AW',
    },
    {
      name: 'Series B Funding Round',
      category: 'Investment Capital',
      amount: 2500000,
      type: 'inflow' as const,
      date: 'Nov 20, 2023',
      logo: 'SB',
    },
    {
      name: 'Office Lease - NYC HQ',
      category: 'Real Estate',
      amount: -36500,
      type: 'outflow' as const,
      date: 'Dec 1, 2023',
      logo: 'NY',
    },
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatK = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`
    }
    return `$${value}`
  }

  return (
    <div className="pt-28 px-12 pb-20">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-on-surface mb-2">
            Cash Flow Dashboard
          </h2>
          <p className="text-on-surface-variant font-medium">
            Track your enterprise liquidity and cash position in real-time.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-surface-container-low p-1 rounded-xl">
            {(['6m', '12m', 'ytd'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedPeriod === period
                    ? 'bg-white text-on-surface shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {period === '6m' ? '6 Months' : period === '12m' ? '12 Months' : 'YTD'}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-surface-container-lowest text-on-surface-variant rounded-xl border border-outline-variant/20 font-medium text-sm hover:bg-surface-container-low transition-colors">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        {/* Total Inflow */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Total Inflow
                </p>
                <p className="text-xs text-on-surface-variant">Annual revenue collected</p>
              </div>
            </div>
          </div>
          <p className="text-3xl font-bold text-on-surface tabular-nums">
            {formatCurrency(totals.totalInflow)}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary">+18.2%</span>
            <span className="text-xs text-on-surface-variant">vs last year</span>
          </div>
        </div>

        {/* Total Outflow */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-tertiary/10 rounded-xl flex items-center justify-center">
                <ArrowUp className="w-5 h-5 text-tertiary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Total Outflow
                </p>
                <p className="text-xs text-on-surface-variant">Annual expenses paid</p>
              </div>
            </div>
          </div>
          <p className="text-3xl font-bold text-on-surface tabular-nums">
            {formatCurrency(totals.totalOutflow)}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <TrendingDown className="w-4 h-4 text-tertiary" />
            <span className="text-xs font-semibold text-tertiary">-8.4%</span>
            <span className="text-xs text-on-surface-variant">burn rate reduction</span>
          </div>
        </div>

        {/* Net Cash Flow */}
        <div className="col-span-12 md:col-span-4 bg-primary text-on-primary p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                  Net Cash Flow
                </p>
                <p className="text-xs opacity-80">Cash position change</p>
              </div>
            </div>
          </div>
          <p className="text-3xl font-bold tabular-nums">
            {formatCurrency(totals.totalNetCashFlow)}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-semibold">{totals.cashFlowMargin}%</span>
            <span className="text-xs opacity-80">cash flow margin</span>
          </div>
        </div>
      </div>

      {/* Main Chart Section */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        {/* Monthly Cash Flow Chart */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-1">Monthly Cash Flow</h3>
              <p className="text-sm text-on-surface-variant">
                Inflow vs Outflow comparison with net cash flow trend
              </p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-xs font-semibold text-on-surface-variant uppercase">Inflow</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-tertiary rounded-full"></span>
                <span className="text-xs font-semibold text-on-surface-variant uppercase">Outflow</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                <span className="text-xs font-semibold text-on-surface-variant uppercase">Net Flow</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-80 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs font-medium text-on-surface-variant">
              <span>{formatK(maxValue)}</span>
              <span>{formatK(maxValue * 0.75)}</span>
              <span>{formatK(maxValue * 0.5)}</span>
              <span>{formatK(maxValue * 0.25)}</span>
              <span>$0</span>
            </div>

            {/* Chart area */}
            <div className="ml-16 h-full flex items-end justify-between gap-2 pb-8 border-l border-b border-outline-variant/20">
              {monthlyData.map((data, index) => {
                const inflowHeight = (data.inflow / maxValue) * 100
                const outflowHeight = (data.outflow / maxValue) * 100
                const netCashFlowHeight = (Math.abs(data.netCashFlow) / maxValue) * 100

                return (
                  <div key={data.month} className="flex-1 flex flex-col items-center gap-2 group h-full">
                    {/* Net Cash Flow Indicator */}
                    <div className="w-full text-center mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-bold text-emerald-600 tabular-nums whitespace-nowrap">
                        +{formatK(data.netCashFlow)}
                      </span>
                    </div>

                    {/* Stacked Bars */}
                    <div className="w-full flex-1 flex flex-col justify-end gap-0.5">
                      {/* Inflow Bar (top) */}
                      <div
                        className="w-full bg-primary rounded-t-sm transition-all hover:bg-primary/90 relative group/bar"
                        style={{ height: `${(data.inflow / maxValue) * 80}%` }}
                      >
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-primary opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap bg-white/80 px-1 rounded">
                          {formatK(data.inflow)}
                        </div>
                      </div>
                      {/* Outflow Bar (bottom) */}
                      <div
                        className="w-full bg-tertiary rounded-b-sm transition-all hover:bg-tertiary/90 relative group/bar"
                        style={{ height: `${(data.outflow / maxValue) * 80}%` }}
                      >
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-tertiary opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap bg-white/80 px-1 rounded">
                          {formatK(data.outflow)}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                      {data.month}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Monthly Breakdown Table */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-on-surface mb-6">Monthly Breakdown</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {monthlyData.map((data) => (
              <div
                key={data.month}
                className="p-3 bg-surface-container-lowest rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-on-surface-variant uppercase">
                    {data.month}
                  </span>
                  <span
                    className={`text-xs font-bold tabular-nums ${
                      data.netCashFlow > 0 ? 'text-emerald-600' : 'text-rose-600'
                    }`}
                  >
                    {data.netCashFlow > 0 ? '+' : ''}
                    {formatK(data.netCashFlow)}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-on-surface-variant">Inflow</span>
                    <span className="font-semibold text-primary">{formatK(data.inflow)}</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${(data.inflow / maxInflow) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-on-surface-variant">Outflow</span>
                    <span className="font-semibold text-tertiary">{formatK(data.outflow)}</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                      className="h-full bg-tertiary"
                      style={{ width: `${(data.outflow / maxOutflow) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Movements */}
      <div className="bg-surface-container-lowest p-8 rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-bold text-on-surface">Large Cash Movements</h3>
            <p className="text-sm text-on-surface-variant">Significant transactions affecting cash position</p>
          </div>
          <button className="text-xs font-semibold text-primary hover:underline">
            View All Transactions →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {largeMovements.map((movement) => (
            <div
              key={movement.name}
              className="p-4 bg-surface-container-low rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary font-bold text-xs">
                  {movement.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-on-surface truncate">{movement.name}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-medium">
                    {movement.category}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-on-surface-variant">{movement.date}</span>
                <span
                  className={`text-sm font-bold tabular-nums ${
                    movement.type === 'inflow' ? 'text-primary' : 'text-tertiary'
                  }`}
                >
                  {movement.amount > 0 ? '+' : ''}
                  {formatCurrency(movement.amount)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
