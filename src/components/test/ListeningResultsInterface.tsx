// src/components/test/ListeningResultsInterface.tsx
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
  Headphones,
  Volume2,
  Play,
} from "lucide-react";
import { TestSection, ScoreBreakdown } from "@/types";
import { StorageManager } from "@/lib/storage";
import { calculateBandScore, getScoreColor, formatTime } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";
import QuestionRenderer from "./QuestionRenderer";

interface ListeningResultsInterfaceProps {
  testId: string;
  sectionId: string;
  section: TestSection;
}

export default function ListeningResultsInterface({
  testId,
  sectionId,
  section,
}: ListeningResultsInterfaceProps) {
  const router = useRouter();
  const [results, setResults] = useState<ScoreBreakdown | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [questionId: string]: any }>(
    {}
  );
  const [showDetailedResults, setShowDetailedResults] = useState(false);
  const [audioStats, setAudioStats] = useState<{
    totalPlayTime: number;
    rewindCount: number;
    playCount: number;
  }>({ totalPlayTime: 0, rewindCount: 0, playCount: 0 });

  useEffect(() => {
    const progress = StorageManager.getListeningProgress();
    const sectionProgress = progress[testId]?.[sectionId];

    if (sectionProgress) {
      setUserAnswers(sectionProgress.answers);
      setAudioStats({
        totalPlayTime: sectionProgress.timeSpent || 0,
        rewindCount: sectionProgress.rewindCount || 0,
        playCount: sectionProgress.playCount || 1,
      });

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
      const bandScore = calculateBandScore(correct, total, "listening");

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
    StorageManager.saveListeningProgress(testId, sectionId, {
      answers: {},
      timeSpent: 0,
      completed: false,
      startTime: Date.now(),
      lastSaved: Date.now(),
      audioProgress: 0,
      playCount: 0,
      rewindCount: 0,
    });

    router.push(`/listening/${testId}/${sectionId}`);
  };

  const handleNextSection = () => {
    const nextSectionId = `section-${parseInt(sectionId.split("-")[1]) + 1}`;

    if (parseInt(sectionId.split("-")[1]) >= 4) {
      router.push("/listening");
    } else {
      router.push(`/listening/${testId}/${nextSectionId}`);
    }
  };

  const handleShare = async () => {
    if (navigator.share && results) {
      try {
        await navigator.share({
          title: `IELTS Listening Results - ${section.meta.title}`,
          text: `I scored ${results.correct}/${results.total} (Band ${results.bandScore}) on IELTSGrid!`,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
      }
    }
  };

  const getListeningSkillAnalysis = () => {
    if (!results) return [];

    const skills = [
      {
        name: "Understanding Main Ideas",
        score:
          results.percentage >= 80
            ? "Excellent"
            : results.percentage >= 60
            ? "Good"
            : "Needs Improvement",
        color:
          results.percentage >= 80
            ? "text-green-600"
            : results.percentage >= 60
            ? "text-yellow-600"
            : "text-red-600",
      },
      {
        name: "Identifying Specific Information",
        score:
          results.percentage >= 70
            ? "Good"
            : results.percentage >= 50
            ? "Fair"
            : "Weak",
        color:
          results.percentage >= 70
            ? "text-green-600"
            : results.percentage >= 50
            ? "text-yellow-600"
            : "text-red-600",
      },
      {
        name: "Following Instructions",
        score:
          audioStats.rewindCount <= 2
            ? "Excellent"
            : audioStats.rewindCount <= 5
            ? "Good"
            : "Needs Practice",
        color:
          audioStats.rewindCount <= 2
            ? "text-green-600"
            : audioStats.rewindCount <= 5
            ? "text-yellow-600"
            : "text-red-600",
      },
      {
        name: "Note-Taking Skills",
        score:
          results.timeAnalysis.averageTimePerQuestion <= 60
            ? "Efficient"
            : "Could Improve",
        color:
          results.timeAnalysis.averageTimePerQuestion <= 60
            ? "text-green-600"
            : "text-yellow-600",
      },
    ];

    return skills;
  };

  if (!results) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Calculating your results...</p>
        </div>
      </div>
    );
  }

  const skillAnalysis = getListeningSkillAnalysis();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
            {results.percentage >= 70 ? (
              <CheckCircle className="w-10 h-10 text-white" />
            ) : (
              <Target className="w-10 h-10 text-white" />
            )}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Listening Test Complete!
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
              <div className="text-4xl font-bold mb-2 text-purple-600">
                {Math.round(results.percentage)}%
              </div>
              <div className="text-gray-600">Score</div>
            </Card>
          </motion.div>
        </div>

        {/* Listening-Specific Performance Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Listening Performance Analysis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              {/* Accuracy and Audio Stats */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Overall Performance
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
                  className="mb-4"
                />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Listening Time:</span>
                    <span className="font-medium">
                      {formatTime(results.timeAnalysis.totalTime)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Audio Replays:</span>
                    <span className="font-medium">
                      {audioStats.rewindCount} times
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Focus Level:</span>
                    <span
                      className={`font-medium ${
                        audioStats.playCount <= 1
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {audioStats.playCount <= 1 ? "Excellent" : "Good"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Listening Skills Breakdown */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Listening Skills Analysis
                </h3>
                <div className="space-y-3">
                  {skillAnalysis.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-600">
                        {skill.name}:
                      </span>
                      <Badge
                        variant={
                          skill.score === "Excellent"
                            ? "success"
                            : skill.score === "Good"
                            ? "warning"
                            : "error"
                        }
                      >
                        {skill.score}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Audio Performance Stats */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-purple-900 mb-3 flex items-center gap-2">
                <Headphones className="w-4 h-4" />
                Audio Interaction Statistics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-800">
                    Played {audioStats.playCount} time
                    {audioStats.playCount !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-800">
                    {audioStats.rewindCount} rewind
                    {audioStats.rewindCount !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-800">
                    {formatTime(
                      Math.round(results.timeAnalysis.averageTimePerQuestion)
                    )}
                    /question
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">
                Personalized Recommendations
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                {results.percentage >= 85 && (
                  <li>
                    • Outstanding performance! You're ready for higher
                    difficulty levels
                  </li>
                )}
                {results.percentage >= 70 && results.percentage < 85 && (
                  <li>
                    • Strong listening skills. Focus on understanding implied
                    meanings
                  </li>
                )}
                {results.percentage >= 50 && results.percentage < 70 && (
                  <>
                    <li>
                      • Practice active listening techniques and note-taking
                      strategies
                    </li>
                    <li>
                      • Work on identifying key information and filtering
                      distractions
                    </li>
                  </>
                )}
                {results.percentage < 50 && (
                  <>
                    <li>• Focus on basic listening comprehension skills</li>
                    <li>
                      • Practice with slower audio materials and build up
                      gradually
                    </li>
                  </>
                )}
                {audioStats.rewindCount > 3 && (
                  <li>
                    • Try to listen more attentively the first time to reduce
                    replays
                  </li>
                )}
                {results.timeAnalysis.averageTimePerQuestion > 90 && (
                  <li>
                    • Work on quicker decision-making and trust your first
                    instinct
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
            {parseInt(sectionId.split("-")[1]) >= 4
              ? "Back to Listening"
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
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-medium text-gray-900">
                              Question {index + 1}
                            </h3>
                            <Badge variant={isCorrect ? "success" : "error"}>
                              {isCorrect ? "Correct" : "Incorrect"}
                            </Badge>
                            {question.audioTimestamp && (
                              <Badge variant="secondary" size="sm">
                                Audio: {question.audioTimestamp}
                              </Badge>
                            )}
                          </div>

                          <QuestionRenderer
                            question={question}
                            userAnswer={userAnswer}
                            onAnswerChange={() => {}}
                            isListening={true}
                            showResult={true}
                            correctAnswer={question.answer}
                          />
                        </div>
                      </div>
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
