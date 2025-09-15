"use client";

function CustomDonutSegment({
  startAngle,
  endAngle,
  innerRadius,
  outerRadius,
  fill,
  centerX,
  centerY,
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

  // Calculate the center point of each edge for the semicircle
  const startCenterX =
    centerX + (innerRadius + semicircleRadius) * Math.cos(startAngleRad);
  const startCenterY =
    centerY + (innerRadius + semicircleRadius) * Math.sin(startAngleRad);

  const endCenterX =
    centerX + (innerRadius + semicircleRadius) * Math.cos(endAngleRad);
  const endCenterY =
    centerY + (innerRadius + semicircleRadius) * Math.sin(endAngleRad);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const pathData = [
    `M ${x1} ${y1}`,
    // Start semicircle - CONVEX (curves outward, away from center)
    `A ${semicircleRadius} ${semicircleRadius} 0 0 1 ${x2} ${y2}`,
    // Outer arc
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}`,
    // End semicircle - CONCAVE (curves inward, toward center)
    `A ${semicircleRadius} ${semicircleRadius} 0 0 0 ${x4} ${y4}`,
    // Inner arc (back to start)
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}`,
    "Z",
  ].join(" ");

  return (
    <path
      d={pathData}
      fill={fill}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  );
}

export default function DonutChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90; // Start from top
  const gapAngle = 8; // 4 degrees gap between each segment

  return (
    <div className="mx-auto aspect-square flex items-center justify-center">
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
            />
          );

          currentAngle += angle + gapAngle;
          return segment;
        })}
      </svg>
    </div>
  );
}
