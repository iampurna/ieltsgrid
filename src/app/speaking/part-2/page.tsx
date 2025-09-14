// src/app/speaking/part-2/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  User,
  Play,
  Target,
  Lightbulb,
  ArrowLeft,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 2 Practice | Long Turn & Cue Card Topics",
  description:
    "Practice IELTS Speaking Part 2 with cue card examples, preparation strategies, and comprehensive topic coverage for the long turn section.",
  keywords: [
    "IELTS Speaking Part 2 Practice",
    "Long Turn Practice",
    "Cue Card Topics",
    "Speaking Part 2 Examples",
    "IELTS Cue Card Practice",
  ],
};

const practiceExamples = [
  {
    topic: "Describe a Person",
    cueCard: "Describe a person who has inspired you.",
    bulletPoints: [
      "who this person is",
      "how you know this person",
      "what this person does",
      "and explain why you think they are inspiring",
    ],
    studentResponse:
      "I'd like to talk about my grandmother, who has been a tremendous source of inspiration throughout my life. She's 78 years old now, and I've known her since childhood as she's my mother's mother. During her younger years, she worked as a nurse while raising four children, which was quite challenging. What makes her so inspiring is her incredible resilience and positive attitude...",
    feedback: {
      good: [
        "Clear topic introduction",
        "Addresses all bullet points",
        "Uses descriptive language",
        "Personal and engaging",
      ],
      improve: ["Could add more specific examples", "Extend to full 2 minutes"],
    },
    score: "Good (7.0-7.5)",
  },
  {
    topic: "Describe a Place",
    cueCard: "Describe a place you find peaceful.",
    bulletPoints: [
      "where it is",
      "when you first went there",
      "what you do there",
      "and explain why you find it peaceful",
    ],
    studentResponse:
      "The library in my university. It's quiet. I go there to study. It's peaceful because there's no noise.",
    feedback: {
      good: ["Answers the question"],
      improve: [
        "Too brief for Part 2",
        "Needs more detail and description",
        "Should speak for 1-2 minutes",
        "Add personal experiences and feelings",
      ],
    },
    score: "Needs Improvement (5.0-5.5)",
  },
  {
    topic: "Describe an Experience",
    cueCard: "Describe a journey that didn't go as planned.",
    bulletPoints: [
      "where you were going",
      "how you were travelling",
      "who you were with",
      "what went wrong",
      "and explain what you would do differently",
    ],
    studentResponse:
      "Last summer, I was traveling to Barcelona with my best friend for a week-long vacation. We had booked flights and accommodation months in advance. However, our flight was delayed by six hours due to a technical problem with the aircraft. This meant we missed our connecting flight in Madrid and had to spend an unexpected night at the airport. The airline provided vouchers for food, but the experience was quite stressful. If I were to do it differently, I'd probably book direct flights and always have travel insurance to cover unexpected delays.",
    feedback: {
      good: [
        "Comprehensive coverage of all points",
        "Good narrative structure",
        "Appropriate length",
        "Clear conclusion with lessons learned",
      ],
      improve: ["Could add more emotional reactions"],
    },
    score: "Excellent (8.0-8.5)",
  },
];

const preparationDemo = {
  cueCard: "Describe a book you have recently read.",
  bulletPoints: [
    "what kind of book it is",
    "what it is about",
    "what sort of people would enjoy it",
    "and explain why you liked it",
  ],
  preparationNotes: [
    "Book: 'The Alchemist' by Paulo Coelho",
    "Type: Philosophical fiction/adventure",
    "About: Young shepherd's journey to find treasure",
    "Readers: People interested in self-discovery",
    "Why liked: Inspiring message about following dreams",
  ],
  timeStructure: [
    { time: "0-20 seconds", activity: "Introduce the book and type" },
    { time: "20-50 seconds", activity: "Describe what it's about" },
    { time: "50-80 seconds", activity: "Discuss target readers" },
    { time: "80-120 seconds", activity: "Explain why you liked it" },
  ],
};

const commonMistakes = [
  {
    mistake: "Not using preparation time effectively",
    example: "Wrong: Writing full sentences or not taking notes at all",
    correction:
      "Right: Write key words and phrases, plan your structure, think of specific examples",
  },
  {
    mistake: "Stopping too early",
    example: "Wrong: Speaking for only 30-60 seconds",
    correction:
      "Right: Aim for the full 1-2 minutes, add details, examples, and personal feelings",
  },
  {
    mistake: "Ignoring bullet points",
    example: "Wrong: Only addressing 2 out of 4 bullet points",
    correction: "Right: Make sure to cover all the points on the cue card",
  },
  {
    mistake: "Memorized responses",
    example: "Wrong: Reciting a pre-learned answer that doesn't fit",
    correction: "Right: Adapt your ideas to the specific topic given",
  },
];

const scoringCriteria = [
  {
    band: "9.0",
    description:
      "Fluent, natural discourse with rich vocabulary and complex ideas",
  },
  {
    band: "7.0-8.0",
    description:
      "Speaks at length with ease, good vocabulary range, clear development of ideas",
  },
  {
    band: "6.0-6.5",
    description:
      "Generally maintains flow, adequate vocabulary, some development of ideas",
  },
  {
    band: "5.0-5.5",
    description:
      "Limited ability to speak at length, basic vocabulary, repetitive",
  },
];

export default function Part2PracticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link href="/speaking" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-purple-200" />
            <h1 className="text-4xl font-bold mb-4">
              IELTS Speaking Part 2 Practice
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Master the Long Turn with cue card practice and preparation
              strategies
            </p>
            <div className="flex items-center justify-center gap-4 text-purple-200">
              <Clock className="w-5 h-5" />
              <span>Duration: 3-4 minutes | 1 min prep + 2 min speaking</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Preparation Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How to Use Your Preparation Time
          </h2>

          <Card className="p-6">
            <div className="mb-6">
              <Badge variant="primary" className="mb-4">
                Preparation Example
              </Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sample Cue Card & Notes
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {preparationDemo.cueCard}
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">You should say:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {preparationDemo.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Your Preparation Notes (1 minute):
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {preparationDemo.preparationNotes.map((note, index) => (
                      <li key={index}>• {note}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">
                  Time Management (2 minutes):
                </h4>
                <div className="space-y-3">
                  {preparationDemo.timeStructure.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-3 bg-gray-50 rounded"
                    >
                      <Badge
                        variant="outline"
                        size="sm"
                        className="flex-shrink-0"
                      >
                        {item.time}
                      </Badge>
                      <span className="text-sm text-gray-700">
                        {item.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
                  <h4 className="font-medium text-gray-800 mb-2">Cue Card:</h4>
                  <p className="text-gray-700 font-medium mb-2">
                    "{example.cueCard}"
                  </p>
                  <div className="text-sm text-gray-600">
                    <p className="mb-1">You should say:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {example.bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Student Response:
                  </h4>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-purple-500">
                    <p className="text-gray-800 italic">
                      {example.studentResponse}
                    </p>
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
              Part 2 Band Score Guidelines
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
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                By Category
              </h3>
              <p className="text-gray-600 mb-4">
                Practice specific categories like people, places, experiences
              </p>
              <Button asChild className="w-full">
                <Link href="/speaking/part-2/topics">Browse Topics</Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Play className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                All Questions
              </h3>
              <p className="text-gray-600 mb-4">
                Complete list of all Part 2 cue card topics
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/speaking/part-2/all-questions">
                  View All Questions
                </Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Lightbulb className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tips & Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                Learn advanced techniques for Part 2 success
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
