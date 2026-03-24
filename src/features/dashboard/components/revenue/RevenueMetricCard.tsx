interface RevenueMetricCardProps {
  iconName: string
  percentage: string
  percentageType: 'positive' | 'negative'
  title: string
  value: string
  progress?: number
  progressColor?: string
  target?: string
  description?: string
  iconBgColor: string
  iconTextColor: string
}

export function RevenueMetricCard({
  iconName,
  percentage,
  percentageType,
  title,
  value,
  progress,
  progressColor = 'bg-primary',
  target,
  description,
  iconBgColor,
  iconTextColor,
}: RevenueMetricCardProps) {
  const percentageColorClass =
    percentageType === 'positive'
      ? percentage.startsWith('-')
        ? 'text-error bg-error-container/30'
        : 'text-primary bg-primary-fixed/30'
      : 'text-error bg-error-container/30'

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl transition-all hover:shadow-[0px_20px_40px_rgba(25,28,29,0.04)] group border border-transparent hover:border-outline-variant/20">
      <div className="flex justify-between items-start mb-6">
        <span className={`p-3 ${iconBgColor} ${iconTextColor} rounded-lg material-symbols-outlined`}>
          {iconName}
        </span>
        <span className={`text-xs font-bold ${percentageColorClass} px-2 py-1 rounded-full`}>{percentage}</span>
      </div>
      <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">{title}</p>
      <h4 className="text-4xl font-semibold tabular-nums tracking-tight">{value}</h4>
      {progress !== undefined && (
        <div className="mt-6 h-1 bg-surface-container-low rounded-full overflow-hidden">
          <div className={`h-full ${progressColor}`} style={{ width: `${progress}%` }}></div>
        </div>
      )}
      {target && (
        <div className="mt-6 flex items-center gap-2">
          <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Target: {target}</span>
          <div className="flex-1 h-1 bg-surface-container-low rounded-full overflow-hidden">
            <div className={`h-full ${progressColor}`} style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
      {description && <p className="mt-6 text-xs text-on-surface-variant">{description}</p>}
    </div>
  )
}
