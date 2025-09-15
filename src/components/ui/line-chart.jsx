"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  ComposedChart,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A combined line and area chart";

const chartData = [
  { month: "January", current: 186, previous: 214 },
  { month: "February", current: 305, previous: 209 },
  { month: "March", current: 237, previous: 73 },
  { month: "April", current: 73, previous: 237 },
  { month: "May", current: 209, previous: 305 },
  { month: "June", current: 214, previous: 186 },
];

const chartConfig = {
  current: {
    label: "current",
    color: "var(--chart-4)",
  },
  previous: {
    label: "previous",
    color: "var(--chart-3)",
  },
};

export default function ChartLine() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <ComposedChart
        accessibilityLayer
        data={chartData}
        width={500}
        height={250}
        margin={{
          left: 0,
          right: 20,
          top: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          width={42}
          tickFormatter={(value) => (value === 0 ? "0" : `${value / 10}M`)}
          domain={[0, 300]}
          ticks={[0, 100, 200, 300, 400]}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <defs>
          <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={chartConfig.previous.color}
              stopOpacity={0.7}
            />
            <stop
              offset="95%"
              stopColor={chartConfig.previous.color}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="previous"
          type="natural"
          fill="url(#fillValue)"
          fillOpacity={0.2}
          stroke={chartConfig.previous.color}
          strokeWidth={3}
        />
        <Line
          dataKey="current"
          type="natural"
          stroke={chartConfig.current.color}
          strokeWidth={3}
          dot={false}
          strokeDasharray="100 0 100 0 100 0 100 0 100 0  8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4 8 4"
        />
      </ComposedChart>
    </ChartContainer>
  );
}
