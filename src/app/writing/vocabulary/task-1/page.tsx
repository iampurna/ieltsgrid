import { Metadata } from "next";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Target,
  ArrowLeft,
  BookOpen,
  FileText,
  Activity,
  Clock,
  Zap,
  Eye,
  Link2,
  MapPin,
  Settings,
  Award,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IELTS Task 1 Vocabulary | Academic Writing | Charts & Graphs",
  description:
    "Master IELTS Task 1 vocabulary for describing charts, graphs, maps, and processes. Essential words and phrases for Band 8+ scores in Academic Writing.",
  keywords: [
    "IELTS Task 1 Vocabulary",
    "Academic Writing Vocabulary",
    "Charts Graphs Vocabulary",
    "IELTS Band 8",
    "Data Description Words",
  ],
};

const introductionTable = [
  {
    component: "Starter",
    options: [
      "The given",
      "The supplied",
      "The presented",
      "The shown",
      "The provided",
    ],
    examples: [
      "The given diagram shows...",
      "The supplied data illustrates...",
      "The presented chart depicts...",
    ],
  },
  {
    component: "Chart Type",
    options: [
      "bar chart",
      "line graph",
      "pie chart",
      "table",
      "diagram",
      "flow chart",
      "map",
    ],
    examples: [
      "The bar chart compares...",
      "The line graph shows trends...",
      "The pie chart represents proportions...",
    ],
  },
  {
    component: "Action Verb",
    options: [
      "shows",
      "illustrates",
      "depicts",
      "represents",
      "demonstrates",
      "presents",
      "compares",
    ],
    examples: [
      "...shows employment rates among...",
      "...illustrates the changes in...",
      "...depicts the proportion of...",
    ],
  },
  {
    component: "Description",
    options: [
      "the comparison of",
      "the changes in",
      "the proportion of",
      "information about",
      "data on",
    ],
    examples: [
      "...the comparison of sales figures...",
      "...the changes in population over...",
      "...the proportion of male and female...",
    ],
  },
];

const overviewExamples = [
  {
    starter: "Overall",
    example:
      "Overall, employment opportunities increased significantly until 1970 and then declined throughout the next decade.",
    usage: "Most common and versatile overview starter",
  },
  {
    starter: "In general",
    example:
      "In general, more men were engaged in managerial positions than women during this period.",
    usage: "Used for broad generalizations about the data",
  },
  {
    starter: "As can be seen",
    example:
      "As can be seen, the highest number of passengers used the London Underground station at 8:00 AM and 6:00 PM.",
    usage: "Draws attention to obvious patterns in the visual",
  },
];

const trendVocabulary = {
  increase: {
    gentle: {
      verbs: ["rise", "increase", "grow", "climb", "go up"],
      nouns: ["a rise", "an increase", "growth", "an upward trend"],
      examples: [
        "The population rose steadily from 2 million to 3 million.",
        "There was a gradual increase in sales during the first quarter.",
        "The data shows consistent growth over the five-year period.",
      ],
    },
    sharp: {
      verbs: [
        "surge",
        "soar",
        "rocket",
        "skyrocket",
        "jump",
        "leap",
        "shoot up",
      ],
      nouns: ["a surge", "a boom", "a dramatic increase", "a sharp rise"],
      examples: [
        "Oil prices surged dramatically in 2008.",
        "There was a sharp jump in unemployment rates.",
        "The graph shows a dramatic surge in online sales.",
      ],
    },
  },
  decrease: {
    gentle: {
      verbs: ["fall", "drop", "decline", "decrease", "go down", "dip"],
      nouns: ["a fall", "a drop", "a decline", "a downward trend"],
      examples: [
        "Birth rates declined gradually over the two decades.",
        "There was a steady drop in manufacturing jobs.",
        "The chart shows a consistent downward trend.",
      ],
    },
    sharp: {
      verbs: ["plummet", "plunge", "slump", "crash", "nosedive", "tumble"],
      nouns: ["a plunge", "a slump", "a crash", "a dramatic fall"],
      examples: [
        "Stock prices plummeted after the announcement.",
        "Tourism numbers slumped dramatically during the crisis.",
        "There was a sharp plunge in consumer confidence.",
      ],
    },
  },
  stability: {
    verbs: [
      "remain stable",
      "level out",
      "plateau",
      "stay constant",
      "remain steady",
    ],
    nouns: ["stability", "a plateau", "no change", "steadiness"],
    examples: [
      "Unemployment rates remained stable throughout 2010.",
      "After initial growth, the figures leveled out at around 50%.",
      "The data shows remarkable stability over the decade.",
    ],
  },
};
const trendVocabularyAlternative = {
  increase: {
    gentle: {
      verbs: ["rise", "increase", "grow", "climb", "go up"],
      nouns: ["a rise", "an increase", "growth", "an upward trend"],
      examples: [
        "The population rose steadily from 2 million to 3 million.",
        "There was a gradual increase in sales during the first quarter.",
        "The data shows consistent growth over the five-year period.",
      ],
    },
    sharp: {
      verbs: [
        "surge",
        "soar",
        "rocket",
        "skyrocket",
        "jump",
        "leap",
        "shoot up",
      ],
      nouns: ["a surge", "a boom", "a dramatic increase", "a sharp rise"],
      examples: [
        "Oil prices surged dramatically in 2008.",
        "There was a sharp jump in unemployment rates.",
        "The graph shows a dramatic surge in online sales.",
      ],
    },
  },
  decrease: {
    gentle: {
      verbs: ["fall", "drop", "decline", "decrease", "go down", "dip"],
      nouns: ["a fall", "a drop", "a decline", "a downward trend"],
      examples: [
        "Birth rates declined gradually over the two decades.",
        "There was a steady drop in manufacturing jobs.",
        "The chart shows a consistent downward trend.",
      ],
    },
    sharp: {
      verbs: ["plummet", "plunge", "slump", "crash", "nosedive", "tumble"],
      nouns: ["a plunge", "a slump", "a crash", "a dramatic fall"],
      examples: [
        "Stock prices plummeted after the announcement.",
        "Tourism numbers slumped dramatically during the crisis.",
        "There was a sharp plunge in consumer confidence.",
      ],
    },
  },
  stability: {
    steady: {
      // Make consistent with increase/decrease structure
      verbs: [
        "remain stable",
        "level out",
        "plateau",
        "stay constant",
        "remain steady",
      ],
      nouns: ["stability", "a plateau", "no change", "steadiness"],
      examples: [
        "Unemployment rates remained stable throughout 2010.",
        "After initial growth, the figures leveled out at around 50%.",
        "The data shows remarkable stability over the decade.",
      ],
    },
  },
} as const;

const degreeAdverbs = [
  {
    degree: "Dramatic/Sharp",
    adverbs: [
      "dramatically",
      "sharply",
      "rapidly",
      "significantly",
      "considerably",
      "substantially",
    ],
    meaning: "Very large and noticeable change",
    examples: [
      "Prices increased dramatically by 300%.",
      "The population dropped sharply in 2020.",
      "Sales rose significantly during the holiday season.",
    ],
  },
  {
    degree: "Moderate",
    adverbs: ["moderately", "gradually", "progressively", "steadily"],
    meaning: "Medium-sized, consistent change",
    examples: [
      "Income levels rose moderately over the period.",
      "The trend increased gradually from 1990 to 2000.",
      "Employment figures declined steadily each year.",
    ],
  },
  {
    degree: "Slight",
    adverbs: ["slightly", "marginally", "minimally", "fractionally"],
    meaning: "Small, barely noticeable change",
    examples: [
      "Scores improved slightly from 65% to 68%.",
      "The gap between groups narrowed marginally.",
      "Costs increased minimally over the five-year span.",
    ],
  },
];

const dataDescriptionVocab = [
  {
    category: "Exact Figures",
    words: [
      "exactly",
      "precisely",
      "stood at",
      "totaled",
      "reached",
      "was",
      "amounted to",
    ],
    examples: [
      "The population stood at exactly 2.5 million in 2010.",
      "Sales totaled $1.2 million in the final quarter.",
      "The figure reached precisely 45% by the end of the period.",
    ],
  },
  {
    category: "Approximate Values",
    words: [
      "approximately",
      "roughly",
      "around",
      "about",
      "nearly",
      "almost",
      "just over",
      "just under",
    ],
    examples: [
      "Approximately 60% of respondents agreed with the statement.",
      "The city's population was roughly 800,000 in 1995.",
      "Nearly three-quarters of students passed the examination.",
    ],
  },
  {
    category: "Proportions",
    words: [
      "accounted for",
      "represented",
      "constituted",
      "comprised",
      "made up",
      "formed",
    ],
    examples: [
      "Manufacturing accounted for 35% of the total economy.",
      "Women represented 45% of the workforce in 2020.",
      "Renewable energy comprised just 12% of total consumption.",
    ],
  },
];

const comparisonStructures = [
  {
    type: "Higher Comparisons",
    structures: [
      "higher than",
      "greater than",
      "more than",
      "exceed",
      "surpass",
      "outstrip",
    ],
    examples: [
      "Male participation was significantly higher than female participation.",
      "City A's population exceeded that of City B by 2 million.",
      "The 2020 figures surpassed all previous records.",
    ],
  },
  {
    type: "Lower Comparisons",
    structures: [
      "lower than",
      "less than",
      "fewer than",
      "below",
      "under",
      "beneath",
    ],
    examples: [
      "Rural income was consistently lower than urban income.",
      "Female enrollment fell below 30% throughout the period.",
      "The results were under expectations in all categories.",
    ],
  },
  {
    type: "Equal Comparisons",
    structures: [
      "equal to",
      "the same as",
      "similar to",
      "comparable to",
      "identical to",
    ],
    examples: [
      "Group A's performance was similar to Group B's.",
      "The 2010 figures were identical to those from 2005.",
      "Both cities had comparable population growth rates.",
    ],
  },
];

const timeExpressions = {
  periods: [
    {
      expression: "from...to / between...and",
      examples: [
        "from 1990 to 2000",
        "between January and March",
        "from the beginning to the end of the decade",
      ],
    },
    {
      expression: "during / throughout / over",
      examples: [
        "during the 1980s",
        "throughout the entire period",
        "over the next five years",
      ],
    },
    {
      expression: "in the first/second half",
      examples: [
        "in the first half of the year",
        "during the second quarter",
        "in the latter part of the decade",
      ],
    },
  ],
  specific: [
    {
      expression: "by / since / until",
      examples: [
        "by 2025, the figure had reached...",
        "since 1995, there has been...",
        "until 2010, the trend was...",
      ],
    },
    {
      expression: "at the beginning/end of",
      examples: [
        "at the beginning of the study",
        "at the end of the time period",
        "at the onset of the recession",
      ],
    },
  ],
};

const extremePoints = {
  highest: {
    verbs: [
      "peaked",
      "culminated",
      "climaxed",
      "reached its peak",
      "hit the highest point",
      "topped",
    ],
    nouns: [
      "the peak",
      "the summit",
      "the pinnacle",
      "the apex",
      "the zenith",
      "the highest point",
    ],
    examples: [
      "Unemployment peaked at 12% in March 2009.",
      "Sales reached their pinnacle during the Christmas season.",
      "The graph shows that inflation hit its highest point in 1981.",
    ],
  },
  lowest: {
    verbs: [
      "bottomed out",
      "reached the nadir",
      "hit rock bottom",
      "dropped to its lowest",
      "touched bottom",
    ],
    nouns: [
      "the nadir",
      "the lowest point",
      "rock bottom",
      "the trough",
      "the minimum",
    ],
    examples: [
      "Stock prices bottomed out in December 2008.",
      "The economy reached its nadir during the recession.",
      "Confidence levels hit rock bottom before slowly recovering.",
    ],
  },
};

const fluctuationVocab = [
  {
    type: "Regular Fluctuation",
    words: ["fluctuate", "oscillate", "vary", "alternate"],
    examples: [
      "Temperatures fluctuated between 20°C and 30°C.",
      "The data oscillated around the 50% mark.",
      "Prices varied considerably throughout the year.",
    ],
  },
  {
    type: "Irregular Changes",
    words: ["erratic", "volatile", "unpredictable", "inconsistent"],
    examples: [
      "The market showed erratic behavior during this period.",
      "Oil prices were highly volatile in 2020.",
      "Growth patterns were inconsistent across different regions.",
    ],
  },
];

const linkingPhrases = [
  {
    purpose: "Adding Information",
    phrases: [
      "furthermore",
      "in addition",
      "moreover",
      "also",
      "besides",
      "additionally",
    ],
    examples: [
      "Sales increased in Q1. Furthermore, profits also rose significantly.",
      "The population grew rapidly. In addition, urbanization accelerated.",
      "Costs decreased. Moreover, efficiency improved substantially.",
    ],
  },
  {
    purpose: "Contrasting",
    phrases: [
      "however",
      "in contrast",
      "on the other hand",
      "whereas",
      "while",
      "conversely",
    ],
    examples: [
      "Group A performed well. However, Group B struggled significantly.",
      "Urban areas thrived, whereas rural regions experienced decline.",
      "Men's participation increased, while women's participation decreased.",
    ],
  },
  {
    purpose: "Showing Results",
    phrases: ["as a result", "consequently", "therefore", "thus", "hence"],
    examples: [
      "Demand increased. As a result, prices rose accordingly.",
      "New policies were implemented. Consequently, performance improved.",
      "Investment declined. Therefore, growth slowed considerably.",
    ],
  },
];

const chartSpecificVocab = {
  maps: {
    location: [
      "north",
      "south",
      "east",
      "west",
      "northeast",
      "northwest",
      "southeast",
      "southwest",
    ],
    position: [
      "adjacent to",
      "opposite",
      "next to",
      "beside",
      "near",
      "close to",
      "far from",
    ],
    changes: [
      "built",
      "constructed",
      "demolished",
      "converted",
      "replaced",
      "extended",
    ],
    examples: [
      "A new hospital was built in the northeast corner of the town.",
      "The old factory was demolished and replaced with a shopping center.",
      "The road was extended to connect the two residential areas.",
    ],
  },
  processes: {
    sequence: [
      "first",
      "initially",
      "then",
      "next",
      "subsequently",
      "finally",
      "lastly",
    ],
    causation: ["causes", "leads to", "results in", "produces", "generates"],
    examples: [
      "First, raw materials are collected from the source.",
      "The heating process causes the mixture to expand rapidly.",
      "Finally, the finished product is packaged and distributed.",
    ],
  },
};

const advancedVocabulary = [
  {
    basic: "big increase",
    advanced: "substantial surge",
    meaning: "A large, sudden rise",
    example: "There was a substantial surge in renewable energy investment.",
  },
  {
    basic: "small decrease",
    advanced: "marginal decline",
    meaning: "A slight reduction",
    example: "Manufacturing jobs showed a marginal decline over the period.",
  },
  {
    basic: "stay the same",
    advanced: "remain static",
    meaning: "No change over time",
    example: "Agricultural productivity remained static throughout the decade.",
  },
  {
    basic: "go up and down",
    advanced: "fluctuate erratically",
    meaning: "Change unpredictably",
    example:
      "Currency exchange rates fluctuated erratically during the crisis.",
  },
  {
    basic: "reach the top",
    advanced: "culminate at",
    meaning: "Reach the highest point",
    example: "Population growth culminated at 3.2% in 2019.",
  },
];

const percentageVocabulary = [
  {
    percentage: "4%",
    expressions: [
      "a tiny fraction",
      "a minimal proportion",
      "a negligible amount",
    ],
    example: "Only a tiny fraction (4%) of respondents disagreed.",
  },
  {
    percentage: "25%",
    expressions: ["exactly a quarter", "one-fourth", "roughly a quarter"],
    example: "Exactly a quarter of the population lived in rural areas.",
  },
  {
    percentage: "33%",
    expressions: [
      "nearly one-third",
      "approximately a third",
      "roughly one-third",
    ],
    example: "Nearly one-third of students chose science subjects.",
  },
  {
    percentage: "50%",
    expressions: ["exactly half", "an equal proportion", "half the total"],
    example: "Exactly half of the workforce was employed in services.",
  },
  {
    percentage: "75%",
    expressions: ["three-quarters", "a vast majority", "nearly three-quarters"],
    example: "Three-quarters of respondents supported the proposal.",
  },
];

const commonMistakes = [
  {
    mistake: "Repeating the same vocabulary",
    wrong: "The graph shows... The graph shows... The graph shows...",
    correct: "The graph shows... The data illustrates... The chart depicts...",
    tip: "Use synonyms to demonstrate vocabulary range",
  },
  {
    mistake: "Using informal language",
    wrong: "A lot of people liked it",
    correct: "A significant proportion of respondents expressed approval",
    tip: "Always use formal, academic language in Task 1",
  },
  {
    mistake: "Being imprecise with numbers",
    wrong: "Around 50% or so",
    correct: "Exactly half",
    tip: "Be precise with your approximations and exact figures",
  },
  {
    mistake: "Overusing basic linking words",
    wrong: "Firstly... Secondly... Thirdly...",
    correct: "Initially... Subsequently... Furthermore...",
    tip: "Use sophisticated linking expressions",
  },
];

interface VocabularyCategory {
  verbs: string[];
  nouns: string[];
  examples: string[];
}

interface TrendVocabulary {
  increase: {
    gentle: VocabularyCategory;
    sharp: VocabularyCategory;
  };
  decrease: {
    gentle: VocabularyCategory;
    sharp: VocabularyCategory;
  };
  stability: VocabularyCategory;
}

interface ComparisonStructure {
  type: string;
  structures: string[];
  examples: string[];
}

export default function Task1VocabularyPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BarChart3 className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-5xl font-bold mb-4">
              Task 1 Academic Vocabulary
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Complete vocabulary guide for describing charts, graphs, maps, and
              processes in IELTS Task 1
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                500+ Essential Terms
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Band 8+ Vocabulary
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Contextual Examples
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Vocabulary Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            Introduction Vocabulary
          </h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Formula: [Starter] + [Chart Type] + [Verb] + [Description] +
              [Details]
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-3 text-left font-semibold">
                      Component
                    </th>
                    <th className="border border-gray-200 p-3 text-left font-semibold">
                      Options
                    </th>
                    <th className="border border-gray-200 p-3 text-left font-semibold">
                      Examples
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {introductionTable.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-25"}
                    >
                      <td className="border border-gray-200 p-3 font-medium text-blue-700">
                        {row.component}
                      </td>
                      <td className="border border-gray-200 p-3">
                        <div className="flex flex-wrap gap-1">
                          {row.options.map((option) => (
                            <Badge
                              key={option}
                              variant="outline"
                              className="text-xs"
                            >
                              {option}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="border border-gray-200 p-3">
                        <div className="space-y-1 text-sm">
                          {row.examples.map((example, i) => (
                            <div key={i} className="text-gray-700 italic">
                              "{example}"
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50">
            <h4 className="font-semibold text-blue-900 mb-3">
              Complete Example Transformations:
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-red-700">Basic:</span>
                <span className="ml-2">"The chart shows population data."</span>
              </div>
              <div>
                <span className="font-medium text-green-700">Improved:</span>
                <span className="ml-2">
                  "The given bar chart illustrates population distribution
                  across five major cities between 1990 and 2020."
                </span>
              </div>
              <div>
                <span className="font-medium text-blue-700">Advanced:</span>
                <span className="ml-2">
                  "The supplied bar chart depicts demographic changes in five
                  metropolitan areas over a three-decade period from 1990 to
                  2020."
                </span>
              </div>
            </div>
          </Card>
        </section>

        {/* Overview Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Eye className="w-8 h-8 text-green-600" />
            Overview & General Trend Starters
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {overviewExamples.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-green-700 mb-3">
                  {item.starter}
                </h3>
                <div className="bg-green-50 p-3 rounded-lg mb-3">
                  <p className="text-sm text-green-800 italic">
                    "{item.example}"
                  </p>
                </div>
                <p className="text-xs text-gray-600">{item.usage}</p>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-green-50">
            <h4 className="font-semibold text-green-900 mb-3">
              All Overview Starters:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                "Overall",
                "In general",
                "Generally speaking",
                "As can be seen",
                "It is obvious",
                "As it is observed",
                "As a general trend",
                "As an overall trend",
                "It can be clearly seen that",
                "At first glance",
                "It is clear that",
                "At the onset",
              ].map((phrase) => (
                <Badge
                  key={phrase}
                  variant="success"
                  className="text-xs justify-center"
                >
                  {phrase}
                </Badge>
              ))}
            </div>
            <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-400">
              <p className="text-sm text-green-800">
                <strong>Remember:</strong> Never include specific numbers or
                data in your overview. Focus only on the most striking general
                patterns.
              </p>
            </div>
          </Card>
        </section>

        {/* Trend Vocabulary - Enhanced */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Activity className="w-8 h-8 text-purple-600" />
            Trend Description Vocabulary
          </h2>

          <div className="space-y-8">
            {Object.entries(trendVocabulary).map(([trendType, categories]) => (
              <div key={trendType}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 capitalize flex items-center gap-2">
                  {trendType === "increase" && (
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  )}
                  {trendType === "decrease" && (
                    <TrendingDown className="w-6 h-6 text-red-600" />
                  )}
                  {trendType === "stability" && (
                    <Target className="w-6 h-6 text-blue-600" />
                  )}
                  {trendType} Vocabulary
                </h3>

                {trendType === "stability" ? (
                  <Card className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          Verbs
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(
                            categories as {
                              verbs: string[];
                              nouns: string[];
                              examples: string[];
                            }
                          ).verbs.map((verb) => (
                            <Badge key={verb} variant="outline">
                              {verb}
                            </Badge>
                          ))}
                        </div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          Nouns
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(
                            categories as {
                              verbs: string[];
                              nouns: string[];
                              examples: string[];
                            }
                          ).nouns.map((noun) => (
                            <Badge key={noun} variant="outline">
                              {noun}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          Examples
                        </h4>
                        <div className="space-y-2">
                          {(
                            categories as {
                              verbs: string[];
                              nouns: string[];
                              examples: string[];
                            }
                          ).examples.map((example, i) => (
                            <div
                              key={i}
                              className="text-sm bg-blue-50 p-2 rounded italic"
                            >
                              "{example}"
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {Object.entries(
                      categories as {
                        gentle: {
                          verbs: string[];
                          nouns: string[];
                          examples: string[];
                        };
                        sharp: {
                          verbs: string[];
                          nouns: string[];
                          examples: string[];
                        };
                      }
                    ).map(([intensity, words]) => (
                      <Card key={intensity} className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                          {intensity} {trendType}
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-700 mb-2">
                              Verbs
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {words.verbs.map((verb) => (
                                <Badge key={verb} variant="outline">
                                  {verb}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-700 mb-2">
                              Nouns
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {words.nouns.map((noun) => (
                                <Badge key={noun} variant="outline">
                                  {noun}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-700 mb-2">
                              Examples
                            </h5>
                            <div className="space-y-1">
                              {words.examples.map((example, i) => (
                                <div
                                  key={i}
                                  className="text-sm bg-gray-50 p-2 rounded italic"
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
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Degree of Change - Enhanced */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-600" />
            Degree of Change Vocabulary
          </h2>

          <div className="space-y-6">
            {degreeAdverbs.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{item.meaning}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.adverbs.map((adverb) => (
                        <Badge key={adverb} variant="outline">
                          {adverb}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Usage Examples
                    </h4>
                    <div className="space-y-2">
                      {item.examples.map((example, i) => (
                        <div
                          key={i}
                          className="text-sm bg-yellow-50 p-3 rounded italic border-l-4 border-yellow-400"
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

        <AdInContent />

        {/* Data Description */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-indigo-600" />
            Data Description Vocabulary
          </h2>

          <div className="space-y-6">
            {dataDescriptionVocab.map((category, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.words.map((word) => (
                        <Badge key={word} variant="outline">
                          {word}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Examples in Context
                    </h4>
                    <div className="space-y-2">
                      {category.examples.map((example, i) => (
                        <div
                          key={i}
                          className="text-sm bg-indigo-50 p-3 rounded italic"
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

        {/* Comparison Structures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-green-600" />
            Comparison & Contrast Structures
          </h2>

          <div className="space-y-6">
            {comparisonStructures.map((type, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {type.type}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {type.structures.map((structure) => (
                        <Badge key={structure} variant="outline">
                          {structure}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Usage Examples
                    </h4>
                    <div className="space-y-2">
                      {type.examples.map((example, i) => (
                        <div
                          key={i}
                          className="text-sm bg-green-50 p-3 rounded italic"
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

        {/* Time Expressions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Clock className="w-8 h-8 text-orange-600" />
            Time Expressions & Periods
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Time Periods
              </h3>
              <div className="space-y-4">
                {timeExpressions.periods.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-orange-700 mb-2">
                      {item.expression}
                    </h4>
                    <div className="space-y-1">
                      {item.examples.map((example, i) => (
                        <div
                          key={i}
                          className="text-sm bg-orange-50 p-2 rounded"
                        >
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specific Time References
              </h3>
              <div className="space-y-4">
                {timeExpressions.specific.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-orange-700 mb-2">
                      {item.expression}
                    </h4>
                    <div className="space-y-1">
                      {item.examples.map((example, i) => (
                        <div
                          key={i}
                          className="text-sm bg-orange-50 p-2 rounded"
                        >
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Extreme Points */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-red-600" />
            Highest & Lowest Points
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(extremePoints).map(([type, data]) => (
              <Card key={type} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize flex items-center gap-2">
                  {type === "highest" ? (
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-blue-600" />
                  )}
                  {type} Points
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Verbs</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.verbs.map((verb) => (
                        <Badge key={verb} variant="outline">
                          {verb}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Nouns</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.nouns.map((noun) => (
                        <Badge key={noun} variant="outline">
                          {noun}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Examples</h4>
                    <div className="space-y-2">
                      {data.examples.map((example, i) => (
                        <div
                          key={i}
                          className={`text-sm p-3 rounded italic ${
                            type === "highest" ? "bg-red-50" : "bg-blue-50"
                          }`}
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

        {/* Fluctuation Vocabulary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Activity className="w-8 h-8 text-purple-600" />
            Fluctuation & Variation Vocabulary
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {fluctuationVocab.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {item.type}
                </h3>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {item.words.map((word) => (
                      <Badge key={word} variant="outline">
                        {word}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Examples</h4>
                  <div className="space-y-2">
                    {item.examples.map((example, i) => (
                      <div
                        key={i}
                        className="text-sm bg-purple-50 p-3 rounded italic"
                      >
                        "{example}"
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Linking Phrases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Link2 className="w-8 h-8 text-blue-600" />
            Linking Words & Phrases
          </h2>

          <div className="space-y-6">
            {linkingPhrases.map((category, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {category.purpose}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.phrases.map((phrase) => (
                        <Badge key={phrase} variant="outline">
                          {phrase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Usage Examples
                    </h4>
                    <div className="space-y-2">
                      {category.examples.map((example, i) => (
                        <div key={i} className="text-sm bg-blue-50 p-3 rounded">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Chart-Specific Vocabulary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-green-600" />
            Chart-Specific Vocabulary
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-green-600" />
                Maps Vocabulary
              </h3>
              <div className="space-y-4">
                {Object.entries(chartSpecificVocab.maps)
                  .slice(0, -1)
                  .map(([type, words]) => (
                    <div key={type}>
                      <h4 className="font-medium text-gray-700 mb-2 capitalize">
                        {type}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {words.map((word) => (
                          <Badge
                            key={word}
                            variant="outline"
                            className="text-xs"
                          >
                            {word}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Examples</h4>
                  <div className="space-y-1">
                    {chartSpecificVocab.maps.examples.map((example, i) => (
                      <div
                        key={i}
                        className="text-sm bg-green-50 p-2 rounded italic"
                      >
                        "{example}"
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6 text-blue-600" />
                Process Diagrams
              </h3>
              <div className="space-y-4">
                {Object.entries(chartSpecificVocab.processes)
                  .slice(0, -1)
                  .map(([type, words]) => (
                    <div key={type}>
                      <h4 className="font-medium text-gray-700 mb-2 capitalize">
                        {type}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {words.map((word) => (
                          <Badge
                            key={word}
                            variant="outline"
                            className="text-xs"
                          >
                            {word}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Examples</h4>
                  <div className="space-y-1">
                    {chartSpecificVocab.processes.examples.map((example, i) => (
                      <div
                        key={i}
                        className="text-sm bg-blue-50 p-2 rounded italic"
                      >
                        "{example}"
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Percentage Vocabulary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <PieChart className="w-8 h-8 text-indigo-600" />
            Percentage & Proportion Vocabulary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {percentageVocabulary.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="text-center mb-4">
                  <Badge variant="success" className="text-lg px-4 py-2">
                    {item.percentage}
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Alternative Expressions
                    </h4>
                    <div className="space-y-1">
                      {item.expressions.map((expr, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="block text-center"
                        >
                          {expr}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded">
                    <p className="text-sm text-indigo-800 italic">
                      "{item.example}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Advanced Vocabulary Replacements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-purple-600" />
            Advanced Vocabulary Replacements
          </h2>

          <div className="space-y-4">
            {advancedVocabulary.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                    <h4 className="font-medium text-red-700 mb-1">Basic</h4>
                    <p className="text-sm text-red-800">"{item.basic}"</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <h4 className="font-medium text-green-700 mb-1">
                      Advanced
                    </h4>
                    <p className="text-sm text-green-800 font-medium">
                      "{item.advanced}"
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                    <h4 className="font-medium text-blue-700 mb-1">Meaning</h4>
                    <p className="text-sm text-blue-800">{item.meaning}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                    <h4 className="font-medium text-purple-700 mb-1">
                      Example
                    </h4>
                    <p className="text-sm text-purple-800 italic">
                      "{item.example}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Vocabulary Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            {commonMistakes.map((mistake, index) => (
              <Card key={index} className="p-6 border-l-4 border-red-400">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">
                      {mistake.mistake}
                    </h4>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <h5 className="font-medium text-red-700 mb-1">Wrong</h5>
                    <p className="text-sm text-red-800 italic">
                      "{mistake.wrong}"
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-medium text-green-700 mb-1">Correct</h5>
                    <p className="text-sm text-green-800 italic">
                      "{mistake.correct}"
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-medium text-blue-700 mb-1">Tip</h5>
                    <p className="text-sm text-blue-800">{mistake.tip}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Action Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Master Task 1 Vocabulary Step by Step
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Practice using these vocabulary categories systematically. Start
              with introduction and overview, then master trend description and
              comparisons. Focus on accuracy before complexity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/writing/task1-academic">
                  Practice with Sample Tasks
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/tips">Writing Strategies</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/vocabulary/task-2">Task 2 Vocabulary</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
