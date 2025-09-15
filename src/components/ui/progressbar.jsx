import React from "react";

function Progressbar({ progress, className = "" }) {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className={`h-[2px] w-full bg-[var(--chart-2)] rounded-full overflow-hidden ${className}`}
      role="progressbar"
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-[var(--chart-1)] transition-all duration-300 ease-in-out"
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
}

export default Progressbar;
