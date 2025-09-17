import { Metadata } from "next";
import Link from "next/link";
import {
  PenTool,
  FileText,
  File,
  Edit,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";

export const metadata: Metadata = {
  title: "IELTS Writing Practice | Task 1 & Task 2 | Free Resources",
  description:
    "Master IELTS Writing with sample essays, task guidance, vocabulary building, and expert tips for both Academic and General Training.",
  keywords: [
    "IELTS Writing",
    "Writing Task 1",
    "Writing Task 2",
    "IELTS Essays",
    "Writing Practice",
  ],
};

const categories = [
  {
    title: "Task 1 Academic",
    description: "Charts, graphs, maps, and process descriptions",
    icon: FileText,
    href: "/writing/task1-academic/examples",
    color: "blue",
    samples: 6,
  },
  {
    title: "Task 1 General",
    description: "Letters: formal, informal, and semi-formal",
    icon: File,
    href: "/writing/task1-general",
    color: "green",
    samples: 12,
  },
  {
    title: "Task 2 Essays",
    description: "Opinion, discussion, and problem-solution essays",
    icon: Edit,
    href: "/writing/task2/examples",
    color: "purple",
    samples: 25,
  },
];

const essayTypes = [
  "Opinion Essays",
  "Discussion Essays",
  "Problem-Solution Essays",
  "Advantage-Disadvantage Essays",
  "Two-Part Questions",
  "Mixed Type Essays",
];

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <PenTool className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-5xl font-bold mb-4">Master IELTS Writing</h1>
            <p className="text-xl text-green-100 mb-8">
              Improve your writing skills with sample essays, expert guidance,
              and comprehensive practice materials
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#writing-tasks">Explore Tasks</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/tips">Writing Tips</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Writing Tasks */}
        <section id="writing-tasks" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Writing Tasks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
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
                  {category.samples} Samples
                </Badge>
                <Button asChild className="w-full">
                  <Link href={category.href}>View Samples</Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <AdInContent />

        {/* Essay Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Task 2 Essay Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {essayTypes.map((type, index) => (
              <Card key={type} hover className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{type}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Sample essays and writing strategies for {type.toLowerCase()}
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={`/writing/task2/${type
                      .toLowerCase()
                      .replace(/[^a-z0-9]/g, "-")}`}
                  >
                    View Examples
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Writing Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hover className="p-6">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Vocabulary Builder
              </h3>
              <p className="text-gray-600 mb-4">
                Essential vocabulary and phrases for academic writing
              </p>
              <Button asChild variant="outline">
                <Link href="/writing/vocabulary">Explore Vocabulary</Link>
              </Button>
            </Card>

            <Card hover className="p-6">
              <Lightbulb className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Writing Tips & Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                Expert advice for improving your writing score
              </p>
              <Button asChild variant="outline">
                <Link href="/writing/tips">Get Tips</Link>
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
