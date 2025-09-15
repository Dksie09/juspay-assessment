import React from "react";
import StatCards from "@/components/Dashboard/StatCards";
import BarChartCard from "@/components/dashboard/BarChartCard";
import RevenueChartCard from "@/components/dashboard/RevenueChartCard";

function Dashboard() {
  return (
    <div className="py-4 flex flex-col gap-7">
      <div className="grid grid-cols-2 gap-7 h-[252px]">
        <StatCards />
        <BarChartCard />
      </div>
      <div className="grid grid-cols-[3fr_1fr] gap-7 h-[318px]">
        <RevenueChartCard />
        <div className="bg-gray-300">div2</div>
      </div>
    </div>
  );
}

export default Dashboard;
