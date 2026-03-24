import { Search, Filter, X } from 'lucide-react'
import { useState } from 'react'

interface TransactionFiltersProps {
  onSearch: (query: string) => void
  onCategoryFilter: (category: string) => void
  onStatusFilter: (status: string) => void
  searchQuery: string
  selectedCategory: string
  selectedStatus: string
}

const categories = ['All', 'Infrastructure', 'Payment Gateway', 'Software', 'Revenue', 'SaaS']
const statuses = ['All', 'Completed', 'Pending', 'Failed']

export function TransactionFilters({
  onSearch,
  onCategoryFilter,
  onStatusFilter,
  searchQuery,
  selectedCategory,
  selectedStatus
}: TransactionFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)

  const clearFilters = () => {
    onSearch('')
    onCategoryFilter('All')
    onStatusFilter('All')
  }

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedStatus !== 'All'

  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/60"
          />
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-colors ${
            hasActiveFilters
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
          }`}
        >
          <Filter className="w-5 h-5" />
          Filters
          {hasActiveFilters && (
            <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
              {[selectedCategory !== 'All', selectedStatus !== 'All', searchQuery].filter(Boolean).length}
            </span>
          )}
        </button>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-6 py-3 bg-surface-container-low text-on-surface-variant rounded-xl font-medium text-sm hover:bg-surface-container transition-colors"
          >
            <X className="w-5 h-5" />
            Clear
          </button>
        )}
      </div>

      {/* Expandable Filter Section */}
      {showFilters && (
        <div className="mt-4 p-6 bg-surface-container-low rounded-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => onCategoryFilter(category)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => onStatusFilter(status)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors ${
                      selectedStatus === status
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
