import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  TrendingUp,
  Building2,
  Globe,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Economy & Work Vocabulary for IELTS Speaking | Business & Employment Terms",
  description:
    "Master economy and work vocabulary for IELTS Speaking. Learn advanced terms like globalization, entrepreneurship, remote working with examples for Band 7-9.",
  keywords: [
    "IELTS economy vocabulary",
    "globalization IELTS",
    "entrepreneurship vocabulary",
    "remote working IELTS",
    "work-life balance vocabulary",
    "Band 7-9 business terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Globalization",
    definition:
      "The process by which businesses and other organizations develop international influence or operate on an international scale, creating more business opportunities.",
    example:
      "Globalization has increased competition and created more business opportunities for companies worldwide.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["International integration", "Global expansion"],
    pronunciation: "/ˌgloʊbələˈzeɪʃən/",
    icon: Globe,
  },
  {
    term: "Entrepreneurship",
    definition:
      "The activity of setting up a business or businesses, taking on financial risks in the hope of profit, and encouraging innovation and economic growth.",
    example:
      "Entrepreneurship encourages innovation and economic growth by creating new businesses and job opportunities.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Business innovation", "Startup culture"],
    pronunciation: "/ˌɑntrəprəˈnɜrʃɪp/",
    icon: TrendingUp,
  },
  {
    term: "Remote Working",
    definition:
      "The practice of working outside of a conventional office environment, typically from home or other locations, which has become more common since the pandemic.",
    example:
      "Remote working has become more common since the pandemic, changing traditional office dynamics permanently.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Teleworking", "Home-based work"],
    pronunciation: "/rɪˈmoʊt ˈwɜrkɪŋ/",
    icon: Briefcase,
  },
  {
    term: "Work-life Balance",
    definition:
      "The equilibrium between time and effort spent on work and personal life, which is essential for mental well-being and overall life satisfaction.",
    example:
      "Maintaining a work-life balance is essential for mental well-being and preventing employee burnout.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Life-work harmony", "Personal-professional balance"],
    pronunciation: "/wɜrk laɪf ˈbæləns/",
    icon: Briefcase,
  },
  {
    term: "Economic Downturn",
    definition:
      "A period of reduced economic activity, often leading to higher unemployment rates and decreased consumer spending.",
    example:
      "An economic downturn often leads to higher unemployment rates and reduced consumer confidence.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Recession", "Economic decline"],
    pronunciation: "/ˌikəˈnɑmɪk ˈdaʊnˌtɜrn/",
    icon: TrendingUp,
  },
  {
    term: "Productivity",
    definition:
      "The effectiveness of productive effort, especially in industry, measured in terms of the rate of output per unit of input.",
    example:
      "Investing in employee training can improve overall productivity and company performance significantly.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Efficiency", "Output effectiveness"],
    pronunciation: "/ˌproʊdʌkˈtɪvəti/",
    icon: TrendingUp,
  },
  {
    term: "Inflation",
    definition:
      "A general increase in prices and fall in the purchasing value of money, which reduces the purchasing power of ordinary citizens.",
    example:
      "High inflation reduces the purchasing power of ordinary citizens and affects their quality of life.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Price increase", "Currency devaluation"],
    pronunciation: "/ɪnˈfleɪʃən/",
    icon: TrendingUp,
  },
];

const relatedTopics = [
  {
    id: "society-culture",
    title: "Society & Culture",
    description:
      "Explore how work culture affects society and social structures",
    icon: "🏛️",
  },
  {
    id: "global-issues",
    title: "Global Issues",
    description:
      "Learn about international economic challenges and development",
    icon: "🌍",
  },
];

const studyTips = [
  {
    tip: "Personal Experience",
    description:
      "Share examples from your own work experience or career aspirations to make answers authentic.",
    icon: CheckCircle,
  },
  {
    tip: "Economic Trends",
    description:
      "Reference current economic trends, technology impacts, or post-pandemic changes in work culture.",
    icon: Lightbulb,
  },
  {
    tip: "Compare Systems",
    description:
      "Discuss differences in work culture, business practices, or economic systems between countries.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "What job would you like to do in the future?",
    tips: "Use 'entrepreneurship', 'work-life balance', and career 'productivity' goals.",
  },
  {
    question: "How has work changed in recent years?",
    tips: "Discuss 'remote working', 'globalization' effects, and technology impacts.",
  },
  {
    question: "What are the economic challenges in your country?",
    tips: "Address 'inflation', 'economic downturn', and employment issues.",
  },
  {
    question: "Do you think money is important?",
    tips: "Balance financial needs with 'work-life balance' and personal fulfillment.",
  },
];

export default function EconomyWorkVocabularyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link
              href="/speaking/vocabulary"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Vocabulary
            </Link>
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl font-bold mb-4">
              Economy & Work Vocabulary
            </h1>
            <p className="text-xl text-indigo-100 mb-6">
              Advanced economy and work vocabulary for IELTS Speaking Band 7-9.
              Master terms related to business, globalization, entrepreneurship,
              and work-life balance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                7 Business Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Economic Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Work Culture
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Progress and Stats */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Economy & Work Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>7 terms</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 6 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search business terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Vocabulary Terms */}
        <section className="mb-12">
          <div className="space-y-6">
            {vocabularyTerms.map((vocab, index) => {
              const IconComponent = vocab.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="space-y-4">
                    {/* Term Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className="w-6 h-6 text-indigo-600" />
                          <h3 className="text-2xl font-bold text-gray-900">
                            {vocab.term}
                          </h3>
                          <Badge variant="primary" size="sm">
                            {vocab.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Volume2 className="w-4 h-4" />
                            {vocab.pronunciation}
                          </span>
                          <span>• {vocab.partOfSpeech}</span>
                        </div>
                      </div>
                    </div>

                    {/* Definition */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Definition:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {vocab.definition}
                      </p>
                    </div>

                    {/* Example */}
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                      <h4 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-indigo-800 italic">
                        "{vocab.example}"
                      </p>
                    </div>

                    {/* Synonyms */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Related Terms:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {vocab.synonyms.map((synonym, synIndex) => (
                          <Badge key={synIndex} variant="secondary" size="sm">
                            {synonym}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Common IELTS Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Common IELTS Work & Economy Questions
          </h2>
          <div className="space-y-4">
            {commonQuestions.map((q, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  "{q.question}"
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Vocabulary Strategy:</strong> {q.tips}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Using Business Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{tip.tip}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Related Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Related Vocabulary Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedTopics.map((topic, index) => (
              <Card key={index} hover className="p-6">
                <Link href={`/speaking/vocabulary/${topic.id}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{topic.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section>
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/speaking/vocabulary/society-culture">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Society & Culture
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/politics-governance">
                Next: Politics & Governance
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Practice Work & Economy Topics
          </h2>
          <p className="text-indigo-100 mb-6">
            Work and business topics are very common in IELTS Speaking. Practice
            discussing career goals, economic trends, and workplace changes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/speaking/part-1">Practice Part 1 Questions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-green hover:bg-white/10"
              asChild
            >
              <Link href="/speaking/vocabulary/politics-governance">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
