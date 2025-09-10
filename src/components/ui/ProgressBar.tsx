import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
  variant?: "primary" | "secondary" | "success";
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      value,
      max = 100,
      showLabel = false,
      variant = "primary",
      ...props
    },
    ref
  ) => {
    const percentage = Math.min((value / max) * 100, 100);

    const variants = {
      primary: "bg-blue-600",
      secondary: "bg-yellow-500",
      success: "bg-green-600",
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="flex justify-between items-center mb-1">
          {showLabel && (
            <span className="text-sm font-medium text-gray-700">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              variants[variant]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";
export default ProgressBar;
