import { ArrowLeft, ArrowRight, Clock, Save } from "lucide-react";
import Button from "@/components/ui/Button";
import ProgressBar from "@/components/ui/ProgressBar";
import { cn, formatTime } from "@/lib/utils";

interface TestNavigationProps {
  currentSection: number;
  totalSections: number;
  currentQuestion: number;
  totalQuestions: number;
  timeRemaining: number;
  onPrevious?: () => void;
  onNext?: () => void;
  onSave?: () => void;
  onFinish?: () => void;
  canPrevious?: boolean;
  canNext?: boolean;
  isLastSection?: boolean;
}

export default function TestNavigation({
  currentSection,
  totalSections,
  currentQuestion,
  totalQuestions,
  timeRemaining,
  onPrevious,
  onNext,
  onSave,
  onFinish,
  canPrevious = true,
  canNext = true,
  isLastSection = false,
}: TestNavigationProps) {
  const progress = (currentQuestion / totalQuestions) * 100;
  const isTimeWarning = timeRemaining <= 300; // 5 minutes

  return (
    <div className="bg-white border-t shadow-lg p-4 sticky bottom-0">
      <div className="max-w-4xl mx-auto">
        {/* Progress Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">
              Section {currentSection} of {totalSections}
            </span>
            <span className="text-sm text-gray-500">
              Question {currentQuestion} of {totalQuestions}
            </span>
          </div>

          <div
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono",
              isTimeWarning
                ? "bg-red-100 text-red-700 animate-pulse"
                : "bg-gray-100 text-gray-700"
            )}
          >
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeRemaining)}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar
          value={progress}
          className="mb-4"
          variant={isTimeWarning ? "primary" : "primary"}
        />

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {canPrevious && onPrevious && (
              <Button variant="outline" onClick={onPrevious}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            {onSave && (
              <Button variant="ghost" onClick={onSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Progress
              </Button>
            )}

            {isLastSection && onFinish ? (
              <Button variant="secondary" onClick={onFinish}>
                Finish Test
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              canNext &&
              onNext && (
                <Button variant="primary" onClick={onNext}>
                  Next Section
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
