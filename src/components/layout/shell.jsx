"use client";
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebarLeft } from "@/components/layout/AppSidebarLeft";
import { AppSidebarRight } from "@/components/layout/AppSidebarRight";
import Topbar from "@/components/layout/Topbar";
import { LayoutProvider } from "@/hooks/use-layout";

const LEFT_SIDEBAR_WIDTH = "212px";
const RIGHT_SIDEBAR_WIDTH = "280px";

function Shell({ children }) {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  const handleLeftToggle = () => setLeftOpen(!leftOpen);
  const handleRightToggle = () => setRightOpen(!rightOpen);

  const handleIconClick = (iconName) => {
    if (iconName === "SidePanel") {
      handleRightToggle();
    }
  };

  return (
    <LayoutProvider leftOpen={leftOpen} rightOpen={rightOpen}>
      <div className="flex min-h-screen w-full">
        <div
          className={`transition-all duration-200 ease-linear ${
            leftOpen ? `w-[${LEFT_SIDEBAR_WIDTH}]` : "w-0"
          } overflow-hidden`}
        >
          <SidebarProvider
            defaultOpen={leftOpen}
            open={leftOpen}
            onOpenChange={setLeftOpen}
            width={LEFT_SIDEBAR_WIDTH}
          >
            <div style={{ width: LEFT_SIDEBAR_WIDTH }}>
              <AppSidebarLeft />
            </div>
          </SidebarProvider>
        </div>

        <main className="flex-1 flex flex-col min-w-0">
          <div className="sticky top-0 z-50 bg-background">
            <Topbar
              onToggleClick={handleLeftToggle}
              onIconClick={handleIconClick}
            />
          </div>
          <div className="flex-1 p-4">{children}</div>
        </main>

        <div
          className={`transition-all duration-200 ease-linear ${
            rightOpen ? `w-[${RIGHT_SIDEBAR_WIDTH}]` : "w-0"
          } overflow-hidden`}
        >
          <SidebarProvider
            defaultOpen={rightOpen}
            open={rightOpen}
            onOpenChange={setRightOpen}
            width={RIGHT_SIDEBAR_WIDTH}
          >
            <div style={{ width: RIGHT_SIDEBAR_WIDTH }}>
              <AppSidebarRight />
            </div>
          </SidebarProvider>
        </div>
      </div>
    </LayoutProvider>
  );
}

export default Shell;
