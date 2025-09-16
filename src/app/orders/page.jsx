import Orders from "@/components/orders/Orders";
import React from "react";

function page() {
  return (
    <div className="min-h-screen w-full">
      {/* Orders List */}
      <main className="p-3 min-h-screen max-w-[1000px] mx-auto pb-10">
        <h1 className="py-2 px-1 font-semibold text-sm text-foreground">
          Order List
        </h1>
        <Orders />
      </main>
    </div>
  );
}

export default page;
