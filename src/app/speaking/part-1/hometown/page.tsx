import { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft, Clock, MessageCircle, Lightbulb } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 1: Hometown Questions & Sample Answers",
  description:
    "Practice IELTS Speaking Part 1 hometown questions with sample answers, vocabulary, and tips for describing your place of origin.",
  keywords: [
    "IELTS Speaking Hometown Questions",
    "Hometown Interview Questions",
    "IELTS Place Questions",
    "Speaking Part 1 Hometown",
    "Describe Your Hometown IELTS",
  ],
};

const hometownQuestions = [
  {
    question: "Where is your hometown?",
    sampleAnswer:
      "My hometown is Leeds, which is a major city in West Yorkshire, in the north of England. It's about 200 miles north of London and has a population of around 800,000 people.",
    vocabulary: [
      "major city",
      "West Yorkshire",
      "population",
      "200 miles north",
    ],
  },
  {
    question: "Do you like your hometown?",
    sampleAnswer:
      "Yes, I really love my hometown. It has a perfect balance of city life and green spaces, with excellent shopping areas and beautiful parks. The people are also very friendly and welcoming.",
    vocabulary: [
      "perfect balance",
      "green spaces",
      "excellent shopping",
      "friendly and welcoming",
    ],
  },
  {
    question: "Do you often visit your hometown?",
    sampleAnswer:
      "I try to visit as often as possible, usually every few months. Since I moved away for university, I make an effort to go back during holidays and special occasions to spend time with family and old friends.",
    vocabulary: [
      "as often as possible",
      "every few months",
      "special occasions",
      "old friends",
    ],
  },
  {
    question: "What is your hometown like?",
    sampleAnswer:
      "My hometown is quite vibrant and diverse. It's known for its thriving music scene and has many cultural attractions like museums and art galleries. The architecture is a mix of historical Victorian buildings and modern developments.",
    vocabulary: [
      "vibrant and diverse",
      "thriving music scene",
      "cultural attractions",
      "Victorian buildings",
    ],
  },
  {
    question: "What is the oldest place in your hometown?",
    sampleAnswer:
      "The oldest place is probably Leeds Minster, which dates back to the 7th century. There's also Kirkstall Abbey, which is a ruined medieval monastery that's now a popular tourist attraction and historical site.",
    vocabulary: [
      "dates back to",
      "7th century",
      "ruined medieval monastery",
      "tourist attraction",
    ],
  },
  {
    question: "What is there for a foreigner to do or see in your hometown?",
    sampleAnswer:
      "There's plenty for visitors to enjoy. They could explore the Royal Armouries Museum, which has an impressive collection of weapons and armor, visit the bustling markets, or take a walk through Roundhay Park, one of the largest city parks in Europe.",
    vocabulary: [
      "plenty for visitors",
      "impressive collection",
      "bustling markets",
      "largest city parks",
    ],
  },
  {
    question: "How could your hometown be improved?",
    sampleAnswer:
      "I think the public transportation system could be enhanced, particularly the bus services. Also, more cycling lanes would encourage people to use bicycles and reduce traffic congestion in the city center.",
    vocabulary: [
      "public transportation",
      "enhanced",
      "cycling lanes",
      "traffic congestion",
    ],
  },
  {
    question: "Has your hometown changed much since you were a child?",
    sampleAnswer:
      "Yes, it has undergone significant transformation. Many old industrial buildings have been converted into modern apartments and offices. There's also been considerable investment in the waterfront area, creating new recreational spaces.",
    vocabulary: [
      "significant transformation",
      "industrial buildings",
      "considerable investment",
      "recreational spaces",
    ],
  },
  {
    question: "Is there good public transportation in your hometown?",
    sampleAnswer:
      "The public transportation is generally adequate, with regular bus services connecting different areas of the city. However, unlike some major cities, we don't have a subway system, which sometimes makes traveling across town time-consuming.",
    vocabulary: [
      "generally adequate",
      "regular bus services",
      "subway system",
      "time-consuming",
    ],
  },
  {
    question:
      "Do you think your hometown is a good place to bring up children?",
    sampleAnswer:
      "I believe it's an excellent place for families. There are numerous good schools, safe neighborhoods, and plenty of recreational facilities like sports centers and playgrounds. The crime rate is also relatively low compared to other major cities.",
    vocabulary: [
      "excellent place for families",
      "safe neighborhoods",
      "recreational facilities",
      "relatively low",
    ],
  },
];

const tips = [
  {
    title: "Be Descriptive",
    content:
      "Use vivid adjectives and specific details to paint a clear picture of your hometown for the examiner.",
  },
  {
    title: "Compare and Contrast",
    content:
      "Compare your hometown to other places or mention how it's changed over time to show analytical thinking.",
  },
  {
    title: "Include Personal Connection",
    content:
      "Explain your emotional connection to the place and what makes it special to you personally.",
  },
  {
    title: "Mention Specific Locations",
    content:
      "Reference specific landmarks, areas, or attractions to make your answers more concrete and interesting.",
  },
];

export default function HometownQuestionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link
              href="/speaking/part-1/topics"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Topics
            </Link>
          </Button>
        </div>
      </div>
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1></h1>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Home className="w-12 h-12 text-purple-200" />
              <div>
                <h1 className="text-4xl font-bold">Hometown Questions</h1>
                <p className="text-purple-100">IELTS Speaking Part 1</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-purple-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Very Common Topic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="p-6 bg-purple-50 border-purple-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About Hometown Questions
            </h2>
            <p className="text-gray-700 mb-4">
              Hometown questions are extremely common in IELTS Speaking Part 1
              and often appear in every test. The examiner wants to know about
              where you're from, what it's like, and your feelings about the
              place. These questions help you warm up while discussing familiar
              topics.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-purple-500">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Your hometown refers to the place where
                you spent most of your childhood, not necessarily where you were
                born. If you've lived in many places, choose the one you feel
                most connected to.
              </p>
            </div>
          </Card>
        </section>

        {/* Questions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Practice Questions & Sample Answers
          </h2>

          <div className="space-y-6">
            {hometownQuestions.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <Badge variant="primary" size="sm" className="mb-3">
                    Question {index + 1}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Sample Answer:
                  </h4>
                  <p className="text-gray-700 italic p-4 bg-gray-50 rounded border-l-4 border-purple-500">
                    "{item.sampleAnswer}"
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">
                    Key Vocabulary:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.vocabulary.map((word, wordIndex) => (
                      <Badge key={wordIndex} variant="secondary" size="sm">
                        {word}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Speaking Tips for Hometown Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
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

        {/* Next Steps */}
        <section>
          <Card className="p-6 bg-purple-50 border-purple-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready for More Practice?
            </h2>
            <p className="text-gray-700 mb-6">
              Continue practicing with other common Part 1 topics to build
              confidence and fluency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/speaking/part-1/home">Home Questions</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-1/work">Work Questions</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-1/all-questions">
                  All Part 1 Topics
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
