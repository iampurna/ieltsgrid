import { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  MessageCircle,
  Clock,
  Users,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Practice | All Parts | Free Resources",
  description:
    "Practice IELTS Speaking with topic banks, sample responses, and expert strategies for all three parts of the speaking test.",
  keywords: [
    "IELTS Speaking",
    "Speaking Practice",
    "Speaking Topics",
    "Speaking Test",
  ],
};

const speakingParts = [
  {
    part: 1,
    title: "Introduction & Interview",
    duration: "4-5 minutes",
    description:
      "Personal questions about yourself, family, work, studies, and interests",
    topics: [
      "Hometown",
      "Work/Study",
      "Hobbies",
      "Daily Routine",
      "Food",
      "Weather",
    ],
  },
  {
    part: 2,
    title: "Long Turn",
    duration: "3-4 minutes",
    description:
      "Speak for 1-2 minutes about a topic after 1 minute preparation",
    topics: [
      "Describe a person",
      "Describe a place",
      "Describe an event",
      "Describe an object",
    ],
  },
  {
    part: 3,
    title: "Discussion",
    duration: "4-5 minutes",
    description: "Abstract discussion related to Part 2 topic",
    topics: [
      "Society issues",
      "Education",
      "Technology",
      "Environment",
      "Culture",
    ],
  },
];

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mic className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-5xl font-bold mb-4">Master IELTS Speaking</h1>
            <p className="text-xl text-red-100 mb-8">
              Build confidence and fluency with comprehensive speaking practice
              and expert guidance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#speaking-parts">Explore Parts</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/speaking/tips">Speaking Tips</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Speaking Parts */}
        <section id="speaking-parts" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            IELTS Speaking Test Structure
          </h2>
          <div className="space-y-8">
            {speakingParts.map((part) => (
              <Card key={part.part} className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="primary" size="md">
                        Part {part.part}
                      </Badge>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {part.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{part.duration}</span>
                    </div>

                    <p className="text-gray-700 mb-4">{part.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {part.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" size="sm">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <Link href={`/speaking/part-${part.part}`}>
                        Practice Part {part.part}
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/speaking/part-${part.part}/topics`}>
                        View Topics
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Speaking Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hover className="p-6">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Vocabulary Bank
              </h3>
              <p className="text-gray-600 mb-4">
                Essential vocabulary and phrases for fluent speaking
              </p>
              <Button asChild variant="outline">
                <Link href="/speaking/vocabulary">Explore Vocabulary</Link>
              </Button>
            </Card>

            <Card hover className="p-6">
              <Lightbulb className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Speaking Tips & Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                Expert advice for improving fluency and confidence
              </p>
              <Button asChild variant="outline">
                <Link href="/speaking/tips">Get Tips</Link>
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
