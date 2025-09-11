import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Users,
  Award,
  Brain,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Education Vocabulary for IELTS Speaking | Academic Terms & Learning",
  description:
    "Master education vocabulary for IELTS Speaking. Learn advanced academic terms like curriculum, literacy, lifelong learning with examples for Band 7-9.",
  keywords: [
    "IELTS education vocabulary",
    "curriculum IELTS",
    "literacy rate vocabulary",
    "lifelong learning IELTS",
    "academic English vocabulary",
    "Band 7-9 education terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Curriculum",
    definition:
      "The subjects and content taught in a school or course of study, including the planned interaction of pupils with instructional content, materials, resources, and processes.",
    example:
      "I believe the school curriculum should include more practical life skills, not just academic subjects.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Syllabus", "Course content", "Educational program"],
    pronunciation: "/kəˈrɪkjələm/",
    icon: BookOpen,
  },
  {
    term: "Literacy Rate",
    definition:
      "The percentage of people in a population who can read and write at a specified age, typically used as an indicator of educational development in a country.",
    example:
      "Improving the literacy rate is essential for the country's economic development and social progress.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Reading proficiency", "Educational attainment"],
    pronunciation: "/ˈlɪtərəsi reɪt/",
    icon: BookOpen,
  },
  {
    term: "Lifelong Learning",
    definition:
      "The ongoing, voluntary pursuit of knowledge and skills throughout an individual's life, both for personal and professional development.",
    example:
      "Lifelong learning allows adults to update their skills and stay competitive in the job market.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Continuous education",
      "Adult learning",
      "Professional development",
    ],
    pronunciation: "/ˈlaɪflɔːŋ ˈlɜːrnɪŋ/",
    icon: Brain,
  },
  {
    term: "Vocational Training",
    definition:
      "Education that prepares people for specific trades, crafts, and careers at various levels, focusing on practical skills rather than academic theory.",
    example:
      "Vocational training can help young people gain employable skills quickly and enter the workforce sooner.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Technical education", "Trade school", "Skills training"],
    pronunciation: "/voʊˈkeɪʃənəl ˈtreɪnɪŋ/",
    icon: Award,
  },
  {
    term: "Standardized Testing",
    definition:
      "Assessment method where all students answer the same questions under similar conditions and are scored in a consistent manner to measure educational achievement.",
    example:
      "Standardized testing often fails to measure creativity and critical thinking skills in students.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Uniform assessment", "Standardized evaluation"],
    pronunciation: "/ˈstændərˌdaɪzd ˈtestɪŋ/",
    icon: Award,
  },
  {
    term: "Inclusive Education",
    definition:
      "An educational approach that ensures all children, including those with disabilities or special needs, can learn together in mainstream schools with appropriate support.",
    example:
      "Inclusive education ensures that children with disabilities can learn alongside their peers in regular classrooms.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Integrated learning", "Special needs education"],
    pronunciation: "/ɪnˈklusɪv ˌedʒuˈkeɪʃən/",
    icon: Users,
  },
];

const relatedTopics = [
  {
    id: "society-culture",
    title: "Society & Culture",
    description:
      "Explore how education shapes society and cultural development",
    icon: "🏛️",
  },
  {
    id: "economy-work",
    title: "Economy & Work",
    description:
      "Learn about the relationship between education and employment",
    icon: "💼",
  },
];

const studyTips = [
  {
    tip: "Personal Experience",
    description:
      "Draw from your own educational experiences to make answers more authentic and engaging.",
    icon: CheckCircle,
  },
  {
    tip: "Compare Systems",
    description:
      "Compare education systems between countries to demonstrate broader knowledge.",
    icon: Lightbulb,
  },
  {
    tip: "Future Trends",
    description:
      "Discuss how technology and online learning are changing education globally.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "How has education changed in your country?",
    tips: "Discuss 'curriculum' changes, 'standardized testing', and 'technology integration'.",
  },
  {
    question: "What makes a good teacher?",
    tips: "Use terms like 'inclusive education', 'lifelong learning', and teaching methodologies.",
  },
  {
    question: "Should university education be free?",
    tips: "Reference 'literacy rates', 'vocational training' alternatives, and economic benefits.",
  },
  {
    question: "How important is learning a second language?",
    tips: "Connect to 'lifelong learning', global communication, and career opportunities.",
  },
];

const pronunciationTips = [
  {
    term: "Curriculum",
    tip: "Stress on the second syllable: cur-RIC-u-lum",
    common_mistake: "Don't stress the first syllable",
  },
  {
    term: "Vocational",
    tip: "Stress on the second syllable: vo-CA-tion-al",
    common_mistake: "Don't pronounce as 'vacation-al'",
  },
];

export default function EducationVocabularyPage() {
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
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl font-bold mb-4">Education Vocabulary</h1>
            <p className="text-xl text-purple-100 mb-6">
              Advanced education vocabulary for IELTS Speaking Band 7-9. Master
              academic terms related to curriculum, literacy, learning systems,
              and educational development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                6 Academic Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                IELTS Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Pronunciation Guide
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
              Education Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>6 terms</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 3 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search education terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                          <IconComponent className="w-6 h-6 text-purple-600" />
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
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-purple-800 italic">
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

        {/* Pronunciation Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Pronunciation Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pronunciationTips.map((tip, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tip.term}
                </h3>
                <div className="space-y-2">
                  <p className="text-green-700 text-sm">
                    <strong>Tip:</strong> {tip.tip}
                  </p>
                  <p className="text-red-700 text-sm">
                    <strong>Avoid:</strong> {tip.common_mistake}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Common IELTS Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Common IELTS Education Questions
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
            How to Use Education Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/environment">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Environment
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/health-lifestyle">
                Next: Health & Lifestyle
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Practice Education Topics</h2>
          <p className="text-purple-100 mb-6">
            Education is frequently tested in IELTS Speaking. Practice
            discussing school systems, teaching methods, and learning
            preferences using these academic terms.
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
              <Link href="/speaking/vocabulary/health-lifestyle">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
