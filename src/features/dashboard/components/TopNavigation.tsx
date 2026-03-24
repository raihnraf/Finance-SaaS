import { Search, Bell, HelpCircle, ChevronDown, Settings } from 'lucide-react'

export function TopNavigation() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 backdrop-blur-xl bg-white/80 z-40 flex items-center justify-between px-8 border-none">
      {/* Search */}
      <div className="flex items-center flex-1 max-w-2xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
            placeholder="Search transactions, assets, or reports..."
            type="text"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="flex items-center gap-4 text-slate-600">
          <button className="hover:text-primary transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>
          <button className="hover:text-primary transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>

        {/* Metrics */}
        <div className="flex items-center gap-6 mr-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Days to Close</span>
            <span className="text-xs font-bold text-on-surface">14.2 Days</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Next Payout</span>
            <span className="text-xs font-bold text-primary">In 3 Days</span>
          </div>
        </div>

        <div className="h-8 w-[1px] bg-slate-200"></div>

        {/* Export Button */}
        <button className="bg-primary-fixed-dim text-on-primary-fixed-variant px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-fixed transition-colors">
          Export Data
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200">
          <button className="flex items-center gap-3 hover:bg-surface-container-low rounded-full pr-2 pl-1 py-1 transition-colors group">
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-semibold text-sm shadow-lg">
              JD
            </div>

            {/* User Info */}
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                John Doe
              </span>
              <span className="text-[10px] text-on-surface-variant">Admin</span>
            </div>

            {/* Dropdown Arrow */}
            <ChevronDown className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
          </button>

          {/* Settings */}
          <button className="hover:text-primary transition-colors text-slate-600">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
