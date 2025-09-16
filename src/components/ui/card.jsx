import React from "react";

function Card({ children, className = "", interactive = false }) {
  return (
    <div
      className={`p-6 bg-card-primary flex flex-col gap-4 rounded-2xl ${
        interactive
          ? "transition-all duration-150 ease-out hover:shadow-sm hover:-translate-y-0.5 will-change-transform motion-reduce:transition-none motion-reduce:transform-none"
          : ""
      } ${className}`}
    >
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
