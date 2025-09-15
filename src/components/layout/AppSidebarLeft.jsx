"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

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

const FavouriteItem = ({ item }) => (
  <SidebarMenuItem key={item.id} className="px-2 py-1">
    {item.name}
  </SidebarMenuItem>
);

const DashboardItem = ({ item }) => {
  if (!item.isCollapsible) {
    return (
      <SidebarMenuItem key={item.id}>
        <SidebarMenuButton asChild isActive={item.isActive}>
          <Icon name={item.icon} className="w-5 h-5" />
          <span className=" text-sm font-normal leading-5  ">{item.name}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem key={item.id}>
      <Collapsible className="group/collapsible">
        <CollapsibleTrigger>
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
    </SidebarMenuItem>
  );
};

const PageItem = ({ item }) => (
  <SidebarMenuItem key={item.id}>
    <Collapsible defaultOpen={item.isDefaultOpen} className="group/collapsible">
      <CollapsibleTrigger>
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
  </SidebarMenuItem>
);

export function AppSidebarLeft({
  userAvatar = "/avatars/UserProfile.png",
  userName = "ByeWind",
  userFallback = "BW",
  favourites = FAVOURITES,
  dashboardItems = DASHBOARD_ITEMS,
  pageItems = PAGE_ITEMS,
  version = "v1.0.0",
}) {
  return (
    <Sidebar side="left" className="p-5">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={userAvatar} alt="user" />
            <AvatarFallback>{userFallback}</AvatarFallback>
          </Avatar>
          <span
            className="text-foreground
             text-sm 
             font-normal 
             leading-5 
          "
          >
            {userName}
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex flex-col gap-4 py-4">
        <SidebarGroup className="pb-3">
          <SidebarGroupLabel className="flex justify-between">
            <button className="text-foreground-muted px-2">Fɑvourites</button>
            <button className="text-foreground-muted-disabled px-2 text-right">
              Recently
            </button>
          </SidebarGroupLabel>
          <SidebarGroupContent className="ml-1 marker:w-6 marker:h-6 marker:text-foreground-muted">
            {favourites.map((item) => (
              <FavouriteItem key={item.id} item={item} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="pb-3">
          <SidebarGroupLabel className="ml-1">Dɑshboɑrds</SidebarGroupLabel>
          <SidebarGroupContent className="ml-1">
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <DashboardItem key={item.id} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="pb-3">
          <SidebarGroupLabel className="ml-1">Pages</SidebarGroupLabel>
          <SidebarGroupContent className="ml-1">
            <SidebarMenu>
              {pageItems.map((item) => (
                <PageItem key={item.id} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-2 text-xs text-muted-foreground">{version}</div>
      </SidebarFooter>
    </Sidebar>
  );
}
