import { useState } from "react";
import { Question, QuestionType } from "@/types";
import { cn } from "@/lib/utils";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface QuestionRendererProps {
  question: Question;
  userAnswer: any;
  onAnswerChange: (questionId: string, answer: any) => void;
  isListening?: boolean;
  showResult?: boolean;
  correctAnswer?: any;
}

export default function QuestionRenderer({
  question,
  userAnswer,
  onAnswerChange,
  isListening = false,
  showResult = false,
  correctAnswer,
}: QuestionRendererProps) {
  const [localAnswer, setLocalAnswer] = useState(userAnswer || "");

  const handleAnswerChange = (answer: any) => {
    setLocalAnswer(answer);
    onAnswerChange(question.id, answer);
  };

  const isCorrect = showResult && correctAnswer && userAnswer === correctAnswer;
  const isIncorrect =
    showResult && correctAnswer && userAnswer !== correctAnswer;

  const renderByType = () => {
    switch (question.type) {
      case QuestionType.MULTIPLE_CHOICE:
      case QuestionType.LISTENING_MCQ_SINGLE:
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => {
              const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
              const isSelected = userAnswer === optionLetter;

              return (
                <label
                  key={index}
                  className={cn(
                    "flex items-center p-3 rounded-lg border cursor-pointer transition-all",
                    isSelected && !showResult && "border-blue-500 bg-blue-50",
                    showResult &&
                      correctAnswer === optionLetter &&
                      "border-green-500 bg-green-50",
                    showResult &&
                      isSelected &&
                      correctAnswer !== optionLetter &&
                      "border-red-500 bg-red-50",
                    !isSelected &&
                      !showResult &&
                      "border-gray-200 hover:border-gray-300"
                  )}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={optionLetter}
                    checked={isSelected}
                    onChange={(e) => handleAnswerChange(e.target.value)}
                    className="sr-only"
                    disabled={showResult}
                  />
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center",
                      isSelected &&
                        !showResult &&
                        "border-blue-500 bg-blue-500",
                      showResult &&
                        correctAnswer === optionLetter &&
                        "border-green-500 bg-green-500",
                      showResult &&
                        isSelected &&
                        correctAnswer !== optionLetter &&
                        "border-red-500 bg-red-500",
                      !isSelected && "border-gray-300"
                    )}
                  >
                    {(isSelected ||
                      (showResult && correctAnswer === optionLetter)) && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-sm">
                    <strong>{optionLetter})</strong> {option}
                  </span>
                </label>
              );
            })}
          </div>
        );

      case QuestionType.TRUE_FALSE_NOT_GIVEN:
      case QuestionType.YES_NO_NOT_GIVEN:
        const options =
          question.type === QuestionType.TRUE_FALSE_NOT_GIVEN
            ? ["True", "False", "Not Given"]
            : ["Yes", "No", "Not Given"];

        return (
          <select
            value={userAnswer || ""}
            onChange={(e) => handleAnswerChange(e.target.value)}
            className={cn(
              "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
              showResult && isCorrect && "border-green-500 bg-green-50",
              showResult && isIncorrect && "border-red-500 bg-red-50"
            )}
            disabled={showResult}
          >
            <option value="">Select your answer</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case QuestionType.SENTENCE_COMPLETION:
      case QuestionType.LISTENING_SENTENCE_COMPLETION:
        return (
          <div className="space-y-2">
            <Input
              value={userAnswer || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder="Type your answer here..."
              wordLimit={question.wordLimit}
              currentLength={userAnswer ? userAnswer.split(" ").length : 0}
              className={cn(
                showResult && isCorrect && "border-green-500 bg-green-50",
                showResult && isIncorrect && "border-red-500 bg-red-50"
              )}
              disabled={showResult}
            />
            {question.wordLimit && (
              <p className="text-xs text-gray-500">
                Maximum {question.wordLimit} words
              </p>
            )}
          </div>
        );

      case QuestionType.MATCHING_HEADINGS:
        return (
          <select
            value={userAnswer || ""}
            onChange={(e) => handleAnswerChange(e.target.value)}
            className={cn(
              "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
              showResult && isCorrect && "border-green-500 bg-green-50",
              showResult && isIncorrect && "border-red-500 bg-red-50"
            )}
            disabled={showResult}
          >
            <option value="">Choose a heading</option>
            {question.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case QuestionType.LISTENING_FORM_COMPLETION:
        return (
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h4 className="font-medium text-gray-900">Complete the form</h4>
            <div className="space-y-3">
              {question.options?.map((field, index) => (
                <div key={index} className="flex items-center gap-4">
                  <label className="w-32 text-sm font-medium text-gray-700">
                    {field}:
                  </label>
                  <Input
                    value={userAnswer?.[index] || ""}
                    onChange={(e) => {
                      const newAnswer = [...(userAnswer || [])];
                      newAnswer[index] = e.target.value;
                      handleAnswerChange(newAnswer);
                    }}
                    className="flex-1"
                    disabled={showResult}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case QuestionType.SHORT_ANSWER:
      case QuestionType.LISTENING_SHORT_ANSWER:
        return (
          <Input
            value={userAnswer || ""}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="Type your answer here..."
            className={cn(
              showResult && isCorrect && "border-green-500 bg-green-50",
              showResult && isIncorrect && "border-red-500 bg-red-50"
            )}
            disabled={showResult}
          />
        );

      default:
        return (
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-600">
              Question type not implemented yet: {question.type}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-4">
      {/* Question Text */}
      <div className="prose max-w-none">
        <p className="text-gray-900 font-medium">{question.question}</p>

        {question.image && (
          <div className="my-4">
            <img
              src={question.image}
              alt="Question diagram"
              className="max-w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        )}

        {question.audioTimestamp && isListening && (
          <div className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">
            Audio: {question.audioTimestamp}
          </div>
        )}
      </div>

      {/* Answer Input */}
      <div className="mt-4">{renderByType()}</div>

      {/* Result Feedback */}
      {showResult && (
        <div
          className={cn(
            "p-3 rounded-lg",
            isCorrect && "bg-green-50 border border-green-200",
            isIncorrect && "bg-red-50 border border-red-200"
          )}
        >
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <>
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-green-800 font-medium">Correct!</span>
              </>
            ) : (
              <>
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-red-800 font-medium">
                  Incorrect. Correct answer: {correctAnswer}
                </span>
              </>
            )}
          </div>

          {question.explanation && (
            <div className="mt-2 text-sm text-gray-700">
              <strong>Explanation:</strong> {question.explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
