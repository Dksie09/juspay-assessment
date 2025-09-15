import React from "react";
import Card, { CardHeading, CardContent } from "../ui/card";
import { ChartBarStacked } from "../ui/bar-chart";

function BarChartCard() {
  return (
    <Card className="h-[252px] w-full">
      <CardHeading>Projections vs Actuals</CardHeading>
      <CardContent className="h-[180px]">
        <ChartBarStacked />
      </CardContent>
    </Card>
  );
}

export default BarChartCard;
