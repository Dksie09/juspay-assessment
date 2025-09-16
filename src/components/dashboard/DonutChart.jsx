"use client";

import { useState } from "react";

function CustomDonutSegment({
  startAngle,
  endAngle,
  innerRadius,
  outerRadius,
  fill,
  centerX,
  centerY,
  value,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
}) {
  const startAngleRad = (startAngle * Math.PI) / 180;
  const endAngleRad = (endAngle * Math.PI) / 180;
  const thickness = outerRadius - innerRadius;
  const semicircleRadius = thickness / 1.8;

  // Calculate points for the segment
  const x1 = centerX + innerRadius * Math.cos(startAngleRad);
  const y1 = centerY + innerRadius * Math.sin(startAngleRad);
  const x2 = centerX + outerRadius * Math.cos(startAngleRad);
  const y2 = centerY + outerRadius * Math.sin(startAngleRad);

  const x3 = centerX + outerRadius * Math.cos(endAngleRad);
  const y3 = centerY + outerRadius * Math.sin(endAngleRad);
  const x4 = centerX + innerRadius * Math.cos(endAngleRad);
  const y4 = centerY + innerRadius * Math.sin(endAngleRad);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const pathData = [
    `M ${x1} ${y1}`,
    `A ${semicircleRadius} ${semicircleRadius} 0 0 1 ${x2} ${y2}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}`,
    `A ${semicircleRadius} ${semicircleRadius} 0 0 0 ${x4} ${y4}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}`,
    "Z",
  ].join(" ");

  return (
    <path
      d={pathData}
      fill={fill}
      strokeLinejoin="round"
      strokeLinecap="round"
      style={{ cursor: "pointer" }}
      onMouseEnter={(e) => onMouseEnter(e, value)}
      onMouseMove={(e) => onMouseMove(e, value)}
      onMouseLeave={onMouseLeave}
    />
  );
}

export default function DonutChart({ data }) {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    value: 0,
  });

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90;
  const gapAngle = 8;

  const handleMouseEnter = (event, value) => {
    setTooltip({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      value: value,
    });
  };

  const handleMouseMove = (event, value) => {
    setTooltip((prev) => ({
      ...prev,
      x: event.clientX,
      y: event.clientY,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, value: 0 });
  };

  return (
    <div className="mx-auto aspect-square flex items-center justify-center relative">
      <svg width="120" height="120" viewBox="0 0 120 120">
        {data.map((item, index) => {
          const totalGaps = data.length * gapAngle;
          const availableAngle = 360 - totalGaps;
          const angle = (item.value / total) * availableAngle;
          const startAngle = currentAngle;
          const endAngle = currentAngle + angle;

          const segment = (
            <CustomDonutSegment
              key={index}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={40}
              outerRadius={60}
              fill={item.fill}
              centerX={60}
              centerY={60}
              value={item.value}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          );

          currentAngle += angle + gapAngle;
          return segment;
        })}
      </svg>

      {tooltip.visible && (
        <div
          className="fixed py-1 px-2 bg-[#313831] text-white text-sm rounded pointer-events-none z-10 transition-all duration-75"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 30,
          }}
        >
          {tooltip.value}
        </div>
      )}
    </div>
  );
}
