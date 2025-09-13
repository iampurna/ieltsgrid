import { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  ArrowLeft,
  Users,
  Globe,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "IELTS Speaking Part 3: Social Media & Its Influence - Discussion Questions",
  description:
    "Practice IELTS Speaking Part 3 questions about social media influence with sample answers, advanced vocabulary, and discussion strategies.",
  keywords: [
    "IELTS Speaking Part 3 Social Media",
    "Social Media Discussion Questions",
    "IELTS Advanced Speaking",
    "Part 3 Technology Questions",
    "Speaking Discussion Practice",
  ],
};

const discussionQuestions = [
  {
    category: "Impact & Changes",
    questions: [
      {
        question: "How has social media changed the way people communicate?",
        sampleAnswer:
          "Social media has fundamentally transformed communication by making it more instantaneous and global. Unlike traditional methods, people can now share thoughts and experiences in real-time with anyone worldwide. However, this has also led to more superficial interactions, as people often prefer quick messages over meaningful conversations. The visual nature of platforms like Instagram has also shifted communication toward images rather than text, which can be both engaging and limiting in terms of depth.",
        keyPoints: [
          "Instant global communication",
          "Shift from text to visual",
          "Quality vs quantity debate",
        ],
        advancedVocab: [
          "fundamentally transformed",
          "instantaneous",
          "superficial interactions",
          "meaningful conversations",
        ],
      },
      {
        question:
          "Do you think social media has more positive or negative effects on society?",
        sampleAnswer:
          "I believe social media's impact is largely dependent on how it's used. On the positive side, it has democratized information sharing, enabled social movements, and connected people across geographical boundaries. However, the negative aspects are equally significant - the spread of misinformation, cyberbullying, and the creation of echo chambers that polarize opinions. The key issue is that these platforms prioritize engagement over accuracy, which can amplify both positive and negative content indiscriminately.",
        keyPoints: [
          "Democratization of information",
          "Echo chambers and polarization",
          "Engagement vs accuracy",
        ],
        advancedVocab: [
          "democratized",
          "geographical boundaries",
          "echo chambers",
          "polarize",
          "indiscriminately",
        ],
      },
      {
        question: "How do you think social media will evolve in the future?",
        sampleAnswer:
          "I anticipate social media will become more immersive through technologies like virtual and augmented reality, making online interactions feel more authentic. We're likely to see stricter regulation regarding privacy and misinformation, possibly leading to more transparent algorithms. Additionally, I expect there will be a growing emphasis on mental health features, with platforms developing tools to help users manage their screen time and digital wellbeing more effectively.",
        keyPoints: [
          "VR/AR integration",
          "Regulatory changes",
          "Mental health focus",
        ],
        advancedVocab: [
          "immersive",
          "authentic interactions",
          "transparent algorithms",
          "digital wellbeing",
        ],
      },
    ],
  },
  {
    category: "Generational Differences",
    questions: [
      {
        question:
          "Are there differences in how different age groups use social media?",
        sampleAnswer:
          "Absolutely, there are stark generational differences in social media usage. Younger users, particularly Gen Z, tend to gravitate toward visual and short-form content on platforms like TikTok and Instagram, often using these spaces for creative expression and social activism. In contrast, older generations typically prefer Facebook for maintaining family connections and sharing life updates. Middle-aged users often approach social media more cautiously, being more concerned about privacy and the permanence of their digital footprint.",
        keyPoints: [
          "Platform preferences by age",
          "Different usage purposes",
          "Privacy concerns vary",
        ],
        advancedVocab: [
          "stark generational differences",
          "gravitate toward",
          "creative expression",
          "digital footprint",
        ],
      },
    ],
  },
  {
    category: "Business & Economy",
    questions: [
      {
        question: "How has social media affected traditional advertising?",
        sampleAnswer:
          "Social media has revolutionized advertising by enabling highly targeted campaigns based on user data and behavior patterns. Traditional mass advertising through TV and print has been challenged by influencer marketing and personalized ads that feel more authentic to consumers. This shift has also made advertising more accessible to small businesses, who can now compete with larger companies through creative content rather than massive budgets. However, it's also led to concerns about data privacy and the manipulation of consumer behavior.",
        keyPoints: [
          "Targeted vs mass advertising",
          "Influencer marketing rise",
          "Accessibility for small business",
        ],
        advancedVocab: [
          "revolutionized",
          "behavior patterns",
          "personalized ads",
          "manipulation of consumer behavior",
        ],
      },
    ],
  },
];

const discussionStrategies = [
  {
    strategy: "Present Multiple Perspectives",
    description:
      "Always consider different viewpoints, even if you have a strong personal opinion",
    example: "While some argue that..., others contend that...",
  },
  {
    strategy: "Use Specific Examples",
    description:
      "Support your arguments with concrete examples from real life or current events",
    example:
      "For instance, during the pandemic, we saw how social media helped maintain social connections...",
  },
  {
    strategy: "Acknowledge Complexity",
    description: "Show that you understand issues are rarely black and white",
    example:
      "This is a complex issue because it depends on various factors such as...",
  },
  {
    strategy: "Make Predictions Carefully",
    description:
      "When discussing the future, use appropriate language to show uncertainty",
    example: "It's likely that...",
    "There's a strong possibility that...": "We might see...",
  },
];

const advancedLanguage = [
  {
    function: "Expressing Strong Opinions",
    phrases: [
      "I'm firmly convinced that...",
      "There's no doubt in my mind that...",
      "I would argue strongly that...",
    ],
  },
  {
    function: "Hedging/Being Diplomatic",
    phrases: [
      "It could be argued that...",
      "There seems to be a tendency to...",
      "One might suggest that...",
    ],
  },
  {
    function: "Contrasting Ideas",
    phrases: [
      "On the contrary...",
      "Conversely...",
      "Having said that...",
      "Nevertheless...",
    ],
  },
  {
    function: "Adding Information",
    phrases: [
      "Furthermore...",
      "What's more...",
      "In addition to this...",
      "Moreover...",
    ],
  },
];

export default function SocialMediaInfluencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/speaking/part-3/topics"
              className="inline-flex items-center text-indigo-200 hover:text-white mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Part 3 Topics
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-12 h-12 text-indigo-200" />
              <div>
                <h1 className="text-4xl font-bold">
                  Social Media & Its Influence
                </h1>
                <p className="text-indigo-100">
                  IELTS Speaking Part 3 - Discussion
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-indigo-200">
              <Badge
                variant="secondary"
                className="bg-indigo-700 text-white border-indigo-600"
              >
                Very Common Topic
              </Badge>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>Abstract Discussion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="p-6 bg-indigo-50 border-indigo-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Topic Overview
            </h2>
            <p className="text-gray-700 mb-4">
              Social media influence is one of the most frequently discussed
              topics in IELTS Speaking Part 3. Questions often relate to
              communication changes, generational differences, business impact,
              and societal effects. Be prepared to discuss both positive and
              negative aspects.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
              <p className="text-sm text-gray-600">
                <strong>Tip:</strong> This topic often follows Part 2 questions
                about social media, communication, or technology, so think about
                how to expand your personal experience into broader social
                commentary.
              </p>
            </div>
          </Card>
        </section>

        {/* Discussion Questions by Category */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Practice Questions & Sample Responses
          </h2>

          <div className="space-y-8">
            {discussionQuestions.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.questions.map((item, questionIndex) => (
                    <div
                      key={questionIndex}
                      className="border-b border-gray-200 pb-6 last:border-b-0"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        {item.question}
                      </h4>

                      <div className="mb-4">
                        <h5 className="font-medium text-gray-800 mb-2">
                          Sample Response:
                        </h5>
                        <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                          <p className="text-gray-800 leading-relaxed">
                            {item.sampleAnswer}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">
                            Key Discussion Points:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {item.keyPoints.map((point, pointIndex) => (
                              <Badge
                                key={pointIndex}
                                variant="secondary"
                                size="sm"
                              >
                                {point}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">
                            Advanced Vocabulary:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {item.advancedVocab.map((vocab, vocabIndex) => (
                              <Badge
                                key={vocabIndex}
                                variant="outline"
                                size="sm"
                              >
                                {vocab}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Discussion Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Effective Discussion Strategies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {discussionStrategies.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.strategy}
                </h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <p className="text-sm text-blue-800 italic">
                    "{item.example}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Advanced Language Functions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Advanced Language for Discussions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advancedLanguage.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.function}
                </h3>
                <div className="space-y-2">
                  {item.phrases.map((phrase, phraseIndex) => (
                    <Badge
                      key={phraseIndex}
                      variant="outline"
                      className="block w-fit"
                    >
                      {phrase}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Topics Alert */}
        <section className="mb-12">
          <Card className="p-6 bg-yellow-50 border-yellow-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Related Discussion Topics
                </h2>
                <p className="text-gray-700 mb-4">
                  This topic often connects to other Part 3 discussions. Be
                  prepared to discuss:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <li>• Privacy and data protection</li>
                  <li>• Traditional vs digital media</li>
                  <li>• Generational differences</li>
                  <li>• Mental health and technology</li>
                  <li>• Business and marketing changes</li>
                  <li>• Global communication</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section>
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Continue Your Practice
            </h2>
            <p className="text-gray-700 mb-6">
              Explore more Part 3 discussion topics to build your analytical
              thinking and advanced language skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/speaking/part-3/technology-impact">
                  Technology Impact
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-3/education-systems">
                  Education Systems
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-3/topics">All Part 3 Topics</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
