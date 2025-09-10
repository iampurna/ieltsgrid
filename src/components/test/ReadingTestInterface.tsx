"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Clock, BookOpen, Save, ArrowRight } from "lucide-react";
import { TestSection } from "@/types";
import { StorageManager } from "@/lib/storage";
import { cn, formatTime } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Timer from "@/components/ui/Timer";
import QuestionRenderer from "./QuestionRenderer";
import TestNavigation from "./TestNavigation";
import AutoSave from "./AutoSave";
import AdInContent from "@/components/ads/AdInContent";

interface ReadingTestInterfaceProps {
  testId: string;
  sectionId: string;
  section: TestSection;
}

export default function ReadingTestInterface({
  testId,
  sectionId,
  section,
}: ReadingTestInterfaceProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<{ [questionId: string]: any }>({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());
  const [showInstructions, setShowInstructions] = useState(true);

  // Load saved progress
  useEffect(() => {
    const progress = StorageManager.getReadingProgress();
    const sectionProgress = progress[testId]?.[sectionId];

    if (sectionProgress) {
      setAnswers(sectionProgress.answers);
      setTimeSpent(Math.floor((Date.now() - sectionProgress.startTime) / 1000));
    }
  }, [testId, sectionId]);

  // Track time spent
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const handleAnswerChange = (questionId: string, answer: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSave = () => {
    StorageManager.saveReadingProgress(testId, sectionId, {
      answers,
      timeSpent,
      completed: false,
      startTime,
      lastSaved: Date.now(),
    });
  };

  const handleNextSection = () => {
    // Save current progress
    StorageManager.saveReadingProgress(testId, sectionId, {
      answers,
      timeSpent,
      completed: true,
      startTime,
      lastSaved: Date.now(),
    });

    const nextSectionId = `section-${parseInt(sectionId.split("-")[1]) + 1}`;

    // Check if this is the last section
    if (parseInt(sectionId.split("-")[1]) >= 3) {
      router.push(`/reading/${testId}/${sectionId}/results`);
    } else {
      router.push(`/reading/${testId}/${nextSectionId}`);
    }
  };

  if (showInstructions) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-2xl mx-4 p-8">
          <div className="text-center mb-6">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {section.meta.title}
            </h1>
            <p className="text-gray-600">
              Section {section.meta.section} • Questions{" "}
              {section.meta.questions}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium text-blue-900">Time Limit</div>
                <div className="text-sm text-blue-700">
                  {section.meta.timeLimit} minutes
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Instructions:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Read the passage carefully</li>
                <li>• Answer all questions in order</li>
                <li>• Your progress will be auto-saved</li>
                <li>• You can review your answers before submitting</li>
              </ul>
            </div>
          </div>

          <Button onClick={() => setShowInstructions(false)} className="w-full">
            Start Section
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Test Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {section.meta.title}
              </h1>
              <p className="text-sm text-gray-600">
                Section {section.meta.section} • Questions{" "}
                {section.meta.questions} • {section.meta.difficulty}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Timer
                initialTime={
                  section.meta.timeLimit ? section.meta.timeLimit * 60 : 1200
                }
                onTimeUp={() => handleNextSection()}
              />
              <Button variant="ghost" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Passage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Reading Passage
              </h2>
              <div
                className="prose max-w-none text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </Card>

            <AdInContent />
          </motion.div>

          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Questions
              </h2>
              <div className="space-y-6">
                {section.questions.map((question, index) => (
                  <div
                    key={question.id}
                    className="border-b border-gray-100 pb-6 last:border-b-0"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <QuestionRenderer
                          question={question}
                          userAnswer={answers[question.id]}
                          onAnswerChange={handleAnswerChange}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Progress Info */}
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Progress: {Object.keys(answers).length} of{" "}
                  {section.questions.length} answered
                </div>
                <AutoSave
                  testType="reading"
                  testId={testId}
                  sectionId={sectionId}
                  answers={answers}
                  timeSpent={timeSpent}
                  onSave={handleSave}
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <TestNavigation
        currentSection={parseInt(sectionId.split("-")[1])}
        totalSections={3}
        currentQuestion={Object.keys(answers).length}
        totalQuestions={section.questions.length}
        timeRemaining={
          section.meta.timeLimit
            ? section.meta.timeLimit * 60 - timeSpent
            : 1200 - timeSpent
        }
        onNext={handleNextSection}
        onSave={handleSave}
        canNext={Object.keys(answers).length === section.questions.length}
        isLastSection={parseInt(sectionId.split("-")[1]) >= 3}
      />
    </div>
  );
}
