import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { cn, formatTime } from "@/lib/utils";

interface TimerProps {
  initialTime: number; // in seconds
  onTimeUp?: () => void;
  showWarning?: boolean;
  warningTime?: number; // seconds before showing warning
}

export default function Timer({
  initialTime,
  onTimeUp,
  showWarning = true,
  warningTime = 300,
}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            onTimeUp?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, onTimeUp]);

  const isWarning = showWarning && timeLeft <= warningTime && timeLeft > 0;

  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-lg",
        isWarning
          ? "bg-red-100 text-red-700 animate-pulse"
          : "bg-gray-100 text-gray-700"
      )}
    >
      <Clock className="w-5 h-5" />
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
}
