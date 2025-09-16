## Juspay Dashboard

A fast, modern, and accessible analytics dashboard built with Next.js.

### Features

- **Responsive layout**: Works seamlessly on desktop and mobile.
- **Rich data tables**: Sorting, filtering, pagination, and keyboard navigation.
- **Dark mode**: System-aware theming with manual toggle.
- **Reusable UI**: Modular components built on Radix primitives and Tailwind CSS.
- **Charts**: Bar, donut, radial, and line charts using Recharts.
- **Fast DX**: Turbopack-powered dev/build scripts.

### Demo

- (I'll add later)

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: React 19
- **Styling**: Tailwind CSS v4, `tailwind-merge`, `clsx`
- **UI Primitives**: Radix UI (`@radix-ui/*`), `lucide-react`
- **Theming**: `next-themes`
- **Data & Tables**: `@tanstack/react-table`
- **Charts**: `recharts`
- **Validation**: `zod`
- **Linting**: ESLint 9, `eslint-config-next`

### File Structure Overview

```text
src/
  app/
    layout.js            # Root layout (theme providers, sidebars, topbar)
    page.js              # Dashboard landing page
    orders/page.jsx      # Orders list page (table view)
  components/
    dashboard/           # Dashboard-focused cards and charts
      BarChartCard.jsx
      Dashboard.jsx
      DonutChart.jsx
      LocationCard.jsx
      RadialSalesCard.jsx
      RevenueChartCard.jsx
      SalesTableCard.jsx
      StatCards.jsx
    layout/              # Shell and navigation UI
      AppSidebarLeft.jsx
      AppSidebarRight.jsx
      MobileSidebarContent.jsx
      Shell.jsx
      Topbar.jsx
    orders/              # Orders table and related UI
      Orders.jsx
      OrderTable.jsx      # Main table (filter, sort, paginate, keyboard nav)
      Status.jsx
      StatusFilterDropdown.jsx
      TableToolbarBar.jsx
    ui/                  # Reusable low-level UI primitives
      avatar.jsx
      bar-chart.jsx
      breadcrumb.jsx
      button.jsx
      card.jsx
      chart.jsx
      checkbox.jsx
      collapsible.jsx
      dropdown-menu.jsx
      error-boundary.jsx
      icon.jsx
      iconbutton.jsx
      input.jsx
      line-chart.jsx
      loading-spinner.jsx
      marker.jsx
      pagination.jsx
      progressbar.jsx
      search-input.jsx
      separator.jsx
      sheet.jsx
      sidebar.jsx
      skeleton.jsx
      StatCard.jsx
      table.jsx
      tooltip.jsx
  hooks/
    use-keyboard-shortcuts.js  # Row navigation and activation helpers for tables
    use-layout.js              # Layout state and helpers
    use-mobile.js              # Responsive helpers
  lib/
    constants.js          # Sample data and UI constants
    utils.js              # Utility helpers
public/
  avatars/                # Avatar images
  icons/                  # SVG icons
  images/                 # Misc images (e.g., world map)
```

### Getting Started (Local Setup)

- **Prerequisites**: Node.js >= 18.18 and npm >= 9

- **Install dependencies**

```bash
npm install
```

- **Run the app in development**

```bash
npm run dev
# opens http://localhost:3000
```

- **Lint**

```bash
npm run lint
```

- **Build for production**

```bash
npm run build
```

- **Start production server**

```bash
npm run start
```

### Design Principles

- **Accessibility-first**: Built on Radix primitives, keyboard support in tables, proper ARIA.
- **Performance-minded**: Minimal client state, memoization where it matters, no artificial loading delays.
- **Modularity**: Small, composable components; clear separation of concerns across `dashboard/`, `orders/`, `layout/`, and `ui/`.
- **Consistency**: Centralized primitives in `components/ui` to enforce uniform look and behavior.
- **Responsiveness**: Mobile-first styles with Tailwind; adaptive layout components.
- **Type-safety at the edges**: Runtime validation with `zod` for component props.
