"use client";
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebarLeft } from "@/components/layout/AppSidebarLeft";
import { AppSidebarRight } from "@/components/layout/AppSidebarRight";
import Icon from "../ui/icon";

const LEFT_SIDEBAR_WIDTH = "212px";
const RIGHT_SIDEBAR_WIDTH = "280px";

function Shell({ children }) {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Sidebar with custom width */}
      <div
        className={`transition-all duration-200 ease-linear ${
          leftOpen ? `w-[${LEFT_SIDEBAR_WIDTH}]` : "w-0"
        } overflow-hidden`}
      >
        <SidebarProvider
          defaultOpen={true}
          open={true}
          onOpenChange={() => {}}
          width={LEFT_SIDEBAR_WIDTH}
        >
          <div style={{ width: LEFT_SIDEBAR_WIDTH }}>
            <AppSidebarLeft />
          </div>
        </SidebarProvider>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <button onClick={() => setLeftOpen(!leftOpen)}>
            <Icon name="SidePanel" />
          </button>
          <div className="flex-1 text-center">Your App</div>
          <button onClick={() => setRightOpen(!rightOpen)}>
            {" "}
            <Icon name="SidePanel" />
          </button>
        </header>
        <div className="flex-1 p-4">{children}</div>
      </main>

      {/* Right Sidebar with different width */}
      <div
        className={`transition-all duration-200 ease-linear ${
          rightOpen ? `w-[${RIGHT_SIDEBAR_WIDTH}]` : "w-0"
        } overflow-hidden`}
      >
        <SidebarProvider
          defaultOpen={true}
          open={true}
          onOpenChange={() => {}}
          width={RIGHT_SIDEBAR_WIDTH}
        >
          <div style={{ width: RIGHT_SIDEBAR_WIDTH }}>
            <AppSidebarRight />
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}

export default Shell;
