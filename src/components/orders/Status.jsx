import React from "react";
import { ORDERS_DATA } from "@/lib/constants";

function Status({ status }) {
  const color = ORDERS_DATA.statusConfig[status];

  if (!color) {
    console.warn(`Unknown status: ${status}`);
    return null;
  }

  return (
    <div className="flex items-center">
      <div
        className="w-[6px] h-[6px] rounded-full m-[5px]"
        style={{ backgroundColor: color }}
      />
      <span className="text-xs" style={{ color: color }}>
        {status}
      </span>
    </div>
  );
}

export default Status;
