import React from "react";
import Card, { CardContent, CardHeading } from "../ui/card";
import DonutChart from "./DonutChart";

const data = [
  { name: "Direct", value: 30, fill: "var(--marker)", sales: "$300.56" },
  { name: "Affiliate", value: 25, fill: "#BAEDBD", sales: "$135.18" },
  { name: "Sponsored", value: 20, fill: "#95A4FC", sales: "$48.96" },
  { name: "E-mail", value: 10, fill: "#B1E3FF", sales: "$48.96" },
];

function RadialSalesCard() {
  return (
    <Card className="w-full min-w-[202px]">
      <CardHeading>Total Sales</CardHeading>
      <CardContent className="flex flex-col gap-4">
        <DonutChart data={data} />
        {data.map((item, index) => (
          <div key={index} className="flex justify-between text-xs">
            <div className="flex items-center">
              <div
                className="w-[6px] h-[6px] rounded-full m-[5px]"
                style={{
                  backgroundColor:
                    item.fill === "var(--marker)" ? "var(--marker)" : item.fill,
                }}
              />
              {item.name}
            </div>
            {item.sales}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default RadialSalesCard;
