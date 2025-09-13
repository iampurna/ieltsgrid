import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Landmark,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Scale,
  Users,
  Globe2,
  BotIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Politics & Governance Vocabulary for IELTS Speaking | Government & Democracy Terms",
  description:
    "Master politics and governance vocabulary for IELTS Speaking. Learn advanced terms like democracy, public policy, human rights with examples for Band 7-9.",
  keywords: [
    "IELTS politics vocabulary",
    "democracy IELTS",
    "public policy vocabulary",
    "human rights IELTS",
    "governance vocabulary",
    "Band 7-9 political terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Democracy",
    definition:
      "A system of government where citizens have the power to choose their representatives through free and fair elections, allowing them to participate in decision-making.",
    example:
      "Democracy allows citizens to participate in decision-making through voting and peaceful political expression.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Democratic system", "Popular government"],
    pronunciation: "/dɪˈmɑkrəsi/",
  },
  {
    term: "Public Policy",
    definition:
      "Government decisions and actions designed to address public issues and improve citizens' lives, including laws, regulations, and programs.",
    example:
      "Effective public policy can reduce crime rates and improve education quality in local communities.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Government policy", "Administrative decisions"],
    pronunciation: "/ˈpʌblɪk ˈpɑləsi/",
  },
  {
    term: "Human Rights",
    definition:
      "Fundamental rights and freedoms that belong to every person, which must be protected and addressed by international organizations and governments.",
    example:
      "Human rights violations must be addressed by global organizations to ensure equality and justice worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Civil rights", "Fundamental freedoms"],
    pronunciation: "/ˈhjumən raɪts/",
  },
  {
    term: "International Relations",
    definition:
      "The study and practice of relationships between countries, including diplomacy, trade agreements, and cooperation on global issues.",
    example:
      "Good international relations are essential for trade and security cooperation between neighboring countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Diplomatic relations", "Foreign affairs"],
    pronunciation: "/ˌɪntərˈnæʃənəl rɪˈleɪʃənz/",
  },
  {
    term: "Corruption",
    definition:
      "Dishonest or fraudulent conduct by those in power, typically involving bribery, which undermines trust in government institutions.",
    example:
      "Corruption undermines trust in government institutions and prevents effective delivery of public services.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Political misconduct", "Government fraud"],
    pronunciation: "/kəˈrʌpʃən/",
  },
  {
    term: "Freedom of Speech",
    definition:
      "The right to express opinions and ideas without fear of government retaliation, censorship, or legal sanction, fundamental in democratic societies.",
    example:
      "Freedom of speech is fundamental in a democratic society and must be protected from government censorship.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Free expression", "Speech rights"],
    pronunciation: "/ˈfridəm ʌv spitʃ/",
  },
  {
    term: "Adhere to",
    definition:
      "To follow or stick to rules, policies, or agreements closely and consistently.",
    example:
      "Political parties must adhere to campaign finance regulations during election periods.",
    partOfSpeech: "Phrasal verb",
    difficulty: "Advanced",
    synonyms: ["Follow", "Comply with", "Stick to"],
    pronunciation: "/ædˈhɪr tu/",
  },
  {
    term: "Austerity",
    definition:
      "Government policy of reducing public spending and cutting services to reduce budget deficits.",
    example:
      "The government implemented austerity measures to control national debt, affecting public services.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Budget cuts", "Economic restraint", "Fiscal tightening"],
    pronunciation: "/ɔˈstɛrəti/",
  },
  {
    term: "Budget",
    definition:
      "A government's plan for spending public money and raising revenue through taxes and other sources.",
    example:
      "The finance minister presented the annual budget showing increased spending on healthcare and education.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Financial plan", "Spending plan", "Fiscal plan"],
    pronunciation: "/ˈbʌdʒət/",
  },
  {
    term: "Campaign",
    definition:
      "To organize activities and events to win support for a political candidate or cause during elections.",
    example:
      "Politicians campaign extensively before elections to convince voters to support their policies.",
    partOfSpeech: "Verb",
    difficulty: "Intermediate",
    synonyms: ["Canvass", "Promote", "Advocate"],
    pronunciation: "/kæmˈpeɪn/",
  },
  {
    term: "Corruption",
    definition:
      "Dishonest or illegal behavior by people in positions of power, often involving bribery or abuse of office.",
    example:
      "The investigation revealed widespread corruption among government officials who accepted illegal payments.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Misconduct", "Dishonesty", "Graft"],
    pronunciation: "/kəˈrʌpʃən/",
  },
  {
    term: "Fiscal Deficit",
    definition:
      "The situation when a government spends more money than it receives in revenue, creating a budget shortfall.",
    example:
      "The country's fiscal deficit has grown significantly due to increased spending on infrastructure projects.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Budget deficit", "Financial shortfall", "Revenue gap"],
    pronunciation: "/ˈfɪskəl ˈdɛfəsət/",
  },
  {
    term: "Democracy",
    definition:
      "A system of government where citizens choose their representatives through free and fair elections.",
    example:
      "Democracy requires active citizen participation and respect for opposing political viewpoints.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Democratic system", "Popular government", "Republic"],
    pronunciation: "/dɪˈmɑkrəsi/",
  },
  {
    term: "Evasive",
    definition:
      "Avoiding giving direct answers to questions, especially when discussing controversial political issues.",
    example:
      "The politician was evasive when asked about tax increases, refusing to give a clear position.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Elusive", "Indirect", "Ambiguous"],
    pronunciation: "/ɪˈveɪsɪv/",
  },
  {
    term: "Funding",
    definition:
      "Money provided by government or organizations to support specific programs, projects, or activities.",
    example:
      "The government increased funding for renewable energy research to combat climate change.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Financial support", "Investment", "Budget allocation"],
    pronunciation: "/ˈfʌndɪŋ/",
  },
  {
    term: "Impeach",
    definition:
      "To formally charge a government official with serious wrongdoing while in office, potentially leading to removal.",
    example:
      "Parliament voted to impeach the president following allegations of constitutional violations.",
    partOfSpeech: "Verb",
    difficulty: "Advanced",
    synonyms: ["Remove from office", "Charge", "Accuse"],
    pronunciation: "/ɪmˈpitʃ/",
  },
  {
    term: "Left-wing",
    definition:
      "Political views that support progressive social policies, government intervention, and economic equality.",
    example:
      "Left-wing parties typically advocate for higher taxes on wealthy individuals to fund social programs.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Liberal", "Progressive", "Socialist"],
    pronunciation: "/lɛft wɪŋ/",
  },
  {
    term: "Legislation",
    definition:
      "Laws or rules created by government bodies such as parliament or congress.",
    example:
      "The new environmental legislation requires companies to reduce carbon emissions by 30 percent.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Laws", "Statutes", "Regulations"],
    pronunciation: "/ˌlɛdʒəsˈleɪʃən/",
  },
  {
    term: "Lobbying",
    definition:
      "The practice of attempting to influence politicians and government decisions on behalf of particular interests or causes.",
    example:
      "Environmental groups are lobbying for stricter regulations on industrial pollution.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Political influence", "Advocacy", "Pressure"],
    pronunciation: "/ˈlɑbiɪŋ/",
  },
  {
    term: "Lobbyists",
    definition:
      "People who are paid to influence politicians and government officials on behalf of particular organizations or causes.",
    example:
      "Corporate lobbyists often have significant access to government ministers and senior officials.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Political advocates", "Influence agents", "Representatives"],
    pronunciation: "/ˈlɑbiəsts/",
  },
  {
    term: "Mandate",
    definition:
      "The authority given to a government by voters to implement specific policies or make particular changes.",
    example:
      "The party claimed they had a mandate to reform healthcare after winning a large electoral majority.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Authority", "Permission", "Commission"],
    pronunciation: "/ˈmændeɪt/",
  },
  {
    term: "Party",
    definition:
      "An organized political group with similar beliefs and policies that compete in elections.",
    example:
      "The ruling party faces strong opposition from several smaller parties in the upcoming election.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Political organization", "Political group", "Movement"],
    pronunciation: "/ˈpɑrti/",
  },
  {
    term: "Populism",
    definition:
      "Political approach that appeals to ordinary people's concerns and often opposes established political elites.",
    example:
      "Populism has gained support among voters who feel disconnected from traditional political institutions.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Popular politics",
      "Anti-establishment politics",
      "People's movement",
    ],
    pronunciation: "/ˈpɑpjəˌlɪzəm/",
  },
  {
    term: "Populist",
    definition:
      "A politician or political movement that claims to represent ordinary people against established elites.",
    example:
      "The populist candidate gained support by promising to fight corruption and reduce inequality.",
    partOfSpeech: "Noun/Adjective",
    difficulty: "Advanced",
    synonyms: [
      "People's politician",
      "Anti-establishment figure",
      "Popular leader",
    ],
    pronunciation: "/ˈpɑpjəlɪst/",
  },
  {
    term: "Reform",
    definition:
      "Changes made to improve a political, legal, or social system and make it more effective or fair.",
    example:
      "Educational reform is needed to ensure all children have access to quality schooling.",
    partOfSpeech: "Noun/Verb",
    difficulty: "Intermediate",
    synonyms: ["Improvement", "Change", "Modification"],
    pronunciation: "/rɪˈfɔrm/",
  },
  {
    term: "Right-wing",
    definition:
      "Political views that support traditional values, free markets, and limited government intervention in the economy.",
    example:
      "Right-wing parties often advocate for lower taxes and reduced government spending on social programs.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Conservative", "Traditional", "Free-market"],
    pronunciation: "/raɪt wɪŋ/",
  },
  {
    term: "Think-tank",
    definition:
      "An organization that conducts research and provides advice on political, economic, or social issues.",
    example:
      "Government ministers often consult think-tanks when developing new policies on complex issues.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Research institute", "Policy institute", "Advisory body"],
    pronunciation: "/θɪŋk tæŋk/",
  },
  {
    term: "Trustworthy",
    definition:
      "Describing politicians or institutions that can be relied upon to act honestly and keep their promises.",
    example:
      "Voters are looking for trustworthy candidates who will deliver on their campaign promises.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Reliable", "Honest", "Dependable"],
    pronunciation: "/ˈtrʌstˌwɜrði/",
  },
  {
    term: "Transparent",
    definition:
      "Open and honest about government actions, decisions, and processes so citizens can understand and monitor them.",
    example:
      "Democratic governments should be transparent about how they spend taxpayers' money.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Open", "Clear", "Accountable"],
    pronunciation: "/trænsˈpɛrənt/",
  },
  {
    term: "Stop-gap",
    definition:
      "A temporary solution or measure used until a permanent solution can be implemented.",
    example:
      "The emergency funding was only a stop-gap measure until comprehensive healthcare reform could be passed.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Temporary fix", "Interim solution", "Short-term measure"],
    pronunciation: "/stɑp gæp/",
  },
  {
    term: "Allocate Resources to",
    definition:
      "To distribute money, personnel, or materials to specific government programs or departments.",
    example:
      "The government decided to allocate more resources to education and healthcare sectors.",
    partOfSpeech: "Verb phrase",
    difficulty: "Advanced",
    synonyms: ["Assign funds to", "Distribute to", "Provide for"],
    pronunciation: "/ˈæləˌkeɪt rɪˈsɔrsəz tu/",
  },
  {
    term: "Come into Force",
    definition:
      "When a law or regulation officially becomes effective and must be followed.",
    example:
      "The new immigration laws will come into force next January after parliamentary approval.",
    partOfSpeech: "Verb phrase",
    difficulty: "Advanced",
    synonyms: ["Take effect", "Become law", "Be implemented"],
    pronunciation: "/kʌm ˈɪntu fɔrs/",
  },
  {
    term: "Commit Political Suicide",
    definition:
      "To take actions that will likely end one's political career or damage one's party significantly.",
    example:
      "Supporting the unpopular tax increase would be committing political suicide before the election.",
    partOfSpeech: "Verb phrase",
    difficulty: "Advanced",
    synonyms: [
      "End political career",
      "Political self-destruction",
      "Career-ending move",
    ],
    pronunciation: "/kəˈmɪt pəˈlɪtəkəl ˈsuəˌsaɪd/",
  },
  {
    term: "Come Down on",
    definition:
      "To criticize or punish someone severely, often used in political contexts.",
    example:
      "The opposition came down hard on the government's handling of the economic crisis.",
    partOfSpeech: "Phrasal verb",
    difficulty: "Intermediate",
    synonyms: ["Criticize harshly", "Attack", "Condemn"],
    pronunciation: "/kʌm daʊn ɑn/",
  },
  {
    term: "Crack Down",
    definition:
      "To take strict action to stop illegal or undesirable activities.",
    example:
      "The government promised to crack down on tax evasion and corporate fraud.",
    partOfSpeech: "Phrasal verb",
    difficulty: "Intermediate",
    synonyms: ["Take strict action", "Enforce strictly", "Suppress"],
    pronunciation: "/kræk daʊn/",
  },
  {
    term: "Elect a Government Body",
    definition:
      "To choose representatives for parliament, congress, or other official governing institutions through voting.",
    example:
      "Citizens will elect a new government body in the upcoming parliamentary elections.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Vote in representatives",
      "Choose government",
      "Select officials",
    ],
    pronunciation: "/ɪˈlɛkt ə ˈgʌvərnmənt ˈbɑdi/",
  },
  {
    term: "Hard-liner",
    definition:
      "A politician who holds extreme or uncompromising positions on political issues.",
    example:
      "The hard-liner faction within the party opposes any compromise on immigration policy.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Extremist", "Uncompromising politician", "Radical"],
    pronunciation: "/hɑrd ˈlaɪnər/",
  },
  {
    term: "Pursue a Policy",
    definition:
      "To actively implement and continue with a particular course of action or strategy.",
    example:
      "The government will pursue a policy of economic growth through infrastructure investment.",
    partOfSpeech: "Verb phrase",
    difficulty: "Advanced",
    synonyms: ["Follow a strategy", "Implement policy", "Carry out plan"],
    pronunciation: "/pərˈsu ə ˈpɑləsi/",
  },
  {
    term: "Run for Office",
    definition:
      "To be a candidate in an election for a political position such as mayor, governor, or president.",
    example:
      "She decided to run for office after working as a community organizer for several years.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Stand for election", "Campaign for position", "Seek office"],
    pronunciation: "/rʌn fɔr ˈɔfəs/",
  },
  {
    term: "Shape Policy",
    definition:
      "To influence the development and direction of government policies and decisions.",
    example:
      "Interest groups attempt to shape policy by providing expertise and lobbying government officials.",
    partOfSpeech: "Verb phrase",
    difficulty: "Advanced",
    synonyms: ["Influence policy", "Guide decisions", "Direct strategy"],
    pronunciation: "/ʃeɪp ˈpɑləsi/",
  },
  {
    term: "Stand Down",
    definition:
      "To resign from a political position or withdraw from a political role.",
    example:
      "The minister agreed to stand down following the corruption scandal.",
    partOfSpeech: "Phrasal verb",
    difficulty: "Intermediate",
    synonyms: ["Resign", "Step down", "Withdraw"],
    pronunciation: "/stænd daʊn/",
  },
  {
    term: "Stand For",
    definition:
      "To be a candidate in an election, or to represent particular principles or values.",
    example:
      "She will stand for parliament in the next election on a platform of environmental protection.",
    partOfSpeech: "Phrasal verb",
    difficulty: "Intermediate",
    synonyms: ["Run for", "Represent", "Advocate"],
    pronunciation: "/stænd fɔr/",
  },
  {
    term: "Impose Spending Cuts",
    definition:
      "To force reductions in government expenditure, often to reduce budget deficits.",
    example:
      "The finance minister was forced to impose spending cuts on education and healthcare budgets.",
    partOfSpeech: "Verb phrase",
    difficulty: "Advanced",
    synonyms: ["Enforce budget cuts", "Reduce spending", "Cut expenditure"],
    pronunciation: "/ɪmˈpoʊz ˈspɛndɪŋ kʌts/",
  },
  {
    term: "Topple Government",
    definition:
      "To bring down or overthrow a government through political means such as votes of no confidence.",
    example:
      "The opposition parties united to topple the government after the economic crisis.",
    partOfSpeech: "Verb phrase",
    difficulty: "Advanced",
    synonyms: [
      "Overthrow government",
      "Bring down administration",
      "Remove from power",
    ],
    pronunciation: "/ˈtɑpəl ˈgʌvərnmənt/",
  },
  {
    term: "Windfall Tax",
    definition:
      "A special tax imposed on companies that have made unexpected large profits, often during economic crises.",
    example:
      "The government introduced a windfall tax on energy companies who profited during the fuel shortage.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Excess profits tax", "Special levy", "Extraordinary tax"],
    pronunciation: "/ˈwɪndˌfɔl tæks/",
  },
  {
    term: "Coalition Government",
    definition:
      "A government formed by two or more political parties working together when no single party has a majority.",
    example:
      "The coalition government struggled to agree on key policies due to ideological differences between the parties.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Joint government",
      "Multi-party government",
      "Alliance government",
    ],
    pronunciation: "/ˌkoʊəˈlɪʃən ˈgʌvərnmənt/",
  },
  {
    term: "Opposition",
    definition:
      "Political parties that are not in power and work to challenge and scrutinize government policies.",
    example:
      "The opposition criticized the government's economic policies during the parliamentary debate.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: [
      "Political rivals",
      "Non-governing parties",
      "Alternative government",
    ],
    pronunciation: "/ˌɑpəˈzɪʃən/",
  },
];

const relatedTopics = [
  {
    id: "society-culture",
    title: "Society & Culture",
    description:
      "Explore how political systems affect society and cultural development",
    icon: "🏛️",
  },
  {
    id: "global-issues",
    title: "Global Issues",
    description:
      "Learn about international cooperation and global governance challenges",
    icon: "🌍",
  },
];

const studyTips = [
  {
    tip: "Stay Neutral",
    description:
      "Discuss political concepts objectively without expressing strong personal political opinions or biases.",
    icon: CheckCircle,
  },
  {
    tip: "Compare Systems",
    description:
      "Compare different government systems, democratic processes, or policy approaches between countries.",
    icon: Lightbulb,
  },
  {
    tip: "Current Examples",
    description:
      "Reference international news, treaties, or global cooperation examples to support your points.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "What do you think makes a good leader?",
    tips: "Discuss 'democracy', 'public policy' skills, and commitment to 'human rights'.",
  },
  {
    question: "How should countries work together?",
    tips: "Use 'international relations', cooperation on global issues, and diplomatic solutions.",
  },
  {
    question: "What are the problems with government?",
    tips: "Address 'corruption', lack of 'freedom of speech', or ineffective 'public policy'.",
  },
  {
    question: "Do you think voting is important?",
    tips: "Emphasize 'democracy', citizen participation, and government accountability.",
  },
];

export default function PoliticsGovernanceVocabularyPage() {
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
      <section className="bg-gradient-to-r from-gray-600 to-slate-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Landmark className="w-16 h-16 mx-auto mb-6 text-gray-200" />
            <h1 className="text-4xl font-bold mb-4">
              Politics & Governance Vocabulary
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Advanced politics and governance vocabulary for IELTS Speaking
              Band 7-9. Master terms related to democracy, public policy, human
              rights, and international relations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                6 Political Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Government Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Global Affairs
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
              Politics & Governance Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>6 terms</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-gray-600 h-2 rounded-full"
              style={{ width: "58.33%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 7 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search political terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
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
                          <BotIcon className="w-6 h-6 text-gray-600" />
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
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-gray-800 italic">"{vocab.example}"</p>
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
            Common IELTS Politics Questions
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
            Using Political Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{tip.tip}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Important Notice */}
        <section className="mb-12 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <h2 className="text-xl font-bold text-yellow-800 mb-3">
            Important IELTS Speaking Tip
          </h2>
          <p className="text-yellow-700">
            When discussing political topics in IELTS Speaking, remain objective
            and avoid expressing strong personal political opinions. Focus on
            describing systems, processes, and general principles rather than
            taking partisan positions. This shows mature thinking and helps you
            avoid potential bias from examiners.
          </p>
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
                    <div className="text-3xl">{topic.icon}</div>
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
              <Link href="/speaking/vocabulary/economy-work">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Economy & Work
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/science-innovation">
                Next: Science & Innovation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-gray-600 to-slate-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Practice Government Topics
          </h2>
          <p className="text-gray-100 mb-6">
            Political and governance topics appear frequently in IELTS Part 3.
            Practice discussing leadership, government systems, and
            international cooperation objectively.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/speaking/part-3">Practice Part 3 Questions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-green hover:bg-white/10"
              asChild
            >
              <Link href="/speaking/vocabulary/science-innovation">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
