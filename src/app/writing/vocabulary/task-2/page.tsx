import { Metadata } from "next";
import Link from "next/link";
import {
  Edit,
  MessageSquare,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Scale,
  Users,
  Clock,
  Target,
  BookOpen,
  FileText,
  Award,
  Zap,
  Link2,
  Eye,
  Settings,
  Star,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";

export const metadata: Metadata = {
  title:
    "IELTS Task 2 Essay Vocabulary | Opinion, Discussion & Argument Writing",
  description:
    "Master IELTS Task 2 essay vocabulary for opinion, discussion, and argumentative essays. Essential linking words, phrases, and expressions for Band 8+ scores.",
  keywords: [
    "IELTS Task 2 Vocabulary",
    "Essay Writing Vocabulary",
    "Opinion Essay Words",
    "Academic Linking Words",
    "IELTS Band 8 Vocabulary",
    "Argumentative Essay Phrases",
  ],
};

const introductionVocab = {
  starters: [
    {
      phrase: "Many/some people claim/opine/believe that...",
      usage: "General opinion introduction",
      example: "Many people believe that technology has made our lives easier.",
    },
    {
      phrase: "There is no denying that...",
      usage: "Strong statement of fact",
      example: "There is no denying that climate change affects everyone.",
    },
    {
      phrase: "It is often said that...",
      usage: "Common belief introduction",
      example: "It is often said that money cannot buy happiness.",
    },
    {
      phrase: "These days.../Nowadays.../In this day and age...",
      usage: "Contemporary context",
      example: "Nowadays, social media plays a crucial role in communication.",
    },
    {
      phrase: "It goes without saying that...",
      usage: "Obvious statement",
      example:
        "It goes without saying that education is fundamental to success.",
    },
    {
      phrase: "We live in an age when many of us are...",
      usage: "Modern era context",
      example: "We live in an age when many of us are dependent on technology.",
    },
    {
      phrase: "People are divided in their opinion regarding...",
      usage: "Controversial topic introduction",
      example: "People are divided in their opinion regarding nuclear energy.",
    },
    {
      phrase: "Whether ... or ... is a controversial issue...",
      usage: "Debate topic introduction",
      example:
        "Whether private or public education is better is a controversial issue.",
    },
  ],
  endings: [
    {
      phrase: "Let us examine both views before reaching a concrete decision.",
      usage: "Discussion essay transition",
    },
    {
      phrase:
        "The following paragraphs discuss whether ... and reach a reasonable conclusion.",
      usage: "Essay roadmap",
    },
    {
      phrase: "However, I strongly believe that...",
      usage: "Opinion statement",
    },
    {
      phrase:
        "I will support this view with arguments in the following paragraphs.",
      usage: "Thesis statement",
    },
    {
      phrase: "Thus the advantages far outweigh the disadvantages...",
      usage: "Advantage/disadvantage essays",
    },
  ],
};

const opinionVocab = [
  "In my opinion...",
  "I strongly opine that...",
  "I strongly agree with the idea that...",
  "I strongly disagree with the given topic...",
  "I think...",
  "My opinion is that...",
  "Personally speaking...",
  "In my view...",
  "I believe...",
  "Apparently...",
  "According to me...",
  "From my point of view...",
  "As far as I am concerned...",
  "From my perspective...",
  "To my way of thinking...",
  "It seems to me that...",
  "To my mind...",
  "My own view on the matter is...",
  "I feel that...",
  "I suppose...",
];

const paragraphStarters = [
  {
    paragraph: "2nd Paragraph",
    starters: [
      "It is true that...",
      "First...",
      "First of all...",
      "Firstly...",
      "First and foremost...",
      "Initially...",
      "To begin with...",
      "To start with...",
      "Let us take a look at...",
      "It is worth considering...",
      "In the first place...",
      "Though it is true that...",
      "Some people believe that...",
      "Many people think that...",
      "According to many...",
      "Many support the view that...",
      "On the one hand...",
    ],
  },
  {
    paragraph: "3rd, 4th... Paragraphs",
    starters: [
      "Second(ly)...",
      "Third(ly)...",
      "Then...",
      "Next...",
      "After that...",
      "And...",
      "Again...",
      "Also...",
      "Besides...",
      "Likewise...",
      "In addition...",
      "Consequently...",
      "What's more...",
      "Furthermore...",
      "Moreover...",
      "Other people think that...",
      "Other people believe that...",
      "On the other hand...",
      "Apart from that...",
      "Finally...",
      "Last but not the least...",
    ],
  },
];

const comparisonVocab = [
  {
    type: "Similarity",
    words: [
      "In the same way...",
      "Likewise...",
      "Similarly...",
      "Like the previous point...",
      "Similar to...",
      "Also...",
      "At the same time...",
      "Just as...",
    ],
    examples: [
      "Similarly, both approaches have their merits in different contexts.",
      "Likewise, education systems vary significantly across cultures.",
      "Just as technology advances rapidly, our adaptation must also evolve.",
    ],
  },
];

const contrastVocab = [
  "On the other hand...",
  "On the contrary...",
  "However...",
  "Nevertheless.../Nonetheless...",
  "But...",
  "Oppositely...",
  "Alternatively...",
  "Unlike...",
  "While...",
  "Whilst...",
  "Although...",
  "Though...",
  "Even though...",
  "Despite.../In spite of...",
  "In spite of the fact that...",
  "In contrast to this...",
  "Then again...",
  "Despite the fact that...",
  "Even so...",
  "Yet...",
  "Meanwhile...",
];

const exampleVocab = [
  {
    phrase: "For instance...",
    note: "Always use a comma (,) after",
    examples: [
      "For instance, many developed countries have implemented strict environmental policies.",
    ],
  },
  {
    phrase: "For example...",
    note: "Always use a comma (,) after",
    examples: [
      "For example, renewable energy sources like solar and wind power are becoming more affordable.",
    ],
  },
  {
    phrase: "Such as...",
    note: "Used within sentences",
    examples: [
      "Various social media platforms, such as Facebook and Twitter, influence public opinion.",
    ],
  },
  {
    phrase: "Particularly...",
    note: "For specific emphasis",
    examples: ["This is particularly evident in developing countries."],
  },
  {
    phrase: "In particular...",
    note: "For specific focus",
    examples: [
      "In particular, young people are more affected by social media trends.",
    ],
  },
  {
    phrase: "Namely...",
    note: "To specify exactly",
    examples: [
      "Several factors contribute to this trend, namely economic growth and technological advancement.",
    ],
  },
  {
    phrase: "To illustrate...",
    note: "To provide clarification",
    examples: [
      "To illustrate this point, consider the impact of remote work on productivity.",
    ],
  },
  {
    phrase: "As an evidence...",
    note: "To support with proof",
    examples: [
      "As an evidence of this trend, unemployment rates have decreased significantly.",
    ],
  },
  {
    phrase: "A case in point...",
    note: "Relevant example",
    examples: [
      "A case in point is the success of countries that invested heavily in education.",
    ],
  },
];

const resultReasonVocab = [
  {
    type: "Showing Results",
    words: [
      "As a result...",
      "Consequently...",
      "As a consequent...",
      "As an effect...",
      "Thus...",
      "So...",
      "Therefore...",
      "On account of...",
      "Because of...",
      "Hence...",
      "Eventually...",
      "For this/that reason...",
      "Thereby...",
      "Due to...",
      "Owing to...",
    ],
    examples: [
      "As a result, people are struggling to maintain work-life balance.",
      "Consequently, local residents will find more job opportunities.",
      "Therefore, we should avoid investing in uncertain projects.",
    ],
  },
  {
    type: "Showing Reasons",
    words: [
      "As a result of...",
      "Due to...",
      "One reason behind this is...",
      "... has led to/... has resulted in...",
      "The reason why...",
      "Because of...",
      "Owing to...",
    ],
    examples: [
      "Due to technological advancement, many jobs have become automated.",
      "One reason behind this trend is the increasing cost of living.",
      "The overuse of social media has resulted in decreased face-to-face communication.",
    ],
  },
];

const addingInfoVocab = [
  "Furthermore...",
  "In addition...",
  "On top of that...",
  "Besides...",
  "What is more...",
  "Another point worth noting is...",
  "Another factor to consider is...",
  "Not only... but also...",
  "Also...",
  "Moreover...",
  "Additionally...",
  "As well as...",
  "Even...",
  "What's more...",
  "Again...",
  "In a similar fashion...",
  "Likewise...",
];

const emphasisVocab = [
  "It goes without saying that...",
  "Obviously...",
  "Needless to say...",
  "There is little doubt that...",
  "Although...",
  "Though...",
  "Nonetheless...",
  "Nevertheless...",
  "Still...",
  "Yet...",
  "Certainly...",
  "Definitely...",
  "No doubt...",
  "Of course...",
  "Doubtlessly...",
  "Without any doubt...",
  "Undoubtedly...",
];

const clarifyingVocab = [
  {
    phrase: "To put it simply...",
    usage: "Simplifying complex ideas",
    example:
      "To put it simply, renewable energy is the future of sustainable development.",
  },
  {
    phrase: "To put in another way...",
    usage: "Rephrasing for clarity",
    example:
      "To put in another way, education is an investment in human capital.",
  },
  {
    phrase: "That is to say...",
    usage: "Clarifying meaning",
    example:
      "That is to say, we must prioritize environmental protection over short-term profits.",
  },
  {
    phrase: "In other words...",
    usage: "Alternative explanation",
    example:
      "In other words, technological advancement requires continuous learning and adaptation.",
  },
];

const summaryVocab = [
  "To sum up...",
  "In short...",
  "In a word...",
  "To put it simply...",
  "That is to say...",
  "To repeat in short...",
  "To summarise...",
];

const conclusionVocab = [
  "In conclusion...",
  "In summary...",
  "To conclude...",
  "To conclude with...",
  "To sum up...",
  "In general...",
  "To summarise...",
  "In short...",
  "All in all...",
  "Overall...",
  "On the whole...",
  "To draw the conclusion...",
  "All things considered...",
  "By and large...",
  "Taking everything into consideration...",
  "Taking everything into account...",
  "Weighing up both sides of the argument...",
];

const agreementVocab = [
  {
    type: "Agreement",
    expressions: [
      "I quite agree that...",
      "I strongly agree...",
      "I completely agree that...",
      "I totally agree with the given idea that...",
      "I agree with the opinion that...",
      "I am quite inclined to the opinion that...",
      "I could not agree more...",
      "I concur with the group who believe that...",
      "I accept that...",
      "I accept the fact that...",
      "I approve the idea...",
      "I am in agreement...",
      "I consent that...",
    ],
  },
  {
    type: "Disagreement",
    expressions: [
      "I disagree with the opinion that...",
      "I strongly disagree...",
      "I completely disagree with...",
      "I totally disagree with the given idea that...",
      "I disagree with the statement...",
      "I quite oppose the opinion that...",
      "I disapprove that...",
      "I totally do not accept the fact that...",
      "My own opinion contradicts...",
      "I disagree with the group of people...",
      "However, my opinion is different...",
    ],
  },
  {
    type: "Partial Agreement",
    expressions: [
      "To some extent...",
      "In a way...",
      "I agree with the given statement to some extent...",
      "Up to a point, I agree...",
      "More or less...",
      "So to speak...",
    ],
  },
];

const conditionalVocab = [
  "If...",
  "Provided that...",
  "Because of that...",
  "For this reason...",
  "Unless...",
  "Providing that...",
  "So that...",
  "In case...",
  "Whether...",
];

const timeSequenceVocab = [
  "First/Firstly...",
  "Second/Secondly...",
  "Third/Thirdly...",
  "Last/Lastly...",
  "Then...",
  "At the same time...",
  "Meanwhile...",
  "Since...",
  "As soon as...",
  "After this/that...",
  "Before...",
  "After...",
  "Afterwards...",
  "During...",
  "While...",
  "Simultaneously...",
  "Following this...",
  "When...",
];

const generalizingVocab = [
  "Generally...",
  "Generally speaking...",
  "In general...",
  "Overall...",
  "All in all...",
  "By and large...",
  "Basically...",
  "As a rule...",
  "Essentially...",
  "On the whole...",
  "All things considered...",
];

const commonMistakes = [
  {
    wrong: "From my opinion...",
    correct: "In my opinion...",
    tip: "Use 'In my opinion' not 'From my opinion'",
  },
  {
    wrong: "In my point of view...",
    correct: "From my point of view...",
    tip: "Use 'From my point of view' not 'In my point of view'",
  },
  {
    wrong: "Second of all...",
    correct: "Second/Secondly...",
    tip: "Avoid 'Second of all' - use 'Secondly' instead",
  },
  {
    wrong: "On other hand...",
    correct: "On the other hand...",
    tip: "Always include 'the' before 'other hand'",
  },
  {
    wrong: "Last but not least...",
    correct: "Last but not the least...",
    tip: "Include 'the' for formal writing",
  },
  {
    wrong: "In a nutshell...",
    correct: "In conclusion/To conclude...",
    tip: "Avoid informal expressions like 'In a nutshell'",
  },
];

const essayTypes = [
  {
    type: "Opinion Essays",
    description: "Do you agree or disagree?",
    structure: "Introduction + Opinion + 2-3 Body Paragraphs + Conclusion",
    keyVocab: [
      "In my opinion",
      "I believe",
      "From my perspective",
      "I strongly agree/disagree",
    ],
  },
  {
    type: "Discussion Essays",
    description: "Discuss both views and give your opinion",
    structure:
      "Introduction + Body 1 (View A) + Body 2 (View B) + Opinion + Conclusion",
    keyVocab: [
      "On one hand",
      "On the other hand",
      "Some people believe",
      "However, I think",
    ],
  },
  {
    type: "Advantage/Disadvantage",
    description: "Discuss advantages and disadvantages",
    structure: "Introduction + Advantages + Disadvantages + Conclusion",
    keyVocab: [
      "One advantage",
      "A major benefit",
      "However, a disadvantage",
      "On the downside",
    ],
  },
  {
    type: "Problem/Solution",
    description: "What are the problems and solutions?",
    structure: "Introduction + Problems + Solutions + Conclusion",
    keyVocab: [
      "A significant problem",
      "This leads to",
      "One solution",
      "To address this issue",
    ],
  },
  {
    type: "Cause/Effect",
    description: "What are the causes and effects?",
    structure: "Introduction + Causes + Effects + Conclusion",
    keyVocab: [
      "One reason for",
      "This results in",
      "As a consequence",
      "Due to this",
    ],
  },
];

export default function Task2VocabularyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link
              href="/writing/vocabulary"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Vocabulary
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Edit className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-5xl font-bold mb-4">Task 2 Essay Vocabulary</h1>
            <p className="text-xl text-purple-100 mb-8">
              Complete vocabulary guide for opinion, discussion, and
              argumentative essays in IELTS Task 2
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                500+ Essential Phrases
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Band 8+ Expressions
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                All Essay Types
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Essay Types Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Task 2 Essay Types & Vocabulary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essayTypes.map((type, index) => (
              <Card key={index} hover className="p-6">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  {type.type}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-1 text-xs">
                    Structure:
                  </h4>
                  <p className="text-xs text-gray-600">{type.structure}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 text-xs">
                    Key Vocabulary:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {type.keyVocab.map((vocab, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {vocab}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        {/* Introduction Vocabulary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            Introduction Vocabulary
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Opening Phrases
              </h3>
              <div className="space-y-4">
                {introductionVocab.starters.slice(0, 4).map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-medium text-blue-700 mb-1">
                      {item.phrase}
                    </h4>
                    <p className="text-xs text-gray-600 mb-1">{item.usage}</p>
                    <p className="text-sm bg-blue-50 p-2 rounded italic">
                      "{item.example}"
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Thesis Statement Endings
              </h3>
              <div className="space-y-3">
                {introductionVocab.endings.map((item, index) => (
                  <div
                    key={index}
                    className="bg-green-50 p-3 rounded border-l-4 border-green-400"
                  >
                    <h4 className="font-medium text-green-700 mb-1">
                      {item.phrase}
                    </h4>
                    <p className="text-xs text-gray-600">{item.usage}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 mt-6 bg-yellow-50">
            <h4 className="font-semibold text-yellow-800 mb-3">
              More Opening Phrases:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {introductionVocab.starters.slice(4).map((item, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="justify-start p-2"
                >
                  {item.phrase}
                </Badge>
              ))}
            </div>
          </Card>
        </section>
        {/* Opinion Vocabulary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-green-600" />
            Opinion Expression Vocabulary
          </h2>

          <Card className="p-6 mb-6">
            <div className="bg-green-50 p-4 rounded-lg mb-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2">
                Important Note:
              </h4>
              <p className="text-green-700 text-sm">
                Only use opinion vocabulary in <strong>Opinion Essays</strong>.
                If the question asks to compare advantages and disadvantages, do
                not strongly express your opinion.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {opinionVocab.map((phrase, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm p-2 justify-center"
                >
                  {phrase}
                </Badge>
              ))}
            </div>

            <div className="mt-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <h4 className="font-medium text-red-700 mb-2">Common Mistake:</h4>
              <div className="text-sm">
                <p className="text-red-600 mb-1">
                  <strong>Wrong:</strong> "In my point of view..."
                </p>
                <p className="text-green-600">
                  <strong>Correct:</strong> "From my point of view..."
                </p>
              </div>
            </div>
          </Card>
        </section>
        {/* Paragraph Starters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <ArrowRight className="w-8 h-8 text-indigo-600" />
            Body Paragraph Starters
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {paragraphStarters.map((section, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {section.paragraph}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {section.starters.map((starter, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-sm p-2 justify-start"
                    >
                      {starter}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-6 bg-red-50 border-l-4 border-red-400">
            <h4 className="font-semibold text-red-700 mb-3">Remember:</h4>
            <p className="text-red-600 text-sm">
              Use <strong>"Secondly"</strong> not{" "}
              <strong>"Second of all"</strong>. The latter is incorrect in
              formal academic writing.
            </p>
          </Card>
        </section>
        {/* Comparison and Contrast */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Scale className="w-8 h-8 text-orange-600" />
            Comparison & Contrast Vocabulary
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Showing Similarity
              </h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {comparisonVocab[0].words.map((word, index) => (
                    <Badge key={index} variant="outline">
                      {word}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700">Examples:</h4>
                  {comparisonVocab[0].examples.map((example, index) => (
                    <div
                      key={index}
                      className="text-sm bg-green-50 p-2 rounded italic"
                    >
                      "{example}"
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-600" />
                Showing Contrast
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {contrastVocab.map((phrase, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm p-2 justify-start"
                  >
                    {phrase}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </section>
        {/* Result and Reason Vocabulary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-red-600" />
            Result & Reason Vocabulary
          </h2>

          <div className="space-y-6">
            {resultReasonVocab.map((section, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.type}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">
                      Vocabulary:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.words.map((word, i) => (
                        <Badge key={i} variant="outline" className="text-sm">
                          {word}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">
                      Examples:
                    </h4>
                    <div className="space-y-2">
                      {section.examples.map((example, i) => (
                        <div
                          key={i}
                          className="text-sm bg-red-50 p-3 rounded italic"
                        >
                          "{example}"
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        {/* Adding Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Link2 className="w-8 h-8 text-blue-600" />
            Adding Further Information
          </h2>

          <Card className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {addingInfoVocab.map((phrase, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm p-2 justify-center"
                >
                  {phrase}
                </Badge>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="font-semibold text-gray-800">Usage Examples:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm italic">
                    "What's more, university education should be based on talent
                    and performance, not based on equal gender opportunity."
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm italic">
                    "Furthermore, technological advancement has revolutionized
                    the way we communicate."
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm italic">
                    "Another point worth noting is the environmental impact of
                    industrial development."
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm italic">
                    "Not only does exercise improve physical health, but it also
                    enhances mental wellbeing."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
        {/* Agreement/Disagreement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-green-600" />
            Agreement & Disagreement Vocabulary
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {agreementVocab.map((section, index) => (
              <Card key={index} className="p-6">
                <h3
                  className={`text-lg font-semibold mb-4 ${
                    section.type === "Agreement"
                      ? "text-green-700"
                      : section.type === "Disagreement"
                      ? "text-red-700"
                      : "text-orange-700"
                  }`}
                >
                  {section.type}
                </h3>
                <div className="space-y-2">
                  {section.expressions.map((expr, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs p-2 w-full justify-start"
                    >
                      {expr}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-6 bg-yellow-50 border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-800 mb-3">
              Usage Examples:
            </h4>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                <span className="font-medium text-green-700">Agreement:</span>
                <p className="text-sm text-green-800 mt-1">
                  "I completely agree that renewable energy is essential for
                  sustainable development."
                </p>
              </div>
              <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                <span className="font-medium text-red-700">Disagreement:</span>
                <p className="text-sm text-red-800 mt-1">
                  "I strongly disagree with the opinion that technology isolates
                  people from society."
                </p>
              </div>
              <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                <span className="font-medium text-orange-700">
                  Partial Agreement:
                </span>
                <p className="text-sm text-orange-800 mt-1">
                  "To some extent, I agree that social media affects
                  communication, but it also has benefits."
                </p>
              </div>
            </div>
          </Card>
        </section>
        {/* Emphasis and Certainty */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-600" />
            Emphasis & Certainty Vocabulary
          </h2>

          <Card className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {emphasisVocab.map((phrase, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm p-2 justify-center"
                >
                  {phrase}
                </Badge>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="font-semibold text-gray-800">Usage Examples:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-sm italic">
                    "Obviously, education plays a crucial role in personal
                    development."
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-sm italic">
                    "Undoubtedly, climate change poses significant challenges
                    for future generations."
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-sm italic">
                    "It goes without saying that healthy lifestyle choices
                    benefit everyone."
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-sm italic">
                    "There is little doubt that technology has transformed
                    modern society."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
        {/* Clarifying and Rephrasing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Eye className="w-8 h-8 text-indigo-600" />
            Clarifying & Rephrasing Vocabulary
          </h2>

          <div className="space-y-4">
            {clarifyingVocab.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                      {item.phrase}
                    </h3>
                    <p className="text-sm text-gray-600">{item.usage}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-indigo-50 p-3 rounded border-l-4 border-indigo-400">
                      <p className="text-sm italic">"{item.example}"</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        {/* Time and Sequence */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Clock className="w-8 h-8 text-purple-600" />
            Time & Sequence Vocabulary
          </h2>

          <Card className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
              {timeSequenceVocab.map((phrase, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm p-2 justify-center"
                >
                  {phrase}
                </Badge>
              ))}
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800 mb-3">
                Usage Examples:
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-purple-700">
                  <strong>Firstly,</strong> we need to consider the economic
                  implications of this policy.
                </p>
                <p className="text-purple-700">
                  <strong>Meanwhile,</strong> governments should invest more in
                  renewable energy infrastructure.
                </p>
                <p className="text-purple-700">
                  <strong>Subsequently,</strong> these measures will lead to
                  improved environmental conditions.
                </p>
              </div>
            </div>
          </Card>
        </section>
        {/* Conditional Vocabulary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Settings className="w-8 h-8 text-teal-600" />
            Conditional Vocabulary
          </h2>

          <Card className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {conditionalVocab.map((phrase, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm p-2 justify-center"
                >
                  {phrase}
                </Badge>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Usage Examples:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-400">
                  <p className="text-sm italic">
                    "If proper environmental measures are not implemented,
                    climate change will worsen."
                  </p>
                </div>
                <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-400">
                  <p className="text-sm italic">
                    "Unless governments take action, unemployment rates will
                    continue to rise."
                  </p>
                </div>
                <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-400">
                  <p className="text-sm italic">
                    "Provided that adequate funding is available, education
                    quality can be improved."
                  </p>
                </div>
                <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-400">
                  <p className="text-sm italic">
                    "For this reason, we should prioritize sustainable
                    development policies."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
        {/* Summary and Conclusion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-green-600" />
            Summary & Conclusion Vocabulary
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Paragraph Summary
              </h3>
              <div className="space-y-2">
                {summaryVocab.map((phrase, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm p-2 w-full justify-start"
                  >
                    {phrase}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> These phrases are specifically useful
                  for ending body paragraphs to restate your main point.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Essay Conclusion
              </h3>
              <div className="space-y-2">
                {conclusionVocab.map((phrase, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm p-2 w-full justify-start"
                  >
                    {phrase}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 p-3 bg-red-50 rounded border-l-4 border-red-400">
                <p className="text-sm text-red-800">
                  <strong>Avoid:</strong> "In a nutshell" - this is too informal
                  for academic writing. Use "In conclusion" or "To conclude"
                  instead.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-6 mt-6 bg-green-50">
            <h4 className="font-semibold text-green-800 mb-3">
              Conclusion Writing Tips:
            </h4>
            <div className="text-sm text-green-700 space-y-2">
              <p>
                • Keep conclusions brief (1-2 sentences in a 250-word essay)
              </p>
              <p>• Summarize your main points without introducing new ideas</p>
              <p>• Use conditional sentences to show potential outcomes</p>
              <p>• Make recommendations or suggestions if asked</p>
              <p>• Ensure your conclusion links back to your introduction</p>
            </div>
          </Card>
        </section>
        {/* Generalizing Vocabulary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Star className="w-8 h-8 text-blue-600" />
            Generalizing Vocabulary
          </h2>

          <Card className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
              {generalizingVocab.map((phrase, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm p-2 justify-center"
                >
                  {phrase}
                </Badge>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Usage Examples:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <p className="text-sm italic">
                    "Generally speaking, developed countries have better
                    healthcare systems."
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <p className="text-sm italic">
                    "All things considered, technology has more advantages than
                    disadvantages."
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <p className="text-sm italic">
                    "By and large, education systems need continuous improvement
                    and adaptation."
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <p className="text-sm italic">
                    "As a rule, countries with higher education levels have
                    stronger economies."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
        {/* Common Mistakes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Vocabulary Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            {commonMistakes.map((mistake, index) => (
              <Card key={index} className="p-6 border-l-4 border-red-400">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-700 mb-1">Wrong</h4>
                    <p className="text-sm text-red-800 font-mono">
                      "{mistake.wrong}"
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-700 mb-1">Correct</h4>
                    <p className="text-sm text-green-800 font-mono">
                      "{mistake.correct}"
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-700 mb-1">Tip</h4>
                    <p className="text-sm text-blue-800">{mistake.tip}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        {/* Quick Reference Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Reference: Correct vs Incorrect
          </h2>

          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-3 text-left font-semibold text-green-700">
                      Correct
                    </th>
                    <th className="border border-gray-200 p-3 text-left font-semibold text-red-700">
                      Incorrect
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3 text-green-800">
                      In my opinion...
                    </td>
                    <td className="border border-gray-200 p-3 text-red-800">
                      From my opinion...
                    </td>
                  </tr>
                  <tr className="bg-gray-25">
                    <td className="border border-gray-200 p-3 text-green-800">
                      From my point of view...
                    </td>
                    <td className="border border-gray-200 p-3 text-red-800">
                      In my point of view...
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 text-green-800">
                      Second/Secondly...
                    </td>
                    <td className="border border-gray-200 p-3 text-red-800">
                      Second of all
                    </td>
                  </tr>
                  <tr className="bg-gray-25">
                    <td className="border border-gray-200 p-3 text-green-800">
                      On the other hand...
                    </td>
                    <td className="border border-gray-200 p-3 text-red-800">
                      On other hand
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 text-green-800">
                      Last but not the least...
                    </td>
                    <td className="border border-gray-200 p-3 text-red-800">
                      Last but not least...
                    </td>
                  </tr>
                  <tr className="bg-gray-25">
                    <td className="border border-gray-200 p-3 text-green-800">
                      In conclusion/To conclude...
                    </td>
                    <td className="border border-gray-200 p-3 text-red-800">
                      In a nutshell
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>
        <AdInContent />
        {/* Example Vocabulary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-yellow-600" />
            Providing Examples Vocabulary
          </h2>

          <div className="space-y-6">
            {exampleVocab.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                      {item.phrase}
                    </h3>
                    <p className="text-sm text-gray-600">{item.note}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Examples:
                    </h4>
                    {item.examples.map((example, i) => (
                      <div
                        key={i}
                        className="text-sm bg-yellow-50 p-3 rounded italic mb-2"
                      >
                        "{example}"
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-6 bg-gray-50">
            <h4 className="font-semibold text-gray-800 mb-4">
              Additional Example Phrases:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "Like...",
                "As...",
                "Among others...",
                "Regarding...",
                "With respect to...",
                "As far ... is concerned...",
                "To show an example...",
                "To give an example...",
                "To cite an example...",
                "When it comes to...",
                "...could be a good/ideal example here",
                "A case...",
              ].map((phrase, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm p-2 justify-center"
                >
                  {phrase}
                </Badge>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="font-medium text-gray-800">
                More Usage Examples:
              </h4>
              <div className="space-y-2">
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-sm italic">
                    "Like many developing countries, Bangladesh faces
                    significant challenges in healthcare infrastructure."
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-sm italic">
                    "When it comes to environmental protection, individual
                    actions are as important as government policies."
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-sm italic">
                    "Scandinavian countries could be an ideal example of
                    successful work-life balance policies."
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-sm italic">
                    "As far as education is concerned, Finland has one of the
                    most effective systems globally."
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 mt-6 bg-orange-50 border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-800 mb-3">
              Research and Idea Presentation:
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-orange-700 mb-2">
                  Academic Research Phrases:
                </h5>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    "Research shows that...",
                    "Research has found that...",
                    "Studies indicate that...",
                    "According to recent research...",
                  ].map((phrase, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {phrase}
                    </Badge>
                  ))}
                </div>
                <div className="bg-orange-100 p-3 rounded">
                  <p className="text-sm italic text-orange-800">
                    "Research shows that employment opportunities and crime
                    rates in cities have a strong correlation."
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-orange-700 mb-2">
                  General Idea Presentation:
                </h5>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    "Not only... but also...",
                    "In terms of...",
                    "With respect to...",
                    "When it comes to...",
                  ].map((phrase, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {phrase}
                    </Badge>
                  ))}
                </div>
                <div className="bg-orange-100 p-3 rounded">
                  <p className="text-sm italic text-orange-800">
                    "Not only does regular exercise improve physical health, but
                    it also enhances mental wellbeing and cognitive function."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
        ;{/* Action Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50">
            <Edit className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Master Task 2 Vocabulary Systematically
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Practice using these vocabulary categories based on your essay
              type. Start with introduction phrases, master opinion expressions,
              then focus on linking words and logical flow. Remember: accuracy
              before complexity, and always match your vocabulary to the
              specific essay question type.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/writing/task2-topics">
                  Practice with Sample Essays
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/tips">Essay Writing Strategies</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/vocabulary/task-1">Task 1 Vocabulary</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
