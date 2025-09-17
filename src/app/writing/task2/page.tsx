import { Metadata } from "next";
import Link from "next/link";
import {
  Edit,
  MessageSquare,
  Scale,
  Users,
  Lightbulb,
  Settings,
  Clock,
  Target,
  BookOpen,
  FileText,
  CheckCircle,
  Award,
  ArrowLeft,
  Eye,
  Zap,
  TrendingUp,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";

export const metadata: Metadata = {
  title: "IELTS Task 2 Essay Writing | Opinion, Discussion & Argument Essays",
  description:
    "Master IELTS Task 2 essay writing with comprehensive guides, examples, and practice questions for all essay types. Achieve Band 8+ performance.",
  keywords: [
    "IELTS Task 2",
    "Essay Writing IELTS",
    "Opinion Essays",
    "Discussion Essays",
    "IELTS Band 8",
    "Academic Writing Task 2",
  ],
};

const essayTypes = [
  {
    type: "Opinion Essays",
    icon: MessageSquare,
    description: "Express and justify your personal viewpoint",
    question: "To what extent do you agree or disagree?",
    difficulty: "Beginner-Friendly",
    color: "blue",
    frequency: "Very Common",
    structure: "Introduction → Opinion → Support 1 → Support 2 → Conclusion",
    keySkills: [
      "Clear position",
      "Personal examples",
      "Strong arguments",
      "Consistent stance",
    ],
    sampleTopics: [
      "Technology impact",
      "Education methods",
      "Environmental issues",
      "Work-life balance",
    ],
  },
  {
    type: "Discussion Essays",
    icon: Scale,
    description: "Discuss both sides and give balanced analysis",
    question: "Discuss both views and give your opinion",
    difficulty: "Intermediate",
    color: "green",
    frequency: "Very Common",
    structure: "Introduction → Side A → Side B → Opinion → Conclusion",
    keySkills: [
      "Balanced analysis",
      "Fair representation",
      "Critical thinking",
      "Final judgment",
    ],
    sampleTopics: [
      "Online vs traditional education",
      "City vs rural living",
      "Career vs family",
      "Globalization effects",
    ],
  },
  {
    type: "Advantage/Disadvantage",
    icon: TrendingUp,
    description: "Analyze benefits and drawbacks of a situation",
    question: "What are the advantages and disadvantages?",
    difficulty: "Intermediate",
    color: "purple",
    frequency: "Common",
    structure: "Introduction → Advantages → Disadvantages → Conclusion",
    keySkills: [
      "Balanced assessment",
      "Real examples",
      "Impact analysis",
      "Objective tone",
    ],
    sampleTopics: [
      "Remote work",
      "Social media",
      "International travel",
      "Urbanization",
    ],
  },
  {
    type: "Problem/Solution",
    icon: Lightbulb,
    description: "Identify problems and propose practical solutions",
    question: "What are the problems and solutions?",
    difficulty: "Advanced",
    color: "orange",
    frequency: "Common",
    structure: "Introduction → Problems → Solutions → Conclusion",
    keySkills: [
      "Problem identification",
      "Practical solutions",
      "Feasibility analysis",
      "Implementation ideas",
    ],
    sampleTopics: [
      "Traffic congestion",
      "Unemployment",
      "Climate change",
      "Healthcare challenges",
    ],
  },
  {
    type: "Cause/Effect",
    icon: Settings,
    description: "Explain reasons and consequences of phenomena",
    question: "What are the causes and effects?",
    difficulty: "Advanced",
    color: "red",
    frequency: "Less Common",
    structure: "Introduction → Causes → Effects → Conclusion",
    keySkills: [
      "Causal relationships",
      "Logical connections",
      "Impact assessment",
      "Chain reasoning",
    ],
    sampleTopics: [
      "Population growth",
      "Economic recession",
      "Technology addiction",
      "Cultural changes",
    ],
  },
  {
    type: "Mixed Questions",
    icon: Users,
    description: "Combine different question types in one essay",
    question: "Causes, effects, and solutions combined",
    difficulty: "Advanced",
    color: "indigo",
    frequency: "Occasional",
    structure: "Introduction → Causes → Effects → Solutions → Conclusion",
    keySkills: [
      "Multi-faceted analysis",
      "Complex organization",
      "Comprehensive coverage",
      "Advanced planning",
    ],
    sampleTopics: [
      "Aging population",
      "Youth unemployment",
      "Environmental degradation",
      "Digital divide",
    ],
  },
];

const writingStructure = [
  {
    step: "1",
    title: "Introduction",
    time: "5 minutes",
    wordCount: "50-60 words",
    description: "Hook, background, and thesis statement",
    keyPoints: [
      "Paraphrase the question using synonyms",
      "Provide brief context or background",
      "Present clear thesis statement",
      "Outline your essay structure",
    ],
    example:
      "In today's interconnected world, technology plays an increasingly vital role in education. While some believe digital learning enhances student engagement, others argue it diminishes face-to-face interaction. This essay will examine both perspectives before concluding that balanced integration yields optimal results.",
  },
  {
    step: "2",
    title: "Body Paragraph 1",
    time: "10 minutes",
    wordCount: "80-100 words",
    description: "First main argument with support and examples",
    keyPoints: [
      "Clear topic sentence stating main idea",
      "Detailed explanation and development",
      "Specific examples or evidence",
      "Link to overall thesis",
    ],
    example:
      "Proponents of digital education argue that technology significantly enhances learning experiences. Interactive platforms allow students to visualize complex concepts through simulations and multimedia content, making abstract subjects more accessible.",
  },
  {
    step: "3",
    title: "Body Paragraph 2",
    time: "10 minutes",
    wordCount: "80-100 words",
    description: "Second main argument or counterpoint",
    keyPoints: [
      "Contrasting or supporting argument",
      "Evidence and detailed explanation",
      "Real-world examples or case studies",
      "Transition to conclusion",
    ],
    example:
      "However, critics emphasize the irreplaceable value of traditional classroom interaction. Face-to-face discussions foster critical thinking skills and emotional intelligence that digital platforms cannot fully replicate.",
  },
  {
    step: "4",
    title: "Conclusion",
    time: "5 minutes",
    wordCount: "40-50 words",
    description: "Summarize and restate position",
    keyPoints: [
      "Restate thesis in different words",
      "Summarize main arguments briefly",
      "Final thought or recommendation",
      "No new information introduced",
    ],
    example:
      "In conclusion, while technology offers valuable educational tools, the most effective approach combines digital innovation with traditional teaching methods to create comprehensive learning environments.",
  },
];

const bandRequirements = [
  {
    band: "Band 9",
    taskResponse: "Fully addresses all parts with well-developed position",
    coherence: "Cohesive with seamless progression and skillful paragraphing",
    lexical: "Wide range used with natural and sophisticated control",
    grammar: "Full range with complete naturalness and accuracy",
  },
  {
    band: "Band 8",
    taskResponse:
      "Sufficiently addresses all parts with well-supported position",
    coherence: "Logically organized with clear progression throughout",
    lexical: "Wide range used fluently with occasional minor inaccuracies",
    grammar: "Wide range used with flexibility and precise usage",
  },
  {
    band: "Band 7",
    taskResponse: "Addresses all parts with clear position and relevant ideas",
    coherence: "Information logically organized with clear overall progression",
    lexical: "Sufficient range with awareness of style and collocation",
    grammar: "Good range with frequent complex structures",
  },
  {
    band: "Band 6",
    taskResponse: "Addresses all parts with relevant position and ideas",
    coherence: "Information coherently organized with overall progression",
    lexical: "Adequate range for task with some flexibility",
    grammar: "Range of structures with some complex sentences",
  },
];

const commonMistakes = [
  {
    mistake: "Unclear or missing thesis statement",
    solution: "Always include a clear position in your introduction",
    example:
      "Wrong: 'There are advantages and disadvantages' → Right: 'Despite some drawbacks, the benefits significantly outweigh the disadvantages'",
  },
  {
    mistake: "Insufficient development of ideas",
    solution: "Explain each point fully with examples and analysis",
    example:
      "Don't just state opinions - explain why you hold them and provide supporting evidence",
  },
  {
    mistake: "Poor paragraphing and organization",
    solution: "Use clear topic sentences and logical paragraph structure",
    example:
      "Each paragraph should focus on one main idea with supporting details",
  },
  {
    mistake: "Inappropriate register or tone",
    solution: "Maintain formal academic tone throughout",
    example:
      "Wrong: 'Kids these days...' → Right: 'Contemporary young people...'",
  },
  {
    mistake: "Memorized phrases and unnatural language",
    solution: "Use natural expressions and avoid overused templates",
    example: "Avoid phrases like 'As we all know' or 'Last but not least'",
  },
  {
    mistake: "Inadequate time management",
    solution: "Practice strict timing: 5-10-10-5 minute structure",
    example: "40 minutes total: Planning (5) + Writing (30) + Checking (5)",
  },
];

const studyPlan = [
  {
    week: "Week 1-2",
    focus: "Essay Types & Structure",
    tasks: [
      "Master the 5 main essay types and their structures",
      "Learn to identify question types quickly",
      "Practice writing strong introductions and conclusions",
      "Study 15-20 model essays across different types",
    ],
    goal: "Understand format and recognize question patterns",
  },
  {
    week: "Week 3-4",
    focus: "Idea Development & Examples",
    tasks: [
      "Practice brainstorming relevant ideas quickly",
      "Develop bank of examples for common topics",
      "Learn to extend and support arguments effectively",
      "Write 8-10 complete essays with feedback",
    ],
    goal: "Generate and develop ideas confidently",
  },
  {
    week: "Week 5-6",
    focus: "Advanced Language & Cohesion",
    tasks: [
      "Master linking words and transition phrases",
      "Practice sophisticated vocabulary in context",
      "Focus on coherence and paragraph unity",
      "Analyze high-scoring essays for language use",
    ],
    goal: "Achieve natural, sophisticated expression",
  },
  {
    week: "Week 7-8",
    focus: "Exam Technique & Practice",
    tasks: [
      "Timed practice under strict exam conditions",
      "Focus on error identification and correction",
      "Practice various essay types randomly",
      "Develop personal checking and proofreading system",
    ],
    goal: "Consistent Band 7+ performance under pressure",
  },
];

export default function Task2Page() {
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
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Edit className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-5xl font-bold mb-4">IELTS Task 2 Essays</h1>
            <p className="text-xl text-purple-100 mb-8">
              Master opinion, discussion, and argumentative essays for Band 8+
              performance
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                40-minute Task
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                250+ words minimum
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                67% of Writing Score
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/writing/task2/examples">View Sample Essays</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/task2/all-questions">
                  Practice Questions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Essay Types */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Task 2 Essay Types
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Master all six essay types with specific strategies, structures, and
            vocabulary for each question format.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essayTypes.map((essay, index) => (
              <Card key={index} hover className="p-6 h-full">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-${essay.color}-100 rounded-full flex items-center justify-center`}
                >
                  <essay.icon className={`w-8 h-8 text-${essay.color}-600`} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {essay.type}
                </h3>

                <p className="text-gray-600 mb-3 text-center text-sm">
                  {essay.description}
                </p>

                <div className="bg-gray-50 p-3 rounded mb-4">
                  <p className="text-xs font-medium text-gray-800 text-center italic">
                    "{essay.question}"
                  </p>
                </div>

                <div className="flex justify-center gap-2 mb-4">
                  <Badge
                    variant={
                      essay.difficulty === "Advanced"
                        ? "warning"
                        : essay.difficulty === "Intermediate"
                        ? "success"
                        : "outline"
                    }
                    className="text-xs"
                  >
                    {essay.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {essay.frequency}
                  </Badge>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">
                    Structure:
                  </h4>
                  <p className="text-xs text-gray-600 bg-blue-50 p-2 rounded">
                    {essay.structure}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">
                    Key Skills:
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {essay.keySkills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="font-medium text-gray-700 mb-1 text-xs">
                    Sample Topics:
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {essay.sampleTopics.slice(0, 2).map((topic, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Writing Structure */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Task 2 Structure & Timing
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Follow this proven 4-paragraph structure to organize your 250+ word
            essay effectively within the 40-minute time limit.
          </p>

          <div className="space-y-6">
            {writingStructure.map((step, index) => (
              <Card key={index} className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div className="text-center lg:text-left">
                    <div
                      className={`w-16 h-16 mx-auto lg:mx-0 mb-3 bg-purple-100 rounded-full flex items-center justify-center`}
                    >
                      <span className="text-2xl font-bold text-purple-600">
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

                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <h4 className="font-medium text-purple-800 mb-2">
                      Example:
                    </h4>
                    <p className="text-sm text-purple-700 italic">
                      "{step.example}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-8 bg-yellow-50 border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              Time Management Strategy:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
              <div>
                <strong>Planning (5 minutes):</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Analyze question type and requirements</li>
                  <li>• Brainstorm ideas and examples</li>
                  <li>• Plan paragraph structure and main points</li>
                </ul>
              </div>
              <div>
                <strong>Writing (30 minutes):</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Introduction: 5 minutes</li>
                  <li>• Body paragraph 1: 10 minutes</li>
                  <li>• Body paragraph 2: 10 minutes</li>
                  <li>• Conclusion: 5 minutes</li>
                </ul>
              </div>
              <div>
                <strong>Checking (5 minutes):</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Grammar and spelling errors</li>
                  <li>• Word count (aim for 270-300)</li>
                  <li>• Coherence and task response</li>
                </ul>
              </div>
              <div>
                <strong>Emergency Strategy:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• If running short on time</li>
                  <li>• Write brief but complete conclusion</li>
                  <li>• Ensure minimum 250 words reached</li>
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
                      Task Response
                    </h4>
                    <p className="text-xs text-gray-600">{band.taskResponse}</p>
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
            2 performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyPlan.map((week, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center`}
                  >
                    <span className="text-purple-600 font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {week.week}
                    </h3>
                    <p className="text-purple-600 font-medium text-sm">
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

                <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                  <h5 className="font-medium text-purple-800 mb-1">Goal:</h5>
                  <p className="text-sm text-purple-700">{week.goal}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Action Section */}
        <section className="text-center">
          <Card className="p-12 bg-gradient-to-r from-purple-50 to-indigo-50">
            <Award className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Master Task 2?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Start with our Band 8+ sample essays to understand successful
              responses, then practice with our comprehensive question bank
              covering all essay types.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="md" asChild>
                <Link href="/writing/task2/examples">
                  <Eye className="w-5 h-5 mr-2" />
                  Study Sample Essays
                </Link>
              </Button>
              <Button size="md" variant="outline" asChild>
                <Link href="/writing/task2/all-questions">
                  <Zap className="w-5 h-5 mr-2" />
                  Practice Questions
                </Link>
              </Button>
              <Button size="md" variant="outline" asChild>
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
