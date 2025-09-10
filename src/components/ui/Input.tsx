import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  wordLimit?: number;
  currentLength?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, wordLimit, currentLength, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
            error && "border-red-300 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {wordLimit && currentLength !== undefined && (
          <div className="text-xs text-gray-500 text-right">
            {currentLength}/{wordLimit} words
          </div>
        )}
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
