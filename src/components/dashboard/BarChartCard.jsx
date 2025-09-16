import React from "react";
import Card, { CardHeading, CardContent } from "../ui/card";
import { ChartBarStacked } from "../ui/bar-chart";

const BarChartCard = function BarChartCard() {
  return (
    <Card className="h-[252px] w-full">
      <CardHeading>Projections vs Actuals</CardHeading>
      <CardContent className="h-[180px]">
        <ChartBarStacked key={Date.now()} />
      </CardContent>
    </Card>
  );
};

export default BarChartCard;

BarChartCard.displayName = "BarChartCard";
