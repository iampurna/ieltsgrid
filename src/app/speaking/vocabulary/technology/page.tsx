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
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Technology Vocabulary for IELTS Speaking | Digital Innovation Terms",
  description:
    "Master advanced technology vocabulary for IELTS Speaking. Learn terms like digital divide, innovation, cybersecurity with examples for Band 7-9.",
  keywords: [
    "IELTS technology vocabulary",
    "digital divide IELTS",
    "innovation vocabulary",
    "cybersecurity IELTS",
    "automation vocabulary",
    "Band 7-9 technology terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Digital Divide",
    definition:
      "The gap between urban and rural areas, or between developed and developing regions, in terms of access to digital technology and internet connectivity.",
    example:
      "The digital divide between urban and rural areas is still a major challenge in developing countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Technology gap", "Digital inequality"],
    pronunciation: "/ˈdɪdʒɪtəl dɪˈvaɪd/",
  },
  {
    term: "Innovation",
    definition:
      "The process of creating new ideas, products, or methods that improve existing systems or solve problems in novel ways.",
    example:
      "Innovation drives economic growth and improves living standards across all sectors of society.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Invention", "Breakthrough", "Advancement"],
    pronunciation: "/ˌɪnəˈveɪʃən/",
  },
  {
    term: "Cybersecurity",
    definition:
      "The practice of protecting computer systems, networks, and digital data from unauthorized access, attacks, or damage.",
    example:
      "Cybersecurity is crucial as more personal data is stored online and cyber threats become more sophisticated.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Digital security", "Information security"],
    pronunciation: "/ˈsaɪbərsɪˌkjʊrɪti/",
  },
  {
    term: "Automation",
    definition:
      "The use of technology to perform tasks without human intervention, often replacing manual labor with machine operations.",
    example:
      "Automation can increase productivity but may also reduce employment opportunities in certain industries.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Mechanization", "Computerization"],
    pronunciation: "/ˌɔːtəˈmeɪʃən/",
  },
  {
    term: "Virtual Reality",
    definition:
      "Computer-generated simulation of a three-dimensional environment that users can interact with using special equipment.",
    example:
      "Virtual reality can transform education by providing immersive learning experiences that were previously impossible.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["VR", "Simulated reality"],
    pronunciation: "/ˈvɜːrtʃuəl riˈæləti/",
  },
  {
    term: "Data Privacy",
    definition:
      "The protection of personal information from unauthorized access, use, or disclosure, particularly important in the digital age.",
    example:
      "People are increasingly concerned about data privacy on social media platforms and demand better protection.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Information privacy", "Data protection"],
    pronunciation: "/ˈdeɪtə ˈprɪvəsi/",
  },
];

const relatedTopics = [
  {
    id: "science-innovation",
    title: "Science & Innovation",
    description: "Explore scientific breakthroughs and research vocabulary",
    icon: "🔬",
  },
  {
    id: "media-communication",
    title: "Media & Communication",
    description: "Learn about digital journalism and social media terms",
    icon: "📱",
  },
];

const studyTips = [
  {
    tip: "Use in Context",
    description:
      "Practice using these terms when discussing modern life, social media, or technological changes.",
    icon: CheckCircle,
  },
  {
    tip: "Connect Ideas",
    description:
      "Link technology vocabulary to other topics like education, work, or social issues.",
    icon: Lightbulb,
  },
  {
    tip: "Real Examples",
    description:
      "Mention specific companies, apps, or technologies when using these terms.",
    icon: Star,
  },
];

export default function TechnologyVocabularyPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Technology Vocabulary</h1>
            <p className="text-xl text-blue-100 mb-6">
              Advanced technology vocabulary for IELTS Speaking Band 7-9. Master
              terms related to digital innovation, cybersecurity, and modern
              technological trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                6 Advanced Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                With Examples
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
              Technology Terms
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
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: "8.33%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 1 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Vocabulary Terms */}
        <section className="mb-12">
          <div className="space-y-6">
            {vocabularyTerms.map((vocab, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-4">
                  {/* Term Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
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
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Example in IELTS Speaking:
                    </h4>
                    <p className="text-blue-800 italic">"{vocab.example}"</p>
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
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How to Use Technology Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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
            <Button variant="outline" disabled>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Topic
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/environment">
                Next: Environment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Practice?</h2>
          <p className="text-purple-100 mb-6">
            Use these technology terms in your speaking practice. Try describing
            how technology has changed your life or discuss the impact of social
            media.
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
              <Link href="/speaking/vocabulary/environment">Next Topic</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
