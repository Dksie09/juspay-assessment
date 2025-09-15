"use client";

import Icon from "@/components/ui/icon";

const IconButton = ({
  iconName,
  onClick,
  className = "",
  disabled = false,
  ariaLabel,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`flex p-1 w-7 h-7 justify-center items-center gap-1 hover:bg-accent/50 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      <Icon name={iconName} className="w-5 h-5" />
    </button>
  );
};

export default IconButton;
