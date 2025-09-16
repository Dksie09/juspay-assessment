"use client";

import React from "react";
import { SearchInput } from "@/components/ui/search-input";
import IconButton from "@/components/ui/iconbutton";
import StatusFilterDropdown from "./StatusFilterDropdown";
import { ORDERS_DATA } from "@/lib/constants";

function TableToolbarBar({
  searchValue,
  onSearchChange,
  onFilterClick,
  onSortClick,
  onAddClick,
  selectedStatus,
  onStatusChange,
}) {
  const handleIconClick = (iconName, callback) => {
    console.log(`${iconName} clicked`);
    if (callback) callback();
  };

  return (
    <div className="flex p-2 items-center content-center gap-4 self-stretch flex-wrap justify-between rounded-lg bg-card-primary">
      {/* Left side - Icon buttons */}
      <div className="flex items-center gap-2">
        <IconButton
          iconName="Plus"
          onClick={() => handleIconClick("Plus", onAddClick)}
          tooltip={ORDERS_DATA.toolbar.tooltips.add}
        />

        {/* Filter dropdown integrated with icon button */}
        <StatusFilterDropdown
          selectedStatus={selectedStatus}
          onStatusChange={onStatusChange}
          triggerAsIcon={true}
        />

        <IconButton
          iconName="Sort"
          onClick={() => handleIconClick("Sort", onSortClick)}
          tooltip={ORDERS_DATA.toolbar.tooltips.sort}
        />
      </div>

      {/* Right side - Search input */}
      <div className="flex-1 max-w-[160px]">
        <SearchInput
          value={searchValue}
          onChange={onSearchChange}
          placeholder={ORDERS_DATA.toolbar.searchPlaceholder}
          bgcolor="bg-background"
          border={true}
        />
      </div>
    </div>
  );
}

export default TableToolbarBar;
