import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  TreePine,
  Recycle,
  Sun,
  Heart,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Environment Vocabulary for IELTS Speaking | Climate Change & Sustainability",
  description:
    "Master environment vocabulary for IELTS Speaking. Learn advanced terms like sustainability, climate change, renewable energy with examples for Band 7-9.",
  keywords: [
    "IELTS environment vocabulary",
    "sustainability IELTS",
    "climate change vocabulary",
    "renewable energy IELTS",
    "conservation vocabulary",
    "Band 7-9 environment terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Sustainability",
    definition:
      "The practice of using resources in a way that meets current needs without compromising the ability of future generations to meet their own needs.",
    example:
      "Sustainability should be at the core of all business operations today to ensure long-term environmental protection.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Environmental responsibility", "Ecological balance"],
    pronunciation: "/səˌsteɪnəˈbɪləti/",
    icon: Recycle,
  },
  {
    term: "Climate Change",
    definition:
      "Long-term changes in global or regional climate patterns, particularly the warming that has occurred since the mid-20th century due to increased levels of greenhouse gases.",
    example:
      "Climate change is one of the most pressing issues of our time, requiring immediate global action.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Global warming", "Climate crisis"],
    pronunciation: "/ˈklaɪmət tʃeɪndʒ/",
    icon: Heart,
  },
  {
    term: "Renewable Energy",
    definition:
      "Energy that comes from natural sources that are constantly replenished, such as solar, wind, hydroelectric, and geothermal power.",
    example:
      "Investing in renewable energy reduces dependency on fossil fuels and helps combat climate change.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Clean energy", "Green energy", "Sustainable energy"],
    pronunciation: "/rɪˈnuːəbəl ˈenərdʒi/",
    icon: Sun,
  },
  {
    term: "Deforestation",
    definition:
      "The permanent removal of trees and forest cover, typically to clear land for agriculture, urban development, or logging.",
    example:
      "Deforestation contributes significantly to the loss of biodiversity and increases carbon dioxide levels in the atmosphere.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Forest clearance", "Tree removal"],
    pronunciation: "/ˌdiːfɔːrɪˈsteɪʃən/",
    icon: TreePine,
  },
  {
    term: "Biodiversity",
    definition:
      "The variety of life in the world or in a particular habitat, encompassing the diversity of species, ecosystems, and genetic variation within species.",
    example:
      "Protecting biodiversity is essential for maintaining a healthy ecosystem and ensuring the survival of all species.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Biological diversity", "Ecological variety"],
    pronunciation: "/ˌbaɪoʊdaɪˈvɜːrsəti/",
    icon: Heart,
  },
  {
    term: "Conservation",
    definition:
      "The protection, preservation, and careful management of natural resources and wildlife to prevent their depletion or extinction.",
    example:
      "Conservation efforts help preserve endangered species and maintain the balance of natural ecosystems.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Preservation", "Protection", "Environmental stewardship"],
    pronunciation: "/ˌkɑːnsərˈveɪʃən/",
    icon: TreePine,
  },
  {
    term: "Carbon Emissions",
    definition:
      "The release of carbon dioxide and other greenhouse gases into the atmosphere, primarily from burning fossil fuels and industrial processes.",
    example:
      "Governments should implement policies to reduce carbon emissions and achieve net-zero targets by 2050.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Greenhouse gas emissions", "Carbon footprint"],
    pronunciation: "/ˈkɑːrbən ɪˈmɪʃənz/",
    icon: Heart,
  },
];

const relatedTopics = [
  {
    id: "global-issues",
    title: "Global Issues",
    description: "Explore international challenges and sustainable development",
    icon: "🌍",
  },
  {
    id: "science-innovation",
    title: "Science & Innovation",
    description: "Learn about environmental research and green technology",
    icon: "🔬",
  },
];

const studyTips = [
  {
    tip: "Current Events",
    description:
      "Reference recent environmental news, agreements, or initiatives when using these terms.",
    icon: CheckCircle,
  },
  {
    tip: "Personal Actions",
    description:
      "Discuss what individuals can do to help the environment using these vocabulary terms.",
    icon: Lightbulb,
  },
  {
    tip: "Government Policies",
    description:
      "Talk about what governments should do to address environmental challenges.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "What environmental problems does your country face?",
    tips: "Use terms like 'pollution', 'deforestation', 'carbon emissions' to describe specific issues.",
  },
  {
    question: "How can individuals help protect the environment?",
    tips: "Discuss 'conservation', 'renewable energy', and 'sustainability' in daily life.",
  },
  {
    question: "Do you think climate change is a serious problem?",
    tips: "Reference 'biodiversity loss', 'global warming effects', and need for action.",
  },
];

export default function EnvironmentVocabularyPage() {
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
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl font-bold mb-4">Environment Vocabulary</h1>
            <p className="text-xl text-green-100 mb-6">
              Advanced environment vocabulary for IELTS Speaking Band 7-9.
              Master terms related to sustainability, climate change,
              conservation, and environmental protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                7 Advanced Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                IELTS Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Current Topics
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
              Environment Terms
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
              className="bg-green-600 h-2 rounded-full"
              style={{ width: "16.66%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 2 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search environment terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                          <IconComponent className="w-6 h-6 text-green-600" />
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
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-green-800 italic">"{vocab.example}"</p>
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
            Common IELTS Environment Questions
          </h2>
          <div className="space-y-4">
            {commonQuestions.map((q, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  "{q.question}"
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Vocabulary Tip:</strong> {q.tips}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How to Use Environment Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-green-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/technology">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Technology
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/education">
                Next: Education
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Practice Environment Topics
          </h2>
          <p className="text-green-100 mb-6">
            Environment is a common IELTS topic. Practice discussing climate
            change, pollution, and conservation using these advanced terms.
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
              <Link href="/speaking/vocabulary/education">Next Topic</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
