"use client";

import React, { useState, useMemo } from "react";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Status from "./Status";
import Icon from "../ui/icon";
import { ORDERS_DATA } from "@/lib/constants";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useTableNavigation } from "@/hooks/use-keyboard-shortcuts";
import LoadingSpinner from "@/components/ui/loading-spinner";

const OrderTableProps = z.object({
  data: z.array(
    z.object({
      ID: z.string(),
      Name: z.string(),
      Project: z.string(),
      Location: z.string(),
      Date: z.string(),
      Status: z.string(),
    })
  ),
  searchValue: z.string(),
  selectedStatus: z.string(),
  sortOrder: z.enum(["asc", "desc"]).nullable(),
  onSortToggle: z.function(),
});

const OrderTable = React.memo(function OrderTable(props) {
  // Validate props with Zod
  const { data, searchValue, selectedStatus, sortOrder, onSortToggle } =
    OrderTableProps.parse(props);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;

  // Simulate loading for table data
  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [searchValue, selectedStatus, sortOrder]);

  // Filter and search data
  const filteredData = useMemo(() => {
    let filtered = [...data];

    // Apply status filter
    if (selectedStatus && selectedStatus !== "all") {
      filtered = filtered.filter(
        (item) => item.Status?.toLowerCase() === selectedStatus.toLowerCase()
      );
    }

    // Apply search filter
    if (searchValue) {
      const searchLower = searchValue.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.ID?.toLowerCase().includes(searchLower) ||
          item.Name?.toLowerCase().includes(searchLower) ||
          item.Project?.toLowerCase().includes(searchLower) ||
          item.Location?.toLowerCase().includes(searchLower) ||
          item.Date?.toLowerCase().includes(searchLower) ||
          item.Status?.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    if (sortOrder) {
      filtered.sort((a, b) => {
        const aId = a.ID || "";
        const bId = b.ID || "";

        if (sortOrder === "asc") {
          return aId.localeCompare(bId);
        } else {
          return bId.localeCompare(aId);
        }
      });
    }

    return filtered;
  }, [data, searchValue, selectedStatus, sortOrder]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, selectedStatus, sortOrder]);

  // Keyboard navigation handlers
  const handleKeyboardRowSelect = (rowIndex) => {
    // Just for visual highlighting - don't toggle selection
    console.log(`Row ${rowIndex} highlighted via keyboard`);
  };

  const handleKeyboardRowActivate = (rowIndex) => {
    const order = paginatedData[rowIndex];
    if (order) {
      // Only toggle selection on Enter/Space activation
      handleRowSelect(order.ID);
    }
  };

  const { selectedRow, selectRow, tableContainerRef } = useTableNavigation({
    rowCount: paginatedData.length,
    onRowSelect: handleKeyboardRowSelect,
    onRowActivate: handleKeyboardRowActivate,
    enabled: paginatedData.length > 0,
    initialSelectedRow: -1,
  });

  const handleSelectAll = () => {
    const allSelected = selectedRows.size === paginatedData.length;
    if (allSelected) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData.map((item) => item.ID)));
    }
  };

  const handleRowSelect = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getAvatarColor = (name) => {
    const index = name.length % ORDERS_DATA.avatarColors.length;
    return ORDERS_DATA.avatarColors[index];
  };

  const isAllSelected =
    selectedRows.size === paginatedData.length && paginatedData.length > 0;
  const isIndeterminate =
    selectedRows.size > 0 && selectedRows.size < paginatedData.length;

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Generate page numbers to display
  const getVisiblePages = () => {
    const pages = [];
    const showEllipsis = totalPages > 5;

    if (!showEllipsis) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show ellipsis logic
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center h-32">
          <div className="flex flex-col items-center gap-3">
            <LoadingSpinner />
            <p className="text-sm text-muted-foreground">Loading orders...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div ref={tableContainerRef}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={isAllSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = isIndeterminate;
                  }}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              {ORDERS_DATA.tableConfig.columns.map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody separator={true}>
            {paginatedData.length > 0 ? (
              paginatedData.map((order, index) => (
                <TableRow
                  key={order.ID}
                  data-row-index={index}
                  tabIndex={0}
                  className={`
                    ${selectedRows.has(order.ID) ? "bg-muted/50" : ""}
                    table-row-focusable
                  `}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleRowSelect(order.ID);
                    }
                  }}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.has(order.ID)}
                      onCheckedChange={() => handleRowSelect(order.ID)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{order.ID}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={`/avatars/${order.Name}.png`}
                          alt="user"
                        />
                        <AvatarFallback
                          className={`text-white text-xs ${getAvatarColor(
                            order.Name
                          )}`}
                        >
                          {getInitials(order.Name)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{order.Name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{order.Project}</TableCell>
                  <TableCell>{order.Location}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" className="h-3 w-3" />
                      <span>{order.Date}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Status status={order.Status} />
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      {filteredData.length > 0 && totalPages > 1 && (
        <div className="flex justify-end px-4 py-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={currentPage === 1 ? undefined : handlePreviousPage}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
              {getVisiblePages().map((page, index) => (
                <PaginationItem key={index}>
                  {page === "..." ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      onClick={() => goToPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={
                    currentPage === totalPages ? undefined : handleNextPage
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
});

export default OrderTable;

OrderTable.displayName = "OrderTable";
