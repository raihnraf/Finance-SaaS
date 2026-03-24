import { RegionalRevenueTable } from './RegionalRevenueTable'

interface Product {
  name: string
  revenue: string
  progress: number
  iconName: string
  color: string
}

const products: Product[] = [
  {
    name: 'Cloud Infrastructure Pro',
    revenue: '$1.8M',
    progress: 65,
    iconName: 'cloud',
    color: 'text-primary',
  },
  {
    name: 'Security Shield Plus',
    revenue: '$1.2M',
    progress: 45,
    iconName: 'security',
    color: 'text-secondary',
  },
  {
    name: 'Enterprise Analytics',
    revenue: '$0.7M',
    progress: 25,
    iconName: 'analytics',
    color: 'text-tertiary',
  },
]

export function RevenueByProduct() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/20 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-xl font-semibold text-on-surface tracking-tight">Revenue by Product</h4>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">
          more_horiz
        </span>
      </div>

      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.name} className="flex items-center gap-6">
            <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center">
              <span className={`material-symbols-outlined ${product.color}`}>{product.iconName}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold">{product.name}</span>
                <span className="text-sm font-bold tabular-nums">{product.revenue}</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-low rounded-full">
                <div className={`h-full bg-${product.color.replace('text-', '')} rounded-full`} style={{ width: `${product.progress}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-surface-container">
        <RegionalRevenueTable />
      </div>
    </div>
  )
}
