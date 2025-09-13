import { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  ArrowLeft,
  Clock,
  MessageCircle,
  Lightbulb,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 1: Work Questions & Sample Answers",
  description:
    "Practice IELTS Speaking Part 1 work-related questions with sample answers, tips, and vocabulary to ace your speaking test.",
  keywords: [
    "IELTS Speaking Work Questions",
    "Work Interview Questions",
    "IELTS Job Questions",
    "Speaking Part 1 Work",
    "Career IELTS Questions",
  ],
};

const workQuestions = [
  {
    question: "What is your job?",
    sampleAnswer:
      "I work as a software engineer for a technology company. I've been in this role for about two years now, and I really enjoy the problem-solving aspects of programming.",
    vocabulary: [
      "software engineer",
      "technology company",
      "problem-solving",
      "programming",
    ],
  },
  {
    question: "Where do you work?",
    sampleAnswer:
      "I work at the headquarters of my company in the city center. It's a modern office building with great facilities and a collaborative workspace.",
    vocabulary: [
      "headquarters",
      "city center",
      "modern office",
      "collaborative workspace",
    ],
  },
  {
    question: "Why did you choose that job?",
    sampleAnswer:
      "I chose this job because I've always been passionate about technology and coding. Plus, the company has an excellent reputation for innovation and employee development.",
    vocabulary: [
      "passionate about",
      "reputation",
      "innovation",
      "employee development",
    ],
  },
  {
    question: "Is it a popular job in your country?",
    sampleAnswer:
      "Yes, software engineering is quite popular in my country, especially among young graduates. There's high demand for tech professionals due to the growing digital economy.",
    vocabulary: [
      "quite popular",
      "graduates",
      "high demand",
      "digital economy",
    ],
  },
  {
    question: "Do you like your job?",
    sampleAnswer:
      "Yes, I really enjoy my job. It's challenging and allows me to be creative while solving complex problems. The work environment is also very supportive.",
    vocabulary: [
      "challenging",
      "creative",
      "complex problems",
      "supportive environment",
    ],
  },
  {
    question: "Do you get on well with your colleagues?",
    sampleAnswer:
      "Absolutely! I have great relationships with my colleagues. We work well as a team and often socialize outside of work too. The atmosphere is very friendly and professional.",
    vocabulary: [
      "great relationships",
      "work as a team",
      "socialize",
      "friendly atmosphere",
    ],
  },
  {
    question: "What was your first day like?",
    sampleAnswer:
      "My first day was both exciting and nerve-wracking. I was given a warm welcome by the team, and my manager spent time showing me around and explaining the company culture.",
    vocabulary: [
      "exciting",
      "nerve-wracking",
      "warm welcome",
      "company culture",
    ],
  },
  {
    question: "What responsibilities do you have at work?",
    sampleAnswer:
      "My main responsibilities include developing software applications, debugging code, and collaborating with other developers on various projects. I also participate in team meetings and code reviews.",
    vocabulary: [
      "developing applications",
      "debugging",
      "collaborating",
      "code reviews",
    ],
  },
  {
    question: "If you had the chance, would you change your job?",
    sampleAnswer:
      "At the moment, I'm quite happy with my current position. However, I'm always open to new opportunities that could offer more challenges or better career advancement prospects.",
    vocabulary: [
      "current position",
      "open to opportunities",
      "challenges",
      "career advancement",
    ],
  },
  {
    question: "Do you plan to continue with your job in the future?",
    sampleAnswer:
      "I plan to stay in this field, but I'd like to advance to more senior positions over time. Eventually, I might consider starting my own tech company or moving into management roles.",
    vocabulary: [
      "stay in this field",
      "advance",
      "senior positions",
      "management roles",
    ],
  },
];

const tips = [
  {
    title: "Be Specific",
    content:
      "Give concrete details about your job rather than vague descriptions. This shows better language skills.",
  },
  {
    title: "Use Present Tense",
    content:
      "When talking about your current job, use present simple and present continuous tenses appropriately.",
  },
  {
    title: "Add Reasons",
    content:
      "Don't just state facts - explain why you like/dislike something or why you made certain choices.",
  },
  {
    title: "Professional Vocabulary",
    content:
      "Use work-related vocabulary naturally, but don't overuse technical terms the examiner might not understand.",
  },
];

export default function WorkQuestionsPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1></h1>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-12 h-12 text-blue-200" />
              <div>
                <h1 className="text-4xl font-bold">Work Questions</h1>
                <p className="text-blue-100">IELTS Speaking Part 1</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Most Common Topic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="p-6 bg-blue-50 border-blue-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About Work Questions
            </h2>
            <p className="text-gray-700 mb-4">
              Work-related questions are among the most common in IELTS Speaking
              Part 1. The examiner wants to know about your current job, your
              workplace, and your career plans. Even if you're a student, you
              might be asked about part-time work or future career aspirations.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> If you don't work, simply say "I don't
                work at the moment" or "I'm a student" and the examiner will ask
                about your studies instead.
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
            {workQuestions.map((item, index) => (
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
                  <p className="text-gray-700 italic p-4 bg-gray-50 rounded border-l-4 border-green-500">
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
            Speaking Tips for Work Questions
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
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready for More Practice?
            </h2>
            <p className="text-gray-700 mb-6">
              Continue practicing with other common Part 1 topics to build
              confidence and fluency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/speaking/part-1/study">Study Questions</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-1/hometown">Hometown Questions</Link>
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
