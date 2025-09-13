// src/app/speaking/part-1/home/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  HomeIcon,
  ArrowLeft,
  Clock,
  MessageCircle,
  Lightbulb,
  Home,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 1: Home Questions & Sample Answers",
  description:
    "Practice IELTS Speaking Part 1 home questions with sample answers, vocabulary, and tips for describing your living situation and accommodation.",
  keywords: [
    "IELTS Speaking Home Questions",
    "Home Interview Questions",
    "IELTS Accommodation Questions",
    "Speaking Part 1 Home",
    "Describe Your Home IELTS",
  ],
};

const homeQuestions = [
  {
    question: "Where is your home?",
    sampleAnswer:
      "My home is located in a residential area in the suburbs of Manchester. It's about 15 minutes away from the city center by car, in a quiet neighborhood with tree-lined streets.",
    vocabulary: [
      "residential area",
      "suburbs",
      "15 minutes away",
      "quiet neighborhood",
      "tree-lined streets",
    ],
  },
  {
    question: "Do you live in a house or a flat?",
    sampleAnswer:
      "I live in a two-story house with my family. It's a semi-detached property with a small front garden and a larger back garden where we sometimes have barbecues in the summer.",
    vocabulary: [
      "two-story house",
      "semi-detached property",
      "front garden",
      "back garden",
      "barbecues",
    ],
  },
  {
    question: "Who do you live with?",
    sampleAnswer:
      "I live with my parents and my younger sister. We've been living together in the same house for about eight years now, and we get along very well as a family.",
    vocabulary: [
      "younger sister",
      "eight years",
      "get along very well",
      "as a family",
    ],
  },
  {
    question: "Are there many rooms in your home?",
    sampleAnswer:
      "Yes, it's quite spacious. We have four bedrooms, two bathrooms, a large living room, a separate dining room, and a modern kitchen. There's also a small study where I sometimes do my homework.",
    vocabulary: [
      "quite spacious",
      "four bedrooms",
      "separate dining room",
      "modern kitchen",
      "small study",
    ],
  },
  {
    question: "What is your favourite room?",
    sampleAnswer:
      "My favorite room is definitely my bedroom because it's my personal space where I can relax and be myself. I've decorated it according to my taste, and it has large windows that let in plenty of natural light.",
    vocabulary: [
      "definitely",
      "personal space",
      "be myself",
      "decorated",
      "plenty of natural light",
    ],
  },
  {
    question: "How are the walls decorated?",
    sampleAnswer:
      "The walls in our house vary from room to room. In the living room, we have neutral colors like cream and beige, while my bedroom has light blue walls with some family photos and artwork that I've collected over the years.",
    vocabulary: [
      "vary from room to room",
      "neutral colors",
      "cream and beige",
      "light blue walls",
      "collected over the years",
    ],
  },
  {
    question: "What would you change about your home?",
    sampleAnswer:
      "If I could change anything, I'd probably add a larger balcony or terrace where we could sit outside and enjoy the fresh air. I might also update the kitchen appliances since some of them are getting quite old.",
    vocabulary: [
      "larger balcony",
      "terrace",
      "enjoy the fresh air",
      "update",
      "kitchen appliances",
    ],
  },
  {
    question: "Do you plan to live there in the future?",
    sampleAnswer:
      "For now, I'm happy living with my family, but I think eventually I'll want to move out and find my own place, perhaps an apartment closer to my university or future workplace for convenience.",
    vocabulary: [
      "for now",
      "happy living",
      "eventually",
      "move out",
      "my own place",
      "for convenience",
    ],
  },
  {
    question: "What facilities are there near your home?",
    sampleAnswer:
      "Our neighborhood is very convenient. There's a shopping center just five minutes away, a local library, a community center with a gym, and several restaurants. We also have good public transport connections.",
    vocabulary: [
      "very convenient",
      "shopping center",
      "community center",
      "several restaurants",
      "public transport connections",
    ],
  },
  {
    question: "What is your neighbourhood like?",
    sampleAnswer:
      "It's a very peaceful and family-friendly neighborhood. Most of the residents are families with children, so it's quite safe and quiet. There are lots of green spaces and parks nearby, which makes it pleasant for walking.",
    vocabulary: [
      "peaceful",
      "family-friendly",
      "residents",
      "quite safe",
      "green spaces",
      "pleasant for walking",
    ],
  },
  {
    question: "Do most people live in houses in your country?",
    sampleAnswer:
      "It depends on the location. In rural areas and suburbs, most people live in houses, but in city centers, apartments and flats are more common due to space limitations and higher property prices.",
    vocabulary: [
      "depends on",
      "rural areas",
      "city centers",
      "more common",
      "space limitations",
      "property prices",
    ],
  },
];

const tips = [
  {
    title: "Use Specific Details",
    content:
      "Include specific information about room numbers, colors, furniture, and layout to make your answers more vivid.",
  },
  {
    title: "Explain Your Preferences",
    content:
      "Always explain why you like or dislike certain aspects of your home to show your ability to give reasons.",
  },
  {
    title: "Compare Different Spaces",
    content:
      "Compare different rooms or areas of your home, or compare your home to other types of accommodation.",
  },
  {
    title: "Include Future Plans",
    content:
      "When appropriate, mention any plans for changes or future living arrangements to extend your response.",
  },
];

export default function HomeQuestionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link
              href="/speaking/part-1/topics"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Topics
            </Link>
          </Button>
        </div>
      </div>
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1></h1>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <HomeIcon className="w-12 h-12 text-orange-200" />
              <div>
                <h1 className="text-4xl font-bold">Home Questions</h1>
                <p className="text-orange-100">IELTS Speaking Part 1</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-orange-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>11 Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Common Topic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="p-6 bg-orange-50 border-orange-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About Home Questions
            </h2>
            <p className="text-gray-700 mb-4">
              Home questions are frequently asked in IELTS Speaking Part 1 as
              they help candidates discuss familiar, personal topics. The
              examiner wants to know about your living situation, accommodation
              type, and your feelings about where you live. These questions are
              great for building confidence early in the test.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-orange-500">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> "Home" refers to where you currently
                live, which might be different from your hometown. Be prepared
                to describe your current accommodation, whether it's a family
                home, student accommodation, or rental property.
              </p>
            </div>
          </Card>
        </section>

        {/* Questions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Practice Questions & Sample Answers
          </h2>

          <div className="space-y-6">
            {homeQuestions.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <Badge variant="primary" size="sm" className="mb-3">
                    Question {index + 1}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Sample Answer:
                  </h4>
                  <p className="text-gray-700 italic p-4 bg-gray-50 rounded border-l-4 border-orange-500">
                    "{item.sampleAnswer}"
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">
                    Key Vocabulary:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.vocabulary.map((word, wordIndex) => (
                      <Badge key={wordIndex} variant="secondary" size="sm">
                        {word}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Speaking Tips for Home Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-700">{tip.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <Card className="p-6 bg-orange-50 border-orange-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready for More Practice?
            </h2>
            <p className="text-gray-700 mb-6">
              Continue practicing with other common Part 1 topics to build
              confidence and fluency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/speaking/part-1/hometown">Hometown Questions</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-1/study">Study Questions</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-1/all-questions">
                  All Part 1 Topics
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
