"use client";

import React, { useState } from "react";
import TableToolbarBar from "./TableToolbarBar";
import OrderTable from "./OrderTable";
import { ORDERS_DATA } from "@/lib/constants";

function Orders() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState(null); // null, 'asc', 'desc'

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSortToggle = () => {
    if (sortOrder === null) {
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
  };

  const handleFilterClick = () => {
    // This will be handled by the dropdown menu component directly
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleAddClick = () => {
    console.log("Add new order clicked");
  };

  return (
    <div className="py-5 flex flex-col gap-3">
      <TableToolbarBar
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onFilterClick={handleFilterClick}
        onSortClick={handleSortToggle}
        onAddClick={handleAddClick}
        selectedStatus={selectedStatus}
        onStatusChange={handleStatusChange}
      />

      <OrderTable
        data={ORDERS_DATA.orders}
        searchValue={searchValue}
        selectedStatus={selectedStatus}
        sortOrder={sortOrder}
        onSortToggle={handleSortToggle}
      />
    </div>
  );
}

export default Orders;
