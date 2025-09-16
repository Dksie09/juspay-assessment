import React from "react";
import StatCard from "@/components/ui/StatCard";
import { useLayout } from "@/hooks/use-layout";
import { STATS_DATA } from "@/lib/constants";

function StatCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7 w-full h-full">
      {STATS_DATA.map((stat, index) => (
        <StatCard
          key={`${stat.title}-${index}`}
          title={stat.title}
          value={stat.value}
          rate={stat.rate}
          rateIcon={stat.rateIcon}
          variant={stat.variant}
        />
      ))}
    </div>
  );
}

export default StatCards;
