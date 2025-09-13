import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Search,
  BookOpen,
  Clock,
  Volume2,
  Lightbulb,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Economy & Work Vocabulary for IELTS Speaking | Business & Employment Terms",
  description:
    "Master economy and work vocabulary for IELTS Speaking. Learn advanced terms like globalization, entrepreneurship, remote working with examples for Band 7-9.",
  keywords: [
    "IELTS economy vocabulary",
    "globalization IELTS",
    "entrepreneurship vocabulary",
    "remote working IELTS",
    "work-life balance vocabulary",
    "Band 7-9 business terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Globalization",
    definition:
      "The process by which businesses and other organizations develop international influence or operate on an international scale, creating more business opportunities.",
    example:
      "Globalization has increased competition and created more business opportunities for companies worldwide.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["International integration", "Global expansion"],
    pronunciation: "/ˌgloʊbələˈzeɪʃən/",
  },
  {
    term: "Entrepreneurship",
    definition:
      "The activity of setting up a business or businesses, taking on financial risks in the hope of profit, and encouraging innovation and economic growth.",
    example:
      "Entrepreneurship encourages innovation and economic growth by creating new businesses and job opportunities.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Business innovation", "Startup culture"],
    pronunciation: "/ˌɑntrəprəˈnɜrʃɪp/",
  },
  {
    term: "Remote Working",
    definition:
      "The practice of working outside of a conventional office environment, typically from home or other locations, which has become more common since the pandemic.",
    example:
      "Remote working has become more common since the pandemic, changing traditional office dynamics permanently.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Teleworking", "Home-based work"],
    pronunciation: "/rɪˈmoʊt ˈwɜrkɪŋ/",
  },
  {
    term: "Work-life Balance",
    definition:
      "The equilibrium between time and effort spent on work and personal life, which is essential for mental well-being and overall life satisfaction.",
    example:
      "Maintaining a work-life balance is essential for mental well-being and preventing employee burnout.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Life-work harmony", "Personal-professional balance"],
    pronunciation: "/wɜrk laɪf ˈbæləns/",
  },
  {
    term: "Economic Downturn",
    definition:
      "A period of reduced economic activity, often leading to higher unemployment rates and decreased consumer spending.",
    example:
      "An economic downturn often leads to higher unemployment rates and reduced consumer confidence.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Recession", "Economic decline"],
    pronunciation: "/ˌikəˈnɑmɪk ˈdaʊnˌtɜrn/",
  },
  {
    term: "Productivity",
    definition:
      "The effectiveness of productive effort, especially in industry, measured in terms of the rate of output per unit of input.",
    example:
      "Investing in employee training can improve overall productivity and company performance significantly.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Efficiency", "Output effectiveness"],
    pronunciation: "/ˌproʊdʌkˈtɪvəti/",
  },
  {
    term: "Inflation",
    definition:
      "A general increase in prices and fall in the purchasing value of money, which reduces the purchasing power of ordinary citizens.",
    example:
      "High inflation reduces the purchasing power of ordinary citizens and affects their quality of life.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Price increase", "Currency devaluation"],
    pronunciation: "/ɪnˈfleɪʃən/",
  },

  // NEW VOCABULARY TERMS FROM PDF AND RESEARCH
  {
    term: "Sales Representative",
    definition:
      "Someone whose job is to sell a company's products, often by traveling to different places to meet potential clients.",
    example:
      "As a sales representative, I need to build strong relationships with customers to achieve our quarterly targets.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Sales agent", "Account manager"],
    pronunciation: "/seɪlz ˌrɛprɪˈzɛntətɪv/",
  },
  {
    term: "Vendor",
    definition:
      "A person or company that sells goods or services to other businesses or consumers.",
    example:
      "Our company works with many vendors to source high-quality materials for manufacturing.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Supplier", "Provider"],
    pronunciation: "/ˈvɛndər/",
  },
  {
    term: "Bottom Line",
    definition:
      "The final line in a company's accounts showing total profit or loss; the most important factor or consideration.",
    example:
      "The bottom line is that we need to reduce costs to remain profitable in this competitive market.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Net profit", "Final result"],
    pronunciation: "/ˈbɑtəm laɪn/",
  },
  {
    term: "Consumer",
    definition:
      "A person who buys goods or services for their own personal use rather than for business purposes.",
    example:
      "Modern consumers are increasingly conscious about environmental impact when making purchasing decisions.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Customer", "Buyer"],
    pronunciation: "/kənˈsumər/",
  },
  {
    term: "Household Name",
    definition:
      "A famous person, brand, or company that most people know about and recognize.",
    example:
      "Apple has become a household name through innovative products and effective marketing strategies.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Well-known brand", "Famous entity"],
    pronunciation: "/ˈhaʊsˌhoʊld neɪm/",
  },
  {
    term: "Luxury Goods",
    definition:
      "Expensive items such as jewelry, designer clothing, or high-end electronics that are pleasant to have but not necessary.",
    example:
      "The luxury goods market has shown resilience despite economic uncertainty in recent years.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Premium products", "High-end items"],
    pronunciation: "/ˈlʌkʃəri gʊdz/",
  },
  {
    term: "Hands-on Approach",
    definition:
      "A management style where someone becomes closely involved in organizing and making decisions rather than delegating.",
    example:
      "Our CEO takes a hands-on approach to management, regularly visiting different departments.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Direct involvement", "Active management"],
    pronunciation: "/hændz ɑn əˈproʊtʃ/",
  },
  {
    term: "Profitable",
    definition:
      "Making or likely to make a profit; financially beneficial or rewarding.",
    example:
      "Investing in renewable energy has proven to be profitable for many forward-thinking companies.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Lucrative", "Money-making"],
    pronunciation: "/ˈprɑfɪtəbəl/",
  },
  {
    term: "Short-sighted",
    definition:
      "Lacking foresight or consideration of future consequences; focused only on immediate benefits.",
    example:
      "Cutting the training budget was a short-sighted decision that reduced employee performance.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Myopic", "Narrow-minded"],
    pronunciation: "/ʃɔrt ˈsaɪtɪd/",
  },
  {
    term: "Up-and-coming",
    definition:
      "Likely to achieve success soon or in the near future; promising and developing rapidly.",
    example:
      "Many up-and-coming tech companies are focusing on artificial intelligence and machine learning.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Emerging", "Rising"],
    pronunciation: "/ʌp ænd ˈkʌmɪŋ/",
  },
  {
    term: "Bankruptcy",
    definition:
      "A legal situation where a business or person cannot pay their debts and must have their assets managed by a court.",
    example:
      "The company filed for bankruptcy after years of declining sales and mounting debt.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Insolvency", "Financial ruin"],
    pronunciation: "/ˈbæŋkrʌptsi/",
  },
  {
    term: "Budget",
    definition:
      "A plan showing how much money is available and how it will be spent over a specific period.",
    example:
      "We need to carefully manage our marketing budget to maximize return on investment.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Financial plan", "Allocation"],
    pronunciation: "/ˈbʌdʒɪt/",
  },
  {
    term: "Credit Rating",
    definition:
      "An assessment of someone's ability to repay borrowed money, affecting their access to loans.",
    example:
      "A good credit rating is essential for securing favorable terms on business loans.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Credit score", "Financial standing"],
    pronunciation: "/ˈkrɛdɪt ˈreɪtɪŋ/",
  },
  {
    term: "Distributor",
    definition:
      "A person or organization that supplies goods to shops and companies in a specific area.",
    example:
      "We work with local distributors to ensure our products reach customers efficiently.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Wholesaler", "Supplier"],
    pronunciation: "/dɪˈstrɪbjətər/",
  },
  {
    term: "Equity",
    definition:
      "The value of shares in a company; ownership interest in a business after debts are paid.",
    example:
      "Building equity in the company has been a long-term goal for our investment strategy.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Ownership stake", "Shareholding"],
    pronunciation: "/ˈɛkwɪti/",
  },
  {
    term: "Manufacturer",
    definition:
      "A company that produces goods in large quantities using machinery and standardized processes.",
    example:
      "As a leading manufacturer of electronics, we prioritize quality control and innovation.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Producer", "Factory owner"],
    pronunciation: "/ˌmænjəˈfæktʃərər/",
  },
  {
    term: "Online Retailer",
    definition:
      "A company that sells products and services through websites and digital platforms.",
    example:
      "Online retailers have revolutionized shopping by offering convenience and competitive prices.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["E-commerce business", "Digital merchant"],
    pronunciation: "/ˈɔnˌlaɪn ˈriteɪlər/",
  },
  {
    term: "Rebate",
    definition:
      "A partial refund to someone who has paid too much for goods, services, or taxes.",
    example:
      "The government offers rebates to encourage businesses to invest in renewable energy.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Refund", "Cashback"],
    pronunciation: "/ˈriˌbeɪt/",
  },
  {
    term: "Share",
    definition:
      "One of the equal parts that ownership of a company is divided into, which can be bought by investors.",
    example:
      "Investing in company shares can provide both dividend income and potential capital growth.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Stock", "Equity stake"],
    pronunciation: "/ʃɛr/",
  },
  {
    term: "Trade",
    definition:
      "The activity of buying and selling goods and services between people, companies, or countries.",
    example:
      "International trade has expanded significantly due to improved transportation and communication.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Commerce", "Business exchange"],
    pronunciation: "/treɪd/",
  },
  {
    term: "Marketing Campaign",
    definition:
      "A planned series of activities designed to promote a product, service, or brand to target customers.",
    example:
      "Our digital marketing campaign successfully increased brand awareness among young consumers.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Advertising campaign", "Promotional effort"],
    pronunciation: "/ˈmɑrkɪtɪŋ kæmˈpeɪn/",
  },
  {
    term: "Brand Loyalty",
    definition:
      "The tendency of consumers to continue buying the same brand's products over time.",
    example:
      "Building brand loyalty requires consistent quality and excellent customer service.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Customer loyalty", "Brand devotion"],
    pronunciation: "/brænd ˈlɔɪəlti/",
  },
  {
    term: "Market Share",
    definition:
      "The percentage of total sales in a market that is captured by a particular company.",
    example:
      "Our company aims to increase its market share by expanding into emerging economies.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Market position", "Sales proportion"],
    pronunciation: "/ˈmɑrkɪt ʃɛr/",
  },
  {
    term: "Supply Chain",
    definition:
      "The network of organizations, people, and activities involved in creating and delivering a product.",
    example:
      "Disruptions to the supply chain during the pandemic highlighted the need for diversification.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Distribution network", "Production chain"],
    pronunciation: "/səˈplaɪ tʃeɪn/",
  },
  {
    term: "Startup",
    definition:
      "A newly established business, typically innovative and focused on rapid growth.",
    example:
      "Many tech startups are developing solutions for climate change and sustainability.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["New business", "Emerging company"],
    pronunciation: "/ˈstɑrtˌʌp/",
  },
  {
    term: "Economic Boom",
    definition:
      "A period of rapid economic expansion characterized by increased production, employment, and consumer spending.",
    example:
      "The economic boom of the 1990s was driven by technological innovation and increased productivity.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Economic expansion", "Growth period"],
    pronunciation: "/ˌikəˈnɑmɪk bum/",
  },
  {
    term: "Recession",
    definition:
      "A period of economic decline characterized by reduced business activity, higher unemployment, and decreased consumer spending.",
    example:
      "The global recession of 2008 highlighted the interconnectedness of international financial markets.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Economic decline", "Downturn"],
    pronunciation: "/rɪˈsɛʃən/",
  },
  {
    term: "GDP (Gross Domestic Product)",
    definition:
      "The total monetary value of all finished goods and services produced within a country during a specific period.",
    example:
      "China's GDP has grown consistently over the past decade, making it the world's second-largest economy.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["National output", "Economic output"],
    pronunciation: "/ˌdʒi di ˈpi/",
  },
  {
    term: "Unemployment Rate",
    definition:
      "The percentage of the labor force that is unemployed but actively seeking employment.",
    example:
      "Government policies aim to reduce the unemployment rate through job creation programs.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Joblessness rate", "Employment deficit"],
    pronunciation: "/ˌʌnɪmˈplɔɪmənt reɪt/",
  },
  {
    term: "Interest Rate",
    definition:
      "The amount charged by lenders to borrowers for the use of money, expressed as a percentage.",
    example:
      "Central banks adjust interest rates to control inflation and stimulate economic growth.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Borrowing cost", "Lending rate"],
    pronunciation: "/ˈɪntrəst reɪt/",
  },
  {
    term: "Fair Trade",
    definition:
      "A trading system that ensures producers in developing countries receive fair prices and good working conditions.",
    example:
      "Many consumers prefer fair trade coffee because it supports sustainable farming practices.",
    partOfSpeech: "Noun/Adjective",
    difficulty: "Intermediate",
    synonyms: ["Ethical trade", "Sustainable commerce"],
    pronunciation: "/fɛr treɪd/",
  },
  {
    term: "Public Sector",
    definition:
      "The part of the economy controlled or owned by the government, including public services and institutions.",
    example:
      "Jobs in the public sector often offer more stability but may have lower salaries than private sector positions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Government sector", "State sector"],
    pronunciation: "/ˈpʌblɪk ˈsɛktər/",
  },
  {
    term: "Private Sector",
    definition:
      "The part of the economy run by private individuals and companies rather than by the government.",
    example:
      "Private sector innovation has been crucial in developing new technologies and services.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Commercial sector", "Business sector"],
    pronunciation: "/ˈpraɪvət ˈsɛktər/",
  },
  {
    term: "Stock Exchange",
    definition:
      "A marketplace where stocks, bonds, and other securities are bought and sold by investors.",
    example:
      "The New York Stock Exchange is one of the world's largest and most influential financial markets.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Securities market", "Financial market"],
    pronunciation: "/stɑk ɪksˈtʃeɪndʒ/",
  },
  {
    term: "Economic Crisis",
    definition:
      "A situation where the economy of a country experiences a sudden downturn in economic activity.",
    example:
      "The 2008 economic crisis led to widespread business failures and increased government intervention.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Financial crisis", "Economic emergency"],
    pronunciation: "/ˌikəˈnɑmɪk ˈkraɪsɪs/",
  },
  {
    term: "Competitive Advantage",
    definition:
      "A condition or circumstance that puts a company in a favorable position compared to its competitors.",
    example:
      "Our competitive advantage lies in our innovative technology and excellent customer service.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Market edge", "Strategic advantage"],
    pronunciation: "/kəmˈpɛtətɪv ədˈvæntɪdʒ/",
  },
  {
    term: "Corporate Social Responsibility",
    definition:
      "A business practice that involves companies taking responsibility for their impact on society and the environment.",
    example:
      "Corporate social responsibility has become increasingly important for building brand reputation.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["CSR", "Sustainable business practice"],
    pronunciation: "/ˈkɔrpərət ˈsoʊʃəl rɪˌspɑnsəˈbɪləti/",
  },
];

const relatedTopics = [
  {
    id: "society-culture",
    title: "Society & Culture",
    description:
      "Explore how work culture affects society and social structures",
  },
  {
    id: "global-issues",
    title: "Global Issues",
    description:
      "Learn about international economic challenges and development",
  },
];

const studyTips = [
  {
    tip: "Economic Trends",
    description:
      "Reference current trends like 'economic boom/recession', 'inflation' rates, 'GDP growth', and 'unemployment rate' changes in your country.",
  },
  {
    tip: "Business Examples",
    description:
      "Give specific examples of 'startups', 'household names', or local 'manufacturers' to make your answers more concrete and interesting.",
  },
  {
    tip: "Compare Sectors",
    description:
      "Discuss differences between 'public sector' vs 'private sector' employment, or traditional vs 'online retailers' to show analytical thinking.",
  },
  {
    tip: "Personal Experience",
    description:
      "Share examples from your own work experience, career aspirations, or observations about 'work-life balance' in your country.",
  },
  {
    tip: "Global Perspective",
    description:
      "Demonstrate awareness of 'globalization', 'supply chain' issues, 'fair trade' practices, and 'corporate social responsibility' trends.",
  },
];

const commonQuestions = [
  {
    question: "What job would you like to do in the future?",
    tips: "Use 'entrepreneurship', 'work-life balance', 'competitive advantage', and discuss 'startup' opportunities or 'public/private sector' preferences.",
  },
  {
    question: "How has work changed in recent years?",
    tips: "Discuss 'remote working', 'globalization' effects, 'supply chain' disruptions, and how 'online retailers' have changed business.",
  },
  {
    question: "What are the economic challenges in your country?",
    tips: "Address 'inflation', 'unemployment rate', 'economic downturn', 'GDP growth', and government policies affecting the 'public sector'.",
  },
  {
    question: "Do you think money is important?",
    tips: "Balance financial needs with 'work-life balance', discuss 'fair trade' principles, and personal vs. 'corporate social responsibility'.",
  },
  {
    question: "How important are small businesses?",
    tips: "Discuss their role in 'economic boom' periods, 'market share' competition with large corporations, and local 'supply chain' benefits.",
  },
  {
    question: "What makes a business successful?",
    tips: "Mention 'brand loyalty', 'competitive advantage', effective 'marketing campaigns', and maintaining good 'credit rating'.",
  },
  {
    question: "How has shopping changed?",
    tips: "Compare traditional stores with 'online retailers', discuss 'consumer' behavior changes, and impact on local 'distributors'.",
  },
  {
    question: "What's your opinion on luxury goods?",
    tips: "Discuss 'luxury goods' market trends, 'consumer' psychology, and how economic conditions affect spending on non-essential items.",
  },
];

export default function EconomyWorkVocabularyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link
              href="/speaking/vocabulary"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Vocabulary
            </Link>
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl font-bold mb-4">
              Economy & Work Vocabulary
            </h1>
            <p className="text-xl text-indigo-100 mb-6">
              Advanced economy and work vocabulary for IELTS Speaking Band 7-9.
              Master terms related to business, globalization, entrepreneurship,
              and work-life balance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                7 Business Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Economic Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Work Culture
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Progress and Stats */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Economy & Work Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>7 terms</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 6 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search business terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Vocabulary Terms */}
        <section className="mb-12">
          <div className="space-y-6">
            {vocabularyTerms.map((vocab, index) => {
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="space-y-4">
                    {/* Term Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold">
                            {vocab.term?.charAt(0) ?? ""}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {vocab.term}
                          </h3>
                          <Badge variant="primary" size="sm">
                            {vocab.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Volume2 className="w-4 h-4" />
                            {vocab.pronunciation}
                          </span>
                          <span>• {vocab.partOfSpeech}</span>
                        </div>
                      </div>
                    </div>

                    {/* Definition */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Definition:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {vocab.definition}
                      </p>
                    </div>

                    {/* Example */}
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                      <h4 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-indigo-800 italic">
                        "{vocab.example}"
                      </p>
                    </div>

                    {/* Synonyms */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Related Terms:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {vocab.synonyms.map((synonym, synIndex) => (
                          <Badge key={synIndex} variant="secondary" size="sm">
                            {synonym}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Common IELTS Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Common IELTS Work & Economy Questions
          </h2>
          <div className="space-y-4">
            {commonQuestions.map((q, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  "{q.question}"
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Vocabulary Strategy:</strong> {q.tips}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Using Business Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 mx-auto mb-4 flex items-center justify-center font-semibold">
                    {tip.tip?.charAt(0) ?? ""}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{tip.tip}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Related Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Related Vocabulary Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedTopics.map((topic, index) => (
              <Card key={index} hover className="p-6">
                <Link href={`/speaking/vocabulary/${topic.id}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl">
                      {topic.title?.charAt(0) ?? ""}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section>
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/speaking/vocabulary/society-culture">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Society & Culture
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/politics-governance">
                Next: Politics & Governance
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Practice Work & Economy Topics
          </h2>
          <p className="text-indigo-100 mb-6">
            Work and business topics are very common in IELTS Speaking. Practice
            discussing career goals, economic trends, and workplace changes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/speaking/part-1">Practice Part 1 Questions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-green hover:bg-white/10"
              asChild
            >
              <Link href="/speaking/vocabulary/politics-governance">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
