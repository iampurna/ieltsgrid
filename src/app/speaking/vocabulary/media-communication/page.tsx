// src/app/speaking/vocabulary/media-communication/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Smartphone,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Radio,
  Tv,
  Wifi,
  AlertTriangle,
  Globe2,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Media & Communication Vocabulary for IELTS Speaking | Digital & Social Media Terms",
  description:
    "Master media and communication vocabulary for IELTS Speaking. Learn advanced terms like social media influence, digital journalism, misinformation with examples for Band 7-9.",
  keywords: [
    "IELTS media vocabulary",
    "social media influence IELTS",
    "digital journalism vocabulary",
    "misinformation IELTS",
    "mass communication vocabulary",
    "Band 7-9 media terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Social Media Influence",
    definition:
      "The power of social media platforms to shape public opinion and behavior more than ever before, particularly affecting younger generations and political discourse.",
    example:
      "Social media influence shapes public opinion more than ever before, especially among younger generations who get news from platforms like Instagram and TikTok.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Digital influence", "Online impact", "Platform power"],
    pronunciation: "/ˈsoʊʃəl ˈmidiə ˈɪnfluəns/",
    icon: Smartphone,
  },
  {
    term: "Digital Journalism",
    definition:
      "News reporting and distribution through digital platforms and online media, allowing news to reach global audiences instantly and democratizing access to information.",
    example:
      "Digital journalism allows news to reach global audiences instantly, transforming how we consume information and making traditional newspapers less relevant.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Online journalism", "Internet news", "Web-based reporting"],
    pronunciation: "/ˈdɪdʒətəl ˈdʒɜrnəˌlɪzəm/",
    icon: Globe2,
  },
  {
    term: "Misinformation",
    definition:
      "False or inaccurate information that is spread without malicious intent but can lead to serious societal problems, public health risks, and political confusion.",
    example:
      "Misinformation on social media can lead to serious societal problems, as we saw during the pandemic with false health advice spreading rapidly.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["False information", "Fake news", "Disinformation"],
    pronunciation: "/ˌmɪsɪnfərˈmeɪʃən/",
    icon: AlertTriangle,
  },
  {
    term: "Freedom of Expression",
    definition:
      "The fundamental right to express opinions and ideas without fear of government retaliation or censorship, which is essential for a healthy democratic society.",
    example:
      "Freedom of expression is essential for a healthy democracy, but it must be balanced with preventing harmful misinformation from spreading.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Free speech", "Expression rights", "Communication freedom"],
    pronunciation: "/ˈfridəm ʌv ɪkˈsprɛʃən/",
    icon: Radio,
  },
  {
    term: "Mass Communication",
    definition:
      "The process of delivering information, ideas, and entertainment to large audiences through various media channels, helping spread information quickly across large populations.",
    example:
      "Mass communication helps spread information quickly across large populations, making it crucial during emergencies and public health crises.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Broadcasting", "Media transmission", "Public communication"],
    pronunciation: "/mæs kəˌmjunəˈkeɪʃən/",
    icon: Tv,
  },
  {
    term: "Censorship",
    definition:
      "Government or institutional control over media content that can restrict public awareness and limit access to important information in society.",
    example:
      "Government censorship of media can restrict public awareness and prevent citizens from accessing important information about current events.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Media control", "Information restriction", "Content blocking"],
    pronunciation: "/ˈsɛnsərˌʃɪp/",
    icon: AlertTriangle,
  },
];

const relatedTopics = [
  {
    id: "politics-governance",
    title: "Politics & Governance",
    description:
      "Explore how media influences political processes and democratic participation",
    icon: "🏛️",
  },
  {
    id: "technology",
    title: "Technology",
    description:
      "Learn about digital innovation and technological communication advances",
    icon: "💻",
  },
];

const studyTips = [
  {
    tip: "Current Examples",
    description:
      "Reference recent social media trends, news events, or digital platform changes to support your points.",
    icon: CheckCircle,
  },
  {
    tip: "Media Literacy",
    description:
      "Discuss the importance of critically evaluating information sources and checking facts before sharing.",
    icon: Lightbulb,
  },
  {
    tip: "Global Perspective",
    description:
      "Compare how different countries handle media freedom, censorship, and digital communication policies.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "How has social media changed communication?",
    tips: "Use 'social media influence', 'mass communication', and discuss both positive and negative impacts.",
  },
  {
    question: "Do you think the internet is a reliable source of information?",
    tips: "Address 'misinformation' challenges, 'digital journalism' benefits, and need for fact-checking.",
  },
  {
    question: "Should governments control what people see on the internet?",
    tips: "Balance 'freedom of expression' rights with preventing 'misinformation' and protecting society.",
  },
  {
    question: "How do you get your news and information?",
    tips: "Compare traditional media with 'digital journalism' and discuss reliability of different sources.",
  },
];

export default function MediaCommunicationVocabularyPage() {
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
      <section className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-pink-200" />
            <h1 className="text-4xl font-bold mb-4">
              Media & Communication Vocabulary
            </h1>
            <p className="text-xl text-pink-100 mb-6">
              Advanced media and communication vocabulary for IELTS Speaking
              Band 7-9. Master terms related to digital journalism, social media
              influence, information freedom, and modern communication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                6 Media Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Digital Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Current Issues
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
              Media & Communication Terms
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
              className="bg-pink-600 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 9 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search media terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
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
                          <IconComponent className="w-6 h-6 text-pink-600" />
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
                    <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                      <h4 className="font-semibold text-pink-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-pink-800 italic">"{vocab.example}"</p>
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
            Common IELTS Media Questions
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
            Using Media Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-pink-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/science-innovation">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Science & Innovation
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/global-issues">
                Next: Global Issues
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-pink-600 to-purple-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Practice Media Topics</h2>
          <p className="text-pink-100 mb-6">
            Media and communication topics appear frequently in IELTS Speaking
            Part 3. Practice discussing social media impact, news sources, and
            information reliability.
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
              <Link href="/speaking/vocabulary/global-issues">Next Topic</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
