"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Clock,
  Target,
  TrendingUp,
  RotateCcw,
  ArrowRight,
  Share2,
  Download,
} from "lucide-react";
import { TestSection, ScoreBreakdown } from "@/types";
import { StorageManager } from "@/lib/storage";
import { calculateBandScore, getScoreColor, formatTime } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";
import QuestionRenderer from "./QuestionRenderer";

interface ReadingResultsInterfaceProps {
  testId: string;
  sectionId: string;
  section: TestSection;
}

export default function ReadingResultsInterface({
  testId,
  sectionId,
  section,
}: ReadingResultsInterfaceProps) {
  const router = useRouter();
  const [results, setResults] = useState<ScoreBreakdown | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [questionId: string]: any }>(
    {}
  );
  const [showDetailedResults, setShowDetailedResults] = useState(false);

  useEffect(() => {
    const progress = StorageManager.getReadingProgress();
    const sectionProgress = progress[testId]?.[sectionId];

    if (sectionProgress) {
      setUserAnswers(sectionProgress.answers);

      // Calculate results
      let correct = 0;
      const total = section.questions.length;

      section.questions.forEach((question) => {
        const userAnswer = sectionProgress.answers[question.id];
        const correctAnswer = question.answer;

        if (Array.isArray(correctAnswer)) {
          if (
            Array.isArray(userAnswer) &&
            userAnswer.length === correctAnswer.length &&
            userAnswer.every((ans, i) => ans === correctAnswer[i])
          ) {
            correct++;
          }
        } else {
          if (userAnswer === correctAnswer) {
            correct++;
          }
        }
      });

      const percentage = (correct / total) * 100;
      const bandScore = calculateBandScore(correct, total, "reading");

      setResults({
        correct,
        incorrect: total - correct,
        total,
        percentage,
        bandScore,
        timeAnalysis: {
          totalTime: sectionProgress.timeSpent,
          averageTimePerQuestion: sectionProgress.timeSpent / total,
        },
      });
    }
  }, [testId, sectionId, section.questions]);

  const handleRetry = () => {
    StorageManager.saveReadingProgress(testId, sectionId, {
      answers: {},
      timeSpent: 0,
      completed: false,
      startTime: Date.now(),
      lastSaved: Date.now(),
    });

    router.push(`/reading/${testId}/${sectionId}`);
  };

  const handleNextSection = () => {
    const nextSectionId = `section-${parseInt(sectionId.split("-")[1]) + 1}`;

    if (parseInt(sectionId.split("-")[1]) >= 3) {
      router.push("/reading");
    } else {
      router.push(`/reading/${testId}/${nextSectionId}`);
    }
  };

  const handleShare = async () => {
    if (navigator.share && results) {
      try {
        await navigator.share({
          title: `IELTS Reading Results - ${section.meta.title}`,
          text: `I scored ${results.correct}/${results.total} (Band ${results.bandScore}) on IELTSGrid!`,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
      }
    }
  };

  if (!results) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Calculating your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
            {results.percentage >= 70 ? (
              <CheckCircle className="w-10 h-10 text-white" />
            ) : (
              <Target className="w-10 h-10 text-white" />
            )}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Test Complete!
          </h1>
          <p className="text-xl text-gray-600">
            {section.meta.title} - Section {section.meta.section}
          </p>
        </motion.div>

        {/* Score Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 text-center">
              <div
                className={`text-4xl font-bold mb-2 ${getScoreColor(
                  results.bandScore
                )}`}
              >
                {results.bandScore}
              </div>
              <div className="text-gray-600">Band Score</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold mb-2 text-green-600">
                {results.correct}
              </div>
              <div className="text-gray-600">Correct</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold mb-2 text-red-600">
                {results.incorrect}
              </div>
              <div className="text-gray-600">Incorrect</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold mb-2 text-blue-600">
                {Math.round(results.percentage)}%
              </div>
              <div className="text-gray-600">Score</div>
            </Card>
          </motion.div>
        </div>

        {/* Performance Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Performance Analysis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Accuracy Rate
                </h3>
                <ProgressBar
                  value={results.percentage}
                  variant={
                    results.percentage >= 70
                      ? "success"
                      : results.percentage >= 50
                      ? "secondary"
                      : "primary"
                  }
                  showLabel
                />
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Time Management
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Time:</span>
                    <span className="font-medium">
                      {formatTime(results.timeAnalysis.totalTime)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg per Question:</span>
                    <span className="font-medium">
                      {formatTime(
                        Math.round(results.timeAnalysis.averageTimePerQuestion)
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">
                Recommendations
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                {results.percentage >= 85 && (
                  <li>
                    • Excellent work! You're ready for this difficulty level
                  </li>
                )}
                {results.percentage >= 70 && results.percentage < 85 && (
                  <li>
                    • Good performance! Practice more complex question types
                  </li>
                )}
                {results.percentage >= 50 && results.percentage < 70 && (
                  <li>• Focus on improving reading speed and comprehension</li>
                )}
                {results.percentage < 50 && (
                  <li>
                    • Consider reviewing basic reading strategies and vocabulary
                  </li>
                )}
                {results.timeAnalysis.averageTimePerQuestion > 90 && (
                  <li>
                    • Work on time management - aim for 1.5 minutes per question
                  </li>
                )}
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <Button
            variant="outline"
            onClick={() => setShowDetailedResults(!showDetailedResults)}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            {showDetailedResults ? "Hide" : "Show"} Detailed Analysis
          </Button>

          <Button variant="ghost" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Share Results
          </Button>

          <Button variant="outline" onClick={handleRetry}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Retry Test
          </Button>

          <Button variant="primary" onClick={handleNextSection}>
            {parseInt(sectionId.split("-")[1]) >= 3
              ? "Back to Reading"
              : "Next Section"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        {/* Detailed Results */}
        {showDetailedResults && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Question by Question Analysis
              </h2>

              <div className="space-y-8">
                {section.questions.map((question, index) => {
                  const userAnswer = userAnswers[question.id];
                  const isCorrect = Array.isArray(question.answer)
                    ? Array.isArray(userAnswer) &&
                      userAnswer.length === question.answer.length &&
                      userAnswer.every((ans, i) => ans === question.answer[i])
                    : userAnswer === question.answer;

                  return (
                    <div
                      key={question.id}
                      className="border-b border-gray-100 pb-6 last:border-b-0"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isCorrect
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <XCircle className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Question {index + 1}
                          </h3>
                          <Badge
                            variant={isCorrect ? "success" : "error"}
                            className="mt-1"
                          >
                            {isCorrect ? "Correct" : "Incorrect"}
                          </Badge>
                        </div>
                      </div>

                      <QuestionRenderer
                        question={question}
                        userAnswer={userAnswer}
                        onAnswerChange={() => {}}
                        showResult={true}
                        correctAnswer={question.answer}
                      />
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
