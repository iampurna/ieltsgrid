import { Metadata } from "next";
import Link from "next/link";
import {
  Headphones,
  Music,
  Users,
  GraduationCap,
  Building,
  Lightbulb,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";
import { getAllTests } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "IELTS Listening Practice Tests | Free Audio Materials",
  description:
    "Practice IELTS Listening with authentic audio materials, all question types, and detailed explanations. Improve your listening skills.",
  keywords: [
    "IELTS Listening",
    "Listening Practice",
    "Audio Tests",
    "Listening Skills",
  ],
};

const sectionTypes = [
  {
    title: "Section 1: Social Context",
    description: "Conversation between two people in everyday social context",
    icon: Users,
    examples: [
      "Booking accommodation",
      "Enrolling in courses",
      "Making appointments",
    ],
  },
  {
    title: "Section 2: Social Context",
    description: "Monologue in everyday social context",
    icon: Music,
    examples: ["Tour guide speech", "Radio announcement", "Information talk"],
  },
  {
    title: "Section 3: Training Context",
    description: "Conversation in educational/training context",
    icon: GraduationCap,
    examples: [
      "Student discussion",
      "Tutorial conversation",
      "Course planning",
    ],
  },
  {
    title: "Section 4: Academic Context",
    description: "Monologue on academic subject",
    icon: Building,
    examples: [
      "University lecture",
      "Academic presentation",
      "Research findings",
    ],
  },
];

export default async function ListeningPage() {
  const listeningTests = await getAllTests("listening");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Headphones className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-5xl font-bold mb-4">Master IELTS Listening</h1>
            <p className="text-xl text-purple-100 mb-8">
              Develop your listening skills with authentic audio materials and
              comprehensive practice tests
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" href="#practice-tests">
                Start Practice
              </Button>
              <Button size="lg" variant="outline" href="/listening/tips">
                Listening Tips
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Section Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Understanding IELTS Listening Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectionTypes.map((section, index) => (
              <Card key={section.title} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <Badge variant="secondary">Section {index + 1}</Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-900">Examples:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {section.examples.map((example) => (
                      <li key={example}>• {example}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <AdInContent />

        {/* Practice Tests */}
        <section id="practice-tests" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Listening Practice Tests
            </h2>
            <Link
              href="/listening/all-tests"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              View All Tests →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listeningTests.slice(0, 6).map((test, index) => (
              <Card key={test.id} hover className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {test.title}
                  </h3>
                  <Badge
                    variant={
                      test.difficulty === "beginner"
                        ? "success"
                        : test.difficulty === "advanced"
                        ? "error"
                        : "warning"
                    }
                  >
                    {test.difficulty}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4" />
                    <span>4 sections • 30 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4" />
                    <span>40 questions total</span>
                  </div>
                </div>

                <Button
                  className="w-full"
                  href={`/listening/${test.id}/section-1`}
                >
                  Start Test
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Listening Tips & Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hover className="p-6">
              <Lightbulb className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Active Listening Techniques
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to focus and process audio information effectively
              </p>
              <Button variant="outline" href="/listening/tips/active-listening">
                Learn More
              </Button>
            </Card>

            <Card hover className="p-6">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Note-Taking Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                Master effective note-taking during the listening test
              </p>
              <Button variant="outline" href="/listening/tips/note-taking">
                Learn More
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
