import React from "react";
import Card, { CardContent, CardHeading } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ChartLine from "../ui/line-chart";

const chartConfig = {
  current: {
    label: "Current Week",
    color: "var(--chart-4)",
    revenue: "$58,211",
  },
  previous: {
    label: "Previous Week",
    color: "var(--chart-3)",
    revenue: "$68,768",
  },
};

function RevenueChartCard() {
  return (
    <Card className="h-[318px] w-full">
      <div className="flex gap-4 items-center">
        <CardHeading>Revenue</CardHeading>
        <Separator orientation="vertical" />
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center text-xs gap-[5px]">
            <div
              className="w-[6px] h-[6px] rounded-full"
              style={{ backgroundColor: chartConfig.current.color }}
            ></div>
            <span>{chartConfig.current.label}</span>
            <span className="font-semibold">{chartConfig.current.revenue}</span>
          </div>
          <div className="flex items-center text-xs gap-[5px]">
            <div
              className="w-[6px] h-[6px] rounded-full"
              style={{ backgroundColor: chartConfig.previous.color }}
            ></div>
            <span>{chartConfig.previous.label}</span>
            <span className="font-semibold">{chartConfig.current.revenue}</span>
          </div>
        </div>
      </div>
      <CardContent className="h-[232px]">
        <ChartLine />
      </CardContent>
    </Card>
  );
}

export default RevenueChartCard;
