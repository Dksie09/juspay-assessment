import React from "react";

function Card({ children, className = "" }) {
  return (
    <div className={`p-6 bg-card-primary gap-4 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

function CardHeading({ children, className = "" }) {
  return <h3 className={`font-semibold text-sm ${className}`}>{children}</h3>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export default Card;
export { CardHeading, CardContent };
