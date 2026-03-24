import { useState } from 'react'

export function RevenueTrendChart() {
  const [timeframe, setTimeframe] = useState<'12months' | 'quarterly'>('12months')

  return (
    <section className="bg-surface-container-lowest rounded-xl p-10 border border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h4 className="text-xl font-semibold text-on-surface tracking-tight">Revenue Trends</h4>
          <p className="text-sm text-on-surface-variant">Net growth analysis for the current fiscal year</p>
        </div>
        <div className="flex bg-surface-container-low p-1 rounded-lg">
          <button
            onClick={() => setTimeframe('12months')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
              timeframe === '12months'
                ? 'bg-white text-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            12 Months
          </button>
          <button
            onClick={() => setTimeframe('quarterly')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
              timeframe === 'quarterly'
                ? 'bg-white text-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Quarterly
          </button>
        </div>
      </div>

      <div className="relative h-[320px] w-full">
        {/* SVG Chart */}
        <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0059bb" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <line x1="0" y1="50" x2="1000" y2="50" stroke="#e1e3e4" strokeDasharray="4" strokeWidth="1" />
          <line x1="0" y1="150" x2="1000" y2="150" stroke="#e1e3e4" strokeDasharray="4" strokeWidth="1" />
          <line x1="0" y1="250" x2="1000" y2="250" stroke="#e1e3e4" strokeDasharray="4" strokeWidth="1" />

          {/* Area Path */}
          <path
            d="M0,280 Q 100,220 200,240 T 400,160 T 600,120 T 800,80 T 1000,40 V 300 H 0 Z"
            fill="url(#chartGradient)"
          />

          {/* Line Path */}
          <path
            d="M0,280 Q 100,220 200,240 T 400,160 T 600,120 T 800,80 T 1000,40"
            fill="none"
            stroke="#0059bb"
            strokeLinecap="round"
            strokeWidth="4"
          />

          {/* Data Points */}
          <circle cx="200" cy="240" fill="#0059bb" r="5" className="drop-shadow-sm" />
          <circle cx="400" cy="160" fill="#0059bb" r="5" className="drop-shadow-sm" />
          <circle cx="600" cy="120" fill="#0059bb" r="5" className="drop-shadow-sm" />
          <circle cx="800" cy="80" fill="#0059bb" r="5" className="drop-shadow-sm" />
          <circle cx="1000" cy="40" fill="#0059bb" r="6" stroke="white" strokeWidth="2" className="drop-shadow-md" />
        </svg>

        {/* X-Axis Labels */}
        <div className="flex justify-between mt-6 px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
          <span>Jul 23</span>
          <span>Sep 23</span>
          <span>Nov 23</span>
          <span>Jan 24</span>
          <span>Mar 24</span>
          <span>May 24</span>
          <span>Jul 24</span>
        </div>
      </div>
    </section>
  )
}
