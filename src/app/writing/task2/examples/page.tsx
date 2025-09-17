import { Metadata } from "next";
import Link from "next/link";
import {
  Edit,
  MessageSquare,
  Scale,
  Lightbulb,
  Settings,
  TrendingUp,
  Users,
  ArrowLeft,
  Eye,
  Award,
  Clock,
  FileText,
  CheckCircle,
  Download,
  BookOpen,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdInContent from "@/components/ads/AdInContent";

export const metadata: Metadata = {
  title: "IELTS Task 2 Examples | Band 8+ Essay Samples with Analysis",
  description:
    "Study high-scoring IELTS Task 2 sample essays with detailed examiner analysis for opinion, discussion, advantage/disadvantage, and problem/solution essays.",
  keywords: [
    "IELTS Task 2 Examples",
    "Band 8 Task 2 Essays",
    "Essay Writing Samples",
    "IELTS Sample Essays",
    "Task 2 Band 9",
    "Opinion Essay Examples",
  ],
};

const examples = [
  {
    id: 1,
    title: "Remote Work vs Office Work",
    type: "Opinion Essay",
    icon: MessageSquare,
    band: "Band 8.5",
    difficulty: "Intermediate",
    color: "blue",
    wordCount: 298,
    timeSpent: "38 minutes",
    question:
      "Some people believe that working from home is more beneficial than working in an office. To what extent do you agree or disagree?",
    keyFeatures: [
      "Clear thesis statement and position",
      "Well-developed arguments with examples",
      "Natural use of opinion vocabulary",
      "Strong conclusion with recommendations",
    ],
    examinerComments:
      "Excellent task response with clear position throughout. Good range of ideas with adequate support. Minor errors in complex structures don't impede communication. Natural and appropriate language use.",
    sampleAnswer: `In recent years, the debate between remote work and traditional office employment has intensified, particularly following global workplace transformations. While both arrangements offer distinct advantages, I strongly believe that working from home provides superior benefits for both employees and organizations.

The primary advantage of remote work lies in its enhancement of work-life balance. Employees can eliminate lengthy commutes, allowing more time for personal activities and family responsibilities. For instance, a parent working from home can attend their child's school events without requesting time off, leading to reduced stress and increased job satisfaction. Additionally, the flexibility to create personalized work environments often results in higher productivity levels, as individuals can optimize their workspace according to their preferences and working styles.

However, critics argue that office work facilitates better collaboration and professional development. Face-to-face interactions can indeed foster spontaneous discussions and mentor-mentee relationships that might not occur naturally in virtual settings. Nevertheless, technological advances have largely bridged this gap through video conferencing, collaborative platforms, and digital communication tools that maintain team cohesion effectively.

Furthermore, remote work offers substantial cost benefits for both parties. Companies can reduce overhead expenses related to office space, utilities, and equipment, while employees save money on transportation, work attire, and daily meals. These financial advantages, combined with access to global talent pools unrestricted by geographical limitations, make remote work increasingly attractive to forward-thinking organizations.

In conclusion, despite some valid concerns regarding collaboration, the benefits of remote work significantly outweigh its drawbacks. The enhanced work-life balance, increased productivity, and cost-effectiveness make home-based employment the preferable option for modern professionals.`,
  },
  {
    id: 2,
    title: "Traditional vs Online Education",
    type: "Discussion Essay",
    icon: Scale,
    band: "Band 9",
    difficulty: "Advanced",
    color: "green",
    wordCount: 312,
    timeSpent: "37 minutes",
    question:
      "Some people think traditional classroom learning is more effective, while others believe online education is superior. Discuss both views and give your opinion.",
    keyFeatures: [
      "Balanced discussion of both perspectives",
      "Sophisticated vocabulary usage",
      "Complex sentence structures",
      "Well-reasoned personal opinion",
    ],
    examinerComments:
      "Outstanding response demonstrating full understanding of task requirements. Sophisticated language use with natural progression. All aspects addressed comprehensively with well-developed arguments.",
    sampleAnswer: `The educational landscape has undergone dramatic transformation with the advent of digital learning platforms, sparking considerable debate about the relative merits of traditional classroom instruction versus online education. Both approaches possess distinct advantages that cater to different learning styles and circumstances.

Proponents of traditional classroom learning emphasize the irreplaceable value of face-to-face interaction between instructors and students. The immediate feedback mechanism allows teachers to gauge student comprehension through non-verbal cues and adjust their teaching methods accordingly. Moreover, the structured environment promotes discipline and social skills development, as students learn to collaborate, debate, and communicate effectively with peers. The hands-on approach, particularly valuable in subjects requiring practical application such as laboratory sciences or art, cannot be adequately replicated in virtual settings.

Conversely, advocates of online education highlight its unprecedented accessibility and flexibility. Digital platforms democratize learning by removing geographical barriers, enabling students from remote areas to access quality education previously unavailable to them. The self-paced nature of online courses accommodates diverse schedules and learning speeds, particularly benefiting working professionals and adult learners. Additionally, multimedia resources, interactive simulations, and personalized learning algorithms can enhance engagement and retention rates significantly.

However, online education faces challenges including reduced social interaction and potential technology-related distractions. Students may struggle with motivation and time management without the external structure provided by traditional classrooms.

In my opinion, the most effective educational approach combines elements from both methodologies. A hybrid model leveraging technology's convenience while maintaining essential human connections would optimize learning outcomes. The future of education lies not in choosing sides but in thoughtfully integrating these complementary approaches.`,
  },
  {
    id: 3,
    title: "Social Media Impact on Society",
    type: "Advantage/Disadvantage",
    icon: TrendingUp,
    band: "Band 8",
    difficulty: "Intermediate",
    color: "purple",
    wordCount: 287,
    timeSpent: "39 minutes",
    question:
      "Social media platforms have become increasingly popular. What are the advantages and disadvantages of this trend?",
    keyFeatures: [
      "Balanced coverage of advantages and disadvantages",
      "Relevant real-world examples",
      "Clear paragraph organization",
      "Objective analytical tone",
    ],
    examinerComments:
      "Well-organized response addressing all parts of the task. Good development of ideas with appropriate examples. Generally accurate language with good control of complex structures.",
    sampleAnswer: `Social media platforms have revolutionized communication and information sharing, becoming integral to modern society. While these digital networks offer numerous benefits, they also present significant challenges that warrant careful consideration.

The advantages of social media are multifaceted and far-reaching. Primarily, these platforms facilitate unprecedented global connectivity, enabling individuals to maintain relationships across vast distances and cultural boundaries. Families separated by migration can share daily experiences through photos and videos, while professionals can network internationally, expanding career opportunities. Furthermore, social media serves as a powerful tool for information dissemination, allowing news and educational content to reach massive audiences instantly. During natural disasters or emergencies, these networks provide crucial communication channels when traditional infrastructure fails.

Additionally, social media has democratized content creation and entrepreneurship. Small businesses can market products directly to consumers without substantial advertising budgets, while creative individuals can showcase talents and build audiences organically. The rise of influencer marketing and social commerce has created entirely new economic opportunities.

However, the disadvantages are equally significant. Privacy concerns top the list, as personal information is often harvested and monetized by platform operators. Mental health issues, particularly among young users, have been linked to social comparison and cyberbullying prevalent on these networks. The spread of misinformation and fake news has also become a serious societal problem, influencing political processes and public health decisions negatively.

Moreover, excessive social media use can lead to addiction-like behaviors, reducing face-to-face interactions and affecting productivity. The constant stream of notifications creates a culture of distraction that impacts concentration and deep thinking abilities.

In conclusion, while social media offers valuable connectivity and opportunities, its negative impacts on privacy, mental health, and information integrity cannot be ignored.`,
  },
  {
    id: 4,
    title: "Urban Traffic Congestion Solutions",
    type: "Problem/Solution",
    icon: Lightbulb,
    band: "Band 8.5",
    difficulty: "Advanced",
    color: "orange",
    wordCount: 295,
    timeSpent: "38 minutes",
    question:
      "Traffic congestion is becoming a serious problem in many cities worldwide. What are the main causes of this issue and what solutions can you suggest?",
    keyFeatures: [
      "Clear identification of multiple causes",
      "Practical and feasible solutions",
      "Logical cause-solution connections",
      "Strong analytical approach",
    ],
    examinerComments:
      "Comprehensive response with well-identified problems and realistic solutions. Good use of linking devices and appropriate vocabulary. Strong task achievement with logical development throughout.",
    sampleAnswer: `Traffic congestion has emerged as one of the most pressing urban challenges of the 21st century, significantly impacting quality of life and economic productivity in cities worldwide. Understanding the root causes is essential for developing effective solutions to this complex problem.

The primary causes of traffic congestion are multifaceted. Rapid urbanization has concentrated populations in city centers while infrastructure development has failed to keep pace with this growth. The increasing affordability of private vehicles, coupled with inadequate public transportation systems, has resulted in a disproportionate number of cars on roads originally designed for smaller traffic volumes. Additionally, poor urban planning has created residential areas far from commercial centers, forcing lengthy commutes and contributing to peak-hour gridlock.

Furthermore, the lack of alternative transportation options, such as cycling infrastructure or efficient rail networks, leaves commuters with limited choices beyond private vehicles. Economic growth has also increased freight transportation, with delivery trucks competing for road space with passenger vehicles.

Several practical solutions can address these issues effectively. Governments should invest heavily in public transportation infrastructure, including subway systems, bus rapid transit, and light rail networks that provide reliable alternatives to private car ownership. Implementing congestion pricing, similar to London's successful model, can discourage unnecessary vehicle use during peak hours while generating revenue for transportation improvements.

Urban planning reforms should promote mixed-use developments that reduce commuting distances by integrating residential, commercial, and office spaces. Additionally, encouraging flexible working arrangements, including remote work and staggered office hours, can distribute traffic flow more evenly throughout the day.

Ultimately, solving traffic congestion requires coordinated efforts combining infrastructure investment, policy reform, and behavioral change initiatives to create sustainable urban mobility systems.`,
  },
  {
    id: 5,
    title: "Aging Population Challenges",
    type: "Cause/Effect",
    icon: Settings,
    band: "Band 8",
    difficulty: "Advanced",
    color: "red",
    wordCount: 289,
    timeSpent: "39 minutes",
    question:
      "Many developed countries are experiencing aging populations. What are the causes of this trend and what effects might it have on society?",
    keyFeatures: [
      "Clear cause-effect relationships",
      "Multiple interconnected causes",
      "Comprehensive effect analysis",
      "Sophisticated vocabulary usage",
    ],
    examinerComments:
      "Well-structured response with clear causal relationships identified. Good development of both causes and effects with appropriate examples. Language is generally accurate with good range of vocabulary.",
    sampleAnswer: `Population aging has become a defining demographic trend in developed nations, fundamentally altering social and economic structures. This phenomenon stems from several interconnected factors and carries profound implications for future societal development.

The primary causes of population aging are rooted in significant lifestyle and medical advances. Improved healthcare systems, better nutrition, and enhanced living standards have dramatically increased life expectancy, with many developed countries now boasting average lifespans exceeding 80 years. Simultaneously, declining birth rates, attributed to career-focused lifestyles, higher education costs, and changing family priorities, have reduced the proportion of young people in the population. Women's increased participation in the workforce and delayed childbearing have contributed to smaller family sizes, while access to effective contraception has enabled greater reproductive control.

Economic prosperity has also played a role, as financial security reduces the traditional incentive for larger families to provide elder care and economic support. Additionally, urbanization has shifted family structures from extended to nuclear arrangements, often resulting in fewer children per household.

The effects of this demographic shift are far-reaching and multifaceted. Economically, aging populations strain public pension systems and healthcare services, as fewer working-age individuals support increasing numbers of retirees. Labor shortages may emerge in certain sectors, potentially slowing economic growth and innovation. Healthcare costs will inevitably rise as age-related conditions become more prevalent, requiring substantial government investment in medical infrastructure and services.

Socially, traditional family support systems face pressure as smaller families struggle to care for elderly relatives. However, positive effects include the accumulation of wisdom and experience within communities, and potential growth in senior-focused industries and services.

Consequently, governments must adapt policies to address these demographic realities through immigration, retirement age adjustments, and innovative elder care solutions.`,
  },
  {
    id: 6,
    title: "Environmental Protection vs Economic Growth",
    type: "Discussion Essay",
    icon: Scale,
    band: "Band 8.5",
    difficulty: "Advanced",
    color: "green",
    wordCount: 301,
    timeSpent: "37 minutes",
    question:
      "Some people believe environmental protection should be the top priority, even if it slows economic growth. Others think economic development is more important. Discuss both views and give your opinion.",
    keyFeatures: [
      "Sophisticated argument development",
      "Balance between competing viewpoints",
      "Strong use of examples and evidence",
      "Clear personal stance with justification",
    ],
    examinerComments:
      "Excellent response demonstrating sophisticated understanding of complex issues. Well-balanced discussion with strong personal opinion. Natural language use with wide vocabulary range and complex structures.",
    sampleAnswer: `The tension between environmental conservation and economic advancement represents one of the most complex dilemmas facing modern society. Both perspectives carry compelling arguments that reflect fundamentally different priorities and time horizons for human welfare and prosperity.

Environmental advocates argue that ecological protection must take precedence over short-term economic gains, emphasizing the irreversible consequences of environmental degradation. Climate change, biodiversity loss, and pollution pose existential threats that could render economic prosperity meaningless if left unchecked. The catastrophic effects witnessed in recent decades—from devastating wildfires to unprecedented flooding—demonstrate that environmental collapse ultimately undermines economic stability. Countries like Costa Rica have successfully proven that prioritizing conservation can attract sustainable tourism and renewable energy investments, creating long-term economic benefits while preserving natural heritage.

Conversely, proponents of economic development contend that prosperity enables environmental protection by providing resources for cleaner technologies and conservation initiatives. They argue that impoverished populations cannot prioritize environmental concerns when struggling for basic survival. Historical examples show that wealthier nations typically maintain cleaner environments than developing countries, suggesting economic growth facilitates environmental improvement. Furthermore, technological innovation driven by economic competition has produced cleaner energy sources, more efficient manufacturing processes, and pollution control systems.

However, this perspective risks overlooking the finite nature of natural resources and the potentially irreversible tipping points in ecological systems. Short-term economic gains may result in long-term costs that far exceed immediate benefits.

In my opinion, sustainable development offers the most viable path forward. Rather than viewing environmental protection and economic growth as mutually exclusive, society must pursue models that integrate both objectives. Green technologies, circular economy principles, and sustainable business practices demonstrate that environmental stewardship can drive innovation and create economic opportunities while preserving planetary resources for future generations.`,
  },
  {
    id: 7,
    title: "Technology's Impact on Employment",
    type: "Mixed Question",
    icon: Users,
    band: "Band 9",
    difficulty: "Advanced",
    color: "indigo",
    wordCount: 318,
    timeSpent: "36 minutes",
    question:
      "Automation and artificial intelligence are changing the job market. What are the causes of this trend, what effects might it have, and what solutions can help workers adapt?",
    keyFeatures: [
      "Complex multi-part question handling",
      "Comprehensive cause-effect-solution analysis",
      "Sophisticated vocabulary and structures",
      "Seamless paragraph transitions",
    ],
    examinerComments:
      "Outstanding response demonstrating exceptional ability to handle complex, multi-part questions. Sophisticated language use with natural progression. All aspects comprehensively addressed with well-developed arguments and practical solutions.",
    sampleAnswer: `The rapid advancement of automation and artificial intelligence represents a transformative force reshaping global employment landscapes. This technological revolution stems from multiple catalysts and carries profound implications for workers worldwide, necessitating comprehensive adaptive strategies.

The primary drivers of workplace automation include exponential improvements in computing power, machine learning algorithms, and robotics technology. Economic pressures compel businesses to reduce labor costs and increase efficiency through technological solutions, particularly in repetitive or dangerous tasks. The COVID-19 pandemic accelerated this trend as companies sought contactless operations and reduced dependency on human workers. Additionally, venture capital investment in AI startups has reached unprecedented levels, fueling rapid development and deployment of automated systems across industries.

The effects of this technological shift are multifaceted and far-reaching. Traditional manufacturing, customer service, and administrative roles face displacement as machines become capable of performing complex tasks previously requiring human intelligence. However, this transformation simultaneously creates new employment categories in AI development, data analysis, and human-machine interface design. Income inequality may intensify as high-skilled workers benefit from technological complementarity while low-skilled positions become obsolete. Economic disruption could lead to social unrest if transition processes are not managed effectively.

Nevertheless, several solutions can facilitate successful adaptation to this evolving landscape. Governments must invest substantially in reskilling and upskilling programs, focusing on uniquely human capabilities such as creativity, emotional intelligence, and complex problem-solving. Educational institutions should reform curricula to emphasize critical thinking, adaptability, and technological literacy from early ages. Universal Basic Income pilots could provide economic security during transition periods, allowing workers to retrain without financial distress.

Furthermore, public-private partnerships should promote lifelong learning initiatives and create portable benefit systems that support career flexibility. Companies bear responsibility for retraining displaced workers and investing in human capital development.

Ultimately, successfully navigating this technological transition requires coordinated efforts from governments, businesses, and individuals to ensure that technological progress enhances rather than undermines human prosperity and dignity.`,
  },
];

const analysisPoints = [
  {
    title: "Task Response",
    description:
      "How completely does the essay address all parts of the question?",
    points: [
      "Clear position on the topic throughout",
      "All parts of the question addressed",
      "Ideas relevant and well-developed",
      "Appropriate length (250+ words)",
    ],
  },
  {
    title: "Coherence & Cohesion",
    description: "How well is the essay organized and connected?",
    points: [
      "Clear overall progression",
      "Effective paragraphing",
      "Appropriate linking devices",
      "Logical sequence of ideas",
    ],
  },
  {
    title: "Lexical Resource",
    description: "How effectively is vocabulary used?",
    points: [
      "Wide range of vocabulary",
      "Natural and appropriate usage",
      "Accurate word formation",
      "Some less common items attempted",
    ],
  },
  {
    title: "Grammatical Range & Accuracy",
    description: "How well are grammatical structures used?",
    points: [
      "Wide range of structures",
      "Majority of sentences error-free",
      "Good control of complex grammar",
      "Errors don't impede communication",
    ],
  },
];

export default function Task2ExamplesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link href="/writing/task2" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Task 2
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Eye className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-5xl font-bold mb-4">Task 2 Sample Essays</h1>
            <p className="text-xl text-purple-100 mb-8">
              Study high-scoring sample essays with detailed examiner analysis
              for all Task 2 question types
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                7 Band 8+ Examples
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                All Essay Types
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
            How Sample Essays Are Evaluated
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

        {/* Sample Essays */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Band 8+ Sample Essays
          </h2>

          <div className="space-y-12">
            {examples.map((example, index) => (
              <Card key={example.id} className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-${example.color}-100 rounded-full flex items-center justify-center`}
                    >
                      <example.icon
                        className={`w-6 h-6 text-${example.color}-600`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant="success"
                          className="bg-white text-gray-800"
                        >
                          {example.band}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          {example.type}
                        </Badge>
                        <Badge
                          variant={
                            example.difficulty === "Advanced"
                              ? "warning"
                              : "success"
                          }
                          className="text-sm"
                        >
                          {example.difficulty}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {example.title}
                      </h3>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Question:
                    </h4>
                    <p className="text-blue-700 italic">"{example.question}"</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <FileText className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium">Words</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">
                        {example.wordCount}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium">Time</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">
                        {example.timeSpent}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Award className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium">Band</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">
                        {example.band.replace("Band ", "")}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <Button size="sm" variant="outline" className="w-full">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Essay Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Edit className="w-5 h-5 text-purple-600" />
                      <h4 className="text-lg font-semibold text-gray-900">
                        Sample Essay
                      </h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 font-serif text-sm leading-relaxed">
                      <div className="whitespace-pre-line text-gray-800">
                        {example.sampleAnswer}
                      </div>
                    </div>
                  </div>

                  {/* Analysis */}
                  <div>
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

                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Examiner Comments:
                      </h4>
                      <p className="text-sm text-green-700">
                        {example.examinerComments}
                      </p>
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Analyze Structure
              </h3>
              <p className="text-gray-600 text-sm">
                Study how each essay follows the question requirements and
                maintains clear paragraph structure. Notice thesis development
                and conclusion techniques.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Extract Language
              </h3>
              <p className="text-gray-600 text-sm">
                Identify sophisticated vocabulary, linking phrases, and
                grammatical structures. Note how ideas are expressed and
                arguments are developed.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Practice Application
              </h3>
              <p className="text-gray-600 text-sm">
                Use these structures and techniques in your own writing.
                Practice similar topics and try to match the level of
                development and sophistication.
              </p>
            </Card>
          </div>
        </section>

        {/* Action Section */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Practice?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Now that you've studied high-scoring examples, practice with our
              comprehensive question bank covering all Task 2 essay types and
              topics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/writing/task2/all-questions">
                  Practice Questions
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing/vocabulary/task-2">Study Vocabulary</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
