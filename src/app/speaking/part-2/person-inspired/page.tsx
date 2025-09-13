// src/app/speaking/part-2/person-inspired/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  User,
  ArrowLeft,
  Clock,
  BookOpen,
  Lightbulb,
  Play,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 2: Describe a Person Who Has Inspired You",
  description:
    "Complete guide for IELTS Speaking Part 2 cue card about describing an inspiring person with sample answers, vocabulary, and preparation tips.",
  keywords: [
    "IELTS Speaking Part 2 Person",
    "Describe Inspiring Person",
    "Cue Card Person",
    "Speaking Part 2 Sample Answer",
    "IELTS Long Turn",
  ],
};

const cueCard = {
  topic: "Describe a person who has inspired you.",
  bulletPoints: [
    "who this person is",
    "how you know this person",
    "what this person does",
    "and explain why you think they are inspiring.",
  ],
};

const sampleAnswer = {
  text: `I'd like to talk about my grandmother, who has been a tremendous source of inspiration throughout my life. She's 78 years old now, and I've known her since childhood, obviously, as she's my mother's mother.

My grandmother has led quite a remarkable life. During her younger years, she worked as a nurse in our local hospital while raising four children, which was quite challenging back then. Even after retirement, she continues to volunteer at a community center, helping elderly people who are less fortunate than herself.

What makes her so inspiring to me is her incredible resilience and positive attitude. She's faced numerous hardships in her life, including the loss of my grandfather ten years ago, but she's never let these difficulties defeat her spirit. Instead, she's always maintained this amazing optimism and continues to help others despite her own challenges.

She's also taught me the value of hard work and compassion. Whenever I visit her, I see how she treats everyone with such kindness and respect, regardless of their background. She has this wonderful ability to make everyone feel welcome and valued, which I really admire and try to emulate in my own life.

Her strength and wisdom have shaped who I am today, and whenever I face difficulties, I think of her example and it gives me the courage to keep going.`,

  breakdown: [
    {
      point: "Who this person is",
      content:
        "My grandmother, who has been a tremendous source of inspiration throughout my life. She's 78 years old now...",
    },
    {
      point: "How you know this person",
      content:
        "I've known her since childhood, obviously, as she's my mother's mother.",
    },
    {
      point: "What this person does",
      content:
        "She worked as a nurse... Even after retirement, she continues to volunteer at a community center...",
    },
    {
      point: "Why they are inspiring",
      content:
        "Her incredible resilience and positive attitude... She's taught me the value of hard work and compassion...",
    },
  ],
};

const keyVocabulary = [
  { word: "tremendous", meaning: "very great in amount, scale, or intensity" },
  {
    word: "resilience",
    meaning: "the ability to recover quickly from difficulties",
  },
  { word: "hardships", meaning: "severe suffering or privation" },
  { word: "optimism", meaning: "hopefulness and confidence about the future" },
  { word: "compassion", meaning: "sympathetic pity and concern for others" },
  { word: "emulate", meaning: "match or surpass, typically by imitation" },
  {
    word: "wisdom",
    meaning: "the quality of having experience and good judgment",
  },
  { word: "tremendous source", meaning: "a very important origin or cause" },
];

const usefulPhrases = [
  "I'd like to talk about...",
  "What makes them so inspiring is...",
  "They have this wonderful ability to...",
  "I really admire and try to emulate...",
  "Their [quality] has shaped who I am today",
  "Whenever I think of them...",
  "They've taught me the value of...",
  "Despite facing many challenges...",
];

const preparationTips = [
  {
    title: "Choose Someone Real",
    content:
      "Pick someone you genuinely know well so you can give specific, authentic details about them.",
  },
  {
    title: "Think of Specific Examples",
    content:
      "Prepare concrete examples of what they've done that inspired you, not just general statements.",
  },
  {
    title: "Personal Connection",
    content:
      "Explain how this person has specifically influenced or changed you - make it personal.",
  },
  {
    title: "Use Descriptive Language",
    content:
      "Include adjectives and descriptive phrases to make your answer more engaging and detailed.",
  },
];

export default function PersonInspiredPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/speaking/part-2/topics"
              className="inline-flex items-center text-purple-200 hover:text-white mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Part 2 Topics
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <User className="w-12 h-12 text-purple-200" />
              <div>
                <h1 className="text-4xl font-bold">
                  Describe a Person Who Has Inspired You
                </h1>
                <p className="text-purple-100">
                  IELTS Speaking Part 2 - Cue Card
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-purple-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>1 min prep + 2 min speaking</span>
              </div>
              <Badge
                variant="secondary"
                className="bg-purple-700 text-white border-purple-600"
              >
                Very Common Topic
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Cue Card */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Cue Card
          </h2>

          <Card className="p-6 bg-yellow-50 border-yellow-200">
            <div className="bg-white p-6 rounded border-2 border-dashed border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {cueCard.topic}
              </h3>
              <p className="text-gray-700 mb-4">You should say:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                {cueCard.bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  <strong>
                    You will have 1 minute to prepare your talk and then you
                    will need to speak for 1-2 minutes.
                  </strong>
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Sample Answer */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Sample Answer
          </h2>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Play className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-900">
                Listen to how this answer addresses each bullet point:
              </span>
            </div>

            <div className="bg-gray-50 p-6 rounded border-l-4 border-green-500 mb-6">
              <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                {sampleAnswer.text}
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Answer Breakdown
            </h3>
            <div className="space-y-4">
              {sampleAnswer.breakdown.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-purple-700 mb-2">
                    ✓ {item.point}
                  </h4>
                  <p className="text-gray-700 text-sm italic">
                    "{item.content}"
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Vocabulary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Key Vocabulary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {keyVocabulary.map((item, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.word}
                </h3>
                <p className="text-gray-600 text-sm">{item.meaning}</p>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Useful Phrases for This Topic
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {usefulPhrases.map((phrase, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="justify-start p-2 text-left"
                >
                  {phrase}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        {/* Preparation Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Preparation Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preparationTips.map((tip, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-700">{tip.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Practice Ideas */}
        <section className="mb-12">
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ideas for Your Answer
            </h2>
            <p className="text-gray-700 mb-4">
              You could talk about any of these people who have inspired you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded">
                <h3 className="font-medium text-gray-800 mb-2">
                  Family Members
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Grandparent</li>
                  <li>• Parent</li>
                  <li>• Sibling</li>
                  <li>• Cousin/Aunt/Uncle</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded">
                <h3 className="font-medium text-gray-800 mb-2">
                  Teachers/Mentors
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• School teacher</li>
                  <li>• University professor</li>
                  <li>• Coach</li>
                  <li>• Work mentor</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded">
                <h3 className="font-medium text-gray-800 mb-2">Others</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Close friend</li>
                  <li>• Community leader</li>
                  <li>• Colleague</li>
                  <li>• Neighbor</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section>
          <Card className="p-6 bg-purple-50 border-purple-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Continue Practicing
            </h2>
            <p className="text-gray-700 mb-6">
              Try more Part 2 topics to build your confidence and fluency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/speaking/part-2/peaceful-place">
                  Describe a Peaceful Place
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-2/book">Describe a Book</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-2/topics">All Part 2 Topics</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
