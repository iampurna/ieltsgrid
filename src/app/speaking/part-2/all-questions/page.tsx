// src/app/speaking/part-2/all-questions/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  List,
  ArrowLeft,
  User,
  MapPin,
  Package,
  Calendar,
  Activity,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 2: Complete Cue Card List | All Topics A-Z",
  description:
    "Comprehensive list of all IELTS Speaking Part 2 cue cards organized by categories. Practice with real exam topics for people, places, objects, events, and activities.",
  keywords: [
    "IELTS Speaking Part 2 Cue Cards",
    "All Speaking Part 2 Topics",
    "IELTS Cue Card Bank",
    "Long Turn Practice",
    "Complete IELTS Part 2 Guide",
  ],
};

const allCueCards = [
  {
    category: "Person",
    id: "person",
    icon: User,
    color: "bg-blue-100 text-blue-700",
    topics: [
      {
        title: "Describe a member of your family you get on well with.",
        bulletPoints: [
          "who it is",
          "what relationship you have to that person",
          "what that person is like",
          "what you do together",
          "and explain why you get on so well.",
        ],
      },
      {
        title: "Describe a person you know who is kind.",
        bulletPoints: [
          "who it is",
          "how you know this person",
          "what sort of person he/she is",
          "and explain why you think they are kind.",
        ],
      },
      {
        title: "Describe an old person you know.",
        bulletPoints: [
          "who this person is",
          "how old he/she is",
          "what this person is like",
          "and explain why you like this person.",
        ],
      },
      {
        title: "Describe someone you respect.",
        bulletPoints: [
          "who the person is",
          "how you know about this person",
          "what this person does",
          "what this person is like",
          "and explain why you respect this person.",
        ],
      },
    ],
  },
  {
    category: "Place",
    id: "place",
    icon: MapPin,
    color: "bg-green-100 text-green-700",
    topics: [
      {
        title: "Describe a place that you find peaceful.",
        bulletPoints: [
          "where it is",
          "when you first went there",
          "what you do there",
          "and why you like it.",
        ],
      },
      {
        title: "Describe a place you have recently visited.",
        bulletPoints: [
          "where you went",
          "who you went with",
          "how you got there",
          "and explain why you enjoyed it.",
        ],
      },
    ],
  },
  {
    category: "Object",
    id: "object",
    icon: Package,
    color: "bg-orange-100 text-orange-700",
    topics: [
      {
        title: "Describe a piece of art you like.",
        bulletPoints: [
          "what the work of art is",
          "when you first saw it",
          "what you know about it",
          "and explain why you like it.",
        ],
      },
      {
        title: "Describe a book you have recently read.",
        bulletPoints: [
          "what kind of book it is",
          "what it is about",
          "what sort of people would enjoy it",
          "and explain why you liked it.",
        ],
      },
      {
        title: "Describe a gift you recently gave to someone.",
        bulletPoints: [
          "who you gave it to",
          "what kind of person he/she is",
          "what the gift was",
          "what occasion the gift was for",
          "and explain why you chose that gift.",
        ],
      },
      {
        title: "Describe a useful website.",
        bulletPoints: [
          "what it is",
          "how often you visit it",
          "what kind of site it is",
          "what kind of information it offers",
          "and explain why you think it is useful.",
        ],
      },
      {
        title: "Describe a language you have learned.",
        bulletPoints: [
          "what it is",
          "when you started learning",
          "how you learned it",
          "what was difficult about it",
          "and why you decided to learn that language.",
        ],
      },
      {
        title: "Describe a good law.",
        bulletPoints: [
          "what it is",
          "who is affected by it",
          "and why you think it is good.",
        ],
      },
      {
        title: "Describe a song you like.",
        bulletPoints: [
          "what kind of song it is",
          "what the song is about",
          "when you first heard it",
          "and explain why you like it.",
        ],
      },
      {
        title: "Describe a photograph you like.",
        bulletPoints: [
          "what can be seen in the photo",
          "when it was taken",
          "who took it",
          "and explain why you like it.",
        ],
      },
    ],
  },
  {
    category: "Event/Occasion",
    id: "event-occasion",
    icon: Calendar,
    color: "bg-purple-100 text-purple-700",
    topics: [
      {
        title: "Describe a piece of advice you recently received.",
        bulletPoints: [
          "when this happened",
          "who gave you the advice",
          "what the advice was",
          "and explain how you felt about the advice.",
        ],
      },
      {
        title: "Describe a time of the day you like.",
        bulletPoints: [
          "what time of day it is",
          "what you do at that time",
          "who you are usually with",
          "and explain why you like it.",
        ],
      },
      {
        title: "Describe a time you were embarrassed.",
        bulletPoints: [
          "when it was",
          "who you were with",
          "what happened",
          "and how you coped afterwards.",
        ],
      },
      {
        title: "Describe a journey that didn't go as planned.",
        bulletPoints: [
          "where you were going",
          "how you were travelling",
          "who you were with",
          "what went wrong",
          "and explain what you would do differently.",
        ],
      },
      {
        title: "Describe some good news you recently received.",
        bulletPoints: [
          "what the news was",
          "how you received the news",
          "who gave it to you",
          "and explain why this was good news.",
        ],
      },
      {
        title: "Describe an unexpected event.",
        bulletPoints: [
          "what it was",
          "when it happened",
          "who was there",
          "why it was unexpected",
          "and explain why you enjoyed it.",
        ],
      },
    ],
  },
  {
    category: "Activity",
    id: "activity",
    icon: Activity,
    color: "bg-red-100 text-red-700",
    topics: [
      {
        title: "Describe an exercise you know.",
        bulletPoints: [
          "what it is",
          "how it is done",
          "when you first tried it",
          "what kind of people it is suitable for",
          "and explain why you think it is a good exercise.",
        ],
      },
      {
        title: "Describe an interesting hobby.",
        bulletPoints: [
          "what it is",
          "what kind of people do it",
          "how it is done",
          "and explain why you think it is interesting.",
        ],
      },
      {
        title: "Describe something you do to relax.",
        bulletPoints: [
          "what it is",
          "where you do it",
          "when you first did it",
          "and why you find it relaxing.",
        ],
      },
      {
        title: "Describe a sport you would like to learn.",
        bulletPoints: [
          "what it is",
          "what equipment is needed for it",
          "how you would learn it",
          "and explain why you would like to learn this sport.",
        ],
      },
    ],
  },
];

export default function AllPart2QuestionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link
              href="/speaking/part-2/topics"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Topics
            </Link>
          </Button>
        </div>
      </div>
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <List className="w-12 h-12 text-purple-200" />
              <div>
                <h1 className="text-4xl font-bold">Complete Cue Card List</h1>
                <p className="text-purple-100">
                  IELTS Speaking Part 2 - All 24 Topics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="p-6 bg-purple-50 border-purple-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Complete Cue Card Bank - All 24 Topics
            </h2>
            <p className="text-gray-700 mb-4">
              This page contains all IELTS Speaking Part 2 cue cards organized
              by the five main categories. Each cue card includes the exact
              bullet points you'll see in the real test. Practice these topics
              to prepare for any possible question.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div className="bg-white p-3 rounded text-center">
                <div className="text-blue-600 font-semibold">Person</div>
                <div className="text-sm text-gray-600">4 topics</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="text-green-600 font-semibold">Place</div>
                <div className="text-sm text-gray-600">2 topics</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="text-orange-600 font-semibold">Object</div>
                <div className="text-sm text-gray-600">8 topics</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="text-purple-600 font-semibold">
                  Event/Occasion
                </div>
                <div className="text-sm text-gray-600">6 topics</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="text-red-600 font-semibold">Activity</div>
                <div className="text-sm text-gray-600">4 topics</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-purple-500">
              <p className="text-sm text-gray-600">
                <strong>Study Tip:</strong> Practice 1-2 cue cards per day from
                different categories. Always time yourself - 1 minute
                preparation, then speak for 1-2 minutes. Record yourself to
                evaluate your performance.
              </p>
            </div>
          </Card>
        </section>

        {/* Cue Cards by Category */}
        <section className="mb-12">
          <div className="space-y-8">
            {allCueCards.map((categoryData, categoryIndex) => {
              const IconComponent = categoryData.icon;
              return (
                <Card key={categoryIndex} className="p-6" id={categoryData.id}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${categoryData.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {categoryData.category}
                      </h2>
                      <Badge variant="secondary" size="sm">
                        {categoryData.topics.length} cue cards
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {categoryData.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="bg-gray-50 p-6 rounded border-l-4 border-purple-400"
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-medium flex-shrink-0 mt-0.5">
                            Cue Card {topicIndex + 1}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {topic.title}
                          </h3>
                        </div>

                        <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                          <p className="text-gray-700 mb-3 font-medium">
                            You should say:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                            {topic.bulletPoints.map((point, pointIndex) => (
                              <li key={pointIndex}>{point}</li>
                            ))}
                          </ul>
                          <div className="border-t pt-3">
                            <p className="text-xs text-gray-500">
                              <strong>
                                You will have 1 minute to prepare your talk and
                                then you will need to speak for 1-2 minutes.
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Practice Tip */}
                  <div className="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800">
                      <strong>Category Tip for {categoryData.category}:</strong>{" "}
                      {categoryData.category === "Person" &&
                        "Focus on describing personality traits, relationships, and specific examples of behavior. Use past tense for experiences and present tense for general characteristics."}
                      {categoryData.category === "Place" &&
                        "Include sensory details (what you can see, hear, feel) and explain the atmosphere. Compare it to other places and mention your emotional connection."}
                      {categoryData.category === "Object" &&
                        "Provide specific details about appearance, function, and significance. Explain when and where you encountered it and why it's meaningful to you."}
                      {categoryData.category === "Event/Occasion" &&
                        "Use past tenses and chronological order. Include details about setting, people involved, and your feelings before, during, and after the event."}
                      {categoryData.category === "Activity" &&
                        "Explain the steps involved, equipment needed, and benefits. Compare it to other activities and mention your personal experience with it."}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-12">
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Use This Cue Card Bank
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Preparation Strategy:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>
                    Practice 1-2 cue cards daily from different categories
                  </li>
                  <li>Time yourself: 1 minute prep + 1-2 minutes speaking</li>
                  <li>
                    Make notes during preparation, then speak without reading
                  </li>
                  <li>Record yourself to identify areas for improvement</li>
                  <li>Focus on fluency over perfect grammar</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Speaking Structure:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Address all bullet points in your response</li>
                  <li>Expand each point with specific details and examples</li>
                  <li>Use connecting words to link your ideas smoothly</li>
                  <li>Include personal opinions and feelings</li>
                  <li>Aim for 150-200 words total</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        {/* <section>
          <Card className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Practice Speaking?
            </h2>
            <p className="text-gray-700 mb-6">
              Try our detailed practice pages for specific cue cards or continue
              with other parts of the IELTS Speaking test.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/speaking/part-2/person-inspired">
                  Sample: Person Who Inspired You
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-2/peaceful-place">
                  Sample: Peaceful Place
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-2/book">Sample: Book You Read</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/mock-test">Take Mock Test</Link>
              </Button>
            </div>
          </Card>
        </section> */}
      </div>
    </div>
  );
}
