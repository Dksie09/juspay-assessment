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
import { SIDEBAR_DATA } from "@/lib/constants";

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
  userAvatar = SIDEBAR_DATA.user.avatar,
  userName = SIDEBAR_DATA.user.name,
  userFallback = SIDEBAR_DATA.user.fallback,
  favourites = SIDEBAR_DATA.favourites,
  dashboardItems = SIDEBAR_DATA.dashboardItems,
  pageItems = SIDEBAR_DATA.pageItems,
  version = SIDEBAR_DATA.user.version,
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
