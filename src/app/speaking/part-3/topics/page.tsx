// src/app/speaking/part-3/topics/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Users,
  Globe,
  GraduationCap,
  Lightbulb,
  Building,
  Heart,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 3 Topics | Discussion Questions & Abstract Ideas",
  description:
    "Master IELTS Speaking Part 3 with comprehensive discussion topics covering society, education, technology, environment, culture and abstract concepts.",
  keywords: [
    "IELTS Speaking Part 3",
    "Discussion Questions",
    "Abstract Topics",
    "Two-way Discussion",
    "IELTS Advanced Speaking",
    "Speaking Part 3 Practice",
  ],
};

const discussionCategories = [
  {
    id: "society-culture",
    title: "Society & Culture",
    icon: Users,
    color: "bg-blue-100 text-blue-700",
    description:
      "Questions about social issues, cultural changes, and community life",
    topics: [
      {
        id: "social-media-influence",
        title: "Social Media & Its Influence",
        difficulty: "Very Common",
      },
      {
        id: "cultural-preservation",
        title: "Cultural Heritage & Traditions",
        difficulty: "Common",
      },
      {
        id: "generational-differences",
        title: "Generational Changes",
        difficulty: "Common",
      },
      {
        id: "urbanization",
        title: "City Life vs Rural Life",
        difficulty: "Frequent",
      },
      {
        id: "community-relationships",
        title: "Community & Relationships",
        difficulty: "Frequent",
      },
      {
        id: "work-life-balance",
        title: "Work-Life Balance",
        difficulty: "Common",
      },
    ],
  },
  {
    id: "education-learning",
    title: "Education & Learning",
    icon: GraduationCap,
    color: "bg-green-100 text-green-700",
    description:
      "Topics about education systems, learning methods, and knowledge",
    topics: [
      {
        id: "education-systems",
        title: "Education Systems & Methods",
        difficulty: "Very Common",
      },
      {
        id: "online-learning",
        title: "Online vs Traditional Learning",
        difficulty: "Common",
      },
      {
        id: "importance-of-education",
        title: "Value of Education",
        difficulty: "Common",
      },
      {
        id: "skills-development",
        title: "Skills & Personal Development",
        difficulty: "Frequent",
      },
      {
        id: "lifelong-learning",
        title: "Continuous Learning",
        difficulty: "Frequent",
      },
      {
        id: "creativity-education",
        title: "Creativity in Education",
        difficulty: "Frequent",
      },
    ],
  },
  {
    id: "technology-media",
    title: "Technology & Media",
    icon: Globe,
    color: "bg-purple-100 text-purple-700",
    description:
      "Questions about technological advancement and digital communication",
    topics: [
      {
        id: "technology-impact",
        title: "Impact of Technology",
        difficulty: "Very Common",
      },
      {
        id: "internet-communication",
        title: "Internet & Communication",
        difficulty: "Common",
      },
      {
        id: "digital-privacy",
        title: "Privacy in Digital Age",
        difficulty: "Common",
      },
      {
        id: "artificial-intelligence",
        title: "AI & Automation",
        difficulty: "Frequent",
      },
      {
        id: "traditional-vs-digital",
        title: "Traditional vs Digital Media",
        difficulty: "Frequent",
      },
      {
        id: "future-technology",
        title: "Future of Technology",
        difficulty: "Frequent",
      },
    ],
  },
  {
    id: "environment-sustainability",
    title: "Environment & Sustainability",
    icon: Lightbulb,
    color: "bg-green-100 text-green-700",
    description: "Environmental issues, climate change, and sustainable living",
    topics: [
      {
        id: "climate-change",
        title: "Climate Change & Global Warming",
        difficulty: "Very Common",
      },
      {
        id: "environmental-protection",
        title: "Environmental Conservation",
        difficulty: "Common",
      },
      {
        id: "sustainable-lifestyle",
        title: "Sustainable Living",
        difficulty: "Common",
      },
      {
        id: "pollution-solutions",
        title: "Pollution & Solutions",
        difficulty: "Common",
      },
      {
        id: "renewable-energy",
        title: "Energy & Resources",
        difficulty: "Frequent",
      },
      {
        id: "urban-planning",
        title: "Green Cities & Planning",
        difficulty: "Frequent",
      },
    ],
  },
  {
    id: "business-economy",
    title: "Business & Economy",
    icon: Building,
    color: "bg-orange-100 text-orange-700",
    description: "Economic trends, business practices, and globalization",
    topics: [
      {
        id: "globalization",
        title: "Globalization & International Trade",
        difficulty: "Common",
      },
      {
        id: "consumer-behavior",
        title: "Shopping & Consumer Culture",
        difficulty: "Common",
      },
      {
        id: "entrepreneurship",
        title: "Business & Entrepreneurship",
        difficulty: "Frequent",
      },
      {
        id: "economic-development",
        title: "Economic Growth & Development",
        difficulty: "Frequent",
      },
      {
        id: "advertising-influence",
        title: "Advertising & Marketing",
        difficulty: "Frequent",
      },
      {
        id: "workplace-changes",
        title: "Modern Workplace",
        difficulty: "Frequent",
      },
    ],
  },
  {
    id: "health-lifestyle",
    title: "Health & Lifestyle",
    icon: Heart,
    color: "bg-red-100 text-red-700",
    description: "Health issues, lifestyle choices, and well-being",
    topics: [
      { id: "healthy-living", title: "Health & Fitness", difficulty: "Common" },
      {
        id: "mental-health",
        title: "Mental Health & Stress",
        difficulty: "Common",
      },
      { id: "food-nutrition", title: "Diet & Nutrition", difficulty: "Common" },
      {
        id: "healthcare-systems",
        title: "Healthcare & Medicine",
        difficulty: "Frequent",
      },
      {
        id: "exercise-sports",
        title: "Sports & Physical Activity",
        difficulty: "Frequent",
      },
      {
        id: "lifestyle-diseases",
        title: "Modern Lifestyle Issues",
        difficulty: "Frequent",
      },
    ],
  },
];

const skillsRequired = [
  {
    title: "Critical Analysis",
    description:
      "Analyze issues from multiple perspectives and evaluate different viewpoints",
  },
  {
    title: "Abstract Thinking",
    description:
      "Discuss concepts, theories, and hypothetical situations beyond personal experience",
  },
  {
    title: "Compare & Contrast",
    description:
      "Compare different ideas, systems, or approaches and explain differences",
  },
  {
    title: "Future Speculation",
    description:
      "Make predictions and discuss potential future developments or changes",
  },
];

const languageFunctions = [
  {
    function: "Giving Opinions",
    examples: ["I believe that...", "In my view...", "I would argue that..."],
  },
  {
    function: "Speculating",
    examples: [
      "It's likely that...",
      "There's a possibility that...",
      "It might be the case that...",
    ],
  },
  {
    function: "Comparing",
    examples: ["Compared to...", "Unlike...", "On the other hand..."],
  },
  {
    function: "Agreeing/Disagreeing",
    examples: [
      "I completely agree that...",
      "I'm not entirely convinced that...",
      "While I see your point...",
    ],
  },
];

export default function Part3TopicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-indigo-200" />
            <h1 className="text-4xl font-bold mb-4">
              IELTS Speaking Part 3 Topics
            </h1>
            <p className="text-xl text-indigo-100 mb-6">
              Master abstract discussions and two-way conversations with the
              examiner
            </p>
            <div className="flex items-center justify-center gap-4 text-indigo-200">
              <MessageSquare className="w-5 h-5" />
              <span>Duration: 4-5 minutes of discussion</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <Card className="p-6 bg-indigo-50 border-indigo-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About Part 3 - Discussion
            </h2>
            <p className="text-gray-700 mb-4">
              Part 3 is a two-way discussion between you and the examiner about
              abstract topics related to your Part 2 topic. Questions are more
              analytical and require you to express and justify opinions,
              speculate, and discuss broader issues.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white p-3 rounded">
                <strong>Format:</strong> Two-way discussion
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Topics:</strong> Abstract & analytical
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Questions:</strong> Follow-up to Part 2
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Skills:</strong> Analysis & evaluation
              </div>
            </div>
          </Card>
        </section>

        {/* Skills Required */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Key Skills for Part 3
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsRequired.map((skill, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-700">{skill.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Topic Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Discussion Categories
          </h2>

          <div className="space-y-8">
            {discussionCategories.map((category) => {
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
                          <Link href={`/speaking/part-3/${topic.id}`}>
                            Practice Questions
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

        {/* Language Functions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Essential Language Functions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languageFunctions.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.function}
                </h3>
                <div className="space-y-2">
                  {item.examples.map((example, exIndex) => (
                    <Badge
                      key={exIndex}
                      variant="outline"
                      className="block w-fit"
                    >
                      {example}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Question Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common Question Types
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Comparison Questions
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• How has X changed over time?</li>
                <li>• What's the difference between X and Y?</li>
                <li>• Compare X in your country vs other countries</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Future Speculation
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• How do you think X will change?</li>
                <li>• What might happen in the future?</li>
                <li>• Do you predict any changes?</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Opinion & Evaluation
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• What do you think about X?</li>
                <li>• Is X important? Why?</li>
                <li>• What are the advantages/disadvantages?</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Cause & Effect
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Why do you think X happens?</li>
                <li>• What causes X?</li>
                <li>• What are the effects of X?</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Solutions & Suggestions
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• How can we solve X?</li>
                <li>• What should be done about X?</li>
                <li>• How can X be improved?</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Hypothetical Situations
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• What would happen if...?</li>
                <li>• Imagine if X were different...</li>
                <li>• Suppose that...</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Success Strategies */}
        <section>
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Part 3 Success Strategies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Develop Your Ideas:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Give reasons and examples</li>
                  <li>Consider different perspectives</li>
                  <li>Make connections to your experience</li>
                  <li>Elaborate on your points</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Use Advanced Language:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Complex sentence structures</li>
                  <li>Formal vocabulary</li>
                  <li>Linking words and phrases</li>
                  <li>Conditional sentences</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Stay Engaged:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Ask for clarification if needed</li>
                  <li>Show interest in the discussion</li>
                  <li>Build on the examiner's questions</li>
                  <li>Think aloud if you need time</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
