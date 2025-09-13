import { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Clock,
  User,
  Play,
  BookOpen,
  Target,
  ArrowLeft,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 1 Practice | Introduction & Interview Questions",
  description:
    "Practice IELTS Speaking Part 1 with interactive examples, sample conversations, and comprehensive topic coverage for the introduction and interview section.",
  keywords: [
    "IELTS Speaking Part 1 Practice",
    "Speaking Interview Practice",
    "Personal Questions IELTS",
    "Speaking Part 1 Examples",
    "IELTS Oral Test Practice",
  ],
};

const practiceExamples = [
  {
    topic: "Work",
    examinerQuestion: "What is your job?",
    studentResponse:
      "I work as a software engineer for a technology company in the city center.",
    feedback: {
      good: ["Direct answer", "Specific details", "Clear pronunciation"],
      improve: [
        "Could add why you like/dislike it",
        "Could mention how long you've worked there",
      ],
    },
    score: "Good (6.5-7.0)",
  },
  {
    topic: "Hometown",
    examinerQuestion: "Tell me about your hometown.",
    studentResponse:
      "I come from Manchester, which is a large industrial city in the north of England. It's famous for its football teams and has a rich musical history. The city center has been completely renovated in recent years, so it's quite modern now.",
    feedback: {
      good: [
        "Comprehensive answer",
        "Specific examples",
        "Good range of vocabulary",
        "Natural linking",
      ],
      improve: ["Could be slightly more concise"],
    },
    score: "Excellent (7.5-8.0)",
  },
  {
    topic: "Hobbies",
    examinerQuestion: "Do you have any hobbies?",
    studentResponse: "Yes, I like reading.",
    feedback: {
      good: ["Answers the question"],
      improve: [
        "Too brief",
        "Add what you read",
        "Explain why you enjoy it",
        "Give more details",
      ],
    },
    score: "Needs Improvement (5.0-5.5)",
  },
];

const interactiveDemo = {
  examiner: [
    "Good morning. My name is Sarah Johnson, and I'm your examiner today. Could you tell me your full name, please?",
    "Thank you. And what should I call you?",
    "Thank you, Alex. Now, in this first part, I'd like to ask you some questions about yourself. Let's talk about where you're from. Where is your hometown?",
    "That's interesting. Do you like living there?",
    "Now let's move on to talk about your work. Do you work or are you a student?",
  ],
  tips: [
    "Give your full name clearly as it appears on your ID",
    "Most students prefer to be called by their first name",
    "Be specific about your hometown - city and country",
    "Give reasons for your opinion with brief examples",
    "Answer directly - if you both work and study, mention your primary activity",
  ],
};

const commonMistakes = [
  {
    mistake: "Giving very long answers",
    example: "Wrong: [5-minute response about your job history]",
    correction:
      "Right: 'I'm a teacher at a local high school. I've been teaching English for about three years, and I really enjoy working with teenagers.'",
  },
  {
    mistake: "One-word answers",
    example: "Wrong: 'Yes.' (to 'Do you like your job?')",
    correction:
      "Right: 'Yes, I do. I find it quite rewarding because I get to help students improve their English skills.'",
  },
  {
    mistake: "Memorized responses",
    example: "Wrong: Obviously rehearsed, unnatural answers",
    correction:
      "Right: Spontaneous, natural responses that sound conversational",
  },
  {
    mistake: "Going off-topic",
    example: "Wrong: Talking about your vacation when asked about your job",
    correction: "Right: Stay focused on the question but add relevant details",
  },
];

const scoringCriteria = [
  {
    band: "9.0",
    description:
      "Fluent, natural responses with wide range of vocabulary and perfect grammar",
  },
  {
    band: "7.0-8.0",
    description:
      "Good fluency, detailed answers, good vocabulary range with minor errors",
  },
  {
    band: "6.0-6.5",
    description:
      "Generally fluent with some hesitation, adequate vocabulary, some errors",
  },
  {
    band: "5.0-5.5",
    description:
      "Limited fluency, basic vocabulary, frequent pauses and errors",
  },
];

export default function Part1PracticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link href="/speaking/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </Button>
        </div>
      </div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">
              IELTS Speaking Part 1 Practice
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Interactive examples and practice for the Introduction & Interview
              section
            </p>
            <div className="flex items-center justify-center gap-4 text-blue-200">
              <Clock className="w-5 h-5" />
              <span>Duration: 4-5 minutes | Personal Questions</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Interactive Demo: How Part 1 Works
          </h2>

          <Card className="p-6">
            <div className="mb-6">
              <Badge variant="primary" className="mb-4">
                Live Example
              </Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Typical Part 1 Flow
              </h3>
            </div>

            <div className="space-y-6">
              {interactiveDemo.examiner.map((question, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6 last:border-b-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                      <User className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 mb-3 font-medium">
                        Examiner: "{question}"
                      </p>
                      <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                        <p className="text-sm text-blue-800">
                          <strong>Tip:</strong> {interactiveDemo.tips[index]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Response Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Response Examples with Feedback
          </h2>

          <div className="space-y-6">
            {practiceExamples.map((example, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{example.topic}</Badge>
                  <Badge
                    variant={
                      example.score.includes("Excellent")
                        ? "primary"
                        : example.score.includes("Good")
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {example.score}
                  </Badge>
                </div>

                <div className="mb-4">
                  <p className="font-medium text-gray-800 mb-2">Examiner:</p>
                  <p className="text-gray-700 italic">
                    "{example.examinerQuestion}"
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-medium text-gray-800 mb-2">
                    Student Response:
                  </p>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                    <p className="text-gray-800">"{example.studentResponse}"</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">
                      ✓ What worked well:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      {example.feedback.good.map((item, goodIndex) => (
                        <li key={goodIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-700 mb-2">
                      → Could improve:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      {example.feedback.improve.map((item, improveIndex) => (
                        <li key={improveIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common Mistakes to Avoid
          </h2>

          <div className="space-y-6">
            {commonMistakes.map((mistake, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {mistake.mistake}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                    <p className="text-sm text-red-800">{mistake.example}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <p className="text-sm text-green-800">
                      {mistake.correction}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Scoring Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Understanding Your Score
          </h2>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Part 1 Band Score Guidelines
            </h3>
            <div className="space-y-4">
              {scoringCriteria.map((criteria, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded"
                >
                  <Badge
                    variant={
                      criteria.band === "9.0"
                        ? "primary"
                        : criteria.band.includes("7")
                        ? "secondary"
                        : "outline"
                    }
                    size="md"
                  >
                    Band {criteria.band}
                  </Badge>
                  <p className="text-gray-700">{criteria.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Practice Options */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Start Practicing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                By Topic
              </h3>
              <p className="text-gray-600 mb-4">
                Practice specific topics like work, study, hometown
              </p>
              <Button asChild className="w-full">
                <Link href="/speaking/part-1/topics">Browse Topics</Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Play className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mock Interview
              </h3>
              <p className="text-gray-600 mb-4">
                Complete practice sessions with mixed topics
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/speaking/mock-test">Start Mock Test</Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Study Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Tips, strategies, and vocabulary building
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/speaking/tips">Study Guide</Link>
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
