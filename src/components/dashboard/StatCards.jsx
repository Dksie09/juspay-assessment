import React from "react";
import StatCard from "@/components/ui/StatCard";
import { useLayout } from "@/hooks/use-layout";

const statsData = [
  {
    title: "Customers",
    value: "3,781",
    rate: "+11.01%",
    rateIcon: "UpChart",
    variant: "accent",
  },
  {
    title: "Orders",
    value: "1,219",
    rate: "-0.03%",
    rateIcon: "DownChart",
    variant: "primary",
  },
  {
    title: "Revenue",
    value: "$695",
    rate: "+15.03%",
    rateIcon: "UpChart",
    variant: "primary",
  },
  {
    title: "Growth",
    value: "30.1%",
    rate: "+6.08%",
    rateIcon: "UpChart",
    variant: "secondary",
  },
];

function StatCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7 w-full h-full">
      {statsData.map((stat, index) => (
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
