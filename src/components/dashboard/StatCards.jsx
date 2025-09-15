import React from "react";
import StatCard from "@/components/ui/StatCard";

function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-7">
      <StatCard
        title="Customers"
        value="3,781"
        rate="+11.01%"
        rateIcon="UpChart"
        variant="accent"
      />

      <StatCard
        title="Orders"
        value="1,219"
        rate="-0.03%"
        rateIcon="DownChart"
        variant="primary"
      />

      <StatCard
        title="Revenue"
        value="$695"
        rate="+15.03%"
        rateIcon="UpChart"
        variant="primary"
      />

      <StatCard
        title="Growth"
        value="30.1%"
        rate="+6.08%"
        rateIcon="UpChart"
        variant="secondary"
      />
    </div>
  );
}

export default StatCards;
