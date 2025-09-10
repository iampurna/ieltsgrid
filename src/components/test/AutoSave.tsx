import { useEffect, useState } from "react";
import { Save, Check } from "lucide-react";
import { AUTO_SAVE_INTERVAL } from "@/lib/constants";

interface AutoSaveProps {
  testType: "reading" | "listening";
  testId: string;
  sectionId: string;
  answers: { [questionId: string]: any };
  timeSpent: number;
  additionalData?: any;
  onSave?: () => void;
}

export default function AutoSave({
  testType,
  testId,
  sectionId,
  answers,
  timeSpent,
  additionalData,
  onSave,
}: AutoSaveProps) {
  const [lastSaved, setLastSaved] = useState<number>(Date.now());
  const [isSaving, setIsSaving] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    const saveProgress = async () => {
      setIsSaving(true);

      try {
        // Save to localStorage
        const progress = {
          answers,
          timeSpent,
          completed: false,
          startTime: Date.now() - timeSpent * 1000,
          lastSaved: Date.now(),
          ...additionalData,
        };

        const storageKey = `${testType}_progress`;
        const currentProgress = JSON.parse(
          localStorage.getItem(storageKey) || "{}"
        );

        if (!currentProgress[testId]) {
          currentProgress[testId] = {};
        }

        currentProgress[testId][sectionId] = progress;
        localStorage.setItem(storageKey, JSON.stringify(currentProgress));

        setLastSaved(Date.now());
        setJustSaved(true);
        onSave?.();

        // Hide the "just saved" indicator after 2 seconds
        setTimeout(() => setJustSaved(false), 2000);
      } catch (error) {
        console.error("Auto-save failed:", error);
      } finally {
        setIsSaving(false);
      }
    };

    const interval = setInterval(saveProgress, AUTO_SAVE_INTERVAL);

    return () => clearInterval(interval);
  }, [testType, testId, sectionId, answers, timeSpent, additionalData, onSave]);

  const timeSinceLastSave = Math.floor((Date.now() - lastSaved) / 1000);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      {isSaving ? (
        <div className="flex items-center gap-2">
          <Save className="w-4 h-4 animate-pulse" />
          <span>Saving...</span>
        </div>
      ) : justSaved ? (
        <div className="flex items-center gap-2 text-green-600">
          <Check className="w-4 h-4" />
          <span>Saved</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Save className="w-4 h-4" />
          <span>Last saved {timeSinceLastSave}s ago</span>
        </div>
      )}
    </div>
  );
}
