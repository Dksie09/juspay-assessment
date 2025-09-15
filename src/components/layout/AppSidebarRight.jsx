"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarRail,
} from "@/components/ui/sidebar";

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
  <div className="p-1 flex gap-2">
    <img
      src={contact.avatar}
      alt={`${contact.name} avatar`}
      className="w-6 h-6"
    />
    <h5 className="text-foreground">{contact.name}</h5>
  </div>
);

export function AppSidebarRight({
  notifications = NOTIFICATIONS,
  activities = ACTIVITIES,
  contacts = CONTACTS,
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
