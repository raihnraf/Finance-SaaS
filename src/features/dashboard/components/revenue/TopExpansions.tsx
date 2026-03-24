interface ExpansionDeal {
  client: string
  type: string
  amount: string
  time: string
  iconBgColor: string
  iconName?: string
}

const deals: ExpansionDeal[] = [
  {
    client: 'Vortex Systems',
    type: 'Expansion Pack - Tier 4',
    amount: '+$45,000 ARR',
    time: '2h ago',
    iconBgColor: 'bg-primary-container',
  },
  {
    client: 'CloudCore Inc.',
    type: 'Annual Renewal',
    amount: '+$128,000 ARR',
    time: '5h ago',
    iconBgColor: 'bg-secondary-container',
  },
  {
    client: 'Global Logistics',
    type: 'New Customer Acquisition',
    amount: '+$210,000 ARR',
    time: 'Yesterday',
    iconBgColor: 'bg-surface-container',
    iconName: 'business',
  },
]

export function TopExpansions() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/20 h-full">
      <h4 className="text-xl font-semibold text-on-surface tracking-tight mb-8">Top Expansions</h4>

      <div className="space-y-8">
        {deals.map((deal) => (
          <div key={deal.client} className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-10 h-10 rounded-full ${deal.iconBgColor} overflow-hidden flex items-center justify-center`}>
              {deal.iconName ? (
                <span className="material-symbols-outlined text-on-surface-variant">{deal.iconName}</span>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-on-surface">{deal.client}</p>
              <p className="text-xs text-on-surface-variant">{deal.type}</p>
              <p className="mt-1 text-xs font-bold text-primary">{deal.amount}</p>
            </div>
            <div className="text-[10px] font-bold text-on-surface-variant uppercase">{deal.time}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-surface-container-low p-6 rounded-lg relative overflow-hidden group">
        <div className="relative z-10">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
            Growth Prediction
          </p>
          <p className="text-lg font-semibold leading-tight mb-4 text-on-surface">
            Expected 14% Q4 growth based on current pipeline.
          </p>
          <a className="text-xs font-bold text-on-surface border-b-2 border-primary inline-flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
            View full report <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-surface-container-high text-8xl opacity-30 select-none group-hover:scale-110 transition-transform">
          auto_graph
        </span>
      </div>
    </div>
  )
}
