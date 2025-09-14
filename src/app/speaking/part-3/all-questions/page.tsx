// src/app/speaking/part-3/all-questions/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  List,
  ArrowLeft,
  Users,
  GraduationCap,
  Globe,
  Lightbulb,
  Building,
  Heart,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "IELTS Speaking Part 3: Complete Discussion Questions | All Topics A-Z",
  description:
    "Comprehensive list of all IELTS Speaking Part 3 discussion questions organized by categories. Practice abstract discussions on society, education, technology, and more.",
  keywords: [
    "IELTS Speaking Part 3 Questions",
    "Discussion Questions Bank",
    "Abstract Speaking Topics",
    "Two-way Discussion Practice",
    "Complete IELTS Part 3 Guide",
  ],
};

const allDiscussionQuestions = [
  {
    category: "Society & Culture",
    id: "society-culture",
    icon: Users,
    color: "bg-blue-100 text-blue-700",
    topics: [
      {
        title: "Social Media & Its Influence",
        questions: [
          "How has social media changed the way people communicate?",
          "Do you think social media has more positive or negative effects on society?",
          "How do different age groups use social media differently?",
          "What impact has social media had on traditional advertising?",
          "How do you think social media will evolve in the future?",
          "Do you think governments should regulate social media more strictly?",
        ],
      },
      {
        title: "Cultural Heritage & Traditions",
        questions: [
          "Why is it important to preserve cultural traditions?",
          "How has globalization affected local cultures?",
          "What role should governments play in protecting cultural heritage?",
          "Do you think younger generations are losing interest in traditional culture?",
          "How can countries maintain their cultural identity in a globalized world?",
          "What are the benefits and drawbacks of cultural exchange?",
        ],
      },
      {
        title: "Generational Changes",
        questions: [
          "What are the main differences between older and younger generations today?",
          "Why do generational gaps seem to be increasing?",
          "How do different generations approach technology differently?",
          "What can older and younger generations learn from each other?",
          "Do you think the generation gap will continue to widen in the future?",
          "How have family relationships changed over the generations?",
        ],
      },
      {
        title: "City Life vs Rural Life",
        questions: [
          "What are the main advantages and disadvantages of living in cities?",
          "Why are more people moving to urban areas?",
          "How does rural life differ from city life in terms of quality of life?",
          "What problems does rapid urbanization create?",
          "How can governments make cities more livable?",
          "Do you think the trend toward urbanization will continue?",
        ],
      },
      {
        title: "Community & Relationships",
        questions: [
          "How have community relationships changed in modern society?",
          "What factors contribute to strong communities?",
          "Why do some people feel isolated in modern society?",
          "How has technology affected human relationships?",
          "What role does social media play in building or destroying communities?",
          "How can societies foster better community spirit?",
        ],
      },
      {
        title: "Work-Life Balance",
        questions: [
          "How has the concept of work-life balance changed over time?",
          "Why is work-life balance becoming more important to people?",
          "What factors make it difficult to achieve work-life balance?",
          "How do different cultures approach work-life balance?",
          "What impact does poor work-life balance have on society?",
          "How might working patterns change in the future?",
        ],
      },
    ],
  },
  {
    category: "Education & Learning",
    id: "education-learning",
    icon: GraduationCap,
    color: "bg-green-100 text-green-700",
    topics: [
      {
        title: "Education Systems & Methods",
        questions: [
          "What makes an education system effective?",
          "How should education systems adapt to prepare students for the future?",
          "What are the advantages and disadvantages of standardized testing?",
          "Should education focus more on practical skills or academic knowledge?",
          "How do different teaching methods affect student learning?",
          "What role should creativity play in education?",
        ],
      },
      {
        title: "Online vs Traditional Learning",
        questions: [
          "How has online learning changed education?",
          "What are the benefits and drawbacks of online education?",
          "Do you think online learning can fully replace traditional classroom learning?",
          "How does online learning affect student interaction and social skills?",
          "What types of subjects are best suited for online learning?",
          "How might education delivery change in the future?",
        ],
      },
      {
        title: "Value of Education",
        questions: [
          "Why is education considered important in society?",
          "How does education contribute to economic development?",
          "What is the relationship between education and social equality?",
          "Should higher education be free for everyone?",
          "How does education affect personal development?",
          "What are the consequences of lack of access to education?",
        ],
      },
      {
        title: "Skills & Personal Development",
        questions: [
          "What skills are most important for success in the modern world?",
          "How can educational institutions better develop soft skills?",
          "What is the importance of emotional intelligence in education?",
          "Should schools teach practical life skills alongside academic subjects?",
          "How can students develop critical thinking abilities?",
          "What role does failure play in learning and development?",
        ],
      },
      {
        title: "Continuous Learning",
        questions: [
          "Why is lifelong learning becoming more important?",
          "How can people maintain motivation for continuous learning?",
          "What are the barriers to lifelong learning?",
          "How has technology made learning more accessible?",
          "What responsibility do employers have for employee development?",
          "How might learning needs change as people age?",
        ],
      },
      {
        title: "Creativity in Education",
        questions: [
          "How important is creativity in education?",
          "Do traditional education systems stifle creativity?",
          "How can schools better foster creative thinking?",
          "What is the relationship between creativity and academic achievement?",
          "Should arts education be given equal importance to science and math?",
          "How can creativity be measured and assessed?",
        ],
      },
    ],
  },
  {
    category: "Technology & Media",
    id: "technology-media",
    icon: Globe,
    color: "bg-purple-100 text-purple-700",
    topics: [
      {
        title: "Impact of Technology",
        questions: [
          "How has technology changed the way we live and work?",
          "What are the most significant technological advances of recent years?",
          "Do you think technology has made life better or more complicated?",
          "How has technology affected human communication and relationships?",
          "What are the negative consequences of our dependence on technology?",
          "How can society manage the rapid pace of technological change?",
        ],
      },
      {
        title: "Internet & Communication",
        questions: [
          "How has the internet changed global communication?",
          "What are the advantages and disadvantages of instant communication?",
          "How has the internet affected access to information?",
          "What impact does the internet have on traditional media?",
          "How can people evaluate the reliability of online information?",
          "What are the implications of the digital divide in society?",
        ],
      },
      {
        title: "Privacy in Digital Age",
        questions: [
          "How important is privacy in the digital age?",
          "What are the main threats to personal privacy online?",
          "Should governments have access to citizens' digital data?",
          "How can individuals protect their privacy online?",
          "What responsibility do tech companies have for user privacy?",
          "How might privacy concerns evolve in the future?",
        ],
      },
      {
        title: "AI & Automation",
        questions: [
          "How is artificial intelligence changing different industries?",
          "What are the potential benefits and risks of AI development?",
          "How might automation affect employment in the future?",
          "Should there be limits on AI development and use?",
          "How can society prepare for increased automation?",
          "What ethical considerations surround AI development?",
        ],
      },
      {
        title: "Traditional vs Digital Media",
        questions: [
          "How has digital media changed the news industry?",
          "What are the advantages of traditional media over digital media?",
          "How has the way people consume news changed?",
          "What impact does social media have on journalism?",
          "How can people distinguish between reliable and unreliable news sources?",
          "What is the future of traditional media formats?",
        ],
      },
      {
        title: "Future of Technology",
        questions: [
          "What technological developments do you expect to see in the next decade?",
          "How might virtual and augmented reality change daily life?",
          "What role will technology play in solving global problems?",
          "How can societies ensure technology benefits everyone equally?",
          "What new challenges might emerge from future technologies?",
          "How should education systems prepare people for technological change?",
        ],
      },
    ],
  },
  {
    category: "Environment & Sustainability",
    id: "environment-sustainability",
    icon: Lightbulb,
    color: "bg-green-100 text-green-700",
    topics: [
      {
        title: "Climate Change & Global Warming",
        questions: [
          "What are the main causes of climate change?",
          "How serious is the threat of global warming?",
          "What can individuals do to combat climate change?",
          "What role should governments play in addressing climate change?",
          "How can countries cooperate to tackle global environmental problems?",
          "What are the potential consequences if climate change continues unchecked?",
        ],
      },
      {
        title: "Environmental Conservation",
        questions: [
          "Why is environmental conservation important?",
          "What are the most effective ways to protect natural habitats?",
          "How can economic development be balanced with environmental protection?",
          "What role do international organizations play in environmental conservation?",
          "How can communities be encouraged to participate in conservation efforts?",
          "What are the consequences of biodiversity loss?",
        ],
      },
      {
        title: "Sustainable Living",
        questions: [
          "What does sustainable living mean to you?",
          "How can individuals adopt more sustainable lifestyles?",
          "What are the barriers to sustainable living?",
          "How can governments promote sustainable practices?",
          "What role do businesses play in sustainability?",
          "How might sustainable living become more mainstream?",
        ],
      },
      {
        title: "Pollution & Solutions",
        questions: [
          "What are the main types of pollution affecting the world today?",
          "How can air pollution in cities be reduced?",
          "What are the most effective solutions to plastic pollution?",
          "How does pollution affect human health and wellbeing?",
          "What role does industry play in environmental pollution?",
          "How can technology help solve pollution problems?",
        ],
      },
      {
        title: "Energy & Resources",
        questions: [
          "Why is renewable energy important for the future?",
          "What are the challenges of transitioning to renewable energy?",
          "How can countries reduce their dependence on fossil fuels?",
          "What role does nuclear energy play in the energy mix?",
          "How can energy consumption be reduced in daily life?",
          "What are the economic implications of the shift to clean energy?",
        ],
      },
      {
        title: "Green Cities & Planning",
        questions: [
          "What makes a city environmentally friendly?",
          "How can urban planning contribute to sustainability?",
          "What are the benefits of green spaces in cities?",
          "How can public transportation help create greener cities?",
          "What role does architecture play in sustainable urban development?",
          "How can cities adapt to climate change?",
        ],
      },
    ],
  },
  {
    category: "Business & Economy",
    id: "business-economy",
    icon: Building,
    color: "bg-orange-100 text-orange-700",
    topics: [
      {
        title: "Globalization & International Trade",
        questions: [
          "What are the benefits and drawbacks of globalization?",
          "How has globalization affected local businesses and cultures?",
          "What impact does international trade have on developing countries?",
          "How can countries protect their domestic industries while remaining competitive globally?",
          "What are the environmental implications of global trade?",
          "How might globalization evolve in the future?",
        ],
      },
      {
        title: "Shopping & Consumer Culture",
        questions: [
          "How have shopping habits changed in recent years?",
          "What drives consumer behavior and purchasing decisions?",
          "How has online shopping affected traditional retail?",
          "What are the environmental impacts of consumer culture?",
          "How can consumers make more ethical purchasing choices?",
          "What role does advertising play in shaping consumer behavior?",
        ],
      },
      {
        title: "Business & Entrepreneurship",
        questions: [
          "What qualities make a successful entrepreneur?",
          "How has technology changed the business landscape?",
          "What challenges do small businesses face in today's economy?",
          "How important is innovation for business success?",
          "What role do startups play in economic development?",
          "How can governments support entrepreneurship and business growth?",
        ],
      },
      {
        title: "Economic Growth & Development",
        questions: [
          "What factors contribute to a country's economic development?",
          "How can developing countries achieve sustainable economic growth?",
          "What is the relationship between economic growth and environmental protection?",
          "How do education and technology contribute to economic development?",
          "What role does international aid play in economic development?",
          "How can economies become more resilient to global shocks?",
        ],
      },
      {
        title: "Advertising & Marketing",
        questions: [
          "How has digital technology changed advertising and marketing?",
          "What ethical considerations should guide advertising practices?",
          "How effective is traditional advertising compared to digital marketing?",
          "What impact does advertising have on children and young people?",
          "How can consumers protect themselves from misleading advertising?",
          "What role does influencer marketing play in modern advertising?",
        ],
      },
      {
        title: "Modern Workplace",
        questions: [
          "How has the modern workplace evolved in recent years?",
          "What are the benefits and challenges of remote working?",
          "How important is job satisfaction compared to salary?",
          "What skills are most valuable in today's job market?",
          "How can companies create better work environments for employees?",
          "What changes do you expect to see in future workplaces?",
        ],
      },
    ],
  },
  {
    category: "Health & Lifestyle",
    id: "health-lifestyle",
    icon: Heart,
    color: "bg-red-100 text-red-700",
    topics: [
      {
        title: "Health & Fitness",
        questions: [
          "Why has health and fitness become more important to people?",
          "What are the main health challenges facing modern society?",
          "How can governments promote healthier lifestyles?",
          "What role does exercise play in maintaining good health?",
          "How has the fitness industry changed in recent years?",
          "What are the barriers that prevent people from maintaining healthy lifestyles?",
        ],
      },
      {
        title: "Mental Health & Stress",
        questions: [
          "Why are mental health issues becoming more common?",
          "What are the main causes of stress in modern life?",
          "How can society reduce the stigma around mental health?",
          "What role does work play in mental health problems?",
          "How can people better manage stress and anxiety?",
          "What support systems are most effective for mental health?",
        ],
      },
      {
        title: "Diet & Nutrition",
        questions: [
          "How have eating habits changed over the past few decades?",
          "What factors influence people's food choices?",
          "How can societies address problems related to unhealthy eating?",
          "What impact does fast food have on public health?",
          "How important is nutrition education in schools?",
          "What role should governments play in regulating food and nutrition?",
        ],
      },
      {
        title: "Healthcare & Medicine",
        questions: [
          "How can healthcare systems be improved?",
          "What are the advantages and disadvantages of private vs public healthcare?",
          "How has technology changed medical treatment and diagnosis?",
          "What are the challenges of providing healthcare in developing countries?",
          "How can preventive medicine reduce healthcare costs?",
          "What ethical issues arise in modern medicine?",
        ],
      },
      {
        title: "Sports & Physical Activity",
        questions: [
          "What benefits do sports provide to individuals and society?",
          "How can governments encourage more people to participate in sports?",
          "What is the relationship between professional sports and commercialization?",
          "How do sports contribute to international relations and diplomacy?",
          "What role should sports play in education?",
          "How has technology changed sports and athletic performance?",
        ],
      },
      {
        title: "Modern Lifestyle Issues",
        questions: [
          "What are the main health problems caused by modern lifestyles?",
          "How has technology affected people's physical and mental health?",
          "What impact does urbanization have on health and wellbeing?",
          "How can people maintain work-life balance in demanding careers?",
          "What role does social media play in lifestyle-related health issues?",
          "How might lifestyle trends change in the future?",
        ],
      },
    ],
  },
];

export default function AllPart3QuestionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link
              href="/speaking/part-3/topics"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Topics
            </Link>
          </Button>
        </div>
      </div>
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <List className="w-12 h-12 text-indigo-200" />
              <div>
                <h1 className="text-4xl font-bold">
                  Complete Discussion Questions
                </h1>
                <p className="text-indigo-100">
                  IELTS Speaking Part 3 - All Abstract Topics
                </p>
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
              Complete Discussion Question Bank
            </h2>
            <p className="text-gray-700 mb-4">
              This page contains all IELTS Speaking Part 3 discussion questions
              organized by the six main topic areas. These questions require
              analytical thinking, opinion expression, and abstract discussion
              skills beyond personal experience.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-3 rounded text-center">
                <div className="text-blue-600 font-semibold">
                  Society & Culture
                </div>
                <div className="text-sm text-gray-600">36 questions</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="text-green-600 font-semibold">Education</div>
                <div className="text-sm text-gray-600">36 questions</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="text-purple-600 font-semibold">Technology</div>
                <div className="text-sm text-gray-600">36 questions</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="text-green-600 font-semibold">Environment</div>
                <div className="text-sm text-gray-600">36 questions</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="text-orange-600 font-semibold">Business</div>
                <div className="text-sm text-gray-600">36 questions</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="text-red-600 font-semibold">Health</div>
                <div className="text-sm text-gray-600">36 questions</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
              <p className="text-sm text-gray-600">
                <strong>Study Tip:</strong> Practice 5-10 questions per day from
                different categories. Focus on developing extended responses
                with examples, reasons, and multiple perspectives. Time yourself
                and aim for 1-2 minute responses per question.
              </p>
            </div>
          </Card>
        </section>

        {/* Discussion Questions by Category */}
        <section className="mb-12">
          <div className="space-y-8">
            {allDiscussionQuestions.map((categoryData, categoryIndex) => {
              const IconComponent = categoryData.icon;
              return (
                <Card key={categoryIndex} className="p-6" id={categoryData.id}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${categoryData.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {categoryData.category}
                      </h2>
                      <Badge variant="secondary" size="sm">
                        {categoryData.topics.length} topic areas
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {categoryData.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="bg-gray-50 p-6 rounded border-l-4 border-indigo-400"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {topic.title}
                        </h3>

                        <div className="grid gap-3">
                          {topic.questions.map((question, questionIndex) => (
                            <div
                              key={questionIndex}
                              className="flex items-start gap-3 p-3 bg-white rounded border"
                            >
                              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded font-medium flex-shrink-0 mt-0.5">
                                Q{questionIndex + 1}
                              </span>
                              <p className="text-gray-800 font-medium">
                                {question}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Discussion Tip */}
                  <div className="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800">
                      <strong>
                        Discussion Tips for {categoryData.category}:
                      </strong>{" "}
                      {categoryData.category === "Society & Culture" &&
                        "Focus on comparing past and present, discussing different cultural perspectives, and analyzing social trends. Use examples from your own country and other countries you know about."}
                      {categoryData.category === "Education & Learning" &&
                        "Discuss different education systems, teaching methods, and learning approaches. Consider the perspectives of students, teachers, parents, and society. Compare traditional and modern approaches."}
                      {categoryData.category === "Technology & Media" &&
                        "Analyze both positive and negative impacts of technology. Discuss how technology changes society, work, and relationships. Speculate about future developments and their implications."}
                      {categoryData.category ===
                        "Environment & Sustainability" &&
                        "Discuss causes and solutions to environmental problems. Consider individual, community, government, and international perspectives. Balance economic and environmental concerns."}
                      {categoryData.category === "Business & Economy" &&
                        "Analyze economic trends and their social impacts. Discuss globalization effects, business ethics, and economic development. Consider different stakeholder perspectives."}
                      {categoryData.category === "Health & Lifestyle" &&
                        "Compare traditional and modern health approaches. Discuss prevention vs treatment, individual vs government responsibility. Consider physical, mental, and social aspects of health."}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Discussion Skills Guide */}
        <section className="mb-12">
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Approach Part 3 Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Response Structure:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Give a direct answer to the question</li>
                  <li>Provide 2-3 supporting reasons or examples</li>
                  <li>Consider different perspectives or opposing views</li>
                  <li>Make connections to broader social issues</li>
                  <li>Conclude with a personal evaluation or prediction</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Language Features:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Use complex sentence structures and linking words</li>
                  <li>Express opinions with appropriate hedging language</li>
                  <li>Compare and contrast using sophisticated language</li>
                  <li>Speculate about future developments</li>
                  <li>Use abstract and formal vocabulary appropriately</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        {/* <section>
          <Card className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready for Advanced Discussion Practice?
            </h2>
            <p className="text-gray-700 mb-6">
              Try our detailed topic pages with sample answers and advanced
              vocabulary, or continue with other parts of the IELTS Speaking
              test.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/speaking/part-3/social-media-influence">
                  Sample: Social Media Influence
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-3/technology-impact">
                  Sample: Technology Impact
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/part-3/education-systems">
                  Sample: Education Systems
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/speaking/mock-test">Take Full Mock Test</Link>
              </Button>
            </div>
          </Card>
        </section> */}
      </div>
    </div>
  );
}
