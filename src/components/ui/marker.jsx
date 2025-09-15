import React from "react";

function Marker({ className = "" }) {
  return (
    <div
      className={`bg-white flex w-[7px] h-[7px] items-center justify-center rounded-full ${className}`}
    >
      <div className="bg-marker p-[0.5px] w-[4px] h-[4px] rounded-full" />
    </div>
  );
}

export default Marker;
