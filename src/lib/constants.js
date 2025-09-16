// =============================================================================
// DASHBOARD DATA CONSTANTS
// =============================================================================
// Centralized data store for all hardcoded values across the application

// =============================================================================
// SIDEBAR DATA
// =============================================================================

export const SIDEBAR_DATA = {
  // User Information
  user: {
    avatar: "/avatars/UserProfile.png",
    name: "ByeWind",
    fallback: "BW",
    version: "v1.0.0",
  },

  // Left Sidebar - Favourites
  favourites: [
    { id: 1, name: "Overview" },
    { id: 2, name: "Projects" },
  ],

  // Left Sidebar - Dashboard Items
  dashboardItems: [
    {
      id: 1,
      name: "Defɑult",
      icon: "ChartPieSlice",
      isActive: true,
      isCollapsible: false,
    },
    {
      id: 2,
      name: "eCommerce",
      icon: "eCommerce",
      isActive: false,
      isCollapsible: true,
      subItems: [
        { id: 21, name: "Option 1", href: "#" },
        { id: 22, name: "Option 2", href: "#" },
      ],
    },
    {
      id: 3,
      name: "Projects",
      icon: "Projects",
      isActive: false,
      isCollapsible: true,
      subItems: [
        { id: 31, name: "Option 1", href: "#" },
        { id: 32, name: "Option 2", href: "#" },
      ],
    },
    {
      id: 4,
      name: "Online Courses",
      icon: "OnlineCourses",
      isActive: false,
      isCollapsible: true,
      subItems: [
        { id: 41, name: "Option 1", href: "#" },
        { id: 42, name: "Option 2", href: "#" },
      ],
    },
  ],

  // Left Sidebar - Page Items
  pageItems: [
    {
      id: 1,
      name: "User Profile",
      icon: "UserProfile",
      isDefaultOpen: true,
      subItems: [
        { id: 11, name: "Overview", href: "#" },
        { id: 12, name: "Projects", href: "#" },
        { id: 13, name: "Campaigns", href: "#" },
        { id: 14, name: "Documents", href: "#" },
        { id: 15, name: "Followers", href: "#" },
      ],
    },
    {
      id: 2,
      name: "Account",
      icon: "Account",
      subItems: [
        { id: 21, name: "Settings", href: "#" },
        { id: 22, name: "Billing", href: "#" },
      ],
    },
    {
      id: 3,
      name: "Corporate",
      icon: "Corporate",
      subItems: [
        { id: 31, name: "Team", href: "#" },
        { id: 32, name: "Departments", href: "#" },
      ],
    },
    {
      id: 4,
      name: "Blog",
      icon: "Blog",
      subItems: [
        { id: 41, name: "Posts", href: "#" },
        { id: 42, name: "Categories", href: "#" },
      ],
    },
    {
      id: 5,
      name: "Social",
      icon: "Social",
      subItems: [
        { id: 51, name: "Feed", href: "#" },
        { id: 52, name: "Messages", href: "#" },
      ],
    },
  ],

  // Right Sidebar - Notifications
  notifications: [
    {
      id: 1,
      icon: "/icons/Bug.svg",
      iconAlt: "Bug report",
      title: "You have a bug that needs...",
      timestamp: "Just now",
    },
    {
      id: 2,
      icon: "/icons/User.svg",
      iconAlt: "New user",
      title: "New user registered",
      timestamp: "59 minutes ago",
    },
    {
      id: 3,
      icon: "/icons/Bug.svg",
      iconAlt: "Bug report",
      title: "You have a bug that needs...",
      timestamp: "12 hours ago",
    },
    {
      id: 4,
      icon: "/icons/Broadcast.svg",
      iconAlt: "Subscription",
      title: "Andi Lane subscribed to you",
      timestamp: "Today, 11:59 AM",
    },
  ],

  // Right Sidebar - Activities
  activities: [
    {
      id: 1,
      avatar: "/avatars/Teammate1.png",
      title: "You have a bug that needs...",
      timestamp: "Just now",
      user: "Teammate 1",
    },
    {
      id: 2,
      avatar: "/avatars/Teammate2.png",
      title: "Released a new version",
      timestamp: "59 minutes ago",
      user: "Teammate 2",
    },
    {
      id: 3,
      avatar: "/avatars/Teammate3.png",
      title: "Submitted a bug",
      timestamp: "12 hours ago",
      user: "Teammate 3",
    },
    {
      id: 4,
      avatar: "/avatars/Teammate4.png",
      title: "Modified A data in Page X",
      timestamp: "Today, 11:59 AM",
      user: "Teammate 4",
    },
    {
      id: 5,
      avatar: "/avatars/Teammate5.png",
      title: "Deleted a page in Project X",
      timestamp: "Feb 2, 2023",
      user: "Teammate 5",
    },
  ],

  // Right Sidebar - Contacts
  contacts: [
    { id: 1, name: "Natali Craig", avatar: "/avatars/Natali Craig.png" },
    { id: 2, name: "Drew Cano", avatar: "/avatars/Drew Cano.png" },
    { id: 3, name: "Orlando Diggs", avatar: "/avatars/Orlando Diggs.png" },
    { id: 4, name: "Andi Lane", avatar: "/avatars/Andi Lane.png" },
    { id: 5, name: "Kate Morrison", avatar: "/avatars/Kate Morrison.png" },
    { id: 6, name: "Koray Okumus", avatar: "/avatars/Koray Okumus.png" },
  ],
};

// =============================================================================
// TOPBAR DATA
// =============================================================================

export const TOPBAR_DATA = {
  // Right side icons
  rightIcons: [
    { name: "Theme", ariaLabel: "Toggle theme" },
    { name: "Clock", ariaLabel: "View time" },
    { name: "Bell", ariaLabel: "View notifications" },
    { name: "SidePanel", ariaLabel: "Toggle sidebar" },
  ],

  // Breadcrumb navigation
  breadcrumb: {
    items: [
      { name: "Dashboards", href: "#", type: "link" },
      { name: "Default", type: "page" },
    ],
  },

  // Search configuration
  search: {
    placeholder: "Search...",
    shortcut: "⌘/",
  },
};

// =============================================================================
// DASHBOARD STATS DATA
// =============================================================================

export const STATS_DATA = [
  {
    id: "customers",
    title: "Customers",
    value: "3,781",
    rate: "+11.01%",
    rateIcon: "UpChart",
    variant: "accent",
  },
  {
    id: "orders",
    title: "Orders",
    value: "1,219",
    rate: "-0.03%",
    rateIcon: "DownChart",
    variant: "primary",
  },
  {
    id: "revenue",
    title: "Revenue",
    value: "$695",
    rate: "+15.03%",
    rateIcon: "UpChart",
    variant: "primary",
  },
  {
    id: "growth",
    title: "Growth",
    value: "30.1%",
    rate: "+6.08%",
    rateIcon: "UpChart",
    variant: "secondary",
  },
];

// =============================================================================
// LAYOUT CONFIGURATION
// =============================================================================

export const LAYOUT_CONFIG = {
  // Sidebar dimensions
  sidebars: {
    left: {
      width: "212px",
      widthNum: 212,
    },
    right: {
      width: "280px",
      widthNum: 280,
    },
  },

  // Responsive breakpoints
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
  },

  // Mobile layout configurations
  mobile: {
    sheetWidths: {
      left: "280px",
      right: "280px",
    },
  },
};

// =============================================================================
// ORDERS DATA
// =============================================================================

export const ORDERS_DATA = {

  orders: [
    {
      "ID": "#CM9801",
      "Name": "Natali Craig",
      "Project": "Landing Page",
      "Location": "Meadow Lane Oakland",
      "Date": "Just now",
      "Status": "In Progress"
    },
    {
      "ID": "#CM9802",
      "Name": "Kate Morrison",
      "Project": "CRM Admin pages",
      "Location": "Larry San Francisco",
      "Date": "A minute ago",
      "Status": "Complete"
    },
    {
      "ID": "#CM9803",
      "Name": "Drew Cano",
      "Project": "Client Project",
      "Location": "Bagwell Avenue Ocala",
      "Date": "1 hour ago",
      "Status": "Pending"
    },
    {
      "ID": "#CM9804",
      "Name": "Orlando Diggs",
      "Project": "Admin Dashboard",
      "Location": "Washburn Baton Rouge",
      "Date": "Yesterday",
      "Status": "Approved"
    },
    {
      "ID": "#CM9805",
      "Name": "Andi Lane",
      "Project": "App Landing Page",
      "Location": "Nest Lane Olivette",
      "Date": "Feb 2, 2023",
      "Status": "Rejected"
    },
    {
      "ID": "#CM9806",
      "Name": "Natali Craig",
      "Project": "Landing Page",
      "Location": "Meadow Lane Oakland",
      "Date": "Just now",
      "Status": "In Progress"
    },
    {
      "ID": "#CM9807",
      "Name": "Kate Morrison",
      "Project": "CRM Admin pages",
      "Location": "Larry San Francisco",
      "Date": "A minute ago",
      "Status": "Complete"
    },
    {
      "ID": "#CM9808",
      "Name": "Drew Cano",
      "Project": "Client Project",
      "Location": "Bagwell Avenue Ocala",
      "Date": "1 hour ago",
      "Status": "Pending"
    },
    {
      "ID": "#CM9809",
      "Name": "Orlando Diggs",
      "Project": "Admin Dashboard",
      "Location": "Washburn Baton Rouge",
      "Date": "Yesterday",
      "Status": "Approved"
    },
    {
      "ID": "#CM9810",
      "Name": "Andi Lane",
      "Project": "App Landing Page",
      "Location": "Nest Lane Olivette",
      "Date": "Feb 2, 2023",
      "Status": "Rejected"
    },
    {
      "ID": "#CM9811",
      "Name": "Natali Craig",
      "Project": "Landing Page",
      "Location": "Meadow Lane Oakland",
      "Date": "Just now",
      "Status": "In Progress"
    },
    {
      "ID": "#CM9812",
      "Name": "Kate Morrison",
      "Project": "CRM Admin pages",
      "Location": "Larry San Francisco",
      "Date": "A minute ago",
      "Status": "Complete"
    },
    {
      "ID": "#CM9813",
      "Name": "Drew Cano",
      "Project": "Client Project",
      "Location": "Bagwell Avenue Ocala",
      "Date": "1 hour ago",
      "Status": "Pending"
    },
    {
      "ID": "#CM9814",
      "Name": "Orlando Diggs",
      "Project": "Admin Dashboard",
      "Location": "Washburn Baton Rouge",
      "Date": "Yesterday",
      "Status": "Approved"
    },
    {
      "ID": "#CM9815",
      "Name": "Andi Lane",
      "Project": "App Landing Page",
      "Location": "Nest Lane Olivette",
      "Date": "Feb 2, 2023",
      "Status": "Rejected"
    },
    {
      "ID": "#CM9816",
      "Name": "Natali Craig",
      "Project": "Landing Page",
      "Location": "Meadow Lane Oakland",
      "Date": "Just now",
      "Status": "In Progress"
    },
    {
      "ID": "#CM9817",
      "Name": "Kate Morrison",
      "Project": "CRM Admin pages",
      "Location": "Larry San Francisco",
      "Date": "A minute ago",
      "Status": "Complete"
    },
    {
      "ID": "#CM9818",
      "Name": "Drew Cano",
      "Project": "Client Project",
      "Location": "Bagwell Avenue Ocala",
      "Date": "1 hour ago",
      "Status": "Pending"
    },
    {
      "ID": "#CM9819",
      "Name": "Orlando Diggs",
      "Project": "Admin Dashboard",
      "Location": "Washburn Baton Rouge",
      "Date": "Yesterday",
      "Status": "Approved"
    },
    {
      "ID": "#CM9820",
      "Name": "Andi Lane",
      "Project": "App Landing Page",
      "Location": "Nest Lane Olivette",
      "Date": "Feb 2, 2023",
      "Status": "Rejected"
    },
    {
      "ID": "#CM9821",
      "Name": "Natali Craig",
      "Project": "Landing Page",
      "Location": "Meadow Lane Oakland",
      "Date": "Just now",
      "Status": "In Progress"
    },
    {
      "ID": "#CM9822",
      "Name": "Kate Morrison",
      "Project": "CRM Admin pages",
      "Location": "Larry San Francisco",
      "Date": "A minute ago",
      "Status": "Complete"
    },
    {
      "ID": "#CM9823",
      "Name": "Drew Cano",
      "Project": "Client Project",
      "Location": "Bagwell Avenue Ocala",
      "Date": "1 hour ago",
      "Status": "Pending"
    },
    {
      "ID": "#CM9824",
      "Name": "Orlando Diggs",
      "Project": "Admin Dashboard",
      "Location": "Washburn Baton Rouge",
      "Date": "Yesterday",
      "Status": "Approved"
    },
    {
      "ID": "#CM9825",
      "Name": "Andi Lane",
      "Project": "App Landing Page",
      "Location": "Nest Lane Olivette",
      "Date": "Feb 2, 2023",
      "Status": "Rejected"
    },
    {
      "ID": "#CM9826",
      "Name": "Natali Craig",
      "Project": "Landing Page",
      "Location": "Meadow Lane Oakland",
      "Date": "Just now",
      "Status": "In Progress"
    },
    {
      "ID": "#CM9827",
      "Name": "Kate Morrison",
      "Project": "CRM Admin pages",
      "Location": "Larry San Francisco",
      "Date": "A minute ago",
      "Status": "Complete"
    },
    {
      "ID": "#CM9828",
      "Name": "Drew Cano",
      "Project": "Client Project",
      "Location": "Bagwell Avenue Ocala",
      "Date": "1 hour ago",
      "Status": "Pending"
    },
    {
      "ID": "#CM9829",
      "Name": "Orlando Diggs",
      "Project": "Admin Dashboard",
      "Location": "Washburn Baton Rouge",
      "Date": "Yesterday",
      "Status": "Approved"
    },
    {
      "ID": "#CM9830",
      "Name": "Andi Lane",
      "Project": "App Landing Page",
      "Location": "Nest Lane Olivette",
      "Date": "Feb 2, 2023",
      "Status": "Rejected"
    },
    {
      "ID": "#CM9831",
      "Name": "Natali Craig",
      "Project": "Landing Page",
      "Location": "Meadow Lane Oakland",
      "Date": "Just now",
      "Status": "In Progress"
    },
    {
      "ID": "#CM9832",
      "Name": "Kate Morrison",
      "Project": "CRM Admin pages",
      "Location": "Larry San Francisco",
      "Date": "A minute ago",
      "Status": "Complete"
    },
    {
      "ID": "#CM9833",
      "Name": "Drew Cano",
      "Project": "Client Project",
      "Location": "Bagwell Avenue Ocala",
      "Date": "1 hour ago",
      "Status": "Pending"
    },
    {
      "ID": "#CM9834",
      "Name": "Orlando Diggs",
      "Project": "Admin Dashboard",
      "Location": "Washburn Baton Rouge",
      "Date": "Yesterday",
      "Status": "Approved"
    },
    {
      "ID": "#CM9835",
      "Name": "Andi Lane",
      "Project": "App Landing Page",
      "Location": "Nest Lane Olivette",
      "Date": "Feb 2, 2023",
      "Status": "Rejected"
    },
    {
      "ID": "#CM9836",
      "Name": "Natali Craig",
      "Project": "Landing Page",
      "Location": "Meadow Lane Oakland",
      "Date": "Just now",
      "Status": "In Progress"
    },
    {
      "ID": "#CM9837",
      "Name": "Kate Morrison",
      "Project": "CRM Admin pages",
      "Location": "Larry San Francisco",
      "Date": "A minute ago",
      "Status": "Complete"
    },
    {
      "ID": "#CM9838",
      "Name": "Drew Cano",
      "Project": "Client Project",
      "Location": "Bagwell Avenue Ocala",
      "Date": "1 hour ago",
      "Status": "Pending"
    },
    {
      "ID": "#CM9839",
      "Name": "Orlando Diggs",
      "Project": "Admin Dashboard",
      "Location": "Washburn Baton Rouge",
      "Date": "Yesterday",
      "Status": "Approved"
    },
    {
      "ID": "#CM9840",
      "Name": "Andi Lane",
      "Project": "App Landing Page",
      "Location": "Nest Lane Olivette",
      "Date": "Feb 2, 2023",
      "Status": "Rejected"
    },
    {
      "ID": "#CM9841",
      "Name": "Natali Craig",
      "Project": "Landing Page",
      "Location": "Meadow Lane Oakland",
      "Date": "Just now",
      "Status": "In Progress"
    },
    {
      "ID": "#CM9842",
      "Name": "Kate Morrison",
      "Project": "CRM Admin pages",
      "Location": "Larry San Francisco",
      "Date": "A minute ago",
      "Status": "Complete"
    },
    {
      "ID": "#CM9843",
      "Name": "Drew Cano",
      "Project": "Client Project",
      "Location": "Bagwell Avenue Ocala",
      "Date": "1 hour ago",
      "Status": "Pending"
    },
    {
      "ID": "#CM9844",
      "Name": "Orlando Diggs",
      "Project": "Admin Dashboard",
      "Location": "Washburn Baton Rouge",
      "Date": "Yesterday",
      "Status": "Approved"
    },
    {
      "ID": "#CM9845",
      "Name": "Andi Lane",
      "Project": "App Landing Page",
      "Location": "Nest Lane Olivette",
      "Date": "Feb 2, 2023",
      "Status": "Rejected"
    },
    {
      "ID": "#CM9846",
      "Name": "Natali Craig",
      "Project": "Landing Page",
      "Location": "Meadow Lane Oakland",
      "Date": "Just now",
      "Status": "In Progress"
    },
    {
      "ID": "#CM9847",
      "Name": "Kate Morrison",
      "Project": "CRM Admin pages",
      "Location": "Larry San Francisco",
      "Date": "A minute ago",
      "Status": "Complete"
    },
    {
      "ID": "#CM9848",
      "Name": "Drew Cano",
      "Project": "Client Project",
      "Location": "Bagwell Avenue Ocala",
      "Date": "1 hour ago",
      "Status": "Pending"
    },
    {
      "ID": "#CM9849",
      "Name": "Orlando Diggs",
      "Project": "Admin Dashboard",
      "Location": "Washburn Baton Rouge",
      "Date": "Yesterday",
      "Status": "Approved"
    },
    {
      "ID": "#CM9850",
      "Name": "Andi Lane",
      "Project": "App Landing Page",
      "Location": "Nest Lane Olivette",
      "Date": "Feb 2, 2023",
      "Status": "Rejected"
    }
  ]
  ,

  // Status configuration with colors
  statusConfig: {
    Approved: "#FFC555",
    Pending: "#59A8D4",
    Complete: "#4AA785",
    "In Progress": "#8A8CD9",
    Rejected: "#9FA1A2",
  },

  // Status filter options for dropdown
  statusOptions: [
    { value: "all", label: "All", color: "#666" },
    { value: "pending", label: "Pending", color: "#59A8D4" },
    { value: "in progress", label: "In Progress", color: "#8A8CD9" },
    { value: "approved", label: "Approved", color: "#FFC555" },
    { value: "complete", label: "Complete", color: "#4AA785" },
    { value: "rejected", label: "Rejected", color: "#9FA1A2" },
  ],

  // Table configuration
  tableConfig: {
    columns: [
      { key: "ID", label: "Order ID", sortable: true },
      { key: "Name", label: "User", sortable: false },
      { key: "Project", label: "Project", sortable: false },
      { key: "Location", label: "Address", sortable: false },
      { key: "Date", label: "Date", sortable: false },
      { key: "Status", label: "Status", sortable: false },
    ],
    searchableFields: ["ID", "Name", "Project", "Location", "Date", "Status"],
  },

  // Avatar colors for users
  avatarColors: [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ],

  // Toolbar configuration
  toolbar: {
    searchPlaceholder: "Search orders...",
    tooltips: {
      add: "Add new order",
      filter: "Filter by status",
      sort: "Sort by Order ID",
    },
  },
};

// =============================================================================
// APP METADATA
// =============================================================================

export const APP_METADATA = {
  name: "Juspay Dashboard",
  description: "Modern dashboard built with Next.js and Tailwind CSS",
  version: "1.0.0",
  author: "Juspay Team",
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get data by category and subcategory
 * @param {string} category - Main data category (e.g., 'SIDEBAR_DATA', 'TOPBAR_DATA')
 * @param {string} subcategory - Subcategory within the main category
 * @returns {any} The requested data
 */
export const getAppData = (category, subcategory = null) => {
  const categoryMap = {
    sidebar: SIDEBAR_DATA,
    topbar: TOPBAR_DATA,
    stats: STATS_DATA,
    orders: ORDERS_DATA,
    layout: LAYOUT_CONFIG,
    app: APP_METADATA,
  };

  const categoryData = categoryMap[category.toLowerCase()];
  if (!categoryData) {
    console.warn(`Category '${category}' not found in app data`);
    return null;
  }

  if (subcategory) {
    return categoryData[subcategory] || null;
  }

  return categoryData;
};

/**
 * Get all data for easy destructuring
 * @returns {object} All app data categories
 */
export const getAllAppData = () => ({
  sidebar: SIDEBAR_DATA,
  topbar: TOPBAR_DATA,
  stats: STATS_DATA,
  orders: ORDERS_DATA,
  layout: LAYOUT_CONFIG,
  app: APP_METADATA,
});