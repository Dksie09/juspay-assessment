"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { SIDEBAR_DATA } from "@/lib/constants";

// Updated components with exact same styling as normal sidebars
const FavouriteItem = ({ item }) => (
  <div
    key={item.id}
    className="relative flex items-center gap-1 px-3 py-2 text-sm"
  >
    {item.name}
  </div>
);

const DashboardItem = ({ item }) => {
  if (!item.isCollapsible) {
    return (
      <div
        key={item.id}
        className={`relative flex items-center gap-1 px-3 py-2 rounded-md ${
          item.isActive ? "bg-sidebar-accent pl-5" : ""
        }`}
      >
        {item.isActive && (
          <div className="w-1 h-4 bg-selectbar absolute left-0 rounded-full" />
        )}
        <Icon name={item.icon} className="w-4 h-4 shrink-0" />
        <span className="text-sm font-normal leading-5 truncate">
          {item.name}
        </span>
      </div>
    );
  }

  return (
    <div key={item.id}>
      <Collapsible className="group/collapsible">
        <CollapsibleTrigger className="relative flex items-center gap-1 px-3 py-2 w-full rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          <Icon name={item.icon} className="w-4 h-4 shrink-0" />
          <span className="text-sm truncate">{item.name}</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5">
          {item.subItems?.map((subItem) => (
            <a
              key={subItem.id}
              href={subItem.href}
              className="text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sm outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50"
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
      <CollapsibleTrigger className="relative flex items-center gap-1 px-3 py-2 w-full rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
        <Icon name={item.icon} className="w-4 h-4 shrink-0" />
        <span className="text-sm truncate">{item.name}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5">
        {item.subItems?.map((subItem) => (
          <a
            key={subItem.id}
            href={subItem.href}
            className="text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sm outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50"
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
  userAvatar = SIDEBAR_DATA.user.avatar,
  userName = SIDEBAR_DATA.user.name,
  userFallback = SIDEBAR_DATA.user.fallback,
  favourites = SIDEBAR_DATA.favourites,
  dashboardItems = SIDEBAR_DATA.dashboardItems,
  pageItems = SIDEBAR_DATA.pageItems,
  version = SIDEBAR_DATA.user.version,
}) {
  return (
    <div className="flex h-full flex-col gap-2 px-4 py-5">
      {/* Header - exact replica with proper spacing */}
      <div className="flex flex-col gap-2 p-1">
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

      {/* Content - exact replica with proper sidebar styling */}
      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto">
        {/* Favourites */}
        <div className="relative flex w-full min-w-0 flex-col gap-1">
          <div className="text-foreground-muted ring-sidebar-ring flex h-8 py-1 shrink-0 items-center rounded-md px-2 text-sm font-normal leading-5 justify-between">
            <span>Fɑvourites</span>
            <span className="text-foreground-muted-disabled">Recently</span>
          </div>
          <div className="flex flex-col gap-1">
            {favourites.map((item) => (
              <FavouriteItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Dashboards */}
        <div className="relative flex w-full min-w-0 flex-col gap-1">
          <div className="text-foreground-muted ring-sidebar-ring flex h-8 py-1 shrink-0 items-center rounded-md px-2 text-sm font-medium leading-5">
            Dɑshboɑrds
          </div>
          <div className="flex w-full min-w-0 flex-col gap-1">
            {dashboardItems.map((item) => (
              <DashboardItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Pages */}
        <div className="relative flex w-full min-w-0 flex-col gap-1">
          <div className="text-foreground-muted ring-sidebar-ring flex h-8 py-1 shrink-0 items-center rounded-md px-2 text-sm font-medium leading-5">
            Pages
          </div>
          <div className="flex w-full min-w-0 flex-col gap-1">
            {pageItems.map((item) => (
              <PageItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer - exact replica */}
      <div className="flex flex-col gap-2 p-2">
        <div className="text-xs text-muted-foreground">{version}</div>
      </div>
    </div>
  );
}

export function MobileRightSidebar({
  notifications = SIDEBAR_DATA.notifications,
  activities = SIDEBAR_DATA.activities,
  contacts = SIDEBAR_DATA.contacts,
}) {
  return (
    <div className="flex h-full flex-col gap-2 p-1">
      <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-auto p-4">
        {/* Notifications - exact same styling as normal sidebar */}
        <div className="relative flex w-full min-w-0 flex-col gap-1">
          <h3 className="font-semibold py-2">Notifications</h3>
          <div className="flex flex-col gap-2">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        </div>

        {/* Activities - exact same styling as normal sidebar */}
        <div className="relative flex w-full min-w-0 flex-col gap-1">
          <h3 className="font-semibold py-2">Activities</h3>
          <div className="flex flex-col gap-2">
            {activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </div>

        {/* Contacts - exact same styling as normal sidebar */}
        <div className="relative flex w-full min-w-0 flex-col gap-1">
          <h3 className="font-semibold py-2">Contacts</h3>
          <div className="flex flex-col gap-2">
            {contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
