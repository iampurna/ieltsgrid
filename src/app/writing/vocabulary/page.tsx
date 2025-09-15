import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Edit,
  BarChart3,
  PieChart,
  TrendingUp,
  ArrowLeft,
  Star,
  Target,
  Users,
  Clock,
  Award,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";

export const metadata: Metadata = {
  title: "IELTS Writing Vocabulary | Task 1 & Task 2 | Band 8+ Words",
  description:
    "Master IELTS Writing vocabulary for both Task 1 and Task 2. Essential words, phrases, and expressions for Band 8+ scores in Academic and General Training.",
  keywords: [
    "IELTS Writing Vocabulary",
    "IELTS Band 8 Vocabulary",
    "Academic Writing Words",
    "Task 1 Vocabulary",
    "Task 2 Vocabulary",
    "IELTS Word List",
  ],
};

const vocabularyCategories = [
  {
    title: "Task 1 Vocabulary",
    description: "Charts, graphs, maps, and process descriptions",
    icon: BarChart3,
    href: "/writing/vocabulary/task-1",
    color: "blue",
    features: [
      "350+ essential terms",
      "Chart-specific vocabulary",
      "Trend description words",
      "Data analysis phrases",
      "Comparison expressions",
    ],
    wordCount: "350+",
    difficulty: "Band 6-9",
  },
  {
    title: "Task 2 Essay Vocabulary",
    description: "Opinion, discussion, and argumentative essays",
    icon: Edit,
    href: "/writing/vocabulary/task-2",
    color: "purple",
    features: [
      "500+ academic words",
      "Linking expressions",
      "Opinion phrases",
      "Argument structures",
      "Conclusion vocabulary",
    ],
    wordCount: "500+",
    difficulty: "Band 6-9",
  },
];

const quickAccess = [
  {
    title: "Introduction Phrases",
    description: "Perfect opening sentences",
    icon: FileText,
    count: "25+",
  },
  {
    title: "Trend Vocabulary",
    description: "Describing changes over time",
    icon: TrendingUp,
    count: "100+",
  },
  {
    title: "Linking Words",
    description: "Connect ideas smoothly",
    icon: Target,
    count: "75+",
  },
  {
    title: "Data Description",
    description: "Present numbers effectively",
    icon: PieChart,
    count: "50+",
  },
];

const studyTips = [
  {
    tip: "Learn in Context",
    description: "Study vocabulary within complete sentences and examples",
    icon: BookOpen,
  },
  {
    tip: "Practice Daily",
    description: "Use 5-10 new words in practice writing every day",
    icon: Clock,
  },
  {
    tip: "Focus on Accuracy",
    description:
      "Better to use simple words correctly than complex words incorrectly",
    icon: Award,
  },
  {
    tip: "Vary Your Language",
    description: "Don't repeat the same words - show your vocabulary range",
    icon: Star,
  },
];

const bandRequirements = [
  {
    band: "Band 6",
    requirement: "Uses an adequate range of vocabulary for the task",
    vocabulary: "Basic academic vocabulary with some precision",
  },
  {
    band: "Band 7",
    requirement: "Uses a sufficient range of vocabulary with some flexibility",
    vocabulary: "Good range with awareness of style and collocation",
  },
  {
    band: "Band 8",
    requirement: "Uses a wide range of vocabulary fluently and flexibly",
    vocabulary: "Sophisticated vocabulary with rare minor errors",
  },
  {
    band: "Band 9",
    requirement: "Uses a wide range of vocabulary with very natural language",
    vocabulary: "Precise, sophisticated, and completely natural usage",
  },
];

export default function VocabularyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link href="/writing" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Writing
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-5xl font-bold mb-4">
              IELTS Writing Vocabulary
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Master essential vocabulary for Band 8+ performance in both Task 1
              and Task 2
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                850+ Essential Terms
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Band 6-9 Vocabulary
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Contextual Examples
              </Badge>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-2 text-green-100">
                Curated by IELTS experts and former examiners
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Vocabulary Focus
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {vocabularyCategories.map((category) => (
              <Card
                key={category.title}
                hover
                className="p-8 text-center h-full border-2 hover:border-blue-200"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-${category.color}-100 rounded-full flex items-center justify-center`}
                >
                  <category.icon
                    className={`w-10 h-10 text-${category.color}-600`}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {category.description}
                </p>

                <div className="flex justify-center gap-4 mb-6">
                  <Badge variant="outline" className="text-sm">
                    {category.wordCount} Words
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {category.difficulty}
                  </Badge>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What You'll Learn:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {category.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full text-lg py-3">
                  <Link href={category.href}>Start Learning</Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Access */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Access Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccess.map((item, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <Badge variant="secondary">{item.count} Terms</Badge>
              </Card>
            ))}
          </div>
        </section>

        <AdInContent />

        {/* Band Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            IELTS Band Requirements for Vocabulary
          </h2>
          <div className="space-y-4">
            {bandRequirements.map((req, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="text-center md:text-left">
                    <Badge
                      variant={
                        req.band === "Band 9"
                          ? "success"
                          : req.band === "Band 8"
                          ? "warning"
                          : "outline"
                      }
                      className="text-lg px-4 py-2"
                    >
                      {req.band}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Official Requirement
                    </h4>
                    <p className="text-sm text-gray-600">{req.requirement}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      What This Means
                    </h4>
                    <p className="text-sm text-gray-600">{req.vocabulary}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Effective Vocabulary Learning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studyTips.map((tip, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <tip.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {tip.tip}
                    </h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Plan */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Recommended Study Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 1-2</h3>
                <p className="text-sm text-gray-600">
                  Master basic introduction and overview vocabulary for Task 1
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 3-4</h3>
                <p className="text-sm text-gray-600">
                  Learn trend description and comparison vocabulary
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 5+</h3>
                <p className="text-sm text-gray-600">
                  Advanced vocabulary and Task 2 academic expressions
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Action Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Boost Your Vocabulary?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start with Task 1 vocabulary if you're taking Academic IELTS, or
              jump to Task 2 if you want to focus on essay writing. Both paths
              lead to Band 8+ performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/writing/vocabulary/task-1">Start with Task 1</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/vocabulary/task-2">Start with Task 2</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/tips">Writing Tips</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
