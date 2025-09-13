// src/app/speaking/part-1/topics/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Clock,
  User,
  Home,
  Briefcase,
  GraduationCap,
  ArrowLeft,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 1 Topics | Introduction & Interview Questions",
  description:
    "Complete list of IELTS Speaking Part 1 topics including personal information, work, study, hometown, hobbies, and daily life questions with practice materials.",
  keywords: [
    "IELTS Speaking Part 1",
    "Speaking Topics",
    "Personal Questions",
    "Interview Questions",
    "IELTS Practice",
    "Speaking Preparation",
  ],
  openGraph: {
    title: "IELTS Speaking Part 1 Topics & Questions",
    description:
      "Master IELTS Speaking Part 1 with comprehensive topic coverage and practice questions",
    type: "website",
  },
};

// Core topics that are most likely to appear
const coreTopics = [
  {
    id: "work",
    title: "Work",
    description:
      "Questions about your job, workplace, colleagues, and career plans",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-700",
    questionCount: 10,
    difficulty: "Common",
  },
  {
    id: "study",
    title: "Study",
    description:
      "Questions about your education, subjects, school life, and academic goals",
    icon: GraduationCap,
    color: "bg-green-100 text-green-700",
    questionCount: 10,
    difficulty: "Common",
  },
  {
    id: "hometown",
    title: "Hometown",
    description:
      "Questions about where you're from, local attractions, and changes over time",
    icon: Home,
    color: "bg-purple-100 text-purple-700",
    questionCount: 10,
    difficulty: "Very Common",
  },
  {
    id: "home",
    title: "Home",
    description:
      "Questions about your living situation, neighborhood, and home environment",
    icon: Home,
    color: "bg-orange-100 text-orange-700",
    questionCount: 11,
    difficulty: "Common",
  },
];

// Additional topics from the PDF
const additionalTopics = [
  { id: "art", title: "Art", questionCount: 6 },
  { id: "bicycles", title: "Bicycles", questionCount: 5 },
  { id: "birthdays", title: "Birthdays", questionCount: 4 },
  { id: "childhood", title: "Childhood", questionCount: 5 },
  { id: "clothes", title: "Clothes", questionCount: 6 },
  { id: "computers", title: "Computers", questionCount: 5 },
  { id: "daily-routine", title: "Daily Routine", questionCount: 6 },
  { id: "dictionaries", title: "Dictionaries", questionCount: 5 },
  { id: "dreams", title: "Dreams", questionCount: 5 },
  { id: "drinks", title: "Drinks", questionCount: 5 },
  { id: "evenings", title: "Evenings", questionCount: 6 },
  { id: "family-friends", title: "Family & Friends", questionCount: 6 },
  { id: "flowers", title: "Flowers", questionCount: 5 },
  { id: "food", title: "Food", questionCount: 6 },
  { id: "going-out", title: "Going Out", questionCount: 5 },
  { id: "happiness", title: "Happiness", questionCount: 5 },
  { id: "hobbies", title: "Hobbies", questionCount: 6 },
  { id: "internet", title: "Internet", questionCount: 6 },
  { id: "languages", title: "Languages", questionCount: 4 },
  { id: "leisure-time", title: "Leisure Time", questionCount: 6 },
  { id: "music", title: "Music", questionCount: 6 },
  { id: "neighbours", title: "Neighbours & Neighbourhood", questionCount: 6 },
  { id: "newspapers", title: "Newspapers", questionCount: 5 },
  { id: "noise", title: "Noise", questionCount: 5 },
  { id: "patience", title: "Patience", questionCount: 4 },
  { id: "pets", title: "Pets", questionCount: 6 },
  { id: "reading", title: "Reading", questionCount: 6 },
  { id: "shopping", title: "Shopping", questionCount: 6 },
  { id: "sport", title: "Sport", questionCount: 6 },
  { id: "tv", title: "TV", questionCount: 6 },
];

// Helper function to generate topic hash from title (matching all-questions page logic)
const generateTopicHash = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

export default function Part1TopicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link href="/speaking" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Speaking
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
              IELTS Speaking Part 1 Topics
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Master the Introduction & Interview section with comprehensive
              topic coverage
            </p>
            <div className="flex items-center justify-center gap-4 text-blue-200">
              <Clock className="w-5 h-5" />
              <span>Duration: 4-5 minutes</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <Card className="p-6 bg-blue-50 border-blue-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About Part 1
            </h2>
            <p className="text-gray-700 mb-4">
              Part 1 is the introduction and interview section where the
              examiner asks you questions about yourself, your life, and your
              experiences. Questions are about familiar topics and everyday
              situations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded">
                <strong>Format:</strong> Question & Answer
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Topics:</strong> 2-3 different topics
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Response:</strong> 1-3 sentences per answer
              </div>
            </div>
          </Card>
        </section>

        {/* Most Common Topics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Most Common Topics
          </h2>
          <p className="text-gray-600 mb-8">
            These four topics appear in almost every IELTS Speaking test. Master
            these first!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {coreTopics.map((topic) => {
              const IconComponent = topic.icon;
              return (
                <Card
                  key={topic.id}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${topic.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {topic.title}
                        </h3>
                        <Badge variant="primary" size="sm">
                          {topic.difficulty}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{topic.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {topic.questionCount} questions
                        </span>
                        <Button asChild size="sm">
                          <Link href={`/speaking/part-1/${topic.id}`}>
                            Practice Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* All Topics Grid */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            All Part 1 Topics
          </h2>
          <p className="text-gray-600 mb-8">
            Complete collection of IELTS Speaking Part 1 topics with practice
            questions
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {additionalTopics.map((topic) => {
              // Check if this topic has a detailed page available
              const hasDetailedPage = [
                "work",
                "study",
                "hometown",
                "home",
              ].includes(topic.id);

              return (
                <Card
                  key={topic.id}
                  className="p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">
                      {topic.title}
                    </h3>
                    <Badge variant="secondary" size="sm">
                      {topic.questionCount}
                    </Badge>
                  </div>
                  {hasDetailedPage ? (
                    <Button asChild size="sm" className="w-full">
                      <Link href={`/speaking/part-1/${topic.id}`}>
                        Practice Now
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <Link
                        href={`/speaking/part-1/all-questions#${generateTopicHash(
                          topic.title
                        )}`}
                      >
                        View Questions
                      </Link>
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Quick Access to All Questions */}
          <div className="mt-8 text-center">
            <Card className="p-4 bg-gray-100">
              <p className="text-gray-700 mb-4">
                Looking for questions from all topics in one place?
              </p>
              <Button asChild variant="outline">
                <Link href="/speaking/part-1/all-questions">
                  View Complete Question Bank
                </Link>
              </Button>
            </Card>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mt-12">
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Part 1 Success Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Give direct, natural answers</li>
                  <li>Add brief explanations or examples</li>
                  <li>Use a variety of vocabulary</li>
                  <li>Speak clearly and at natural pace</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Don't:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Give very long answers</li>
                  <li>Memorize and recite responses</li>
                  <li>Ask the examiner questions</li>
                  <li>Use overly complex vocabulary</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
