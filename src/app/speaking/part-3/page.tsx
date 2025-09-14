// src/app/speaking/part-3/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Clock,
  Users,
  Play,
  Target,
  Lightbulb,
  ArrowLeft,
  TrendingUp,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 3 Practice | Discussion & Abstract Topics",
  description:
    "Practice IELTS Speaking Part 3 with discussion examples, analytical thinking strategies, and comprehensive abstract topic coverage.",
  keywords: [
    "IELTS Speaking Part 3 Practice",
    "Discussion Practice",
    "Abstract Topics",
    "Two-way Discussion",
    "Advanced Speaking Practice",
  ],
};

const practiceExamples = [
  {
    topic: "Technology & Society",
    examinerQuestion: "How has technology changed the way people work?",
    studentResponse:
      "Technology has fundamentally transformed the modern workplace in several significant ways. Firstly, it's enabled remote work and flexible arrangements, which became particularly evident during the pandemic. People can now collaborate across continents through video conferencing and cloud-based platforms. However, this has also created new challenges, such as work-life balance issues and the expectation of constant availability. Additionally, automation has replaced many routine jobs while creating new roles in tech sectors, leading to a skills gap that many workers struggle to bridge.",
    feedback: {
      good: [
        "Addresses question comprehensively",
        "Uses advanced vocabulary",
        "Provides specific examples",
        "Shows analytical thinking",
        "Discusses both positive and negative aspects",
      ],
      improve: ["Could add more future predictions"],
    },
    score: "Excellent (8.0-8.5)",
  },
  {
    topic: "Education Systems",
    examinerQuestion:
      "What do you think are the most important qualities of a good teacher?",
    studentResponse:
      "A good teacher should be patient and understanding. They should know their subject well and explain things clearly.",
    feedback: {
      good: ["Basic understanding of the topic"],
      improve: [
        "Too brief for Part 3",
        "Needs more development and examples",
        "Should use more sophisticated language",
        "Missing analytical depth",
        "Could compare different teaching styles",
      ],
    },
    score: "Needs Improvement (5.5-6.0)",
  },
  {
    topic: "Environmental Issues",
    examinerQuestion:
      "Do you think individuals or governments are more responsible for solving environmental problems?",
    studentResponse:
      "This is a complex issue that requires both individual and governmental action, but I would argue that governments bear greater responsibility due to their regulatory power and resources. While individuals can make important contributions through lifestyle changes like reducing consumption and using renewable energy, systemic environmental problems require policy interventions that only governments can implement. For instance, carbon pricing, industrial regulations, and infrastructure investments for clean energy are beyond individual capability. However, governments also need public support and pressure from environmentally conscious citizens to prioritize these issues, so there's definitely a symbiotic relationship between the two levels of responsibility.",
    feedback: {
      good: [
        "Sophisticated analysis",
        "Acknowledges complexity",
        "Uses specific examples",
        "Demonstrates critical thinking",
        "Advanced vocabulary and structures",
      ],
      improve: ["Could be slightly more concise"],
    },
    score: "Outstanding (8.5-9.0)",
  },
];

const discussionFlow = {
  examiner: [
    "We've been talking about a book you recently read. I'd like to discuss with you some general questions related to reading and books.",
    "How popular is reading in your country?",
    "Do you think people read less now than they did in the past?",
    "What do you think are the benefits of reading books compared to watching TV?",
    "How do you think reading habits will change in the future?",
  ],
  strategies: [
    "Acknowledge the topic connection to Part 2",
    "Give a direct answer with supporting reasons",
    "Compare past and present with specific examples",
    "Discuss advantages with concrete benefits",
    "Speculate about future trends with appropriate language",
  ],
};

const languageFeatures = [
  {
    function: "Expressing Opinions",
    examples: [
      "I firmly believe that...",
      "In my view...",
      "I would argue that...",
      "From my perspective...",
    ],
  },
  {
    function: "Speculating",
    examples: [
      "It's likely that...",
      "There's a strong possibility that...",
      "I suspect that...",
      "It seems probable that...",
    ],
  },
  {
    function: "Comparing & Contrasting",
    examples: [
      "Compared to...",
      "In contrast to...",
      "On the other hand...",
      "Whereas...",
    ],
  },
  {
    function: "Adding Information",
    examples: [
      "Furthermore...",
      "Moreover...",
      "What's more...",
      "Additionally...",
    ],
  },
];

const commonMistakes = [
  {
    mistake: "Giving personal examples only",
    example:
      "Wrong: Only talking about your own experience without broader analysis",
    correction:
      "Right: Use personal experience to support broader societal observations and trends",
  },
  {
    mistake: "Being too brief",
    example: "Wrong: One-sentence answers without development",
    correction:
      "Right: Develop ideas with reasons, examples, and different perspectives",
  },
  {
    mistake: "Avoiding difficult questions",
    example: "Wrong: 'I don't know' or 'I haven't thought about it'",
    correction:
      "Right: 'That's an interesting question. I think...' and then attempt an answer",
  },
  {
    mistake: "Using only simple language",
    example: "Wrong: Basic vocabulary and simple sentence structures",
    correction:
      "Right: Use complex sentences, advanced vocabulary, and sophisticated ideas",
  },
];

const scoringCriteria = [
  {
    band: "9.0",
    description:
      "Develops topics fully with sophisticated ideas, wide vocabulary range, and natural delivery",
  },
  {
    band: "7.0-8.0",
    description:
      "Shows ability to discuss abstract topics, uses a range of vocabulary, generally maintains flow",
  },
  {
    band: "6.0-6.5",
    description:
      "Can express views on familiar topics, adequate vocabulary, some hesitation",
  },
  {
    band: "5.0-5.5",
    description:
      "Limited ability to express views, basic vocabulary, frequent pauses",
  },
];

export default function Part3PracticePage() {
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
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-indigo-200" />
            <h1 className="text-4xl font-bold mb-4">
              IELTS Speaking Part 3 Practice
            </h1>
            <p className="text-xl text-indigo-100 mb-6">
              Master abstract discussions and analytical thinking with the
              examiner
            </p>
            <div className="flex items-center justify-center gap-4 text-indigo-200">
              <Clock className="w-5 h-5" />
              <span>Duration: 4-5 minutes | Two-way Discussion</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Discussion Flow Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How Part 3 Discussions Flow
          </h2>

          <Card className="p-6">
            <div className="mb-6">
              <Badge variant="primary" className="mb-4">
                Discussion Example
              </Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Typical Part 3 Development
              </h3>
            </div>

            <div className="space-y-6">
              {discussionFlow.examiner.map((question, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6 last:border-b-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-2 rounded-full flex-shrink-0">
                      <Users className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 mb-3 font-medium">
                        Examiner: "{question}"
                      </p>
                      <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-400">
                        <p className="text-sm text-indigo-800">
                          <strong>Strategy:</strong>{" "}
                          {discussionFlow.strategies[index]}
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
            Discussion Examples with Analysis
          </h2>

          <div className="space-y-6">
            {practiceExamples.map((example, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{example.topic}</Badge>
                  <Badge
                    variant={
                      example.score.includes("Outstanding")
                        ? "primary"
                        : example.score.includes("Excellent")
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {example.score}
                  </Badge>
                </div>

                <div className="mb-4">
                  <p className="font-medium text-gray-800 mb-2">
                    Examiner Question:
                  </p>
                  <p className="text-gray-700 italic">
                    "{example.examinerQuestion}"
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-medium text-gray-800 mb-2">
                    Student Response:
                  </p>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-indigo-500">
                    <p className="text-gray-800">{example.studentResponse}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">
                      ✓ Effective elements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      {example.feedback.good.map((item, goodIndex) => (
                        <li key={goodIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-700 mb-2">
                      → Areas for enhancement:
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

        {/* Language Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Essential Language for Part 3
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languageFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.function}
                </h3>
                <div className="space-y-2">
                  {feature.examples.map((example, exIndex) => (
                    <Badge
                      key={exIndex}
                      variant="outline"
                      className="block w-fit text-left"
                    >
                      {example}
                    </Badge>
                  ))}
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
              Part 3 Band Score Guidelines
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
              <Target className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                By Category
              </h3>
              <p className="text-gray-600 mb-4">
                Practice specific categories like society, education, technology
              </p>
              <Button asChild className="w-full">
                <Link href="/speaking/part-3/topics">Browse Topics</Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                All Questions
              </h3>
              <p className="text-gray-600 mb-4">
                Complete list of all Part 3 discussion topics
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/speaking/part-3/all-questions">
                  View All Questions
                </Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Lightbulb className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Advanced Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                Learn sophisticated discussion techniques
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
