import { AlertTriangle, RefreshCw } from 'lucide-react'

interface ErrorStateProps {
  error: Error | null
  onRetry?: () => void
  title?: string
  message?: string
}

/**
 * Error state component for displaying fetch errors.
 * 
 * @example
 * ```tsx
 * const { error, refetch } = useDashboardData()
 * 
 * if (error) return <ErrorState error={error} onRetry={() => refetch()} />
 * ```
 */
export function ErrorState({ 
  error, 
  onRetry, 
  title = 'Failed to load data',
  message = 'Something went wrong while fetching the data. Please try again.'
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-surface-container-lowest rounded-xl border border-error/20">
      <div className="w-16 h-16 bg-error-container rounded-full flex items-center justify-center mb-4">
        <AlertTriangle className="w-8 h-8 text-error" />
      </div>
      
      <h3 className="text-xl font-semibold text-on-surface mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-on-surface-variant text-center mb-6 max-w-md">
        {message}
      </p>
      
      {error && (
        <p className="text-xs text-error bg-error-container/20 px-4 py-2 rounded-lg mb-6 font-mono">
          {error.message}
        </p>
      )}
      
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  )
}
