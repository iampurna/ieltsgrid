// src/app/speaking/part-1/all-questions/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { List, ArrowLeft } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "IELTS Speaking Part 1: Complete Questions List | All Topics A-Z",
  description:
    "Comprehensive list of all IELTS Speaking Part 1 questions organized by topics from Art to TV. Practice with real exam questions.",
  keywords: [
    "IELTS Speaking Part 1 Questions List",
    "All Speaking Topics",
    "IELTS Question Bank",
    "Speaking Practice Questions",
    "Complete IELTS Speaking Guide",
  ],
};

const allQuestions = [
  {
    topic: "Art",
    questions: [
      "Are you good at art?",
      "Did you learn art at school when you were a child?",
      "What kind of art do you like?",
      "Is art popular in your country?",
      "Have you ever been to an art gallery?",
      "Do you think children can benefit from going to art galleries?",
    ],
  },
  {
    topic: "Bicycles",
    questions: [
      "Do you have a bike?",
      "How often do you use it?",
      "How old were you when you learned to ride a bike?",
      "Do many people in your country using bicycles?",
      "Do you think using bicycles should be encouraged?",
    ],
  },
  {
    topic: "Birthdays",
    questions: [
      "Do you usually celebrate your birthdays?",
      "How did you celebrate your last birthday?",
      "Which birthdays are the most important ones in your country?",
      "Do you think children should celebrate their birthdays with a party?",
    ],
  },
  {
    topic: "Childhood",
    questions: [
      "Did you enjoy your childhood?",
      "What is your first memory of your childhood?",
      "Did you have a lot of friends when you were a child?",
      "What did you enjoy doing as a child?",
      "Do you think it is better for children to grow up in the city or in the countryside?",
    ],
  },
  {
    topic: "Clothes",
    questions: [
      "Are clothes important to you?",
      "What kind of clothes do you usually wear?",
      "Do you ever wear the traditional clothes of your country?",
      "Where do you usually buy your clothes?",
      "Have you ever worn a uniform?",
      "Do most people in your country follow fashion?",
    ],
  },
  {
    topic: "Computers",
    questions: [
      "Do you often use a computer?",
      "How do you usually get online?",
      "Do you prefer desktops or laptops?",
      "What do you use your computer for?",
      "Do you think it is important to learn how to use a computer?",
    ],
  },
  {
    topic: "Daily Routine",
    questions: [
      "When do you usually get up in the morning?",
      "Do you usually have the same routine every day?",
      "What is your daily routine?",
      "Do you ever change your routine?",
      "Is your routine the same today as it was when you were a child?",
      "Do you think it is important to have a daily routine?",
    ],
  },
  {
    topic: "Dictionaries",
    questions: [
      "Do you often use a dictionary?",
      "What do you use dictionaries for?",
      "What kinds of dictionaries do you think are most useful?",
      "Do you think dictionaries are useful for learning a language?",
      "What kind of information you find in a dictionary?",
    ],
  },
  {
    topic: "Dreams",
    questions: [
      "Do you often have dreams when you sleep?",
      "Do you usually remember your dreams?",
      "Do you think dreams are important to remember?",
      "Do you ever have daydream?",
      "What kind of daydreams do you usually have?",
    ],
  },
  {
    topic: "Drinks",
    questions: [
      "What is your favourite drink?",
      "Is it common for people to drink tea and coffee in your country?",
      "Did you prefer different drinks as a child?",
      "Do you think it is important to drink lots of water?",
      "What is a traditional drink in your country for celebrating?",
    ],
  },
  {
    topic: "Evenings",
    questions: [
      "What do you often do in the evenings?",
      "Do you do the same thing every evening?",
      "Do you prefer to spend your evenings with family or friends?",
      "Do you ever work or study in the evenings?",
      "What is a popular activity for young people in your country in the evenings?",
      "Do you do the same thing in the evenings as you did when you were a child?",
    ],
  },
  {
    topic: "Family & Friends",
    questions: [
      "Do you spend much time with your family?",
      "Who are you closest to in your family?",
      "Do you prefer spending time with your family or friends?",
      "Who is your best friend?",
      "Are you still friends with people from your childhood?",
      "Is family important in your country?",
    ],
  },
  {
    topic: "Flowers",
    questions: [
      "Do you like flowers?",
      "What's your favourite flower?",
      "When was the last time you gave someone flowers?",
      "Do any flowers have a special meaning in your country?",
      "Why do you think women like flowers more than men?",
    ],
  },
  {
    topic: "Food",
    questions: [
      "What's your favourite food?",
      "Have you always liked the same food?",
      "Is there any food you dislike?",
      "What is a common meal in your country?",
      "Do you have a healthy diet?",
      "What do you think of fast food?",
    ],
  },
  {
    topic: "Going Out",
    questions: [
      "Do you often go out in the evenings?",
      "What do you like to do when you go out?",
      "Do you prefer going out on your own or with friends?",
      "How often do you go out in a week?",
      "Where do most young people like to go out in your country?",
    ],
  },
  {
    topic: "Happiness",
    questions: [
      "Are you a happy person?",
      "What usually makes you happy or unhappy?",
      "Does the weather ever affect how you feel?",
      "What makes you smile?",
      "Do you think people in your country are generally happy people?",
    ],
  },
  {
    topic: "Hobbies",
    questions: [
      "Do you have a hobby?",
      "What equipment do you need for it?",
      "Do you think hobbies should be shared with other people?",
      "Did you have a hobby as a child?",
      "What hobbies are popular in your country?",
      "Why do you think people have hobbies?",
    ],
  },
  {
    topic: "Internet",
    questions: [
      "How often do you go online?",
      "What do you use the internet for?",
      "How do you get online?",
      "Do you have your own computer?",
      "What's your favourite website?",
      "Do you think children should be allowed unsupervised access to the internet?",
    ],
  },
  {
    topic: "Languages",
    questions: [
      "How many foreign languages do you speak?",
      "When did you start learning your first foreign language?",
      "How many foreign languages do children in your country learn at school?",
      "Do you think it is important to learn a foreign language?",
    ],
  },
  {
    topic: "Leisure Time",
    questions: [
      "What is your favourite leisure activity?",
      "What did you enjoy doing in your free time as a child?",
      "Do you prefer to spend your free time with other people or alone?",
      "What is a common leisure activity in your country?",
      "Do most people in your country get two days off a week?",
      "Do you think leisure time is important?",
    ],
  },
  {
    topic: "Music",
    questions: [
      "Do you like music?",
      "What's your favourite type of music?",
      "Can you sing?",
      "Did you learn music at school?",
      "If you could learn a musical instrument, what would it be?",
      "Do you think music is important?",
    ],
  },
  {
    topic: "Neighbours & Neighbourhood",
    questions: [
      "Do you like your neighbours?",
      "Are neighbours usually close to each other in your country?",
      "What is your neighbourhood like?",
      "Do you think your neighbourhood is a good place for children?",
      "How could your neighbourhood be improved?",
      "Do you think it is important to have a good relationship with your neighbours?",
    ],
  },
  {
    topic: "Newspapers",
    questions: [
      "How do you usually get your news?",
      "Do you often read the newspapers?",
      "What kind of news do you usually follow?",
      "How do most people get the news in your country?",
      "Do you think international news is important?",
    ],
  },
  {
    topic: "Noise",
    questions: [
      "Do you live in a noisy area?",
      "What kinds of sounds you you hear on a daily basis?",
      "Where do you go to spend time in peace and quiet?",
      "Are there any sounds which you think are pleasant?",
      "Do you have any noisy friends?",
    ],
  },
  {
    topic: "Patience",
    questions: [
      "Are you a patient person?",
      "Do you ever get impatient?",
      "When was the last time you lost your patience?",
      "Which person in your family is the most patient?",
    ],
  },
  {
    topic: "Pets",
    questions: [
      "Do you have a pet?",
      "Do you like animals?",
      "What's your favourite animal?",
      "What is a popular pet to have in your country?",
      "Did you have a pet as a child?",
      "Why do people have pets?",
    ],
  },
  {
    topic: "Reading",
    questions: [
      "Do you often read?",
      "What is your favourite kind of book to read?",
      "Do you often read newspapers?",
      "Do you have any e-books?",
      "What books did you read as a child?",
      "Do you think it is important to encourage children to read?",
    ],
  },
  {
    topic: "Shopping",
    questions: [
      "Do you like shopping?",
      "What's your favourite shop?",
      "Do you prefer shopping alone or with others?",
      "What kinds of shops are there where you live?",
      "Have you ever bought anything online?",
      "Do you think men and women have different opinions about shopping?",
    ],
  },
  {
    topic: "Sport",
    questions: [
      "Do you like sport?",
      "What's your favourite sport?",
      "Do you often watch sport on TV?",
      "Did you play sport as a child?",
      "What is the most popular sport in your country?",
      "How do most people in your country keep fit?",
    ],
  },
  {
    topic: "TV",
    questions: [
      "Do you often watch TV?",
      "What sorts of things do you watch on TV?",
      "What is your favourite TV program?",
      "Do you ever watch foreign programs or films?",
      "What did you watch on TV when you were a child?",
      "Do you think children should watch TV?",
    ],
  },
];

export default function AllPart1QuestionsPage() {
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
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1></h1>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <List className="w-12 h-12 text-gray-300" />
              <div>
                <h1 className="text-4xl font-bold">Complete Questions List</h1>
                <p className="text-gray-300">
                  IELTS Speaking Part 1 - All Topics A-Z
                </p>
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
              Complete Question Bank
            </h2>
            <p className="text-gray-700 mb-4">
              This page contains all IELTS Speaking Part 1 questions from the
              remaining topics (Art to TV) as found in real IELTS tests. Use
              these questions to practice and prepare comprehensive responses.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
              <p className="text-sm text-gray-600">
                <strong>Study Tip:</strong> Practice 2-3 topics per day. Try to
                give 2-3 sentence answers for each question, including reasons
                and examples where possible.
              </p>
            </div>
          </Card>
        </section>

        {/* Questions by Topic */}
        <section className="mb-12">
          <div className="grid gap-6">
            {allQuestions.map((topicData, index) => (
              <Card
                key={index}
                className="p-6"
                id={topicData.topic.toLowerCase().replace(/\s+/g, "-")}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  {topicData.topic}
                </h2>
                <div className="grid gap-3">
                  {topicData.questions.map((question, questionIndex) => (
                    <div
                      key={questionIndex}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded"
                    >
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium flex-shrink-0 mt-0.5">
                        Q{questionIndex + 1}
                      </span>
                      <p className="text-gray-800 font-medium">{question}</p>
                    </div>
                  ))}
                </div>

                {/* Add note for topics with detailed pages available */}
                {[
                  "art",
                  "bicycles",
                  "birthdays",
                  "childhood",
                  "clothes",
                  "computers",
                  "daily-routine",
                  "dictionaries",
                  "dreams",
                  "drinks",
                  "evenings",
                  "family-friends",
                  "flowers",
                  "food",
                  "going-out",
                  "happiness",
                  "hobbies",
                  "internet",
                  "languages",
                  "leisure-time",
                  "music",
                  "neighbours",
                  "newspapers",
                  "noise",
                  "patience",
                  "pets",
                  "reading",
                  "shopping",
                  "sport",
                  "tv",
                ].includes(
                  topicData.topic.toLowerCase().replace(/\s+/g, "-")
                ) && (
                  <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800">
                      <strong>Practice Tip:</strong> Try to answer each question
                      with 2-3 sentences. For detailed sample answers, check our
                      core topics:
                      <Link
                        href="/speaking/part-1/work"
                        className="underline mx-1"
                      >
                        Work
                      </Link>
                      <Link
                        href="/speaking/part-1/study"
                        className="underline mx-1"
                      >
                        Study
                      </Link>
                      <Link
                        href="/speaking/part-1/hometown"
                        className="underline mx-1"
                      >
                        Hometown
                      </Link>
                      <Link
                        href="/speaking/part-1/home"
                        className="underline mx-1"
                      >
                        Home
                      </Link>
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-12">
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Use This Question Bank
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Practice Schedule:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Choose 2-3 topics per practice session</li>
                  <li>Spend 10-15 minutes on each topic</li>
                  <li>Record yourself for self-evaluation</li>
                  <li>Focus on fluency over perfect grammar</li>
                  <li>Practice regularly for consistency</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Answer Structure:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Direct answer to the question</li>
                  <li>Add a reason or explanation</li>
                  <li>Include a brief example if relevant</li>
                  <li>Keep answers 2-3 sentences long</li>
                  <li>Use natural, conversational language</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <section>
          <Card className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Practice More?
            </h2>
            <p className="text-gray-700 mb-6">
              Return to topic-specific pages for detailed sample answers and
              vocabulary.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/speaking/part-1/work">Work (Detailed)</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-1/study">Study (Detailed)</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-1/hometown">
                  Hometown (Detailed)
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-1/home">Home (Detailed)</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
