import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Landmark,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Scale,
  Users,
  Globe2,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Politics & Governance Vocabulary for IELTS Speaking | Government & Democracy Terms",
  description:
    "Master politics and governance vocabulary for IELTS Speaking. Learn advanced terms like democracy, public policy, human rights with examples for Band 7-9.",
  keywords: [
    "IELTS politics vocabulary",
    "democracy IELTS",
    "public policy vocabulary",
    "human rights IELTS",
    "governance vocabulary",
    "Band 7-9 political terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Democracy",
    definition:
      "A system of government where citizens have the power to choose their representatives through free and fair elections, allowing them to participate in decision-making.",
    example:
      "Democracy allows citizens to participate in decision-making through voting and peaceful political expression.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Democratic system", "Popular government"],
    pronunciation: "/dɪˈmɑkrəsi/",
    icon: Users,
  },
  {
    term: "Public Policy",
    definition:
      "Government decisions and actions designed to address public issues and improve citizens' lives, including laws, regulations, and programs.",
    example:
      "Effective public policy can reduce crime rates and improve education quality in local communities.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Government policy", "Administrative decisions"],
    pronunciation: "/ˈpʌblɪk ˈpɑləsi/",
    icon: Landmark,
  },
  {
    term: "Human Rights",
    definition:
      "Fundamental rights and freedoms that belong to every person, which must be protected and addressed by international organizations and governments.",
    example:
      "Human rights violations must be addressed by global organizations to ensure equality and justice worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Civil rights", "Fundamental freedoms"],
    pronunciation: "/ˈhjumən raɪts/",
    icon: Scale,
  },
  {
    term: "International Relations",
    definition:
      "The study and practice of relationships between countries, including diplomacy, trade agreements, and cooperation on global issues.",
    example:
      "Good international relations are essential for trade and security cooperation between neighboring countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Diplomatic relations", "Foreign affairs"],
    pronunciation: "/ˌɪntərˈnæʃənəl rɪˈleɪʃənz/",
    icon: Globe2,
  },
  {
    term: "Corruption",
    definition:
      "Dishonest or fraudulent conduct by those in power, typically involving bribery, which undermines trust in government institutions.",
    example:
      "Corruption undermines trust in government institutions and prevents effective delivery of public services.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Political misconduct", "Government fraud"],
    pronunciation: "/kəˈrʌpʃən/",
    icon: Scale,
  },
  {
    term: "Freedom of Speech",
    definition:
      "The right to express opinions and ideas without fear of government retaliation, censorship, or legal sanction, fundamental in democratic societies.",
    example:
      "Freedom of speech is fundamental in a democratic society and must be protected from government censorship.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Free expression", "Speech rights"],
    pronunciation: "/ˈfridəm ʌv spitʃ/",
    icon: Users,
  },
];

const relatedTopics = [
  {
    id: "society-culture",
    title: "Society & Culture",
    description:
      "Explore how political systems affect society and cultural development",
    icon: "🏛️",
  },
  {
    id: "global-issues",
    title: "Global Issues",
    description:
      "Learn about international cooperation and global governance challenges",
    icon: "🌍",
  },
];

const studyTips = [
  {
    tip: "Stay Neutral",
    description:
      "Discuss political concepts objectively without expressing strong personal political opinions or biases.",
    icon: CheckCircle,
  },
  {
    tip: "Compare Systems",
    description:
      "Compare different government systems, democratic processes, or policy approaches between countries.",
    icon: Lightbulb,
  },
  {
    tip: "Current Examples",
    description:
      "Reference international news, treaties, or global cooperation examples to support your points.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "What do you think makes a good leader?",
    tips: "Discuss 'democracy', 'public policy' skills, and commitment to 'human rights'.",
  },
  {
    question: "How should countries work together?",
    tips: "Use 'international relations', cooperation on global issues, and diplomatic solutions.",
  },
  {
    question: "What are the problems with government?",
    tips: "Address 'corruption', lack of 'freedom of speech', or ineffective 'public policy'.",
  },
  {
    question: "Do you think voting is important?",
    tips: "Emphasize 'democracy', citizen participation, and government accountability.",
  },
];

export default function PoliticsGovernanceVocabularyPage() {
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
      <section className="bg-gradient-to-r from-gray-600 to-slate-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Landmark className="w-16 h-16 mx-auto mb-6 text-gray-200" />
            <h1 className="text-4xl font-bold mb-4">
              Politics & Governance Vocabulary
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Advanced politics and governance vocabulary for IELTS Speaking
              Band 7-9. Master terms related to democracy, public policy, human
              rights, and international relations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                6 Political Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Government Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Global Affairs
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
              Politics & Governance Terms
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
              className="bg-gray-600 h-2 rounded-full"
              style={{ width: "58.33%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 7 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search political terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
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
                          <IconComponent className="w-6 h-6 text-gray-600" />
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
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-gray-800 italic">"{vocab.example}"</p>
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
            Common IELTS Politics Questions
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
            Using Political Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{tip.tip}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Important Notice */}
        <section className="mb-12 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <h2 className="text-xl font-bold text-yellow-800 mb-3">
            Important IELTS Speaking Tip
          </h2>
          <p className="text-yellow-700">
            When discussing political topics in IELTS Speaking, remain objective
            and avoid expressing strong personal political opinions. Focus on
            describing systems, processes, and general principles rather than
            taking partisan positions. This shows mature thinking and helps you
            avoid potential bias from examiners.
          </p>
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
              <Link href="/speaking/vocabulary/economy-work">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Economy & Work
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/science-innovation">
                Next: Science & Innovation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-gray-600 to-slate-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Practice Government Topics
          </h2>
          <p className="text-gray-100 mb-6">
            Political and governance topics appear frequently in IELTS Part 3.
            Practice discussing leadership, government systems, and
            international cooperation objectively.
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
              <Link href="/speaking/vocabulary/science-innovation">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
