"use client";

import React from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import IconButton from "@/components/ui/iconbutton";
import { ORDERS_DATA } from "@/lib/constants";

function StatusFilterDropdown({
  selectedStatus,
  onStatusChange,
  triggerAsIcon = false,
}) {
  const currentStatus =
    ORDERS_DATA.statusOptions.find((option) => option.value === selectedStatus) ||
    ORDERS_DATA.statusOptions[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {triggerAsIcon ? (
          <div>
            <IconButton iconName="Filter" tooltip="Filter by status" />
          </div>
        ) : (
          <Button variant="outline" className="justify-between min-w-[150px]">
            <div className="flex items-center">
              <span
                className="w-[8px] h-[8px] rounded-full mr-2"
                style={{ backgroundColor: currentStatus.color }}
              />
              {currentStatus.label}
            </div>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[150px]">
        {ORDERS_DATA.statusOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onStatusChange(option.value)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <span
                className="w-[8px] h-[8px] rounded-full mr-2"
                style={{ backgroundColor: option.color }}
              />
              {option.label}
            </div>
            {selectedStatus === option.value && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default StatusFilterDropdown;
