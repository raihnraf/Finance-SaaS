interface RegionData {
  region: string
  activeUsers: string
  churn: string
  revenue: string
}

const regions: RegionData[] = [
  {
    region: 'North America',
    activeUsers: '12,402',
    churn: '0.8%',
    revenue: '$2.1M',
  },
  {
    region: 'Europe (EMEA)',
    activeUsers: '8,190',
    churn: '1.4%',
    revenue: '$1.4M',
  },
  {
    region: 'Asia Pacific',
    activeUsers: '4,550',
    churn: '2.1%',
    revenue: '$0.7M',
  },
]

export function RegionalRevenueTable() {
  return (
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
          <tr key={region.region}>
            <td className="py-4 font-medium">{region.region}</td>
            <td className="py-4 tabular-nums text-on-surface-variant">{region.activeUsers}</td>
            <td className="py-4 text-on-surface-variant">{region.churn}</td>
            <td className="py-4 text-right font-semibold tabular-nums">{region.revenue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
