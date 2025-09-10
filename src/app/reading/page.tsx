import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Star, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";
import { getAllTests } from "@/lib/mdx";
import { getDifficultyColor } from "@/lib/utils";

export const metadata: Metadata = {
  title: "IELTS Reading Practice Tests | Free Practice Materials",
  description:
    "Master IELTS Reading with 150+ free practice tests, Academic and General Training materials, expert tips and strategies.",
  keywords: [
    "IELTS Reading",
    "Reading Practice",
    "IELTS Academic Reading",
    "IELTS General Reading",
    "Reading Tests",
  ],
};

const categories = [
  {
    title: "Practice Tests",
    description: "Complete reading tests with all question types",
    icon: BookOpen,
    href: "/reading?category=practice",
    color: "blue",
    count: "20+",
  },
  {
    title: "Academic Reading",
    description: "University-level passages and complex texts",
    icon: TrendingUp,
    href: "/reading?category=academic",
    color: "green",
    count: "15+",
  },
  {
    title: "General Training",
    description: "Everyday texts and workplace materials",
    icon: Users,
    href: "/reading?category=general",
    color: "purple",
    count: "15+",
  },
];

const tips = [
  {
    title: "Skimming & Scanning Techniques",
    description: "Learn to quickly identify key information",
    href: "/reading/tips/skimming-scanning",
  },
  {
    title: "Time Management Tips",
    description: "Master the 60-minute time limit",
    href: "/reading/tips/time-management",
  },
  {
    title: "Question Types Guide",
    description: "Understand all 15 reading question types",
    href: "/reading/tips/question-types",
  },
  {
    title: "Score Improvement Strategies",
    description: "Proven methods to boost your band score",
    href: "/reading/tips/score-improvement",
  },
];

export default async function ReadingPage() {
  const practiceTests = await getAllTests("reading");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-5xl font-bold mb-4">Master IELTS Reading</h1>
            <p className="text-xl text-blue-100 mb-8">
              Build your comprehension skills with comprehensive practice tests
              and expert strategies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#practice-tests">Start Practicing</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/reading/tips">View Tips & Strategies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Practice Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={category.title}
                hover
                className="p-6 text-center h-full"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-${category.color}-100 rounded-full flex items-center justify-center`}
                >
                  <category.icon
                    className={`w-8 h-8 text-${category.color}-600`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Badge variant="secondary" className="mb-4">
                  {category.count} Tests
                </Badge>
                <Button asChild className="w-full">
                  <Link href={category.href}>Start Practice</Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <AdInContent />

        {/* Practice Tests */}
        <section id="practice-tests" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Practice Tests</h2>
            <Link
              href="/reading/all-tests"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Tests →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceTests.slice(0, 6).map((test, index) => (
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
                    <Clock className="w-4 h-4" />
                    <span>{test.sections} sections • 60 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>40 questions total</span>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link href={`/reading/${test.id}/section-1`}>Start Test</Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips & Strategies */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Tips & Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <Card key={tip.title} hover className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-4">{tip.description}</p>
                <Button asChild variant="outline">
                  <Link href={tip.href}>Read More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
