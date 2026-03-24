# Precision Ledger - Enterprise Finance Dashboard

A high-performance SaaS Finance Dashboard built with React + Vite + TypeScript.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS v4** with custom design system
- **Zustand** for state management
- **TanStack Query** for server state
- **Recharts** for data visualization
- **Framer Motion** for animations
- **Lucide React** for icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/              # Static assets
├── components/          # Shared components
├── features/            # Feature-based modules
│   ├── dashboard/       # Dashboard feature
│   │   ├── components/  # Dashboard components
│   │   ├── hooks/       # Custom hooks
│   │   ├── services/    # API services
│   │   └── types/       # TypeScript types
│   └── transactions/    # Transactions feature
├── hooks/               # Shared custom hooks
├── lib/                 # Utility functions
├── store/               # Zustand stores
├── styles/              # Global styles
└── types/               # Shared TypeScript types
```

## Features

- **Portfolio Overview**: Real-time portfolio value tracking
- **Revenue Analytics**: Interactive charts showing growth trends
- **Cash Flow Management**: Visual breakdown of inflows and outflows
- **Transaction Management**: Comprehensive transaction history
- **Quick Actions**: AI-powered expense automation
- **Security Audit**: Built-in security monitoring

## Design System

The application uses a comprehensive color system with 50+ custom colors defined in `src/styles/globals.css` using Tailwind CSS v4's `@theme` directive.

### Key Colors

- **Primary**: `#0059bb` - Brand blue
- **Secondary**: `#405e96` - Supporting blue
- **Tertiary**: `#9e3d00` - Accent orange
- **Error**: `#ba1a1a` - Error states
- **Surface**: Various shades for depth and hierarchy

## Deployment

The application is optimized for Vercel free tier deployment:

1. Push to GitHub repository
2. Import project in Vercel
3. Deploy automatically

## License

MIT
