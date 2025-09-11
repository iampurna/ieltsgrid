import { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  MessageCircle,
  Clock,
  CheckCircle,
  Lightbulb,
  Brain,
  Mic,
  BookOpen,
  Users,
  ArrowLeft,
  Star,
  Volume2,
  AlertTriangle,
  FileText,
  Award,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "IELTS Speaking Tips and Strategies | Assessment Criteria & Band Descriptors",
  description:
    "Learn IELTS Speaking assessment criteria, band descriptors, and proven tips. Understand how examiners mark fluency, vocabulary, grammar, and pronunciation for Band 7+.",
  keywords: [
    "IELTS speaking assessment criteria",
    "IELTS speaking band descriptors",
    "IELTS speaking marking scheme",
    "fluency and coherence IELTS",
    "lexical resource IELTS",
    "grammatical range accuracy",
    "pronunciation IELTS speaking",
    "IELTS speaking part 1 2 3 tips",
  ],
};

const assessmentCriteria = [
  {
    criterion: "Fluency and Coherence",
    weight: "25%",
    description:
      "Ability to speak at length without noticeable effort or loss of coherence",
    band7:
      "Speaks at length without noticeable effort or loss of coherence; may demonstrate language-related hesitation at times, or some repetition and/or self-correction",
    tips: [
      "Speak at a natural pace, don't rush",
      "Use linking words (however, therefore, additionally)",
      "Organize ideas logically",
      "Avoid long pauses and repetition",
    ],
  },
  {
    criterion: "Lexical Resource",
    weight: "25%",
    description: "Range and accurate use of vocabulary",
    band7:
      "Uses a wide range of vocabulary with some flexibility and precise usage; uses less common lexical items with some awareness of style and collocation",
    tips: [
      "Use varied vocabulary, avoid repetition",
      "Learn topic-specific vocabulary",
      "Use collocations naturally",
      "Don't use words you're unsure about",
    ],
  },
  {
    criterion: "Grammatical Range and Accuracy",
    weight: "25%",
    description: "Range and accurate use of grammar",
    band7:
      "Uses a range of complex structures with some flexibility; frequently produces error-free sentences, though some grammatical mistakes persist",
    tips: [
      "Mix simple and complex sentences",
      "Use different tenses accurately",
      "Self-correct when you notice mistakes",
      "Practice conditional and passive structures",
    ],
  },
  {
    criterion: "Pronunciation",
    weight: "25%",
    description:
      "Ability to produce comprehensible speech to fulfill the speaking test requirements",
    band7:
      "Shows all the positive features of Band 6 and some, but not all, of the positive features of Band 8",
    tips: [
      "Focus on clear articulation",
      "Use word stress correctly",
      "Vary intonation patterns",
      "Don't worry about having an accent",
    ],
  },
];

const testStructure = [
  {
    part: 1,
    title: "Introduction & Interview",
    duration: "4-5 minutes",
    format:
      "The examiner asks general questions about yourself and familiar topics",
    questionTypes: [
      "Personal information (name, where you're from)",
      "Home/hometown questions",
      "Work or studies",
      "Hobbies and interests",
      "Daily routines",
      "Food preferences",
      "Weather and seasons",
    ],
    tips: [
      "Give extended answers, not just yes/no",
      "Add reasons and examples",
      "Show personality in your responses",
      "Stay relevant to the question asked",
    ],
  },
  {
    part: 2,
    title: "Long Turn (Individual)",
    duration: "3-4 minutes total",
    format: "1 minute preparation + 1-2 minutes speaking + follow-up questions",
    questionTypes: [
      "Describe a person (family member, friend, celebrity)",
      "Describe a place (city, building, natural area)",
      "Describe an object (gift, possession, technology)",
      "Describe an event or experience",
      "Describe an activity or hobby",
    ],
    tips: [
      "Use all your preparation time to make notes",
      "Cover all points on the task card",
      "Speak for the full 2 minutes",
      "Include specific details and examples",
    ],
  },
  {
    part: 3,
    title: "Two-way Discussion",
    duration: "4-5 minutes",
    format: "Abstract discussion related to Part 2 topic",
    questionTypes: [
      "Comparing past and present",
      "Advantages and disadvantages",
      "Causes and effects",
      "Solutions to problems",
      "Future predictions",
      "Social and cultural issues",
    ],
    tips: [
      "Give detailed opinions with reasons",
      "Use examples to support points",
      "Consider different perspectives",
      "Think about broader implications",
    ],
  },
];

const essentialTips = [
  {
    icon: MessageCircle,
    title: "Don't Memorize Complete Answers",
    description:
      "Memorized responses sound unnatural and don't match follow-up questions. Examiners can easily detect prepared speeches.",
    advice:
      "Learn flexible phrases and vocabulary, but keep responses spontaneous and genuine.",
  },
  {
    icon: BookOpen,
    title: "Use Familiar Vocabulary",
    description:
      "Using complex words incorrectly hurts your score more than using simpler words correctly.",
    advice:
      "Stick to vocabulary you know well. It's better to express ideas clearly with simple words than struggle with complex ones.",
  },
  {
    icon: Clock,
    title: "Use Strategic Pauses",
    description:
      "Natural thinking time is acceptable, but avoid fillers like 'um', 'ah', 'you know'.",
    advice:
      "Use phrases like 'That's an interesting question', 'Let me think about that', or 'Well, I would say that...' to buy thinking time.",
  },
  {
    icon: Target,
    title: "Extend Your Answers",
    description:
      "Short responses suggest you cannot discuss topics in detail or lack vocabulary.",
    advice:
      "Always give reasons, examples, and additional details. If the examiner asks 'Why?', they want more explanation.",
  },
  {
    icon: Volume2,
    title: "Speak Clearly and Naturally",
    description:
      "Focus on clear pronunciation and natural rhythm rather than perfect accent.",
    advice:
      "Smile while speaking - it improves your tone. Vary your intonation and stress important words for emphasis.",
  },
  {
    icon: Brain,
    title: "Practice Common Topics",
    description: "Certain topics appear frequently in IELTS Speaking tests.",
    advice:
      "Prepare vocabulary and ideas for education, technology, environment, culture, work, travel, and family topics.",
  },
];

const commonTopics = [
  {
    category: "Personal Life",
    topics: [
      "Family and relationships",
      "Hobbies and free time",
      "Daily routines",
      "Food and cooking",
      "Shopping habits",
      "Health and fitness",
    ],
  },
  {
    category: "Education & Work",
    topics: [
      "School and university",
      "Career plans",
      "Learning languages",
      "Skills and abilities",
      "Technology in education",
      "Work-life balance",
    ],
  },
  {
    category: "Society & Culture",
    topics: [
      "Transportation",
      "Environmental issues",
      "Social media",
      "Traditional vs modern",
      "Cultural differences",
      "Community life",
    ],
  },
  {
    category: "Leisure & Entertainment",
    topics: [
      "Sports and games",
      "Music and movies",
      "Travel and holidays",
      "Festivals and celebrations",
      "Art and creativity",
      "Books and reading",
    ],
  },
];

const bandDescriptors = [
  {
    band: "Band 6",
    description: "Competent User",
    characteristics:
      "Generally effective command of the language despite some inaccuracies and misunderstandings",
  },
  {
    band: "Band 7",
    description: "Good User",
    characteristics:
      "Has operational command of the language, though with occasional inaccuracies and misunderstandings",
  },
  {
    band: "Band 8",
    description: "Very Good User",
    characteristics:
      "Has fully operational command of the language with only occasional unsystematic inaccuracies",
  },
  {
    band: "Band 9",
    description: "Expert User",
    characteristics:
      "Has fully operational command of the language: appropriate, accurate and fluent with complete understanding",
  },
];

const practiceStrategies = [
  {
    strategy: "Daily Speaking Practice",
    duration: "80-90 minutes daily",
    activities: [
      "Record yourself answering Part 1 questions",
      "Practice describing objects around you (Part 2 style)",
      "Give opinions on current news topics (Part 3 style)",
      "Read aloud to improve fluency and pronunciation",
    ],
  },
  {
    strategy: "Vocabulary Building",
    duration: "40-45 minutes daily",
    activities: [
      "Learn 5-10 topic-related words daily",
      "Practice using new words in sentences",
      "Study collocations and phrasal verbs",
      "Create mind maps for common topics",
    ],
  },
  {
    strategy: "Mock Tests",
    duration: "3/4 times weekly",
    activities: [
      "Complete full speaking tests with timing",
      "Practice with native speakers or teachers",
      "Record sessions for self-evaluation",
      "Focus on weak areas identified in practice",
    ],
  },
];

export default function SpeakingTipsPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-5xl font-bold mb-4">
              IELTS Speaking Tips and Assessment Guide
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Understand the marking criteria, band descriptors, and proven
              strategies to improve your IELTS Speaking score
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#assessment-criteria">Assessment Criteria</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#test-structure">Test Structure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Assessment Criteria */}
        <section id="assessment-criteria">
          <h2 className="text-3xl font-bold text-center mb-8">
            IELTS Speaking Assessment Criteria
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Your IELTS Speaking score is based on four equally weighted
            criteria. Understanding these helps you focus your preparation
            effectively.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {assessmentCriteria.map((criterion, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {criterion.criterion}
                    </h3>
                    <Badge variant="primary">{criterion.weight}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{criterion.description}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Band 7 Descriptor:
                  </h4>
                  <p className="text-blue-700 text-sm">{criterion.band7}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Tips:</h4>
                  <ul className="space-y-2">
                    {criterion.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Band Descriptors */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            IELTS Speaking Band Descriptors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bandDescriptors.map((band, index) => (
              <Card
                key={index}
                className={`p-6 text-center ${
                  index === 1 ? "border-2 border-green-500 bg-green-50" : ""
                }`}
              >
                <div
                  className={`text-3xl font-bold mb-2 ${
                    index === 1 ? "text-green-700" : "text-blue-600"
                  }`}
                >
                  {band.band}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {band.description}
                </h3>
                <p className="text-sm text-gray-600">{band.characteristics}</p>
                {index === 1 && (
                  <div className="mt-4">
                    <Badge variant="primary">Target Band</Badge>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Test Structure */}
        <section id="test-structure">
          <h2 className="text-3xl font-bold text-center mb-8">
            IELTS Speaking Test Structure and Question Types
          </h2>
          <div className="space-y-8">
            {testStructure.map((part, index) => (
              <Card key={index} className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="primary" size="md">
                        Part {part.part}
                      </Badge>
                      <div>
                        <h3 className="text-xl font-semibold">{part.title}</h3>
                        <p className="text-sm text-gray-600">{part.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{part.format}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Common Question Types:
                    </h4>
                    <ul className="space-y-2">
                      {part.questionTypes.map((type, typeIndex) => (
                        <li key={typeIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Success Tips:</h4>
                    <ul className="space-y-2">
                      {part.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Essential Tips */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            Essential IELTS Speaking Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {essentialTips.map((tip, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <tip.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      {tip.description}
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-green-800 text-sm font-medium">
                        {tip.advice}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Common Topics */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            Common IELTS Speaking Topics
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Prepare vocabulary and ideas for these frequently tested topics to
            build confidence in your speaking test.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonTopics.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="secondary" size="sm">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Practice Strategies */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            Effective Practice Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practiceStrategies.map((strategy, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {strategy.strategy}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {strategy.duration}
                </p>
                <ul className="space-y-2">
                  {strategy.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Reminders */}
        <section className="bg-yellow-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-yellow-800">
            Important Reminders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">
                  Avoid Memorization
                </h3>
                <p className="text-yellow-700 text-sm">
                  Examiners can detect memorized answers. Focus on natural,
                  spontaneous responses.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">
                  Quality Over Complexity
                </h3>
                <p className="text-yellow-700 text-sm">
                  Clear, accurate simple language scores better than incorrect
                  complex structures.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Volume2 className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">
                  Pronunciation Focus
                </h3>
                <p className="text-yellow-700 text-sm">
                  Work on clarity and stress patterns rather than eliminating
                  your accent.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">
                  Practice Timing
                </h3>
                <p className="text-yellow-700 text-sm">
                  Familiarize yourself with each part's timing to manage your
                  responses effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Practice Your IELTS Speaking?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Use these strategies and understanding of the assessment criteria to
            focus your preparation and improve your speaking score.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/speaking/part-1">Practice Part 1</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-green hover:bg-white/10"
              asChild
            >
              <Link href="/speaking">Back to Speaking Overview</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
