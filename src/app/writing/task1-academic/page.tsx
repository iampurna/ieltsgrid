import { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  LineChart,
  PieChart,
  Map,
  Settings,
  Clock,
  Target,
  BookOpen,
  FileText,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  ArrowLeft,
  ArrowRight,
  Zap,
  Eye,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";

export const metadata: Metadata = {
  title: "IELTS Task 1 Academic Writing | Charts, Graphs, Maps & Processes",
  description:
    "Master IELTS Academic Task 1 writing with comprehensive guides, examples, and practice questions for charts, graphs, maps, and process diagrams.",
  keywords: [
    "IELTS Task 1 Academic",
    "Academic Writing Task 1",
    "Charts and Graphs IELTS",
    "IELTS Maps",
    "Process Diagrams IELTS",
    "Band 8 Task 1",
  ],
};

const taskTypes = [
  {
    type: "Bar Charts",
    icon: BarChart3,
    description: "Compare data across categories or time periods",
    difficulty: "Beginner-Friendly",
    color: "blue",
    frequency: "Very Common",
    keySkills: ["Data comparison", "Trend identification", "Clear overview"],
    sampleData: "Population by city, Sales by quarter, Employment by sector",
  },
  {
    type: "Line Graphs",
    icon: LineChart,
    description: "Show trends and changes over time",
    difficulty: "Intermediate",
    color: "green",
    frequency: "Very Common",
    keySkills: [
      "Trend description",
      "Time expressions",
      "Peak/trough vocabulary",
    ],
    sampleData: "Temperature changes, Stock prices, Population growth",
  },
  {
    type: "Pie Charts",
    icon: PieChart,
    description: "Display proportions and percentages",
    difficulty: "Beginner-Friendly",
    color: "purple",
    frequency: "Common",
    keySkills: ["Proportion vocabulary", "Percentage expressions", "Ranking"],
    sampleData: "Budget allocation, Market share, Survey results",
  },
  {
    type: "Maps",
    icon: Map,
    description: "Show geographical changes or locations",
    difficulty: "Advanced",
    color: "orange",
    frequency: "Less Common",
    keySkills: [
      "Location vocabulary",
      "Change description",
      "Spatial relationships",
    ],
    sampleData: "Town development, Building layouts, Road networks",
  },
  {
    type: "Process Diagrams",
    icon: Settings,
    description: "Explain how something works or is made",
    difficulty: "Advanced",
    color: "red",
    frequency: "Less Common",
    keySkills: ["Sequence vocabulary", "Passive voice", "Process description"],
    sampleData: "Manufacturing process, Life cycles, System operations",
  },
  {
    type: "Mixed Charts",
    icon: TrendingUp,
    description: "Combine different chart types",
    difficulty: "Advanced",
    color: "indigo",
    frequency: "Occasional",
    keySkills: ["Data synthesis", "Multiple comparisons", "Complex overview"],
    sampleData: "Tables + graphs, Multiple pie charts, Bar + line combinations",
  },
];

const writingStructure = [
  {
    step: "1",
    title: "Introduction",
    time: "2-3 minutes",
    wordCount: "25-30 words",
    description: "Paraphrase the task and identify chart type",
    keyPoints: [
      "Use synonyms to rephrase the question",
      "State what the chart shows",
      "Mention time period and units",
      "Avoid copying the exact wording",
    ],
    example:
      "The given bar chart illustrates population distribution across five major cities between 1990 and 2020.",
  },
  {
    step: "2",
    title: "Overview",
    time: "3-4 minutes",
    wordCount: "40-50 words",
    description: "Highlight the main trends and patterns",
    keyPoints: [
      "Identify the most significant trends",
      "Compare highest and lowest values",
      "Mention overall patterns",
      "NO specific numbers or details",
    ],
    example:
      "Overall, City A experienced the most dramatic growth, while City B remained relatively stable throughout the period.",
  },
  {
    step: "3",
    title: "Body Paragraph 1",
    time: "5-6 minutes",
    wordCount: "70-80 words",
    description: "Detail the main features with specific data",
    keyPoints: [
      "Focus on major trends/categories",
      "Include specific figures and dates",
      "Use trend vocabulary",
      "Make comparisons between data",
    ],
    example:
      "City A's population surged dramatically from 2 million in 1990 to 5.2 million by 2020, representing the highest growth rate among all cities.",
  },
  {
    step: "4",
    title: "Body Paragraph 2",
    time: "4-5 minutes",
    wordCount: "70-80 words",
    description: "Cover remaining significant details",
    keyPoints: [
      "Address other important features",
      "Provide supporting data",
      "Maintain logical flow",
      "End with minor details if space allows",
    ],
    example:
      "In contrast, Cities C and D showed moderate increases, rising by approximately 30% and 25% respectively during the same timeframe.",
  },
];

const bandRequirements = [
  {
    band: "Band 9",
    taskAchievement:
      "Fully addresses all requirements with clear, appropriate overview",
    coherence: "Cohesive with clear progression and excellent paragraphing",
    lexical: "Wide range used naturally with rare minor errors",
    grammar: "Full range used accurately with rare minor errors",
  },
  {
    band: "Band 8",
    taskAchievement: "Covers requirements with clear, appropriate overview",
    coherence: "Logically organized with clear progression throughout",
    lexical: "Wide range used fluently with occasional inaccuracies",
    grammar: "Wide range used accurately with only minor errors",
  },
  {
    band: "Band 7",
    taskAchievement: "Covers requirements with clear overview of main trends",
    coherence: "Information logically organized with clear progression",
    lexical: "Sufficient range with some awareness of style",
    grammar: "Good range with frequent error-free sentences",
  },
  {
    band: "Band 6",
    taskAchievement: "Addresses requirements with overview attempted",
    coherence: "Information coherently organized with overall progression",
    lexical: "Adequate range for the task with some inaccuracies",
    grammar: "Range of structures with some accurate complex sentences",
  },
];

const commonMistakes = [
  {
    mistake: "Copying the question exactly",
    solution: "Always paraphrase using synonyms",
    example:
      "Wrong: 'The chart shows...' → Right: 'The diagram illustrates...'",
  },
  {
    mistake: "Including specific numbers in overview",
    solution: "Keep overview general, save details for body paragraphs",
    example:
      "Wrong: 'Sales increased to 50%' → Right: 'Sales rose significantly'",
  },
  {
    mistake: "Expressing personal opinions",
    solution: "Task 1 is purely descriptive, avoid opinions",
    example: "Wrong: 'This is surprising' → Right: 'The data shows that...'",
  },
  {
    mistake: "Inadequate time management",
    solution: "Spend exactly 20 minutes, practice timing",
    example: "2 min intro + 4 min overview + 10 min body + 4 min review",
  },
  {
    mistake: "Missing clear overview",
    solution: "Always include 2-3 main trends in overview",
    example: "Start with 'Overall...' and highlight key patterns",
  },
  {
    mistake: "Repetitive vocabulary",
    solution: "Use varied synonyms and sentence structures",
    example: "Alternate: increase/rise/grow, decrease/fall/drop/decline",
  },
];

const studyPlan = [
  {
    week: "Week 1-2",
    focus: "Foundation & Chart Types",
    tasks: [
      "Learn basic Task 1 structure (Introduction → Overview → Details)",
      "Master bar chart and line graph vocabulary",
      "Practice writing introductions and overviews",
      "Study 10-15 sample responses",
    ],
    goal: "Understand format and basic vocabulary",
  },
  {
    week: "Week 3-4",
    focus: "Advanced Vocabulary & Descriptions",
    tasks: [
      "Learn trend description vocabulary (surge, plummet, fluctuate)",
      "Practice pie chart and table descriptions",
      "Master time expressions and data comparison",
      "Write 5-10 complete responses",
    ],
    goal: "Develop vocabulary range and accuracy",
  },
  {
    week: "Week 5-6",
    focus: "Complex Charts & Maps",
    tasks: [
      "Study process diagrams and map descriptions",
      "Learn location and change vocabulary",
      "Practice mixed chart types",
      "Focus on coherence and cohesion",
    ],
    goal: "Handle all Task 1 types confidently",
  },
  {
    week: "Week 7-8",
    focus: "Band 8+ Performance",
    tasks: [
      "Timed practice under exam conditions",
      "Focus on error correction and proofreading",
      "Develop sophisticated vocabulary usage",
      "Review and memorize high-scoring phrases",
    ],
    goal: "Achieve Band 7-8 performance consistently",
  },
];

export default function Task1AcademicPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BarChart3 className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-5xl font-bold mb-4">IELTS Academic Task 1</h1>
            <p className="text-xl text-blue-100 mb-8">
              Master describing charts, graphs, maps, and processes for Band 8+
              performance
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                20-minute Task
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                150+ words minimum
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                33% of Writing Score
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/writing/task1-academic/examples">
                  View Sample Answers
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/task1-academic/all-questions">
                  Practice Questions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Task Types */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Task 1 Chart Types
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Familiarize yourself with all possible Task 1 formats. Each type
            requires specific vocabulary and approach strategies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taskTypes.map((task, index) => (
              <Card key={index} hover className="p-6 h-full">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-${task.color}-100 rounded-full flex items-center justify-center`}
                >
                  <task.icon className={`w-8 h-8 text-${task.color}-600`} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {task.type}
                </h3>

                <p className="text-gray-600 mb-4 text-center text-sm">
                  {task.description}
                </p>

                <div className="flex justify-center gap-2 mb-4">
                  <Badge
                    variant={
                      task.difficulty === "Advanced"
                        ? "warning"
                        : task.difficulty === "Intermediate"
                        ? "success"
                        : "outline"
                    }
                    className="text-xs"
                  >
                    {task.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {task.frequency}
                  </Badge>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">
                    Key Skills:
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {task.keySkills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="font-medium text-gray-700 mb-1 text-xs">
                    Common Topics:
                  </h5>
                  <p className="text-xs text-gray-600">{task.sampleData}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Writing Structure */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Task 1 Structure & Timing
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Follow this proven 4-paragraph structure to organize your response
            effectively within the 20-minute time limit.
          </p>

          <div className="space-y-6">
            {writingStructure.map((step, index) => (
              <Card key={index} className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div className="text-center lg:text-left">
                    <div
                      className={`w-16 h-16 mx-auto lg:mx-0 mb-3 bg-blue-100 rounded-full flex items-center justify-center`}
                    >
                      <span className="text-2xl font-bold text-blue-600">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className="text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.time}
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <FileText className="w-3 h-3 mr-1" />
                        {step.wordCount}
                      </Badge>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">
                        Key Points:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {step.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Target className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-medium text-blue-800 mb-2">Example:</h4>
                    <p className="text-sm text-blue-700 italic">
                      "{step.example}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-8 bg-yellow-50 border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              Time Management Tips:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
              <div>
                <strong>Planning (2 minutes):</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Analyze the chart type and data</li>
                  <li>• Identify key trends and patterns</li>
                  <li>• Plan your paragraph structure</li>
                </ul>
              </div>
              <div>
                <strong>Writing (16 minutes):</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Introduction: 2-3 minutes</li>
                  <li>• Overview: 3-4 minutes</li>
                  <li>• Body paragraphs: 9-11 minutes</li>
                </ul>
              </div>
              <div>
                <strong>Checking (2 minutes):</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Grammar and spelling errors</li>
                  <li>• Word count (aim for 170-190)</li>
                  <li>• Overall coherence</li>
                </ul>
              </div>
              <div>
                <strong>Emergency Strategy:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• If running short on time</li>
                  <li>• Prioritize overview completion</li>
                  <li>• Keep final paragraph brief but complete</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        <AdInContent />

        {/* Band Requirements */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Band Descriptors & Requirements
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Understand what examiners look for in each band level to target your
            desired score.
          </p>

          <div className="space-y-4">
            {bandRequirements.map((band, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="text-center">
                    <Badge
                      variant={
                        band.band === "Band 9"
                          ? "success"
                          : band.band === "Band 8"
                          ? "warning"
                          : "outline"
                      }
                      className="text-lg px-4 py-2"
                    >
                      {band.band}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 text-sm">
                      Task Achievement
                    </h4>
                    <p className="text-xs text-gray-600">
                      {band.taskAchievement}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 text-sm">
                      Coherence & Cohesion
                    </h4>
                    <p className="text-xs text-gray-600">{band.coherence}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 text-sm">
                      Lexical Resource
                    </h4>
                    <p className="text-xs text-gray-600">{band.lexical}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 text-sm">
                      Grammar & Accuracy
                    </h4>
                    <p className="text-xs text-gray-600">{band.grammar}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Common Mistakes to Avoid
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Learn from the most frequent errors that prevent students from
            achieving higher bands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonMistakes.map((item, index) => (
              <Card key={index} className="p-6 border-l-4 border-red-400">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-700 mb-2">
                      {item.mistake}
                    </h3>
                    <p className="text-gray-700 mb-3 text-sm">
                      <strong>Solution:</strong> {item.solution}
                    </p>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <p className="text-gray-600">{item.example}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Plan */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            8-Week Study Plan
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Follow this structured approach to systematically improve your Task
            1 performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyPlan.map((week, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center`}
                  >
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {week.week}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm">
                      {week.focus}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Weekly Tasks:
                  </h4>
                  <ul className="space-y-2">
                    {week.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <h5 className="font-medium text-blue-800 mb-1">Goal:</h5>
                  <p className="text-sm text-blue-700">{week.goal}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Action Section */}
        <section className="text-center">
          <Card className="p-12 bg-gradient-to-r from-blue-50 to-indigo-50">
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Master Task 1?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Start with our sample answers to understand Band 8+ responses,
              then practice with our comprehensive question bank covering all
              chart types.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="md" asChild>
                <Link href="/writing/task1-academic/examples">
                  <Eye className="w-5 h-5 mr-2" />
                  Study Sample Answers
                </Link>
              </Button>
              <Button size="md" variant="outline" asChild>
                <Link href="/writing/task1-academic/all-questions">
                  <Zap className="w-5 h-5 mr-2" />
                  Practice Questions
                </Link>
              </Button>
              <Button size="md" variant="outline" asChild>
                <Link href="/writing/vocabulary/task-1">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Task 1 Vocabulary
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
