import { Metadata } from "next";
import Link from "next/link";
import {
  Edit,
  MessageSquare,
  Scale,
  Lightbulb,
  Settings,
  TrendingUp,
  Users,
  ArrowLeft,
  Clock,
  Target,
  Filter,
  Search,
  Download,
  Eye,
  Zap,
  Calendar,
  BookOpen,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";

export const metadata: Metadata = {
  title: "IELTS Task 2 Practice Questions | All Essay Types & Topics",
  description:
    "Comprehensive collection of IELTS Task 2 practice questions covering opinion, discussion, advantage/disadvantage, problem/solution, and cause/effect essays.",
  keywords: [
    "IELTS Task 2 Questions",
    "Essay Writing Practice",
    "Task 2 Practice Tests",
    "IELTS Essay Questions",
    "Task 2 Mock Tests",
    "Opinion Essay Questions",
  ],
};

const questionCategories = [
  {
    type: "Opinion Essays",
    icon: MessageSquare,
    color: "blue",
    count: 35,
    difficulty: "Beginner to Intermediate",
    description:
      "Express and justify your personal viewpoint on various topics",
    commonQuestions: [
      "To what extent do you agree?",
      "Do you agree or disagree?",
      "What is your opinion?",
    ],
    topics: [
      "Technology",
      "Education",
      "Environment",
      "Work & Career",
      "Society",
      "Health",
    ],
  },
  {
    type: "Discussion Essays",
    icon: Scale,
    color: "green",
    count: 28,
    difficulty: "Intermediate to Advanced",
    description: "Discuss both sides of an argument and give balanced analysis",
    commonQuestions: [
      "Discuss both views and give opinion",
      "What are the advantages of each approach?",
    ],
    topics: [
      "Education methods",
      "Lifestyle choices",
      "Economic policies",
      "Cultural changes",
    ],
  },
  {
    type: "Advantage/Disadvantage",
    icon: TrendingUp,
    color: "purple",
    count: 24,
    difficulty: "Intermediate",
    description: "Analyze benefits and drawbacks of situations or developments",
    commonQuestions: [
      "What are the advantages and disadvantages?",
      "Do advantages outweigh disadvantages?",
    ],
    topics: [
      "Globalization",
      "Technology",
      "Tourism",
      "Urbanization",
      "Social media",
    ],
  },
  {
    type: "Problem/Solution",
    icon: Lightbulb,
    color: "orange",
    count: 20,
    difficulty: "Advanced",
    description: "Identify problems and propose practical solutions",
    commonQuestions: [
      "What are the problems and solutions?",
      "How can this issue be addressed?",
    ],
    topics: [
      "Environmental issues",
      "Urban problems",
      "Social challenges",
      "Economic difficulties",
    ],
  },
  {
    type: "Cause/Effect",
    icon: Settings,
    color: "red",
    count: 18,
    difficulty: "Advanced",
    description: "Explain reasons behind phenomena and their consequences",
    commonQuestions: [
      "What are the causes and effects?",
      "Why does this happen and what are results?",
    ],
    topics: [
      "Social changes",
      "Economic trends",
      "Environmental phenomena",
      "Cultural shifts",
    ],
  },
  {
    type: "Mixed Questions",
    icon: Users,
    color: "indigo",
    count: 15,
    difficulty: "Advanced",
    description: "Complex questions combining multiple essay types",
    commonQuestions: [
      "Causes, effects, and solutions",
      "Problems, reasons, and recommendations",
    ],
    topics: [
      "Complex social issues",
      "Multi-faceted problems",
      "Contemporary challenges",
    ],
  },
];

const practiceQuestions = [
  {
    id: "E001",
    title: "Remote Work Future",
    type: "Opinion Essay",
    icon: MessageSquare,
    difficulty: "Intermediate",
    color: "blue",
    time: "40 minutes",
    question:
      "Some people believe that in the future, most people will work from home rather than in offices. To what extent do you agree or disagree with this statement?",
    keywords: [
      "future of work",
      "remote work",
      "office culture",
      "technology impact",
    ],
    bandTarget: "7-8",
    category: "Work & Career",
    hints: [
      "Consider both benefits and challenges",
      "Use specific examples",
      "Think about different industries",
      "Address counterarguments",
    ],
  },
  {
    id: "E002",
    title: "Traditional vs Modern Education",
    type: "Discussion Essay",
    icon: Scale,
    difficulty: "Advanced",
    color: "green",
    time: "40 minutes",
    question:
      "Some people think that traditional classroom teaching is more effective for learning, while others believe that online education provides better opportunities. Discuss both views and give your own opinion.",
    keywords: [
      "education methods",
      "online learning",
      "classroom teaching",
      "effectiveness",
    ],
    bandTarget: "8-9",
    category: "Education",
    hints: [
      "Present both sides equally",
      "Use educational examples",
      "Consider different age groups",
      "Give clear personal opinion",
    ],
  },
  {
    id: "E003",
    title: "Social Media Impact",
    type: "Advantage/Disadvantage",
    icon: TrendingUp,
    difficulty: "Intermediate",
    color: "purple",
    time: "40 minutes",
    question:
      "Social media platforms have become increasingly popular among all age groups. What are the advantages and disadvantages of this development?",
    keywords: ["social media", "technology", "communication", "society impact"],
    bandTarget: "7-8",
    category: "Technology",
    hints: [
      "Balance advantages and disadvantages",
      "Use real-world examples",
      "Consider different age groups",
      "Be objective",
    ],
  },
  {
    id: "E004",
    title: "Urban Traffic Solutions",
    type: "Problem/Solution",
    icon: Lightbulb,
    difficulty: "Advanced",
    color: "orange",
    time: "40 minutes",
    question:
      "Traffic congestion is a serious problem in many cities around the world. What are the main causes of this issue and what measures can be taken to solve it?",
    keywords: [
      "traffic problems",
      "urban issues",
      "transportation",
      "city planning",
    ],
    bandTarget: "8-9",
    category: "Urban Planning",
    hints: [
      "Identify multiple causes",
      "Propose realistic solutions",
      "Consider different stakeholders",
      "Use specific examples",
    ],
  },
  {
    id: "E005",
    title: "Aging Population Trends",
    type: "Cause/Effect",
    icon: Settings,
    difficulty: "Advanced",
    color: "red",
    time: "40 minutes",
    question:
      "Many developed countries are experiencing rapidly aging populations. What are the main causes of this trend and what effects might it have on these societies?",
    keywords: [
      "demographics",
      "aging society",
      "social trends",
      "economic impact",
    ],
    bandTarget: "8-9",
    category: "Society",
    hints: [
      "Explain multiple causes",
      "Discuss wide-ranging effects",
      "Use statistical examples",
      "Consider long-term implications",
    ],
  },
  {
    id: "E006",
    title: "Environmental Protection vs Economic Growth",
    type: "Discussion Essay",
    icon: Scale,
    difficulty: "Advanced",
    color: "green",
    time: "40 minutes",
    question:
      "Some people argue that environmental protection should be prioritized over economic development, while others believe economic growth is more important. Discuss both views and give your opinion.",
    keywords: ["environment", "economy", "development", "sustainability"],
    bandTarget: "8-9",
    category: "Environment",
    hints: [
      "Present both arguments fairly",
      "Use environmental examples",
      "Consider developing vs developed countries",
      "Propose balanced solutions",
    ],
  },
  {
    id: "E007",
    title: "Technology in Education",
    type: "Opinion Essay",
    icon: MessageSquare,
    difficulty: "Intermediate",
    color: "blue",
    time: "40 minutes",
    question:
      "Some educators believe that technology should replace traditional textbooks in schools. To what extent do you agree or disagree?",
    keywords: [
      "educational technology",
      "textbooks",
      "digital learning",
      "school resources",
    ],
    bandTarget: "7-8",
    category: "Education",
    hints: [
      "Take clear position",
      "Compare both methods",
      "Consider practical issues",
      "Use educational examples",
    ],
  },
  {
    id: "E008",
    title: "Fast Food Culture",
    type: "Advantage/Disadvantage",
    icon: TrendingUp,
    difficulty: "Intermediate",
    color: "purple",
    time: "40 minutes",
    question:
      "The popularity of fast food has increased dramatically in recent decades. What are the advantages and disadvantages of this trend?",
    keywords: ["fast food", "lifestyle", "health", "convenience"],
    bandTarget: "7-8",
    category: "Health & Lifestyle",
    hints: [
      "Balance positive and negative aspects",
      "Consider health implications",
      "Use specific examples",
      "Address social impacts",
    ],
  },
  {
    id: "E009",
    title: "Youth Unemployment Crisis",
    type: "Problem/Solution",
    icon: Lightbulb,
    difficulty: "Advanced",
    color: "orange",
    time: "40 minutes",
    question:
      "Youth unemployment has become a serious problem in many countries. What are the main reasons for this issue and what solutions would you suggest?",
    keywords: [
      "unemployment",
      "youth employment",
      "job market",
      "economic issues",
    ],
    bandTarget: "8-9",
    category: "Economy",
    hints: [
      "Analyze root causes",
      "Propose multi-level solutions",
      "Consider education-employment gap",
      "Use country examples",
    ],
  },
  {
    id: "E010",
    title: "Cultural Globalization Effects",
    type: "Cause/Effect",
    icon: Settings,
    difficulty: "Advanced",
    color: "red",
    time: "40 minutes",
    question:
      "Globalization has led to the spread of Western culture around the world. What are the main causes of this phenomenon and what effects has it had on local cultures?",
    keywords: [
      "globalization",
      "cultural change",
      "Western influence",
      "local traditions",
    ],
    bandTarget: "8-9",
    category: "Culture",
    hints: [
      "Explain globalization drivers",
      "Discuss cultural impacts",
      "Use specific cultural examples",
      "Consider both positive and negative effects",
    ],
  },
  {
    id: "E011",
    title: "Space Exploration Investment",
    type: "Opinion Essay",
    icon: MessageSquare,
    difficulty: "Intermediate",
    color: "blue",
    time: "40 minutes",
    question:
      "Some people think that governments should spend money on space exploration, while others believe this money should be used to solve problems on Earth. What is your opinion?",
    keywords: [
      "space exploration",
      "government spending",
      "priorities",
      "scientific research",
    ],
    bandTarget: "7-8",
    category: "Science & Technology",
    hints: [
      "State clear position",
      "Consider opportunity costs",
      "Use specific examples",
      "Address counterarguments",
    ],
  },
  {
    id: "E012",
    title: "Work-Life Balance Solutions",
    type: "Mixed Question",
    icon: Users,
    difficulty: "Advanced",
    color: "indigo",
    time: "40 minutes",
    question:
      "Many working people struggle to maintain a healthy work-life balance. What are the main causes of this problem, what effects does it have, and what solutions would you suggest?",
    keywords: ["work-life balance", "stress", "modern work", "lifestyle"],
    bandTarget: "8-9",
    category: "Work & Lifestyle",
    hints: [
      "Address all three parts",
      "Analyze modern work culture",
      "Discuss health and social effects",
      "Propose comprehensive solutions",
    ],
  },
];

const difficultyFilters = [
  { level: "All Levels", count: "140 questions", active: true },
  { level: "Beginner-Friendly", count: "38 questions", active: false },
  { level: "Intermediate", count: "52 questions", active: false },
  { level: "Advanced", count: "50 questions", active: false },
];

const studyModes = [
  {
    title: "Timed Practice",
    description: "Practice under exam conditions with 40-minute timer",
    icon: Clock,
    color: "red",
    features: [
      "40-minute countdown",
      "Exam pressure simulation",
      "Word count tracking",
      "Realistic conditions",
    ],
  },
  {
    title: "Untimed Study",
    description: "Take time to plan, develop, and perfect your essays",
    icon: Target,
    color: "blue",
    features: [
      "No time pressure",
      "Detailed planning",
      "Idea development",
      "Language focus",
    ],
  },
  {
    title: "Topic-Focused",
    description: "Practice specific topics or question types intensively",
    icon: BookOpen,
    color: "green",
    features: [
      "Category selection",
      "Targeted practice",
      "Skill development",
      "Progressive difficulty",
    ],
  },
  {
    title: "Random Challenge",
    description:
      "Mixed practice from all categories for comprehensive preparation",
    icon: Zap,
    color: "purple",
    features: [
      "Surprise questions",
      "Full coverage",
      "Adaptability training",
      "Exam simulation",
    ],
  },
];

export default function Task2AllQuestionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link href="/writing/task2" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Task 2
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Edit className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-5xl font-bold mb-4">
              Task 2 Practice Questions
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Comprehensive collection of Task 2 essay questions covering all
              types and topics with varying difficulty levels
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                140 Practice Questions
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                6 Essay Types
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                All Topics Covered
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Question Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions by Essay Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {questionCategories.map((category, index) => (
              <Card key={index} hover className="p-6">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-${category.color}-100 rounded-full flex items-center justify-center`}
                >
                  <category.icon
                    className={`w-8 h-8 text-${category.color}-600`}
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {category.type}
                </h3>

                <div className="text-center mb-4">
                  <Badge variant="success" className="text-lg px-3 py-1">
                    {category.count} Questions
                  </Badge>
                </div>

                <p className="text-gray-600 mb-4 text-center text-sm">
                  {category.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">
                    Common Question Types:
                  </h4>
                  <div className="space-y-1">
                    {category.commonQuestions.slice(0, 2).map((question, i) => (
                      <p
                        key={i}
                        className="text-xs text-gray-600 italic bg-gray-50 p-2 rounded"
                      >
                        "{question}"
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">
                    Popular Topics:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {category.topics.slice(0, 3).map((topic, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Badge variant="outline" className="text-sm">
                    {category.difficulty}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Modes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Study Mode
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyModes.map((mode, index) => (
              <Card key={index} className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-${mode.color}-100 rounded-full flex items-center justify-center`}
                >
                  <mode.icon className={`w-8 h-8 text-${mode.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {mode.title}
                </h3>
                <div className="mb-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    {mode.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full" size="sm">
                  Start {mode.title}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Filter Questions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {difficultyFilters.map((filter, index) => (
                    <Badge
                      key={index}
                      variant={filter.active ? "success" : "outline"}
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      {filter.level} ({filter.count})
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search topics..."
                    className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Questions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Practice Questions
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {practiceQuestions.map((question, index) => (
              <Card key={question.id} hover className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-${question.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <question.icon
                      className={`w-6 h-6 text-${question.color}-600`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {question.id}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {question.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {question.category}
                      </Badge>
                      <Badge
                        variant={
                          question.difficulty === "Advanced"
                            ? "warning"
                            : question.difficulty === "Intermediate"
                            ? "success"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {question.difficulty}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {question.title}
                    </h3>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
                  <h4 className="font-medium text-purple-800 mb-2">
                    Question:
                  </h4>
                  <p className="text-sm text-purple-700 italic">
                    {question.question}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm">
                      Key Information:
                    </h4>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{question.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">
                          Band {question.bandTarget}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {question.keywords.map((keyword, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm">
                      Writing Hints:
                    </h4>
                    <ul className="space-y-1">
                      {question.hints.map((hint, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          {hint}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Start Writing
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Sample
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              Load More Questions (128 remaining)
            </Button>
          </div>
        </section>

        <AdInContent />

        {/* Study Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Effective Practice Strategies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                For Beginners (Band 5-6)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  Start with opinion essays on familiar topics
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  Practice basic paragraph structure first
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  Focus on clear thesis statements and conclusions
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  Build vocabulary bank for common topics
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                For Advanced (Band 7+)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  Practice complex question types under time pressure
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  Focus on sophisticated vocabulary and structures
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  Develop nuanced arguments with multiple perspectives
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  Perfect coherence and cohesion techniques
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Progress Tracking */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-indigo-50">
            <div className="text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Track Your Essay Writing Progress
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Monitor your improvement across different essay types, track
                your writing speed, and identify areas that need more practice
                with our comprehensive progress system.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">Create Writing Account</Button>
                <Button size="lg" variant="outline">
                  <Calendar className="w-5 h-5 mr-2" />
                  Writing Schedule
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Action Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50">
            <Edit className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Writing?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Choose questions that match your current level and gradually
              progress to more challenging essay types. Remember to practice all
              question types for comprehensive preparation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                <Zap className="w-5 h-5 mr-2" />
                Random Question
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/task2/examples">
                  <Eye className="w-5 h-5 mr-2" />
                  Study Examples First
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/vocabulary/task-2">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Task 2 Vocabulary
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
