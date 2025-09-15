"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Generate random data
const generateRandomData = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months.map((month) => ({
    month,
    projections: Math.floor(Math.random() * 250) + 50, // Random between 50-300
    actuals: Math.floor(Math.random() * 200) + 30, // Random between 30-230
  }));
};

const chartData = generateRandomData();

const chartConfig = {
  projections: {
    label: "Projections",
    color: "var(--chart-1)",
  },
  actuals: {
    label: "Actuals",
    color: "var(--chart-2)",
  },
};

export function ChartBarStacked() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart
        accessibilityLayer
        data={chartData}
        width={500}
        height={180}
        maxBarSize={20}
        margin={{ left: 0, right: 20, top: 20, bottom: 20 }}
      >
        <CartesianGrid vertical={false} />
        <YAxis
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          width={42}
          tickFormatter={(value) => (value === 0 ? "0" : `${value / 10}M`)}
          domain={[0, 300]}
          ticks={[0, 100, 200, 300, 400]}
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Bar
          dataKey="projections"
          stackId="a"
          fill="var(--color-projections)"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="actuals"
          stackId="a"
          fill="var(--color-actuals)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
