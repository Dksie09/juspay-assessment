import * as React from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

function SearchInput({
  className,
  onFocus,
  onBlur,
  value,
  onChange,
  placeholder = "",
  bgcolor = "bg-input",
  border = false,
  shortcut = "",
  ...props
}) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    setHasValue(value && value.length > 0);
  }, [value]);

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0);
    onChange?.(e);
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const showPlaceholder = !isFocused && !hasValue;

  return (
    <div
      className={cn(
        "flex items-center content-center gap-2 flex-wrap p-1 px-2 h-7 rounded-lg cursor-text relative",
        bgcolor,
        border && "border border-input",
        className
      )}
      onClick={handleContainerClick}
    >
      {showPlaceholder && (
        <>
          {/* Left placeholder content */}
          <div className="flex items-center content-center gap-1 flex-1 flex-wrap">
            <Icon
              name="Search"
              className="w-4 h-4 text-foreground-muted-disabled"
            />
            <span className="text-foreground-muted-disabled text-sm">
              {placeholder}
            </span>
          </div>

          {/* Right shortcut */}
          {shortcut && (
            <span className="text-foreground-muted-disabled text-sm">
              {shortcut}
            </span>
          )}
        </>
      )}

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={cn(
          "bg-transparent outline-none flex-1 min-w-0 text-sm",
          showPlaceholder ? "absolute inset-0 opacity-0" : "opacity-100"
        )}
        {...props}
      />
    </div>
  );
}

export { SearchInput };
