"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { useState } from "react";

// Exact same data as AppSidebarLeft
const FAVOURITES = [
  { id: 1, name: "Overview" },
  { id: 2, name: "Projects" },
];

const DASHBOARD_ITEMS = [
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
];

const PAGE_ITEMS = [
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
];

// Exact same data as AppSidebarRight
const NOTIFICATIONS = [
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
];

const ACTIVITIES = [
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
];

const CONTACTS = [
  { id: 1, name: "Natali Craig", avatar: "/avatars/Natali Craig.png" },
  { id: 2, name: "Drew Cano", avatar: "/avatars/Drew Cano.png" },
  { id: 3, name: "Orlando Diggs", avatar: "/avatars/Orlando Diggs.png" },
  { id: 4, name: "Andi Lane", avatar: "/avatars/Andi Lane.png" },
  { id: 5, name: "Kate Morrison", avatar: "/avatars/Kate Morrison.png" },
  { id: 6, name: "Koray Okumus", avatar: "/avatars/Koray Okumus.png" },
];

// Exact replica components for mobile
const FavouriteItem = ({ item }) => (
  <div key={item.id} className="px-2 py-1">
    {item.name}
  </div>
);

const DashboardItem = ({ item }) => {
  if (!item.isCollapsible) {
    return (
      <div key={item.id} className={`flex items-center gap-2 px-2 py-1 rounded-md ${item.isActive ? 'bg-sidebar-accent' : ''}`}>
        <Icon name={item.icon} className="w-5 h-5" />
        <span className="text-sm font-normal leading-5">{item.name}</span>
      </div>
    );
  }

  return (
    <div key={item.id}>
      <Collapsible className="group/collapsible">
        <CollapsibleTrigger className="flex items-center gap-2 px-2 py-1 w-full">
          <Icon name={item.icon} className="w-5 h-5" />
          <span>{item.name}</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-6 space-y-1 ml-3">
          {item.subItems?.map((subItem) => (
            <a
              key={subItem.id}
              href={subItem.href}
              className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
            >
              {subItem.name}
            </a>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

const PageItem = ({ item }) => (
  <div key={item.id}>
    <Collapsible defaultOpen={item.isDefaultOpen} className="group/collapsible">
      <CollapsibleTrigger className="flex items-center gap-2 px-2 py-1 w-full">
        <Icon name={item.icon} className="w-5 h-5" />
        <span>{item.name}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-6 space-y-1 ml-3">
        {item.subItems?.map((subItem) => (
          <a
            key={subItem.id}
            href={subItem.href}
            className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
          >
            {subItem.name}
          </a>
        ))}
      </CollapsibleContent>
    </Collapsible>
  </div>
);

const NotificationItem = ({ notification }) => (
  <div className="p-1 flex gap-2">
    <div className="bg-card-accent p-1 rounded-md h-6 w-6">
      <img
        src={notification.icon}
        alt={notification.iconAlt}
        className="w-4 h-4"
      />
    </div>
    <div className="flex flex-col">
      <h5 className="text-foreground">{notification.title}</h5>
      <p className="text-foreground-muted">{notification.timestamp}</p>
    </div>
  </div>
);

const ActivityItem = ({ activity }) => (
  <div className="p-1 flex gap-2">
    <img
      src={activity.avatar}
      alt={`${activity.user} avatar`}
      className="w-6 h-6"
    />
    <div className="flex flex-col">
      <h5 className="text-foreground">{activity.title}</h5>
      <p className="text-foreground-muted">{activity.timestamp}</p>
    </div>
  </div>
);

const ContactItem = ({ contact }) => (
  <div className="p-1 flex gap-2">
    <img
      src={contact.avatar}
      alt={`${contact.name} avatar`}
      className="w-6 h-6"
    />
    <h5 className="text-foreground">{contact.name}</h5>
  </div>
);

export function MobileLeftSidebar({
  userAvatar = "/avatars/UserProfile.png",
  userName = "ByeWind",
  userFallback = "BW",
  favourites = FAVOURITES,
  dashboardItems = DASHBOARD_ITEMS,
  pageItems = PAGE_ITEMS,
  version = "v1.0.0",
}) {
  return (
    <div className="flex h-full flex-col p-5">
      {/* Header - exact replica */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={userAvatar} alt="user" />
            <AvatarFallback>{userFallback}</AvatarFallback>
          </Avatar>
          <span className="text-foreground text-sm font-normal leading-5">
            {userName}
          </span>
        </div>
      </div>

      {/* Content - exact replica */}
      <div className="flex flex-col gap-4 py-4 flex-1 overflow-auto">
        {/* Favourites */}
        <div className="pb-3">
          <div className="flex justify-between mb-2">
            <button className="text-foreground-muted px-2">Fɑvourites</button>
            <button className="text-foreground-muted-disabled px-2 text-right">
              Recently
            </button>
          </div>
          <div className="ml-1">
            {favourites.map((item) => (
              <FavouriteItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Dashboards */}
        <div className="pb-3">
          <div className="ml-1 mb-2 text-sm font-medium">Dɑshboɑrds</div>
          <div className="ml-1 space-y-1">
            {dashboardItems.map((item) => (
              <DashboardItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Pages */}
        <div className="pb-3">
          <div className="ml-1 mb-2 text-sm font-medium">Pages</div>
          <div className="ml-1 space-y-1">
            {pageItems.map((item) => (
              <PageItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer - exact replica */}
      <div className="p-2 text-xs text-muted-foreground">{version}</div>
    </div>
  );
}

export function MobileRightSidebar({
  notifications = NOTIFICATIONS,
  activities = ACTIVITIES,
  contacts = CONTACTS,
}) {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex flex-col gap-6 flex-1 overflow-auto">
        {/* Notifications */}
        <div>
          <h3 className="font-semibold py-2">Notifications</h3>
          <div className="space-y-2">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        </div>

        {/* Activities */}
        <div>
          <h3 className="font-semibold py-2">Activities</h3>
          <div className="space-y-2">
            {activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="font-semibold py-2">Contacts</h3>
          <div className="space-y-2">
            {contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}