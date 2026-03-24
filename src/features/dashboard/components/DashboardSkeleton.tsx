/**
 * Skeleton loader for the dashboard page.
 * Shows a loading state while data is being fetched.
 * 
 * @example
 * ```tsx
 * const { data, isLoading } = useDashboardData()
 * 
 * if (isLoading) return <DashboardSkeleton />
 * ```
 */
export function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-1 flex-shrink-0">
          <div className="h-3 w-48 bg-surface-container-highest rounded"></div>
          <div className="h-16 w-80 bg-surface-container-highest rounded mt-2"></div>
        </div>
        <div className="h-16 w-[1px] bg-surface-container"></div>
        <div className="flex gap-4 flex-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 min-w-[140px]">
              <div className="bg-surface-container-lowest rounded-xl p-4">
                <div className="h-2 w-20 bg-surface-container-highest rounded mb-2"></div>
                <div className="h-6 w-24 bg-surface-container-highest rounded mb-1"></div>
                <div className="h-3 w-16 bg-surface-container-highest rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section Skeleton */}
      <div className="grid grid-cols-12 gap-8">
        {/* Revenue Chart Skeleton */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="h-6 w-40 bg-surface-container-highest rounded mb-2"></div>
              <div className="h-4 w-64 bg-surface-container-highest rounded"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-20 bg-surface-container-highest rounded-full"></div>
              <div className="h-8 w-24 bg-surface-container-highest rounded-full"></div>
            </div>
          </div>
          <div className="h-64 w-full bg-surface-container-low rounded-lg"></div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="h-3 w-24 bg-surface-container-highest rounded mb-2"></div>
                <div className="h-6 w-16 bg-surface-container-highest rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Cash Flow Chart Skeleton */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl p-8">
          <div className="h-6 w-32 bg-surface-container-highest rounded mb-2"></div>
          <div className="h-4 w-48 bg-surface-container-highest rounded mb-8"></div>
          <div className="h-48 w-full bg-surface-container-low rounded-lg"></div>
          <div className="space-y-4 mt-6">
            <div className="flex justify-between">
              <div className="h-4 w-32 bg-surface-container-highest rounded"></div>
              <div className="h-4 w-20 bg-surface-container-highest rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-surface-container-highest rounded"></div>
              <div className="h-4 w-20 bg-surface-container-highest rounded"></div>
            </div>
          </div>
        </div>

        {/* Transactions Table Skeleton */}
        <div className="col-span-12 bg-surface-container-lowest rounded-xl p-8">
          <div className="h-8 w-64 bg-surface-container-highest rounded mb-2"></div>
          <div className="h-5 w-96 bg-surface-container-highest rounded mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="h-12 w-12 bg-surface-container-highest rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-48 bg-surface-container-highest rounded"></div>
                  <div className="h-3 w-32 bg-surface-container-highest rounded"></div>
                </div>
                <div className="h-8 w-24 bg-surface-container-highest rounded"></div>
                <div className="h-8 w-20 bg-surface-container-highest rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
