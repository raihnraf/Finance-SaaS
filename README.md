# Precision Ledger - Enterprise Finance Dashboard

A modern, high-performance SaaS finance dashboard featuring real-time portfolio tracking, revenue analytics, and cash flow management. Built with React 18, TypeScript, and Tailwind CSS 4.

**License:** MIT  
**Built with:** React TypeScript

[🔗 Live Demo](https://finance-saa-s-peach.vercel.app/)

## 📸 Screenshots

### Dashboard Overview
![Dashboard](file:///home/raihan/Pictures/Screenshots/Screenshot%20from%202026-03-25%2006-43-43.png)

### Revenue Analytics
![Revenue Analytics](file:///home/raihan/Pictures/Screenshots/Screenshot%20from%202026-03-25%2006-44-12.png)

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 |
| **Language** | TypeScript 5.6 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **State Management** | Zustand (client) + TanStack Query v5 (server) |
| **Charts** | Recharts |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

**Note:** This is a frontend-only prototype with mock data. All data is stored locally - no backend or API connection required.

## ✨ Key Features

### 🎨 User Experience
- **Modern Design System** - Clean, professional UI with custom color palette (50+ colors)
- **Responsive Layout** - Mobile-first design with sidebar navigation
- **Smooth Animations** - GPU-accelerated transitions powered by Framer Motion
- **Glass Morphism** - Modern glassmorphic effects on navigation bars
- **Interactive Charts** - Rich data visualization with Recharts

### 📄 Dashboard Features
- **Portfolio Overview** - Real-time portfolio value tracking with growth indicators
- **Revenue Growth Chart** - Interactive area chart with gradient fills and custom tooltips
- **Cash Flow Analysis** - Visual breakdown of inflows and outflows
- **Transaction Management** - Comprehensive transaction history with status badges
- **Quick Actions** - AI-powered expense automation, linked accounts, security audit
- **Floating Action Button** - Quick access to new transactions

### ⚡ Technical
- **Service Layer Architecture** - Clean API abstraction with HTTP client
- **Error Handling** - Comprehensive error management with boundaries
- **Type Safety** - Full TypeScript coverage with strict mode
- **React Query Integration** - Optimized data fetching, caching, and background updates
- **State Management** - Zustand for client state, TanStack Query for server state
- **Code Splitting** - Lazy-loaded components for optimal bundle size (177KB gzipped)

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/raihnraf/SaaS-FInance.git

# Navigate to project directory
cd SaaS-FInance

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at **http://localhost:5173**

### Environment Configuration

```bash
# Copy the example environment file
cp .env.example .env.local
```

Edit `.env.local` to configure:
- API base URL (for future backend integration)
- App title customization

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── features/              # Feature-based modules
│   └── dashboard/         # Dashboard feature
│       ├── components/    # Dashboard UI components
│       │   ├── DashboardLayout.tsx
│       │   ├── SideNavigation.tsx
│       │   ├── TopNavigation.tsx
│       │   ├── HeroSection.tsx
│       │   ├── RevenueGrowthChart.tsx
│       │   ├── CashFlowChart.tsx
│       │   ├── TransactionsTable.tsx
│       │   ├── QuickActions.tsx
│       │   └── FloatingActionButton.tsx
│       ├── hooks/         # Custom React hooks
│       ├── services/      # API services
│       └── types/         # TypeScript types
├── hooks/                 # Shared custom hooks
├── lib/                   # Utility libraries
│   ├── queryClient.ts     # TanStack Query configuration
│   └── utils.ts           # Utility functions (cn helper)
├── store/                 # Zustand state management
│   ├── dashboardStore.ts  # Portfolio state, growth metrics
│   ├── transactionStore.ts # Transaction CRUD operations
│   └── uiStore.ts         # Navigation, sidebar, modal state
├── styles/                # Global styles
│   └── globals.css        # Tailwind CSS 4 with 50+ custom colors
├── types/                 # TypeScript type definitions
├── App.tsx                # Main application component
├── main.tsx               # Application entry point
└── vite-env.d.ts          # Vite type declarations
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Design System

### Colors

The application uses a comprehensive color system with **50+ custom colors** defined in `src/styles/globals.css` using Tailwind CSS v4's `@theme` directive.

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary** | `#0059bb` | Brand blue, primary actions |
| **Primary Container** | `#0070ea` | Primary backgrounds |
| **Secondary** | `#405e96` | Supporting elements |
| **Tertiary** | `#9e3d00` | Accent orange |
| **Error** | `#ba1a1a` | Error states |
| **Background** | `#f8f9fa` | App background |
| **Surface** | `#f8f9fa` | Card backgrounds |
| **Surface Variant** | `#e1e3e4` | Elevated surfaces |

### Typography

- **Headings/Body:** Inter
- Configured via CSS variables in global styles

### Shadows & Effects

- **Glass Morphism:** `backdrop-blur-xl` with `bg-white/80`
- **Hard Shadows:** Neo-brutalist inspired depth
- **Gradient Fills:** SVG linear gradients for charts

### Responsive Breakpoints

- **Mobile:** < 768px (single column)
- **Tablet:** 768px - 1024px (2 columns)
- **Desktop:** > 1024px (3-4 columns, full sidebar)

## 📊 Dashboard Metrics

### Portfolio Overview
- **Total Value:** $1,482,904.50
- **Growth:** +12.4%
- **Update Frequency:** Real-time via Zustand

### Revenue Analytics
- **New Customers:** 1,204
- **Churn Rate:** 1.2%
- **LTV:** $4,820
- **CAC:** $142

### Cash Flow
- Monthly inflow/outflow tracking
- Visual comparison charts
- Summary statistics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License**.

## 👨‍💻 Author

**Raihan Rafi**

- 💼 **LinkedIn:** [linkedin.com/in/raihnraf](https://linkedin.com/in/raihnraf)
- 🐙 **GitHub:** [@raihnraf](https://github.com/raihnraf)

## 🙏 Acknowledgments

- **TanStack Query** for powerful data fetching
- **Zustand** for minimal state management
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide Icons** for beautiful icon set
- **Recharts** for data visualization
- **Vite** for blazing fast builds

## 📚 Documentation

- **IMPLEMENTATION.md** - Complete implementation summary and checklist
- **TECHNICAL_DECISIONS.md** - Architecture and design decisions
- **QUICK_START_GUIDE.md** - Step-by-step setup guide
- **BUTTON_FIX_SUMMARY.md** - UI component fixes and improvements
- **NAVIGATION_DEBUG_SUMMARY.md** - Navigation system documentation
- **TRANSACTION_DASHBOARD_SUMMARY.md** - Transaction feature documentation

---

**Made with ❤️ using React 18 + TypeScript + Tailwind CSS 4**

**Build Size:** 177KB gzipped

**Live Demo:** [finance-saa-s-peach.vercel.app](https://finance-saa-s-peach.vercel.app/)

⬆ [Back to Top](#precision-ledger---enterprise-finance-dashboard)
