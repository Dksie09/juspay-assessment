import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

// IconButton component for left/right arrows
function IconButton({ iconName, onClick, className, ...props }) {
  const Icon = iconName === "LeftArrow" ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <button
      onClick={onClick}
      className={cn("flex items-center justify-center p-1", className)}
      {...props}
    >
      <Icon className="size-4" />
    </button>
  );
}

function Pagination({ className, ...props }) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("flex justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({ className, isActive, children, ...props }) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "py-1 px-2 rounded-md",
        isActive ? "bg-input" : "bg-background",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

function PaginationPrevious({ className, onClick, ...props }) {
  return (
    <IconButton
      iconName="LeftArrow"
      onClick={onClick}
      aria-label="Go to previous page"
      className={cn(className)}
      {...props}
    />
  );
}

function PaginationNext({ className, onClick, ...props }) {
  return (
    <IconButton
      iconName="RightArrow"
      onClick={onClick}
      aria-label="Go to next page"
      className={cn(className)}
      {...props}
    />
  );
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  IconButton,
};
