"use client";

import Icon from "@/components/ui/icon";

const CARD_VARIANTS = {
  primary: "bg-card-primary text-foreground",
  secondary: "bg-card-secondary text-[#1C1C1C]",
  accent: "bg-card-accent text-[#1C1C1C]",
};

const StatCard = ({
  title,
  value,
  rate,
  rateIcon,
  variant = "primary",
  className = "",
}) => {
  const cardBg = CARD_VARIANTS[variant] || CARD_VARIANTS.primary;

  return (
    <div
      className={`flex min-w-[200px] w-full p-6 flex-col items-start gap-2 flex-1 rounded-2xl shadow ${cardBg} ${className}`}
    >
      <h3 className=" text-sm font-semibold">{title}</h3>

      <div className="flex justify-between items-center content-center gap-y-2 self-stretch flex-wrap">
        <span className="text-2xl font-semibold leading-9">{value}</span>

        {(rate || rateIcon) && (
          <div className="flex items-center gap-1">
            <span className="font-inter text-xs font-normal leading-5">
              {rate}
            </span>
            {rateIcon && <Icon name={rateIcon} className="w-4 h-4" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
