"use client";
import React from "react";
import StatCards from "@/components/Dashboard/StatCards";
import BarChartCard from "@/components/dashboard/BarChartCard";
import RevenueChartCard from "@/components/dashboard/RevenueChartCard";
import LocationCard from "@/components/dashboard/LocationCard";
import SalesTableCard from "@/components/dashboard/SalesTableCard";
import RadialSalesCard from "@/components/dashboard/RadialSalesCard";
import { useLayout } from "@/hooks/use-layout";

function Dashboard() {
  const { isCompact, isVeryCompact, availableWidth } = useLayout();

  // Determine layout based on available space rather than screen width
  const shouldStack = isCompact || availableWidth < 900;
  const shouldStackStats = isVeryCompact || availableWidth < 640;

  return (
    <div className="py-4 flex flex-col gap-4 lg:gap-7">
      {/* Top Row - Stats and Bar Chart */}
      <div
        className={`flex gap-4 lg:gap-7 ${
          shouldStack ? "flex-col" : "flex-row"
        }`}
      >
        <div className={shouldStack ? "w-full" : "flex-1"}>
          <StatCards />
        </div>
        <div
          className={`${
            shouldStack ? "w-full" : "max-w-[540px] w-full"
          } h-[252px]`}
        >
          <BarChartCard />
        </div>
      </div>

      {/* Middle Row - Revenue Chart and Location */}
      <div
        className={`flex gap-4 lg:gap-7 ${
          shouldStack ? "flex-col" : "flex-row"
        }`}
      >
        <div className={`w-full h-[318px]`}>
          <RevenueChartCard />
        </div>
        <div className={`${shouldStack ? "w-full" : "flex-1"} h-[318px]`}>
          <LocationCard />
        </div>
      </div>

      {/* Bottom Row - Sales Table and Radial Chart */}
      <div
        className={`flex gap-4 lg:gap-7 ${
          shouldStack ? "flex-col" : "flex-row md:h-[336px]"
        }`}
      >
        <div className={`w-full h-full `}>
          <SalesTableCard />
        </div>
        <div className={`${shouldStack ? "w-full" : "flex-1"}`}>
          <RadialSalesCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
