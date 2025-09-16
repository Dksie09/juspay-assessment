"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Table({ className, ...props }) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }) {
  return (
    <thead
      data-slot="table-header"
      className={cn("border-b border-input", className)}
      {...props}
    />
  );
}

function TableBody({ className, separator = false, ...props }) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("", className)}
      data-separator={separator}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("bg-muted/50 border-t font-medium", className)}
      {...props}
    />
  );
}

function TableRow({ className, ...props }) {
  const parentElement = React.useContext(TableContext);
  const isBodyRow = parentElement?.separator;

  return (
    <tr
      data-slot="table-row"
      className={cn(
        "transition-colors duration-150 ease-out hover:bg-accent/60 focus:bg-accent keyboard-focusable",
        isBodyRow && "border-b border-input",
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }) {
  return (
    <>
      <th
        data-slot="table-head"
        className={cn(
          "text-foreground-muted py-2 px-3 text-left align-middle text-xs font-normal leading-[18px] whitespace-nowrap",
          className
        )}
        {...props}
      />
    </>
  );
}

function TableCell({ className, ...props }) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "text-foreground py-2 px-3 align-middle text-xs font-normal leading-[18px] whitespace-nowrap",
        className
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

// Header separator component
function TableHeaderSeparator({ className, ...props }) {
  return (
    <tr className="border-none">
      <td
        colSpan="100%"
        className={cn("h-[1px] bg-foreground-muted-disabled p-0", className)}
        {...props}
      />
    </tr>
  );
}

// Context to pass separator info to TableRow
const TableContext = React.createContext();

// Updated TableBody with context provider
function TableBodyWithContext({
  className,
  separator = false,
  children,
  ...props
}) {
  return (
    <TableContext.Provider value={{ separator }}>
      <tbody data-slot="table-body" className={cn("", className)} {...props}>
        {children}
      </tbody>
    </TableContext.Provider>
  );
}

TableBody = TableBodyWithContext;

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableHeaderSeparator,
};
