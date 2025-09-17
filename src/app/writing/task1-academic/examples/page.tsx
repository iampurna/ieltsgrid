import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  LineChart,
  PieChart,
  Map,
  Settings,
  TrendingUp,
  ArrowLeft,
  Eye,
  Award,
  Clock,
  FileText,
  CheckCircle,
  Users,
  Download,
  BookOpen,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";

export const metadata: Metadata = {
  title: "IELTS Task 1 Academic Examples | Band 8+ Sample Answers",
  description:
    "Study high-scoring IELTS Task 1 Academic sample answers with detailed analysis for charts, graphs, maps, and process diagrams. Band 8+ examples with examiner comments.",
  keywords: [
    "IELTS Task 1 Examples",
    "Band 8 Task 1 Answers",
    "Academic Writing Samples",
    "IELTS Sample Answers",
    "Task 1 Band 9",
    "Chart Description Examples",
  ],
};

const examples = [
  {
    id: 1,
    title: "Transport Mode in a European City (1960-2000)",
    type: "Bar Chart",
    icon: BarChart3,
    band: "Band 8.5",
    difficulty: "Intermediate",
    color: "blue",
    image: "/images/task1/bar-chart-exe.png",
    wordCount: 163,
    timeSpent: "20 minutes",
    keyFeatures: [
      "Clear overview with main trends",
      "Accurate data description",
      "Effective use of comparison language",
      "Strong conclusion paragraph",
    ],
    examinerComments:
      "Excellent task achievement with all key features covered. Good range of vocabulary with precise data description. Minor grammatical errors don't impede communication.",
    sampleAnswer: `The bar chart compares modes of transportation for people commuting to work in a European city. It
looks at data from a forty-year period, beginning in 1960 and ending in 2000. There were significant
changes during this time.

In 1960, the most popular means of getting to work was by walking, with nearly 35% of people
choosing to go on foot. Similarly, a quarter of people chose to cycle to work. These methods were
far more popular than taking a car, which only about 5% of people did.

These data saw a complete reversal over the next forty years, with walking and cycling falling in
popularity, while driving skyrocketed to become the most common method of commuting. By 2000,
the figures for these three methods had nearly inverted.

Buses, on the other hand, started and ended the period at around the same level, although they
spiked in popularity in 1980, briefly being the chosen type of transport for about a quarter of people.`,
  },
  {
    id: 2,
    title: "Cement Production and concrete Production",
    type: "Process Diagram",
    icon: Settings,
    band: "Band 9",
    difficulty: "Advanced",
    color: "green",
    image: "/images/task1/process-exe.png",
    wordCount: 155,
    timeSpent: "19 minutes",
    keyFeatures: [
      "Sophisticated vocabulary usage",
      "Complex sentence structures",
      "Accurate trend description",
      "Natural linking expressions",
    ],
    examinerComments:
      "Outstanding response demonstrating full range of language with natural and sophisticated usage. All requirements fully addressed with clear progression throughout.",
    sampleAnswer: ` Introductory sentence: The diagrams illustrate the phases and apparatus to make cement
and how cement is utilised in the production of concrete for construction. ( there are 2
diagrams, give introduction to both.)

 Overview: The production of cement involves a 5 stage, linear process that begins with the
mixing of raw materials and culminates in the packaging of new cement whereas, making
concrete is a simpler process that involves mixing four ingredients in a concrete mixer. (
write overview for both diagrams)

Body paragraph 1 : At first, limestone and clay are crushed and the resulting powder is
then mixed before being passed through a rotating heater. Once heated this mixture travels
over a conveyor belt and is ground through a grinder. Now that the cement has been
produced, it is packaged and transported to a building site where it can be used to make
concrete.

Body paragraph 2: Meanwhile, concrete is made up of half gravel, quarter sand, 10% water
and 15% cement. All of these are added together in a cylindrical drum and rotated until
concrete is yielded.`,
  },
  {
    id: 3,
    title: "Number of Visitors to a Museum",
    type: "Pie Chart",
    icon: PieChart,
    band: "Band 8",
    difficulty: "Beginner-Friendly",
    color: "purple",
    image: "/images/task1/piechart-exe.png",
    wordCount: 181,
    timeSpent: "20 minutes",
    keyFeatures: [
      "Clear proportion vocabulary",
      "Effective data ranking",
      "Good use of percentages",
      "Logical organization",
    ],
    examinerComments:
      "Well-organized response with appropriate vocabulary for describing proportions. Clear overview with logical development of ideas. Some minor inaccuracies in complex structures.",
    sampleAnswer: `The table gives information about the number of visitors to Ashdown Museum while the pie
charts illustrate the level of visitor satisfaction. The statistics are taken from the years before
and after the refurbishment of the museum.

Overall, it is noticeable that in the year following the improvements more people went to the
museum and they generally felt more satisfied after their visit.

Looking at the figures in the table, visitor numbers went up from 74,000 to 92,000 after the
renovations. This is a significant increase of 18,000, or just under 25%.

Turning to the pie charts, it is interesting to see that visitors who felt very satisfied or
satisfied rose considerably from 45% before it was refurbished to 75% after. Conversely,
the proportion of those who were dissatisfied or very dissatisfied more than halved, from
50% before the changes to 20% after. Finally, the proportion of visitors who did not respond
to the survey remained unchanged at just 5% in both years.`,
  },
  {
    id: 4,
    title: "Hydroelectric power station",
    type: "Map",
    icon: Map,
    band: "Band 8.5",
    difficulty: "Advanced",
    color: "orange",
    image: "/images/task1/map-exe.png",
    wordCount: 208,
    timeSpent: "20 minutes",
    keyFeatures: [
      "Excellent location vocabulary",
      "Clear change descriptions",
      "Effective use of passive voice",
      "Strong spatial awareness",
    ],
    examinerComments:
      "Comprehensive coverage of all major changes with sophisticated vocabulary. Excellent use of location and change vocabulary. Minor issues with article usage.",
    sampleAnswer: `The diagram illustrates the process of electricity generation in a hydroelectric power station, showing how water is managed during the day and night to produce and conserve energy.

Overall, the system operates in a continuous cycle where water from a high-level reservoir generates electricity during the day, while at night, the same water is pumped back to the reservoir for reuse. This reversible process ensures both power production and efficient water management.

During the daytime, water from the river is stored in a high-level reservoir behind a dam. The intake valve is opened, allowing water to flow downward with force through pipes. This flow drives reversible turbines, which in turn operate a generator to produce electricity. The generated power is then transmitted via power lines to the national grid for distribution. After passing through the turbines, the water collects in a low-level reservoir.

At night, when electricity demand is lower, the process is reversed. The intake valve remains closed, and the turbines function in the opposite direction, using surplus electricity from the national grid to pump water from the low-level reservoir back into the high-level reservoir. This recycling of water allows the station to prepare for the next day’s electricity production, maintaining a sustainable cycle of energy generation.`,
  },
  {
    id: 5,
    title: "International Tourist Arrivals",
    type: "Line Diagram",
    icon: LineChart,
    band: "Band 8",
    difficulty: "Advanced",
    color: "red",
    image: "/images/task1/linegraph-exe.png",
    wordCount: 217,
    timeSpent: "20 minutes",
    keyFeatures: [
      "Accurate sequence vocabulary",
      "Effective passive voice usage",
      "Clear process description",
      "Technical vocabulary precision",
    ],
    examinerComments:
      "Good understanding of process description with appropriate sequencing vocabulary. Generally accurate use of passive voice with clear progression through stages.",
    sampleAnswer: `The line graph illustrates the number of international tourist arrivals in five different regions of the world between 1990 and 2005, measured in millions.

Overall, all regions experienced growth in tourist arrivals during the given period, though the scale of increase varied significantly. While North America consistently attracted the highest number of visitors, Central and Eastern Europe showed the most dramatic rise, nearly matching North America by 2005. In contrast, South America and Sub-Saharan Africa recorded the lowest but steady upward trends.

In 1990, North America led the chart with around 70 million international arrivals, and this figure climbed steadily to peak at approximately 95 million by 2000, before experiencing a slight decline to just over 90 million in 2005. Central and Eastern Europe, however, saw remarkable growth, beginning at roughly 30 million in 1990 and tripling to nearly 90 million by 2005, surpassing all other regions apart from North America.

Tourism in South-East Asia also grew substantially, rising from around 20 million in 1990 to almost 50 million in 2005, maintaining its position as the third most visited region throughout the period. Meanwhile, Sub-Saharan Africa and South America recorded the lowest numbers, starting from below 10 million in 1990. Despite this, both regions experienced gradual growth, reaching approximately 20 million and 25 million respectively by 2005.`,
  },
  {
    id: 6,
    title:
      " People that remain undernourished around the world from 2000 to 2009.",
    type: "Mixed Charts",
    icon: TrendingUp,
    band: "Band 9",
    difficulty: "Advanced",
    color: "indigo",
    image: "/images/task1/mixtype-exe.png",
    wordCount: 186,
    timeSpent: "20 minutes",
    keyFeatures: [
      "Complex data synthesis",
      "Multiple chart integration",
      "Sophisticated comparisons",
      "Advanced vocabulary range",
    ],
    examinerComments:
      "Exceptional response demonstrating ability to synthesize information from multiple sources. Outstanding vocabulary range with precise and natural usage throughout.",
    sampleAnswer: ` The table illustrates the number of undernourished people globally between 2000 and 2009, while the line graph displays price fluctuations of rice and wheat over the same period.

Overall, both global undernourishment and grain prices demonstrated concerning upward trends, with dramatic surges occurring after 2006. Undernourishment reached over one billion people by 2009, coinciding with grain prices more than tripling.

Examining undernourishment figures, the number remained relatively stable during 2000-2006, hovering around 857-876 million people. However, sharp increases began from 2008, with the most significant jump occurring between 2008 and 2009, when figures rose by 100 million people to reach 1,024 million.

Grain price trends closely mirrored undernourishment patterns. From 2000-2006, both rice and wheat prices remained steady, with rice fluctuating between $200-300 per ton and wheat ranging from $200-400 per ton. However, 2007 marked a turning point, with exponential growth following. By 2009, rice prices had nearly tripled to $900 per ton, while wheat prices soared dramatically to $1,150 per ton, corresponding directly with rapidly increasing global hunger levels.`,
  },
];

const analysisPoints = [
  {
    title: "Task Achievement",
    description: "How well does the response address all parts of the task?",
    points: [
      "Clear overview with main trends identified",
      "All key features adequately covered",
      "Appropriate length (150+ words)",
      "No irrelevant information included",
    ],
  },
  {
    title: "Coherence & Cohesion",
    description: "How well is the information organized and connected?",
    points: [
      "Logical paragraph structure",
      "Effective linking words and phrases",
      "Clear progression throughout",
      "Appropriate referencing and substitution",
    ],
  },
  {
    title: "Lexical Resource",
    description: "How effectively is vocabulary used?",
    points: [
      "Wide range of vocabulary",
      "Natural and sophisticated usage",
      "Accurate word formation",
      "Minimal errors that don't impede communication",
    ],
  },
  {
    title: "Grammatical Range & Accuracy",
    description: "How well are grammar structures used?",
    points: [
      "Wide range of structures",
      "Frequent error-free sentences",
      "Good control of complex grammar",
      "Minor errors don't affect understanding",
    ],
  },
];

export default function Task1ExamplesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link
              href="/writing/task1-academic"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Task 1 Academic
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Eye className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-5xl font-bold mb-4">Task 1 Sample Answers</h1>
            <p className="text-xl text-green-100 mb-8">
              Study high-scoring sample responses with detailed examiner
              analysis for all Task 1 chart types
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                7 Band 8+ Examples
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                All Chart Types
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Examiner Comments
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Analysis Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How Sample Answers Are Evaluated
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analysisPoints.map((point, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {point.description}
                </p>
                <ul className="space-y-1">
                  {point.points.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-gray-700"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Sample Answers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Band 8+ Sample Answers
          </h2>

          <div className="space-y-12">
            {examples.map((example, index) => (
              <Card key={example.id} className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image and Basic Info */}
                  <div>
                    <div className="relative mb-4">
                      <Image
                        src={example.image}
                        alt={example.title}
                        width={500}
                        height={300}
                        className="rounded-lg border shadow-sm w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge
                          variant="success"
                          className="bg-white text-gray-800"
                        >
                          {example.band}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 bg-${example.color}-100 rounded-full flex items-center justify-center`}
                      >
                        <example.icon
                          className={`w-6 h-6 text-${example.color}-600`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {example.title}
                        </h3>
                        <p className="text-gray-600">{example.type}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="flex items-center gap-2 mb-1">
                          <FileText className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium">
                            Word Count
                          </span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">
                          {example.wordCount}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium">
                            Time Spent
                          </span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">
                          {example.timeSpent}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {example.keyFeatures.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Examiner Comments:
                      </h4>
                      <p className="text-sm text-blue-700">
                        {example.examinerComments}
                      </p>
                    </div>
                  </div>

                  {/* Sample Answer */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-yellow-600" />
                      <h4 className="text-lg font-semibold text-gray-900">
                        Sample Answer
                      </h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 font-mono text-sm leading-relaxed">
                      <div className="whitespace-pre-line text-gray-800">
                        {example.sampleAnswer}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <Badge
                        variant={
                          example.difficulty === "Advanced"
                            ? "warning"
                            : example.difficulty === "Intermediate"
                            ? "success"
                            : "outline"
                        }
                        className="text-sm"
                      >
                        {example.difficulty}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <AdInContent />

        {/* Study Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Use These Examples Effectively
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Analyze Structure
              </h3>
              <p className="text-gray-600 text-sm">
                Study how each response follows the 4-paragraph structure:
                Introduction → Overview → Body 1 → Body 2. Notice the word count
                distribution.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Learn Vocabulary
              </h3>
              <p className="text-gray-600 text-sm">
                Extract useful phrases and vocabulary patterns. Notice how data
                is described and trends are expressed across different chart
                types.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Practice Writing
              </h3>
              <p className="text-gray-600 text-sm">
                Use these examples as templates. Try rewriting them with
                different data or attempt similar tasks following the same
                structure and style.
              </p>
            </Card>
          </div>
        </section>

        {/* Action Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-green-50">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Practice?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Now that you've studied high-scoring examples, it's time to
              practice with our comprehensive question bank covering all Task 1
              chart types.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/writing/task-1-academic/all-questions">
                  Practice Questions
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/vocabulary/task-1">Study Vocabulary</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
