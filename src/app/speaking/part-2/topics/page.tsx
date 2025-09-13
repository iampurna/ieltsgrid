import { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  User,
  MapPin,
  Calendar,
  Package,
  Heart,
  Globe,
  Book,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 2 Topics | Cue Cards & Long Turn Questions",
  description:
    "Complete collection of IELTS Speaking Part 2 cue card topics including people, places, events, objects, and activities with preparation strategies.",
  keywords: [
    "IELTS Speaking Part 2",
    "Cue Cards",
    "Long Turn",
    "Speaking Topics",
    "IELTS Practice",
    "Speaking Part 2 Questions",
  ],
};

const topicCategories = [
  {
    id: "people",
    title: "Describe a Person",
    icon: User,
    color: "bg-blue-100 text-blue-700",
    description: "Topics about people you know, admire, or want to meet",
    topics: [
      {
        id: "family-member",
        title: "Describe a family member you get on well with",
        difficulty: "Common",
      },
      {
        id: "person-inspired",
        title: "Describe a person who has inspired you",
        difficulty: "Common",
      },
      {
        id: "old-person",
        title: "Describe an old person you know",
        difficulty: "Common",
      },
      {
        id: "kind-person",
        title: "Describe a person you know who is kind",
        difficulty: "Frequent",
      },
      {
        id: "respect-person",
        title: "Describe someone you respect",
        difficulty: "Frequent",
      },
      {
        id: "interesting-person",
        title: "Describe an interesting person you met",
        difficulty: "Frequent",
      },
    ],
  },
  {
    id: "places",
    title: "Describe a Place",
    icon: MapPin,
    color: "bg-green-100 text-green-700",
    description: "Topics about locations, buildings, and geographical areas",
    topics: [
      {
        id: "peaceful-place",
        title: "Describe a place that you find peaceful",
        difficulty: "Very Common",
      },
      {
        id: "travel-place",
        title: "Describe a place you have recently visited",
        difficulty: "Common",
      },
      {
        id: "hometown-place",
        title: "Describe an interesting place in your hometown",
        difficulty: "Common",
      },
      {
        id: "natural-place",
        title: "Describe a natural place you would like to visit",
        difficulty: "Frequent",
      },
      {
        id: "historical-place",
        title: "Describe a historical place you have been to",
        difficulty: "Frequent",
      },
    ],
  },
  {
    id: "events",
    title: "Describe an Event/Experience",
    icon: Calendar,
    color: "bg-purple-100 text-purple-700",
    description: "Topics about experiences, occasions, and memorable moments",
    topics: [
      {
        id: "journey",
        title: "Describe a journey that didn't go as planned",
        difficulty: "Common",
      },
      {
        id: "embarrassment",
        title: "Describe a time you were embarrassed",
        difficulty: "Common",
      },
      {
        id: "daily-routine",
        title: "Describe a time of the day you like",
        difficulty: "Common",
      },
      {
        id: "unexpected-event",
        title: "Describe an unexpected event",
        difficulty: "Frequent",
      },
      {
        id: "good-news",
        title: "Describe some good news you recently received",
        difficulty: "Frequent",
      },
      {
        id: "celebration",
        title: "Describe a celebration you attended",
        difficulty: "Frequent",
      },
    ],
  },
  {
    id: "objects",
    title: "Describe an Object/Thing",
    icon: Package,
    color: "bg-orange-100 text-orange-700",
    description: "Topics about things, items, and possessions",
    topics: [
      {
        id: "art-piece",
        title: "Describe a piece of art you like",
        difficulty: "Common",
      },
      {
        id: "book",
        title: "Describe a book you have recently read",
        difficulty: "Very Common",
      },
      {
        id: "gift",
        title: "Describe a gift you recently gave to someone",
        difficulty: "Common",
      },
      {
        id: "photograph",
        title: "Describe a photograph you like",
        difficulty: "Common",
      },
      {
        id: "useful-website",
        title: "Describe a useful website",
        difficulty: "Frequent",
      },
      { id: "song", title: "Describe a song you like", difficulty: "Frequent" },
    ],
  },
  {
    id: "activities",
    title: "Describe an Activity",
    icon: Heart,
    color: "bg-red-100 text-red-700",
    description: "Topics about hobbies, sports, and things you do",
    topics: [
      {
        id: "hobby",
        title: "Describe an interesting hobby",
        difficulty: "Common",
      },
      {
        id: "exercise",
        title: "Describe an exercise you know",
        difficulty: "Common",
      },
      {
        id: "sport",
        title: "Describe a sport you would like to learn",
        difficulty: "Frequent",
      },
      {
        id: "relax-activity",
        title: "Describe something you do to relax",
        difficulty: "Frequent",
      },
      {
        id: "outdoor-activity",
        title: "Describe an outdoor activity you enjoy",
        difficulty: "Frequent",
      },
    ],
  },
  {
    id: "abstract",
    title: "Describe Abstract Concepts",
    icon: Globe,
    color: "bg-indigo-100 text-indigo-700",
    description: "Topics about ideas, skills, and intangible concepts",
    topics: [
      {
        id: "language",
        title: "Describe a language you have learned",
        difficulty: "Common",
      },
      { id: "law", title: "Describe a good law", difficulty: "Frequent" },
      {
        id: "advice",
        title: "Describe a piece of advice you recently received",
        difficulty: "Common",
      },
      {
        id: "skill",
        title: "Describe a skill you would like to learn",
        difficulty: "Frequent",
      },
      {
        id: "tradition",
        title: "Describe a traditional festival in your country",
        difficulty: "Frequent",
      },
    ],
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

        {/* Topic Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Topic Categories
          </h2>

          <div className="space-y-8">
            {topicCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.topics.map((topic) => (
                      <div
                        key={topic.id}
                        className="bg-gray-50 p-4 rounded border"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            variant={
                              topic.difficulty === "Very Common"
                                ? "primary"
                                : topic.difficulty === "Common"
                                ? "secondary"
                                : "outline"
                            }
                            size="sm"
                          >
                            {topic.difficulty}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          {topic.title}
                        </h4>
                        <Button asChild size="sm" className="w-full">
                          <Link href={`/speaking/part-2/${topic.id}`}>
                            Practice This Topic
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
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

        {/* Sample Cue Card Format */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Typical Cue Card Format
          </h2>

          <Card className="p-6 bg-yellow-50 border-yellow-200">
            <div className="bg-white p-6 rounded border-2 border-dashed border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Describe a person who has inspired you.
              </h3>
              <p className="text-gray-700 mb-4">You should say:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>who this person is</li>
                <li>how you know this person</li>
                <li>what this person does</li>
                <li>and explain why you think they are inspiring.</li>
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
