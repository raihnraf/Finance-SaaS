TRANSACTIONS: 

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Transactions | Precision Ledger</title>
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
              "tertiary-fixed-dim": "#ffb695",
              "error-container": "#ffdad6",
              "on-primary-fixed-variant": "#004493",
              "on-secondary-container": "#2f4e85",
              "on-primary": "#ffffff",
              "background": "#f8f9fa",
              "on-primary-container": "#fefcff",
              "error": "#ba1a1a",
              "inverse-on-surface": "#f0f1f2",
              "on-primary-fixed": "#001a41",
              "secondary-container": "#a4c1ff",
              "surface-dim": "#d9dadb",
              "surface-container": "#edeeef",
              "on-error-container": "#93000a",
              "surface-container-highest": "#e1e3e4",
              "surface-container-high": "#e7e8e9",
              "primary-container": "#0070ea",
              "secondary-fixed-dim": "#adc7ff",
              "inverse-primary": "#adc7ff",
              "tertiary": "#9e3d00",
              "on-surface-variant": "#414754",
              "on-error": "#ffffff",
              "secondary": "#405e96",
              "primary": "#0059bb",
              "outline-variant": "#c1c6d7",
              "on-tertiary-fixed-variant": "#7c2e00",
              "surface-bright": "#f8f9fa",
              "on-tertiary": "#ffffff",
              "on-tertiary-container": "#fffbff",
              "on-secondary-fixed-variant": "#26467c",
              "on-background": "#191c1d",
              "on-secondary": "#ffffff",
              "tertiary-container": "#c64f00",
              "on-surface": "#191c1d",
              "on-secondary-fixed": "#001a41",
              "on-tertiary-fixed": "#351000",
              "surface-variant": "#e1e3e4",
              "secondary-fixed": "#d8e2ff",
              "surface-tint": "#005bc0",
              "primary-fixed": "#d8e2ff",
              "tertiary-fixed": "#ffdbcc",
              "surface-container-low": "#f3f4f5",
              "surface": "#f8f9fa",
              "inverse-surface": "#2e3132",
              "primary-fixed-dim": "#adc7ff",
              "surface-container-lowest": "#ffffff",
              "outline": "#717786"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-surface text-on-surface antialiased overflow-x-hidden">
<!-- SideNavBar (Rail) -->
<nav class="h-screen w-64 fixed left-0 top-0 border-r-0 bg-slate-50 dark:bg-slate-900 flex flex-col py-8 px-4 z-50 font-['Inter'] antialiased text-sm tracking-tight">
<div class="mb-10 px-2">
<h1 class="text-xl font-semibold tracking-tighter text-slate-900 dark:text-slate-50">Precision Ledger</h1>
<p class="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-1">Enterprise Edition</p>
</div>
<div class="flex-1 space-y-1">
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="payments">payments</span>
<span>Revenue</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span>Cash Flow</span>
</a>
<!-- Active State: Transactions -->
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-blue-700 dark:text-blue-400 font-bold border-r-2 border-blue-700 dark:border-blue-400 bg-white dark:bg-slate-950 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Transactions</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="help">help</span>
<span>Support</span>
</a>
</div>
<div class="mt-auto px-2">
<button class="w-full py-3 bg-primary text-on-primary rounded-xl font-medium text-xs uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                Upgrade Plan
            </button>
</div>
</nav>
<!-- Main Content Area -->
<main class="ml-64 min-h-screen">
<!-- TopAppBar -->
<header class="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl flex justify-between items-center h-20 px-8 border-none shadow-sm dark:shadow-none font-['Inter'] font-medium">
<div class="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-full w-96 group focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
<span class="material-symbols-outlined text-outline" data-icon="search">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline/60" placeholder="Search transactions, IDs, or vendors..." type="text"/>
</div>
<div class="flex items-center gap-6">
<button class="text-slate-500 dark:text-slate-400 hover:opacity-80 transition-opacity">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<div class="flex items-center gap-3">
<div class="text-right">
<p class="text-xs font-bold text-on-surface">Alex Sterling</p>
<p class="text-[10px] text-on-surface-variant uppercase tracking-tighter">Finance Lead</p>
</div>
<img alt="User profile" class="w-10 h-10 rounded-full object-cover" data-alt="professional headshot of a business executive with a friendly expression in a modern office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfZA-3iE3Hgab9_sI04P3h9cD3Oae-R80wIEs8MI1Whqtq2R8aLFakmdWgyb4mvN-IalXOG9yjzJv4yhhwHI69eaQ8Joyn8koVxWXDrt98ca4VwbRyuiITOI90cRp5enOhRBCNL30TAtN_hrM0Ltki1GgokibnTaw7xaJemdOhKaRiY67Bdnjm1i7Gmu27awdXyoZKa-ekfKGbC69p16QVJ-MsW3f8ExyGxpxhYzF_cMKy8qImej25ms0aHlfeudRrJkslHCTCY8Y"/>
</div>
</div>
</header>
<!-- Canvas Body -->
<div class="pt-28 px-12 pb-20">
<!-- Page Header Section -->
<section class="mb-12 flex justify-between items-end">
<div>
<h2 class="text-3xl font-semibold tracking-tight text-on-surface mb-2">Transactions</h2>
<p class="text-on-surface-variant font-medium">Manage and audit your global enterprise expenditure.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center gap-2 px-6 py-2.5 bg-surface-container-lowest text-on-surface-variant rounded-xl border border-outline-variant/20 font-medium text-sm hover:bg-surface-container-low transition-colors active:scale-95 transition-transform">
<span class="material-symbols-outlined text-lg" data-icon="file_download">file_download</span>
                        Export CSV
                    </button>
<button class="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-medium text-sm hover:opacity-90 transition-opacity active:scale-95 transition-transform shadow-md shadow-primary/10">
<span class="material-symbols-outlined text-lg" data-icon="add">add</span>
                        New Transaction
                    </button>
</div>
</section>
<!-- Filters Grid -->
<section class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div class="bg-surface-container-low p-1 rounded-2xl flex">
<button class="flex-1 py-2 px-4 bg-white text-on-surface rounded-xl shadow-sm font-medium text-xs">All Time</button>
<button class="flex-1 py-2 px-4 text-on-surface-variant font-medium text-xs hover:text-on-surface transition-colors">Month</button>
<button class="flex-1 py-2 px-4 text-on-surface-variant font-medium text-xs hover:text-on-surface transition-colors">Year</button>
</div>
<div class="relative">
<select class="w-full bg-surface-container-low border-none rounded-2xl px-5 py-3 text-sm font-medium appearance-none focus:ring-2 focus:ring-primary/20 text-on-surface-variant">
<option>Category: All</option>
<option>SaaS</option>
<option>Infrastructure</option>
<option>Income</option>
<option>Marketing</option>
</select>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
<div class="relative">
<select class="w-full bg-surface-container-low border-none rounded-2xl px-5 py-3 text-sm font-medium appearance-none focus:ring-2 focus:ring-primary/20 text-on-surface-variant">
<option>Status: All</option>
<option>Completed</option>
<option>Pending</option>
<option>Failed</option>
</select>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
<div class="relative">
<input class="w-full bg-surface-container-low border-none rounded-2xl px-5 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/60" placeholder="Amount Range" type="text"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline" data-icon="payments">payments</span>
</div>
</section>
<!-- Main Table Bento Card -->
<div class="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.04)]">
<!-- Table Header Actions -->
<div class="px-8 py-6 border-b border-surface-container-low flex justify-between items-center bg-white">
<div class="flex items-center gap-4">
<span class="text-sm font-bold text-on-surface">Active Selection: <span class="text-primary">12 Items</span></span>
<div class="h-4 w-[1px] bg-outline-variant/30"></div>
<button class="text-xs font-bold text-error hover:opacity-80 transition-opacity flex items-center gap-1">
<span class="material-symbols-outlined text-base" data-icon="delete">delete</span>
                            Bulk Delete
                        </button>
</div>
<div class="flex items-center gap-2">
<span class="text-xs text-on-surface-variant font-medium">Showing 1-12 of 480</span>
<div class="flex gap-1 ml-4">
<button class="p-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button class="p-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-low/50">
<th class="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
<input class="rounded border-outline-variant text-primary focus:ring-primary/20 bg-transparent" type="checkbox"/>
</th>
<th class="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Transaction</th>
<th class="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Category</th>
<th class="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Date</th>
<th class="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Amount</th>
<th class="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
<th class="px-8 py-4 text-right"></th>
</tr>
</thead>
<tbody class="divide-y divide-surface-container-low">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low/30 transition-colors group">
<td class="px-8 py-5">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary/20 bg-transparent" type="checkbox"/>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="cloud">cloud</span>
</div>
<div>
<p class="text-sm font-bold text-on-surface">Amazon Web Services</p>
<p class="text-[11px] text-on-surface-variant font-medium">ID: #AWS-99210</p>
</div>
</div>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-secondary-container/30 text-on-secondary-container uppercase tracking-tight">Infrastructure</span>
</td>
<td class="px-6 py-5">
<p class="text-sm font-medium text-on-surface">Oct 24, 2023</p>
<p class="text-[11px] text-on-surface-variant">14:22 PM</p>
</td>
<td class="px-6 py-5">
<p class="text-sm font-bold text-on-surface font-mono">-$12,450.00</p>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1.5 text-xs font-bold text-primary">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Completed
                                    </span>
</td>
<td class="px-8 py-5 text-right">
<button class="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg text-outline">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low/30 transition-colors group">
<td class="px-8 py-5">
<input class="rounded border-outline-variant text-primary focus:ring-primary/20 bg-transparent" type="checkbox"/>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
</div>
<div>
<p class="text-sm font-bold text-on-surface">OpenAI Subscription</p>
<p class="text-[11px] text-on-surface-variant font-medium">ID: #GPT-40293</p>
</div>
</div>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-primary-fixed/30 text-on-primary-fixed-variant uppercase tracking-tight">SaaS</span>
</td>
<td class="px-6 py-5">
<p class="text-sm font-medium text-on-surface">Oct 22, 2023</p>
<p class="text-[11px] text-on-surface-variant">09:10 AM</p>
</td>
<td class="px-6 py-5">
<p class="text-sm font-bold text-on-surface font-mono">-$2,400.00</p>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1.5 text-xs font-bold text-tertiary">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                        Pending
                                    </span>
</td>
<td class="px-8 py-5 text-right">
<button class="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg text-outline">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low/30 transition-colors group">
<td class="px-8 py-5">
<input class="rounded border-outline-variant text-primary focus:ring-primary/20 bg-transparent" type="checkbox"/>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<span class="material-symbols-outlined" data-icon="trending_up">trending_up</span>
</div>
<div>
<p class="text-sm font-bold text-on-surface">Client Retainer - Alpha</p>
<p class="text-[11px] text-on-surface-variant font-medium">ID: #INV-0012</p>
</div>
</div>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-tight">Income</span>
</td>
<td class="px-6 py-5">
<p class="text-sm font-medium text-on-surface">Oct 20, 2023</p>
<p class="text-[11px] text-on-surface-variant">16:45 PM</p>
</td>
<td class="px-6 py-5">
<p class="text-sm font-bold text-green-600 font-mono">+$45,000.00</p>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1.5 text-xs font-bold text-primary">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Completed
                                    </span>
</td>
<td class="px-8 py-5 text-right">
<button class="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg text-outline">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-low/30 transition-colors group">
<td class="px-8 py-5">
<input class="rounded border-outline-variant text-primary focus:ring-primary/20 bg-transparent" type="checkbox"/>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<div>
<p class="text-sm font-bold text-on-surface">Mailchimp Marketing</p>
<p class="text-[11px] text-on-surface-variant font-medium">ID: #MC-8812</p>
</div>
</div>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-tertiary-fixed/30 text-on-tertiary-fixed-variant uppercase tracking-tight">SaaS</span>
</td>
<td class="px-6 py-5">
<p class="text-sm font-medium text-on-surface">Oct 19, 2023</p>
<p class="text-[11px] text-on-surface-variant">11:00 AM</p>
</td>
<td class="px-6 py-5">
<p class="text-sm font-bold text-on-surface font-mono">-$850.00</p>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1.5 text-xs font-bold text-primary">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Completed
                                    </span>
</td>
<td class="px-8 py-5 text-right">
<button class="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg text-outline">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 5 -->
<tr class="hover:bg-surface-container-low/30 transition-colors group">
<td class="px-8 py-5">
<input class="rounded border-outline-variant text-primary focus:ring-primary/20 bg-transparent" type="checkbox"/>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="database">database</span>
</div>
<div>
<p class="text-sm font-bold text-on-surface">Snowflake Data</p>
<p class="text-[11px] text-on-surface-variant font-medium">ID: #SNW-2210</p>
</div>
</div>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-secondary-container/30 text-on-secondary-container uppercase tracking-tight">Infrastructure</span>
</td>
<td class="px-6 py-5">
<p class="text-sm font-medium text-on-surface">Oct 18, 2023</p>
<p class="text-[11px] text-on-surface-variant">08:30 AM</p>
</td>
<td class="px-6 py-5">
<p class="text-sm font-bold text-on-surface font-mono">-$3,120.00</p>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1.5 text-xs font-bold text-error">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span>
                                        Failed
                                    </span>
</td>
<td class="px-8 py-5 text-right">
<button class="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-lg text-outline">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination Footer -->
<div class="px-8 py-6 bg-surface-container-low/20 flex justify-between items-center">
<button class="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="keyboard_double_arrow_left">keyboard_double_arrow_left</span>
                        First Page
                    </button>
<div class="flex gap-2">
<button class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary text-xs font-bold">1</button>
<button class="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low text-xs font-bold">2</button>
<button class="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low text-xs font-bold">3</button>
<span class="flex items-center px-2 text-outline">...</span>
<button class="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low text-xs font-bold">40</button>
</div>
<button class="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                        Last Page
                        <span class="material-symbols-outlined text-sm" data-icon="keyboard_double_arrow_right">keyboard_double_arrow_right</span>
</button>
</div>
</div>
<!-- Contextual Insight Cards (Asymmetric Bento) -->
<section class="mt-12 grid grid-cols-12 gap-6">
<div class="col-span-12 md:col-span-8 bg-surface-container-low rounded-3xl p-8 flex justify-between items-center">
<div>
<h3 class="text-xl font-bold text-on-surface mb-2">Quarterly Spend Analysis</h3>
<p class="text-sm text-on-surface-variant max-w-md">Your SaaS expenditure has increased by 14% this month. Consider auditing unused seats in your AWS and Snowflake accounts.</p>
</div>
<div class="flex gap-4">
<div class="w-1.5 h-16 bg-primary-container/20 rounded-full overflow-hidden relative">
<div class="absolute bottom-0 w-full bg-primary h-[40%] rounded-full"></div>
</div>
<div class="w-1.5 h-16 bg-primary-container/20 rounded-full overflow-hidden relative">
<div class="absolute bottom-0 w-full bg-primary h-[60%] rounded-full"></div>
</div>
<div class="w-1.5 h-16 bg-primary-container/20 rounded-full overflow-hidden relative">
<div class="absolute bottom-0 w-full bg-primary h-[85%] rounded-full"></div>
</div>
<div class="w-1.5 h-16 bg-primary-container/20 rounded-full overflow-hidden relative">
<div class="absolute bottom-0 w-full bg-primary h-[50%] rounded-full"></div>
</div>
</div>
</div>
<div class="col-span-12 md:col-span-4 bg-primary text-on-primary rounded-3xl p-8 relative overflow-hidden group">
<div class="relative z-10">
<h3 class="text-xl font-bold mb-4">Smart Reconciliation</h3>
<p class="text-sm opacity-80 mb-6">Automate 90% of your bookkeeping with our new AI matching engine.</p>
<button class="px-6 py-2 bg-white text-primary rounded-xl font-bold text-xs uppercase tracking-tight hover:bg-opacity-90 transition-all">Enable Now</button>
</div>
<!-- Background Accent -->
<div class="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
</div>
</section>
</div>
</main>
<!-- Contextual FAB (Only on relevant task screen) -->
<!-- Suppressed on Transactions screen as per instruction: "suppress the FAB on Settings, Profile, Details, and Transactional screens" -->
</body></html>

ACCOUNT SETTINGS

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Settings - Precision Ledger</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "tertiary-fixed-dim": "#ffb695",
                        "error-container": "#ffdad6",
                        "on-primary-fixed-variant": "#004493",
                        "on-secondary-container": "#2f4e85",
                        "on-primary": "#ffffff",
                        "background": "#f8f9fa",
                        "on-primary-container": "#fefcff",
                        "error": "#ba1a1a",
                        "inverse-on-surface": "#f0f1f2",
                        "on-primary-fixed": "#001a41",
                        "secondary-container": "#a4c1ff",
                        "surface-dim": "#d9dadb",
                        "surface-container": "#edeeef",
                        "on-error-container": "#93000a",
                        "surface-container-highest": "#e1e3e4",
                        "surface-container-high": "#e7e8e9",
                        "primary-container": "#0070ea",
                        "secondary-fixed-dim": "#adc7ff",
                        "inverse-primary": "#adc7ff",
                        "tertiary": "#9e3d00",
                        "on-surface-variant": "#414754",
                        "on-error": "#ffffff",
                        "secondary": "#405e96",
                        "primary": "#0059bb",
                        "outline-variant": "#c1c6d7",
                        "on-tertiary-fixed-variant": "#7c2e00",
                        "surface-bright": "#f8f9fa",
                        "on-tertiary": "#ffffff",
                        "on-tertiary-container": "#fffbff",
                        "on-secondary-fixed-variant": "#26467c",
                        "on-background": "#191c1d",
                        "on-secondary": "#ffffff",
                        "tertiary-container": "#c64f00",
                        "on-surface": "#191c1d",
                        "on-secondary-fixed": "#001a41",
                        "on-tertiary-fixed": "#351000",
                        "surface-variant": "#e1e3e4",
                        "secondary-fixed": "#d8e2ff",
                        "surface-tint": "#005bc0",
                        "primary-fixed": "#d8e2ff",
                        "tertiary-fixed": "#ffdbcc",
                        "surface-container-low": "#f3f4f5",
                        "surface": "#f8f9fa",
                        "inverse-surface": "#2e3132",
                        "primary-fixed-dim": "#adc7ff",
                        "surface-container-lowest": "#ffffff",
                        "outline": "#717786"
                    },
                    fontFamily: {
                        "headline": ["Inter"],
                        "body": ["Inter"],
                        "label": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-surface antialiased">
<!-- SideNavBar -->
<aside class="h-screen w-64 fixed left-0 top-0 border-r-0 bg-slate-50 dark:bg-slate-900 font-['Inter'] antialiased text-sm tracking-tight flex flex-col py-8 px-4 z-50">
<div class="mb-10 px-4">
<h1 class="text-xl font-semibold tracking-tighter text-slate-900 dark:text-slate-50">Precision Ledger</h1>
<p class="text-xs text-on-surface-variant opacity-60">Enterprise Edition</p>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="payments">payments</span>
<span>Revenue</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span>Cash Flow</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Transactions</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-blue-700 dark:text-blue-400 font-bold border-r-2 border-blue-700 dark:border-blue-400 bg-white dark:bg-slate-950 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors duration-200 active:scale-95 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="help">help</span>
<span>Support</span>
</a>
</nav>
<div class="mt-auto px-4 pt-4 border-t border-slate-200 dark:border-slate-800">
<button class="w-full py-2 px-4 bg-primary text-on-primary rounded-lg font-medium text-xs hover:opacity-90 transition-opacity">
                Upgrade Plan
            </button>
</div>
</aside>
<!-- TopAppBar -->
<header class="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl flex justify-between items-center h-20 px-8">
<div class="flex items-center gap-4 flex-1">
<div class="relative w-full max-w-md focus-within:ring-2 focus-within:ring-blue-500/20 rounded-xl bg-surface-container-low transition-all">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
<input class="w-full bg-transparent border-none focus:ring-0 pl-10 pr-4 py-2 text-sm text-on-surface" placeholder="Search settings..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<button class="text-slate-500 dark:text-slate-400 hover:opacity-80 transition-opacity">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<div class="flex items-center gap-3">
<div class="text-right">
<p class="text-sm font-semibold text-on-surface">Alex Thompson</p>
<p class="text-[10px] uppercase tracking-widest text-on-surface-variant">Administrator</p>
</div>
<img alt="User profile" class="w-10 h-10 rounded-full border-2 border-surface-container-high" data-alt="Close-up portrait of a professional man in a minimalist workspace with soft studio lighting and neutral tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJnVJ4_QoP-bqH1kc5pAK35tO9MdicwGX-TUNcpq0LSQ_ykx6Ot5yfB9OmMwHcYlWeJqiFQYc5qDnJuBVOAIrYVS5TJDd_McEAm9AeIliJy-WIiRNeeu_-Fux_P4TwG8YrekoQ5fc_GfADLJZuLgFDcNFfA-Bnny81gd-ro9hJOmeAxxYJPM2EqetHLkcsClrqKteAQb9Qos1mqevDwY2l8jb-kysX9vQ-5KBx515YdWuhxd6QRpCSUa2c7k3liu184s0M_qN7wZo"/>
</div>
</div>
</header>
<!-- Main Content -->
<main class="ml-64 pt-32 pb-20 px-12 min-h-screen">
<div class="max-w-6xl mx-auto">
<!-- Page Header -->
<div class="mb-12">
<h2 class="text-4xl font-semibold tracking-tight text-on-surface mb-2">Account Settings</h2>
<p class="text-on-surface-variant text-lg">Manage your personal profile, security preferences, and workspace configuration.</p>
</div>
<!-- Bento Layout Settings -->
<div class="grid grid-cols-12 gap-8">
<!-- Vertical Tabs (Implicit) & Content Section -->
<div class="col-span-12 lg:col-span-8 space-y-8">
<!-- Profile Section -->
<section class="bg-surface-container-lowest rounded-xl p-8 transition-shadow">
<div class="flex items-start justify-between mb-8">
<div>
<h3 class="text-xl font-semibold text-on-surface mb-1">Profile Information</h3>
<p class="text-sm text-on-surface-variant">Update your photo and personal details.</p>
</div>
<button class="bg-primary hover:bg-primary-container text-on-primary px-6 py-2 rounded-lg text-sm font-medium transition-colors">Save Changes</button>
</div>
<div class="flex items-center gap-8 mb-8 pb-8 border-b border-surface-container">
<div class="relative group">
<img alt="Avatar" class="w-24 h-24 rounded-full object-cover border-4 border-surface-container-low" data-alt="High-quality professional avatar of a man with clean-cut appearance in front of a minimalist grey background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvlO0ToQ3HpzC23z2tvNz5Aj_l8Gv__Ll5LwxrRVF7go6Odg4jspCzx2ddk-OwbV9KzvG_a5UdvS2lmQHpVEN3no69JEnMSjrGH1CZK6EU2t27lUKeAAD7PQtdWQ6XCSdPnDTccHqD_qAIP4WLrEAPNbkBnLrNqrP4PVEvh-_hYP1Uem7BhXEt8TL-C_BWUYfnqsL1Hmq1ZftF4mLTAT7eFi-alw0oSP5gv1628zNHOkLl_fFA09be5B3RvmNanlIO8SdQE_SM-vY"/>
<button class="absolute bottom-0 right-0 bg-white shadow-md p-1.5 rounded-full hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-sm text-primary" data-icon="edit">edit</span>
</button>
</div>
<div class="space-y-1">
<h4 class="font-medium text-on-surface">Profile Photo</h4>
<p class="text-xs text-on-surface-variant">SVG, PNG, JPG or GIF (max. 800x800px)</p>
<div class="flex gap-3 mt-2">
<button class="text-xs font-semibold text-primary hover:underline">Upload new</button>
<button class="text-xs font-semibold text-error hover:underline">Remove</button>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-6">
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
<input class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" type="text" value="Alex Thompson"/>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Email Address</label>
<input class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" type="email" value="alex.thompson@precisionledger.io"/>
</div>
<div class="col-span-2 space-y-2">
<label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Bio</label>
<textarea class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" rows="3">Financial operations lead at Precision Ledger Enterprise.</textarea>
</div>
</div>
</section>
<!-- Security Section -->
<section class="bg-surface-container-lowest rounded-xl p-8">
<h3 class="text-xl font-semibold text-on-surface mb-6">Security &amp; Authentication</h3>
<div class="space-y-6">
<div class="flex items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="lock">lock</span>
</div>
<div>
<p class="font-medium text-on-surface">Password</p>
<p class="text-xs text-on-surface-variant">Last updated 3 months ago</p>
</div>
</div>
<button class="text-sm font-semibold text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors">Update</button>
</div>
<div class="flex items-center justify-between p-4 rounded-xl bg-surface-container-low border-l-4 border-tertiary">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined" data-icon="security">security</span>
</div>
<div>
<p class="font-medium text-on-surface">Two-Factor Authentication (2FA)</p>
<p class="text-xs text-on-surface-variant">Recommended for high-security accounts</p>
</div>
</div>
<div class="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-surface-container-highest rounded-full cursor-pointer">
<input class="absolute w-6 h-6 opacity-0 cursor-pointer peer" type="checkbox"/>
<div class="w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform peer-checked:translate-x-6 peer-checked:bg-primary"></div>
</div>
</div>
</div>
</section>
<!-- API Keys Section -->
<section class="bg-surface-container-lowest rounded-xl p-8">
<div class="flex items-center justify-between mb-6">
<h3 class="text-xl font-semibold text-on-surface">Developer API Keys</h3>
<button class="flex items-center gap-2 text-primary text-sm font-bold">
<span class="material-symbols-outlined text-lg" data-icon="add">add</span>
                                Create Key
                            </button>
</div>
<div class="space-y-4">
<div class="overflow-hidden rounded-lg bg-surface-container-low">
<table class="w-full text-left text-sm">
<thead class="bg-surface-container-high text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
<tr>
<th class="px-6 py-3">Label</th>
<th class="px-6 py-3">Key</th>
<th class="px-6 py-3">Created</th>
<th class="px-6 py-3">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-surface-container">
<tr>
<td class="px-6 py-4 font-medium">Production Main</td>
<td class="px-6 py-4 font-mono text-xs text-on-surface-variant">pk_live_•••••••••482c</td>
<td class="px-6 py-4 text-xs">Oct 12, 2023</td>
<td class="px-6 py-4">
<button class="text-on-surface-variant hover:text-error transition-colors">
<span class="material-symbols-outlined text-lg" data-icon="delete">delete</span>
</button>
</td>
</tr>
<tr>
<td class="px-6 py-4 font-medium">Test Environment</td>
<td class="px-6 py-4 font-mono text-xs text-on-surface-variant">pk_test_•••••••••1a93</td>
<td class="px-6 py-4 text-xs">Jan 05, 2024</td>
<td class="px-6 py-4">
<button class="text-on-surface-variant hover:text-error transition-colors">
<span class="material-symbols-outlined text-lg" data-icon="delete">delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>
<!-- Workspace Sidebar Column -->
<div class="col-span-12 lg:col-span-4 space-y-8">
<!-- Workspace Info -->
<section class="bg-surface-container-lowest rounded-xl p-8 sticky top-28">
<h3 class="text-lg font-semibold text-on-surface mb-6">Workspace Settings</h3>
<div class="space-y-6">
<div class="p-6 bg-primary/5 rounded-2xl border border-primary/10">
<div class="flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary text-xl font-bold">PL</div>
<div>
<p class="font-bold text-on-surface">Precision Ledger</p>
<p class="text-xs text-on-surface-variant">Enterprise Workspace</p>
</div>
</div>
<div class="space-y-4">
<div class="space-y-1">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Workspace Name</label>
<input class="w-full bg-surface-container-low border-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/20" type="text" value="Precision Ledger"/>
</div>
<div class="pt-2">
<div class="flex items-center justify-between">
<span class="text-sm font-medium text-on-surface">Interface Theme</span>
<div class="flex bg-surface-container-high p-1 rounded-full">
<button class="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-primary">
<span class="material-symbols-outlined text-lg" data-icon="light_mode">light_mode</span>
</button>
<button class="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant">
<span class="material-symbols-outlined text-lg" data-icon="dark_mode">dark_mode</span>
</button>
</div>
</div>
</div>
</div>
</div>
<div class="space-y-4">
<p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Team Members</p>
<div class="space-y-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<img class="w-6 h-6 rounded-full" data-alt="Avatar of team member Jane Doe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCiJRP4xn9qG6qNKs_64Hm3ABxSHuJ67NyU4-ToGrwP7JS8_IZDmMNlr_eVWrmPEdqwkPa-e8fI-4mPsSYuZOf8oTQl0Essm3EGn31QnI_7Xx18LqPsZhDZ60AdghwpkPSLpD-kM4laLNxjKVof6BTnCJ_mbc-Dj4LD6Vw-YFm68o9VoWFVYptFBS-JegTk_In837ipU5zM4eXT5rxSEBRgW7DXWoA650dahO_YYlo6TEO5QPN91XUDT8wecwdRrzk6JlwKAQG7DQ"/>
<span class="text-sm">Jane Doe</span>
</div>
<span class="text-[10px] bg-secondary-container/30 text-secondary px-2 py-0.5 rounded-full font-bold">Owner</span>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<img class="w-6 h-6 rounded-full" data-alt="Avatar of team member Mike Ross" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPgHvEocwe-mrlxBTeVvb-Ss466ECCqWXurE1lS1sOij5sPzpJETM0bPA_Y7C6B2xVjNDcZwP_4MlvRSALKCjdLwl96SxrkJlAIGQxo3C2pCfRz45gej75fKdR14v9PAhi9RVt-0OTSHJK9AwVSwBr49T_gwVjIQEgQmQ1Ae4jxxd8bsZjIa7cs9IPkeTFwZKezweDBT89nfWrdKCqMJrifw-L8ra4tlj9CKgRz_-N5mfU4it3s_yBlFe9uWJ426iCGM0SA1dNg0Y"/>
<span class="text-sm">Mike Ross</span>
</div>
<span class="text-[10px] bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded-full font-bold">Editor</span>
</div>
</div>
<button class="w-full text-sm font-semibold text-primary py-2 hover:bg-primary/5 rounded-lg transition-colors">Manage Team</button>
</div>
<div class="pt-4 border-t border-surface-container">
<p class="text-[10px] text-on-surface-variant mb-3 leading-relaxed">Danger Zone: Actions here are permanent and cannot be undone.</p>
<button class="w-full py-2 px-4 border border-error/30 text-error rounded-lg text-sm font-medium hover:bg-error hover:text-on-error transition-all">
                                    Deactivate Workspace
                                </button>
</div>
</div>
</section>
</div>
</div>
</div>
</main>
</body></html>