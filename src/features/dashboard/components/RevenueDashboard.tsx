import { RevenueTrendChart } from './revenue/RevenueTrendChart'
import { RevenueMetricCard } from './revenue/RevenueMetricCard'
import { RevenueByProduct } from './revenue/RevenueByProduct'
import { RegionalRevenueTable } from './revenue/RegionalRevenueTable'
import { TopExpansions } from './revenue/TopExpansions'

export function RevenueDashboard() {
  return (
    <div className="p-10 space-y-8">
      {/* Hero Header */}
      <section className="flex justify-between items-end">
        <div>
          <h2 className="text-sm font-semibold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
            Revenue Performance
          </h2>
          <h3 className="text-5xl font-semibold tracking-tight text-on-surface">
            Financial Oversight
          </h3>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant rounded-lg font-medium hover:bg-surface-container-high transition-colors text-sm">
            Download PDF
          </button>
          <button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-medium shadow-sm hover:opacity-95 transition-opacity text-sm">
            Create Forecast
          </button>
        </div>
      </section>

      {/* Metric Cards (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RevenueMetricCard
          iconName="trending_up"
          percentage="+12.5%"
          percentageType="positive"
          title="Annual Recurring Revenue"
          value="$4.2M"
          progress={75}
          progressColor="bg-primary"
          iconBgColor="bg-primary-fixed"
          iconTextColor="text-primary"
        />
        <RevenueMetricCard
          iconName="calendar_month"
          percentage="+4.2%"
          percentageType="positive"
          title="Monthly Recurring Revenue"
          value="$352,400"
          progress={88}
          progressColor="bg-secondary"
          target="$400k"
          iconBgColor="bg-secondary-fixed"
          iconTextColor="text-secondary"
        />
        <RevenueMetricCard
          iconName="person_remove"
          percentage="-0.8%"
          percentageType="negative"
          title="Churn Rate"
          value="1.24%"
          description="0.4% lower than previous industry benchmark."
          iconBgColor="bg-error-container"
          iconTextColor="text-error"
        />
      </section>

      {/* Revenue Trend Chart Section */}
      <RevenueTrendChart />

      {/* Bottom Section: Revenue by Product & Breakdowns */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue by Product */}
        <div className="lg:col-span-8">
          <RevenueByProduct />
        </div>

        {/* Recent Activity / High-Value Deals */}
        <div className="lg:col-span-4">
          <TopExpansions />
        </div>
      </section>
    </div>
  )
}
