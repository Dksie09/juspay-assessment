import React from "react";
import StatCards from "@/components/Dashboard/StatCards";
import BarChart from "@/components/Dashboard/BarChart";

function Dashboard() {
  return (
    <div className="py-4 flex flex-col gap-7">
      <div className="grid grid-cols-2 gap-7 h-[252px]">
        <StatCards />
        <BarChart />
      </div>
      {/* <div className="grid grid-cols-[76.62%_23.38%] gap-7">
        <div className="bg-gray-200">div1</div>
        <div className="bg-gray-300">div2</div>
      </div>
      <div className="grid grid-cols-[76.62%_23.38%] gap-7">
        <div className="bg-gray-200">div1</div>
        <div className="bg-gray-300">div2</div>
      </div> */}
    </div>
  );
}

export default Dashboard;
