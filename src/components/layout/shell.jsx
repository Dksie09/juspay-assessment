"use client";
import React, { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebarLeft } from "@/components/layout/AppSidebarLeft";
import { AppSidebarRight } from "@/components/layout/AppSidebarRight";
import Topbar from "@/components/layout/Topbar";
import { LayoutProvider } from "@/hooks/use-layout";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileLeftSidebar, MobileRightSidebar } from "@/components/layout/MobileSidebarContent";

const LEFT_SIDEBAR_WIDTH = "212px";
const RIGHT_SIDEBAR_WIDTH = "280px";

function Shell({ children }) {
  const isMobile = useIsMobile();
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [leftSheetOpen, setLeftSheetOpen] = useState(false);
  const [rightSheetOpen, setRightSheetOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Auto-close mobile sheets when transitioning to desktop
  useEffect(() => {
    if (!isMobile) {
      setLeftSheetOpen(false);
      setRightSheetOpen(false);
    }
  }, [isMobile]);

  const handleLeftToggle = () => {
    if (isMobile) {
      setLeftSheetOpen(!leftSheetOpen);
    } else {
      setLeftOpen(!leftOpen);
    }
  };

  const handleRightToggle = () => {
    if (isMobile) {
      setRightSheetOpen(!rightSheetOpen);
    } else {
      setRightOpen(!rightOpen);
    }
  };

  const handleIconClick = (iconName) => {
    if (iconName === "SidePanel") {
      handleRightToggle();
    }
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <LayoutProvider leftOpen={!isMobile && leftOpen} rightOpen={!isMobile && rightOpen}>
      <div className="flex min-h-screen w-full">
        {/* Left Sidebar - Hidden on mobile */}
        {!isMobile && (
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
        )}

        {/* Mobile Left Sheet */}
        <Sheet open={leftSheetOpen} onOpenChange={setLeftSheetOpen}>
          <SheetContent side="left" className="w-[280px] p-0">
            <MobileLeftSidebar />
          </SheetContent>
        </Sheet>

        <main className="flex-1 flex flex-col min-w-0">
          <div className="sticky top-0 z-50 bg-background">
            <Topbar
              onToggleClick={handleLeftToggle}
              onIconClick={handleIconClick}
              isMobile={isMobile}
              searchValue={searchValue}
              onSearchChange={handleSearchChange}
            />
          </div>
          <div className="flex-1 p-4">{children}</div>
        </main>

        {/* Right Sidebar - Hidden on mobile */}
        {!isMobile && (
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
        )}

        {/* Mobile Right Sheet */}
        <Sheet open={rightSheetOpen} onOpenChange={setRightSheetOpen}>
          <SheetContent side="right" className="w-[280px] p-0">
            <MobileRightSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </LayoutProvider>
  );
}

export default Shell;
