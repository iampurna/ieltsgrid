import { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  MessageCircle,
  Clock,
  Users,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
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
      "Personal questions about yourself, family, work, studies, and everyday life topics",
    topics: [
      "Hometown",
      "Work/Study",
      "Home",
      "Family",
      "Hobbies",
      "Daily Routine",
    ],
    features: [
      "30+ topic categories",
      "Sample answers provided",
      "Vocabulary lists",
      "Common mistakes guide",
    ],
    practiceLink: "/speaking/part-1",
    topicsLink: "/speaking/part-1/topics",
    difficulty: "Beginner Friendly",
    color: "from-blue-500 to-blue-700",
  },
  {
    part: 2,
    title: "Long Turn (Cue Card)",
    duration: "3-4 minutes",
    description:
      "Speak for 1-2 minutes about a specific topic after 1 minute preparation time",
    topics: [
      "Describe a Person",
      "Describe a Place",
      "Describe an Experience",
      "Describe an Object",
    ],
    features: [
      "100+ cue card topics",
      "Structure templates",
      "Timing practice",
      "Advanced vocabulary",
    ],
    practiceLink: "/speaking/part-2",
    topicsLink: "/speaking/part-2/topics",
    difficulty: "Intermediate",
    color: "from-green-500 to-green-700",
  },
  {
    part: 3,
    title: "Two-way Discussion",
    duration: "4-5 minutes",
    description:
      "Abstract discussion and analysis related to the Part 2 topic with the examiner",
    topics: [
      "Social Issues",
      "Education & Learning",
      "Technology Impact",
      "Environmental Concerns",
      "Cultural Changes",
    ],
    features: [
      "Abstract thinking skills",
      "Opinion & analysis",
      "Compare & contrast",
      "Future predictions",
    ],
    practiceLink: "/speaking/part-3",
    topicsLink: "/speaking/part-3/topics",
    difficulty: "Advanced",
    color: "from-purple-500 to-purple-700",
  },
];

const keyFeatures = [
  {
    icon: Target,
    title: "Targeted Practice",
    description:
      "Focus on specific areas that need improvement with structured practice sessions",
  },
  {
    icon: TrendingUp,
    title: "Progressive Learning",
    description:
      "Build from basic fluency to advanced discussion skills step by step",
  },
  {
    icon: Award,
    title: "Band Score Focus",
    description:
      "Practice materials designed to help achieve Band 6.5 to 9.0 scores",
  },
];

const studyTips = [
  "Practice speaking for 10-15 minutes daily",
  "Record yourself and listen for improvement areas",
  "Expand answers with reasons and examples",
  "Use a variety of vocabulary and grammatical structures",
  "Work on pronunciation and natural intonation",
  "Practice with a speaking partner when possible",
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
            <p className="text-xl text-red-100 mb-8 ">
              Build confidence and fluency with comprehensive speaking practice,
              expert strategies, and real test questions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#speaking-parts">Explore All Parts</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/speaking/tips">Get Speaking Tips</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Key Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Speaking Practice?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources designed by IELTS experts to help you
              achieve your target band score
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Speaking Parts */}
        <section id="speaking-parts" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IELTS Speaking Test Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Master all three parts of the IELTS Speaking test with targeted
              practice and expert guidance
            </p>
          </div>

          <div className="space-y-8">
            {speakingParts.map((part) => (
              <Card
                key={part.part}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${part.color}`}></div>
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-4 mb-6">
                        <Badge
                          variant="primary"
                          size="md"
                          className="text-md px-4 py-2"
                        >
                          Part {part.part}
                        </Badge>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {part.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                {part.duration}
                              </span>
                            </div>
                            <Badge variant="secondary" size="sm">
                              {part.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        {part.description}
                      </p>

                      {/* Topics */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          Common Topics:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {part.topics.map((topic) => (
                            <Badge
                              key={topic}
                              variant="secondary"
                              size="sm"
                              className="px-3 py-1"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">
                          What You'll Get:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {part.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:justify-center">
                      <Button asChild size="lg" className="w-full">
                        <Link href={part.practiceLink}>
                          Start Part {part.part}
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full"
                      >
                        <Link href={part.topicsLink}>Browse All Topics</Link>
                      </Button>
                    </div>
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
