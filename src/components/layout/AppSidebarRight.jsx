"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SIDEBAR_DATA } from "@/lib/constants";

// Reusable components maintaining exact original styling
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
  <div className="p-1 flex gap-2 items-start group/contact cursor-pointer">
    <img
      src={contact.avatar}
      alt={`${contact.name} avatar`}
      className="w-6 h-6"
    />
    <div className="flex flex-col overflow-hidden justify-start">
      <h5 className="text-foreground leading-4">{contact.name}</h5>
      <p className="text-foreground-muted text-xs mt-0 max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover/contact:mt-0.5 group-hover/contact:max-h-5 group-hover/contact:opacity-100">
        {contact.lastSeen}
      </p>
    </div>
  </div>
);

export function AppSidebarRight({
  notifications = SIDEBAR_DATA.notifications,
  activities = SIDEBAR_DATA.activities,
  contacts = SIDEBAR_DATA.contacts,
  onNotificationClick,
  onActivityClick,
  onContactClick,
}) {
  return (
    <Sidebar side="right" className="p-5">
      <SidebarContent className="gap-6">
        <SidebarGroup>
          <h3 className="font-semibold py-2">Notifications</h3>
          <SidebarGroupContent className="gap-2">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <h3 className="font-semibold py-2">Activities</h3>
          <SidebarGroupContent className="gap-2">
            {activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <h3 className="font-semibold py-2">Contacts</h3>
          <SidebarGroupContent className="gap-2">
            {contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
