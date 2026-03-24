export function CashFlowChart() {
  const data = [
    { month: 'MAY', inflow: 84200, outflow: 31405 },
    { month: 'JUN', inflow: 92000, outflow: 35000 },
    { month: 'JUL', inflow: 98000, outflow: 28000 },
    { month: 'AUG', inflow: 88000, outflow: 32000 },
  ]

  const maxValue = Math.max(...data.map(d => Math.max(d.inflow, d.outflow)))

  return (
    <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col transition-transform hover:shadow-2xl hover:shadow-on-surface/5">
      <h3 className="text-xl font-semibold text-on-surface mb-1">Cash Flow</h3>
      <p className="text-sm text-on-surface-variant mb-8">Inflow vs Outflow analysis</p>

      <div className="flex-1 flex items-end justify-between gap-3 min-h-[200px]">
        {data.map((item) => {
          const inflowHeight = (item.inflow / maxValue) * 100
          const outflowHeight = (item.outflow / maxValue) * 100

          return (
            <div key={item.month} className="w-full flex flex-col items-center gap-2">
              <div className="w-full bg-surface-container-low rounded-t-md h-40 group relative">
                <div
                  className="absolute bottom-0 w-full bg-primary rounded-t-md transition-all group-hover:h-[85%]"
                  style={{ height: `${inflowHeight}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant">{item.month}</span>
            </div>
          )
        })}
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm font-medium">Operating Inflow</span>
          </div>
          <span className="text-sm font-bold">+$84,200</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
            <span className="text-sm font-medium">Expenses</span>
          </div>
          <span className="text-sm font-bold">-$31,405</span>
        </div>
      </div>
    </div>
  )
}
