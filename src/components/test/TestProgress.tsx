import { motion } from "framer-motion";
import { CheckCircle, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestProgressProps {
  sections: Array<{
    id: string;
    title: string;
    questions: string;
    completed: boolean;
    current: boolean;
    score?: number;
  }>;
}

export default function TestProgress({ sections }: TestProgressProps) {
  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Test Progress
      </h3>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "flex items-center gap-4 p-3 rounded-lg transition-colors",
              section.current && "bg-blue-50 border border-blue-200",
              section.completed && "bg-green-50"
            )}
          >
            <div className="flex-shrink-0">
              {section.completed ? (
                <CheckCircle className="w-6 h-6 text-green-600" />
              ) : section.current ? (
                <Clock className="w-6 h-6 text-blue-600" />
              ) : (
                <Circle className="w-6 h-6 text-gray-400" />
              )}
            </div>

            <div className="flex-1">
              <h4
                className={cn(
                  "font-medium",
                  section.current && "text-blue-900",
                  section.completed && "text-green-900",
                  !section.current && !section.completed && "text-gray-700"
                )}
              >
                {section.title}
              </h4>
              <p className="text-sm text-gray-500">
                Questions {section.questions}
              </p>
            </div>

            {section.completed && section.score !== undefined && (
              <div className="text-right">
                <span className="text-sm font-medium text-green-700">
                  {section.score}%
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
