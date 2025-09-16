## Dashboard

A fast, modern, and accessible analytics dashboard built with Next.js and Tailwind CSS.


live:
- eCommerce: [https://juspay-khaki.vercel.app](https://juspay-khaki.vercel.app/)
- Orders Page: [https://juspay-khaki.vercel.app/orders](https://juspay-khaki.vercel.app/orders)

### Demo


https://github.com/user-attachments/assets/e1ee09ef-b973-4d81-94fc-11b953c92311


### File Structure

```
src/
├── app/
│   ├── globals.css              # Global styles and theme variables
│   ├── layout.js                # Root layout (theme provider, app shell)
│   ├── page.js                  # Dashboard landing page
│   └── orders/
│       └── page.jsx             # Orders list page
│
├── components/
│   ├── dashboard/               # Dashboard cards and charts
│   │   └── Dashboard.jsx
│   │   ...
│   ├── layout/                  # Application shell (sidebar, topbar, etc.)
│   │   └── Shell.jsx
│   │   ...
│   ├── orders/                  # Orders-related components
│   │   ├── Orders.jsx
│   │   └── OrderTable.jsx       # Main table (filter, sort, pagination, keyboard nav)
│   │   ...
│   └── ui/                      # Reusable UI primitives
│       ├── avatar.jsx
│       ├── bar-chart.jsx
│       ├── breadcrumb.jsx
│       ├── button.jsx
│       ├── card.jsx
│       └── ...
│
├── hooks/
│   ├── use-keyboard-shortcuts.js # Keyboard navigation and activation helpers
│   ├── use-layout.js             # Layout state and utilities
│   └── use-mobile.js             # Responsive/mobile utilities
│
├── lib/
│   ├── constants.js              # App constants and sample data
│   └── utils.js                  # General-purpose utilities
│
└── public/
    ├── avatars/                  # User avatar images
    ├── icons/                    # SVG icons
    └── images/                   # Miscellaneous images

```

### Getting Started

#### Setup


```
git clone https://github.com/Dksie09/juspay-assessment.git
cd juspay-dashboard
npm install
npm run dev
```

open http://localhost:3000

### Tech Stack

- Next.js 15
- Tailwind CSS v4
- shadcn/ui + with cusomtizations
- lucide-react
- next-themes
- recharts

---

### Features

- dashboard 

<img width="530" height="311" alt="Untitled-2025-08-16-1237" src="https://github.com/user-attachments/assets/3568b77d-cdf7-496b-ba15-3022926fb3dd" />


- Keyboard shortcuts:
  - Cmd/Ctrl + /: focus search
  - Arrow Up/Down: move within focused region (sidebar or table)
  - Enter/Space: activate table row
- Tooltips with initial delay and skip delay for rapid hover changes
- Motion tuned to be fast, subtle and smooth (really important for dashboards)
- Subtle press feedback (scale-down on buttons) to improve perceived responsiveness
- Dark and light theme toggle with vcariables defined in `globals.css`
- Filtering (based on status), Searching, Sorting (based on ID), Pagination in Order's list

### Challenges

- Donut chart with custom arc edges gave me a hard time

License - MIT
