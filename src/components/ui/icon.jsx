import { cn } from "@/lib/utils";

const Icon = ({ name, className = "", size = 20, ...props }) => {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt=""
      className={cn("dark:invert", className)}
      style={{ width: size, height: size }}
      {...props}
    />
  );
};

export default Icon;