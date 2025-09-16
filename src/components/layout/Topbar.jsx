"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from "react";
import { Menu } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SearchInput } from "@/components/ui/search-input";
import IconButton from "@/components/ui/iconbutton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TOPBAR_DATA } from "@/lib/constants";

const Topbar = ({
  rightIcons = TOPBAR_DATA.rightIcons,
  onToggleClick,
  onStarClick,
  onIconClick,
  searchPlaceholder = TOPBAR_DATA.search.placeholder,
  onSearchChange,
  searchValue = "",
  isMobile = false,
  searchInputRef,
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleIconClick = (iconName) => {
    if (iconName === "Theme" && mounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    } else {
      onIconClick?.(iconName);
    }
  };

  const handleMenuItemClick = (iconName) => {
    handleIconClick(iconName);
  };

  const handleSearchChange = (e) => {
    onSearchChange?.(e.target.value);
  };

  return (
    <header className="flex px-4 md:px-7 py-5 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          {/* LEFT sidebar toggle - uses onToggleClick */}
          <IconButton
            iconName="SidePanel"
            onClick={onToggleClick}
            ariaLabel={isMobile ? "Open menu" : "Toggle sidebar"}
          />
          {!isMobile && (
            <IconButton
              iconName="Star"
              onClick={onStarClick}
              ariaLabel="Add to favorites"
            />
          )}
        </div>

        {/* Breadcrumb - always visible */}
        <div className="ml-2">
          <Breadcrumb>
            <BreadcrumbList>
              {TOPBAR_DATA.breadcrumb.items.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {item.type === "link" ? (
                      <BreadcrumbLink href={item.href}>
                        {item.name}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{item.name}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < TOPBAR_DATA.breadcrumb.items.length - 1 && (
                    <BreadcrumbSeparator />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-5">
        {/* Desktop view - show search and all icons */}
        <div className="hidden min-[1141px]:flex items-center gap-5">
          <SearchInput
            ref={searchInputRef}
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={searchPlaceholder}
            shortcut={TOPBAR_DATA.search.shortcut}
            className="max-w-md w-[160px]"
          />

          <div className="flex items-center gap-2">
            {/* RIGHT sidebar toggle and other icons - use handleIconClick */}
            {rightIcons.map((icon) => (
              <IconButton
                key={icon.name}
                iconName={icon.name}
                onClick={() => handleIconClick(icon.name)}
                ariaLabel={icon.ariaLabel}
              />
            ))}
          </div>
        </div>

        {/* Mobile view - show toggle sidebar and dropdown menu */}
        <div className="hidden max-[1140px]:flex items-center gap-2">
          {/* RIGHT sidebar toggle - uses handleIconClick (same as desktop) */}
          <IconButton
            iconName="SidePanel"
            onClick={() => handleIconClick("SidePanel")}
            ariaLabel="Toggle sidebar"
          />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-72">
              {rightIcons
                .filter((icon) => icon.name !== "SidePanel") // Don't duplicate the sidebar toggle
                .map((icon) => (
                  <DropdownMenuItem
                    key={icon.name}
                    onClick={() => handleMenuItemClick(icon.name)}
                    className="flex items-center gap-2"
                  >
                    <IconButton iconName={icon.name} className="h-4 w-4" />
                    <span>
                      {icon.ariaLabel.replace(/^(Toggle|View|Add to) /, "")}
                    </span>
                  </DropdownMenuItem>
                ))}
              <DropdownMenuSeparator />
              <div className="p-2">
                <SearchInput
                  ref={isMobile ? searchInputRef : undefined}
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder={searchPlaceholder}
                  shortcut={TOPBAR_DATA.search.shortcut}
                  className="w-full"
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
