import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ArrowLeft,
  Lightbulb,
  TrendingUp,
  Globe,
  GraduationCap,
  Heart,
  Building,
  Briefcase,
  Landmark,
  Microscope,
  Smartphone,
  Coffee,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Vocabulary | Advanced Topics for Band 7-9",
  description:
    "Master IELTS Speaking vocabulary with comprehensive topic-based collections. Advanced terms and examples for technology, environment, education, and more.",
  keywords: [
    "IELTS Speaking vocabulary",
    "advanced English vocabulary",
    "Band 7-9 vocabulary",
    "topic-based vocabulary",
    "IELTS preparation",
    "speaking test vocabulary",
  ],
};

const vocabularyTopics = [
  {
    id: "technology",
    title: "Technology",
    icon: Smartphone,
    description:
      "Digital innovation, cybersecurity, automation, and modern tech trends",
    termCount: 6,
    difficulty: "Advanced",
    color: "blue",
    keyTerms: ["Digital Divide", "Innovation", "Cybersecurity", "Automation"],
  },
  {
    id: "environment",
    title: "Environment",
    icon: Heart,
    description:
      "Climate change, sustainability, conservation, and environmental protection",
    termCount: 7,
    difficulty: "Advanced",
    color: "green",
    keyTerms: [
      "Sustainability",
      "Climate Change",
      "Renewable Energy",
      "Biodiversity",
    ],
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    description:
      "Academic systems, curriculum, literacy, and lifelong learning",
    termCount: 6,
    difficulty: "Advanced",
    color: "purple",
    keyTerms: [
      "Curriculum",
      "Literacy Rate",
      "Lifelong Learning",
      "Vocational Training",
    ],
  },
  {
    id: "health-lifestyle",
    title: "Health & Lifestyle",
    icon: Heart,
    description: "Healthcare, mental health, preventive medicine, and wellness",
    termCount: 6,
    difficulty: "Advanced",
    color: "red",
    keyTerms: [
      "Mental Health",
      "Preventive Medicine",
      "Healthcare Access",
      "Sedentary Lifestyle",
    ],
  },
  {
    id: "society-culture",
    title: "Society & Culture",
    icon: Building,
    description:
      "Social issues, cultural heritage, multiculturalism, and community",
    termCount: 7,
    difficulty: "Advanced",
    color: "orange",
    keyTerms: [
      "Social Inequality",
      "Cultural Heritage",
      "Urbanization",
      "Multiculturalism",
    ],
  },
  {
    id: "economy-work",
    title: "Economy & Work",
    icon: Briefcase,
    description:
      "Business, globalization, entrepreneurship, and work-life balance",
    termCount: 7,
    difficulty: "Advanced",
    color: "indigo",
    keyTerms: [
      "Globalization",
      "Entrepreneurship",
      "Remote Working",
      "Work-life Balance",
    ],
  },
  {
    id: "politics-governance",
    title: "Politics & Governance",
    icon: Landmark,
    description:
      "Democracy, public policy, human rights, and international relations",
    termCount: 6,
    difficulty: "Advanced",
    color: "gray",
    keyTerms: [
      "Democracy",
      "Public Policy",
      "Human Rights",
      "International Relations",
    ],
  },
  {
    id: "science-innovation",
    title: "Science & Innovation",
    icon: Microscope,
    description:
      "Research, genetic engineering, space exploration, and breakthroughs",
    termCount: 5,
    difficulty: "Advanced",
    color: "cyan",
    keyTerms: [
      "Genetic Engineering",
      "Space Exploration",
      "Medical Breakthroughs",
    ],
  },
  {
    id: "media-communication",
    title: "Media & Communication",
    icon: Globe,
    description:
      "Digital journalism, social media influence, and information freedom",
    termCount: 6,
    difficulty: "Advanced",
    color: "pink",
    keyTerms: [
      "Social Media Influence",
      "Digital Journalism",
      "Misinformation",
    ],
  },
  {
    id: "global-issues",
    title: "Global Issues",
    icon: Globe,
    description:
      "Poverty reduction, refugee crisis, sustainable development goals",
    termCount: 5,
    difficulty: "Advanced",
    color: "emerald",
    keyTerms: ["Poverty Reduction", "Refugee Crisis", "Climate Migration"],
  },
  {
    id: "travel-holidays",
    title: "Travel & Holidays",
    icon: Globe,
    description:
      "Tourism, cultural experiences, travel trends, and destinations",
    termCount: 8,
    difficulty: "Intermediate",
    color: "sky",
    keyTerms: [
      "Cultural Tourism",
      "Sustainable Travel",
      "Digital Nomad",
      "Ecotourism",
    ],
  },
  {
    id: "food-nutrition",
    title: "Food & Nutrition",
    icon: Coffee,
    description:
      "Dietary habits, food culture, nutrition science, and cooking methods",
    termCount: 7,
    difficulty: "Intermediate",
    color: "amber",
    keyTerms: [
      "Nutritional Value",
      "Food Security",
      "Organic Farming",
      "Culinary Tradition",
    ],
  },
];

const colorVariants = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  purple: "from-purple-500 to-purple-600",
  red: "from-red-500 to-red-600",
  orange: "from-orange-500 to-orange-600",
  indigo: "from-indigo-500 to-indigo-600",
  gray: "from-gray-500 to-gray-600",
  cyan: "from-cyan-500 to-cyan-600",
  pink: "from-pink-500 to-pink-600",
  emerald: "from-emerald-500 to-emerald-600",
  sky: "from-sky-500 to-sky-600",
  amber: "from-amber-500 to-amber-600",
};

export default function SpeakingVocabularyPage() {
  const totalTerms = vocabularyTopics.reduce(
    (sum, topic) => sum + topic.termCount,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-5xl font-bold mb-4">
              IELTS Speaking Vocabulary Master
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Advanced vocabulary collection for IELTS Band 7-9. Master
              topic-specific terms with real examples and proper usage.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-purple-100">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {vocabularyTopics.length} Topics
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {totalTerms}+ Terms
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Band 7-9 Level
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {totalTerms}+
              </h3>
              <p className="text-gray-600">Advanced Terms</p>
            </Card>
            <Card className="p-6 text-center">
              <Lightbulb className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {vocabularyTopics.length}
              </h3>
              <p className="text-gray-600">Topic Categories</p>
            </Card>
            <Card className="p-6 text-center">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Example Sentences</p>
            </Card>
          </div>
        </section>

        {/* Vocabulary Topics Grid */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Vocabulary Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocabularyTopics.map((topic) => {
              const IconComponent = topic.icon;
              const gradientClass =
                colorVariants[topic.color as keyof typeof colorVariants];

              return (
                <Card key={topic.id} hover className="p-6 group cursor-pointer">
                  <Link href={`/speaking/vocabulary/${topic.id}`}>
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${gradientClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {topic.title}
                      </h3>
                      <Badge
                        variant={
                          topic.difficulty === "Advanced"
                            ? "primary"
                            : "secondary"
                        }
                        size="sm"
                      >
                        {topic.difficulty}
                      </Badge>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {topic.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>Key Terms Preview:</span>
                        <span>{topic.termCount} terms</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {topic.keyTerms.slice(0, 3).map((term, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            size="sm"
                            className="text-xs"
                          >
                            {term}
                          </Badge>
                        ))}
                        {topic.keyTerms.length > 3 && (
                          <Badge
                            variant="secondary"
                            size="sm"
                            className="text-xs"
                          >
                            +{topic.keyTerms.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button className="w-full" size="sm">
                      Explore {topic.title}
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
            How to Use This Vocabulary Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Choose a Topic</h3>
              <p className="text-sm text-gray-600">
                Start with topics you find most challenging or interesting
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Study Examples</h3>
              <p className="text-sm text-gray-600">
                Read each term's definition and example sentence carefully
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Practice Usage</h3>
              <p className="text-sm text-gray-600">
                Create your own sentences using the new vocabulary
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Apply in Speaking</h3>
              <p className="text-sm text-gray-600">
                Use these terms in your IELTS speaking practice sessions
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Boost Your Speaking Score?
            </h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Start with any topic that interests you and build your vocabulary
              systematically. Each section includes carefully selected Band 7-9
              level terms with authentic examples.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/speaking/vocabulary/technology">
                  Start with Technology
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-green hover:bg-white/10"
                asChild
              >
                <Link href="/speaking/tips">Speaking Tips</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
