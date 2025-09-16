"use client";

import Icon from "@/components/ui/icon";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const IconButton = ({
  iconName,
  onClick,
  className = "",
  disabled = false,
  ariaLabel,
  tooltip,
  tooltipSide = "bottom",
  ...props
}) => {
  const label = tooltip ?? ariaLabel;

  const ButtonEl = (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`flex p-1 w-7 h-7 justify-center items-center gap-1 hover:bg-accent/50 rounded-md transition-all duration-150 ease-out will-change-transform active:scale-[0.96] disabled:opacity-50 disabled:cursor-not-allowed motion-reduce:transition-none motion-reduce:transform-none ${className}`}
      {...props}
    >
      <Icon name={iconName} className="w-5 h-5" />
    </button>
  );

  if (!label) return ButtonEl;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{ButtonEl}</TooltipTrigger>
      <TooltipContent side={tooltipSide}>{label}</TooltipContent>
    </Tooltip>
  );
};

export default IconButton;
