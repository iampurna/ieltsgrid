"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Headphones, Clock, Save, ArrowRight } from "lucide-react";
import { TestSection } from "@/types";
import { StorageManager } from "@/lib/storage";
import { cn, formatTime } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Timer from "@/components/ui/Timer";
import AudioPlayer from "@/components/ui/AudioPlayer";
import QuestionRenderer from "./QuestionRenderer";
import TestNavigation from "./TestNavigation";
import AutoSave from "./AutoSave";
import AdInContent from "@/components/ads/AdInContent";

interface ListeningTestInterfaceProps {
  testId: string;
  sectionId: string;
  section: TestSection;
}

export default function ListeningTestInterface({
  testId,
  sectionId,
  section,
}: ListeningTestInterfaceProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<{ [questionId: string]: any }>({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const [startTime] = useState(Date.now());
  const [showInstructions, setShowInstructions] = useState(true);

  // Load saved progress
  useEffect(() => {
    const progress = StorageManager.getListeningProgress();
    const sectionProgress = progress[testId]?.[sectionId];

    if (sectionProgress) {
      setAnswers(sectionProgress.answers);
      setTimeSpent(Math.floor((Date.now() - sectionProgress.startTime) / 1000));
      setAudioProgress(sectionProgress.audioProgress || 0);
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
    StorageManager.saveListeningProgress(testId, sectionId, {
      answers,
      timeSpent,
      completed: false,
      startTime,
      lastSaved: Date.now(),
      audioProgress,
      playCount: 1,
      rewindCount: 0,
    });
  };

  const handleNextSection = () => {
    // Save current progress
    StorageManager.saveListeningProgress(testId, sectionId, {
      answers,
      timeSpent,
      completed: true,
      startTime,
      lastSaved: Date.now(),
      audioProgress,
      playCount: 1,
      rewindCount: 0,
    });

    const nextSectionId = `section-${parseInt(sectionId.split("-")[1]) + 1}`;

    // Check if this is the last section
    if (parseInt(sectionId.split("-")[1]) >= 4) {
      router.push(`/listening/${testId}/${sectionId}/result`);
    } else {
      router.push(`/listening/${testId}/${nextSectionId}`);
    }
  };

  if (showInstructions) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-2xl mx-4 p-8">
          <div className="text-center mb-6">
            <Headphones className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {section.meta.title}
            </h1>
            <p className="text-gray-600">
              Section {section.meta.section} • Questions{" "}
              {section.meta.questions}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
              <Clock className="w-5 h-5 text-purple-600" />
              <div>
                <div className="font-medium text-purple-900">
                  Audio Duration
                </div>
                <div className="text-sm text-purple-700">
                  {section.meta.audioDuration || "10 minutes"}
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Instructions:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Listen to the audio carefully</li>
                <li>• Answer questions as you listen</li>
                <li>• You can replay sections if needed</li>
                <li>• Your progress will be auto-saved</li>
              </ul>
            </div>
          </div>

          <Button onClick={() => setShowInstructions(false)} className="w-full">
            Start Listening Test
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
              <Button variant="ghost" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Audio Player */}
        <Card className="mb-8 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Audio Player
          </h2>
          <AudioPlayer
            src={section.meta.audioFile || "/audio/sample.mp3"}
            onProgress={setAudioProgress}
            allowRewind={true}
          />
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
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
                      <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <QuestionRenderer
                          question={question}
                          userAnswer={answers[question.id]}
                          onAnswerChange={handleAnswerChange}
                          isListening={true}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Instructions and Ads */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Test Instructions
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>• Listen carefully to the audio</p>
                <p>• Answer questions in the order they appear</p>
                <p>• You may need to listen for specific information</p>
                <p>• Check your spelling for written answers</p>
              </div>
            </Card>

            <AdInContent />

            {/* Progress Info */}
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Progress: {Object.keys(answers).length} of{" "}
                  {section.questions.length} answered
                </div>
                <AutoSave
                  testType="listening"
                  testId={testId}
                  sectionId={sectionId}
                  answers={answers}
                  timeSpent={timeSpent}
                  additionalData={{ audioProgress }}
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
        totalSections={4}
        currentQuestion={Object.keys(answers).length}
        totalQuestions={section.questions.length}
        timeRemaining={2400 - timeSpent} // 40 minutes total
        onNext={handleNextSection}
        onSave={handleSave}
        canNext={Object.keys(answers).length === section.questions.length}
        isLastSection={parseInt(sectionId.split("-")[1]) >= 4}
      />
    </div>
  );
}
