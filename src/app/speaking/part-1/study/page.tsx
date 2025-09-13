import { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  ArrowLeft,
  Clock,
  MessageCircle,
  Lightbulb,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 1: Study Questions & Sample Answers",
  description:
    "Practice IELTS Speaking Part 1 study-related questions with sample answers, vocabulary, and tips for discussing education and academic life.",
  keywords: [
    "IELTS Speaking Study Questions",
    "Education Interview Questions",
    "IELTS Academic Questions",
    "Speaking Part 1 Study",
    "University IELTS Questions",
  ],
};

const studyQuestions = [
  {
    question: "What do you study?",
    sampleAnswer:
      "I'm currently studying Computer Science at university. I'm in my third year, and I'm particularly interested in artificial intelligence and software development.",
    vocabulary: [
      "Computer Science",
      "third year",
      "artificial intelligence",
      "software development",
    ],
  },
  {
    question: "Where do you study that?",
    sampleAnswer:
      "I study at Manchester University, which is located in the north of England. It's quite a prestigious institution with excellent facilities for technology students.",
    vocabulary: [
      "Manchester University",
      "prestigious institution",
      "excellent facilities",
      "technology students",
    ],
  },
  {
    question: "Why did you choose that subject?",
    sampleAnswer:
      "I chose Computer Science because I've always been fascinated by technology and how it's transforming our world. I also believe it offers excellent career prospects in today's digital economy.",
    vocabulary: [
      "fascinated by technology",
      "transforming",
      "career prospects",
      "digital economy",
    ],
  },
  {
    question: "Is it a popular subject in your country?",
    sampleAnswer:
      "Yes, Computer Science is extremely popular in my country, especially among young people. Many students see it as a pathway to well-paying jobs in the tech industry.",
    vocabulary: [
      "extremely popular",
      "pathway",
      "well-paying jobs",
      "tech industry",
    ],
  },
  {
    question: "Do you like that subject?",
    sampleAnswer:
      "I absolutely love it! The subject is constantly evolving, which keeps it exciting and challenging. I particularly enjoy the problem-solving aspects and the creativity involved in programming.",
    vocabulary: [
      "constantly evolving",
      "exciting and challenging",
      "problem-solving aspects",
      "creativity",
    ],
  },
  {
    question: "Do you get on with your colleagues?",
    sampleAnswer:
      "Yes, I have great relationships with my classmates. We often work together on projects and help each other with difficult assignments. The collaborative atmosphere really enhances the learning experience.",
    vocabulary: [
      "great relationships",
      "work together",
      "difficult assignments",
      "collaborative atmosphere",
    ],
  },
  {
    question: "What was your first day like?",
    sampleAnswer:
      "My first day was quite overwhelming but exciting. Everything seemed so advanced compared to high school, and I was amazed by the sophisticated computer labs and equipment available to students.",
    vocabulary: [
      "overwhelming but exciting",
      "advanced",
      "sophisticated",
      "computer labs",
    ],
  },
  {
    question: "What are the main aspects of your subject?",
    sampleAnswer:
      "The main aspects include programming in various languages, understanding algorithms and data structures, learning about databases, and studying computer networks. We also cover theoretical concepts like computational complexity.",
    vocabulary: [
      "various languages",
      "algorithms",
      "data structures",
      "computational complexity",
    ],
  },
  {
    question: "If you had the chance, would you change subject?",
    sampleAnswer:
      "No, I'm very satisfied with my choice. Computer Science perfectly matches my interests and abilities. However, I might consider specializing further in machine learning or cybersecurity in the future.",
    vocabulary: [
      "very satisfied",
      "matches my interests",
      "specializing further",
      "machine learning",
      "cybersecurity",
    ],
  },
  {
    question: "Do you plan to get a job in the same field as your subject?",
    sampleAnswer:
      "Definitely! I'm already planning to pursue a career as a software developer after graduation. I've been doing internships during summer breaks to gain practical experience in the field.",
    vocabulary: [
      "pursue a career",
      "software developer",
      "internships",
      "practical experience",
    ],
  },
];

const tips = [
  {
    title: "Be Specific About Your Studies",
    content:
      "Mention your exact course, year of study, and any specializations to show detailed knowledge.",
  },
  {
    title: "Explain Your Motivation",
    content:
      "Always explain why you chose your subject and what you find interesting about it.",
  },
  {
    title: "Connect to Future Plans",
    content:
      "Link your studies to your career aspirations and future goals when relevant.",
  },
  {
    title: "Use Academic Vocabulary",
    content:
      "Include subject-specific terminology naturally, but ensure it's appropriate for the context.",
  },
];

export default function StudyQuestionsPage() {
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
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1></h1>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-12 h-12 text-green-200" />
              <div>
                <h1 className="text-4xl font-bold">Study Questions</h1>
                <p className="text-green-100">IELTS Speaking Part 1</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-green-200">
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
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About Study Questions
            </h2>
            <p className="text-gray-700 mb-4">
              Study questions are very common in IELTS Speaking Part 1,
              especially for younger candidates. The examiner wants to know
              about your academic background, current studies, and educational
              experiences. Be prepared to discuss your subjects, institution,
              and future academic or career plans.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-green-500">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> If you're not currently studying, you can
                talk about your most recent educational experience or mention
                that you've finished your studies and are now working.
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
            {studyQuestions.map((item, index) => (
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
            Speaking Tips for Study Questions
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
                <Link href="/speaking/part-1/home">Home</Link>
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
