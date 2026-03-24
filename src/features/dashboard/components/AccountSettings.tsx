import { Edit, Lock, Shield, Trash2, Plus, Sun, Moon, Users } from 'lucide-react'

interface APIKey {
  label: string
  key: string
  created: string
}

interface TeamMember {
  name: string
  role: string
  avatar: string
}

const mockAPIKeys: APIKey[] = [
  {
    label: 'Production Main',
    key: 'pk_live_•••••••••482c',
    created: 'Oct 12, 2023',
  },
  {
    label: 'Test Environment',
    key: 'pk_test_•••••••••1a93',
    created: 'Jan 05, 2024',
  },
]

const mockTeamMembers: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'Owner',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCiJRP4xn9qG6qNKs_64Hm3ABxSHuJ67NyU4-ToGrwP7JS8_IZDmMNlr_eVWrmPEdqwkPa-e8fI-4mPsSYuZOf8oTQl0Essm3EGn31QnI_7Xx18LqPsZhDZ60AdghwpkPSLpD-kM4laLNxjKVof6BTnCJ_mbc-Dj4LD6Vw-YFm68o9VoWFVYptFBS-JegTk_In837ipU5zM4eXT5rxSEBRgW7DXWoA650dahO_YYlo6TEO5QPN91XUDT8wecwdRrzk6JlwKAQG7DQ',
  },
  {
    name: 'Mike Ross',
    role: 'Editor',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPgHvEocwe-mrlxBTeVvb-Ss466ECCqWXurE1lS1sOij5sPzpJETM0bPA_Y7C6B2xVjNDcZwP_4MlvRSALKCjdLwl96SxrkJlAIGQxo3C2pCfRz45gej75fKdR14v9PAhi9RVt-0OTSHJK9AwVSwBr49T_gwVjIQEgQmQ1Ae4jxxd8bsZjIa7cs9IPkeTFwZKezweDBT89nfWrdKCqMJrifw-L8ra4tlj9CKgRz_-N5mfU4it3s_yBlFe9uWJ426iCGM0SA1dNg0Y',
  },
]

export function AccountSettings() {
  return (
    <div className="p-10">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        {/* Page Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold tracking-tight text-on-surface mb-2">
            Account Settings
          </h2>
          <p className="text-on-surface-variant text-lg">
            Manage your personal profile, security preferences, and workspace
            configuration.
          </p>
        </div>

        {/* Bento Layout Settings */}
        <div className="grid grid-cols-12 gap-8">
          {/* Vertical Tabs (Implicit) & Content Section */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Profile Section */}
            <section className="bg-surface-container-lowest rounded-xl p-8 transition-shadow">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-on-surface mb-1">
                    Profile Information
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    Update your photo and personal details.
                  </p>
                </div>
                <button className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                  Save Changes
                </button>
              </div>
              <div className="flex items-center gap-8 mb-8 pb-8 border-b border-surface-container">
                <div className="relative group">
                  <img
                    alt="Avatar"
                    className="w-24 h-24 rounded-full object-cover border-4 border-surface-container-low"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvlO0ToQ3HpzC23z2tvNz5Aj_l8Gv__Ll5LwxrRVF7go6Odg4jspCzx2ddk-OwbV9KzvG_a5UdvS2lmQHpVEN3no69JEnMSjrGH1CZK6EU2t27lUKeAAD7PQtdWQ6XCSdPnDTccHqD_qAIP4WLrEAPNbkBnLrNqrP4PVEvh-_hYP1Uem7BhXEt8TL-C_BWUYfnqsL1Hmq1ZftF4mLTAT7eFi-alw0oSP5gv1628zNHOkLl_fFA09be5B3RvmNanlIO8SdQE_SM-vY"
                  />
                  <button className="absolute bottom-0 right-0 bg-white shadow-md p-1.5 rounded-full hover:scale-110 transition-transform">
                    <Edit className="w-4 h-4 text-primary" />
                  </button>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-on-surface">Profile Photo</h4>
                  <p className="text-xs text-on-surface-variant">
                    SVG, PNG, JPG or GIF (max. 800x800px)
                  </p>
                  <div className="flex gap-3 mt-2">
                    <button className="text-xs font-semibold text-primary hover:underline">
                      Upload new
                    </button>
                    <button className="text-xs font-semibold text-error hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                    type="text"
                    value="Alex Thompson"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                    type="email"
                    value="alex.thompson@precisionledger.io"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Bio
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                    rows="3"
                  >
                    Financial operations lead at Precision Ledger Enterprise.
                  </textarea>
                </div>
              </div>
            </section>

            {/* Security Section */}
            <section className="bg-surface-container-lowest rounded-xl p-8">
              <h3 className="text-xl font-semibold text-on-surface mb-6">
                Security &amp; Authentication
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-on-surface">Password</p>
                      <p className="text-xs text-on-surface-variant">
                        Last updated 3 months ago
                      </p>
                    </div>
                  </div>
                  <button className="text-sm font-semibold text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors">
                    Update
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low border-l-4 border-tertiary">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-on-surface">
                        Two-Factor Authentication (2FA)
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Recommended for high-security accounts
                      </p>
                    </div>
                  </div>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-surface-container-highest rounded-full cursor-pointer">
                    <input className="absolute w-6 h-6 opacity-0 cursor-pointer peer" type="checkbox" />
                    <div className="w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform peer-checked:translate-x-6 peer-checked:bg-primary"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* API Keys Section */}
            <section className="bg-surface-container-lowest rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-on-surface">
                  Developer API Keys
                </h3>
                <button className="flex items-center gap-2 text-primary text-sm font-bold">
                  <Plus className="w-5 h-5" />
                  Create Key
                </button>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg bg-surface-container-low">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-surface-container-high text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      <tr>
                        <th className="px-6 py-3">Label</th>
                        <th className="px-6 py-3">Key</th>
                        <th className="px-6 py-3">Created</th>
                        <th className="px-6 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container">
                      {mockAPIKeys.map((apiKey) => (
                        <tr key={apiKey.label}>
                          <td className="px-6 py-4 font-medium">{apiKey.label}</td>
                          <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">
                            {apiKey.key}
                          </td>
                          <td className="px-6 py-4 text-xs">{apiKey.created}</td>
                          <td className="px-6 py-4">
                            <button className="text-on-surface-variant hover:text-error transition-colors">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Workspace Sidebar Column */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Workspace Info */}
            <section className="bg-surface-container-lowest rounded-xl p-8 sticky top-28">
              <h3 className="text-lg font-semibold text-on-surface mb-6">
                Workspace Settings
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary text-xl font-bold">
                      PL
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Precision Ledger</p>
                      <p className="text-xs text-on-surface-variant">
                        Enterprise Workspace
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                        Workspace Name
                      </label>
                      <input
                        className="w-full bg-surface-container-low border-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/20"
                        type="text"
                        value="Precision Ledger"
                      />
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-on-surface">
                          Interface Theme
                        </span>
                        <div className="flex bg-surface-container-high p-1 rounded-full">
                          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-primary">
                            <Sun className="w-4 h-4" />
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant">
                            <Moon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Team Members
                  </p>
                  <div className="space-y-3">
                    {mockTeamMembers.map((member) => (
                      <div
                        key={member.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <img className="w-6 h-6 rounded-full" alt={member.name} src={member.avatar} />
                          <span className="text-sm">{member.name}</span>
                        </div>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            member.role === 'Owner'
                              ? 'bg-secondary-container/30 text-secondary'
                              : 'bg-surface-container-highest text-on-surface-variant'
                          }`}
                        >
                          {member.role}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full text-sm font-semibold text-primary py-2 hover:bg-primary/5 rounded-lg transition-colors">
                    Manage Team
                  </button>
                </div>

                <div className="pt-4 border-t border-surface-container">
                  <p className="text-[10px] text-on-surface-variant mb-3 leading-relaxed">
                    Danger Zone: Actions here are permanent and cannot be undone.
                  </p>
                  <button className="w-full py-2 px-4 border border-error/30 text-error rounded-lg text-sm font-medium hover:bg-error hover:text-on-error transition-all">
                    Deactivate Workspace
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
