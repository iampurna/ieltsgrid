import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Brain,
  Activity,
  Shield,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Health & Lifestyle Vocabulary for IELTS Speaking | Medical & Wellness Terms",
  description:
    "Master health and lifestyle vocabulary for IELTS Speaking. Learn advanced terms like mental health, preventive medicine, healthcare access with examples for Band 7-9.",
  keywords: [
    "IELTS health vocabulary",
    "mental health IELTS",
    "preventive medicine vocabulary",
    "healthcare access IELTS",
    "wellness vocabulary",
    "Band 7-9 health terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Mental Health",
    definition:
      "A person's psychological and emotional well-being, including their ability to handle stress, relate to others, and make healthy choices.",
    example:
      "Mental health awareness is increasingly recognized as equally important as physical health in modern healthcare systems.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Psychological well-being", "Emotional health"],
    pronunciation: "/ˈmentəl helθ/",
    icon: Brain,
  },
  {
    term: "Preventive Medicine",
    definition:
      "Healthcare practices focused on preventing diseases and health problems before they occur, rather than treating them after diagnosis.",
    example:
      "Preventive medicine helps reduce the burden on healthcare systems by stopping diseases before they develop.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Preventive healthcare", "Health prevention"],
    pronunciation: "/prɪˈventɪv ˈmedəsən/",
    icon: Shield,
  },
  {
    term: "Healthcare Access",
    definition:
      "The ability of individuals to obtain needed medical services, including availability, affordability, and geographical proximity to healthcare facilities.",
    example:
      "Improving healthcare access should be a priority for developing countries to ensure equal treatment opportunities.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Medical accessibility", "Healthcare availability"],
    pronunciation: "/ˈhelθker ˈækses/",
    icon: Heart,
  },
  {
    term: "Sedentary Lifestyle",
    definition:
      "A way of living that involves little or no physical activity, typically characterized by prolonged sitting and minimal exercise.",
    example:
      "A sedentary lifestyle can cause obesity and related health problems, especially in office workers.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Inactive lifestyle", "Low-activity living"],
    pronunciation: "/ˈsedənˌteri ˈlaɪfˌstaɪl/",
    icon: Activity,
  },
  {
    term: "Nutrition",
    definition:
      "The process of providing or obtaining food necessary for health and growth, including the study of nutrients in food and their effects on health.",
    example:
      "Good nutrition is vital for the development of children and maintaining health throughout life.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Dietary health", "Nutritional science"],
    pronunciation: "/nuˈtrɪʃən/",
    icon: Heart,
  },
  {
    term: "Stress Management",
    definition:
      "Techniques and strategies used to cope with and reduce stress levels, including both prevention and treatment approaches.",
    example:
      "Stress management programs at work improve employee productivity and overall workplace satisfaction.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Stress reduction", "Stress coping"],
    pronunciation: "/stres ˈmænɪdʒmənt/",
    icon: Brain,
  },
];

const relatedTopics = [
  {
    id: "society-culture",
    title: "Society & Culture",
    description:
      "Explore how health issues affect society and cultural attitudes",
    icon: "🏛️",
  },
  {
    id: "global-issues",
    title: "Global Issues",
    description: "Learn about international health challenges and solutions",
    icon: "🌍",
  },
];

const studyTips = [
  {
    tip: "Personal Examples",
    description:
      "Share your own health habits and lifestyle choices to make answers more personal and authentic.",
    icon: CheckCircle,
  },
  {
    tip: "Compare Countries",
    description:
      "Discuss differences in healthcare systems and lifestyle habits between countries.",
    icon: Lightbulb,
  },
  {
    tip: "Current Issues",
    description:
      "Reference modern health challenges like stress, technology addiction, or pandemic effects.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "How do you stay healthy?",
    tips: "Use 'stress management', 'nutrition', 'preventive medicine' when describing your health routine.",
  },
  {
    question: "What health problems do people in your country face?",
    tips: "Discuss 'sedentary lifestyle', 'mental health', and 'healthcare access' issues.",
  },
  {
    question: "How has healthcare changed in recent years?",
    tips: "Reference improvements in 'preventive medicine', 'mental health' awareness, and technology.",
  },
  {
    question: "Do you think people are healthier now than in the past?",
    tips: "Compare modern 'nutrition' knowledge with increased 'sedentary lifestyle' problems.",
  },
];

export default function HealthLifestyleVocabularyPage() {
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
      <section className="bg-gradient-to-r from-red-600 to-pink-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl font-bold mb-4">
              Health & Lifestyle Vocabulary
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Advanced health and lifestyle vocabulary for IELTS Speaking Band
              7-9. Master terms related to healthcare, mental health, preventive
              medicine, and wellness.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                6 Health Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Medical Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Wellness Focus
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
              Health & Lifestyle Terms
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
              className="bg-red-600 h-2 rounded-full"
              style={{ width: "33.33%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 4 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search health terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
                          <IconComponent className="w-6 h-6 text-red-600" />
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
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-red-800 italic">"{vocab.example}"</p>
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
            Common IELTS Health Questions
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
            Using Health Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-red-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/education">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Education
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/society-culture">
                Next: Society & Culture
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-red-600 to-pink-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Practice Health Topics</h2>
          <p className="text-red-100 mb-6">
            Health and lifestyle topics are common in IELTS Speaking. Practice
            discussing wellness habits, healthcare systems, and health
            challenges using these terms.
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
              <Link href="/speaking/vocabulary/society-culture">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
