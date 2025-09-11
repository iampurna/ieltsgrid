import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Users,
  Home,
  TreePine,
  Target,
  HeartHandshakeIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Global Issues Vocabulary for IELTS Speaking | International Development & World Problems",
  description:
    "Master global issues vocabulary for IELTS Speaking. Learn advanced terms like poverty reduction, refugee crisis, climate migration, sustainable development with examples for Band 7-9.",
  keywords: [
    "IELTS global issues vocabulary",
    "poverty reduction IELTS",
    "refugee crisis vocabulary",
    "climate migration IELTS",
    "sustainable development vocabulary",
    "Band 7-9 global terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Poverty Reduction",
    definition:
      "Coordinated efforts and strategies to decrease the number of people living in extreme poverty through education, economic development, healthcare access, and international cooperation.",
    example:
      "Investing in education is key to poverty reduction and creating sustainable economic development in developing countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Poverty alleviation",
      "Economic development",
      "Poverty eradication",
    ],
    pronunciation: "/ˈpɑvərti rɪˈdʌkʃən/",
    icon: Users,
  },
  {
    term: "Refugee Crisis",
    definition:
      "Large-scale displacement of people forced to flee their home countries due to war, persecution, natural disasters, or political instability, requiring international cooperation and humanitarian support.",
    example:
      "The refugee crisis requires international cooperation for effective solutions and long-term humanitarian support for displaced populations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Displacement crisis",
      "Migration emergency",
      "Humanitarian crisis",
    ],
    pronunciation: "/ˌrefjʊˈdʒi ˈkraɪsəs/",
    icon: Home,
  },
  {
    term: "Climate Migration",
    definition:
      "Population movement caused by environmental changes, climate-related disasters, and rising sea levels, which is becoming increasingly common due to global warming effects.",
    example:
      "Climate migration is becoming more common due to rising sea levels and extreme weather events affecting coastal communities worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Environmental migration",
      "Climate displacement",
      "Climate-induced migration",
    ],
    pronunciation: "/ˈklaɪmət maɪˈgreɪʃən/",
    icon: Globe,
  },
  {
    term: "International Cooperation",
    definition:
      "Collaboration between countries and international organizations to tackle global challenges like pandemics, climate change, and economic crises that require coordinated responses.",
    example:
      "International cooperation is vital for tackling global issues like pandemics and climate change that affect all countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Global collaboration",
      "Multilateral cooperation",
      "International partnership",
    ],
    pronunciation: "/ˌɪntərˈnæʃənəl koʊˌɑpəˈreɪʃən/",
    icon: HeartHandshakeIcon,
  },
  {
    term: "Sustainable Development Goals (SDGs)",
    definition:
      "A collection of 17 global goals adopted by the United Nations to address worldwide challenges including poverty, inequality, climate change, and peace, requiring commitment from both governments and citizens.",
    example:
      "Achieving the SDGs requires commitment from both governments and citizens to address inequality and environmental challenges globally.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "UN Global Goals",
      "Development targets",
      "Sustainability objectives",
    ],
    pronunciation: "/səˈsteɪnəbəl dɪˈveləpmənt goʊlz/",
    icon: Target,
  },
];

const relatedTopics = [
  {
    id: "environment",
    title: "Environment",
    description:
      "Explore climate change impacts and environmental conservation efforts",
    icon: "🌱",
  },
  {
    id: "politics-governance",
    title: "Politics & Governance",
    description:
      "Learn about international relations and global governance systems",
    icon: "🏛️",
  },
];

const studyTips = [
  {
    tip: "UN Examples",
    description:
      "Reference United Nations initiatives, international treaties, or global cooperation examples like Paris Agreement.",
    icon: CheckCircle,
  },
  {
    tip: "Statistical Data",
    description:
      "Mention global statistics about poverty, displacement, or climate impacts to support your arguments.",
    icon: Lightbulb,
  },
  {
    tip: "Solution-Focused",
    description:
      "Discuss both problems and potential solutions, showing awareness of complex global challenges.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "What are the biggest problems facing the world today?",
    tips: "Discuss 'climate migration', 'refugee crisis', 'poverty reduction' needs, and global cooperation challenges.",
  },
  {
    question: "How can countries work together to solve global problems?",
    tips: "Use 'international cooperation', 'sustainable development goals', and examples of successful partnerships.",
  },
  {
    question: "Do you think rich countries should help poor countries?",
    tips: "Address 'poverty reduction', development aid, and moral responsibilities of wealthy nations.",
  },
  {
    question: "What will be the consequences of climate change?",
    tips: "Connect to 'climate migration', 'refugee crisis', and need for 'international cooperation' on solutions.",
  },
];

const globalStatistics = [
  {
    statistic: "689 million",
    description: "People living in extreme poverty worldwide (2017)",
    source: "World Bank",
  },
  {
    statistic: "82.4 million",
    description: "Forcibly displaced people globally (2020)",
    source: "UNHCR",
  },
  {
    statistic: "17 Goals",
    description: "UN Sustainable Development Goals to achieve by 2030",
    source: "United Nations",
  },
];

export default function GlobalIssuesVocabularyPage() {
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
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
            <h1 className="text-4xl font-bold mb-4">
              Global Issues Vocabulary
            </h1>
            <p className="text-xl text-emerald-100 mb-6">
              Advanced global issues vocabulary for IELTS Speaking Band 7-9.
              Master terms related to international development, poverty
              reduction, climate migration, and sustainable development goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                5 Global Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                UN Goals
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                World Statistics
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
              Global Issues Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>5 terms</span>
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
              className="bg-emerald-600 h-2 rounded-full"
              style={{ width: "83.33%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 10 of 12</p>
        </div>

        {/* Global Statistics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Key Global Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {globalStatistics.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="text-3xl font-bold text-emerald-600 mb-2">
                  {stat.statistic}
                </h3>
                <p className="text-gray-700 mb-2">{stat.description}</p>
                <p className="text-sm text-gray-500">Source: {stat.source}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search global issues terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                          <IconComponent className="w-6 h-6 text-emerald-600" />
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
                    <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                      <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-emerald-800 italic">
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
            Common IELTS Global Issues Questions
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
            Using Global Issues Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{tip.tip}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* UN Sustainable Development Goals */}
        <section className="mb-12 bg-emerald-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
            UN Sustainable Development Goals (Key Examples)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-700">
                Goal 1: No Poverty
              </h3>
              <p className="text-sm text-gray-600">
                End poverty in all its forms everywhere
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-700">
                Goal 13: Climate Action
              </h3>
              <p className="text-sm text-gray-600">
                Take urgent action to combat climate change
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-700">
                Goal 16: Peace & Justice
              </h3>
              <p className="text-sm text-gray-600">
                Promote peaceful and inclusive societies
              </p>
            </div>
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
              <Link href="/speaking/vocabulary/media-communication">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Media & Communication
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/travel-holidays">
                Next: Travel & Holidays
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Practice Global Issues Topics
          </h2>
          <p className="text-emerald-100 mb-6">
            Global challenges are frequently discussed in IELTS Speaking Part 3.
            Practice discussing world problems, international cooperation, and
            sustainable solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/speaking/part-3">Practice Part 3 Questions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-green hover:bg-white/10"
              asChild
            >
              <Link href="/speaking/vocabulary/travel-holidays">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
