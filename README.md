## Dashboard

A fast, modern, and accessible analytics dashboard built with Next.js and Tailwind CSS.

- Live: [eCommerce dashboard](https://juspay-khaki.vercel.app/)
- Live: [Orders list](https://juspay-khaki.vercel.app/orders)

### Demo


https://github.com/user-attachments/assets/d7554069-c5e0-43b6-90cf-692fa5659882


### Features

- Filtering, searching, sorting (ID), and pagination
- Dark and light theme with system preference
- Responsive layout (desktop, tablet, mobile)
- Keyboard navigation for tables and shell areas
- Accessible tooltips and focus styles
- Charts with subtle motion

### File Structure Overview

```
src/
  app/
    globals.css          # Theme variables and base styles
    layout.js            # Root layout (theme provider, shell)
    page.js              # Dashboard landing page
    orders/page.jsx      # Orders list page
  components/
    dashboard/           # Dashboard cards and charts
      Dashboard.jsx
      ...
    layout/              # App shell: sidebars, topbar
      Shell.jsx
      ...
    orders/              # Orders table and related UI
      Orders.jsx
      OrderTable.jsx      # Main table (filter, sort, paginate, keyboard nav)
      ...
    ui/                  # Reusable UI primitives
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

### Getting Started

#### Requirements

- Node.js 18+ (recommended LTS)
- npm 9+ (or pnpm/yarn)

#### Setup

```bash
git clone https://github.com/Dksie09/juspay-assessment.git
cd juspay-assessment
npm install
npm run dev
# open http://localhost:3000
```

#### Production build

```bash
npm run build
npm start
```

### Scripts

- `npm run dev`: Start dev server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint

### Tech Stack

- Next.js 15
- Tailwind CSS v4
- shadcn/ui + with cusomtizations
- lucide-react
- next-themes
- recharts
- zod

### Accessibility & UX

- Keyboard shortcuts:
  - Cmd/Ctrl + /: focus search
  - Arrow Up/Down: move within focused region (sidebar or table)
  - Enter/Space: activate table row
- Focus-visible rings, ARIA roles for interactive elements
- Tooltips with initial delay and skip delay for rapid hover changes
- Motion tuned to be fast and subtle (really important for dashboards)

### Design Notes

- Keep dashboard interactions snappy—avoid long delays on animations
- Subtle press feedback (scale-down on buttons) to improve perceived responsiveness
- Theme tokens defined in `globals.css` for consistent colors/spacing

### Known Challenges

- Donut chart with custom arc edges gave me a hard time

## License
MIT
