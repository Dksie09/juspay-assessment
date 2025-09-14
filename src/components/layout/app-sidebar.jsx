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

import { LayoutDashboard, User, Folder, ChevronDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export function AppSidebar() {
  return (
    <Sidebar className="px-5 py-4">
      {/* Top: avatar + name */}
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src="/images/avatar.png" alt="user" />
            <AvatarFallback>BW</AvatarFallback>
          </Avatar>
          <span
            className="text-foreground
             text-sm 
             font-normal 
             leading-5 
          "
          >
            ByeWind
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex flex-col gap-4 py-4">
        {/* Favourites */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex gap-2">
            <button className="text-foreground-muted px-2">Fɑvourites</button>
            <button className="text-foreground-muted-disabled px-2">
              Recently
            </button>
          </SidebarGroupLabel>
          <SidebarGroupContent className="ml-1 marker:w-6 marker:h-6 marker:text-foreground-muted">
            <SidebarMenuItem className="px-2 py-1">Overview</SidebarMenuItem>
            <SidebarMenuItem className="px-2 py-1">Projects</SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Dashboards */}
        <SidebarGroup>
          <SidebarGroupLabel className="ml-1">Dɑshboɑrds</SidebarGroupLabel>
          <SidebarGroupContent className="ml-1">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Icon name="ChartPieSlice" className="w-5 h-5" />
                  <span className=" text-sm font-normal leading-5  ">
                    Defɑult
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger>
                    <Icon name="eCommerce" className="w-5 h-5" />
                    <span>eCommerce</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 ml-3">
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 2
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger>
                    <Icon name="Projects" className="w-5 h-5" />
                    <span>Projects</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 ml-3">
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 2
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger>
                    <Icon name="OnlineCourses" className="w-5 h-5" />
                    <span>Online Courses</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 ml-3">
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 2
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Pages */}
        <SidebarGroup>
          <SidebarGroupLabel className="ml-1">Pages</SidebarGroupLabel>
          <SidebarGroupContent className="ml-1">
            <SidebarMenu>
              <SidebarMenuItem>
                <Collapsible defaultOpen className="group/collapsible">
                  <CollapsibleTrigger>
                    <Icon name="UserProfile" className="w-5 h-5" />
                    <span>User Profile</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 ml-3">
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Overview
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Campaigns
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Documents
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Followers
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger>
                    <Icon name="Account" className="w-5 h-5" />
                    <span>Account</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 ml-3">
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 2
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger>
                    <Icon name="Corporate" className="w-5 h-5" />
                    <span>Corporate</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 ml-3">
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 2
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger>
                    <Icon name="Blog" className="w-5 h-5" />
                    <span>Blog</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 ml-3">
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 2
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger>
                    <Icon name="Social" className="w-5 h-5" />
                    <span>Social</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 ml-3">
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-foreground hover:bg-sidebar-accent rounded-md"
                    >
                      Option 2
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bottom footer if needed */}
      <SidebarFooter>
        <div className="p-2 text-xs text-muted-foreground">v1.0.0</div>
      </SidebarFooter>
    </Sidebar>
  );
}
