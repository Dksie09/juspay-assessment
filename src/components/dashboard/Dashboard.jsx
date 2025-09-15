import React from "react";
import StatCards from "@/components/Dashboard/StatCards";
import BarChartCard from "@/components/dashboard/BarChartCard";
import RevenueChartCard from "@/components/dashboard/RevenueChartCard";
import LocationCard from "@/components/dashboard/LocationCard";
import SalesTableCard from "@/components/dashboard/SalesTableCard";
import RadialSalesCard from "@/components/dashboard/RadialSalesCard";

function Dashboard() {
  return (
    <div className="py-4 flex flex-col gap-7">
      <div className="flex gap-7 h-[252px]">
        <StatCards />
        <BarChartCard />
      </div>
      <div className="flex gap-7 h-[318px]">
        <RevenueChartCard />
        <LocationCard />
      </div>

      <div className="flex gap-7 h-[336px]">
        <SalesTableCard />
        <RadialSalesCard />
      </div>
    </div>
  );
}

export default Dashboard;
