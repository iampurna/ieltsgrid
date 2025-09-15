import { Metadata } from "next";
import {
  CheckCircle,
  XCircle,
  Lightbulb,
  Target,
  BookOpen,
  FileText,
  PenTool,
  AlertTriangle,
  Star,
  Clock,
  Users,
  ArrowRight,
  Edit,
  Eye,
  Brain,
  MessageSquare,
  Zap,
  Shield,
  ArrowLeft,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IELTS Writing Tips & Strategies | Score Band 8+ | Expert Guide",
  description:
    "Master IELTS Writing with proven strategies and tips. Learn how to score Band 8+ with expert guidance on Task 1 & Task 2, structure, vocabulary, and common mistakes to avoid.",
  keywords: [
    "IELTS Writing Tips",
    "IELTS Band 8",
    "Writing Strategies",
    "IELTS Essay Structure",
    "Writing Score Improvement",
  ],
};

const essentialPrinciples = [
  {
    id: 1,
    title: "Read the Question Carefully",
    description:
      "Understanding what the question asks is crucial for achieving a good score.",
    icon: Target,
    tips: [
      "Read thoroughly and cover ALL points you're asked to write about",
      "Identify how many parts the question has (1-part, 2-part, or 3-part)",
      "Example: 'What are pros & cons?' + 'Give examples' = 2 requirements",
      "Failing to complete one requirement results in lower scores",
      "Watch for plurals: 'advantages' means minimum 2 advantages",
      "Watch for 'and': may need to comment on multiple elements",
    ],
  },
  {
    id: 2,
    title: "Read What You Have Written",
    description: "Review each paragraph before starting the next one.",
    icon: Eye,
    tips: [
      "Go back and read the paragraph you just wrote",
      "This helps link your paragraphs together logically",
      "Ensures smooth flow and coherence",
      "Helps you avoid repetition and contradictions",
      "Takes only 30 seconds but improves cohesion significantly",
    ],
  },
  {
    id: 3,
    title: "Be Clear and Focused",
    description: "Select your best ideas and write about them clearly.",
    icon: Lightbulb,
    tips: [
      "Choose your clearest explanation, not necessarily your best",
      "Don't write everything you know - leave some ideas out",
      "Focus on clarity over complexity",
      "Simple but accurate ideas score better than complicated ones",
      "Select 2-3 strong points rather than many weak ones",
    ],
  },
  {
    id: 4,
    title: "Write About What You Know",
    description: "You're tested on English quality, not idea quality.",
    icon: BookOpen,
    tips: [
      "Don't worry about finding the 'right answer'",
      "Use simple ideas you can clearly describe and justify",
      "Personal experience and general knowledge work well",
      "Avoid controversial topics you can't support adequately",
      "Focus on developing your argument, not impressing with knowledge",
    ],
  },
  {
    id: 5,
    title: "Follow the Standard Structure",
    description: "Use proven structures to maximize your scores.",
    icon: FileText,
    tips: [
      "Task 1: Introduction → Overview → Body 1 → Body 2",
      "Task 2: Introduction → Main Body 1 → Main Body 2 → Conclusion",
      "Never deviate from these proven structures",
      "Each paragraph should have a clear purpose",
      "Structure helps examiners follow your ideas easily",
    ],
  },
  {
    id: 6,
    title: "Don't Write Too Many Words",
    description: "Stay within optimal word limits for better scores.",
    icon: Clock,
    tips: [
      "Task 1: Aim for 170-190 words (max 200)",
      "Task 2: Aim for 270-290 words (max 300)",
      "Long essays are difficult for examiners to read carefully",
      "More words = more chances for mistakes",
      "Less time for checking and correction",
    ],
  },
  {
    id: 7,
    title: "Choose Your Writing Style",
    description: "Use appropriate formality for academic writing.",
    icon: Edit,
    tips: [
      "Never use informal language in academic writing",
      "Avoid contractions (can't → cannot)",
      "Use formal vocabulary and sentence structures",
      "Only Task 1 General (letters) may be informal if appropriate",
      "Maintain consistency throughout your response",
    ],
  },
  {
    id: 8,
    title: "Don't Learn Model Answers by Heart",
    description: "Avoid memorized responses - they're easily detected.",
    icon: Brain,
    tips: [
      "Examiners easily spot memorized essays",
      "Learn vocabulary and structures, not complete answers",
      "Adapt language to fit your specific question",
      "Show genuine writing ability, not memorization",
      "Use varied expressions in different writings",
    ],
  },
  {
    id: 9,
    title: "Don't Branch Off!",
    description: "Stay strictly on topic throughout your response.",
    icon: Shield,
    tips: [
      "Write only according to the theme",
      "Don't include irrelevant information",
      "Going off-topic severely reduces scores",
      "Every sentence should relate to the question",
      "Well-written but irrelevant content scores poorly",
    ],
  },
  {
    id: 10,
    title: "Write Clearly and Coherently",
    description: "Ensure logical flow and avoid repetition.",
    icon: MessageSquare,
    tips: [
      "Don't repeat yourself with different words",
      "Each paragraph should have one central idea",
      "Use linking words appropriately, not excessively",
      "Make sure paragraphs are clearly separated",
      "Logical progression makes essays neat and coherent",
    ],
  },
];

const structureGuide = {
  task1: {
    title: "Task 1 Academic Structure",
    timeLimit: "20 minutes",
    wordCount: "150+ words",
    steps: [
      {
        step: "Introduction",
        description: "Paraphrase the question - describe what the visual shows",
        example:
          "The table illustrates employment numbers in Australia over a thirty-year period from 1970 to 2000.",
        tips: [
          "Use synonyms to rephrase",
          "Include key information: what, where, when",
          "Keep it to one sentence",
        ],
      },
      {
        step: "Overview",
        description: "Summarize main trends WITHOUT specific data or figures",
        example:
          "Overall, employment increased significantly while unemployment remained relatively stable throughout the period.",
        tips: [
          "Use: Overall, In summary, In general",
          "NO specific numbers or data",
          "2-3 main trends only",
        ],
      },
      {
        step: "Body Paragraph 1",
        description:
          "Describe specific details with data for first main feature",
        example:
          "Employment figures rose consistently from 5.2 million in 1970 to 6.8 million in 1980, reaching 8.7 million by 2000.",
        tips: [
          "Include specific figures and data",
          "Focus on one main trend/feature",
          "Use comparison language",
        ],
      },
      {
        step: "Body Paragraph 2",
        description:
          "Describe specific details with data for second main feature",
        example:
          "In contrast, unemployment showed minimal fluctuation, hovering between 400,000 and 500,000 throughout the three decades.",
        tips: [
          "Include specific figures and data",
          "Focus on different trend/feature",
          "Make comparisons where relevant",
        ],
      },
    ],
  },
  task2: {
    title: "Task 2 Essay Structure",
    timeLimit: "40 minutes",
    wordCount: "250+ words",
    steps: [
      {
        step: "Introduction",
        description:
          "Paraphrase the question and state your clear opinion/thesis",
        example:
          "While technology offers educational benefits, I believe traditional teaching methods remain more effective for student development.",
        tips: [
          "Paraphrase the question",
          "State your position clearly",
          "Preview main arguments briefly",
        ],
      },
      {
        step: "Main Body Paragraph 1",
        description:
          "Present your first main argument with explanation and example",
        example:
          "The primary advantage of classroom learning is direct interaction with teachers, allowing immediate clarification of complex concepts.",
        tips: [
          "Topic sentence with main point",
          "Explanation of the point",
          "Specific example or evidence",
        ],
      },
      {
        step: "Main Body Paragraph 2",
        description:
          "Present your second main argument with explanation and example",
        example:
          "Furthermore, traditional methods promote better social skills through face-to-face collaboration among students.",
        tips: [
          "Different main point supporting your position",
          "Detailed explanation",
          "Relevant example or evidence",
        ],
      },
      {
        step: "Conclusion",
        description: "Summarize main points and restate your opinion clearly",
        example:
          "In conclusion, despite technological advances, traditional education provides superior learning outcomes through personal interaction and social development.",
        tips: [
          "Summarize main arguments",
          "Restate your opinion",
          "No new information",
        ],
      },
    ],
  },
};

const bandEightSteps = [
  {
    step: 1,
    title: "Answer is Relevant to the Question",
    icon: Target,
    dos: [
      "Make sure ideas directly relate to the question",
      "Use familiar examples that relate to the topic",
      "Extend answer with multiple supporting ideas",
    ],
    donts: [
      "Include irrelevant information",
      "Over-generalize the topic",
      "Use memorized essays",
      "Present fake statistics or research",
    ],
  },
  {
    step: 2,
    title: "Answer All Parts of the Question",
    icon: CheckCircle,
    dos: [
      "Read carefully and identify all question parts",
      "Present your opinion clearly when asked",
      "Give equal attention to all parts if multiple",
      "Write over 250 words for Task 2",
    ],
    donts: [
      "Ignore any part of the question",
      "Assume your opinion is clear without stating it",
      "Focus on only one part of multi-part questions",
      "Write a short essay",
    ],
  },
  {
    step: 3,
    title: "Organize Logically with Clear Progression",
    icon: ArrowRight,
    dos: [
      "Use range of linking words appropriately",
      "Use referencing (this issue, these problems)",
      "Sequence ideas correctly",
      "Make ideas logical and easy to follow",
    ],
    donts: [
      "Overuse basic linking words (firstly, secondly)",
      "Start every sentence with linkers",
      "Use numbers, symbols, or abbreviations",
      "Create one-sentence paragraphs",
    ],
  },
  {
    step: 4,
    title: "Organize into Clear Paragraphs",
    icon: FileText,
    dos: [
      "Use paragraphs with minimum two sentences",
      "One paragraph for each main idea",
      "Use PEEL structure (Point, Example, Explain, Link)",
      "Leave space between paragraphs",
    ],
    donts: [
      "Write single-sentence paragraphs",
      "Create very long paragraphs covering whole page",
      "Mix multiple ideas in one paragraph",
    ],
  },
];

const vocabularyGuidance = [
  {
    category: "Precision",
    good: ["crucial", "substantial", "implement", "furthermore"],
    bad: ["very important", "a lot of", "do", "also"],
    tip: "Use precise, specific vocabulary rather than general terms",
  },
  {
    category: "Formality",
    good: ["cannot", "do not", "children", "beneficial"],
    bad: ["can't", "don't", "kids", "good"],
    tip: "Maintain academic tone with formal vocabulary choices",
  },
  {
    category: "Sophistication",
    good: ["nevertheless", "consequently", "predominantly", "facilitate"],
    bad: ["but", "so", "mostly", "help"],
    tip: "Use less common but appropriate vocabulary naturally",
  },
  {
    category: "Linking",
    good: ["The primary reason", "In contrast", "As a result"],
    bad: ["Firstly", "On the other hand", "So"],
    tip: "Use sophisticated linking phrases instead of basic connectors",
  },
];

const grammarTips = [
  {
    structure: "Complex Sentences",
    example:
      "Although technology has advanced rapidly, traditional teaching methods remain effective.",
    tip: "Combine ideas using subordinating conjunctions",
  },
  {
    structure: "Relative Clauses",
    example: "Students who study abroad often develop greater independence.",
    tip: "Use who/which/that to add information about nouns",
  },
  {
    structure: "Passive Voice",
    example:
      "Significant improvements have been made in educational technology.",
    tip: "Use passive voice for formal, academic tone when appropriate",
  },
  {
    structure: "Conditional Sentences",
    example:
      "If governments invest in education, future generations will benefit significantly.",
    tip: "Express hypothetical situations and their consequences",
  },
];

const commonMistakes = [
  {
    mistake: "Memorized Language",
    problem: "Using learned phrases inappropriately",
    solution: "Adapt vocabulary to fit your specific answer",
    example:
      "Avoid: 'Every coin has two sides' → Use: 'There are both advantages and disadvantages'",
  },
  {
    mistake: "Going Off-Topic",
    problem: "Including irrelevant information",
    solution: "Every sentence must relate to the question",
    example: "Question about education → Don't discuss unrelated social issues",
  },
  {
    mistake: "Poor Time Management",
    problem: "Running out of time for checking",
    solution: "Task 1: 20 mins, Task 2: 40 mins, including planning",
    example: "Plan: 5 mins, Write: 30 mins, Check: 5 mins for Task 2",
  },
  {
    mistake: "Repetitive Language",
    problem: "Using same words and structures repeatedly",
    solution: "Vary vocabulary and sentence structures",
    example:
      "Instead of repeating 'important' → use crucial, significant, vital",
  },
];

const quickChecklist = [
  "Did I answer ALL parts of the question?",
  "Is my position clear throughout the essay?",
  "Does each paragraph have one central idea?",
  "Did I use linking words appropriately (not excessively)?",
  "Are my examples relevant and specific?",
  "Did I avoid repetition and memorized language?",
  "Is my vocabulary precise and appropriately formal?",
  "Are my sentences error-free and varied?",
  "Did I write the correct number of words?",
  "Is my conclusion consistent with my introduction?",
  "Did I stay on topic throughout?",
  "Is my structure clear and logical?",
];

export default function WritingTipsPage() {
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
            <PenTool className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-5xl font-bold mb-4">
              IELTS Writing Tips & Strategies
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Master the 12 essential principles to score Band 8+ in IELTS
              Writing
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-2 text-purple-100">
                Expert-verified strategies from former IELTS examiners
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Core Philosophy */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-600" />
              The Secret to Band 8+ Writing
            </h2>
            <div className="text-lg text-gray-700 space-y-3">
              <p>
                <strong>You don't need special knowledge</strong> - the examiner
                assesses your writing, not your ideas.
              </p>
              <p>
                <strong>Simple but accurate ideas score better</strong> than
                complicated ones with errors.
              </p>
              <p>
                <strong>To succeed in IELTS Writing, you need to:</strong>
              </p>
              <div className="flex gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Be accurate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Write simple things well</span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Essential Writing Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            10 Essential Writing Principles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {essentialPrinciples.map((principle) => (
              <Card key={principle.id} className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <principle.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-1">
                      Tip {principle.id}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {principle.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{principle.description}</p>
                <ul className="space-y-2">
                  {principle.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Structure Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Proven Essay Structures
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {Object.entries(structureGuide).map(([key, guide]) => (
              <Card key={key} className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-600" />
                    {guide.title}
                  </h3>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1">
                      {guide.timeLimit}
                    </Badge>
                    <div className="text-sm text-gray-600">
                      {guide.wordCount}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  {guide.steps.map((step, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-200 pl-4"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                          {index + 1}
                        </span>
                        {step.step}
                      </h4>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="bg-blue-50 p-3 rounded-lg mb-3">
                        <p className="text-sm text-blue-800 italic">
                          "{step.example}"
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {step.tips.map((tip, tipIndex) => (
                          <Badge
                            key={tipIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tip}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <AdInContent />

        {/* Band 8 Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            4-Step Path to Band 8
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bandEightSteps.map((step) => (
              <Card key={step.step} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <Badge className="mb-1">Step {step.step}</Badge>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Do:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {step.dos.map((item, index) => (
                        <li key={index} className="text-gray-700">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-2 flex items-center gap-1">
                      <XCircle className="w-4 h-4" />
                      Don't:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {step.donts.map((item, index) => (
                        <li key={index} className="text-gray-700">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Vocabulary & Grammar */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Language Enhancement
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Vocabulary Upgrade
              </h3>
              <div className="space-y-4">
                {vocabularyGuidance.map((category, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {category.category}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{category.tip}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-red-50 p-2 rounded">
                        <div className="text-xs font-medium text-red-700 mb-1">
                          Avoid:
                        </div>
                        <div className="space-y-1">
                          {category.bad.map((word, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs mr-1"
                            >
                              {word}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <div className="text-xs font-medium text-green-700 mb-1">
                          Use:
                        </div>
                        <div className="space-y-1">
                          {category.good.map((word, idx) => (
                            <Badge
                              key={idx}
                              variant="success"
                              className="text-xs mr-1"
                            >
                              {word}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Edit className="w-6 h-6 text-purple-600" />
                Grammar Structures
              </h3>
              <div className="space-y-4">
                {grammarTips.map((grammar, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-purple-200 pl-4"
                  >
                    <h4 className="font-medium text-purple-700 mb-1">
                      {grammar.structure}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">{grammar.tip}</p>
                    <div className="bg-purple-50 p-3 rounded text-sm italic text-purple-800">
                      "{grammar.example}"
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            {commonMistakes.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-700 mb-1">
                        Mistake
                      </h4>
                      <p className="text-sm text-gray-700">{item.mistake}</p>
                      <p className="text-xs text-gray-600 mt-1">
                        {item.problem}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-700 mb-1">
                        Solution
                      </h4>
                      <p className="text-sm text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-blue-700 mb-1">
                      Example
                    </h4>
                    <p className="text-sm text-gray-700 bg-blue-50 p-2 rounded">
                      {item.example}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pre-Submission Checklist
          </h2>
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Final Review (2-3 minutes)
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickChecklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 border"
                >
                  <div className="w-6 h-6 border-2 border-blue-300 rounded flex items-center justify-center text-xs font-medium text-blue-600 flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Action Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Apply These Strategies?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Practice these proven techniques with our sample essays and tasks.
              Consistent application of these 12 principles will significantly
              improve your IELTS Writing scores.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/writing/task-1">Practice Task 1</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/writing/task-2">Practice Task 2 </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/writing/vocabulary">Practice Vocabulary</a>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
