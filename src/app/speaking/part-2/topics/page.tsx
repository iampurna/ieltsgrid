// src/app/speaking/part-2/topics/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  User,
  MapPin,
  Package,
  Calendar,
  Activity,
  ArrowLeft,
  Book,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 2 Topics | Cue Cards & Long Turn Questions",
  description:
    "Complete collection of IELTS Speaking Part 2 cue card topics including people, places, objects, events, and activities with preparation strategies.",
  keywords: [
    "IELTS Speaking Part 2",
    "Cue Cards",
    "Long Turn",
    "Speaking Topics",
    "IELTS Practice",
    "Speaking Part 2 Questions",
  ],
};

// All 5 topic categories from the PDF
const topicCategories = [
  {
    id: "person",
    title: "Person",
    description: "Topics about people you know, admire, or want to meet",
    icon: User,
    color: "bg-blue-100 text-blue-700",
    questionCount: 4,
    difficulty: "Very Common",
  },
  {
    id: "place",
    title: "Place",
    description: "Topics about locations, buildings, and geographical areas",
    icon: MapPin,
    color: "bg-green-100 text-green-700",
    questionCount: 2,
    difficulty: "Common",
  },
  {
    id: "object",
    title: "Object",
    description: "Topics about things, items, possessions, and concepts",
    icon: Package,
    color: "bg-orange-100 text-orange-700",
    questionCount: 8,
    difficulty: "Very Common",
  },
  {
    id: "event-occasion",
    title: "Event/Occasion",
    description: "Topics about experiences, occasions, and memorable moments",
    icon: Calendar,
    color: "bg-purple-100 text-purple-700",
    questionCount: 6,
    difficulty: "Common",
  },
  {
    id: "activity",
    title: "Activity",
    description: "Topics about hobbies, sports, and things you do",
    icon: Activity,
    color: "bg-red-100 text-red-700",
    questionCount: 4,
    difficulty: "Common",
  },
];

const preparationTips = [
  {
    title: "1 Minute Preparation",
    content:
      "Use your preparation time wisely - make quick notes about what, when, where, who, why, and how.",
  },
  {
    title: "Structure Your Answer",
    content:
      "Follow the bullet points on the cue card, but expand each point with details and examples.",
  },
  {
    title: "Speak for 2 Minutes",
    content:
      "Aim to speak for the full 2 minutes. Use descriptive language and personal anecdotes.",
  },
  {
    title: "Stay on Topic",
    content:
      "Don't drift away from the main topic, but you can make connections to related experiences.",
  },
];

export default function Part2TopicsPage() {
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
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Book className="w-12 h-12 mx-auto mb-4 text-purple-200" />
            <h1 className="text-4xl font-bold mb-4">
              IELTS Speaking Part 2 Topics
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Master the Long Turn with comprehensive cue card practice
            </p>
            <div className="flex items-center justify-center gap-4 text-purple-200">
              <Clock className="w-5 h-5" />
              <span>Duration: 3-4 minutes (1 min prep + 2 min speaking)</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <Card className="p-6 bg-purple-50 border-purple-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About Part 2 - "The Talk"
            </h2>
            <p className="text-gray-700 mb-4">
              Part 2 is called "The Long Turn" where you receive a cue card with
              a topic and bullet points. You have 1 minute to prepare and must
              speak for 1-2 minutes about the topic.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white p-3 rounded">
                <strong>Format:</strong> Individual long turn
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Preparation:</strong> 1 minute with notes
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Speaking:</strong> 1-2 minutes
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Topics:</strong> Personal experiences
              </div>
            </div>
          </Card>
        </section>

        {/* All Topic Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            All Topic Categories
          </h2>
          <p className="text-gray-600 mb-8">
            IELTS Speaking Part 2 topics fall into these five main categories.
            Practice across all areas!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {topicCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.id}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {category.title}
                        </h3>
                        <Badge variant="primary" size="sm">
                          {category.difficulty}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {category.questionCount} questions
                        </span>
                        <Button asChild size="sm">
                          <Link
                            href={`/speaking/part-2/all-questions#${category.id}`}
                          >
                            View Questions
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Quick Access to All Questions */}
          <div className="text-center">
            <Card className="p-4 bg-gray-100">
              <p className="text-gray-700 mb-4">
                Looking for all cue card topics in one place?
              </p>
              <Button asChild variant="outline">
                <Link href="/speaking/part-2/all-questions">
                  View Complete Cue Card Bank (24 Topics)
                </Link>
              </Button>
            </Card>
          </div>
        </section>

        {/* Sample Cue Card Format */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Typical Cue Card Format
          </h2>

          <Card className="p-6 bg-yellow-50 border-yellow-200">
            <div className="bg-white p-6 rounded border-2 border-dashed border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Describe a member of your family you get on well with.
              </h3>
              <p className="text-gray-700 mb-4">You should say:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>who it is</li>
                <li>what relationship you have to that person</li>
                <li>what that person is like</li>
                <li>what you do together</li>
                <li>and explain why you get on so well.</li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  <strong>
                    You will have 1 minute to prepare your talk and then you
                    will need to speak for 1-2 minutes.
                  </strong>
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Preparation Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Preparation Strategy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preparationTips.map((tip, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-700">{tip.content}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Tips */}
        <section>
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Part 2 Success Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  During Preparation:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Write key words, not sentences</li>
                  <li>Plan your structure</li>
                  <li>Think of specific examples</li>
                  <li>Consider all bullet points</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  While Speaking:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Address all bullet points</li>
                  <li>Use descriptive language</li>
                  <li>Give personal details</li>
                  <li>Speak naturally</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Language Tips:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Use past tenses for experiences</li>
                  <li>Include connecting words</li>
                  <li>Vary your vocabulary</li>
                  <li>Show your personality</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
