import { Sparkles, Building2, Shield, ArrowRight } from 'lucide-react'

export function QuickActions() {
  return (
    <>
      {/* Automate Expenses Card */}
      <div className="col-span-12 md:col-span-4 bg-primary rounded-xl p-8 text-white relative overflow-hidden group">
        <div className="relative z-10">
          <h4 className="text-lg font-bold mb-2">Automate Expenses</h4>
          <p className="text-sm text-primary-fixed-dim mb-6 leading-relaxed">
            Let AI categorize your transactions and save up to 15 hours monthly.
          </p>
          <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-10 scale-150 rotate-12">
          <Sparkles className="w-[120px] h-[120px]" />
        </div>
      </div>

      {/* Linked Accounts Card */}
      <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-low transition-colors">
        <div>
          <Building2 className="w-6 h-6 text-primary mb-4" />
          <h4 className="text-lg font-bold text-on-surface mb-2">Linked Accounts</h4>
          <p className="text-sm text-on-surface-variant">
            Manage 8 external financial institutions and banks.
          </p>
        </div>
        <ArrowRight className="w-5 h-5 self-end text-slate-300 group-hover:text-primary transition-colors" />
      </div>

      {/* Security Audit Card */}
      <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-low transition-colors">
        <div>
          <Shield className="w-6 h-6 text-tertiary mb-4" />
          <h4 className="text-lg font-bold text-on-surface mb-2">Security Audit</h4>
          <p className="text-sm text-on-surface-variant">
            Last audit: 2 days ago. No vulnerabilities detected.
          </p>
        </div>
        <ArrowRight className="w-5 h-5 self-end text-slate-300 group-hover:text-tertiary transition-colors" />
      </div>
    </>
  )
}
