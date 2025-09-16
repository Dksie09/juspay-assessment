## Dashboard

A fast, modern, and accessible analytics dashboard built with Next.js and tailwind

- eCommerce dashboard: [juspay-khaki.vercel.app](https://juspay-khaki.vercel.app/)
- Orders list: [juspay-khaki.vercel.app/orders](https://juspay-khaki.vercel.app/orders)

### Demo



https://github.com/user-attachments/assets/60a990b0-01b1-430f-9a4c-4d27e91b4ce9




### File Structure Overview

```
src/
  app/
    globals.css          # defining theme variables
    layout.js            # Root layout (theme providers, shell)
    page.js              # Dashboard landing page
    orders/page.jsx      # Orders list page 
  components/
    dashboard/           # Dashboard-focused cards and charts
      Dashboard.jsx
      ...
    layout/              # Shell: responsive sidebars, topbar
      Shell.jsx
      ...
    orders/              # Orders table and related UI
      Orders.jsx
      OrderTable.jsx      # Main table (filter, sort, paginate, keyboard nav)
      ...
    ui/                  # Reusable UI elements
      avatar.jsx
      bar-chart.jsx
      breadcrumb.jsx
      button.jsx
      card.jsx
      ...
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
  images/                 # Misc images
```

### Getting Started (Local Setup)

- **Clone repository**

```bash
git clone https://github.com/Dksie09/juspay-assessment.git
```

- **Install dependencies**

```bash
npm install
```

- **Run the app in development**

```bash
npm run dev
```
go to http://localhost:3000

- **Build for production**

```bash
npm run build
```

### Tech Stack

- Next.js 15
- Tailwind CSS v4
- Shadcn
- lucide-react
- next-themes
- @tanstack/react-table
- recharts
- zod

### Design Thoughts
Honeslty, it's more about what feels right but a few thoughts/ features:
- Keep it simple on dashboards, delays in animations feels annoying/ slow
- subtle scale down effect when pressing a button so it feels more "alive"
- keyboard shortcut + navigation for accessibility
  - Cmd/Ctrl + /: focus search
  - Arrow Up/Down: move within focused region (sidebar or table)
  - Enter/Space: activate table row
- Tooltips: initial delay + skip-delay for fast hover switch
- properly define all theme specific variables in globals.css
- graph animation

https://github.com/user-attachments/assets/e4f197f6-d791-436e-a08a-a9876cb92fa2

Struggled with: The Donut chart with custom edges of arcs :)
