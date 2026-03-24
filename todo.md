
here's the project i want to create.
use industry pattern for code and the folders. search best practice using
web-search mcp. use context7 mcp  for updated framework/code usage.

Make sure the code design is scalable


below is design project i've create. recreted it with react

Building a high-performance portfolio on Vercel's free tier is all about choosing tools that offer the most "bang for your buck" without bloating your bundle size. Since you're focusing purely on the frontend, you can leverage **Static Site Generation (SSG)** to ensure your site is lightning-fast and stays well within Vercel's execution limits.

Here is a lean, professional tech stack and architecture recommendation to complement **React** and **Vite**.

---

## The "Lean & Mean" Tech Stack

To keep the project modern but lightweight, I suggest adding these specific tools:

| Category | Recommended Tool | Why? |
| :--- | :--- | :--- |
| **Styling** | **Tailwind CSS** | Zero runtime overhead; it purges unused CSS, keeping your Vercel deployment tiny. |
| **UI Components** | **shadcn/ui** | It’s not a library you install; it’s code you own. No extra `node_modules` bloat. |
| **Icons** | **Lucide React** | Highly tree-shakable and consistent. |
| **State** | **Zustand** | Much lighter than Redux (approx. 1kb) and much simpler to set up. |
| **Animations** | **Framer Motion** | Adds that "premium" feel to a portfolio with minimal configuration. |
| **Data Handling** | **TanStack Query** | Perfect for managing "mock" data or external APIs with built-in caching. |

---

## Suggested Architecture: Feature-Based

Since you aren't using a backend, your "business logic" will live entirely in the frontend. Instead of a traditional "folder-by-type" structure (where all hooks are in one folder, all components in another), I recommend a **Feature-Based Architecture**. 

This makes your portfolio modular and easy to showcase to potential employers because they can see exactly how you organize specific domains.

### Folder Structure
```text
src/
├── assets/          # Images, SVGs, global styles
├── components/      # Truly global, reusable UI (Buttons, Inputs)
├── features/        # The "meat" of your app
│   ├── project-list/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/  # Where your mock JSON data "fetch" lives
│   │   └── types.ts
│   └── contact-form/
├── hooks/           # Global utility hooks
├── store/           # Zustand store definitions
└── utils/           # Helper functions (date formatting, etc.)
```



### Handling "Data" Without a Backend
Since you want to stay backend-free, you have two great options to make the app feel "real":
1.  **Local JSON files:** Store your project details in a `data.json` file and "fetch" it using TanStack Query. This mimics real-world API handling.
2.  **Contentful or Sanity (CMS):** Both have excellent free tiers that integrate perfectly with Vercel. This allows you to update your portfolio content without redeploying code.

---

## Staying "Free Tier" Friendly on Vercel

Vercel's free tier is quite generous, but here is how to stay safe:

* **Image Optimization:** Don't ship raw 5MB JPEGs. Use Vite plugins like `vite-plugin-imagemin` or serve images from a CDN (like Unsplash or Cloudinary) to keep your build times low.
* **Code Splitting:** Vite does this automatically, but using `React.lazy()` for different "pages" (like a /projects vs /about page) ensures users only download what they need.
* **Environment Variables:** Even without a backend, use `.env` files for any API keys (like a Public Mapbox key or a Formspree ID) and set them in the Vercel Dashboard.

> **Pro Tip:** For a "no-backend" contact form, use **Formspree** or **Getform**. They have free tiers that let you receive emails directly from your React form without needing a server.


FOLLOW DESIGN REFERENCES!

Design references:

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Precision Ledger | Enterprise Finance Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-background": "#191c1d",
              "primary": "#0059bb",
              "tertiary": "#9e3d00",
              "error": "#ba1a1a",
              "secondary-container": "#a4c1ff",
              "on-secondary-fixed-variant": "#26467c",
              "tertiary-container": "#c64f00",
              "surface-container": "#edeeef",
              "on-error": "#ffffff",
              "on-surface": "#191c1d",
              "error-container": "#ffdad6",
              "surface-container-low": "#f3f4f5",
              "on-tertiary-container": "#fffbff",
              "secondary": "#405e96",
              "on-primary-fixed": "#001a41",
              "on-surface-variant": "#414754",
              "surface": "#f8f9fa",
              "inverse-on-surface": "#f0f1f2",
              "surface-container-high": "#e7e8e9",
              "surface-variant": "#e1e3e4",
              "on-secondary-fixed": "#001a41",
              "on-secondary": "#ffffff",
              "background": "#f8f9fa",
              "outline-variant": "#c1c6d7",
              "primary-fixed-dim": "#adc7ff",
              "outline": "#717786",
              "on-tertiary": "#ffffff",
              "on-error-container": "#93000a",
              "primary-fixed": "#d8e2ff",
              "tertiary-fixed-dim": "#ffb695",
              "secondary-fixed": "#d8e2ff",
              "surface-container-lowest": "#ffffff",
              "surface-container-highest": "#e1e3e4",
              "on-tertiary-fixed": "#351000",
              "primary-container": "#0070ea",
              "on-primary-container": "#fefcff",
              "on-primary": "#ffffff",
              "on-primary-fixed-variant": "#004493",
              "inverse-primary": "#adc7ff",
              "inverse-surface": "#2e3132",
              "tertiary-fixed": "#ffdbcc",
              "on-secondary-container": "#2f4e85",
              "surface-dim": "#d9dadb",
              "secondary-fixed-dim": "#adc7ff",
              "on-tertiary-fixed-variant": "#7c2e00",
              "surface-bright": "#f8f9fa",
              "surface-tint": "#005bc0"
            },
            fontFamily: {
              "headline": ["Inter", "sans-serif"],
              "body": ["Inter", "sans-serif"],
              "label": ["Inter", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; background-color: #f8f9fa; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .glass-panel { backdrop-filter: blur(20px); background: rgba(255, 255, 255, 0.8); }
        .chart-gradient-line { stroke: url(#line-gradient); }
        .ghost-border { outline: 1px solid rgba(193, 198, 215, 0.2); }
    </style>
</head>
<body class="text-on-surface antialiased overflow-x-hidden">
<!-- SideNavBar Shell -->
<aside class="fixed left-0 top-0 h-full flex flex-col w-64 bg-slate-50 dark:bg-slate-900 border-none z-50">
<div class="p-8">
<div class="flex items-center gap-3 mb-10">
<div class="w-10 h-10 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
<span class="material-symbols-outlined" data-icon="account_balance">account_balance</span>
</div>
<div>
<h1 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">Precision Ledger</h1>
<p class="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1">Enterprise Finance</p>
</div>
</div>
<nav class="space-y-1">
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-blue-700 dark:text-blue-400 font-semibold border-r-2 border-blue-700 dark:border-blue-400 bg-white dark:bg-slate-800 transition-all scale-95 active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="text-sm">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200" href="#">
<span class="material-symbols-outlined" data-icon="payments">payments</span>
<span class="text-sm">Revenue</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200" href="#">
<span class="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span class="text-sm">Cash Flow</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200" href="#">
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span class="text-sm">Transactions</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="text-sm">Settings</span>
</a>
</nav>
<div class="mt-12">
<button class="w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-container transition-all active:scale-95">
<span class="material-symbols-outlined text-sm" data-icon="add">add</span>
                    Add Transaction
                </button>
</div>
</div>
<div class="mt-auto p-8 border-t border-slate-200/50">
<div class="flex items-center gap-3 mb-6">
<img alt="User Profile Avatar" class="w-10 h-10 rounded-full object-cover" data-alt="Professional headshot of a middle-aged executive man with a friendly smile and sharp business attire, soft office background lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzGG-uOw198s3RDTx_5C6QJuLPeueJDOutcRMe8WLmsXpSENEBAzQuHkF9S15-1pDIO4qB5TKm2xodcVY4Jym6OyCXx57YD6FH7IxxKeBTZUJ6CVyHxrLvbxFLTpHOAjZfkdE1i1anPjIymg-ei1ut1xd4CEA3pv1tvP3LTBfDUIfegzkzhqB9M-5kQN__2ty9UJmd9Q4Zua0V92fu5bG6z75Ra2aN-gZiKGcRdOhv4qVRiweu6GEVfXs6Z5tzGGaFNq2xw7POkS8"/>
<div class="overflow-hidden">
<p class="text-sm font-semibold text-slate-900 truncate">Alexander Vance</p>
<p class="text-xs text-slate-500 truncate">CFO, Precision Corp</p>
</div>
</div>
<nav class="space-y-1">
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-500 hover:text-slate-900 transition-all text-sm" href="#">
<span class="material-symbols-outlined" data-icon="help">help</span>
                    Support
                </a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-500 hover:text-error transition-all text-sm" href="#">
<span class="material-symbols-outlined" data-icon="logout">logout</span>
                    Logout
                </a>
</nav>
</div>
</aside>
<!-- TopNavBar Shell -->
<header class="fixed top-0 right-0 left-64 h-16 glass-panel z-40 flex items-center justify-between px-8 border-none">
<div class="flex items-center flex-1 max-w-xl">
<div class="relative w-full group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" data-icon="search">search</span>
<input class="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none" placeholder="Search transactions, assets, or reports..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-4 text-slate-600">
<button class="hover:text-primary transition-colors relative">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
</button>
<button class="hover:text-primary transition-colors">
<span class="material-symbols-outlined" data-icon="help">help</span>
</button>
</div>
<div class="flex items-center gap-6 mr-6">
<div class="flex flex-col">
<span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Days to Close</span>
<span class="text-xs font-bold text-on-surface">14.2 Days</span>
</div>
<div class="flex flex-col">
<span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Next Payout</span>
<span class="text-xs font-bold text-primary">In 3 Days</span>
</div>
</div><div class="h-8 w-[1px] bg-slate-200"></div>
<button class="bg-primary-fixed-dim text-on-primary-fixed-variant px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-fixed transition-colors">
                Export Data
            </button>
</div>
</header>
<!-- Main Content Canvas -->
<main class="ml-64 mt-16 p-10 min-h-screen bg-surface">
<!-- Hero Section: Display Typography -->
<section class="mb-12">
<div class="flex flex-col gap-1">
<span class="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant/60">Total Portfolio Value</span>
<div class="flex items-baseline gap-4">
<h2 class="text-[3.5rem] font-semibold tracking-tight text-on-surface leading-none">$1,482,904.50</h2>
<span class="flex items-center text-primary font-bold text-lg">
<span class="material-symbols-outlined" data-icon="trending_up">trending_up</span>
                        +12.4%
                    </span>
</div>
</div>
</section>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-12 gap-8">
<!-- Revenue Growth Chart (Span 8) -->
<div class="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl ghost-border p-8 flex flex-col gap-8 transition-transform hover:shadow-2xl hover:shadow-on-surface/5">
<div class="flex items-center justify-between">
<div>
<h3 class="text-xl font-semibold text-on-surface">Revenue Growth</h3>
<p class="text-sm text-on-surface-variant">Performance metrics for the fiscal quarter Q3</p>
</div>
<div class="flex gap-2">
<span class="px-3 py-1 bg-secondary-container/20 text-on-secondary-container text-xs font-bold rounded-full">MONTHLY</span>
<span class="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-bold rounded-full cursor-pointer hover:bg-surface-container-high transition-colors">QUARTERLY</span>
</div>
</div>
<!-- SVG Line Chart Mockup -->
<div class="h-64 w-full relative group">
<svg class="w-full h-full preserve-3d" viewbox="0 0 800 200"><defs>
<lineargradient id="line-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0059bb"></stop>
<stop offset="100%" stop-color="#0070ea"></stop>
</lineargradient>
<lineargradient id="area-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0059bb" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#0059bb" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path class="drop-shadow-lg" d="M0,150 L50,145 L100,152 L150,140 L200,158 L250,142 L300,120 L350,105 L400,115 L450,85 L500,75 L550,95 L600,110 L650,115 L700,90 L750,60 L800,40" fill="none" stroke="#0059bb" stroke-width="3"></path>
<path d="M0,150 L50,145 L100,152 L150,140 L200,158 L250,142 L300,120 L350,105 L400,115 L450,85 L500,75 L550,95 L600,110 L650,115 L700,90 L750,60 L800,40 L800,200 L0,200 Z" fill="url(#area-gradient)"></path>
<!-- More Data Points for interactivity -->
<circle class="opacity-0 group-hover:opacity-100 transition-opacity" cx="200" cy="158" fill="#0059bb" r="3"></circle>
<circle class="opacity-0 group-hover:opacity-100 transition-opacity" cx="400" cy="115" fill="#0059bb" r="3"></circle>
<circle class="opacity-0 group-hover:opacity-100 transition-opacity" cx="600" cy="110" fill="#0059bb" r="3"></circle>
<circle class="opacity-0 group-hover:opacity-100 transition-opacity" cx="800" cy="40" fill="#0059bb" r="4"></circle></svg>
<!-- Floating Data Tooltip (Mockup) -->
<div class="absolute top-10 right-40 glass-panel border border-primary/20 p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100">
<p class="text-[10px] uppercase tracking-wider font-bold text-primary">August Peak</p>
<p class="text-sm font-bold">$242,100.00</p>
</div>
</div>
<div class="grid grid-cols-4 gap-4 border-t border-surface-container pt-6">
<div>
<p class="text-xs text-on-surface-variant font-medium">New Customers</p>
<p class="text-lg font-bold">1,204</p>
</div>
<div>
<p class="text-xs text-on-surface-variant font-medium">Churn Rate</p>
<p class="text-lg font-bold">1.2%</p>
</div>
<div>
<p class="text-xs text-on-surface-variant font-medium">LTV</p>
<p class="text-lg font-bold">$4,820</p>
</div>
<div>
<p class="text-xs text-on-surface-variant font-medium">CAC</p>
<p class="text-lg font-bold">$142</p>
</div>
</div>
</div>
<!-- Cash Flow Bar Chart (Span 4) -->
<div class="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl ghost-border p-8 flex flex-col transition-transform hover:shadow-2xl hover:shadow-on-surface/5">
<h3 class="text-xl font-semibold text-on-surface mb-1">Cash Flow</h3>
<p class="text-sm text-on-surface-variant mb-8">Inflow vs Outflow analysis</p>
<div class="flex-1 flex items-end justify-between gap-3 min-h-[200px]">
<!-- Simple Bar Mockups -->
<div class="w-full flex flex-col items-center gap-2">
<div class="w-full bg-surface-container-low rounded-t-md h-32 group relative">
<div class="absolute bottom-0 w-full bg-primary rounded-t-md h-3/4 transition-all group-hover:h-[85%]"></div>
</div>
<span class="text-[10px] font-bold text-on-surface-variant">MAY</span>
</div>
<div class="w-full flex flex-col items-center gap-2">
<div class="w-full bg-surface-container-low rounded-t-md h-40 group relative">
<div class="absolute bottom-0 w-full bg-primary rounded-t-md h-1/2 transition-all group-hover:h-[60%]"></div>
</div>
<span class="text-[10px] font-bold text-on-surface-variant">JUN</span>
</div>
<div class="w-full flex flex-col items-center gap-2">
<div class="w-full bg-surface-container-low rounded-t-md h-48 group relative">
<div class="absolute bottom-0 w-full bg-primary rounded-t-md h-5/6 transition-all group-hover:h-[95%]"></div>
</div>
<span class="text-[10px] font-bold text-on-surface-variant">JUL</span>
</div>
<div class="w-full flex flex-col items-center gap-2">
<div class="w-full bg-surface-container-low rounded-t-md h-36 group relative">
<div class="absolute bottom-0 w-full bg-primary rounded-t-md h-2/3 transition-all group-hover:h-[75%]"></div>
</div>
<span class="text-[10px] font-bold text-on-surface-variant">AUG</span>
</div>
</div>
<div class="mt-8 space-y-4">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-primary"></div>
<span class="text-sm font-medium">Operating Inflow</span>
</div>
<span class="text-sm font-bold">+$84,200</span>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-surface-container-highest"></div>
<span class="text-sm font-medium">Expenses</span>
</div>
<span class="text-sm font-bold">-$31,405</span>
</div>
</div>
</div>
<!-- Recent Transactions Table (Span 12) -->
<div class="col-span-12 bg-surface-container-lowest rounded-xl ghost-border overflow-hidden">
<div class="p-8 border-b border-surface-container flex items-center justify-between">
<div>
<h3 class="text-xl font-semibold text-on-surface">Recent Transactions</h3>
<p class="text-sm text-on-surface-variant">Real-time update of enterprise expenditures</p>
</div>
<button class="text-primary font-bold text-sm hover:underline">View All Records</button>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead>
<tr class="bg-surface-container-low/50">
<th class="px-8 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Recipient</th>
<th class="px-8 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Category</th>
<th class="px-8 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Status</th>
<th class="px-8 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold text-right">Amount</th>
</tr>
</thead>
<tbody class="divide-y divide-surface-container-low">
<tr class="group hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-6">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary">AM</div>
<div>
<p class="text-sm font-semibold text-on-surface">Amazon Web Services</p>
<p class="text-xs text-on-surface-variant">Sep 12, 2023 • 14:32</p>
</div>
</div>
</td>
<td class="px-8 py-6">
<span class="px-3 py-1 bg-surface-container text-on-surface-variant text-[11px] font-bold rounded-full">INFRASTRUCTURE</span>
</td>
<td class="px-8 py-6">
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
<span class="text-xs font-semibold">Completed</span>
</div>
</td>
<td class="px-8 py-6 text-right">
<p class="text-sm font-bold tabular-nums">-$12,480.00</p>
</td>
</tr>
<tr class="group hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-6">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary">SL</div>
<div>
<p class="text-sm font-semibold text-on-surface">Slack Technologies</p>
<p class="text-xs text-on-surface-variant">Sep 11, 2023 • 09:15</p>
</div>
</div>
</td>
<td class="px-8 py-6">
<span class="px-3 py-1 bg-surface-container text-on-surface-variant text-[11px] font-bold rounded-full">SAAS SUBSCRIPTION</span>
</td>
<td class="px-8 py-6">
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
<span class="text-xs font-semibold">Completed</span>
</div>
</td>
<td class="px-8 py-6 text-right">
<p class="text-sm font-bold tabular-nums">-$2,100.00</p>
</td>
</tr>
<tr class="group hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-6">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-tertiary">ST</div>
<div>
<p class="text-sm font-semibold text-on-surface">Stripe Payout</p>
<p class="text-xs text-on-surface-variant">Sep 10, 2023 • 18:00</p>
</div>
</div>
</td>
<td class="px-8 py-6">
<span class="px-3 py-1 bg-surface-container text-on-surface-variant text-[11px] font-bold rounded-full">INCOME</span>
</td>
<td class="px-8 py-6">
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
<span class="text-xs font-semibold text-tertiary">Pending</span>
</div>
</td>
<td class="px-8 py-6 text-right">
<p class="text-sm font-bold tabular-nums text-primary">+$45,210.00</p>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Quick Action Cards (Asymmetric Bottom Row) -->
<div class="col-span-12 md:col-span-4 bg-primary rounded-xl p-8 text-white relative overflow-hidden group">
<div class="relative z-10">
<h4 class="text-lg font-bold mb-2">Automate Expenses</h4>
<p class="text-sm text-primary-fixed-dim mb-6 leading-relaxed">Let AI categorize your transactions and save up to 15 hours monthly.</p>
<button class="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm hover:shadow-lg transition-all">Get Started</button>
</div>
<div class="absolute -right-4 -bottom-4 opacity-10 scale-150 rotate-12">
<span class="material-symbols-outlined text-[120px]" data-icon="auto_awesome">auto_awesome</span>
</div>
</div>
<div class="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-xl ghost-border p-8 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-low transition-colors">
<div>
<span class="material-symbols-outlined text-primary mb-4" data-icon="account_balance">account_balance</span>
<h4 class="text-lg font-bold text-on-surface mb-2">Linked Accounts</h4>
<p class="text-sm text-on-surface-variant">Manage 8 external financial institutions and banks.</p>
</div>
<span class="material-symbols-outlined self-end text-slate-300 group-hover:text-primary transition-colors" data-icon="arrow_forward">arrow_forward</span>
</div>
<div class="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-xl ghost-border p-8 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-low transition-colors">
<div>
<span class="material-symbols-outlined text-tertiary mb-4" data-icon="shield">shield</span>
<h4 class="text-lg font-bold text-on-surface mb-2">Security Audit</h4>
<p class="text-sm text-on-surface-variant">Last audit: 2 days ago. No vulnerabilities detected.</p>
</div>
<span class="material-symbols-outlined self-end text-slate-300 group-hover:text-tertiary transition-colors" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</main>
<!-- Contextual FAB (Only on Dashboard) -->
<button class="fixed bottom-10 right-10 w-16 h-16 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center group hover:scale-110 active:scale-95 transition-all z-50">
<span class="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform" data-icon="add">add</span>
</button>
</body></html>