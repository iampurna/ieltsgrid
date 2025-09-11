import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Users,
  Home,
  Globe,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Society & Culture Vocabulary for IELTS Speaking | Social Issues & Cultural Terms",
  description:
    "Master society and culture vocabulary for IELTS Speaking. Learn advanced terms like social inequality, cultural heritage, urbanization with examples for Band 7-9.",
  keywords: [
    "IELTS society vocabulary",
    "cultural heritage IELTS",
    "social inequality vocabulary",
    "urbanization IELTS",
    "multiculturalism vocabulary",
    "Band 7-9 society terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Social Inequality",
    definition:
      "The unequal distribution of resources, opportunities, and privileges within a society, often leading to unrest and dissatisfaction among citizens.",
    example:
      "Social inequality can lead to unrest and dissatisfaction among citizens who feel they lack equal opportunities.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Social disparity", "Class divide"],
    pronunciation: "/ˈsoʊʃəl ˌɪnɪˈkwɑləti/",
    icon: Users,
  },
  {
    term: "Cultural Heritage",
    definition:
      "The legacy of physical artifacts and intangible attributes inherited from past generations, including traditions, customs, and historical sites.",
    example:
      "Tourism can both preserve and threaten cultural heritage, depending on how it is managed.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Cultural legacy", "Traditional heritage"],
    pronunciation: "/ˈkʌltʃərəl ˈherɪtɪdʒ/",
    icon: Building,
  },
  {
    term: "Urbanization",
    definition:
      "The process by which rural areas become urban through population growth and migration from countryside to cities.",
    example:
      "Rapid urbanization often puts pressure on housing and infrastructure in developing countries.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Urban development", "City growth"],
    pronunciation: "/ˌɜrbənəˈzeɪʃən/",
    icon: Building,
  },
  {
    term: "Multiculturalism",
    definition:
      "The coexistence of diverse cultures within a society, where different cultural groups maintain their distinct identities while participating in the larger society.",
    example:
      "Multiculturalism enriches society by exposing people to different perspectives and traditions.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Cultural diversity", "Cultural pluralism"],
    pronunciation: "/ˌmʌltiˈkʌltʃərəˌlɪzəm/",
    icon: Globe,
  },
  {
    term: "Migration",
    definition:
      "The movement of people from one place to another, typically from rural to urban areas, affecting city planning and services.",
    example:
      "Migration from rural to urban areas affects city planning and services in many developing nations.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Population movement", "Relocation"],
    pronunciation: "/maɪˈgreɪʃən/",
    icon: Home,
  },
  {
    term: "Generational Gap",
    definition:
      "Differences in values, attitudes, and lifestyle choices between people of different age groups, particularly between parents and children.",
    example:
      "The generational gap can lead to differences in values and lifestyle choices between parents and children.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Generation divide", "Intergenerational differences"],
    pronunciation: "/ˌdʒenəˈreɪʃənəl gæp/",
    icon: Users,
  },
  {
    term: "Gender Roles",
    definition:
      "Socially constructed expectations about how men and women should behave, which are changing as more women join the workforce.",
    example:
      "Traditional gender roles are changing as more women join the workforce and pursue leadership positions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Gender expectations", "Social roles"],
    pronunciation: "/ˈdʒendər roʊlz/",
    icon: Users,
  },
];

const relatedTopics = [
  {
    id: "global-issues",
    title: "Global Issues",
    description:
      "Explore international social challenges and development goals",
    icon: "🌍",
  },
  {
    id: "politics-governance",
    title: "Politics & Governance",
    description: "Learn about government policies and democratic systems",
    icon: "🏛️",
  },
];

const studyTips = [
  {
    tip: "Current Examples",
    description:
      "Reference recent social movements, cultural events, or demographic changes in your country.",
    icon: CheckCircle,
  },
  {
    tip: "Compare Cultures",
    description:
      "Discuss differences between traditional and modern values, or between different countries.",
    icon: Lightbulb,
  },
  {
    tip: "Personal Impact",
    description:
      "Explain how social changes affect your own life and community experiences.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "How has society changed in your country?",
    tips: "Discuss 'urbanization', 'gender roles', and 'generational gap' changes over time.",
  },
  {
    question: "What are the benefits of living in a multicultural society?",
    tips: "Use 'multiculturalism', 'cultural heritage', and diversity advantages.",
  },
  {
    question: "Do you think there are social problems in your country?",
    tips: "Address 'social inequality', 'migration' challenges, and potential solutions.",
  },
  {
    question: "How do different generations view life differently?",
    tips: "Explore 'generational gap', changing 'gender roles', and evolving values.",
  },
];

export default function SocietyCultureVocabularyPage() {
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
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building className="w-16 h-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl font-bold mb-4">
              Society & Culture Vocabulary
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Advanced society and culture vocabulary for IELTS Speaking Band
              7-9. Master terms related to social issues, cultural heritage,
              multiculturalism, and community life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                7 Social Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Cultural Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Modern Issues
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
              Society & Culture Terms
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
              className="bg-orange-600 h-2 rounded-full"
              style={{ width: "41.66%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 5 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search society terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                          <IconComponent className="w-6 h-6 text-orange-600" />
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
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-orange-800 italic">
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
            Common IELTS Society Questions
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
            Using Society Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-orange-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/health-lifestyle">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Health & Lifestyle
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/economy-work">
                Next: Economy & Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-orange-600 to-red-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Practice Society Topics</h2>
          <p className="text-orange-100 mb-6">
            Society and culture topics frequently appear in IELTS Speaking Part
            3. Practice discussing social changes, cultural differences, and
            community issues.
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
              <Link href="/speaking/vocabulary/economy-work">Next Topic</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
