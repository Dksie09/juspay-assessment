"use client";
import React from "react";
import { z } from "zod";
import StatCards from "@/components/dashboard/StatCards";
import BarChartCard from "@/components/dashboard/BarChartCard";
import RevenueChartCard from "@/components/dashboard/RevenueChartCard";
import LocationCard from "@/components/dashboard/LocationCard";
import SalesTableCard from "@/components/dashboard/SalesTableCard";
import RadialSalesCard from "@/components/dashboard/RadialSalesCard";
import { useLayout } from "@/hooks/use-layout";
import LoadingSpinner from "@/components/ui/loading-spinner";

const DashboardProps = z
  .object({
    className: z.string().optional(),
  })
  .optional();

const Dashboard = React.memo(function Dashboard(props = {}) {
  // Validate props with Zod
  DashboardProps.parse(props);

  const { isCompact, availableWidth } = useLayout();
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulate loading for dashboard data
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const shouldStack = isCompact || availableWidth < 900;

  if (isLoading) {
    return (
      <div className="py-4 flex flex-col gap-4 lg:gap-7">
        <div className="flex items-center justify-center h-64">
          <div className="flex flex-col items-center gap-3">
            <LoadingSpinner size="lg" />
            <p className="text-sm text-muted-foreground">
              Loading dashboard...
            </p>
          </div>
        </div>
      </div>
    );
  }

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
        <div className={shouldStack ? "w-full" : "flex-1 h-[252px]"}>
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
});

export default Dashboard;

Dashboard.displayName = "Dashboard";
