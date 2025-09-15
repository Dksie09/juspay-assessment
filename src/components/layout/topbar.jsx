"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/searchInput";
import IconButton from "@/components/ui/iconbutton";

const RIGHT_ICONS = [
  { name: "Theme", ariaLabel: "Toggle theme" },
  { name: "Clock", ariaLabel: "View time" },
  { name: "Bell", ariaLabel: "View notifications" },
  { name: "SidePanel", ariaLabel: "Toggle sidebar" },
];

const Topbar = ({
  rightIcons = RIGHT_ICONS,
  onToggleClick,
  onStarClick,
  onIconClick,
  searchPlaceholder = "Search...",
  onSearchChange,
  searchValue = "",
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

  return (
    <header className="flex px-7 py-5 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <IconButton
            iconName="SidePanel"
            onClick={onToggleClick}
            ariaLabel="Toggle menu"
          />
          <IconButton
            iconName="Star"
            onClick={onStarClick}
            ariaLabel="Add to favorites"
          />
        </div>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Default</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-start gap-5">
        <div>
          <SearchInput
            value={searchValue}
            onChange={onSearchChange || (() => console.log("Search changed"))}
            placeholder={searchPlaceholder}
            shortcut="⌘/"
            className="max-w-md w-[160px]"
          />
        </div>

        <div className="flex items-center gap-2">
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
    </header>
  );
};

export default Topbar;
